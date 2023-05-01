import { NextRequest, NextResponse } from 'next/server';
import { getUsersByName } from '@/service/user';

type Context = {
    params: { keyword: string };
}

export async function GET(_: NextRequest, context: Context) {
    const { params: { keyword } } = context;
    return getUsersByName(keyword).then(res => NextResponse.json(res));
}
