'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import apiClient from '@/app/components/lib/axios';

type Task = {
  id: string; 
  title: string;
  color: string;
  completed: boolean;
};

const EditTask = () => {
  const params = useParams(); 
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        console.log(`Fetching task with ID: ${params.id}`); // Log the task ID
        const response = await apiClient.get(`/tasks/${params.id}`);
        setTask(response.data);
      } catch (err) {
        console.error('Failed to fetch task:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
  
    if (params.id) fetchTask();
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load task. Please try again later.</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <form>
      <h1>Edit Task</h1>
      <label>
        Title
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </label>
      <label>
        Color
        <select
          value={task.color}
          onChange={(e) => setTask({ ...task, color: e.target.value })}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditTask
