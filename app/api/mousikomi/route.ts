import { NextResponse } from "next/server";

type MousikomiRequest = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as MousikomiRequest;

  if (!body.name || !body.email || !body.course) {
    return NextResponse.json(
      { error: "必須項目が不足しています" },
      { status: 400 }
    );
  }

  // TODO: Replace with email sending or database storage
  console.log("申込み内容:", body);

  return NextResponse.json({ success: true });
}
