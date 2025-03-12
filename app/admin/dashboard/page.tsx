

import BlogListTable from "@/app/components/BlogListTable";
import Chart from "@/app/components/Chart";
import { Input } from "@/components/ui/input";
import React from "react";

const Page = async () => {
  return (
    <section className="container mx-auto flex flex-col gap-4 px-4 py-8">
      <h1 className="text-3xl font-bold">Posts</h1>
      <Input className="w-[300px]" placeholder="Search.."></Input>
      <div className="flex justify-center">
        <BlogListTable></BlogListTable>
        <Chart></Chart>
      </div>
    </section>
  );
};

export default Page;
