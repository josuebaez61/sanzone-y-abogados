"use client";
import { Button } from "primereact/button";
import { useState } from "react";
import { Navbar } from "./navbar";
import { NAV_ITEMS } from "@/constants";
import Sidenav from "./sidenav";
import { useBreakpoints } from "@/hooks";
import { Breakpoint } from "@/models";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/assets/images/sanzone-2.svg";

export default function Header() {
  const [openSidenav, setOpenSidenav] = useState(false);
  const { currentBreakpoint } = useBreakpoints();
  return (
    <header
      role="banner"
      className="flex justify-between items-center px-10 sticky top-0 left-0 right-0 bg-legal-surface border-b border-legal shadow-sm h-20 z-50"
    >
      {/* Logo o nombre del estudio */}
      <div className="flex items-center">
        <Link href="/" aria-label="Ir a inicio">
          <Image
            src={Logo}
            alt="Sanzone & Abogados"
            width={250}
            height={75}
            className="h-16 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Navegación */}
      <div className="flex items-center">
        {currentBreakpoint < Breakpoint.LG ? (
          <Button
            rounded
            variant="text"
            aria-label="Abrir menú de navegación"
            aria-expanded={openSidenav}
            aria-controls="mobile-navigation"
            className="text-legal-secondary hover:text-legal hover:bg-legal-surface"
            onClick={() => setOpenSidenav(!openSidenav)}
          >
            <i className="pi pi-bars text-lg" />
          </Button>
        ) : (
          <Navbar navItems={NAV_ITEMS} />
        )}
      </div>

      <div id="mobile-navigation" className="hidden" aria-hidden="true">
        <Sidenav
          open={openSidenav}
          onOpenChange={(e) => setOpenSidenav(e.value as boolean)}
          navItems={NAV_ITEMS}
        />
      </div>
    </header>
  );
}
