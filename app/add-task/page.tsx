'use client';

import BackBtn from "@/app/components/Buttons/BackBtn"
import CreateTaskForm from '../components/Forms/CreateTaskForm';

export default function AddTaskPage() {
  return (
    <section className='w-6/12 flex bg-gray-900 flex-col m-auto mt-20'>
        <BackBtn />
        <CreateTaskForm />
    </section>
  );
}
