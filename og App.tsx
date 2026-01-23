import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, Instagram, Twitter, 
  ExternalLink, Database, Cpu, BrainCircuit, Code2, 
  BarChart3, UserCircle2, ChevronRight, Send, X, 
  Globe, Award, BookOpen 
} from 'lucide-react';

/**
 * STYLING NOTE:
 * Since we are fixing path resolution issues, I have included the 
 * necessary Tailwind-friendly CSS within this file logic where possible,
 * and ensured the image component handles scaling strictly.
 */

// Define Prop types for the Image component
interface ProjectCardImageProps {
  text: string;
  imageSrc?: string;
  height?: string;
}

const ProjectCardImage: React.FC<ProjectCardImageProps> = ({ text, imageSrc, height = "h-48" }) => (
  <div className={`w-full ${height} bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden relative group`}>
    {imageSrc ? (
      <img 
        src={imageSrc} 
        alt={text} 
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        onError={(e: any) => { 
          // Fallback if local image isn't found during dev
          e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800'; 
        }}
      />
    ) : (
      <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600 p-4">
        <Code2 size={40} className="mb-2 opacity-20" />
        <span className="text-[10px] uppercase tracking-widest font-bold">{text}</span>
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white font-sans">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-40 bg-black/60 backdrop-blur-xl border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-md opacity-30 animate-pulse"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center overflow-hidden border border-blue-400/30 relative">
                {/* Fallback to profile image path */}
                <img 
                  src="/images/about.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  onError={(e: any) => e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"}
                />   
              </div>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-blue-50">KILUVA ANALYSIS</h1>
              <p className="text-[9px] text-blue-400 font-bold uppercase tracking-[0.3em]">Full Stack Data Architect</p>
            </div>
          </div>

          {/* --- TABS --- */}
          <nav className="flex items-center bg-neutral-900/80 rounded-2xl p-1.5 border border-neutral-800 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-8 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                  activeTab === item.id 
                  ? 'text-white' 
                  : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {activeTab === item.id && (
                  <div className="absolute inset-0 bg-blue-600 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"></div>
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6 text-neutral-400">
            <a href="https://github.com/kiteluva" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/kiteluva08" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </header>

      {/* --- CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {activeTab === 'home' && (
          <div className="space-y-32">
            <section className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                  Active in Nairobi
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                  Blueprinting <span className="text-blue-600">Digital</span> Intelligence.
                </h2>
                <p className="text-neutral-500 text-lg leading-relaxed max-w-xl mb-10">
                  Synthesizing data science with full-stack engineering to build automated, 
                  scalable solutions for the modern web.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setActiveTab('projects')} className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-500">Portfolio</button>
                  <button onClick={() => setActiveTab('contact')} className="px-10 py-4 border border-neutral-800 font-black uppercase tracking-widest text-xs rounded-xl hover:bg-neutral-900 transition-all">Let's Talk</button>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600/30 blur-[120px] rounded-full group-hover:bg-blue-600/40 transition-all duration-700"></div>
                  <ProjectCardImage text="Hero Interface" imageSrc="/images/profile.jpg" height="h-[550px]" />
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Database />, title: "Data Architecture", desc: "Modeling complex datasets into structured, actionable insights." },
                { icon: <Cpu />, title: "Backend Systems", desc: "Scalable API development and server-side automation." },
                { icon: <BrainCircuit />, title: "AI Integration", desc: "Implementing LLMs and predictive models into live workflows." }
              ].map((card, idx) => (
                <div key={idx} className="p-10 bg-neutral-900/40 border border-neutral-800 rounded-2xl hover:border-blue-500/30 hover:bg-neutral-900/60 transition-all group">
                  <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </section>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-4xl font-black tracking-tighter mb-2">Selected Works</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "KADA Analyzer", category: "Data Science", imageUrl: "/images/kada.png", desc: "Automated extraction and multi-sector analysis tool.", tags: ["Python", "React", "AI"], github: "https://github.com/kiteluva/CSV_XLS_DATA_ANALYZER" },
                { title: "KADSA Tech", category: "Web Systems", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", desc: "Corporate tech consulting portal.", tags: ["Tailwind", "JS"], github: "https://github.com/kiteluva" },
              ].map((p, i) => (
                <div key={i} className="group cursor-pointer bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all" onClick={() => setSelectedProject(p)}>
                  <ProjectCardImage text={p.title} imageSrc={p.imageUrl} />
                  <div className="p-8">
                    <span className="text-blue-500 text-[9px] font-bold uppercase tracking-widest">{p.category}</span>
                    <h4 className="text-xl font-bold mt-2 mb-4 group-hover:text-blue-400 transition-colors">{p.title}</h4>
                    <p className="text-neutral-500 text-xs mb-6 line-clamp-2">{p.desc}</p>
                    <div className="flex items-center text-blue-400 text-[10px] font-black uppercase tracking-widest gap-2">
                      Explore Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto py-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black tracking-tighter mb-6">Let's Connect</h2>
              <p className="text-neutral-500">Available for innovative projects and data-driven roles.</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-5 outline-none focus:border-blue-600 transition-all text-sm text-white" placeholder="Full Name" />
                <input className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-5 outline-none focus:border-blue-600 transition-all text-sm text-white" placeholder="Email Address" />
              </div>
              <textarea className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-5 outline-none focus:border-blue-600 transition-all text-sm h-40 text-white" placeholder="Tell me about your project..."></textarea>
              <button className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:bg-blue-500 transition-all flex items-center justify-center gap-3">
                Send Transmission <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </main>

      <footer className="border-t border-neutral-900 bg-neutral-950 pt-20 pb-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black mb-6 tracking-tighter text-blue-500">KILUVA.</h3>
          <p className="text-neutral-700 text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} KILUVA J. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* --- MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-neutral-900 border border-blue-900/30 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
             <div className="flex justify-end p-4 absolute right-0 top-0 z-20">
               <button onClick={() => setSelectedProject(null)} className="p-2 bg-black/50 text-white rounded-full hover:bg-blue-600 transition-all"><X size={20}/></button>
             </div>
             <div className="grid md:grid-cols-2">
                <ProjectCardImage text={selectedProject.title} imageSrc={selectedProject.imageUrl} height="h-full min-h-[400px]" />
                <div className="p-10">
                  <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">{selectedProject.category}</span>
                  <h3 className="text-3xl font-black mt-2 mb-6">{selectedProject.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">{selectedProject.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.tags?.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 bg-blue-900/20 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase rounded">{tag}</span>
                    ))}
                  </div>
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="block w-full py-4 bg-blue-600 text-center font-bold text-sm rounded-xl hover:bg-blue-500 transition-all">View Repository</a>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;