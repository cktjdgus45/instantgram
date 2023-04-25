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

export async function getFollowing(id: string) {
    const Query = `*[_type == 'user'&& _id ==$id][0]{following[]->
        {username,image,_id}}`;
    const params = {
        id
    };
    const following = await client.fetch(Query, params);
    return following;
}
export async function getSignedUserId(name: string) {
    const Query = `*[_type == 'user'&& name == $name][0]{
        _id
       }`;
    const params = {
        name
    };
    const userId = await client.fetch(Query, params);
    return userId;
}