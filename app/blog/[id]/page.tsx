// app/blog/[id]/page.tsx
interface Props {
  params: { id: string }
}

const posts = {
  '1': { 
    title: '我的第一篇博客', 
    content: '这是我的第一篇博客文章！终于用Next.js搭建了自己的博客。',
    date: '2026-02-20'
  },
  '2': { 
    title: '用Next.js搭博客真简单', 
    content: '跟着教程走，10分钟就能上线一个属于自己的博客。Next.js真的很强大！',
    date: '2026-02-21'
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
    return <div style={{ padding: '2rem' }}>文章不存在</div>
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{post.title}</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>{post.date}</p>
      <div style={{ lineHeight: '1.8' }}>{post.content}</div>
    </main>
  )
}