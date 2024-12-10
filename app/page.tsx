import Header from "@/app/components/Header";
import Progress from "@/app/components/Sections/Progess";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Counters Section */}
      <Progress />

    </main>
  );
}
