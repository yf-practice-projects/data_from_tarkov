import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
	const json = await request.json();
	// console.log(JSON.stringify(json))
	const newSupport = await prisma.support.create({
    data: json
  });
  console.log('Inserted support:', newSupport);
	return NextResponse.json({status: 200})
}