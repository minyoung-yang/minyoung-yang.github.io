import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";

interface CategoryFilterProps {
  selectedCategoryId: string;
  selectedSubCategoryId?: string;
  onCategoryChange: (_categoryId: string, _subCategoryId?: string) => void;
}

const CategoryFilter = ({
  selectedCategoryId: selectedCategory,
  selectedSubCategoryId: selectedSubCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName],
    );
  };

  const isExpanded = (categoryName: string) =>
    expandedCategories.includes(categoryName);

  return (
    <div className="space-y-4 mb-8">
      {/* All button */}
      <button
        onClick={() => onCategoryChange("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          selectedCategory === "all"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        전체
      </button>

      {/* Category buttons */}
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="space-y-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleCategory(category.name)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {isExpanded(category.name) ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              <button
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id && !selectedSubCategory
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            </div>

            {/* Sub-categories */}
            {isExpanded(category.name) && category.subCategories && (
              <div className="ml-8 flex flex-wrap gap-2">
                {category.subCategories.map((subCategory) => (
                  <button
                    key={subCategory.id}
                    onClick={() =>
                      onCategoryChange(category.id, subCategory.id)
                    }
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                      selectedCategory === category.id &&
                      selectedSubCategory === subCategory.id
                        ? "bg-green-800 text-white"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    {category.name}/{subCategory.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
