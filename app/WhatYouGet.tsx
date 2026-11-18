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
          <h2>Three strong pillars</h2>
        </div>
        <div className="pillars">
          <article className="pillar">
            <h3>The Strength Strategy</h3>
            <ul>
              <li>A personalised strength programme built for you. No wasted exercises.</li>
              <li>Technique reviews so you lift safely and progress faster.</li>
              <li>An exercise library with videos that works in any gym, even on a business trip.</li>
              <li>An app to track every session and watch your numbers go up.</li>
            </ul>
          </article>
          <article className="pillar">
            <h3>No Bullshit Nutrition</h3>

            <ul>
              <li>Personalised nutrition targets. Nothing is off limits.</li>
              <li>Flexible fuelling, so dinners out and a glass of wine still fit.</li>
              <li>Habit-based coaching that takes the mental load off.</li>
              <li>Ongoing adjustments, so you're never guessing.</li>
            </ul>
          </article>
          <article className="pillar">
            <h3>Seen &amp; Supported</h3>
            <ul>
              <li>A weekly 1:1 check-in.</li>
              <li>Direct messaging with your coach.</li>
              <li>Tracking for strength, measurements, sleep, stress and energy.</li>
              <li>Goal setting and habit tracking for small daily wins.</li>
              <li>If something isn't working, we change it quickly.</li>
            </ul>
          </article>
          <article className="pillar">
            <h3>Bonus</h3>
            <h3>Feminine Power</h3>
            <ul>
              <li>A community of women who get it, cheering each other on.</li>
              <li>Monthly squad Q&amp;As.</li>
            </ul>
          </article>
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
