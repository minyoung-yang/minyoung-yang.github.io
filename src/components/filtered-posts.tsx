"use client";
import BlogCard from "./blog-card";
import CategoryFilter from "./category-filter";
import { ArrowRight, Link, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { blogPosts } from "@/data/posts";
import { getPostsByCategory, getPostsBySubCategory } from "@/data/utils";
import { useRouter, useSearchParams } from "next/navigation";

const QUERY_STRINGS = {
  CATEGORY: "c",
  SUB_CATEGORY: "subc",
  SEARCH: "search",
};

type FilteredPostsProps = {
  canSearch: boolean;
  maxPosts?: number;
};

export function FilteredPosts({ canSearch, maxPosts }: FilteredPostsProps) {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get(QUERY_STRINGS.CATEGORY) || "all",
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<
    string | undefined
  >(searchParams.get(QUERY_STRINGS.SUB_CATEGORY) || undefined);
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get(QUERY_STRINGS.SEARCH) || "",
  );
  const filteredPosts = getFilteredPosts();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams();
    params.set(QUERY_STRINGS.CATEGORY, selectedCategory);
    if (selectedSubCategory) {
      params.set(QUERY_STRINGS.SUB_CATEGORY, selectedSubCategory);
    }
    if (searchTerm && searchTerm.trim() !== "") {
      params.set(QUERY_STRINGS.SEARCH, searchTerm);
    }
    router.push(`?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedSubCategory, searchTerm]);

  function handleCategoryChange(categoryId: string, subCategoryId?: string) {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCategoryId);
  }

  function getFilteredPosts() {
    let posts = blogPosts;
    if (selectedCategory !== "all") {
      if (selectedSubCategory) {
        posts = getPostsBySubCategory(selectedSubCategory);
      } else {
        posts = getPostsByCategory(selectedCategory);
      }
    }

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
