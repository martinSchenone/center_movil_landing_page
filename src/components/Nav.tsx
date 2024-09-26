import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
interface Children {
  children?:ReactNode
}
export const Nav = ({ children } : Children  ) => {
  const closeDrawers = () => {
    document.getElementById("my-drawer-3")?.click();
  };
  
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-[#173B45] w-full  ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="text-[#ffe194] p-1 opacity-90 hover:opacity-100 active:scale-95 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 ">
            <h1 className="text-[#ffe194] text-2xl uppercase font-semibold">
              Center Movil
            </h1>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <a href="#home">
                  <FontAwesomeIcon icon={faHouse} className="text-[#ffe194]" />
                </a>
              </li>
              <li>
                <a href="#jobs" className="text-[#ffe194]">
                  Navbar Item 2
                </a>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#173B45] min-h-full w-64 p-4">
          <li>
            <a onClick={() => closeDrawers()} href="#home">
              <FontAwesomeIcon icon={faHouse} className="text-[#ffe194]" />
            </a>
          </li>
          <li>
            <a onClick={() => closeDrawers()} href="#jobs">
              <FontAwesomeIcon icon={faHouse} className="text-[#ffe194]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
