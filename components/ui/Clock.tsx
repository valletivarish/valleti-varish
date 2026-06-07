"use client";

import { useEffect, useState } from "react";

/** Live clock in IST (Asia/Kolkata). Renders placeholder until hydrated. */
export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time || "--:--:--"}</span>;
}
