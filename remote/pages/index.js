// import dynamic from "next/dynamic";

// const Nav = dynamic(() => import("remote/Nav"), { ssr: false });

import Nav from "../components/Nav";

export default function HomePage() {
  return (
    <div>
      This is my ssr host
      <Nav />
    </div>
  );
}
