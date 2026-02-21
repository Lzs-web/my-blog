// app/blog/[id]/page.tsx
import Link from 'next/link'

interface Props {
  params: { id: string }
}

const posts = {
  '1': { 
    title: '我的第一篇博客', 
    date: '2026-02-20',
    content: `
      <p>这是我的第一篇博客文章！</p>
      <p>从零开始学习 Next.js + TypeScript，终于成功搭建了自己的个人网站。</p>
      <p>过程中遇到了很多报错，但一个个都解决了，收获很大！</p>
    `
  },
  '2': { 
    title: '用Next.js搭博客真简单', 
    date: '2026-02-21',
    content: `
      <p>Next.js 真的很强大！</p>
      <p>配合 TypeScript 和 Tailwind CSS，开发体验非常好。</p>
      <p>最重要的是可以免费部署在 GitHub Pages 上，强烈推荐！</p>
    `
  },
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ]
}

export default async function PostPage({ params }: Props) {
  const { id } = await params
  const post = posts[id as keyof typeof posts]
  
  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl">文章不存在</h1>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 block">
          ← 返回博客列表
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
        ← 返回博客列表
      </Link>
      <article>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-8">{post.date}</p>
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}