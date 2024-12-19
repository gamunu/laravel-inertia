export default function Alert({ type, message }) {
    let alertClassesTable = {
        success: "text-green-800 border-green-300",
        failure: "text-red-800 border-red-300",
    };

    let alertClass = alertClassesTable[type] || "text-blue-800 border-blue-300";

    return (
        <div
            className={`flex items-center p-4 mb-8 text-sm border rounded-lg bg-blue-50 ${alertClass}`}
            role="alert"
        >
            <div>{message}</div>
        </div>
    );
}
