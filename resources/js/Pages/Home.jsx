import MainLayout from "@/Layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <div class="mx-auto flex px-5 py-16 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold">
                        Laravel + React + Inertia.js
                    </h1>
                    <p className="mb-8 leading-relaxed max-w-xl mx-auto">
                        Built with Laravel backend, React frontend, and
                        Inertia.js, styled using TailwindCSS, and powered by a
                        MySQL database
                    </p>
                </div>
            </div>
        </MainLayout>
    );
}
