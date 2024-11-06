import { verifyToken } from '@/app/lib/auth';
import { dbConnector } from '@/app/lib/dbConnector';
import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { status, response } = await verifyToken(req);

    console.log(response)
    if (status !== 200) {
        return NextResponse.json({
            "msg": "Unauthorized",
            "info": response,
        }, {
            status: status
        })
    }

    try {
        const [rs, fs] = await dbConnector.query<RowDataPacket[]>(`select * from Blog`)
        console.log(rs)
        return NextResponse.json({
            msg: "error",
            data: rs
        }, {
            status: 200
        })

    } catch (error) {
        return NextResponse.json({
            msg: "error",
            error: error
        }, {
            status: 500
        })

    }

    // return NextResponse.json({
    //     test: "mock data here ",
    //     res_inner: response
    // }, {
    //     status: status
    // })
}