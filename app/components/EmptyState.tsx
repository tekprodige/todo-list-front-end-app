
export default function EmptyState() {
    return (
        <div
            className="text-center border-gray-300 p-6 rounded-lg bg-transparent shadow-sm mt-32"
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
        </div>
    );
}
