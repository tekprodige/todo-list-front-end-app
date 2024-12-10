"use client";

import Link from "next/link";

// Define Task type
type Task = {
  id: number;
  title: string;
  completed: boolean;
  color: string;
};

// Define props for TaskItem
type TaskItemProps = {
  task: Task; 
  onToggle: () => void; 
  onDelete: () => void; 
};

const TaskCard = ({ task, onToggle, onDelete }: TaskItemProps) => {
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

      {/* Task title with link to Detail/Edit Page */}
      <Link
        href={`/task/${task.id}`} // Dynamic route to detail/edit page
        className={`flex-1 mx-4 ${
          task.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {task.title}
      </Link>

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

export default TaskCard;
