import { Category, SubCategory } from "@/types/blog";

export const subCategories: SubCategory[] = [
  { id: "1", name: "🇯🇵 후지산", slug: "fuji-mountain", parentCategoryId: "1" },
  { id: "2", name: "🇯🇵 간사이", slug: "kansai", parentCategoryId: "1" },
  { id: "3", name: "🇯🇵 도쿄", slug: "tokyo", parentCategoryId: "1" },
  { id: "4", name: "🇺🇸 서부", slug: "west-us", parentCategoryId: "1" },
  { id: "9", name: "🇨🇦 로키산맥", slug: "rocky", parentCategoryId: "1" },
  { id: "5", name: "🇮🇹 이탈리아", slug: "italy", parentCategoryId: "1" },
  { id: "6", name: "📷 사진", slug: "photography", parentCategoryId: "2" },
  { id: "7", name: "🏠 인테리어", slug: "remodeling", parentCategoryId: "2" },
  { id: "8", name: "🍲 음식", slug: "food", parentCategoryId: "2" },
];

export const categories: Category[] = [
  {
    id: "1",
    name: "✈️ 여행",
    slug: "travel",
    color: "bg-blue-500",
    subCategories: subCategories.filter((sub) => sub.parentCategoryId === "1"),
  },
  {
    id: "2",
    name: "일상",
    slug: "daily",
    color: "bg-purple-500",
    subCategories: subCategories.filter((sub) => sub.parentCategoryId === "2"),
  },
];
