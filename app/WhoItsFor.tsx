import React from 'react';

const css = `
  .panel{background:var(--blush);border-radius:24px;padding:clamp(20px,3vw,32px);align-content:start}
`;

export default function WhoItsFor() {
  return (
    <section className="band paper" id="who">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="wrap">
        <div className="stack narrow">
          <p className="eyebrow">Who it's for</p>
          <h2>Is this you?</h2>
        </div>
        <div className="two">
          <div className="stack panel">
            <h3>This is for you if…</h3>
            <ul className="ticks">
              <li>You're 40+ and you've put everyone else first for years. You're ready for something that's about you.</li>
              <li>You're already in the gym (or ready to be), but you're doing machines and classes with no real plan, and nothing's changing.</li>
              <li>You're eating less than ever and still gaining weight around your middle.</li>
              <li>You're tired all the time and dealing with (peri)menopause symptoms like poor sleep, brain fog, anxiety or low mood.</li>
              <li>You've tried Slimming World, calorie counting, HIIT, bootcamps or apps, and you're done with things that don't last.</li>
              <li>You want to feel strong, capable and like yourself again, for the next 40 years, not just the next 6 weeks.</li>
            </ul>
          </div>
          <div className="stack panel">
            <h3>It's probably not for you if…</h3>
            <ul className="ticks crosses">
              <li>You want a quick fix before a holiday and then to stop.</li>
              <li>You're looking for a starvation diet or a list of foods you can never eat again.</li>
              <li>You're not ready to show up honestly each week. You don't have to be perfect, but you do have to tell me what's going on.</li>
            </ul>
            <p className="quoteline">&quot;I'm in the gym all the time and nothing's changing.&quot; If you've ever said that, you're in the right place.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
