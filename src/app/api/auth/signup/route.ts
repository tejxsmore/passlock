import { NextResponse } from "next/server";

export async function POST(request: { json: () => any }) {
  const data = await request.json();
  try {
    const { name, email, pass } = data;
    console.log(data);

    if (!name || !email || !pass) {
      throw new Error(`Failed to handle post request`);
    }
  } catch (e) {
    console.error(`Error : ${e}`);
  }
  return NextResponse.json(data);
}
