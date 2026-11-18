'use client';

import React, { useId, useState } from 'react';

export default function FaqItem({
  question,
  feature,
  children,
}: {
  question: string;
  feature?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={`faq-item${feature ? ' feature' : ''}`}>
      <h3>
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((o) => !o)}
        >
          <span>{question}</span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className="faq-panel"
        data-open={open}
      >
        <div className="faq-panel__inner">
          <div className="answer">{children}</div>
        </div>
      </div>
    </div>
  );
}
