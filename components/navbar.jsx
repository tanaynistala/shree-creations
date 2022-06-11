import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <nav className="flex z-30 top-0 fixed items-center justify-between w-screen p-4">
      <a
        className="inline-flex items-center justify-center py-2 px-4 bg-slate-50 bg-opacity-70 backdrop-blur rounded-lg shadow"
        href="/"
      >
        <b>Shree</b>&nbsp;Creations
      </a>

      <ul className="flex items-center space-x-2 text-sm font-medium text-black mix-blend-overlay">
        <li className="hidden lg:block">
          <a
            className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-50"
            href="/#"
          >
            {" "}
            Home{" "}
          </a>
        </li>

        <li>
          <a
            className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-50"
            href="/#about"
          >
            {" "}
            About{" "}
          </a>
        </li>

        <li>
          <a
            className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-50"
            href="/education"
          >
            {" "}
            Education{" "}
          </a>
        </li>

        <li>
          <a
            className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-50"
            href="/#contact"
          >
            {" "}
            Contact{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}
