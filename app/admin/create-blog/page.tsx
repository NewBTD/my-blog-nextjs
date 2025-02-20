"use client";
import { createBlog } from "@/actions/createBlog";
import React from "react";

const Page = () => {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   content: "",
  //   author: "",
  //   published: false,
  //   tags: "",
  // });

  const handleSubmit = async (formData: FormData) => {
    // Handle form submission here
    createBlog(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="w-full p-2 border rounded min-h-[200px]"
            required
          />
        </div>
        <div>
          <label htmlFor="slug" className="block mb-2">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            className="w-full p-2 border rounded"
            placeholder="your-post-url-slug"
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Published</label>
          <select className="w-full p-2 border rounded" name="published">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div>
          <label htmlFor="tags" className="block mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="w-full p-2 border rounded"
            placeholder="tech, programming, web"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Page;
