import React from 'react';

/*
  Hero styled after the brand slide: huge orange title, thin rule,
  tracked uppercase intro on the left, circular badge on the right.
  Badge image: save as public/hero-badge.png (square, transparent PNG).
*/
const css = `
  .hx{background:#ffece3;color:#3b2219}
  .hx__inner{
    max-width:1240px;margin:0 auto;
    padding:clamp(40px,6vw,72px) max(16px,env(safe-area-inset-right,0px)) clamp(40px,6vw,80px) max(16px,env(safe-area-inset-left,0px));
  }
  .hx__title{
    font-family:var(--display);font-weight:400;text-transform:uppercase;
    color:#fa4e00;line-height:.9;letter-spacing:.01em;margin:0;
    font-size:clamp(3rem,12vw,9rem);
  }
  .hx__title span{display:block}
  .hx__rule{border:0;border-top:1px solid #fa4e00;margin:clamp(12px,2vw,24px) 0 clamp(24px,4vw,48px)}

  .hx__body{display:grid;grid-template-columns:1fr;gap:32px;align-items:center}
  .hx__copy{
    display:grid;gap:2em;
    text-transform:uppercase;letter-spacing:.22em;font-weight:500;line-height:1.65;
    font-size:clamp(.95rem,2.2vw,1.9rem);
  }
  .hx__badge{display:block;width:100%;max-width:420px;height:auto;aspect-ratio:1;justify-self:center;object-fit:contain}

  .hx__welcome{margin-top:clamp(32px,5vw,64px)}
  .hx .welcome div{background:#fff}

  @media (min-width:800px){
    .hx__body{grid-template-columns:minmax(0,1fr) minmax(220px,30%);gap:48px}
  }
`;

export default function Hero() {
  return (
    <header className="hx">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="hx__inner">
        <h1 className="hx__title">
          <span>The Strength</span>
          <span>Shift</span>
        </h1>
        <hr className="hx__rule" />

        <div className="hx__body">
          <div className="hx__copy">
            <h2>The strength-first approach to becoming stronger, leaner and unapologetically powerful - the woman you have always wanted to become.</h2>
            <h2>Feminine power over 40.</h2>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hx__badge"
            src="/rachel-howard-main-logo.png"
            alt="Rachel, founder of The Strength Shift"
            width={600}
            height={600}
          />
        </div>

        <div className="welcome hx__welcome">
          <div><b>Just booked a call?</b><p>Thank you. I can't wait to chat. Have a read through this page before we speak so you know exactly how it all works, then scroll to the bottom for a few things to think about before our call.</p></div>
          <div><b>Asked me for more details?</b><p>Everything's here: what online coaching actually is, who it's for, what you get, what my clients say, and honest answers to the questions everyone asks.</p></div>
        </div>
      </div>
    </header>
  );
}
