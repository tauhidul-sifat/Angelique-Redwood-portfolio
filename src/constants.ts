import { Mail, MapPin } from "lucide-react";
import { TbBrandFiverr } from "react-icons/tb";
import { FaUpwork, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiFiverr, SiFreelancer } from "react-icons/si";
import { FaBookReader } from "react-icons/fa";
import { PiArticleNyTimes } from "react-icons/pi";
import { ImBlog } from "react-icons/im";
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
    name: "Articles",
    href: "/articles",
  },
  {
    name: "Blogs",
    href: "/blogs",
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
      label: "State College, Pennsylvania, United States ",
      id: "8502",
    },
    {
      Icon: Mail,
      label: "angeliqueredwood@gmail.com",
      id: "854",
    },
  ],
  socialMedias: {
    label: "Follow us on",
    icons: [
      { Icon: FaSquareXTwitter, label: "Twitter", url: "#" },
      { Icon: FaFacebook, label: "Facebook", url: "#" },
      {
        Icon: FaLinkedin,
        label: "Linkedin",
        url: "https://www.linkedin.com/in/angeliqueredwood/",
      },
      { Icon: FaSquareInstagram, label: "Instagram", url: "#" },
    ],
  },
};

export const footersocialIcons = [
  { Icon: FaUpwork, url: "#", label: "Upwork" },
  { Icon: TbBrandFiverr, url: "#", label: "Fiverr" },
  { Icon: SiFreelancer, url: "#", label: "Freelancer" },
  { Icon: FaSquareXTwitter, label: "Twitter", url: "#" },
  { Icon: FaFacebook, label: "Facebook", url: "#" },
  {
    Icon: FaLinkedin,
    label: "Linkedin",
    url: "https://www.linkedin.com/in/angeliqueredwood/",
  },
  { Icon: FaSquareInstagram, label: "Instagram", url: "#" },
];

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

export const featureLinks = [
  {
    label: "Blogs",
    url: "/blogs",
    Icon: ImBlog,
    title: "Writing Insights & Creative Musings",
    description:
      " Dive into the latest writing tips, creative inspiration, and industry news on Angelique Redwood's blog. Find valuable advice for aspiring writers and stay updated on her latest projects.",
  },
  {
    label: "Articles",
    url: "/articles",
    Icon: PiArticleNyTimes,
    title: "Explore a Diverse Collection",
    description:
      " Dive into the latest writing tips, creative inspiration, and industry news on Angelique Redwood's blog. Find valuable advice for aspiring writers and stay updated on her latest projects.",
  },
  {
    label: "Books",
    url: "/books",
    Icon: FaBookReader,
    title: "Discover Her Published Works",
    description:
      "Discover the captivating world of Angelique Redwood's published books. Explore a range of genres and find the perfect read for your next literary adventure.",
  },
];
