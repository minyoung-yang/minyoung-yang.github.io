import { Link } from "@tanstack/react-router";
import { PostMeta } from "../types/blog";
import { Clock, User } from "lucide-react";
import {
  getCategoryBySubCategory,
  getCategoryDisplayName,
} from "../data/utils";

type BlogCardProps = {
  post: PostMeta;
};

const BlogCard = ({ post }: BlogCardProps) => {
  const categoryDisplay = getCategoryDisplayName(post);

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to="/post/$slug" params={{ slug: post.slug }}>
        <div className="aspect-video overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`px-3 py-1 text-xs font-medium text-white rounded-full ${
              getCategoryBySubCategory(post.subCategoryId)?.color ||
              "bg-gray-500"
            }`}
          >
            {categoryDisplay}
          </span>
        </div>

        <Link to="/post/$slug" params={{ slug: post.slug }}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-800 transition-colors duration-200">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.summary}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{post.readTime}분 읽기</span>
          </div>
          <span>{new Date(post.publishDate).toLocaleDateString("ko-KR")}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
