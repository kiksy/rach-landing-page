import React from 'react';
import Styles from '../Styles';
import ClientsStyles from './ClientsStyles';
import ClientBlock from './ClientBlock';
import ClientsPhotoWall from './ClientsPhotoWall';

import { clients } from './clients-data';

// Save as app/clients/page.tsx
export default function ClientsPage() {
  return (
    <>
      <head>
        <title>Client stories | The Strength Shift</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geological:wght@300;400;500;600;700&display=swap" />
      </head>

      <Styles />
      <ClientsStyles />

      <main className="band paper">
        <div className="wrap">
          <div className="stack narrow">
            <p className="eyebrow">Client stories</p>
            <h1>Real women. Real strength.</h1>
          </div>
          <div className="clients-grid">
            {clients.map((c) => (
              <ClientBlock key={c.name} client={c} />
            ))}
          </div>
        </div>
      </main>

      <ClientsPhotoWall />



    </>
  );
}
