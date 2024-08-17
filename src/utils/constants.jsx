import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
  export const SidebarItems = [
    { icon: PresentationChartBarIcon, label: 'Dashboard',link:"/" },
    { icon: ShoppingBagIcon, label: 'Builder', link:"/builder"},
    { icon: InboxIcon, label: 'Properties', link:"/properties"},
    { icon: UserCircleIcon, label: 'Bank', link:"/bank"},
  ];
  export const NavList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
    </ul>
  );