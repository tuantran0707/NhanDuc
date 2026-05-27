import Link from "next/link";
import Image from "next/image";
import { editorialPosts } from "@/lib/content";

export const metadata = { title: "Tin Tức & Blog - Nhân Đức FC" };

export default function NewsPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="container-page py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold">Tin Tức & Blog</h1>
          <p className="mt-2 text-white/80 max-w-2xl">
            Nơi cập nhật các tuyến bài mới nhất về hành trình thi đấu, hậu trường và các giải sắp tham gia của Nhân Đức FC.
          </p>
        </div>
      </section>

      <section className="container-page py-12 grid gap-8 md:grid-cols-2">
        {editorialPosts.map((post) => (
          <article key={post.slug} className="card overflow-hidden hover:shadow-md transition">
            <div className="relative h-60">
              <Image src={post.cover} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs text-brand font-semibold uppercase">Tuyến bài</div>
              <h2 className="text-xl font-bold mt-1">{post.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{post.summary}</p>
              <div className="mt-3 text-xs text-gray-500">{post.date}</div>
              <Link href={`/tin-tuc/${post.slug}`} className="btn-primary mt-4">Đọc bài đầy đủ</Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
