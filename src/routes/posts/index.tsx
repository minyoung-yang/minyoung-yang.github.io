import { createFileRoute } from "@tanstack/react-router";
import PostList from "../../pages/PostList";

export const Route = createFileRoute("/posts/")({
  component: PostList,
});
