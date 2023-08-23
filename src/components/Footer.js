import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      class="bg-white dark:bg-gray-900 text-lg"
      style={{ backgroundColor: "#2F4550", fontSize: 20 }}
    >
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="md:justify-between">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-8 text-lg font-semibold text-blue-900 uppercase dark:text-white">
                <Link className="text-blue-400" to="/">
                  <h1 className="hover:underline">Company</h1>
                </Link>
              </h2>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                <Link className="text-blue-400" to="/Lodging">
                  <h1 className="hover:underline">Lodging</h1>
                </Link>
              </h2>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                <Link className="text-blue-400" to="/Photos">
                  <h1 className="hover:underline">Photos</h1>
                </Link>
              </h2>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                <Link className="text-blue-400" to="/Photos">
                  <h1>Contact</h1>
                </Link>
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <h1 className="text-gray-900">254-266-0543</h1>
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
