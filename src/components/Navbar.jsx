import { AlignJustify, Building2, Truck, X } from "lucide-react";
import { Link } from "react-router-dom";
import { menuItemsData } from "../constants";
import { useCallback, useEffect, useRef, useState } from "react";

const Navbar = () => {
  const depthLevel = 0;
  const [open, setOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header className="bg-white border-b sticky top-0 left-0 w-full right-0">
        <div className="flex items-center justify-between lg:flex-row flex-row-reverse py-2 gap-4 container !px-4">
        <button onClick={handleToggleMenu} className="xl:hidden inline">
            <AlignJustify size={28} />
          </button>
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" className="md:w-48 w-40" />
          </Link>
          {/* Desktop */}
          <nav className="xl:block hidden">
            <ul className="flex items-center space-x-6 list-none">
              {menuItemsData.map((menu, index) => {
                return (
                  <DesktopDropDownItems
                    items={menu}
                    key={index}
                    depthLevel={depthLevel}
                  />
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/branch-locator"
              className="flex items-center space-x-2 w-full justify-center border px-4 py-2.5 rounded-full text-primary border-primary font-medium whitespace-nowrap"
            >
              <Building2 />
              <span>Branch Locator</span>
            </Link>

            <Link
              to="/track-shipmen"
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2.5 rounded-full w-full text-center justify-center font-medium"
            >
              <Truck />
              <span>Track</span>
            </Link>
          </div>
        </div>
      </header>
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;

const DesktopDropDownItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  let timeoutId;

  const onMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdown(true);
  };

  const onMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdown(false);
    }, 100);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  // const closeDropdown = () => {
  //   dropdown && setDropdown(false);
  // };

  return (
    <li
      className="relative"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => toggleDropdown()}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className="flex items-center gap-2 text-primary hover:text-primary transition"
          >
            <Link to={items.url} className="text-sm">
              {items.title}{" "}
            </Link>
            {depthLevel > 0 ? (
              <span>&raquo; </span>
            ) : (
              <i className="fa-solid fa-caret-down text-xs"></i>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className={`flex items-center gap-2 hover:text-primary transition ${
              depthLevel > 0 ? "text-sm justify-between" : ""
            }`}
          >
            {items.title}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <i className="fa-solid fa-caret-down text-xs"></i>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          to={items.url}
          className={`hover:text-primary transition ${
            depthLevel > 0 ? "text-sm" : ""
          }`}
        >
          {items.title}
        </Link>
      )}
    </li>
  );
};

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass =
    depthLevel > 1
      ? "absolute left-full -top-2 before:w-4 before:h-4 before:absolute before:bg-white before:top-4 before:-left-2 z-0 before:-rotate-45 before:border-gray-300 before:border before:border-b-0 before:border-r-0"
      : "";

  return (
    <ul
      className={`absolute z-10  bg-white border  shadow rounded flex flex-col gap-4 p-4 w-64 top-10 before:w-4 before:h-4 before:absolute before:bg-white before:-top-2 before:rotate-45 before:border-gray-300 before:border before:border-b-0 before:border-r-0 ${dropdownClass} ${
        dropdown ? "block" : "hidden"
      }`}
    >
      {submenus.map((submenu, index) => (
        <DesktopDropDownItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

const MobileMenu = ({ open, setOpen }) => {
  const depthLevel = 0;
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/30 ${open ? "block" : "hidden"}`}
    >
      <div className="fixed left-0 top-0 h-screen bg-white w-72 rounded-tr-2xl rounded-br-2xl overflow-y-auto">
        <button
          onClick={handleClose}
          className="border-2 border-primary p-1 rounded-full absolute top-4 right-2 z-10 text-black"
        >
          <X size={20} />
        </button>
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" className="md:w-48 w-40" />
        </Link>

        <nav className="flex flex-col gap-4 px-4 py-6">
          {menuItemsData.map((menu, index) => (
            <MobileDropDownItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              setOpen={setOpen}
            />
          ))}
        </nav>

        <div className="flex items-center flex-col gap-4 px-4 mt-4 pb-6">
          <Link
            to="/branch-locator"
            className="flex items-center space-x-2 w-full justify-center border px-4 py-2.5 rounded-full text-primary border-primary font-medium"
          >
            <Building2 />
            <span>Branch Locator</span>
          </Link>

          <Link
            to="/track-shipmen"
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2.5 rounded-full w-full text-center justify-center"
          >
            <Truck />
            <span>Track</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const MobileDropDownItems = ({ items, depthLevel, setOpen }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleToggleDropdown = useCallback(
    () => setDropdown((prev) => !prev),
    []
  );

  const closeMenu = () => {
    dropdown && setDropdown(false);
    setOpen(false);
  };
  return (
    <li className="relative list-none">
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {
              handleToggleDropdown();
              closeMenu();
            }}
            className="flex items-center gap-2  text-primary hover:text-primary transition"
          >
            <Link to={items.url} className="text-sm">
              {items.title}{" "}
            </Link>
            {depthLevel > 0 ? (
              <span>&raquo; </span>
            ) : (
              <i className="fa-solid fa-caret-down text-xs"></i>
            )}
          </button>
          <MobileDropDown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={handleToggleDropdown}
            className={`flex items-center gap-2 hover:text-primary transition ${
              depthLevel > 0 ? "text-sm justify-between " : ""
            }`}
          >
            {items.title}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : dropdown ? (
              <i className="fa-solid fa-caret-down text-xs"></i>
            ) : (
              <i className="fa-solid fa-caret-right text-xs"></i>
            )}
          </button>
          <MobileDropDown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          to={items.url}
          onClick={closeMenu}
          className={`hover:text-primary transition  ${
            depthLevel > 1 ? "text-sm" : ""
          }`}
        >
          {items.title}
        </Link>
      )}
    </li>
    // <Link
    //   to={items.url}
    //   className={`hover:text-primary transition ${
    //     items.submenu ? "text-sm" : ""
    //   }`}
    // >
    //   {items.title}
    // </Link>
  );
};

const MobileDropDown = ({ submenus, dropdown, depthLevel }) => {
  return (
    <ul
      className={`list-none ${
        dropdown ? "block" : "hidden"
      } py-2 text-sm flex flex-col gap-2`}
    >
      {submenus.map((submenu, index) => (
        <MobileDropDownItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};
