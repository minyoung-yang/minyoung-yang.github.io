import { useParams, Link } from "@tanstack/react-router";
import { Layout } from "../components/layout";
import {
  getPostBySlug,
  getCategoryDisplayName,
  getCategoryBySubCategory,
} from "../data/utils";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { blogPosts } from "@/data/posts";
import { Helmet } from "react-helmet-async";
import { UtterancesComments } from "@/components/entry-detail/comment";
import { PostContent } from "@/types/blog";
import { pad } from "@/utils/string";

// @ts-expect-error Vite import.meta.glob
const contentModules = import.meta.glob("../data/posts/*/content.tsx");

async function loadPostById(id: string): Promise<PostContent | null> {
  const key = `../data/posts/${id}/content.tsx`;
  const importer = contentModules[key];
  if (!importer) return null;
  const postModule = await importer();
  return (postModule as { content: PostContent })["content"];
}

const PostDetail = () => {
  const { slug } = useParams({ from: "/post/$slug" });
  const [post, setPost] = useState(getPostBySlug(slug || ""));
  const [content, setContent] = useState<PostContent | null>(null);
  const [contentLoading, setContentLoading] = useState(true);
  const dateString = useMemo(() => {
    if (!post?.publishDate) return "";
    const date = new Date(post.publishDate);
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    return `${year}. ${month}. ${day}. ${hour}:${minute}`;
  }, [post?.publishDate]);

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);
      setPost(foundPost);
      if (foundPost) {
        loadPostById(foundPost.id).then((content) => {
          setContent(content);
          setContentLoading(false);
        });
      }
    }
  }, [slug]);

  if (!post || !content) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            글을 찾을 수 없습니다
          </h1>
          <Link
            to="/"
            className="inline-flex items-center text-green-800 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            홈으로 돌아가기
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.subCategoryId === post.subCategoryId && p.id !== post.id)
    .slice(0, 3);

  const categoryDisplay = getCategoryDisplayName(post);

  return (
    <Layout>
      <Helmet>
        <title>
          {post.title} | {post.author}
        </title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:type" content="article" />
      </Helmet>
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/posts"
          className="inline-flex items-center text-green-800 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />글 목록으로 돌아가기
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${
                getCategoryBySubCategory(post.subCategoryId)?.color ||
                "bg-gray-500"
              }`}
            >
              {categoryDisplay}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{dateString}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}분 읽기</span>
            </div>
          </div>
        </header>

        {contentLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-800"></div>
            <span className="ml-3 text-gray-600">글 내용을 불러오는 중...</span>
          </div>
        ) : (
          <>
            <div className="prose prose-lg max-w-none mb-12">
              <div className="text-gray-700 leading-loose whitespace-pre-line [&>*]:mb-6">
                {content}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-12 flex-wrap">
              <Tag size={18} className="text-gray-500" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <UtterancesComments slug={slug} />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="border-t pt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  관련 글
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to="/post/$slug"
                      params={{ slug: relatedPost.slug }}
                      className="group"
                    >
                      <div className="aspect-video overflow-hidden rounded-lg mb-3">
                        <img
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-800 transition-colors duration-200 line-clamp-1">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {relatedPost.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </article>
    </Layout>
  );
};

export default PostDetail;
