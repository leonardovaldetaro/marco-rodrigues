"use client"

import BookSection from './home/bookSection';
import HeroSection from './home/heroSection';
import PartnersSection from './home/partnersSection';
import Secttion from './home/section';
import Styles from './Page.module.scss';

export default function Page() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <BookSection />
      <Secttion />
    </>
  );
}