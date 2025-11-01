import { NavItem } from "@/models";
import Link from "next/link";

export interface NavbarProps {
  navItems: NavItem[];
}

export const Navbar = ({ navItems }: NavbarProps) => {
  return (
    <nav className="flex items-center" aria-label="Navegación principal">
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.url}
              className="relative font-semibold transition-all duration-300 ease-in-out group px-4 py-2"
            >
              {item.label}

              {/* Efecto de subrayado animado usando color del tema */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
