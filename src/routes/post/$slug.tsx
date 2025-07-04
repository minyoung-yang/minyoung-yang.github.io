import { createFileRoute } from "@tanstack/react-router";
import PostDetail from "../../pages/PostDetail";

export const Route = createFileRoute("/post/$slug")({
  component: PostDetail,
});
