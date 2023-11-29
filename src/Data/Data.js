// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "RTA",
    color: {
      backGround: "#1B203D",
      // boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    fullform: "Report Automation",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
  title: "PSS",
    color: {
      backGround: "#1B203D",
      // boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    fullform: "Portfolio Sustainability Score",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "SAO",
    color: {
      backGround: "#1B203D",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    fullform: "Specially Abled Onboarded",
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "CFS",
    color: {
      backGround:
        "#1B203D",
      // boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    fullform: "Carbon Footprint Score",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "RFS",
    color: {
      backGround:
        "#1B203D",
      // boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    fullform: "Regulatory Fine Saved",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "CEFC",
    color: {
      backGround:
        "#1B203D",
      // boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    fullform: "CogniEase Financial Companion",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  
];

// Recent Update Card Data
export const UpdatesData = [
  // {
  //   img: img1,
  //   name: "Andrew Thomas",
  //   noti: "has ordered Apple smart watch 2500mh battery.",
  //   time: "25 seconds ago",
  // },
  // {
  //   img: img2,
  //   name: "James Bond",
  //   noti: "has received Samsung gadget for charging battery.",
  //   time: "30 minutes ago",
  // },
  // {
  //   img: img3,
  //   name: "Iron Man",
  //   noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
  //   time: "2 hours ago",
  // },
];
