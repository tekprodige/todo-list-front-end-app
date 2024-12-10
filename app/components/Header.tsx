import rocket from "@/public/rocket.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center space-x-3 bg-black w-full h-32 justify-center" role="banner">
        
      {/* Rocket Icon */}
      <Image src={rocket} width={20} height={20} alt="picture of rocket" />

      {/* Title */}
      <h1 className="text-3xl font-bold text-indigo-500"><span className="text-blue-400">Todo</span> App</h1>
    </header>
  );
}
