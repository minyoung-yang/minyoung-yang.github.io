import Layout from "../components/layout";
import { BookOpen, User, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            DevBlog 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            개발자들과 함께 성장하는 기술 블로그입니다
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">우리의 목표</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            DevBlog는 개발자들이 최신 기술 트렌드를 따라잡고, 실무에서 바로
            적용할 수 있는 지식을 공유하는 플랫폼입니다. 복잡한 기술을 쉽게
            설명하고, 실제 경험을 바탕으로 한 노하우를 전달하여 개발자
            커뮤니티의 성장에 기여하고자 합니다.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            DevBlog의 특징
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                실무 중심 콘텐츠
              </h3>
              <p className="text-gray-600">
                실제 프로젝트에서 겪은 경험과 해결책을 바탕으로 한 실용적인
                글들을 제공합니다.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                다양한 관점
              </h3>
              <p className="text-gray-600">
                프론트엔드, 백엔드, DevOps 등 다양한 분야의 전문가들이 참여하여
                폭넓은 지식을 제공합니다.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                커뮤니티 중심
              </h3>
              <p className="text-gray-600">
                개발자들이 서로 소통하고 성장할 수 있는 건강한 커뮤니티를
                만들어갑니다.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            함께 성장해요
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            DevBlog는 여러분의 참여로 더욱 풍성해집니다. 궁금한 점이나
            제안사항이 있으시면 언제든 연락주세요.
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>이메일: contact@devblog.com</p>
            <p>GitHub: github.com/devblog</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
