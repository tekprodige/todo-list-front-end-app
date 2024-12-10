import React from 'react'
import Link from 'next/link';

const CreateTaskBtn = () => {
  return (
    <Link href={`/add-task`} className='bg-blue-500 p-4 text-center text-2xl rounded w-1/2 z-50 -mt-4 hover:bg-blue-400'>Create Task +</Link>
  )
}

export default CreateTaskBtn;
