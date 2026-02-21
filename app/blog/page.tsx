// app/blog/page.tsx
import Link from 'next/link'

const posts = [
  { id: '1', title: '我的第一篇博客', date: '2026-02-20', summary: '这是我的第一篇博客文章，记录了搭建个人网站的过程。' },
  { id: '2', title: '用Next.js搭博客真简单', date: '2026-02-21', summary: 'Next.js + TypeScript + Tailwind，完美组合！' },
]

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">我的博客</h1>
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.id} className="border-b border-gray-200 pb-8">
            <Link 
              href={`/blog/${post.id}`}
              className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition block mb-2"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm mb-3">{post.date}</p>
            <p className="text-gray-700 leading-relaxed">{post.summary}</p>
          </article>
        ))}
      </div>
    </main>
  )
}