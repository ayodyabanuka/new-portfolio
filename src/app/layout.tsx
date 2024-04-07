"use client"
import "./globals.css";
import Providers from "./providers";
import { cn } from "../lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
      </head>
      <body className={cn("relative h-full font-sans antialiased mx-auto")}>
        <Providers>
          <main className="relative flex flex-col mx-auto bg-[#F4F4F6] dark:bg-[#101723] min-h-screen px-5 py-5">
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </Providers>
      </body>

    </html>
  );
}
