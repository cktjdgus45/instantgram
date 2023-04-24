import { client } from './sanityClient'

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

export async function getUser() {
    const posts = await client.fetch('*[_type == "user"]');
    return posts
}