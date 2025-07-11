import { createFileRoute } from "@tanstack/react-router";
import PostDetail from "../../pages/post-detail";

export const Route = createFileRoute("/post/$slug")({
  component: PostDetail,
});
