import Blog from "@/types/Blog";
import { Separator } from "@/components/ui/separator";

import React from "react";
import { Bookmark, Ellipsis, MessageCircle } from "lucide-react";
import Link from "next/link";

const BlogList = async () => {
  const response = await fetch(`${process.env.VERCEL_BRANCH_URL}/api/blog`);
  const blogs: Blog[] = await response.json();

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {blogs.map((blog) => (
        <div key={blog.slug}>
          <Link href={`/blog/${blog.slug}`}>
            <h2 className="text-2xl">{blog.title}</h2>
            <p className="truncate opacity-70">{blog.content}</p>
          </Link>

          <div className="flex justify-between my-4">
            <div>
              <MessageCircle></MessageCircle>
            </div>
            <div className="flex gap-2">
              <Bookmark></Bookmark>
              <Ellipsis></Ellipsis>
            </div>
          </div>
          <Separator className="my-4"></Separator>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
