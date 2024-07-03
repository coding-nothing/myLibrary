import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>about header</nav>
      <main>{children}</main>
    </>
  );
}
