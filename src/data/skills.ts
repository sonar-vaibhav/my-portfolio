import {
  SiC, SiCplusplus, SiPython, SiExpress, SiMongodb, SiMysql,
  SiSupabase, SiTailwindcss, SiGit, SiPostman,
} from "react-icons/si";
import {
  FaReact, FaNodeJs, FaJs, FaGithub, FaBootstrap,
  FaHtml5, FaCss3Alt, FaPhp, FaCoffee,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Skill {
  Icon: IconType;
  name: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: [
      { Icon: SiC, name: "C", color: "text-gray-500" },
      { Icon: SiCplusplus, name: "C++", color: "text-blue-500" },
      { Icon: FaCoffee, name: "Java", color: "text-orange-500" },
      { Icon: SiPython, name: "Python", color: "text-green-500" },
      { Icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
    ]
  },
  {
    title: "FRONTEND",
    skills: [
      { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
      { Icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
      { Icon: FaReact, name: "React", color: "text-blue-400" },
      { Icon: SiTailwindcss, name: "Tailwind", color: "text-electric" },
      { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500" },
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { Icon: FaPhp, name: "PHP", color: "text-purple-500" },
      { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { Icon: SiExpress, name: "Express", color: "text-foreground" },
    ]
  },
  {
    title: "DATABASES",
    skills: [
      { Icon: SiMysql, name: "MySQL", color: "text-blue-500" },
      { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
      { Icon: SiSupabase, name: "Supabase", color: "text-green-500" },
    ]
  },
  {
    title: "TOOLS",
    skills: [
      { Icon: SiGit, name: "Git", color: "text-red-500" },
      { Icon: FaGithub, name: "GitHub", color: "text-foreground" },
      { Icon: SiPostman, name: "Postman", color: "text-orange-500" },
    ]
  }
];
