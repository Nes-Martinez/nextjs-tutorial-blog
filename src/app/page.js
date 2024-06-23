import Image from "next/image";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log("All blogs---->", allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      Hello world!
    </main>
  );
}
