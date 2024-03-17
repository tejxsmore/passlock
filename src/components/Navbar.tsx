type Props = {};

export default function Navbar(props: Props) {
  return (
    <div className="p-5">
      <div
        id="navbar"
        className="flex justify-between items-center bg-modal text-light p-2.5 rounded-xl"
      >
        <a href="/">Passlock</a>
        <a
          href="/signin"
          className="bg-pink font-medium px-5 py-1.5 text-dark rounded-lg"
        >
          Signin
        </a>
      </div>
    </div>
  );
}
