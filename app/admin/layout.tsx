import NavSidebar from "../components/NavSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <NavSidebar />
      <main>
        {children}
      </main>
    </SidebarProvider>
  );
}
