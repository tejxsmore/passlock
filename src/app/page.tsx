import Navbar from "../components/Navbar";

type Props = {};

export default function Home(props: Props) {
  return (
    <div className="bg-dark text-light min-h-screen">
      <Navbar />
    </div>
  );
}
