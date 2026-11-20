import React from 'react';

const css = `
  .panel{background:var(--card);border-radius:24px;padding:clamp(20px,3vw,32px)}
`;

export default function WhatYouGet() {
  return (
    <section className="band blush" id="what-you-get">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="wrap">
        <div className="stack narrow">
          <p className="eyebrow">What you actually get</p>
        
        </div>
        
        <div className="stack panel">
          <p className="bigsay">You're not investing in an app. You're investing in what it helps you do.</p>
          <ul className="outcomes">
            <li>Lift weights you used to walk straight past.</li>
            <li>Like what you see in the changing room mirror.</li>
            <li>Have the energy for a Friday night out, and still make progress.</li>
            <li>Feel like you again. Maybe more than ever.</li>
          </ul>
          <p className="narrow">Plus a coach who sees you and actually cares where you're going.</p>
        </div>
      </div>
    </section>
  );
}
