import React from 'react';

/*
  Final block on the clients page: intro copy + one full-width image.
  Image lives in /public (served from /main-image-bottom.jpg).
*/
const image = {
  src: '/main-image-bottom.jpg',
  alt: 'Strength Shift clients training, travelling and celebrating',
};

const css = `
  .photowall{background:#ffece3;color:#464043;padding-top:clamp(48px,8vw,96px)}
  .photowall__inner{
    max-width:1080px;margin:0 auto;display:grid;gap:clamp(24px,4vw,40px);
    padding-inline:max(16px,env(safe-area-inset-left,0px));
    padding-bottom:clamp(48px,8vw,96px);
  }
  .photowall__title{
    font-family:var(--display);font-weight:400;text-transform:uppercase;
    color:#fa4e00;line-height:.95;letter-spacing:0;margin:0;
    font-size:clamp(2.6rem,9vw,6rem);max-width:14ch;
  }
  .photowall__copy{display:grid;gap:1.1em;max-width:62ch;font-size:clamp(1.05rem,2.2vw,1.6rem);line-height:1.2;font-weight:500}

  .photowall__image{display:block;width:100%;height:auto;margin:0 auto}
`;

export default function ClientsPhotoWall() {
  return (
    <section className="photowall" aria-labelledby="photowall-title">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="photowall__inner">
        <h2 className="photowall__title" id="photowall-title">
          Where are all the before and after photos?
        </h2>
        <div className="photowall__copy">
          <p>You won’t find a wall of sad underwear photos here. Not because the transformations aren’t happening, but because most of my clients are busy, high-achieving women who would rather not post their stomach on the internet (fair enough).</p>
          <p>And the changes that matter most rarely fit in a photo anyway. I’ve worked with hundreds of women in their 40s and beyond to get properly strong, lose fat without starving themselves, sleep better, feel more confident and walk into the gym knowing exactly what they’re doing.</p>
          <p>I’ve seen women lift weights they never thought they could. Women who stopped hiding in baggy clothes. Women who look in the mirror and finally recognise themselves again. The proof is there. It just doesn’t always come in a bra and knickers.</p>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="photowall__image" src={image.src} alt={image.alt} loading="lazy" />
    </section>
  );
}
