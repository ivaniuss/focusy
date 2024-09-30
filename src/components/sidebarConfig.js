// sidebarConfig.js
import { Image, Volume2, Music, Clock } from "lucide-react";

// Configuración de los botones
export const leftButtons = [
  {
    icon: Image,
    modal: "gallery",
    label: "Galería",
  },
  {
    icon: Volume2,
    modal: "sounds",
    label: "Sonidos",
  },
  {
    icon: Music,
    modal: "music",
    label: "Música",
  },
];

export const rightButtons = [
  {
    icon: Clock,
    modal: "pomodoro",
    label: "Pomodoro",
  },
];
