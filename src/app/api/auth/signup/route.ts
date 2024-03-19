import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

export async function POST(request: any) {
  const data = await request.json();
  try {
    const { name, email, pass } = data;
    if (!name || !email || !pass) {
      throw new Error(`Failed to handle post request`);
    }

    const users = await sql`SELECT * FROM users WHERE email=${email}`;
    if (users[0]?.email === email)
      throw new Error("User already exists, try logging in");
    else {
      const response =
        await sql`INSERT INTO users (name, email, pass) VALUES (${name}, ${email}, ${pass})`;
    }
  } catch (e) {
    console.error(`${e}`);
  }
  return NextResponse.json(data);
}
