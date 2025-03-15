"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input"; // ShadCN Input
import { IBlog } from "@/models/Blog";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Bookmark, Ellipsis, ThumbsUp, MessageCircle } from "lucide-react";

const BlogCards = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredBlogs, setFilteredBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`,
          {
            next: { revalidate: 3600 }, // Cache for 1 hour
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: IBlog[] = await res.json();
        setBlogs(data);
        setFilteredBlogs(data); // Initialize filteredBlogs with all blogs
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    getData();
  }, []);

  // Filter blogs when searchQuery or selectedTag changes
  useEffect(() => {
    let filtered = blogs;

    if (searchQuery) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTag) {
      if (selectedTag === "All") {
        setFilteredBlogs(blogs);
        return;
      } else {
        filtered = filtered.filter((blog) => blog.tags.includes(selectedTag));
      }
    }

    setFilteredBlogs(filtered);
  }, [searchQuery, selectedTag, blogs]);

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="flex items-center">
        <Input
          placeholder="Search blog title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gradient"
        />
      </div>

      {/* Tags Filter */}
      <div className="flex gap-2">
        {["All", "Technology", "Health", "Education"].map((tag, index) => (
          <Button
            key={index}
            variant={selectedTag === tag ? "default" : "outline"}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            className={`radius-full rounded-3xl ${selectedTag === tag ? "!bg-[#403D3D] !text-[#FCFCFC]" : "!bg-[#1F1D1D] !text-[#D2CFD0]"}`}          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6">
        {filteredBlogs.map((blog: IBlog) => (
          <div
            key={blog._id?.toString()}
            className="grid grid-cols-12 items-center gap-4"
          >
            <div className="col-span-4">
              <Image
                src={`https://picsum.photos/id/1/367/267`}
                alt={blog.title}
                width={367}
                height={267}
                className="rounded-lg"
              />
            </div>
            <div className="col-span-8 grid grid-cols-8 gap-2">
              <div className="col-span-7">
                <h1 className="text-xl font-bold">{blog.title}</h1>
                <p className="text-gray-400 truncate">{blog.content}</p>
                <div className="flex gap-1 mt-2 items-center text-sm">
                  <ThumbsUp className="size-4"></ThumbsUp>
                  <span>12</span>
                  <MessageCircle className="size-4"></MessageCircle>
                  <span>3</span>
                </div>
              </div>
              <div className="col-span-1 inline-flex ">
                <Bookmark className="size-6 cursor-pointer"></Bookmark>
                <Ellipsis className="size-6 cursor-pointer"></Ellipsis>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
