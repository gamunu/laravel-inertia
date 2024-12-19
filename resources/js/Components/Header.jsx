import Nav from "./Nav";
import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap px-5 py-8 flex-col md:flex-row items-center">
                <Link
                    href="/"
                    class="text-xl flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                >
                    DemoApp
                </Link>
                <Nav />
            </div>
        </header>
    );
}
