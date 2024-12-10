// components/TaskList.tsx
import TaskCard from "@/app/components/Cards/TaskCard";
import apiClient from "@/app/components/lib/axios";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  color: string;
};

type TaskListProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  // Toggle task completion
  const toggleTaskCompletion = (id: number, completed: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <ul role="list" className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={() => toggleTaskCompletion(task.id, task.completed)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
