import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
