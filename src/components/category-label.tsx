import { getCategoryBySubCategory, getCategoryDisplayName } from "@/data/utils";

type CategoryLabelProps = {
  subCategoryId: string;
  onClick?: () => void;
};
export function CategoryLabel({ subCategoryId, onClick }: CategoryLabelProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${
        getCategoryBySubCategory(subCategoryId)?.color || "bg-gray-500"
      } ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      {getCategoryDisplayName(subCategoryId)}
    </span>
  );
}
