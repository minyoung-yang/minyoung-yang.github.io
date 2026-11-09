import { blogPosts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function LegacyPostRedirect({ params }: Props) {
  const { slug } = await params;
  const destination = `/posts/${slug}`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${destination}`} />
      <link rel="canonical" href={destination} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(destination)}+location.search+location.hash)`,
        }}
      />
      <p>
        <a href={destination}>이 글은 새 주소로 옮겨졌습니다.</a>
      </p>
    </>
  );
}
