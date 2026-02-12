import { Wrench, Disc, Cog, Cable, type LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  number: string;
}

export const services: Service[] = [
  {
    title: "Oil Change & Maintenance",
    description: "Regular oil changes, fluid checks, filter replacements, and preventive care to keep your vehicle running smoothly and extend its lifespan.",
    category: "Maintenance",
    icon: Wrench,
    number: "01"
  },
  {
    title: "Brake Repair & Service",
    description: "Complete brake system inspection, pad replacement, rotor resurfacing, and hydraulic repairs for safe stopping power you can trust.",
    category: "Safety",
    icon: Disc,
    number: "02"
  },
  {
    title: "Engine Diagnostics & Repair",
    description: "Advanced diagnostic equipment to identify engine issues quickly. Expert repairs for all engine problems, from minor issues to major overhauls.",
    category: "Performance",
    icon: Cog,
    number: "03"
  },
  {
    title: "Steering & Suspension",
    description: "Complete steering and suspension system service to ensure safe handling and a smooth ride for your vehicle.",
    category: "Safety",
    icon: Cable,
    number: "04"
  },
  {
    title: "Transmission Service & Repair",
    description: "Transmission fluid exchanges, filter replacements, and complete transmission repairs for automatic and manual transmissions.",
    category: "Performance",
    icon: Cog,
    number: "05"
  }
];
