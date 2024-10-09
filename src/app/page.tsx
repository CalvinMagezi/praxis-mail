import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const LandingPage = async () => {
  const { userId } = auth();
  if (userId) {
    return redirect("/mail");
  }
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-[#131619] p-4">
        <Link href="/" className="text-2xl font-bold text-[#1DE52F]">
          Praxis Mail
        </Link>
        <div className="space-x-4">
          <Link
            href="/sign-in"
            className="text-sm text-[#00C6FA] hover:underline"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="text-sm text-[#00C6FA] hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#828282_1px,transparent_1px),linear-gradient(to_bottom,#828282_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_80%)]"></div>
      <div className="relative z-[10] flex min-h-screen flex-col items-center bg-[#131619] pt-56 text-[#dfdfdf]">
        <Image
          src="/logo.svg"
          alt="Praxis Mail Logo"
          width={200}
          height={200}
          className="mb-4"
        />
        <h1 className="inline-block bg-gradient-to-r from-[#00C6FA] to-[#1DE52F] bg-clip-text text-center text-6xl font-bold text-transparent">
          Praxis Mail: <br />
          The AI-powered email client.
        </h1>
        <div className="h-4"></div>
        <p className="mb-8 max-w-xl text-center text-xl text-[#828282]">
          Praxis Mail is a minimalistic, AI-powered email client that empowers
          you to manage your email with ease.
        </p>
        <div className="space-x-4">
          <Button className="bg-[#1DE52F] text-[#0D0F10] hover:bg-[#00C6FA]">
            <Link href="/mail">Get Started</Link>
          </Button>
          <Link href="https://start-saas.com?utm=praxismail">
            <Button
              variant="outline"
              className="border-[#00C6FA] text-[#00C6FA] hover:bg-[#00C6FA] hover:text-[#0D0F10]"
            >
              Learn More
            </Button>
          </Link>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <h2 className="mb-4 text-center text-2xl font-semibold text-[#1DE52F]">
            Experience the power of:
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-[#00C6FA] bg-[#231F20] p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-[#1DE52F]">
                AI-driven email RAG
              </h3>
              <p className="text-[#828282]">
                Automatically prioritize your emails with our advanced AI
                system.
              </p>
            </div>
            <div className="rounded-lg border border-[#00C6FA] bg-[#231F20] p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-[#1DE52F]">
                Full-text search
              </h3>
              <p className="text-[#828282]">
                Quickly find any email with our powerful search functionality.
              </p>
            </div>
            <div className="rounded-lg border border-[#00C6FA] bg-[#231F20] p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-[#1DE52F]">
                Shortcut-focused interface
              </h3>
              <p className="text-[#828282]">
                Navigate your inbox efficiently with our intuitive keyboard
                shortcuts.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/example.png"
          alt="demo"
          width={1000}
          height={1000}
          className="my-12 h-auto w-[70vw] rounded-md border shadow-xl transition-all hover:scale-[102%] hover:shadow-2xl"
        />
        {/* <div className="mb-10 flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="text-sm text-[#00C6FA] hover:underline"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="text-sm text-[#00C6FA] hover:underline"
          >
            Sign Up
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default LandingPage;
