import { blogPosts } from "../../src/data/posts";

const BASE_URL = "https://minyoung-yang.github.io";

export const dynamic = "force-static";

export async function GET() {
  const items = blogPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/post/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/post/${post.slug}</guid>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
      <author><![CDATA[${post.author}]]></author>
      <enclosure url="${post.imageUrl}" type="image/jpeg" />
      ${post.tags
        .map((tag) => `<category><![CDATA[${tag}]]></category>`)
        .join("\n      ")}
    </item>`,
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Minyoung Yang</title>
    <link>${BASE_URL}</link>
    <description>Blog feed</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
