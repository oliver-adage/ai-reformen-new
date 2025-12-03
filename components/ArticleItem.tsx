// components/ArticleItem.tsx
'use client';

import { useState } from 'react';

type ArticleItemProps = {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  snippet: string;
  fullText: string;
};

export function ArticleItem({
  id,
  title,
  subtitle,
  date,
  snippet,
  fullText,
}: ArticleItemProps) {
  const [expanded, setExpanded] = useState(false);

  const textToShow = expanded ? fullText : snippet;
  const paragraphs = textToShow.split('\n').filter(Boolean);

  return (
    <article id={id} className="border-b pb-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      {subtitle && <p className="text-lg opacity-80 mb-2">{subtitle}</p>}

      {date && (
        <p className="text-sm opacity-60 mb-3">
          {new Date(date).toLocaleDateString('sv-SE')}
        </p>
      )}

      <div className="text-base leading-relaxed mb-3">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="mb-2">
            {p}
          </p>
        ))}
      </div>

      {fullText && fullText !== snippet && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-sm underline"
        >
          {expanded ? 'Visa mindre' : 'läs mer'}
        </button>
      )}
    </article>
  );
}
