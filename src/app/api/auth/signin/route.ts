import { NextResponse } from "next/server";

export async function POST(request: any) {
  const data = await request.json();
  try {
    const { email, pass } = data;
    console.log(data);

    if (!email || !pass) {
      throw new Error(`Failed to handle post request`);
    }
  } catch (e) {
    console.error(`Error : ${e}`);
  }
  return NextResponse.json(data);
}
