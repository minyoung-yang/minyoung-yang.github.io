export type PostMeta = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  subCategoryId: string;
  author: string;
  publishDate: string;
  readTime: number;
  imageUrl: string;
  tags: string[];
};

export type PostContent = React.ReactNode;

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
