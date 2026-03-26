import { useEffect, useState } from "react";

function VisitCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://aktiangco.goatcounter.com/counter/TOTAL.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("GoatCounter response:", data);
        setCount(data.count);
      })
      .catch((err) => {
        console.error("GoatCounter error:", err);
        setCount("Unavailable");
      });
  }, []);

  return (
    <span className="nav-counter">
      Visitors: {count === null ? "..." : count}
    </span>
  );
}

export default VisitCounter;