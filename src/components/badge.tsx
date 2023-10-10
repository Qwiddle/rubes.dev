import { AnimatedText } from "@/components/typography/animated-text";
import { Badge as UIBadge } from "@/components/ui/badge";

export type Badge =
  | "react"
  | "svelte"
  | "tezos"
  | "javascript"
  | "gaming"
  | "node.js";

export const badgeEmojis = new Map([
  ["react", "🔥"],
  ["svelte", "🏆"],
  ["tezos", "💰"],
  ["javascript", "🌐"],
  ["gaming", "🎮"],
  ["node.js", "💾"],
]);

export const Badge = ({ type }: { type: Badge }) => {
  return (
    <UIBadge variant="outline" className="flex gap-2">
      {badgeEmojis.get(type)}
      <AnimatedText>{type}</AnimatedText>
    </UIBadge>
  );
};
