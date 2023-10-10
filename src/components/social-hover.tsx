import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import React from 'react';
import { NavigationLink } from './nav/nav-link';

export default function SocialHover({ children, preview }: {
  preview: string,
  children: React.ReactNode,
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <NavigationLink text={preview} href="#" />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        {children}
      </HoverCardContent>
    </HoverCard>
  );
}