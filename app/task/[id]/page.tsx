'use client';

import BackBtn from "@/app/components/Buttons/BackBtn"
import EditTaskForm from '@/app/components/Forms/EditTaskForm';



const EditTask = () => {

  return (
    <section className='w-6/12 flex bg-gray-900 flex-col m-auto mt-20'>
        <BackBtn />
        <EditTaskForm />
    </section>
  );
}

export default EditTask
