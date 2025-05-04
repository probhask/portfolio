import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const ContactInformation = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bhaskar-sharma-105a55238/",
    icon: IoLogoLinkedin,
    color: "text-blue-600 hover:text-blue-700",
  },
  {
    name: "GitHub",
    link: "https://github.com/probhask",
    icon: IoLogoGithub,
    color:
      "text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white",
  },
  {
    name: "Email",
    link: "mailto:bhaskarneeraj23@gmail.com",
    icon: BiLogoGmail,
    color: "text-red-500 hover:text-red-600",
  },
];
