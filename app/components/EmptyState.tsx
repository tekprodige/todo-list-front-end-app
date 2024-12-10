
export default function EmptyState() {
    return (
        <div
            className="text-center border border-dashed border-gray-300 p-6 rounded-lg bg-white shadow-sm"
            role="region"
            aria-labelledby="empty-state-title"
        >
            {/* Clipboard Icon */}
            <div className="text-gray-400 text-4xl mb-4" aria-hidden="true">
                📋
            </div>
            {/* Message */}
            <header>
                <h2 id="empty-state-title" className="text-gray-800 text-lg font-bold">
                    No Tasks Registered
                </h2>
            </header>
            <p className="text-gray-500 mt-2">
                You don't have any tasks registered yet. Create tasks and organize your to-do
                items.
            </p>
            {/* Create Task Button */}
            <div className="mt-6">
                <button
                    type="button"
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
                    aria-label="Create Task"
                >
                    <span className="mr-2">Create Task</span>
                    <span className="text-xl" aria-hidden="true">
                        ➕
                    </span>
                </button>
            </div>
        </div>
    );
}
