import { Document } from "mongoose";
export default interface Blog extends Document{
  title: string;
  content: string;
  author: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  tags?: string[];
}
