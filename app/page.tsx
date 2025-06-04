"use client"

import { Channel } from 'diagnostics_channel';
import BookSection from './home/bookSection';
import HeroSection from './home/heroSection';
import PartnersSection from './home/partnersSection';
import Secttion from './home/section';
import Styles from './Page.module.scss';
import ChannelSection from './home/channelSection';

export default function Page() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ChannelSection />
      <BookSection />
      <Secttion />
    </>
  );
}