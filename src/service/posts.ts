import { FullPost } from './../model/post';
import { client, urlFor } from '../service/sanityClient';

const simplePostProjection = `
    ...,
    "username": author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "comments": comments[]{
        author->{"id":_id,username,"userImage":image}
        ,comment},
    "id":_id,
    "createdAt":_createdAt
`;

export async function getFollowingPostsOf(username: string) {
    return client
        .fetch(
            `*[_type =="post" && author->username == "${username}"
          || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
          | order(_createdAt desc){
          ${simplePostProjection}
        }`
        )
        .then((posts: FullPost[]) =>
            posts.map((post: FullPost) => ({ ...post, image: urlFor(post.image) }))
        );
}
