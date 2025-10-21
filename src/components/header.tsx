"use client";
import { Button } from "primereact/button";
import { useState } from "react";
import { Navbar } from "./navbar";
import { NAV_ITEMS } from "@/constants";
import Sidenav from "./sidenav";
import { useBreakpoints } from "@/hooks";
import { Breakpoint } from "@/models";
import Image from "next/image";
import Logo from "@/../public/assets/images/sanzone-horizontal.svg";

export default function Header() {
  const [openSidenav, setOpenSidenav] = useState(false);
  const { currentBreakpoint } = useBreakpoints();
  return (
    <header className="flex justify-between items-center px-10 sticky top-0 left-0 right-0 bg-legal-surface border-b border-legal shadow-sm h-20 z-50">
      {/* Logo o nombre del estudio */}
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Sanzone & Abogados"
          width={250}
          height={75}
          className="h-16 w-auto"
          priority
        />
      </div>

      {/* Navegación */}
      <div className="flex items-center">
        {currentBreakpoint < Breakpoint.LG ? (
          <Button
            rounded
            variant="text"
            className="text-legal-secondary hover:text-legal hover:bg-legal-surface"
            onClick={() => setOpenSidenav(!openSidenav)}
          >
            <i className="pi pi-bars text-lg" />
          </Button>
        ) : (
          <Navbar navItems={NAV_ITEMS} />
        )}
      </div>

      <Sidenav open={openSidenav} navItems={NAV_ITEMS} />
    </header>
  );
}
