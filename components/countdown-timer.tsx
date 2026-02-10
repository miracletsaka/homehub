"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 20,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set end date (20 days from now)
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 20);
      endDate.setHours(23, 59, 59, 999);

      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-slate-600">Ends in:</span>
      <div className="flex items-center gap-1">
        <div className="flex flex-col items-center min-w-12">
          <span className="text-2xl font-bold text-amber-900">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="text-xs uppercase tracking-widest text-slate-500">
            days
          </span>
        </div>
        <span className="text-xl font-bold text-slate-400 px-1">:</span>
        <div className="flex flex-col items-center min-w-12">
          <span className="text-2xl font-bold text-amber-900">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-xs uppercase tracking-widest text-slate-500">
            hrs
          </span>
        </div>
        <span className="text-xl font-bold text-slate-400 px-1">:</span>
        <div className="flex flex-col items-center min-w-12">
          <span className="text-2xl font-bold text-amber-900">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-xs uppercase tracking-widest text-slate-500">
            min
          </span>
        </div>
      </div>
    </div>
  );
}
