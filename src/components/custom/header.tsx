"use client";

import Link from "next/link";
import { Logo } from "../utils/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-4 relative max-w-2xl w-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-[2rem] mx-2 py-2 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="md:hidden">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="hs-collapse-toggle size-6 rounded-full"
              id="hs-navbar-header-floating-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-header-floating"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-header-floating"
            >
              <Menu className="hs-collapse-open:hidden shrink-0 size-3.5 text-primary" />
              <X className="hs-collapse-open:block hidden shrink-0 size-4 text-primary" />
            </button>
          </div>
        </div>
        <NavigationMenu
          id="hs-navbar-header-floating"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-navbar-header-floating-collapse"
        >
          <NavigationMenuList className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <NavigationMenuItem className="py-0.5 md:py-2 px-4 md:px-1">
              <Link href="/projeler" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projeler
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="py-0.5 md:py-2 px-4 md:px-1">
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Bloglar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/*
						<NavigationMenuItem className="py-0.5 md:py-2 px-4 md:px-1">
							<Link href="/yol-haritalari	" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Yol Haritaları
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem className="py-0.5 md:py-2 px-4 md:px-1">
							<Link href="/yararli-linkler" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Yararlı Linkler
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						*/}
            <NavigationMenuItem>
              <Button onClick={() => router.push("/giris")} variant="shimmer">
                Giriş Yap
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
