"use client";

import React, { useState } from "react";
import apiClient from "@/app/components/lib/axios";
import { useRouter } from "next/navigation";

const CreateTaskForm = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("red");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await apiClient.post("/tasks", { title, color });
      router.push("/"); // Redirect to homepage
    } catch (err) {
      console.error("Failed to add task:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Add Task</h1>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default CreateTaskForm;
