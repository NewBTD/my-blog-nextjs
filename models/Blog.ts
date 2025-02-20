import mongoose, { Schema, Document } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  tags?: string[];
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    published: {
      type: Boolean,
      default: false,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
