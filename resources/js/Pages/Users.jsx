import { useForm, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Alert from "../Components/Alert";

export default function Users({ users }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/users", {
            preserveState: true,
            onSuccess: () => reset("name", "email"),
        });
    };

    return (
        <MainLayout>
            <div className="flex flex-wrap items-start">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
                    <h1 className="text-3xl font-bold mb-6">Users</h1>
                    {flash.message && (
                        <Alert type="success" message={flash.message} />
                    )}
                    {users.length ? (
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                        Name
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr className="hover:bg-slate-50">
                                        <td className="border-t-2 border-gray-200 px-4 py-3">
                                            {user.name}
                                        </td>
                                        <td className="border-t-2 border-gray-200 px-4 py-3">
                                            {user.email}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0 flex-grow-0"
                >
                    <div className="relative mb-4">
                        <label
                            for="name"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            placeholder="First Name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        {errors.name && (
                            <div className="error">{errors.name}</div>
                        )}
                    </div>
                    <div className="relative mb-4">
                        <label
                            for="email"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            placeholder="you@example.tld"
                            type="email"
                            id="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        {errors.email && (
                            <div className="error">{errors.email}</div>
                        )}
                    </div>
                    <button
                        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        disabled={processing}
                    >
                        Add User +
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}
