import React from 'react';
import { ProfileHeader } from './profile-header';
import { SiteFooter } from './site-footer';

export default function HomeHero() {
  return (
    <div className="h-screen flex justify-center items-center px-2">
      <div className="flex flex-col w-[700px] space-y-4 min-h-[50%]">
        <ProfileHeader />
        { /* children */ }
        <SiteFooter />
      </div>
    </div>
  )
}
