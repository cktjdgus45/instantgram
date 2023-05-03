import { NextResponse } from 'next/server';
import { getUsers } from '@/service/user';

export const dynamic = 'force-dynamic';

export async function GET() {
    return getUsers().then(res => NextResponse.json(res));
}
