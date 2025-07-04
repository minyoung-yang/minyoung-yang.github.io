export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: React.ReactNode;
  summary: string;
  subCategoryId: string;
  author: string;
  publishDate: string;
  readTime: number;
  imageUrl: string;
  tags: string[];
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  color: string;
  subCategories?: SubCategory[];
};

export type SubCategory = {
  id: string;
  name: string;
  slug: string;
  parentCategoryId: string;
};

export type Image = {
  src: string;
  alt: string;
  caption: string;
};
