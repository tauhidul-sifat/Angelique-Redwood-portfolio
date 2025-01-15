import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiFreelancer } from "react-icons/si";
import { z } from "zod";

export const navDatas = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blogs & articles",
    href: "/blog-and-articles",
  },
  {
    name: "Videos",
    href: "/videos",
  },
  {
    name: "Books",
    href: "/books",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const formSchema = z.object({
  fastName: z.string().min(2).max(50),
  lastName: z.string().optional().default(""),
  email: z.string().email(),
  subject: z.string().min(2).max(150),
  message: z.string().min(2).max(1500),
});

export const animationVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      duration: 1.4,
    },
  },
  // exit: { opacity: 0, transition: "opacity 0.5s ease-in-out" },
};

export const buttonAnimationVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.6,
    },
  },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  // exit: {},
};

export const workDetails = {
  defaultValue: "top-skills",
  tabs: [
    {
      value: "top-skills",
      label: "Top Skills",
      content: {
        default: "Creative-Writing",
        details: [
          {
            value: "Creative-Writing",
            label: "Creative Writing",
            content: "Add your content here",
          },
          {
            value: "Proofreading",
            label: "Proofreading",
            content: "Add your Creative-Writing content here",
          },
          {
            value: "Copywriting",
            label: "Copywriting",
            content: "Add your Copywriting content here",
          },
          {
            value: "Transcription",
            label: "Transcription",
            content: "Add your Transcription content here",
          },
        ],
      },
    },
    {
      value: "services",
      label: "Services",
      content: {
        default: "Blogging",
        details: [
          {
            value: "Blogging",
            label: "Blogging",
            content: "Add your Blogging content here",
          },
          {
            value: "Copywriting",
            label: "Copywriting",
            content: "Add your Copywriting content here",
          },
          {
            value: "Editing",
            label: "Editing",
            content: "Add your Editing content here",
          },
          {
            value: "Administrative-Assistance",
            label: "Administrative Assistance",
            content: "Add your Administrative-Assistance content here",
          },
          {
            value: "Human-Resources",
            label: "Human Resources (HR)",
            content: "Add your Human-Resources content here",
          },
          {
            value: "Transcription",
            label: "Transcription",
            content: "Add your Transcription content here",
          },
        ],
      },
    },
  ],
};

export const profileDetails = {
  about: {
    title: "About",
    peras: [
      "I'm a dedicated, detail-oriented worker who is eager to expand my horizons. I have extensive experience working in writing, editing, transcription, and administration. My ideal job would be one that allows me to put my literary skills to good use while allowing for personal growth and development.",
      "I've grown my copywriting strengths in creative fiction and fantasy, research-based opinion pieces, spiritual blog articles, and administrative content, while my interests foster my love of incredible storytelling, whether it be through movies, music, or all things literature.",
      "As a voracious reader, it’s only natural that writing is my second indulgence. So why not combine both? Here I sit, a literature geek, constantly trying to learn from my past in the present, with my love of fiction, sci-fi, and fantasy always reminding me most of my reality. So now, I’m choosing to write all the thoughts out. Welcome to Redwood’s Third-Eye Review.",
    ],
  },
};

export const contactDetails = {
  address: [
    {
      Icon: MapPin,
      label: "8502 Preston Rd. Inglewood, Maine 98380, USA",
      id: "8502",
    },
    {
      Icon: Mail,
      label: "kenzi.lawson@example.com",
      id: "854",
    },
    // {
    //   Icon: Phone,
    //   label: ["+1 (555) 555-5555", "+1 (555) 555-5556", "+1 (555) 555-5557"],
    //   id: "7634",
    // },
  ],
  socialMedias: {
    label: "Follow us on",
    icons: [
      { Icon: Twitter, label: "Twitter", url: "#" },
      { Icon: Facebook, label: "Facebook", url: "#" },
      {
        Icon: Linkedin,
        label: "Linkedin",
        url: "https://tailgrids.com/components",
      },
      { Icon: Instagram, label: "Instagram", url: "#" },
    ],
  },
};

export const WorkMarketPlace = [
  {
    Icon: FaUpwork,
    url: "#",
    label: "Upwork",
    description: "Create engaging content that resonates with your audience",
  },
  {
    Icon: SiFiverr,
    url: "#",
    label: "Fiverr",
    description: "Create engaging content that resonates with your audience",
  },
  {
    Icon: SiFreelancer,
    url: "#",
    label: "Freelancer",
    description: "Create engaging content that resonates with your audience",
  },
  {
    Icon: FaLinkedin,
    url: "#",
    label: "Linkedin",
    description: "Create engaging content that resonates with your audience",
  },
];
