import React from 'react';
import { Link } from 'react-router-dom';
import {
  MenuAlt2Icon,
  ChevronRightIcon,
  ViewGridIcon,
  ChartPieIcon,
  TrendingUpIcon,
  MapIcon,
  ClipboardListIcon,
  ArchiveIcon,
  UserGroupIcon,
  AdjustmentsIcon,
  ReceiptTaxIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

export default function Sidebar({
  toggleSidebar,
  setToggleSidebar,
  hoverSidebar,
  setHoverSidebar,
}) {
  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const handleMouseEnter = () => {
    if (toggleSidebar) {
      setHoverSidebar(true);
    }
  };
  const handleMouseLeave = () => {
    if (toggleSidebar) {
      setHoverSidebar(false);
    }
  };
  return (
    <div className="fixed top-0 left-0 z-30 h-screen bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(21,28,35,0.7)]  backdrop-blur-sm max-h-screen-height flex flex-col justify-between border-r border-dashed border-gray-300 dark:border-gray-700">
      {/* LOGO */}
      <div className="flex h-24 items-center justify-center">
        <img src="./logo.svg" alt="cuisiino" className="h-8 cursor-pointer" />
        <span
          className={`cuisiino-text hidden ml-2 ${
            toggleSidebar ? '' : 'xl:block'
          } text-3xl font-semibold mr-1  ${
            toggleSidebar && hoverSidebar ? 'sm:block xl:block' : ''
          }`}
        >
          Cuisiino
        </span>
      </div>
      {/* HAMBURGUER */}
      <div
        onClick={handleClick}
        className={`hidden absolute h-20 xl:flex items-center top-2 ${
          toggleSidebar ? 'left-20' : 'left-20 xl:left-64'
        } ${toggleSidebar && hoverSidebar ? 'left-20 xl:left-64' : ''}`}
      >
        <button className="hover:bg-gray-200 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 rounded-full p-2 inline-flex items-center dark:hover:bg-[rgba(255,255,255,0.1)] transition ml-8 group">
          <Hamburguer toggleSidebar={toggleSidebar} />
        </button>
      </div>
      {/* MENU ITEMS */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex-1 max-h-max flex items-center pb-32"
      >
        <ul
          className={`list-inside px-3 flex flex-col gap-3 ${
            toggleSidebar ? '' : 'xl:w-[250px]'
          } ${toggleSidebar && hoverSidebar ? 'xl:w-[250px]' : ''}`}
        >
          <ListItems
            link={`/`}
            text={`Checkout`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <ShoppingCartIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
          <ListItems
            link={`/orders`}
            text={`Orders`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <TrendingUpIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
          <ListItems
            link={`/analytics`}
            text={`Analytics`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <ChartPieIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
          <ListItems
            link={`/menus`}
            text={`Menus`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <MapIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
          <ListItems
            link={`/products`}
            text={`Products`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <ClipboardListIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
          <ListItems
            link={`/inventory`}
            text={`Inventory`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <ArchiveIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
          <ListItems
            link={`/expenses`}
            text={`Expenses`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <ReceiptTaxIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
          <ListItems
            link={`/staff`}
            text={`Staff`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <UserGroupIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
          <ListItems
            link={`/settings`}
            text={`Settings`}
            toggle={toggleSidebar}
            hover={hoverSidebar}
          >
            <AdjustmentsIcon
              className={`w-6 h-6 stroke-gray-500 group-hover:stroke-primary transition`}
            />
          </ListItems>
        </ul>
      </div>
    </div>
  );
}
const Hamburguer = ({ toggleSidebar }) => {
  if (!toggleSidebar) {
    return (
      <MenuAlt2Icon
        className={`w-6 h-6 stroke-gray-500 group-hover:stroke-gray-400 transition`}
      />
    );
  } else {
    return (
      <ChevronRightIcon
        className={`w-6 h-6 stroke-gray-500 group-hover:stroke-gray-400 transition`}
      />
    );
  }
};

const ListItems = (props) => {
  return (
    <Link to={props.link}>
      <li className="sidebar-item cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-[rgba(255,255,255,0.1)] px-4 py-2 flex items-center transition hover:text-primary hover:font-semibold group">
        <span
          className={`material-icons-round flex items-center relative group ${
            props.toggle ? '' : 'xl:mr-2'
          } ${props.toggle && props.hover ? 'sm:mr-2' : ''}`}
        >
          {props.children}
        </span>
        <span
          className={`hidden transition-all ${
            props.toggle ? '' : 'xl:block'
          }  ${props.toggle && props.hover ? 'sm:block' : ''}`}
        >
          {props.text}
        </span>
      </li>
    </Link>
  );
};
