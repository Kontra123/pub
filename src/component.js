import { useState, useEffect, useCallback, useMemo } from 'react';

// Component A
function ComponentA() {
  const [someState, setSomeState] = useState(0);

  const handleCallback = useCallback(() => {
    setSomeState(prevState => prevState + 1);
  }, []);

  return (
    <div>
      <ComponentB onSomeEvent={handleCallback} />
      <p>Component A's State: {someState}</p>
    </div>
  );
}

// Component B
function ComponentB({ onSomeEvent }) {
  const [count, setCount] = useState(0);
  const [countWithout, setCountWithout] = useState(0);

  useEffect(() => {
    onSomeEvent();
  }, [count, onSomeEvent]);

  const derivedValue = useMemo(() => {
    console.log('Calculating derived value with useMemo');
    return count * 2;
  }, [count]);

  const derivedValueWithout = () => {
    console.log('Calculating derived value without useMemo');
    return countWithout * 2;
  };

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Increment B</button>
      <p>Component B's State: {count}</p>
      <p>Derived Value with useMemo: {derivedValue}</p>

      <button onClick={() => setCountWithout(prev => prev + 1)}>Increment TEST</button>
      <p>Component B's TEST State: {countWithout}</p>
      <p>Derived Value without useMemo: {derivedValueWithout()}</p>
    </div>
  );
}

export default ComponentA;
