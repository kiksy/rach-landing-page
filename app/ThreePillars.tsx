import React from 'react';

/*
  "Built on three strong pillars" section.
  Images: transparent PNG cut-outs in /public (portrait ~4:5 for the first two,
  the group shot can be wider).

  `offset` sets the image's `right` position per pillar. Any CSS length works;
  `cqi` units scale with the card width (1cqi = 1% of the card).
    negative = pushes the image further out past the card's right edge
    positive = pulls it back inside the card
  Leave it out to use the default (-6cqi).
*/
type Pillar = {
  key: string;
  tone: 'blue' | 'orange';
  title: string;
  text: string;
  pill: string;
  image: string;
  alt: string;
  offset?: string;
};

const pillars: Pillar[] = [
  {
    key: 'training',
    tone: 'blue',
    title: 'The Strength Strategy',
    text: 'Every session has a purpose. No guesswork, no wasted effort, no gym anxiety. Just strength that lasts.',
    pill: 'Training',
    image: '/pillar-1.png',
    alt: 'Rachel flexing in a gym mirror selfie',
    offset: '50cqi',
  },
  {
    key: 'nutrition',
    tone: 'orange',
    title: 'No Bullshit Nutrition',
    text: 'Lose fat without meal plans or food rules. Dinners out and wine included. Simple habits, with support so you\u2019re never guessing.',
    pill: 'Nutrition',
    image: '/pillar-2.png',
    alt: 'Rosie preparing food in a kitchen',
    offset: '30cqi',
  },
  {
    key: 'support',
    tone: 'blue',
    title: 'Seen & Supported System',
    text: 'Built for women 40+, by a coach in perimenopause too. Weekly check-ins so you\u2019re never off track for long, plus a squad of women who push you, back you and take up space with you.',
    pill: 'Support',
    image: '/pillar-3.png',
    alt: 'The Strength Shift squad together at an event',
    offset: '3cqi',
  },
];

/*
  Structure per column:
    .tp__wrap   size container (everything scales with its width via cqi)
      .tp__stage  position:relative, its bottom edge = the card's bottom edge
        .tp__card, .tp__ring, .tp__disc, .tp__img (media hangs below the card)
      .tp__pill   sits below the media (margin-top clears the overhang)
*/
const css = `
  .tp{background:#ffece3;color:#4a251c;overflow-x:clip}
  .tp__inner{
    --gap:clamp(16px,3vw,48px);
    max-width:1240px;margin:0 auto;
    padding:clamp(40px,6vw,72px) max(16px,env(safe-area-inset-right,0px)) clamp(48px,8vw,96px) max(16px,env(safe-area-inset-left,0px));
  }
  .tp__title{
    font-family:var(--display);font-weight:400;text-transform:uppercase;text-align:center;
    color:#4a251c;line-height:1;letter-spacing:.01em;margin:0 auto clamp(28px,5vw,56px);
    font-size:clamp(2rem,6vw,4.6rem);text-wrap:balance;
  }

  .tp__cols{position:relative;display:grid;grid-template-columns:1fr;gap:clamp(40px,8vw,64px);justify-items:center;align-items:start}
  .tp__line{display:none}

  .tp__col{display:grid;align-content:start;justify-items:center;gap:12px;width:100%;max-width:420px}
  .tp__dot{width:38px;height:38px;border-radius:50%;background:#cfe6f3;position:relative;z-index:1}
  .tp__arrow{display:block;width:clamp(36px,4vw,48px);height:auto;color:#cfe6f3}
  .tp--orange .tp__dot{background:#fa4e00}
  .tp--orange .tp__arrow{color:#fa4e00}

  .tp__wrap{container-type:inline-size;width:100%;margin-top:6px}
  .tp__stage{position:relative}

  .tp__card{
    position:relative;z-index:0;
    border-radius:clamp(20px,8cqi,32px);
    background:#cfe6f3;color:#4a251c;
    padding:6cqi 6cqi 8cqi;
    min-height:116cqi;               /* equal heights, room for the photo */
    display:grid;gap:3cqi;align-content:start;
  }
  .tp--orange .tp__card{background:#fa4e00;color:#fff}
  .tp__card h3{
    font-family:var(--body);font-weight:800;text-transform:uppercase;text-align:center;
    letter-spacing:0;line-height:1.08;margin:0;color:inherit;
    font-size:clamp(1.25rem,8.4cqi,1.9rem);
  }
  .tp__card p{margin:0;font-weight:500;line-height:1.3;font-size:clamp(.9rem,4.6cqi,1.1rem)}

  /* decorative circle + dashed ring, anchored to the card's bottom-left */
  .tp__ring,.tp__disc{position:absolute;border-radius:50%;pointer-events:none}
  .tp__ring{width:40cqi;height:40cqi;left:8cqi;bottom:-12cqi;border:2px dashed #4a251c;z-index:1}
  .tp__disc{
    width:36cqi;height:36cqi;left:11cqi;bottom:-6cqi;z-index:1;
    background:#fa4e00;box-shadow:0 0 0 1.4cqi #fff;
  }
  .tp--orange .tp__disc{background:#cfe6f3}

  /* photo hangs over the card's bottom-right edge; 'right' comes from each pillar's offset */
  .tp__img{
    position:absolute;z-index:2;right:var(--img-right,-6cqi);bottom:-36cqi;
    width:64cqi;height:auto;display:block;border-radius:16px;
  }
  .tp--support .tp__img{width:92cqi}

  .tp__pill{
    margin-top:42cqi;display:grid;place-items:center;
    border-radius:999px;background:#cfe6f3;color:#4a251c;
    padding:3.4cqi 4cqi;
    font-weight:800;text-transform:uppercase;letter-spacing:.01em;line-height:1;
    font-size:clamp(1.5rem,11cqi,2.5rem);
  }
  .tp--orange .tp__pill{background:#fa4e00;color:#fff}

  @media (min-width:900px){
    .tp__cols{grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap);justify-items:stretch}
    .tp__col{max-width:none}
    .tp__line{
      display:block;position:absolute;z-index:0;top:19px;height:0;
      left:calc((100% - 2 * var(--gap)) / 6);right:calc((100% - 2 * var(--gap)) / 6);
      border-top:6px dotted #fa4e00;transform:translateY(-50%);
    }
  }
`;

export default function ThreePillars() {
  return (
    <section className="tp" id="pillars" aria-labelledby="pillars-title">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="tp__inner">
        <h2 className="tp__title" id="pillars-title">Built on three strong pillars</h2>

        <div className="tp__cols">
          <div className="tp__line" aria-hidden="true" />

          {pillars.map((p) => (
            <div key={p.key} className={`tp__col tp--${p.tone} tp--${p.key}`}>
              <span className="tp__dot" aria-hidden="true" />
              <svg className="tp__arrow" viewBox="0 0 60 76" aria-hidden="true">
                <path fill="currentColor" d="M22 0h16v40h22L30 76 0 40h22z" />
              </svg>

              <div className="tp__wrap">
                <div className="tp__stage">
                  <article className="tp__card">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </article>
                  <span className="tp__ring" aria-hidden="true" />
                  <span className="tp__disc" aria-hidden="true" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="tp__img"
                    src={p.image}
                    alt={p.alt}
                    width={500}
                    height={640}
                    loading="lazy"
                    style={p.offset ? ({ ['--img-right' as string]: p.offset } as React.CSSProperties) : undefined}
                  />
                </div>
                <div className="tp__pill">{p.pill}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
