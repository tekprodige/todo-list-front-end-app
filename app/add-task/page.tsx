'use client';

import { useState } from 'react';
import apiClient from '@/app/components/lib/axios';
import { useRouter } from 'next/navigation';
import BackBtn from "@/app/components/Buttons/BackBtn"

export default function AddTaskPage() {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('red');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await apiClient.post('/tasks', { title, color });
      router.push('/'); // Redirect to homepage
    } catch (err) {
      console.error('Failed to add task:', err);
    }
  };

  return (
    <section className=''>
        <BackBtn />
    </section>
  );
}
