import { Layout } from "../components/layout";
import BlogCard from "../components/blog-card";
import { getLatestPosts } from "../data/utils";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

function Home() {
  const latestPosts = getLatestPosts(9);
  return (
    <Layout>
      <div className="space-y-12">
        <section className="text-center py-8 bg-gradient-to-r from-green-800 to-blue-800 text-white rounded-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Gabriel Yang's Blog
          </h1>
          <p className="text-xl md:text-xl text-blue-100 mb-8">
            Memoirs in the Making
          </p>
          <Link
            href="/posts"
            className="inline-flex items-center px-6 py-3 bg-white text-green-800 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            모든 글 보기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-green-800" />
            <h2 className="text-3xl font-bold text-gray-900">최신 글</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
export default Home;
