import React from 'react';

/*
  Meet the coaches block.
  Replace the placeholder images with transparent PNG cut-outs, e.g.
  /coaches/rachel.png and /coaches/rosie.png (square, circle badge included).
*/
const coaches = [
  {
    key: 'rachel',
    title: 'Rachel, Founder & Coach',
    image: 'meet-coach-rachel.png',
    alt: 'Rachel, founder and coach of The Strength Shift',
    paragraphs: [
      'I\u2019m a qualified personal trainer and British Powerlifting coach, and I\u2019m living this too. Perimenopause, anxiety, broken sleep, a body that suddenly stopped playing by the old rules. I get it, because I\u2019m in it.',
      'I started The Strength Shift because women over 40 are drowning in conflicting advice. Eat less. Do more cardio. Try this fad. None of it works long term, and most of it leaves you exhausted. I wanted to cut through all of that and give women a clear, simple plan that actually gets results.',
    ],
  },
  {
    key: 'rosie',
    title: 'Rosie, Head Coach',
    image: 'meet-coach-rosie.png',
    alt: 'Rosie, head coach of The Strength Shift',
    paragraphs: [
      'I\u2019m a qualified Nutritionist and Food Behaviour Coach, so I don\u2019t just look at what you eat. I look at why you eat it. I\u2019ve been in the fitness industry for nearly 20 years. I did a master\u2019s in sports performance, worked with elite athletes, spent years as a PT on the gym floor and ran my own running performance company.',
      'Outside of work, life is busy. I\u2019ve got two kids and two dogs, I\u2019ve just run a marathon and I\u2019ve done a few triathlons along the way. So I understand being stretched thin.',
    ],
  },
];

const css = `
  .mc{background:#ffece3;color:#ffece3}
  .mc__inner{
    max-width:1240px;margin:0 auto;
    padding:clamp(40px,6vw,72px) max(16px,env(safe-area-inset-right,0px)) clamp(40px,6vw,80px) max(16px,env(safe-area-inset-left,0px));
  }
  .mc__title{
    font-family:var(--display);font-weight:400;text-transform:uppercase;
    color:#4a251c;line-height:.95;letter-spacing:.01em;margin:0;
    font-size:clamp(2.6rem,9vw,8rem);
  }
  .mc__rule{border:0;border-top:1px solid #fa4e00;margin:clamp(12px,2vw,24px) 0 clamp(24px,4vw,48px)}

  .mc__grid{display:grid;gap:24px}
  .coach{display:grid;gap:16px;justify-items:center}
  .coach__img{display:block;width:min(70%,320px);height:auto;aspect-ratio:1;object-fit:cover;border-radius:50%}
  .coach__card{
    background:#4a251c;color:#ffece3;border-radius:24px;
    padding:clamp(20px,3vw,28px);display:grid;gap:1em;align-content:start;width:100%;
    font-size:clamp(1rem,1.5vw,1rem);line-height:1.5;font-weight:500;
  }
  .coach__card h3{
    font-family:var(--body);text-transform:none;letter-spacing:0;line-height:1.3;
    font-size:inherit;font-weight:700;color:inherit;margin:0 0 .5em;
  }
  .coach__card p{margin:0}

  /* Desktop: badge | card | card | badge, like the mockup */
  @media (min-width:960px){
    .mc__grid{grid-template-columns:.8fr 1fr 1fr .8fr;gap:20px;align-items:stretch}
    .coach{display:contents}
    .coach__img{width:100%;max-width:none;align-self:end}
    .coach--rachel .coach__img{grid-column:1;grid-row:1}
    .coach--rachel .coach__card{grid-column:2;grid-row:1}
    .coach--rosie .coach__card{grid-column:3;grid-row:1}
    .coach--rosie .coach__img{grid-column:4;grid-row:1}
  }
`;

export default function MeetTheCoaches() {
  return (
    <section className="mc" id="coaches" aria-labelledby="coaches-title">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="mc__inner">
        <h2 className="mc__title" id="coaches-title">Meet the coaches</h2>
        <hr className="mc__rule" />

        <div className="mc__grid">
          {coaches.map((c) => (
            <article key={c.key} className={`coach coach--${c.key}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="coach__img" src={c.image} alt={c.alt} width={700} height={700} loading="lazy" />
              <div className="coach__card">
                <h3>{c.title}</h3>
                {c.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
