import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    console.log('CONTACT FORM', body)

    return NextResponse.json({
        message: `Thank you for your interest, ${body.name}`,
    })
}