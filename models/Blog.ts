import { ObjectId } from "mongodb";

export interface IBlog {
  _id?: ObjectId;
  title: string;
  content: string;
  author: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  tags: string[];
}