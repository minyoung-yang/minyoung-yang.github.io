import Layout from "../components/layout";
import { blogPosts } from "@/data/posts";
import { FilteredPosts } from "@/components/filtered-posts";

const PostList = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">모든 글</h1>
          <p className="text-xl text-gray-600">
            {blogPosts.length}개의 글이 있습니다
          </p>
        </div>
        <FilteredPosts canSearch={true} />
      </div>
    </Layout>
  );
};

export default PostList;
