import { useState, useEffect, useMemo, useCallback, useRef } from "react";

function Hook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component mounted or count changed!");
  }, [count]);

  const doubleCount = useMemo(() => count * 2, [count]);

  const logText = useCallback(() => {
    console.log(text);
  }, [text]);

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={logText}>Log Text</button>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
    </div>
  );
}

export default Hook;
