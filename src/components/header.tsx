"use client";
import { menus } from "@/data/menus";
import { CableCar, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <CableCar className="h-8 w-8 text-green-800" />
            <span className="text-xl font-bold text-gray-900">
              Gabriel Yang
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {menus.map((menu) => (
              <HeaderMenuLink key={menu.url} to={menu.url}>
                {menu.title}
              </HeaderMenuLink>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menus.map((menu) => (
                <MobileHeaderMenuLink
                  key={menu.url}
                  to={menu.url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.title}
                </MobileHeaderMenuLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

type HeaderMenuLinkProps = {
  to: string;
  children: React.ReactNode;
};
function HeaderMenuLink({ to, children }: HeaderMenuLinkProps) {
  const pathname = usePathname();

  const isActive = useCallback(
    (path: string) => {
      return pathname === path;
    },
    [pathname],
  );

  return (
    <Link
      href={to}
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive(to)
          ? "text-green-800 border-b-2 border-green-800"
          : "text-gray-700 hover:text-green-800"
      }`}
    >
      {children}
    </Link>
  );
}

type MobileHeaderMenuLinkProps = HeaderMenuLinkProps & {
  onClick: () => void;
};
function MobileHeaderMenuLink({
  to,
  children,
  onClick,
}: MobileHeaderMenuLinkProps) {
  const pathname = usePathname();
  const isActive = useCallback(
    (path: string) => {
      return pathname === path;
    },
    [pathname],
  );

  return (
    <Link
      href={to}
      className={`block px-3 py-2 text-base font-medium ${
        isActive(to)
          ? "text-green-800 bg-blue-50"
          : "text-gray-700 hover:text-green-800 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
