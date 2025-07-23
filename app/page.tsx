"use client"

import BookSection from './home/bookSection';
import HeroSection from './home/heroSection';
import PartnersSection from './home/partnersSection';
import Secttion from './home/section';
import ChannelSection from './home/channelSection';
import AboutSection from './home/aboutSection';

import TalkSection from './home/talkkSection';


export default function Page() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ChannelSection />
      <TalkSection />
      <BookSection />
      <Secttion />
    </>
  );
}