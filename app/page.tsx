import React from 'react';
import Styles from './Styles';
import Hero from './Hero';
import AboutRachel from './AboutRachel';
import OnlineCoaching from './OnlineCoaching';
import WhoItsFor from './WhoItsFor';
import WhatYouGet from './WhatYouGet';
import MeetTheCoaches from './MeetTheCoaches';
import ThreePillars from './ThreePillars';
import Results from './Results';
import Clients from './clients/page';
import Faq from './Faq';
import CallPrep from './CallPrep';
import Footer from './Footer';

export default function Page() {
  return (
    <>
      <head>
        <title>The Strength Shift</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geological:wght@300;400;500;600;700&display=swap" />
      </head>

      <Styles />

      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="sq" viewBox="0 0 180 18">
          <path d="M2 9 C 17 -3, 32 21, 47 9 S 77 -3, 92 9 S 122 21, 137 9 S 167 -3, 178 9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" />
        </symbol>
      </svg>

      <Hero />
      <AboutRachel />
      <OnlineCoaching />
      <WhoItsFor />
      <WhatYouGet />
      <ThreePillars />
      <MeetTheCoaches />
      <Results />
      <Clients />
      <Faq />
      <CallPrep />
      <Footer />
    </>
  );
}
