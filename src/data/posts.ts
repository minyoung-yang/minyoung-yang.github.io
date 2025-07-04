import { BlogPost } from "@/types/blog";
import { post1 } from "./posts/1/post";

export const blogPosts: BlogPost[] = [
  post1,
  {
    id: "2",
    title: "모던 웹 디자인 트렌드 2024",
    slug: "modern-web-design-trends-2024",
    content: `2024년의 웹 디자인 트렌드를 살펴보겠습니다.

## 미니멀리즘의 진화
깔끔하고 단순한 디자인이 여전히 주류를 이루고 있습니다. 하지만 단순히 요소를 제거하는 것이 아니라, 의미 있는 공백과 타이포그래피에 집중하고 있습니다.

## 다크 모드의 보편화
더 이상 선택사항이 아닌 필수 기능이 되었습니다. 사용자의 눈의 피로를 줄이고 배터리 수명을 늘려줍니다.

## 인터랙티브 요소
마이크로 인터랙션과 애니메이션을 통해 사용자 경험을 향상시키고 있습니다.

## 접근성 중심 디자인
모든 사용자가 웹사이트를 쉽게 이용할 수 있도록 하는 것이 중요해졌습니다.`,
    summary: "2024년 웹 디자인의 주요 트렌드와 변화를 살펴봅니다.",
    categoryId: "디자인",
    subCategoryId: "UI",
    author: "박디자인",
    publishDate: "2024-06-10",
    readTime: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
    tags: ["웹디자인", "UI/UX", "트렌드"],
  },
  {
    id: "3",
    title: "개발자를 위한 생산성 향상 팁",
    slug: "productivity-tips-for-developers",
    content: `개발자의 생산성을 높이는 다양한 방법들을 소개합니다.

## 시간 관리
### 포모도로 기법
25분 집중 + 5분 휴식의 사이클을 반복하여 집중력을 유지합니다.

### 시간 블록킹
하루 일정을 블록 단위로 나누어 계획적으로 업무를 진행합니다.

## 도구 활용
### IDE 단축키 마스터
자주 사용하는 기능들의 단축키를 익혀 반복 작업을 줄입니다.

### 자동화 스크립트
반복적인 작업들을 스크립트로 자동화하여 시간을 절약합니다.

## 학습 습관
### 꾸준한 학습
매일 조금씩이라도 새로운 것을 학습하는 습관을 만듭니다.

### 블로그 작성
배운 것을 정리하고 공유하여 지식을 내재화합니다.`,
    summary: "개발자가 더 효율적으로 일할 수 있는 실용적인 팁들을 공유합니다.",
    categoryId: "라이프스타일",
    subCategoryId: "업무",
    author: "이개발",
    publishDate: "2024-06-05",
    readTime: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    tags: ["생산성", "개발", "팁"],
  },
  {
    id: "4",
    title: "AI와 웹 개발의 미래",
    slug: "ai-and-future-of-web-development",
    content: `인공지능이 웹 개발에 미치는 영향과 미래 전망을 살펴봅니다.

## AI 코딩 어시스턴트
### GitHub Copilot
코드 자동 완성과 제안 기능으로 개발 속도를 크게 향상시킵니다.

### ChatGPT와 코딩
복잡한 알고리즘 설명과 코드 리뷰에 도움을 받을 수 있습니다.

## 자동화된 테스팅
AI가 테스트 케이스를 자동으로 생성하고 버그를 찾아내는 시대가 왔습니다.

## 디자인 자동화
AI가 디자인 패턴을 학습하여 UI/UX를 자동으로 생성합니다.

## 미래 전망
개발자의 역할이 단순 코딩에서 문제 해결과 창의적 사고로 변화하고 있습니다.

AI는 개발자를 대체하는 것이 아니라, 더 나은 개발자가 되도록 도와주는 도구입니다.`,
    summary: "AI 기술이 웹 개발 분야에 가져올 변화와 기회에 대해 알아봅니다.",
    categoryId: "기술",
    subCategoryId: "AI",
    author: "최기술",
    publishDate: "2024-06-01",
    readTime: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["AI", "미래", "웹개발"],
  },
  {
    id: "5",
    title: "TypeScript 5.0 새로운 기능",
    slug: "typescript-5-new-features",
    content: `TypeScript 5.0에서 추가된 주요 기능들을 살펴보겠습니다.

## Decorators
정식으로 지원되기 시작한 데코레이터 기능에 대해 알아봅니다.

## const Type Parameters
타입 매개변수에 const를 사용할 수 있게 되었습니다.

## Bundle Size 최적화
컴파일러 크기가 크게 줄어들어 성능이 향상되었습니다.

## 새로운 설정 옵션
더 세밀한 타입 체크와 컴파일 옵션들이 추가되었습니다.`,
    summary: "TypeScript 5.0의 새로운 기능들과 개선사항을 정리했습니다.",
    categoryId: "개발",
    subCategoryId: "서버",
    author: "김타입",
    publishDate: "2024-05-28",
    readTime: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=800&h=400&fit=crop",
    tags: ["TypeScript", "개발", "프로그래밍"],
  },
];
