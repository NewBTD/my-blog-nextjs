

import BlogListTable from "@/app/components/BlogListTable";
import React from "react";

const Page = async () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <BlogListTable></BlogListTable>
    </section>
  );
};

export default Page;
