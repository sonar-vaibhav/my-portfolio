export interface GalleryItem {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    image: "/project-cards/ezrooms.png",
    title: "EZRooms",
    description: "Rental accommodation platform with role-based access, search filters, and Google Maps integration.",
    link: "https://github.com/sonar-vaibhav/rental-accommodation-system",
  },
  {
    image: "/project-cards/prcuremgt.png",
    title: "DPU Procurement System",
    description: "Real-world procurement portal with multi-level approval workflows and vendor management.",
    link: "https://dpu-procurement-portal.vercel.app/",
  },
  {
    image: "/project-cards/mailcraft.png",
    title: "MailCraft",
    description: "AI-powered Chrome extension that rewrites emails inside Gmail with tone control.",
    link: "https://github.com/sonar-vaibhav/mailcraft-ai",
  },
  {
    image: "/project-cards/dhansarthi.png",
    title: "DhanSarthi",
    description: "AI personal finance mentor with expense tracking, loan analysis, and savings goals.",
    link: "https://github.com/sonar-vaibhav/dhansarthi",
  },
  {
    image: "/project-cards/order-ease.png",
    title: "OrderEase",
    description: "Restaurant order management with real-time tracking and Razorpay payments.",
    link: "https://order-ease-i1t7.onrender.com/",
  },
  {
    image: "/project-cards/team_env.png",
    title: "Team Envisioners",
    description: "Club website with event highlights, team profiles, and EmailJS contact form.",
    link: "https://team-envisioners.vercel.app/",
  },
];
