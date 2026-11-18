import React from 'react';
import Image from 'next/image';
import type { Client } from './clients-data';

export default function ClientBlock({ client }: { client: Client }) {
  const { name, headline, paragraphs, image } = client;

  return (
    <div className="client-wrap">
      <article
        className={`client${image ? '' : ' client--noimg'}`}
        style={{ ['--n' as string]: name.length }}
      >
        <h3 className="client__name">{name}</h3>

        <div className="client__body">
          <p className="client__headline">{headline}</p>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {image && (
          <Image
            className="client__img"
            src={image.src}
            width={image.width}
            height={image.height}
            alt={`${name}, a Strength Shift client`}
            sizes="(min-width: 1100px) 460px, 90vw"
          />
        )}
      </article>
    </div>
  );
}
