'use client';

export default function GlobalError({error, reset}: {error: Error; reset: () => void}) {
  console.error('GlobalError:', error);
  return (
    <html>
      <body style={{padding: 20, fontFamily: 'sans-serif'}}>
        <h1>App crashed</h1>
        <pre style={{whiteSpace: 'pre-wrap'}}>{error?.message}</pre>
        <button onClick={() => reset()} style={{marginTop: 12}}>Try again</button>
      </body>
    </html>
  );
}
