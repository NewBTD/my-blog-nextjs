import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Blog from "@/types/Blog";
import React from "react";

const BlogListTable = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
  const blogs: Blog[] = await response.json();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Blog Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>createdAt</TableHead>
          <TableHead>isPublished</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={String(blog._id)}>
            <TableCell className=" py-4">{blog.title}</TableCell>
            <TableCell className=" py-4">{blog.author}</TableCell>
            <TableCell className=" py-4">
              {blog.createdAt.toLocaleString("th-TH", {
                timeZone: "Asia/Bangkok",
              })}
            </TableCell>
            <TableCell className=" py-4">
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder={String(blog.published)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={String(blog.published)}>
                      {String(blog.published)}
                    </SelectItem>
                    <SelectItem value={String(!blog.published)}>
                      {String(!blog.published)}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
        <TableRow className="">
          <TableCell className=" py-4">
            10 วิธีในการดูแลรักษาสุขภาพหน้า
          </TableCell>
          <TableCell className=" py-4">Thanawat.K</TableCell>
          <TableCell className=" py-4">19-02-2025</TableCell>
          <TableCell className=" py-4">True</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default BlogListTable;
