import { NavItem } from "@/models";
import Link from "next/link";

export interface NavbarProps {
  navItems: NavItem[];
}

export const Navbar = ({ navItems }: NavbarProps) => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
