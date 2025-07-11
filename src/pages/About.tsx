import { Helmet } from "react-helmet-async";
import { Layout } from "../components/layout";
import { Target, CableCar, Backpack, Camera, Earth } from "lucide-react";

export const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About - Gabriel's Blog</title>
        <meta property="og:title" content="About - Gabriel's Blog" />
        <meta
          property="og:description"
          content="Memoirs in the Making. 기억을 기록하는 블로그입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.webp" />
      </Helmet>
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center py-12">
          <div className="w-24 h-24 bg-gradient-to-r from-green-800 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CableCar className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gabriel Yang's Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Memoirs in the Making
          </p>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-green-800" />
            <h2 className="text-2xl font-bold text-gray-900">
              기록하는 기억, 기억하는 기록
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            기억을 기록하는 블로그입니다. 제 인생에서 가장 큰 기억으로 남는
            여행부터 기록 중입니다. 추후 어떤 기억을 기록할지는 저도 잘
            모르겠습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Gabriel Yang
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Backpack className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                여행가
              </h3>
              <p className="text-gray-600">
                해외 여행을 좋아합니다. 대자연을 눈에 담는 것을 즐깁니다. 연
                2-3회 해외 여행을 계획하고 있습니다.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                사진가
              </h3>
              <p className="text-gray-600">
                크롭바디 카메라 한 대와 렌즈 몇 개 있는 초보 사진가입니다. 흔히
                보는 것들을 다르게 보려 노력합니다.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Earth className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                한국인
              </h3>
              <p className="text-gray-600">
                대한민국에서 태어나고 자랐습니다. 한국의 맛집, 물건, 명소 등을
                좋아합니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
