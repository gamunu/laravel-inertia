import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center">
                <p className="text-sm text-gray-500 sm:py-2 sm:mt-0 mt-4">
                    <Link
                        href="https://github.com/gamunu"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @gamunu
                    </Link>
                </p>
            </div>
        </footer>
    );
}
