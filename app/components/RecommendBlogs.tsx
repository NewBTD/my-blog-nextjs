import React from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";
const RecommendBlogs = () => {
  return (
    <>
      <div className="mt-4 mb-2">
        <h2 className="font-bold">
          สร้าง Code Snippet ใน VS Code: เพิ่มความเร็ว ตอนเขียนโค้ด
        </h2>
        <div className="mt-1 flex items-center gap-1 text-[#D2CFD0] font-semibold">
          <ThumbsUp className="size-4 cursor-pointer"></ThumbsUp>
          <span className="text-sm">125</span>
          <MessageCircle className="size-4 cursor-pointer"></MessageCircle>
          <span className="text-sm">14</span>
        </div>
      </div>
    </>
  );
};

export default RecommendBlogs;
