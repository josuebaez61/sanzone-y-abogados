import { NavItem } from "@/models";
import Link from "next/link";

export interface NavbarProps {
  navItems: NavItem[];
}

export const Navbar = ({ navItems }: NavbarProps) => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.url}
              className="relative text-gray-700 font-medium transition-all duration-300 ease-in-out hover:text-blue-600 group px-2 py-1"
            >
              {item.label}

              {/* Efecto de subrayado animado */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
