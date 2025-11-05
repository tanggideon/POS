"use client";
import React, { JSX, useEffect, useState } from "react";

export default function Clock(): JSX.Element {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const dayName = now.toLocaleDateString(undefined, { weekday: "long" });
  const dateStr = now.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const timeStr = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="text-right text-black">
      <div className="">
        <span className="text-gray-700 font-semibold text-lg">{dayName}</span>
      </div>
      <div className="flex flex-row gap-5">
        <span className="font-sm text-gray-600 font-semibold">{dateStr}</span>
        <span className="font-sm text-gray-600 font-semibold">{timeStr}</span>
      </div>
    </div>
  );
}
