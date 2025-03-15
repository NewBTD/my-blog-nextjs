import { Medal } from "lucide-react";
import BlogCards from "./components/BlogCards";
import RecommendBlogs from "./components/RecommendBlogs";
export default function Home() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-12 mt-8">
      <div className="col-span-8 border-r border-[#403D3D] px-8">
        <BlogCards></BlogCards>
      </div>
      <div className="col-span-4 px-8">
        <h2>
          <Medal className="inline mr-2"></Medal>บทความแนะนำ
          <RecommendBlogs></RecommendBlogs>
        </h2>
      </div>
    </div>
  );
}
