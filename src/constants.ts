import { BookOpenText } from "lucide-react";
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
    name: "Play Lists",
    href: "/play-lists",
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

export const workDetails = [
  {
    value: "top-skills",
    label: "Top Skills",
    content: [
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
  {
    value: "services",
    label: "Services",
    content: [
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
];
