"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import apiClient from "@/app/components/lib/axios";
import { useRouter } from "next/navigation";

type Task = {
  id: string;
  title: string;
  color: string;
  completed: boolean;
};

const CreateTaskForm = () => {
  const params = useParams();
  const router = useRouter();

  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch the task details when the component mounts
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await apiClient.get(`/tasks/${params.id}`); // Fetch task by ID
        setTask(response.data);
      } catch (err) {
        console.error("Failed to fetch task:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchTask();
  }, [params.id]);

  // Handle form submission to update the task
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) return;

    try {
      await apiClient.put(`/tasks/${task.id}`, {
        title: task.title,
        color: task.color,
        completed: task.completed,
      });

      router.push("/");
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  const handleChange = (field: keyof Task, value: string | boolean) => {
    if (!task) return;
    setTask({ ...task, [field]: value });
  };

  if (loading) return <p>Loading task details...</p>;
  if (error) return <p>Failed to load task. Please try again later.</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Edit Task</h1>
      {/* Task Title */}
      <div>
        <label htmlFor="title" className="block font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={task.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="w-full p-2 rounded bg-gray-800"
          required
        />
      </div>

      {/* Task Color */}
      <div>
        <label htmlFor="color" className="block font-medium text-gray-700">
          Color
        </label>
        <select
          id="color"
          value={task.color}
          onChange={(e) => handleChange("color", e.target.value)}
          className="w-full p-2 rounded bg-gray-800"
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="gold">Gold</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="brown">Brown</option>
        </select>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white w-full px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default CreateTaskForm;
