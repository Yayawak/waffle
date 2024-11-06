import { verifyToken } from '@/app/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { status, response } = await verifyToken(req);

    console.log(response)
    if (status !== 200) {
        return NextResponse.json({
            "msg" : "Unauthorized",
            "info": response,
        }, {
            status: status
        })
    }

    return NextResponse.json({
        test: "mock data here ",
        res_inner: response
    }, {
        status: status
    })
}