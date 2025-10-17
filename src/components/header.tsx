"use client";
import { Button } from "primereact/button";
import { useState } from "react";
import { Navbar } from "./navbar";
import { NAV_ITEMS } from "@/constants";
import Sidenav from "./sidenav";
import { useBreakpoints } from "@/hooks";
import { Breakpoint } from "@/models";

export default function Header() {
  const [openSidenav, setOpenSidenav] = useState(false);
  const { currentBreakpoint } = useBreakpoints();
  return (
    <header className="flex justify-between items-center px-6 sticky top-0 left-0 right-0  bg-white shadow-md h-20">
      Header
      {currentBreakpoint < Breakpoint.LG ? (
        <Button
          rounded
          variant="text"
          onClick={() => setOpenSidenav(!openSidenav)}
        >
          <i className="pi pi-bars" />
        </Button>
      ) : (
        <Navbar navItems={NAV_ITEMS} />
      )}
      <Sidenav open={openSidenav} navItems={NAV_ITEMS} />
    </header>
  );
}
