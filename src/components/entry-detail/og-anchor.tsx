import React from "react";

type OgLinkProps = {
  href: string;
  ogImage?: string;
  ogTitle: string;
  ogDescription?: string;
  className?: string;
};

export function OgLink({
  href,
  ogImage,
  ogTitle,
  ogDescription,
  className = "",
}: OgLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white overflow-hidden group ${className}`}
      style={{ textDecoration: "none" }}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="flex-shrink-0 w-full sm:w-40 h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={
              ogImage ||
              "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            }
            alt={ogTitle}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center">
          <div className="font-semibold text-gray-900 text-base mb-1 line-clamp-2">
            {ogTitle}
          </div>
          {ogDescription && (
            <div className="text-gray-500 text-sm mb-2 line-clamp-2">
              {ogDescription}
            </div>
          )}
          <div className="text-blue-500 text-xs mt-auto truncate">
            {href.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    </a>
  );
}
