import MessageList from "@/components/massage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-hidden flex-col items-center justify-between">
      <MessageList />
    </main>
  );
}
