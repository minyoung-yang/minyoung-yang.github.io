"use client";

import { useEffect, useRef } from "react";

export function AdfitWide() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) {
      return;
    }

    const ins = document.createElement("ins");
    ins.className = "kakao_ad_area";
    ins.style.display = "none";
    ins.setAttribute("data-ad-unit", "DAN-1bsdM18wXEKATBok");
    ins.setAttribute("data-ad-width", "300");
    ins.setAttribute("data-ad-height", "250");
    container.append(ins);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//t1.kakaocdn.net/kas/static/ba.min.js";
    script.async = true;
    container.append(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={ref} />;
}
