"use client";
import { Footer } from "@/components/custom/footer";
import { Header } from "@/components/custom/header";
import { Hero } from "@/components/custom/hero";
import { SSS } from "@/components/custom/sss";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SSS />
      <Footer />
    </div>
  );
}
