"use client";
import { NavItem } from "@/models";
import Link from "next/link";
import { Drawer } from "primereact/drawer";
import Image from "next/image";
import Logo from "@/../public/assets/images/sanzone-2.svg";
import {
  DrawerChangeEvent,
  DrawerContentInstance,
} from "@primereact/types/shared/drawer";

export interface SidenavProps {
  open: boolean;
  onOpenChange?: (e: DrawerChangeEvent) => void;
  navItems: NavItem[];
}

export default function Sidenav({
  open,
  navItems,
  onOpenChange,
}: SidenavProps) {
  return (
    <Drawer
      open={open}
      pt={{
        mask: {
          className: "z-50",
        },
      }}
      baseZIndex={1000}
      autoZIndex={false}
      modal={true}
      onOpenChange={onOpenChange}
    >
      {/* <Drawer.Trigger /> */}
      <Drawer.Portal>
        <Drawer.Header>
          <Drawer.Title />
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Sanzone & Abogados"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>
          <Drawer.Close />
        </Drawer.Header>
        <Drawer.Content>
          {(instance: DrawerContentInstance) => {
            const { drawer } = instance;
            return (
              <nav className="p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        onClick={drawer?.close}
                        href={item.url}
                        className="block w-full px-4 py-3 text-gray-700 font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm group relative"
                      >
                        <span className="relative z-10">{item.label}</span>

                        {/* Indicador lateral animado */}
                        <span className="absolute left-0 top-0 w-1 h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 ease-in-out rounded-r-full"></span>

                        {/* Efecto de fondo sutil */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          }}
        </Drawer.Content>
        <Drawer.Footer />
      </Drawer.Portal>
    </Drawer>
  );
}
