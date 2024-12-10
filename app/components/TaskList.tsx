
import TaskCard from "@/app/components/Cards/TaskCard";

// Define Task type
type Task = {
  id: number;
  title: string;
  completed: boolean;
  color: string;
};

// Define props for TaskList
type TaskListProps = {
  tasks: Task[]; // Array of tasks
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // State updater for tasks
};

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  // Toggle task completion
  const toggleTaskCompletion = (id: number, completed: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <ul role="list" className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id} // React key for each list item
          task={task} // Pass the task object
          onToggle={() => toggleTaskCompletion(task.id, task.completed)} // Toggle completion
          onDelete={() => deleteTask(task.id)} // Delete task
        />
      ))}
    </ul>
  );
}


export default TaskList