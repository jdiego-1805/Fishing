import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      class="bg-white dark:bg-gray-900"
      style={{ backgroundColor: "#2F4550" }}
    >
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <Link className="text-gray-900" to="/">
                <h1>Company</h1>
              </Link>
            </h2>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <Link className="text-gray-900" to="/Lodging">
                <h1>Lodging</h1>
              </Link>
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class=" hover:underline">
                  About
                </a>
              </li>
            </ul>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <h1>254-266-0543</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
