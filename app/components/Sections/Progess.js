import EmptyState from "@/app/components/EmptyState";
import Counter from "@/app/components/Counter";

const Progress = () => {
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
          <span>Tasks: </span>
          <Counter count={0} />
        </div>
        <div>
          <span>Completed: </span>
          <Counter count={0} />
        </div>
      </div>
    </section>
  );
};

export default Progress;
