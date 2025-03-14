import React from "react";
import Blog from "@/types/Blog";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  try {
    const { slug } = await params;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Failed to fetch data: ${response.status} - ${
          errorData?.message || response.statusText
        }`
      );
    }

    const blog: Blog = await response.json();

    if (blog) {
      return (
        <section className="max-w-2xl mx-auto px-4 py-8 md:px-6 lg:px-8">
          <article>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p> {/* เปลี่ยนกลับมาใช้ <p> */}
            <p>{blog.author}</p>
          </article>
        </section>
      );
    } else {
      console.error("Invalid blog data:", blog);
      return <p>Error: Invalid blog data.</p>;
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return <p>Error: Could not fetch blog data.</p>;
  }
};

export default Page;
