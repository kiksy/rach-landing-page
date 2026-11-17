import React from 'react';

const css = `
        :root{
          --blush:#F9DED3;
          --sky:#CFE6F3;
          --paper:#FFF9F6;
          --ink:#3B2219;
          --ink-soft:#6B4B3F;
          --orange:#E8601C;
          --orange-ink:#FFFFFF;
          --line:#E9C6B7;
          --card:#FFFFFF;
          --display:"Dh Caloins", system-ui, sans-serif;
          --body:"Geological", system-ui, sans-serif;
          --step-0:1rem; --step-1:1.2rem; --step-2:1.5rem; --step-3:clamp(1.8rem,4.5vw,2.6rem); --step-4:clamp(2.6rem,8vw,4.6rem);
        }
        @media (prefers-color-scheme: dark){
          :root:not([data-theme="light"]){
            --blush:#2E1B15; --sky:#1C2730; --paper:#24150F; --ink:#FBE9E1; --ink-soft:#D9BCAF;
            --orange:#FF8A4C; --orange-ink:#24150F; --line:#4A3127; --card:#33201A; color-scheme:dark;
          }
        }
        :root[data-theme="dark"]{
          --blush:#2E1B15; --sky:#1C2730; --paper:#24150F; --ink:#FBE9E1; --ink-soft:#D9BCAF;
          --orange:#FF8A4C; --orange-ink:#24150F; --line:#4A3127; --card:#33201A; color-scheme:dark;
        }
        html { box-sizing: border-box; }
        body{background:var(--paper);color:var(--ink);font-family:var(--body);font-size:var(--step-0);line-height:1.65;margin:0}
        .band{padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
        .band.blush{background:var(--blush)} .band.sky{background:var(--sky)} .band.paper{background:var(--paper)}
        .wrap{max-width:1080px;margin:0 auto;padding-block:clamp(48px,8vw,96px);display:grid;gap:32px}
        .narrow{max-width:65ch}
        h1,h2,h3{font-family:var(--display);font-weight:400;line-height:1.05;margin:0;text-wrap:balance;letter-spacing:.01em}
        h1{font-size:var(--step-4);text-transform:uppercase}
        h2{font-size:var(--step-3);text-transform:uppercase}
        h3{font-size:var(--step-1);text-transform:uppercase;letter-spacing:.02em}
        p{margin:0}
        .stack{display:grid;gap:16px}
        .eyebrow{font-weight:700;text-transform:uppercase;letter-spacing:.14em;font-size:.8rem;color:var(--orange)}
        .lead{font-size:var(--step-1);color:var(--ink-soft);font-weight:500}
        em.o{font-style:normal;color:var(--orange)}
        strong{font-weight:700}
        .squiggle{display:block;width:180px;height:18px;color:var(--orange)}

        .hero .wrap{gap:24px;padding-block:clamp(56px,10vw,120px) clamp(40px,7vw,80px)}
        .hero h1 span{display:block}
        .tagline{font-family:var(--display);font-size:var(--step-2);color:var(--orange);text-transform:uppercase}
        .welcome{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:16px;margin-top:8px}
        .welcome div{background:var(--card);border-radius:18px;padding:20px 22px;display:grid;gap:6px}
        .welcome b{font-family:var(--display);font-weight:400;text-transform:uppercase;font-size:1.05rem}

        .notlist{display:flex;flex-wrap:wrap;gap:10px}
        .notlist span{border:2px solid var(--ink);border-radius:999px;padding:6px 14px;font-weight:600;font-size:.9rem;text-decoration:line-through;text-decoration-color:var(--orange);text-decoration-thickness:2px}
        .week{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px;list-style:none;padding:0;margin:0}
        .week li{background:var(--card);border-radius:18px;padding:20px;display:grid;gap:8px;align-content:start}
        .week .when{font-weight:700;font-size:.78rem;text-transform:uppercase;letter-spacing:.12em;color:var(--orange)}

        .two{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:24px}
        .two > div{min-width:0}
        .ticks{list-style:none;padding:0;margin:0;display:grid;gap:12px}
        .ticks li{padding-left:34px;position:relative}
        .ticks li::before{content:"";position:absolute;left:0;top:.3em;width:20px;height:20px;border-radius:50%;background:var(--orange)}
        .ticks li::after{content:"";position:absolute;left:6px;top:calc(.3em + 5px);width:8px;height:5px;border-left:2px solid var(--orange-ink);border-bottom:2px solid var(--orange-ink);transform:rotate(-45deg)}
        .crosses li::before{background:transparent;border:2px solid var(--ink-soft)}
        .crosses li::after{content:"×";border:0;transform:none;left:5px;top:calc(.3em - 4px);width:auto;height:auto;color:var(--ink-soft);font-weight:700}
        .quoteline{font-family:var(--display);font-size:var(--step-1);line-height:1.3;text-transform:none}

        .pillars{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:16px}
        .pillar{background:var(--card);border-radius:20px;padding:24px;display:grid;gap:12px;align-content:start}
        .pillar ul{margin:0;padding-left:18px;display:grid;gap:6px;color:var(--ink-soft);font-size:.95rem}
        .pillar .who{font-size:.8rem;font-weight:600;color:var(--ink-soft)}
        .bigsay{font-family:var(--display);font-size:var(--step-2);line-height:1.2;text-transform:uppercase;max-width:28ch}
        .outcomes{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:12px;list-style:none;padding:0;margin:0}
        .outcomes li{border-top:3px solid var(--orange);padding-top:12px;font-weight:600}

        .months{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px;list-style:none;padding:0;margin:0}
        .months li{display:grid;gap:8px;align-content:start;background:var(--card);border-radius:18px;padding:20px}
        .months .m{font-family:var(--display);font-size:2.4rem;color:var(--orange);line-height:1}

        .shift{width:100%;border-collapse:collapse;font-size:.95rem}
        .tablewrap{overflow-x:auto;background:var(--card);border-radius:18px;padding:8px 20px}
        .shift th{font-family:var(--display);font-weight:400;text-transform:uppercase;text-align:left;padding:14px 8px;font-size:1rem}
        .shift td{padding:12px 8px;border-top:1px solid var(--line);vertical-align:top}
        .shift td:first-child{color:var(--ink-soft)}
        .shift td:last-child{font-weight:600}

        .quotes{columns:3 300px;column-gap:16px}
        .q{break-inside:avoid;background:var(--card);border-radius:20px;padding:24px;margin:0 0 16px;display:grid;gap:12px}
        .q .name{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
        .q .name b{font-family:var(--display);font-weight:400;font-size:1.4rem;text-transform:uppercase}
        .q .age{font-size:.75rem;font-weight:700;letter-spacing:.12em;color:var(--orange);text-transform:uppercase}
        .q .headline{font-weight:700}
        .q blockquote{margin:0;font-style:italic;font-weight:500;color:var(--ink-soft)}
        .note{font-size:.9rem;color:var(--ink-soft);font-style:italic}

        .faq{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:16px}
        .faq article{background:var(--card);border-radius:20px;padding:24px;display:grid;gap:10px;align-content:start;min-width:0}
        .faq h3{text-transform:none;font-size:1.25rem;letter-spacing:0;line-height:1.2}
        .faq p{color:var(--ink-soft)}
        .faq .feature{border:3px solid var(--orange)}
        .compare{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px}
        .compare div{background:var(--blush);border-radius:12px;padding:12px;font-size:.88rem;display:grid;gap:4px;align-content:start}
        .compare b{font-family:var(--display);font-weight:400;text-transform:uppercase;font-size:.95rem}
        @media (max-width:420px){.compare{grid-template-columns:1fr}}

        .close .wrap{text-align:left}
        .cta{display:inline-flex;align-items:center;gap:10px;background:var(--orange);color:var(--orange-ink);font-family:var(--display);font-size:1.3rem;text-transform:uppercase;padding:14px 26px;border-radius:999px;width:fit-content}
        .prep{list-style:none;padding:0;margin:0;display:grid;gap:12px;counter-reset:p}
        .prep li{counter-increment:p;padding-left:44px;position:relative}
        .prep li::before{content:counter(p);position:absolute;left:0;top:-2px;width:30px;height:30px;border-radius:50%;background:var(--ink);color:var(--paper);display:grid;place-items:center;font-weight:700;font-size:.9rem}
        footer .wrap{padding-block:32px;font-size:.85rem;color:var(--ink-soft);gap:6px}
      `;

export default function Styles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
