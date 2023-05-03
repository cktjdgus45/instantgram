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

export async function getMyPost(username: string) {
    const Query = `*[_type =="post"
    && author->username == "${username}"]
    {
      ${simplePostProjection}
    }`;
    return client.fetch(Query)
        .then(
            (posts: FullPost[]) =>
                posts.map((post: FullPost) => ({ ...post, image: urlFor(post.image) }))
        );
}
export async function getBookmarkedPost(username: string) {
    const Query = ` *[_type =="user"&&username == "${username}"][0]
    {
       "bookmarks" : bookmarks[]->{
        ${simplePostProjection}
       }
    }`;
    return client.fetch(Query)
        .then(
            (data) =>
                data['bookmarks'].map((bookmark: FullPost) => ({ ...bookmark, image: urlFor(bookmark.image) }))
        );
}
export async function getLikedPost(username: string) {
    const Query = `*[_type == "post" && "${username}" in likes[]->username]
                {
                    ${simplePostProjection}
                }`;
    return client.fetch(Query).then(
        (posts: FullPost[]) =>
            posts.map((post: FullPost) => ({ ...post, image: urlFor(post.image) }))
    );
}
