import { useEffect, useRef } from 'react';

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
    console.log('Hello World');
  });

  useEffect(() => {
    document.title = 'App';
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
