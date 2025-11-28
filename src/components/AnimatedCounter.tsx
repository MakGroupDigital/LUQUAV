
"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  targetValue: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
};

export default function AnimatedCounter({
  targetValue,
  duration = 2000,
  className,
  prefix = "",
  suffix = ""
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
            setCurrentValue(Math.floor(easedProgress * targetValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrentValue(targetValue);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValue, duration]);
  
  const formatValue = (value: number) => {
    if (value >= 1000) {
      const rounded = Math.floor(value / 1000);
      return `${rounded}K`;
    }
    return value.toLocaleString('fr-FR');
  }

  const displayValue = targetValue >= 1000 ? formatValue(currentValue) : currentValue.toLocaleString('fr-FR');
  
  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
