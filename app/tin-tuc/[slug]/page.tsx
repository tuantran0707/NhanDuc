import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { editorialPosts } from "@/lib/content";
import LightboxImage from "@/components/LightboxImage";

export function generateStaticParams() {
  return editorialPosts.map((post) => ({ slug: post.slug }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const post = editorialPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-12">
          <Link href="/tin-tuc" className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-brand-gold mb-4">
            ← Quay lại Tin Tức & Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold max-w-4xl">{post.title}</h1>
          <p className="mt-3 text-white/80">{post.date}</p>
        </div>
      </section>

      <article className="container-page py-12">
        <div className="relative h-[340px] md:h-[460px] rounded-2xl overflow-hidden">
          <Image src={post.cover} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="mt-8 max-w-4xl space-y-4 text-gray-700 leading-relaxed">
          <p className="text-lg font-medium text-brand">{post.summary}</p>
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 max-w-4xl space-y-3">
          {post.highlights.map((line) => (
            <blockquote key={line} className="border-l-4 border-brand-gold bg-gray-50 p-4 text-gray-700 italic">
              {line}
            </blockquote>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Thư viện hình ảnh</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {post.images.map((img, idx) => (
              <LightboxImage
                key={img}
                src={img}
                alt={`${post.title} ảnh ${idx + 1}`}
                thumbWrapperClassName="h-40 rounded-lg border border-gray-100"
                thumbImageClassName="object-cover hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
