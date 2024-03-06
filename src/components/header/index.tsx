"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./style.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-6 px-24">
      <Image src="/logo.svg" width={100} height={100} alt="idealite logo" />
      <ul className="menu">
        <li>
          <Link href="/" className={pathname == "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="about" className={pathname == "/about" ? "active" : ""}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="services"
            className={pathname == "/services" ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="portfolio"
            className={pathname == "/portfolio" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="contact"
            className={pathname == "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
