import React from "react";

export const metadata = {
  title: "simple react app",
  description: "a simple nextjs app.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
