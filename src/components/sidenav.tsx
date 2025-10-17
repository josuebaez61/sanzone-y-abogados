"use client";
import { NavItem } from "@/models";
import Link from "next/link";
import { Button } from "primereact/button";
import { Drawer } from "primereact/drawer";

export interface SidenavProps {
  open: boolean;
  navItems: NavItem[];
}

export default function Sidenav({ open, navItems }: SidenavProps) {
  return (
    <Drawer
      open={open}
      baseZIndex={1000}
      autoZIndex={false}
      appendTo={document.body}
      modal={true}
    >
      {/* <Drawer.Trigger /> */}
      <Drawer.Portal>
        <Drawer.Header>
          <Drawer.Title />
          <Drawer.Close />
        </Drawer.Header>
        <Drawer.Content>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </Drawer.Content>
        <Drawer.Footer />
      </Drawer.Portal>
    </Drawer>
  );
}
