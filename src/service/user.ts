import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'mw0iosgf',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-04-20',
    token: 'skIts0irPRmDavyc4TQMCdLXQ0BfDp0Uq7TUlbaKOzsiuGv1aTJ1I1MWv5kjZmpOW133gVmre4nqNOZmBI62H1nffZsExS5FaxbW1sj1yHKKJHupOlSUcaOhejgElN35WjNjhz0DoZh8BAWqxenaifcpWHduI8bLJbzvPC3Uvh2kgOGqSZqD'
    // Only if you want to update content with the client
})

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
export async function getUserByFollowingName(followingName: string) {
    const Query = `*[
        _type == "post" 
        && author._ref in 
        *[_type=="user" && username=="${followingName}"]._id 
      ]{
        author->{username,image},
          photo{asset},
        likes[]->{_id},
          comments,
          _createdAt
      }`
    return client.fetch(Query);
}

