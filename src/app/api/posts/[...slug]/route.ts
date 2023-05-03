import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { getBookmarkedPost, getFollowingPostsOf, getLikedPost, getMyPost } from '@/service/posts';

type Context = {
    params: {
        slug: string[];
    }
}

export async function GET(_: NextRequest, context: Context) {
    const username = context.params.slug[0];
    const category = context.params.slug[1];
    switch (category) {
        case 'posts':
            return getMyPost(username).then((data) => NextResponse.json(data));
        case 'saved':
            return getBookmarkedPost(username).then((data) => NextResponse.json(data));

        case 'liked':
            return getLikedPost(username).then((data) => NextResponse.json(data));


        default:
            return getMyPost(username).then((data) => NextResponse.json(data));

    }
}
