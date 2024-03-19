import Navbar from "../components/Navbar";

type Props = {};

export default async function Home(props: Props) {
  return (
    <div className="bg-dark text-light min-h-screen">
      <Navbar />
    </div>
  );
}
