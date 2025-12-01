import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({success: true})

    // Delete cookie
    res.cookies.set("token", "", {maxAge: 0})

    return res
}