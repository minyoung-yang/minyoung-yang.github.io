import { PostMeta } from "@/types/blog";
import { post1 } from "./posts/1/meta";
import { post2 } from "./posts/2/meta";
import { post3 } from "./posts/3/meta";
import { post4 } from "./posts/4/meta";
import { post5 } from "./posts/5/meta";
import { post6 } from "./posts/6/meta";
import { post7 } from "./posts/7/meta";

export const blogPosts: PostMeta[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
].reverse();
