// app/blog/page.tsx
import Link from 'next/link'

const posts = [
  { id: '1', title: '我的第一篇博客', date: '2026-02-20' },
  { id: '2', title: '用Next.js搭博客真简单', date: '2026-02-21' },
]

export default function BlogPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>我的博客</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
            <Link 
              href={`/blog/${post.id}`}
              style={{ fontSize: '1.25rem', color: '#0066cc', textDecoration: 'none' }}
            >
              {post.title}
            </Link>
            <p style={{ color: '#666', fontSize: '0.875rem', marginTop: '0.25rem' }}>{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}