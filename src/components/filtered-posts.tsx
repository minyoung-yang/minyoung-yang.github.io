import BlogCard from "./blog-card";
import CategoryFilter from "./category-filter";
import { ArrowRight, Link, Search } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "@/data/posts";
import { getPostsByCategory, getPostsBySubCategory } from "@/data/utils";

type FilteredPostsProps = {
  canSearch: boolean;
  maxPosts?: number;
};

export function FilteredPosts({ canSearch, maxPosts }: FilteredPostsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState<
    string | undefined
  >();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = getFilteredPosts();

  function handleCategoryChange(categoryId: string, subCategoryId?: string) {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCategoryId);
  }

  function getFilteredPosts() {
    let posts = blogPosts;
    // Filter by category
    if (selectedCategory !== "all") {
      if (selectedSubCategory) {
        posts = getPostsBySubCategory(selectedSubCategory);
      } else {
        posts = getPostsByCategory(selectedCategory);
      }
    }

    // Filter by search term
    if (searchTerm) {
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }
    return posts;
  }

  return (
    <>
      {/* Search Bar */}
      {canSearch && (
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="글 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      <CategoryFilter
        selectedCategoryId={selectedCategory}
        selectedSubCategoryId={selectedSubCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {maxPosts
          ? filteredPosts
              .slice(0, maxPosts)
              .map((post) => <BlogCard key={post.id} post={post} />)
          : filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            {searchTerm
              ? "검색 결과가 없습니다."
              : "해당 카테고리에 글이 없습니다."}
          </p>
        </div>
      )}
      {maxPosts && filteredPosts.length > maxPosts && (
        <div className="text-center mt-8">
          <Link
            to="/posts"
            className="inline-flex items-center px-6 py-3 bg-green-800 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            더 많은 글 보기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      )}
    </>
  );
}
