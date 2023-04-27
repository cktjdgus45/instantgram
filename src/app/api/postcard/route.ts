import { getUserByFollowingName, getUserByName } from '@/service/user';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
    //server . sanity에서 data를 가져와 res 한다.
    const session = await getServerSession();
    const user = session?.user;
    if (!user) {
        return NextResponse.json('only user can access');
    }
    return getUserByFollowingName(user.name).then(data => NextResponse.json(data));
}
