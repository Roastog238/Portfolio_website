import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import "./ScrollRocket.css";

export default function ScrollRocket() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = Math.round((scrollTop / docHeight) * 100);
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (scrollPercent / 100) * circumference;

  if (scrollPercent < 5) return null;

  return (
    <div className="scroll-rocket" onClick={scrollToTop}>
      <svg className="progress-ring" width="70" height="70">
        <circle
          className="progress-bg"
          cx="35"
          cy="35"
          r={radius}
        />
        <circle
          className="progress-bar"
          cx="35"
          cy="35"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>

      <div className="rocket-circle">
        <Rocket size={22} />
      </div>
    </div>
  );
}
