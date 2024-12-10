"use client";

import { useEffect, useState } from "react";

import Progress from "@/app/components/Sections/Progess";
import CreateTaskBtn from "./components/Buttons/CreateTaskBtn";
import apiClient from "@/app/components/lib/axios";
import EmptyState from "./components/EmptyState";
import TaskList from "./components/TaskList";

// Define the Task type
type Task = {
  id: number;
  title: string;
  completed: boolean;
  color: string;
};

const Home = () => {
  // Store tasks in state, Loading state, Error state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 

  // Fetch tasks from the API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        console.log('Fetching tasks from /tasks'); // Log the request
        const response = await apiClient.get<Task[]>('/tasks');
        console.log('Tasks fetched:', response.data); // Log the response
        setTasks(response.data);
      } catch (err) {
        console.error('Failed to fetch tasks:', err);
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

  // Determine if the list is empty
  const isEmpty = tasks.length === 0;

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">

      {/*Create new tasks button */}
      <CreateTaskBtn />

      {/* Counters Section */}
      <Progress />

      {/* Show EmptyState if no tasks exist */}
      {isEmpty ? <EmptyState /> : <TaskList tasks={tasks} setTasks={setTasks} />}
    </main>
  );
};

export default Home;
