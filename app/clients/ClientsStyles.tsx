import React from 'react';

/*
  Each block sits inside .client-wrap, which is a size container.
  Everything inside scales with cqi (1% of the block's width), so the
  block looks the same at any size, like the design. Below 520px it
  stacks: name, text, then the photo.
*/
const css = `
  .clients-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr));gap:24px}

  .client-wrap{container-type:inline-size;min-width:0}
  .client{
    --n:6;
    background:#ffece3;
    border-radius:24px;
    overflow:hidden;
    display:grid;
    grid-template-columns:1fr;
    padding:6cqi 6cqi 0;
    color:#464043;
  }
  .client__name{
    font-family:var(--display);
    font-weight:400;
    color:#fa4e00;
    text-transform:uppercase;
    line-height:.85;
    letter-spacing:0;
    margin:0;
    /* shrinks long names so they stay inside the block */
    font-size:min(26cqi, calc(148cqi / var(--n)));
  }
  .client__body{
    display:grid;
    gap:1.1em;
    margin-top:5cqi;
    padding-bottom:6cqi;
    font-size:clamp(1rem, 3.4cqi, 1.35rem);
    line-height:1.25;
    font-weight:500;
  }
  .client__headline{font-weight:700}
  .client__img{
    display:block;
    width:72%;
    height:auto;
    margin:0 0 0 auto;
  }
  .client--noimg{padding-bottom:0}
  .client--noimg .client__body{max-width:60ch}

  @container (min-width:520px){
    .client:not(.client--noimg){
      grid-template-columns:1fr 42cqi;
      column-gap:2cqi;
      padding-bottom:0;
    }
    .client:not(.client--noimg) .client__name{
      grid-column:1 / -1;
      grid-row:1;
      position:relative;
      z-index:0;
    }
    .client:not(.client--noimg) .client__body{
      grid-column:1;
      grid-row:2;
    }
    .client:not(.client--noimg) .client__img{
      grid-column:2;
      grid-row:1 / span 2;
      align-self:end;
      width:100%;
      margin:12cqi -4cqi 0 0;
      position:relative;
      z-index:1;
    }
  }
`;

export default function ClientsStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
