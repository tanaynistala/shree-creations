import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex z-30 top-0 fixed items-center justify-between w-screen p-4">
      <Link
        className="inline-flex items-center justify-center py-2 px-4 bg-slate-50 bg-opacity-70 backdrop-blur rounded-lg shadow"
        href="/"
      >
        Shree&nbsp;Creations
      </Link>

      <ul className="flex items-center space-x-4 text-sm font-medium text-black mix-blend-overlay">
        <li className="hidden lg:block">
          <Link
            className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-50"
            href="/#"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-50"
            href="/about"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-50"
            href="/education"
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-50"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
