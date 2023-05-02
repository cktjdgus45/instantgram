import { getPostUserByUsername, getUserByName } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

type Context = {
  params: {
    slug: string;
  }
}

export async function GET(_: NextRequest, context: Context) {
  const session = await getServerSession();
  const authUserEmail = session?.user.email! as string;
  const username = context.params.slug;
  return getPostUserByUsername(username,authUserEmail).then((data) => NextResponse.json(data));
}
