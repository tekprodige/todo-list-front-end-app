"use client";

import { useEffect, useState } from "react";

import Header from "@/app/components/Header";
import Progress from "@/app/components/Sections/Progess";
import CreateTaskBtn from "./components/Buttons/CreateTaskBtn";
import apiClient from "@/app/components/lib/axios";
import EmptyState from "./components/EmptyState";

const Home = () => {
  const [tasks, setTasks] = useState([]); // Store tasks in state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state

  // Fetch tasks from the API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await apiClient.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load tasks. Please try again later.</p>;

  // Show empty state if no tasks
  if (tasks.length === 0) {
    return (
      <main className="min-h-screen bg-gray-900 flex flex-col items-center">
        {/* Header */}
        <Header />

        {/*Create new tasks button */}
        <CreateTaskBtn />

        {/* Counters Section */}
        <Progress />

        <EmptyState />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      {/* Header */}
      <Header />

      {/*Create new tasks button */}
      <CreateTaskBtn />

      {/* Counters Section */}
      <Progress />
    </main>
  );
};

export default Home;
