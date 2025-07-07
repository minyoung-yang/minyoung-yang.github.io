import { ReactNode } from "react";

interface BlockquoteProps {
  children: ReactNode;
  className?: string;
}

export function Blockquote({ children, className = "" }: BlockquoteProps) {
  return (
    <blockquote
      className={`border-l-4 border-gray-300 pl-6 py-4 my-6 bg-gray-50 rounded-r-lg ${className}`}
    >
      <div className="text-gray-400 italic text-lg leading-relaxed">
        {children}
      </div>
    </blockquote>
  );
}
