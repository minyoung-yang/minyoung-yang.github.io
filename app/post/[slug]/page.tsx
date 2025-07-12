import PostDetail from "@/pages/post-detail";
import { blogPosts } from "@/data/posts";
import { getPostBySlug } from "@/data/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params;
  const id = getPostBySlug(slug)?.id;
  if (!id) {
    return null;
  }
  const { content } = await import(`@/data/posts/${id}/content`);
  const { postMeta } = await import(`@/data/posts/${id}/meta`);
  if (!content || !postMeta) {
    return null;
  }
  return <PostDetail content={content} postMeta={postMeta} />;
}

// SSG를 위한 generateStaticParams 함수 추가
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Gabriel's Blog`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Gabriel's Blog`,
      description: post.summary,
      images: [post.imageUrl],
      type: "article",
    },
  };
}
