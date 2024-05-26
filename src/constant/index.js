import { FcCustomerSupport } from "react-icons/fc";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaFacebook,FaGithub  } from "react-icons/fa";
import { MdOutlineSignalWifiConnectedNoInternet4 } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
export const cardValue = [
  {
    icon: FcCustomerSupport,
    title: "Single User",
    price: "$149",
    storage: "500 GB Storage",
    user: "1 Granted User",
    send: "Send up to 2 GB",
    btn: "start-trial",
  },
  {
    icon: HiMiniUserGroup,
    title: "multi User",
    price: "$200",
    storage: "300 GB Storage",
    user: "3 Granted User",
    send: "Send up to 20 GB",
    btn: "start-trial",
  },
  {
    icon: MdOutlineSignalWifiConnectedNoInternet4,
    title: "Wifi User",
    price: "$249",
    storage: "200 GB Storage",
    user: "5 Granted User",
    send: "Send up to 200 GB",
    btn: "start-trial",
  },
];


export const socialLinks = [
    {
      title: "Facebook",
      icon: FaFacebook,
    },
    {
      title: "Instagram",
      icon: AiFillInstagram,
    },
    {
      title: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      title: "Github",
      icon: FaGithub,
    },
  ];