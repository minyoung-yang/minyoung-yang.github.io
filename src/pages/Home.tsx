import { Link } from "@tanstack/react-router";
import { Layout } from "../components/layout";
import BlogCard from "../components/blog-card";
import { getLatestPosts } from "../data/utils";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FilteredPosts } from "@/components/filtered-posts";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const latestPosts = getLatestPosts(3);
  return (
    <Layout>
      <Helmet>
        <title>Home - Gabriel's Blog</title>
        <meta property="og:title" content="Home - Gabriel's Blog" />
        <meta
          property="og:description"
          content="Memoirs in the Making. 기억을 기록하는 블로그입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.webp" />
      </Helmet>
      <div className="space-y-12">
        <section className="text-center py-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            양 가브리엘의 블로그
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            기억을 잊지 않기 위해 기록하는 블로그
          </p>
          <Link
            to="/posts"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            모든 글 보기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>

        {/* Latest Posts Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">최신 글</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Category Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            카테고리별 글
          </h2>
          <FilteredPosts canSearch={false} maxPosts={6} />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
