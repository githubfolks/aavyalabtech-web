import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { cn } from "@/utils";
import { MenuItems } from "../MenuItem";
import Logo from "../../../../public/images/logo-color.png";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { FaAngleRight, FaChevronDown } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const DesktopHeader = () => {
  const pathname = usePathname();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeMenu, setActiveMenu] = useState<null | string>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut", duration: 0.1 },
      });

      tl.from(logoRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 0.6,
      })
        .from("li", {
          y: -10,
          opacity: 0,
          stagger: 0.2,
        })
        .from(btnRef.current, {
          x: -40,
          opacity: 0,
          stagger: 0.2,
        });
    },
    { scope: containerRef }
  );

  const handleMouseEnter = (id: string) => {
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="w-full fixed top-4 z-50" onMouseLeave={handleMouseLeave}>
      <div
        className="container mx-auto rounded-[20px] p-3 bg-white/60 backdrop-blur-lg drop-shadow-md"
        ref={containerRef}
      >
        <div className="flex justify-between items-center">
          <div className="col-span-2" ref={logoRef}>
            <Link href="/">
              <Image src={Logo} alt="logo" width={240} />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <ul className="flex gap-10 items-center">
              {MenuItems.map((m) => (
                <li
                  key={m.id}
                  onMouseEnter={() => handleMouseEnter(m.id)}
                  className="relative cursor-pointer flex items-center"
                >
                  <Link
                    href={m.href ?? "/error"}
                    className={cn(
                      "text-lg text-text-main font-bold hover:text-primary-light transition-all relative flex items-center",
                      {
                        "text-primary-main": m.href === pathname,
                        "hover:text-primary-main": m.href !== pathname,
                      }
                    )}
                  >
                    {m.name}
                    {m.child && <FaChevronDown className="ml-1" />}
                    {m.href === pathname && (
                      <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-main rounded-full" />
                    )}
                  </Link>

                  {m.child && activeMenu === m.id && (
                    <div
                      onMouseEnter={() => handleMouseEnter(m.id)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-12 p-2 z-10 min-w-max transition-opacity duration-200 bg-white/90 backdrop-blur-lg border border-white/80 border-t-2 w-48 border-t-primary-main shadow-lg drop-shadow-md rounded-md"
                    >
                      {m?.child?.map((subItem) => (
                        <div key={subItem?.id} className="relative group">
                          <Link
                            href={subItem?.href || "#"}
                            className="flex items-center justify-between px-4 py-2 text-text-main font-semibold hover:bg-primary-main hover:text-white rounded-md transition-all"
                          >
                            <div>{subItem?.name}</div>
                            {subItem?.child?.length && (
                              <FaAngleRight className="ml-2" />
                            )}
                          </Link>

                          {subItem?.child && (
                            <div className="absolute left-full top-0 mt-2 p-2 ml-2 w-max min-w-48  border-t-primary-main  bg-white/90 backdrop-blur-lg border border-white/80 border-t-2 shadow-lg drop-shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                              {subItem.child.map((nestedItem) => (
                                <Link
                                  key={nestedItem.id}
                                  href={nestedItem.href}
                                  className="flex items-center justify-between px-4 py-2 text-text-main font-semibold hover:bg-primary-main hover:text-white rounded-md transition-all"

                                >
                                  {nestedItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="ml-5 justify-self-end">
              <Link href="/contact-us">
                <Button
                  className="text-lg"
                  variant="contained"
                  color="secondary"
                  ref={btnRef}
                  onMouseEnter={() => handleMouseEnter("contact")}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
