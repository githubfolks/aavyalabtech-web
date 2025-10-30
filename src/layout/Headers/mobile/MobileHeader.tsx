import { useState } from "react";
import { Button, IconButton, SwipeableDrawer } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { MenuItems } from "../MenuItem";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/logo-color.png";
import { BiMenu } from "react-icons/bi";

const ToolBar = ({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean; setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const Icon = drawerOpen ? IoMdClose : BiMenu;
  return (
    <div className="bg-white/80 p-3 fixed top-0 drop-shadow-lg backdrop-blur-md z-40 w-full h-auto left-0 flex justify-between items-center">
      <Link href="/">
        <Image src={Logo} alt="logo" width={300} height={63} />
      </Link>
      <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
        <div className="rounded-md backdrop-blur-lg p-2 font-bold text-black">
          <Icon size={20} />
        </div>
      </IconButton>
    </div>
  );
};

const MobileHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Use an object to track active states for each level
  const [activeMenu, setActiveMenu] = useState<{ [key: string]: boolean }>({});

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleToggleMenu = (id: string) => {
    setActiveMenu((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the clicked menu item
    }));
  };

  const drawer = (
    <div className="max-drawer-width z-20 flex flex-col h-full backdrop-blur-xl shadow-lg rounded-lg">
      <div className="bg-secondary-main px-4 w-full py-4 flex items-center justify-between shadow-md">
        <Link href="/">
          <Image src={Logo} alt="logo" width={180} />
        </Link>
        <IconButton onClick={toggleDrawer(false)}>
          <div className="rounded-md bg-black/30 backdrop-blur-md p-2 font-bold text-white transition-transform transform hover:scale-105">
            <IoMdClose size={24} />
          </div>
        </IconButton>
      </div>

      <div className="flex-1 flex flex-col gap-2 my-4 mx-2">
        <ul>
          {MenuItems.map((m) => (
            <li key={m.id}>
              <div
                className={`flex justify-between items-center px-4 my-1 py-3 rounded-lg text-text-main font-semibold 
                  ${activeMenu[m.id] ? 'bg-primary-main text-white' : 'hover:bg-primary-main hover:text-white'} 
                  transition-all cursor-pointer`}
                onClick={() => handleToggleMenu(m.id)}
              >
                <Link href={m.href ?? "/error"} className="md:text-lg transition-all w-full">
                  {m.name}
                </Link>
                {m.child && <span>{activeMenu[m.id] ? '-' : '+'}</span>}
              </div>

              {m.child && activeMenu[m.id] && (
                <ul className="mx-2 mt-2 w-full">
                  {m?.child?.map((subItem) => (
                    <li key={subItem.id}>
                      <div
                        className={`flex justify-between items-center px-4 my-1 py-3 rounded-lg text-text-main font-semibold 
                          ${activeMenu[subItem.id] ? 'bg-primary-main text-white' : 'hover:bg-primary-main hover:text-white'} 
                          transition-all cursor-pointer`}
                        onClick={() => handleToggleMenu(subItem.id)}
                      >
                        <Link
                          href={subItem.href || "#"}
                          className="md:text-lg transition-all w-full"
                          onClick={() => setDrawerOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                        {subItem.child && <span className="px-2">{activeMenu[subItem.id] ? '-' : '+'}</span>}
                      </div>

                      {/* Render third-level items */}
                      {subItem.child && activeMenu[subItem.id] && (
                        <ul className="ml-4 mt-2 w-full">
                          {subItem?.child?.map((thirdItem) => (
                            <li key={thirdItem.id}>
                              <Link
                                href={thirdItem.href || "#"}
                                className="flex md:text-lg justify-between items-center px-4 py-2 rounded-lg text-text-main font-semibold hover:bg-primary-main hover:text-white transition-all cursor-pointer"
                                onClick={() => setDrawerOpen(false)}
                              >
                                {thirdItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="justify-self-end m-2" onClick={() => setDrawerOpen(false)}>
        <Link href="/contact-us" className="w-full">
          <Button variant="contained" color="secondary" fullWidth>
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <ToolBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <SwipeableDrawer
        anchor={"right"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          "& .MuiPaper-root": {
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            boxShadow: "none",
          },
          backgroundColor: "transparent",
        }}
      >
        {drawer}
      </SwipeableDrawer>
    </>
  );
};

export default MobileHeader;
