import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

export async function POST(request: any) {
  const data = await request.json();
  try {
    const { email, pass } = data;
    console.log(data);
    if (!email || !pass) {
      throw new Error(`Failed to handle post request`);
    }

    // const user = await sql`SELECT * FROM users WHERE email=${email}`;
    // if (user[0]?.pass === pass) {
    //   console.log("User successfully logged in");
    // } else {
    //   throw new Error("No user with that email, try signing up");
    // }
  } catch (e) {
    console.error(`${e}`);
  }
  return NextResponse.json(data);
}
