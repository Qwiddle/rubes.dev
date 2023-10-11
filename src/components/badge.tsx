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

export const Badge = ({
  type,
  className,
}: {
  type: Badge;
  className?: string;
}) => {
  return (
    <UIBadge variant="outline" className={`flex gap-2 ${className}`}>
      {badgeEmojis.get(type)}
      <AnimatedText>{type}</AnimatedText>
    </UIBadge>
  );
};
