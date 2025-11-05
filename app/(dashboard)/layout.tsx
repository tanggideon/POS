import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AppSidebar } from "./(components)/DashboardSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POS Dashboard",
  description: "Dashboard for all your analytics and management needs",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
