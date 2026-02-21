"use client";

import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">廖展燊</h1>
          <div className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">关于</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">技能</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">项目</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">联系</a>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        
        {/* Hero区域 */}
        <section className="text-center mb-20 animate-[fade-in_1s_ease-out]">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <div className="bg-white p-1 rounded-full">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-5xl text-white">
                👤
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            廖展燊
          </h1>
          <p className="text-xl text-gray-600 mb-8">前端开发者 | 热爱编程 | 终身学习</p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              联系我
            </a>
            <a href="#projects" className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
              查看作品
            </a>
          </div>
        </section>

        {/* 关于我 */}
        <section id="about" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">关于我</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              你好！我是廖展燊，一名热爱编程的前端开发者。我喜欢用代码创造有价值的产品，
              不断学习新技术，解决实际问题。我相信好的代码不仅能解决问题，还能带来愉悦的用户体验。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-blue-600">📍 所在地</span>
                <p className="text-gray-700">中国</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="font-semibold text-blue-600">💼 经验</span>
                <p className="text-gray-700">1+ 年开发经验</p>
              </div>
            </div>
          </div>
        </section>

        {/* 技能区域 */}
        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">我的技能</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'React', level: '90%', color: 'from-blue-400 to-blue-500' },
              { name: 'TypeScript', level: '85%', color: 'from-blue-500 to-blue-600' },
              { name: 'Next.js', level: '80%', color: 'from-gray-700 to-gray-900' },
              { name: 'Node.js', level: '75%', color: 'from-green-500 to-green-600' },
              { name: 'JavaScript', level: '90%', color: 'from-yellow-400 to-yellow-500' },
              { name: 'HTML/CSS', level: '95%', color: 'from-orange-500 to-pink-500' },
              { name: 'Git', level: '85%', color: 'from-orange-600 to-red-600' },
              { name: 'Tailwind', level: '80%', color: 'from-cyan-400 to-cyan-500' },
            ].map(skill => (
              <div key={skill.name} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 项目展示 */}
        <section id="projects" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">我的项目</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: '个人博客',
                desc: '用Next.js + TypeScript搭建的个人技术博客，支持Markdown文章和自动部署',
                tags: ['Next.js', 'TypeScript', 'Tailwind'],
                link: '/my-blog/blog'
              },
              {
                title: '个人介绍网站',
                desc: '你现在正在看的这个网站，展示了个人信息和技能',
                tags: ['React', 'Next.js', 'Tailwind'],
                link: '#'
              },
              {
                title: '待开发项目',
                desc: '计划开发一个更有趣的项目，敬请期待',
                tags: ['规划中'],
                link: '#'
              },
              {
                title: '更多项目',
                desc: '正在学习和探索中...',
                tags: ['学习中'],
                link: '#'
              },
            ].map(project => (
              <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
                <div className="h-40 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-4xl">
                  🚀
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700">
                    了解更多 <HiOutlineExternalLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 联系区域 */}
        <section id="contact" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">联系我</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <a href="mailto:2903640248@qq.com" 
                 className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl group-hover:scale-110 transition">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500">邮箱</p>
                  <p className="font-medium">2903640248@qq.com</p>
                </div>
              </a>
              
              <a href="https://github.com/Lzs-web" target="_blank"
                 className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
                  <FaGithub />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-medium">Lzs-web</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-500">© 2026 廖展燊. 保留所有权利。</p>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}