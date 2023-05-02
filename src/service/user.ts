import { client } from './sanityClient';

type OAuthUser = {
    id: string;
    name: string;
    username: string;
    email: string;
    image: string | null;
}

export async function addUser({ id, username, email, image, name }: OAuthUser) {
    return client.createIfNotExists({
        _id: id,
        _type: 'user',
        username,
        email,
        image,
        name,
        following: [],
        followers: [],
        bookmarks: [],
    });
}

export async function getFollowing(name: string) {
    const Query = `*[_type == 'user'&& name ==$name][0]{
        following[]->{username,image,_id}}
        `;
    const params = {
        name
    };
    const following = await client.fetch(Query, params);
    return following;
}
export async function getUserByName(name: string) {
    const Query = `*[_type == 'user'&& name == "${name}"][0]{
        ...,
        "id":_id,
        following[]->{username,image},
        followers[]->{username,image},
        "bookmarks":bookmarks[]->_id,
       }`;
    return client.fetch(Query);
}
export async function getUserByFollowingName(followingUsername: string) {
    const Query = `*[
        _type == "post" 
        && author._ref in 
        *[_type=="user" && username=="${followingUsername}"]._id 
      ]{
        author->{username,image},
          photo{asset},
        likes[]->{_id},
          comments,
          _createdAt
      }`
    return client.fetch(Query);
}

export async function getUsersByName(keyword: string) {
    const Query = `*[_type == 'user' && (name match "${keyword}" || username match "${keyword}" )]{
        "id":_id,
        name,
        username,
        image,
        "followings":count(following[]),
        "followers" : count(followers[]),
       }`;
    return client.fetch(Query);
}
export async function getUsers() {
    const Query = `*[_type == 'user']{
        "id":_id,
        name,
        username,
        image,
        "followings":count(following[]),
        "followers" : count(followers[]),
       }`;
    return client.fetch(Query);
}

export async function getPostUserByUsername(username: string, authUserEmail: string) {
    const Query = `*[_type == 'user' && username match '${username}'][0]{
        name,
        username,
        image,
        "following":count(following[]),
        "followers":count(followers[]),
        "isFollower" : "${authUserEmail}" in *[references(followers[]._ref)].email,
        "posts" : count(*[_type == 'post' && author->username =='anna' ])
       }`
    return client.fetch(Query);
}
