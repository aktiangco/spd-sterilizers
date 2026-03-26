import { useEffect, useState } from "react";

function PageViewCounter() {
  const [count, setCount] = useState("...");

  const getPath = () => {
    return encodeURIComponent(window.location.hash || "#/");
  };

  useEffect(() => {
    const fetchCount = () => {
      const path = getPath();

      fetch(`https://aktiangco.goatcounter.com/counter/${path}.json`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((data) => setCount(data.count))
        .catch((err) => {
          console.error("GoatCounter page error:", err);
          setCount("Unavailable");
        });
    };

    fetchCount();

    // update when navigating pages
    window.addEventListener("hashchange", fetchCount);

    return () => window.removeEventListener("hashchange", fetchCount);
  }, []);

  // optional: hide while loading
  if (count === "...") return null;

  return <div className="page-counter">Page Views: {count}</div>;
}

export default PageViewCounter;