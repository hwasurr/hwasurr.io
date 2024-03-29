import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';

export interface UtterancesProps {
    repo: string;
}

const Utterances: React.FC<UtterancesProps> = React.memo(({ repo }) => {
  const containerRef = createRef<HTMLDivElement>();
  const themeType = typeof window !== 'undefined' ? window.localStorage.getItem('themeType') : null;

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'comment',
      theme: themeType === 'dark' ? 'dark-blue' : 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current?.appendChild(utterances);
  }, [repo]);

  return <div ref={containerRef} />;
});

Utterances.displayName = 'Utterances';

export default Utterances;
