"use client";
import { Layout } from "../components/layout";
import {
  getCategoryDisplayName,
  getCategoryBySubCategory,
} from "../data/utils";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import { useMemo } from "react";
import { blogPosts } from "@/data/posts";
import { UtterancesComments } from "@/components/entry-detail/comment";
import { PostContent, PostMeta } from "@/types/blog";
import { pad } from "@/utils/string";
import Link from "next/link";
import { EntryContent } from "@/components/entry-detail/entry-content";

type PostDetailProps = {
  content?: PostContent;
  postMeta?: PostMeta;
};
const PostDetail = ({ content, postMeta }: PostDetailProps) => {
  const dateString = useMemo(() => {
    if (!postMeta?.publishDate) return "";
    const date = new Date(postMeta.publishDate);
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    return `${year}. ${month}. ${day}. ${hour}:${minute}`;
  }, [postMeta?.publishDate]);

  if (!content || !postMeta) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">글을 찾을 수 없습니다.</h1>
          <p>요청하신 글이 존재하지 않거나, 삭제되었을 수 있습니다.</p>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (p) => p.subCategoryId === postMeta.subCategoryId && p.id !== postMeta.id,
    )
    .slice(0, 3);

  const categoryDisplay = getCategoryDisplayName(postMeta);

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        <Link
          href="/posts"
          className="inline-flex items-center text-green-800 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />글 목록으로 돌아가기
        </Link>

        <header className="mb-8">
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${
                getCategoryBySubCategory(postMeta.subCategoryId)?.color ||
                "bg-gray-500"
              }`}
            >
              {categoryDisplay}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {postMeta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{postMeta.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{dateString}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{postMeta.readTime}분 읽기</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-loose whitespace-pre-line [&>*]:mb-6">
            <EntryContent content={content} />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-12 flex-wrap">
          <Tag size={18} className="text-gray-500" />
          {postMeta.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        <UtterancesComments slug={postMeta.slug} />

        {relatedPosts.length > 0 && (
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">관련 글</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/post/${relatedPost.slug}`}
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
      </article>
    </Layout>
  );
};

export default PostDetail;
