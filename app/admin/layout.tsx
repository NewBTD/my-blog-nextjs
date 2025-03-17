import React from "react";
import Link from "next/link";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      <aside className="w-[250px] p-5 border-r border-[#403D3D] bg-gradient">
        <nav>
          <ul className="list-none p-0">
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/posts">Posts</Link>
            </li>
            <li>
              <Link href="/admin/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="p-5">{children}</main>
    </div>
  );
};

export default AdminLayout;
