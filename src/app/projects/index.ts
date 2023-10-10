import {Badge} from "@/components/badge";

export const projects: {
  name: string;
  description: string;
  icon: string;
  link: string;
  content: string;
  tags: Badge[];
}[] = [
  {
    name: "PepeSwap",
    description: "react - alternative frontend for a Tezos DEX dApp",
    icon: "🐸",
    link: "https://pot.tezospepe.com/swap",
    content: "https://i.imgur.com/HR5tdrd.png",
    tags: ["react", "tezos"],
  },
  {
    name: "Salsa Tools",
    description: "react - defi analytics for the salsaDAO ecosystem",
    icon: "🏆",
    link: "https://salsatools.xyz",
    content:
      "https://user-images.githubusercontent.com/24196928/229689409-87805e09-6f60-4b50-8348-77f2364113dd.png",
    tags: ["react", "tezos"],
  },
  {
    name: "svelte-tezos",
    description:
      "svelte - an opensource library easing connections between svelte and the tezos blockchain.",
    icon: "👨🏻‍💻",
    link: "https://google.com/",
    content:
      "https://user-images.githubusercontent.com/24196928/250879591-a2654413-acc2-4afc-b28e-3130486f11cd.png",
    tags: ["svelte", "tezos"],
  },
];
