import { BlogPost } from "@/types/blog";
import { post1 } from "./posts/1/post";
import { post2 } from "./posts/2/post";
import { post3 } from "./posts/3/post";

export const blogPosts: BlogPost[] = [post1, post2, post3].reverse();
