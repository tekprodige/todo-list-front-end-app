import EmptyState from "@/app/components/EmptyState";
import Counter from "@/app/components/Counter";

const Progress = ({ totalTasks, completedTasks }) => {
  return (
    <section className="w-full max-w-2xl mt-12">
      <header className="sr-only">
        <h2>Task Statistics</h2>
      </header>
      <div
        className="flex justify-between text-gray-700 text-lg font-bold"
        role="status"
      >
        <div>
          <span className="text-blue-400">Tasks: </span>
          <span className="bg-gray-700 text-white px-3 py-1 rounded-full">
            {" "}
            <Counter count={totalTasks} />
          </span>
        </div>
        <div>
          <span className="text-indigo-600">Completed: </span>
          <span className="bg-gray-700 text-white px-3 py-1 rounded-full">
            <Counter count={completedTasks} />
            {" "}
            of
            {" "}
            <Counter count={totalTasks} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Progress;
