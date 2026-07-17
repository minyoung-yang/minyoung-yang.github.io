import type { PostMeta } from "@/types/blog";

// Webpack lists each module twice (./path and path); ^\.\/ keeps one copy.
const metas = require.context("./posts", true, /^\.\/.*\/meta\.tsx$/);

export const blogPosts: PostMeta[] = metas
  .keys()
  .map((key) => (metas(key) as { postMeta: PostMeta }).postMeta)
  .sort((a, b) => Number(b.id) - Number(a.id));
