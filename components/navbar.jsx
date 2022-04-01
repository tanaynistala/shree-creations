import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <nav class="flex items-center justify-between max-w-3xl p-4 mx-auto">
      <a
        class="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg"
        href="/"
      >
        👋
      </a>

      <ul class="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <li class="hidden lg:block">
          <a class="px-3 py-2 rounded-lg" href="/">
            {" "}
            Home{" "}
          </a>
        </li>

        <li>
          <a class="px-3 py-2 rounded-lg" href="">
            {" "}
            About{" "}
          </a>
        </li>

        <li>
          <a class="px-3 py-2 rounded-lg" href="/education">
            {" "}
            Education{" "}
          </a>
        </li>

        <li>
          <a class="px-3 py-2 rounded-lg" href="">
            {" "}
            Contact{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}
