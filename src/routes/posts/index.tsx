import { createFileRoute } from "@tanstack/react-router";
import { PostList } from "../../pages/post-list";

export const Route = createFileRoute("/posts/")({
  component: PostList,
});
