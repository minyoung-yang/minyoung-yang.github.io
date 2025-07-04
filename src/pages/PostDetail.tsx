import { useParams, Link } from "@tanstack/react-router";
import Layout from "../components/layout";
import { getPostBySlug, getCategoryDisplayName } from "../data/utils";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { blogPosts } from "@/data/posts";

const PostDetail = () => {
  const { slug } = useParams({ from: "/post/$slug" });
  const [post, setPost] = useState(getPostBySlug(slug || ""));

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);
      setPost(foundPost);
    }
  }, [slug]);

  if (!post) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            글을 찾을 수 없습니다
          </h1>
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            홈으로 돌아가기
          </Link>
        </div>
      </Layout>
    );
  }

  // Related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.categoryId === post.categoryId && p.id !== post.id)
    .slice(0, 3);

  const categoryDisplay = getCategoryDisplayName(post);

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/posts"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />글 목록으로 돌아가기
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${
                post.categoryId === "개발"
                  ? "bg-blue-500"
                  : post.categoryId === "디자인"
                    ? "bg-purple-500"
                    : post.categoryId === "라이프스타일"
                      ? "bg-green-500"
                      : "bg-orange-500"
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
              <span>
                {new Date(post.publishDate).toLocaleDateString("ko-KR")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}분 읽기</span>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-loose whitespace-pre-line [&>*]:mb-6">
            {post.content}
          </div>
        </div>

        {/* Tags */}
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">관련 글</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/post/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-3">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {relatedPost.summary.substring(0, 100)}...
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default PostDetail;
