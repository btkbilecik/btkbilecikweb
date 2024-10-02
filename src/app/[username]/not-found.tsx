"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, CircleAlert } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <section className="bg-background">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-first rounded-full bg-primary">
            <CircleAlert className="w-6 h-6" />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-primary md:text-3xl">
            Üzgünüm :( Aradığınız kullanıcı bulunamadı
          </h1>
          <p className="mt-4 text-muted-foreground">
            Lütfen daha sonra tekrar deneyin, eğer problem çözülmemişse bize
            ulaşın!
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Button variant="secondary" onClick={() => router.back()}>
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />

              <span>Geri Dön</span>
            </Button>

            <Button onClick={() => router.push("/")} variant="first">
              Ana Sayfaya Dön
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
