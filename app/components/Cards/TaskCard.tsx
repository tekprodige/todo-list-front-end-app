// components/TaskItem.tsx
type TaskProps = {
  task: {
    id: number;
    title: string;
    completed: boolean;
    color: string;
  };
  onToggle: () => void;
  onDelete: () => void;
};

const TaskCard = ({ task, onToggle, onDelete }: TaskProps) => {
  return (
    <li
      className="flex items-center justify-between p-4 rounded-md bg-white shadow-md"
      style={{ borderLeft: `4px solid ${task.color}` }}
    >
      {/* Checkbox for completion */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
        className="form-checkbox"
      />

      {/* Task title */}
      <span
        className={
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }
      >
        {task.title}
      </span>

      {/* Delete button */}
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700"
        aria-label="Delete Task"
      >
        🗑️
      </button>
    </li>
  );
};


export default TaskCard