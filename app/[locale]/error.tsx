'use client';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  console.error('Route error:', error);
  return (
    <div style={{padding: 20, fontFamily: 'sans-serif'}}>
      <h1>Something went wrong</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error?.message}</pre>
      <button onClick={() => reset()} style={{marginTop: 12}}>Try again</button>
    </div>
  );
}
