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
      <h1 className="text-sm text-blue-400 font-bold">Title</h1>
      <input
        type="text"
        placeholder="Ex. Brush Your Teeth"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
        required
      />

      <h1 className="text-sm text-blue-400 font-bold">Color</h1>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
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
      <button
        type="submit"
        className="bg-blue-500 text-white w-full px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Add Task +
      </button>
    </form>
  );
};

export default CreateTaskForm;
