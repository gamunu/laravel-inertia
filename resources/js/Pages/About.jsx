import MainLayout from "@/Layouts/MainLayout";

export default function About() {
    return (
        <MainLayout>
            <div className="max-w-xl mx-auto prose">
                <h1 className="text-3xl font-bold mb-6">About</h1>

                <p>
                    This app seamlessly combines a Laravel backend with a React
                    frontend through Inertia.js, creating a smooth, SPA-like
                    experience. Styled with TailwindCSS, it offers a modern and
                    responsive design. The backend is supported by a PostgreSQL
                    database, ensuring reliable data storage and management.
                </p>

                <p>
                    The app features three key pages: Home, About, and Users.
                    The Home page serves as the landing page, introducing users
                    to the application. The About page provides information on
                    the app’s purpose and features. The Users page is a dynamic
                    interface that displays a list of users fetched directly
                    from the database. It also includes a user-friendly form,
                    allowing new users to be easily added to the database in
                    real-time.
                </p>
            </div>
        </MainLayout>
    );
}
