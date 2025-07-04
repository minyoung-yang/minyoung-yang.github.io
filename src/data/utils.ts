import { BlogPost, Category, SubCategory } from "../types/blog";
import { categories, subCategories } from "./categories";
import { blogPosts } from "./posts";

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getSubCategoriesByCategory = (
  categoryId: string,
): SubCategory[] => {
  return subCategories.filter(
    (subCategory) => subCategory.parentCategoryId === categoryId,
  );
};

export const getCategoryBySubCategory = (
  subCategoryId: string,
): Category | undefined => {
  const subCategory = subCategories.find(
    (subCategory) => subCategory.id === subCategoryId,
  );
  if (subCategory) {
    return categories.find(
      (category) => category.id === subCategory.parentCategoryId,
    );
  }
  return undefined;
};

export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  const subCategories = getSubCategoriesByCategory(categoryId);
  return blogPosts.filter((post) =>
    subCategories.some((subCategory) => subCategory.id === post.subCategoryId),
  );
};

export const getPostsBySubCategory = (subCategoryId: string): BlogPost[] => {
  return blogPosts.filter((post) => post.subCategoryId === subCategoryId);
};

export const getLatestPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    )
    .slice(0, limit);
};

export const getCategory = (categoryId: string): Category | undefined => {
  const category = categories.find((category) => category.id === categoryId);
  return category;
};

export const getSubCategory = (
  subCategoryId: string,
): SubCategory | undefined => {
  const subCategory = subCategories.find(
    (subCategory) => subCategory.id === subCategoryId,
  );
  return subCategory;
};

export const getCategoryDisplayName = (post: BlogPost): string => {
  const subCategory = getSubCategory(post.subCategoryId);
  if (subCategory) {
    const category = getCategory(subCategory.parentCategoryId);
    if (category) {
      return `${category.name} / ${subCategory.name}`;
    }
  }
  return "알 수 없는 카테고리";
};
