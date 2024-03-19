import Navbar from "../components/Navbar";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

type Props = {};

export default async function Home(props: Props) {
  const response = await sql`SELECT version()`;
  // console.log(response);

  return (
    <div className="bg-dark text-light min-h-screen">
      <Navbar />
    </div>
  );
}
