import { Link } from "@inertiajs/react";

export default function Nav() {
    return (
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" class="mr-5 hover:text-gray-900">
                Home
            </Link>
            <Link href="/about" class="mr-5 hover:text-gray-900">
                About
            </Link>
            <Link href="/users" class="mr-5 hover:text-gray-900">
                Users
            </Link>
        </nav>
    );
}
