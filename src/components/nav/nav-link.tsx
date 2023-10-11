"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationLink = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  const pathname = usePathname();

  const hrefActual = href === "/home" ? "/" : href;
  const isActive = pathname === hrefActual;

  return (
    <Link href={hrefActual} passHref>
      <p
        className={`${
          isActive &&
          `cursor-pointer animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent`
        } text-sm text-muted-foreground cursor-pointer hover:animate-text hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent`}
      >
        {text}
      </p>
    </Link>
  );
};
