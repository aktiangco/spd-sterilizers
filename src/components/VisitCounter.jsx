import { useEffect, useState } from "react";

function VisitCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/aktiangco-medtek-2026/navbar")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch((err) => console.error("Counter error:", err));
  }, []);

  return (
    <span className="nav-counter">
    Visitors: {count !== null ? count : "..."}
  </span>
  );
}

export default VisitCounter;