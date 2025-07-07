import { useEffect, useRef } from "react";

type UtterancesCommentsProps = {
  slug: string;
};

export function UtterancesComments({ slug }: UtterancesCommentsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divRef = ref.current;
    if (!divRef) {
      return;
    }

    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo: "minyoung-yang/blog-comments",
      "issue-term": "pathname",
      label: "comments",
      theme: "github-light",
      crossOrigin: "anonymous",
      defer: "true",
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    setTimeout(() => {
      divRef.append(script);
    }, 300);

    return () => {
      divRef.innerHTML = "";
    };
  }, [slug]);

  return <div ref={ref} />;
}
