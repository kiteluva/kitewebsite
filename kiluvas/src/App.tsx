import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, Instagram, Twitter,
  BrainCircuit, Code2, 
  UserCircle2, ChevronRight, Send, X, 
  Globe, Award,
  MapPin, Sun,
  GraduationCap,
  LineChart,
  Images
} from 'lucide-react';
import MoreModal from './MoreModal';
import PrayerCTA from './PrayerCTA';

// --- TYPES & INTERFACES ---
interface Project {
  title: string;
  category: string;
  origin: string;
  desc: string;
  longDesc?: string;
  tags: string[];
  imageUrl?: string;
  github?: string;
  live?: string;
  gallery?: string[];
  review?: string;
}

interface ProjectCardImageProps {
  text: string;
  imageSrc?: string;
  height?: string;
}

interface NavItem {
  id: string;
  label: string;
}

// --- SHARED COMPONENTS ---

const ProjectCardImage: React.FC<ProjectCardImageProps> = ({ text, imageSrc, height = "h-48" }) => (
  <div className={`w-full ${height} bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden relative group`}>
    {imageSrc ? (
      <img 
        src={imageSrc} 
        alt={text} 
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        onError={(e: any) => { e.target.src = "images/kiluva.jpeg"; }}
      />
    ) : (
      <div className="w-full h-full flex flex-col items-center justify-center text-neutral-500 p-4 text-center">
        <div className="mb-2 opacity-20"><Code2 size={48} /></div>
        <span className="text-xs uppercase tracking-widest font-semibold">{text}</span>
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
  </div>
);

// --- SUB-VIEWS ---

const HomeView: React.FC<{ setActiveTab: (id: string) => void; onOpenMore: () => void }> = ({ setActiveTab, onOpenMore }) => (
  <div className="space-y-24 animate-in fade-in duration-700 text-left">
    <section className="relative isolate mb-8 min-h-[570px] overflow-hidden rounded-[2rem] border border-neutral-800 bg-[#08080b] px-6 py-10 md:px-12 md:py-14 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_82%_80%,rgba(124,58,237,0.24),transparent_38%),radial-gradient(ellipse_at_8%_10%,rgba(37,99,235,0.13),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
<div className="relative z-10 max-w-4xl pb-32 md:pb-24 lg:pb-12">
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-400/[0.08] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-purple-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> "sic parvis magna" <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /></span>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">Data · Technology · Ai . Service</p>
        <h2 className="mb-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-[5.6rem]">I use my talents to <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">Create Impactful Possibilities.</span></h2>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">Data scientist, full-stack developer, and mentor. I build analytical tools and digital experiences that help people understand more, decide better, and do meaningful work.</p>
        <div className="mb-8 max-w-2xl border-l-2 border-amber-300/70 pl-4"><p className="text-sm leading-relaxed text-neutral-400">My Catholic faith guides how I use my gifts: with integrity, stewardship, generosity, and a commitment to make opportunities reach beyond myself.</p><p className="mt-2 text-sm font-semibold italic text-amber-200">“I am a child of God; It will ONLY happen to me according to His will.”</p></div>
        <div className="flex flex-wrap gap-3"><button onClick={() => setActiveTab('projects')} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:bg-neutral-200">Explore my work <ChevronRight size={17}/></button><button onClick={() => setActiveTab('contact')} className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition hover:border-purple-400 hover:bg-purple-400/10">Start a conversation <Send size={15}/></button></div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[300px] w-42 overflow-hidden rounded-tl-[5rem] border-l border-t border-white/10 bg-gradient-to-br from-purple-400/20 to-sky-400/10 sm:h-[360px] sm:w-56 lg:h-[440px] lg:w-[340px] xl:h-[500px] xl:w-[380px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/><img src="/images/profile.jpeg" alt="Kiluva James" className="h-full w-full object-cover object-top opacity-90" onError={(e:any)=>{e.currentTarget.src='/images/profile.jpeg'}}/>
        <div className="absolute bottom-4 left-4 right-4"><p className="text-sm font-bold text-white">Kiluva James</p><p className="text-[9px] uppercase tracking-[0.18em] text-neutral-300">Think · Build · Give back</p></div>
      </div>
      <div className="absolute bottom-5 left-6 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 md:flex lg:left-16"><span>Faith-led</span><span className="h-px w-8 bg-neutral-700"/><span>People-centred</span><span className="h-px w-8 bg-neutral-700"/><span>Purpose-built</span></div>
    </section>
    <ExpertiseSection />

    {/* Expanded About Section */}
    <section className="bg-neutral-900/20 rounded-3xl p-8 md:p-12 border border-neutral-800/50">
      <div className="flex flex-col md:flex-row gap-12 items-start text-left">
        <div className="w-full md:w-1/3 sticky top-24 space-y-6">
          <ProjectCardImage text="Creative" imageSrc="/images/about.jpg" height="h-72" />
          <button
            onClick={onOpenMore}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-700 bg-white/[0.03] px-6 py-3 text-sm font-bold text-white transition hover:border-purple-400 hover:bg-purple-400/10"
          >
            <Images size={16} className="text-purple-300" /> More
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <div className="p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800">
             <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-4 flex items-center gap-2">
                <MapPin size={14} /> From Taveta to Tech
             </h4>
             <p className="text-neutral-500 text-xs leading-relaxed">
                Born to peasant farmers on the edge of Kenya, my journey began in the shambas and charcoal kilns of the countryside.
             </p>
             <p className="text-blue-500 text-xs leading-relaxed">
                A smiley, curious, and God fearing kid, I followed a path full of uncertainties, knowing there is GOD in heaven who has a plan for me. 
             </p>
          </div>
          <div className="p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800">
             <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-4 flex items-center gap-2">
                <GraduationCap size={14} /> Academic Journey
             </h4>
             <p className="text-neutral-500 text-xs leading-relaxed">
                From a grassroots primary school to a Grade A national high school via Equity Wings to Fly, culminating in a Statistics degree at the University of Nairobi.
             </p>
             <p className="text-neutral-500 text-xs leading-relaxed">
                <strong>Core Focus:</strong> Machine Learning, Computational Methods, Time Series Analysis, Hypothesis Testing, and Probability Modelling.
             </p>
          </div>
          <div className="p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800">
             <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4 flex items-center gap-2">
                <Sun size={14} /> My Prayer Everyday
             </h4>
              <p className="text-neutral-500 text-xs leading-relaxed">
                If Not for my sake Oh God, Then for the 19 other children in marginalized communities who won't get the chance to step out.
              </p>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Use me Holy Father, <strong>as an instrument of your mercy</strong>. You gave me the talents I have Freely. Lead me to give-back to all, especially your children who are marginalized and underprivileged.
              </p>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <UserCircle2 className="text-purple-500" /> The Kiluva James Story
          </h3>
          <div className="space-y-6 text-neutral-400 leading-relaxed">
            <p>
              My background is rooted in the resilience of the Kenyan countryside. Growing up as the second born to peasant farmers in Taveta, I learned early that hard work is not an option—it is survival. Whether it was herding cattle, ploughing the shamba, or the grueling labor of charcoal burning to sustain daily needs, those experiences forged a hunger to create something different.
            </p>
            <p>
              My educational path was transformed by the Equity Wings to Fly program, which supported my transition from a grassroots primary school to a Grade A national high school. This high-quality education enabled me to join the University of Nairobi, where I pursued a Bachelor's degree in Statistics. It was during this time that I discovered my true passion for computing while diving into the world of Data Science. God has been great, surely GOD DID!
            </p>
            <p>
              Luck, Fortune, Grace, or Divine Providence—call it what you will—but I know for certain; the talents I have, the people I met and the experiences I have till now; they all point to a greater purpose. I felt a calling to ensure that others, especially marginalized young minds, could also ethically grow as independent thinkers and creators, and contribute to the betterment of their communities.
            </p>
            <p>
              From a community where only 1 in 20 children get the opportunity to step out, I’ve made it my mission to ensure that "success" isn't just personal—it's communal. I am driven to build the foundations and provide the resources that marginalized young minds need to venture into the tech world.
            </p>
            <p>
              This vision led to the founding of :
              <a href="https://the-website-chi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5">
                <img src="/images/icon2.png" alt="icon" className="w-10 h-10 inline-block" /> 
                  <span className="kadsa-k">K</span><span className="kadsa-a">A</span><span className="kadsa-d">D</span><span className="kadsa-s">S</span><span className="kadsa-a2">A</span>
              </a> 
              —a company dedicated to pushing the boundaries of Data, Tech, and AI. Through the KADSA Academy, our innovation pool and The K-SMART initiative, we provide quality knowledge to feed the ideas of innovators, young minds and aspiring entrepreneurs who, like me, come from backgrounds where amenities are scarce but potential is infinite.
            </p>
          </div>
          
          <div className="mt-10 space-y-5">
            {/* Header Statement */}
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
              Acquired & Sharpened skills:
            </p>

            {/* Skills Grid Container */}
            <div className="flex flex-wrap gap-2.5">
              {[
                'Critical Thinking',
                'Leadership',
                'Strategy',
                'Creativity',
                'Team Work',
                'Curiosity',
                'Adaptability',
                'Communication',
                'Determination',
                'Problem Solving',
                'Collaboration',
              ].map((skill) => (
              <div
                key={skill}
                className="px-3.5 py-1.5 bg-neutral-800/60 hover:bg-neutral-800 hover:border-neutral-600 rounded-full text-xs font-medium text-neutral-300 border border-neutral-700/60 transition-colors cursor-default">
                {skill}
              </div>
              ))}
            </div>

            {/* Dedicated Tab for PRAYER! */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 text-amber-300 shadow-lg shadow-amber-500/5 backdrop-blur-sm">
                <span className="text-xs font-medium text-amber-200/80 uppercase tracking-wide">
                  Above it all:
                </span>
                <span className="text-sm font-extrabold tracking-wider text-amber-400 drop-shadow-sm">
                  |-PRAYER-|
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ExpertiseSection: React.FC = () => {
  const areas = [
    { title: "Data science", icon: <LineChart size={14}/>, color: "#22d3ee" },
    { title: "Machine learning & AI", icon: <BrainCircuit size={14}/>, color: "#8b5cf6" },
    { title: "Web development", icon: <Globe size={14}/>, color: "#34d399" },
    { title: "Software & systems development", icon: <Code2 size={14}/>, color: "#f59e0b" },
    { title: "Teaching & technical learning", icon: <GraduationCap size={14}/>, color: "#f472b6" },
    { title: "Leadership & mentorship", icon: <UserCircle2 size={14}/>, color: "#60a5fa" }
  ];

  return (
    <section id="expertise" className="mb-20 text-left" aria-labelledby="expertise-title">
      <div className="mb-7 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">A broad, practical toolkit</p>
        <h2 id="expertise-title" className="mb-4 text-3xl font-black tracking-tight md:text-5xl">Where data, technology, and <span className="text-violet-300">people meet.</span></h2>
        <p className="text-sm leading-relaxed text-neutral-400 md:text-base">I combine analytical thinking with building and teaching: from data science and machine learning to web, software, and systems development, alongside leadership, mentorship, and technical learning.</p>
      </div>
      <div className="grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.2fr]">
        <article className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 md:p-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">My expertise, at a glance</p>
          <div className="flex flex-col items-center gap-6 sm:flex-row lg:flex-col xl:flex-row">
            <div role="img" aria-label="Pie chart showing six connected areas of expertise" className="relative h-44 w-44 shrink-0 rounded-full shadow-[0_0_60px_rgba(139,92,246,0.12)]" style={{ background: `conic-gradient(${areas.map((area, i) => `${area.color} ${i * 60}deg ${(i + 1) * 60}deg`).join(", ")})` }}>
              <div className="absolute inset-[24%] flex items-center justify-center rounded-full border border-white/10 bg-[#0b0b10] text-center"><span className="text-[9px] font-bold uppercase leading-relaxed tracking-[0.12em] text-neutral-300">Data<br/>Build<br/>People</span></div>
            </div>
            <ul className="grid w-full gap-3">{areas.map((area) => <li key={area.title} className="flex items-center gap-3 text-xs font-medium text-neutral-300"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]" style={{ color: area.color }}>{area.icon}</span>{area.title}</li>)}</ul>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-950/40 via-neutral-900 to-neutral-950 p-6 md:p-8">
          <div className="absolute -right-12 -top-14 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl"/>
          <p className="relative mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-200">Teaching in practice</p>
          <h3 className="relative mb-4 text-2xl font-extrabold">Open University of Kenya</h3>
          <p className="relative mb-6 max-w-xl text-sm leading-relaxed text-neutral-300">As a Teaching Assistant and Mentor, I led more than 20 hours of master’s level Linear Algebra classes, helping students apply core ideas in Python for data science.</p>
          <div className="relative mb-6 flex flex-wrap gap-2"><span className="rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-3 py-1.5 text-xs text-violet-100">March–April cohort</span><span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 text-xs text-cyan-100">September–October cohort</span></div>
          <p className="relative border-t border-white/10 pt-4 text-xs leading-relaxed text-neutral-400">I enjoy making challenging technical ideas clear, practical, and useful beyond the classroom.</p>
        </article>
      </div>
    </section>
  );
};

const screenshotGallery = (directory: string, basename: string, count: number, includeCover = false) => [
  ...(includeCover ? [`${directory}/${basename}.png`] : []),
  ...Array.from({ length: count }, (_, index) => `${directory}/${basename}${index + 1}.png`)
];

const projectCategoryPalette = [
  { key: "data", label: "Data & Analytics", color: "#22d3ee" },
  { key: "tech", label: "Web & Software", color: "#a78bfa" },
  { key: "ai", label: "AI & Machine Learning", color: "#fbbf24" }
];

const ProjectDistribution: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const groups = projectCategoryPalette.map((category) => ({
    ...category,
    projects: projects.filter((project) => project.category === category.key)
  }));
  const slices = projects.map((project, index) => {
    const category = projectCategoryPalette.find((item) => item.key === project.category);
    const start = (index * 360) / projects.length;
    const end = ((index + 1) * 360) / projects.length;
    return `${category?.color ?? "#71717a"} ${start}deg ${end - 1.2}deg, transparent ${end - 1.2}deg ${end}deg`;
  });
  let cursor = 0;
  const categorySlices = groups.map((group) => {
    const start = cursor;
    cursor += (group.projects.length * 360) / projects.length;
    return `${group.color} ${start}deg ${cursor - 1.2}deg, transparent ${cursor - 1.2}deg ${cursor}deg`;
  });

  return (
    <section className="mb-16 rounded-[2rem] border border-neutral-800 bg-neutral-900/40 p-6 md:p-9" aria-labelledby="project-distribution-title">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-300">Portfolio map</p><h3 id="project-distribution-title" className="text-2xl font-black md:text-3xl">A growing body of work</h3></div>
        <p className="max-w-md text-xs leading-relaxed text-neutral-400">The inner ring groups the work by field. Every outer slice represents one project; its number matches the index at right.</p>
      </div>
      <div className="grid items-center gap-8 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col items-center gap-5 sm:flex-row lg:flex-col xl:flex-row">
          <div role="img" aria-label={`Double doughnut chart: ${groups.map((group) => `${group.label}, ${group.projects.length}`).join("; ")}. The outer ring contains one slice for each of ${projects.length} projects.`} className="relative h-56 w-56 shrink-0 rounded-full" style={{ background: `conic-gradient(${slices.join(", ")})` }}>
            <div className="absolute inset-[16%] rounded-full" style={{ background: `conic-gradient(${categorySlices.join(", ")})` }} />
            <div className="absolute inset-[34%] flex flex-col items-center justify-center rounded-full border border-white/10 bg-[#101014] text-center"><span className="text-3xl font-black">{projects.length}</span><span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-400">Projects</span></div>
          </div>
          <ul className="grid gap-2.5">{groups.map((group) => <li key={group.key} className="flex items-center justify-between gap-5 text-xs"><span className="flex items-center gap-2.5 text-neutral-300"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: group.color }} />{group.label}</span><span className="font-mono text-neutral-500">{group.projects.length}</span></li>)}</ul>
        </div>
        <ol className="grid gap-x-6 gap-y-1 sm:grid-cols-2">{projects.map((project, index) => {
          const category = projectCategoryPalette.find((item) => item.key === project.category);
          return <li key={`${project.category}-${project.title}`} className="flex min-w-0 items-center gap-3 border-b border-neutral-800/80 py-2 text-xs"><span className="font-mono text-[10px] text-neutral-600">{String(index + 1).padStart(2, "0")}</span><span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: category?.color }} /><span className="truncate text-neutral-300" title={project.title}>{project.title}</span></li>;
        })}</ol>
      </div>
    </section>
  );
};

const ProjectsView: React.FC<{ setSelectedProject: (p: Project) => void }> = ({ setSelectedProject }) => {
 const [expanded,setExpanded]=useState<Record<string,boolean>>({});
 const categoryInfo={data:{title:"Data & Analytics",desc:"Analysis, statistical modelling, dashboards, and decision-support tools."},tech:{title:"Web & Software Engineering",desc:"Responsive websites, platforms, and digital experiences built around real needs."},ai:{title:"Artificial Intelligence",desc:"AI-enabled tools, prediction systems, and human-centred automation."}};
  const projectData: Project[] = [
    { 
      title: "KADA; KADSA's Automated Data Analyzer", 
      category: "data", 
      origin: "KADSA",
      imageUrl: "/projects/data/kada/kada.png",
      gallery: screenshotGallery("/projects/data/kada", "kada", 15, true),
      desc: "Automated analytical codeless tool for extraction and analysis of multi-sector Data.", 
      longDesc: "Designed to help small businesses track their performance without needing deep technical expertise. Features include data cleaning, visualization/data-storytelling, report generationand Predictive modelling.",
      tags: ["Data Science", "Python", "Time series", "Predictive Modelling", "Survival Analysis", "BS4", "Data Automation", "Data Analysis", "FastAPI", "React", "PWA", "Generative AI", "Chatbot"],
      github: "https://github.com/kiteluva/CSV_XLS_DATA_ANALYZER",
      live: "https://csv-xls-data-analyzer.vercel.app/"
    },
    { 
      title: "Student Retention Analysis", 
      category: "data", 
      origin: "Future Interns",
      imageUrl: "/images/POWER BI 03.png",
      gallery: ["/images/POWER BI 03.png"],
      desc: "An in-depth study of student demographics and behaviors to predict and improve retention rates.", 
      longDesc: "Leveraged descriptive and diagnostic analytics to identify risk factors. Provided a clear roadmap for administration to improve student experiences.",
      tags: ["Python", "Pandas", "Analytics", "Power BI", "Data Storytelling"],
      github: "https://github.com/kiteluva/FUTURE_DS_03"
    },
    { 
      title: "Business Performance Hub", 
      category: "data", 
      origin: "Future Interns",
      imageUrl: "/images/superstore.png",
      gallery: ["/images/superstore.png"],
      desc: "Interactive Power BI dashboard-system for monitoring sales and Return on investiment (ROI).", 
      longDesc: "Created during academic tenure to simulate real-world data warehousing and visualization environments.",
      tags: ["SQL", "Power Bi", "Excel", "R", "Data Storytelling"],
      github: "https://github.com/kiteluva/FUTURE_DS_01"
    },
    { 
      title: "Facebook Ads Performance", 
      category: "data", 
      origin: "Future Interns",
      imageUrl: "/images/POWER BI 02.png",
      gallery: ["/images/POWER BI 02.png"],
      desc: "Analysis of the performance of Facebook Ads and their impact on returns.", 
      longDesc: "Did variable enginearing on power bi to find the actual return on investiment, there after performed an anova test to check if there is any effect accross the campaigns.",
      tags: ["Python", "Power BI", "Analytics", "Data Storytelling"],
      github: "https://github.com/kiteluva/FUTURE_DS_02"
    },
    { 
      title: "Popularity Regression Model", 
      category: "data", 
      origin: "School",
      imageUrl: "/images/correlation.png",
      gallery: ["/images/correlation.png"],
      desc: "Predictive model of spotify's songs' populaarity.", 
      longDesc: "Identifies key features that contribute to a song going viral using advanced regression and classification techniques. It relates song popularity to its audio features.",
      tags: ["Scikit-Learn", "Regression", "Classification", "Math", "R", "Random Forest","Gradient Boosting", "XGBoost"],
      github: "https://github.com/kiteluva/popularity_regression_and_classification_analysis"
    },
    { 
      title: "KADA; KADSA's Automated Data Analyzer", 
      category: "tech", 
      origin: "KADSA",
      imageUrl: "/projects/tech/kada/kada.png",
      gallery: screenshotGallery("/projects/tech/kada", "kada", 15, true),
      desc: "A state ot the art modern PWA, Web based and intergratable across devices.", 
      longDesc: "Designed as a Progressive Web application (PWA) so it can serve even those who do not have access to a traditional desktops, simplified for compatibility even with smartphones, To ease access and use for even those with limited resources.",
      tags: ["JavaScript", "HTML", "CSS", "Data Analysis", "ReactJS", "PWA", "Generative AI", "Chatbot"],
      github: "https://github.com/kiteluva/CSV_XLS_DATA_ANALYZER",
      live: "https://csv-xls-data-analyzer.vercel.app/"
    },
    { 
      title: "The Wealth Clinic Ke", 
      category: "tech", 
      origin: "Professional",
      imageUrl: "/projects/tech/wealthcke/wc1.png",
      gallery: screenshotGallery("/projects/tech/wealthcke", "wc", 10),
      desc: "Full-scale corporate website for a wealthInvestiment consulting firm.", 
      longDesc: "Includes dynamic service listings, client intake forms, and an optimized performance architecture. With Rich Identity and theme stability across mutiple pages with automated wealth stability assessment. Equiped with investiment and Mononey management materials and e-books.",
      tags: ["Tailwind", "JS", "Design", "CSS", "HTML", "React", "PWA", "Chatbot"],
      github: "https://github.com/kiteluva/beatrice/",
      live: "https://www.thewealthclinic.co.ke/"
    },
    { 
      title: "Ibacho Technical Training College", 
      category: "tech", 
      origin: "Professional",
      imageUrl: "/projects/tech/ibacho/ibc1.png",
      gallery: screenshotGallery("/projects/tech/ibacho", "ibc", 10),
      desc: "Full-scale Institutional website for a technical training college.", 
      longDesc: "This is a full-scale institutional website for a technical training college. Informative, easy to navigate, and mobile-responsive. Fitted with online applications and placeholders for bioth staff and student portals.",
      tags: ["Tailwind", "JS", "Design", "CSS", "HTML", "React"],
      github: "https://kiteluva.github.io/ibaso/",
      live: "https://ibachottc.ac.ke/"
    },
    { 
      title: "Brainserve Academy", 
      category: "tech", 
      origin: "Institutional",
      imageUrl: "/projects/tech/brainserve/bs1.png",
      gallery: screenshotGallery("/projects/tech/brainserve", "bs", 10),
      desc: "Front-end; Institutional website for a CBC school with JSS classes.", 
      longDesc: "This is a full-scale institutional website for a CBC school. Informative, easy to navigate, and mobile-responsive. Fitted with online applications and information on all school levels. Ready to intergrate a state of the art school management system.",
      tags: ["Tailwind", "JS", "Design", "CSS", "HTML", "React"],
      github: "https://github.com/kiteluva/school_lukes",
      live: "https://schoolukes.vercel.app/"
    },
    { 
      title: "Clini-Q; Health start up", 
      category: "tech", 
      origin: "Professional",
      imageUrl: "/projects/tech/clini-q/cq1.png",
      gallery: screenshotGallery("/projects/tech/clini-q", "cq", 10),
      desc: "A Company website for a start up health tech company.", 
      longDesc: "This website is Built to exclussively advertise a software the start up developed. It is equiped with a responsive design, great feel even on mobile and modals for deeper contents. Themes, as per the clients tastes.",
      tags: ["Tailwind", "JS", "Design", "CSS", "HTML", "React"],
      github: "https://kiteluva.github.io/clini-q/",
      live: "https://clini-q-sigma.vercel.app/"
    }, 
    { 
      title: "Kisavi's Portfolio", 
      category: "tech", 
      origin: "Personal",
      imageUrl: "/projects/tech/kisavi/ek1.png",
      gallery: screenshotGallery("/projects/tech/kisavi", "ek", 10),
      desc: "An elegant portfolio design to showcase Her work.", 
      longDesc: "This portfolio highlights her skills, projects, and professional journey policy development and poverty eradication measures implementation. It features a sleek design, easy navigation, and a responsive layout.",
      tags: ["Tailwind", "JS", "Design", "CSS", "Javascript", "React"],
      github: "https://github.com/kiteluva/KISAVI-portfolio",
      live: "https://kisavi-portfolio.vercel.app/"
    },
    { 
      title: "CPC, Catholic Prayer Companion", 
      category: "ai", 
      origin: "Faith",
      imageUrl: "/projects/ai/cpc/cpc.png",
      gallery: screenshotGallery("/projects/ai/cpc", "cpc", 6, true),
      desc: "Automated application, a guide thro' catholic prayers, The holy scriptures and Catechism", 
      longDesc: "Designed to help Catholics all over the world keep track of their pilgrimage life. With advanced curated sacristy, You keep track of your progress, aceross daily prayers, procedural prayers and novenas. You also get recomendations from your activity what verses to read, pragraphs of the catechism. An all in one catholic holliness; prayers; Scriptures and catechism, all in sync with the catholic calendar.",
      tags: ["Python", "Time series", "Predictive Modelling", "Magisterium AI", "BS4", "Automation", "Data Analysis", "FastAPI", "React", "PWA", "Generative AI", "Chatbot"],
      github: "https://github.com/kiteluva/c_p_c",
      live: "https://kiteluva-cpc.vercel.app/"
    },
    { 
      title: "R shinny's Popularity Predictor", 
      category: "ai", 
      origin: "School",
      imageUrl: "/projects/ai/rshinny/sh1.png",
      gallery: screenshotGallery("/projects/ai/rshinny", "sh", 5),
      desc: "An R shinny application to Predict spotify's songs' populaarity.", 
      longDesc: "Identifies key features that contribute to a song going viral using advanced regression and classification techniques. It relates song popularity to its audio features. And use user's input features to predict the likely popularity of the song, it also gives insights on how to improve the song's chances of going viral.",
      tags: ["Scikit-Learn", "Regression", "Classification", "Math", "R", "R-shinny", "Random Forest","Gradient Boosting", "XGBoost"],
      github: "https://github.com/kiteluva/popularity_predictor",
      live: "https://jsf0vd-james-kitenye.shinyapps.io/Popularity_Predictor/"
    },
    { 
      title: "KADA; KADSA's Automated Data Analyzer", 
      category: "ai", 
      origin: "KADSA",
      imageUrl: "/projects/ai/kada/kada.png",
      gallery: screenshotGallery("/projects/ai/kada", "kada", 15, true),
      desc: "Automated tool for extraction and analysis Data.", 
      longDesc: "Designed and integrated with a generative AI, with a chatbot interphase to help Non-technical users communicate with the AI model, Interprete their findings and give simplified actionable insights from the data being worked on. Most users don't have the technical expertise to operate complicted systems, with KADA; Your firm gets a chance to act on your own Data even with less technical personel.",
      tags: ["Generative AI", "Chatbot" , "Python", "Gemini", "Data Science", "Data Automation", "Data Analysis", "FastAPI", "React"],
      github: "https://github.com/kiteluva/CSV_XLS_DATA_ANALYZER",
      live: "https://csv-xls-data-analyzer.vercel.app/"
    }
    
  ];

 const categories=["data","tech","ai"] as const;
  return <div className="animate-in fade-in duration-700 text-left">
  <section className="relative isolate mb-10 min-h-[360px] overflow-hidden rounded-[2rem] border border-violet-300/20 bg-[#08080b] px-7 py-10 shadow-[0_24px_100px_rgba(70,40,140,0.16)] md:px-12 md:py-14 lg:px-16">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgba(124,58,237,0.26),transparent_38%),radial-gradient(ellipse_at_8%_90%,rgba(37,99,235,0.17),transparent_35%)]" />
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:42px_42px]" />
    <div className="relative z-10 max-w-4xl">
      <p className="mb-5 inline-flex rounded-full border border-violet-300/25 bg-violet-300/[0.08] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-violet-200">Selected work <span className="px-2 text-cyan-200">/</span> Built to serve</p>
      <h2 className="mb-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">Good work should <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">inspire, grow, encourage and cultivate </span>others.</h2>
      <p className="mb-7 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">Explore data, software, and AI projects shaped by curiosity and a practical desire to make things better for people.</p>
      <div className="max-w-3xl border-l-2 border-amber-300/70 pl-4"><p className="text-sm leading-relaxed text-neutral-400">I see work as stewardship: use what you have been given well, share what you learn, and make room for others to grow.</p><p className="mt-2 text-sm font-semibold italic text-amber-200">“God’s will be done on earth, as it is in Heaven.”</p></div>
    </div>
    <div className="absolute bottom-5 right-6 hidden text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:block">Data <span className="px-2 text-purple-300">/</span> Technology <span className="px-2 text-purple-300">/</span> Impact</div>
  </section>
  <ProjectDistribution projects={projectData} />
  <div className="mb-12 flex flex-wrap gap-2">{categories.map(c=><a key={c} href={`#projects-${c}`} className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-300 hover:border-purple-400 hover:text-white">{categoryInfo[c].title}</a>)}</div>
  <div className="space-y-16">{categories.map(category=>{const projects=projectData.filter(p=>p.category===category);const visible=expanded[category]?projects:projects.slice(0,3);return <section key={category} id={`projects-${category}`} className="scroll-mt-24"><div className="relative mb-7 overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-r from-neutral-900/90 via-neutral-900/50 to-transparent px-6 py-5 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-b before:from-cyan-300 before:via-violet-400 before:to-transparent"><h3 className="mb-2 text-2xl font-extrabold md:text-3xl">{categoryInfo[category].title}</h3><p className="text-sm text-neutral-400">{categoryInfo[category].desc}</p><p className="mt-2 text-xs text-neutral-500">{projects.length} projects</p></div><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{visible.map((p,i)=><button key={`${p.title}-${i}`} onClick={()=>setSelectedProject({...p,gallery:p.gallery?.length?p.gallery:[p.imageUrl||""].filter(Boolean)})} className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30 text-left transition hover:-translate-y-1 hover:border-purple-500/50"><ProjectCardImage text={p.title} imageSrc={p.imageUrl} height="h-52"/><div className="p-6"><div className="mb-4 flex justify-between gap-3"><span className="rounded-full bg-purple-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-300">{category==="ai"?"AI & ML":category==="data"?"Data":"Technology"}</span><span className="text-[10px] uppercase tracking-widest text-neutral-600">{p.origin}</span></div><h4 className="mb-2 text-lg font-bold group-hover:text-purple-300">{p.title}</h4><p className="mb-5 line-clamp-3 text-sm text-neutral-400">{p.desc}</p><span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Explore project <ChevronRight size={15} className="inline"/></span></div></button>)}</div>{projects.length>3&&<div className="mt-7 text-center"><button onClick={()=>setExpanded(prev=>({...prev,[category]:!prev[category]}))} className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-bold hover:border-purple-400">{expanded[category]?"Show fewer projects":`Show more ${categoryInfo[category].title} projects`}</button></div>}</section>})}</div><section className="relative isolate mt-20 overflow-hidden rounded-[2rem] border border-purple-400/20 bg-neutral-900/40 px-7 py-10 md:px-12 md:py-14"><div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_90%_0%,rgba(124,58,237,0.2),transparent_42%)]"/><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-amber-200">Have a problem worth solving?</p><h3 className="mb-5 max-w-3xl text-3xl font-black leading-tight md:text-5xl">Let's build something <span className="text-purple-300">useful, thoughtful, and lasting.</span></h3><p className="mb-8 max-w-2xl text-sm leading-relaxed text-neutral-300 md:text-base">Whether you have a project idea, need help making sense of data, want to collaborate, or would like to create room for someone else through volunteering or mentorship, let's start with a conversation.</p><div className="flex flex-wrap gap-3"><button onClick={() => window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: 'contact' }))} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:bg-neutral-200">Start a project together <ChevronRight size={17}/></button><a href="mailto:kitennykiluva@gmail.com?subject=Let%27s%20start%20a%20project" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-7 py-3.5 text-sm font-bold text-white transition hover:border-purple-400"><Mail size={16}/> Email me</a></div><p className="mt-8 text-xs italic text-neutral-500">Faith-led work. Generous collaboration. A little more good in the world.</p></section></div>;
};

const ContactView: React.FC = () => (
  <div className="mx-auto max-w-6xl animate-in zoom-in-95 duration-500 text-left">
    <section className="relative isolate mb-12 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#08090d] px-7 py-10 md:px-12 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_86%_42%,rgba(34,211,238,0.2),transparent_32%),radial-gradient(ellipse_at_15%_5%,rgba(124,58,237,0.22),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="relative z-10 max-w-3xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">Partnership · Shared knowledge · Service</p>
        <h2 className="mb-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">Let’s make room for <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">more possibility.</span></h2>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">I’m open to collaboration with companies and institutions committed to humanitarian impact, especially partnerships that support children and young people in marginalized communities.</p>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400">I can contribute in data science, software, AI, mentorship, and technical learning. If your mission creates access, shares knowledge, or helps young people shape their futures, I’d be glad to explore how we can work together.</p>
        <a href="mailto:kitennykiluva@gmail.com?subject=Let%27s%20collaborate" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-cyan-100">Explore a partnership <Send size={16}/></a>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-1/2 hidden h-64 w-64 -translate-y-1/2 items-center justify-center md:flex lg:right-10 lg:h-80 lg:w-80">
        <div className="absolute inset-5 rounded-full border border-cyan-200/20"/><div className="absolute inset-12 rounded-full border border-violet-200/20"/><div className="absolute h-28 w-28 rounded-full border border-cyan-200/30 bg-cyan-200/[0.07] shadow-[0_0_80px_rgba(34,211,238,0.15)]"/>
        <span className="absolute left-8 top-14 rounded-full border border-white/10 bg-neutral-950/80 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-100">Learn</span><span className="absolute bottom-14 right-0 rounded-full border border-white/10 bg-neutral-950/80 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-violet-100">Build</span><span className="absolute bottom-7 left-8 rounded-full border border-white/10 bg-neutral-950/80 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-amber-100">Give back</span>
        <span className="relative text-sm font-black tracking-[0.2em] text-white/80">TOGETHER</span>
      </div>
      <p className="relative z-10 mt-8 text-xs font-semibold italic text-amber-200">“I was given freely; I should give freely.”</p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
      <div className="md:col-span-2 space-y-6">
        <div className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
          <h4 className="font-bold mb-6 text-purple-400 uppercase tracking-widest text-xs">Work Status</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold">Open to mission-led collaboration</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              I welcome project partnerships with companies, institutions, and humanitarian organizations working to expand opportunity for children and young people in marginalized communities.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <a href="mailto:kitennykiluva@gmail.com" className="flex items-center justify-between p-4 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-all">
            Email Me <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/kiteluva08" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-neutral-800 text-white rounded-xl font-bold hover:bg-neutral-700 transition-all">
            LinkedIn <Linkedin size={18} />
          </a>
          <a href="https://github.com/kiteluva" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-neutral-800 text-white rounded-xl font-bold hover:bg-neutral-700 transition-all">
            GitHub <Github size={18} />
          </a>
          <a href="tel:+254115939757" className="flex items-center justify-between p-4 border border-neutral-800 rounded-xl font-bold hover:bg-neutral-900 transition-all">
            Phone <Phone size={18} />
          </a>
        </div>
      </div>

      <div className="md:col-span-3">
        <form 
          action="https://formsubmit.co/kitennykiluva@gmail.com" 
          method="POST" 
          className="space-y-10"
        >
          {/* Hidden Inputs for FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="Portfolio Inquiry!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://kitewebsite-nine.vercel.app"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Identifier Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Identifier</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 focus:border-purple-500 outline-none transition-all text-white" 
                placeholder="Full Name" 
              />
            </div>
            
            {/* Contact Point Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Contact Point</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 focus:border-purple-500 outline-none transition-all text-white" 
                placeholder="Email" 
              />
            </div>
          </div>

          {/* Project Type Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Project Type</label>
            <select 
              name="Project_Type"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 focus:border-purple-500 outline-none transition-all text-white"
            >
              <option value="Humanitarian partnership">Humanitarian partnership</option>
              <option value="Technology or data project">Technology or data project</option>
              <option value="Mentorship or training">Mentorship or training</option>
              <option value="Institutional collaboration">Institutional collaboration</option>
            </select>
          </div>

          {/* Proposal Details Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Proposal Details</label>
            <textarea 
              name="Proposal_Details"
              rows={5} 
              required
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 focus:border-purple-500 outline-none transition-all text-white" 
              placeholder="Tell me about your mission, the people you serve, and how we might work together."
            ></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-purple-600 rounded-xl font-bold text-white shadow-xl shadow-purple-900/20 hover:bg-purple-500 transition-all flex items-center justify-center gap-2">
            Dispatch Inquiry <Send size={18} />
          </button>
        </form>
      </div>
    </div>

    <PrayerCTA />
  </div>
);

// --- MAIN APP COMPONENT ---

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({project,onClose}) => {
 const images=(project.gallery?.length?project.gallery:[project.imageUrl||""]).filter(Boolean); const [large,setLarge]=useState<string|null>(null); const [review,setReview]=useState(false); const [rating,setRating]=useState("5"); const [feedback,setFeedback]=useState(""); const [notice,setNotice]=useState(""); const ratingKey=`portfolio-rating:${project.category}:${project.title}`; const [savedRating,setSavedRating]=useState<number>(()=>Number(localStorage.getItem(ratingKey)||0));
 const reviewUrl=`mailto:kitennykiluva@gmail.com?subject=${encodeURIComponent("Project review: "+project.title)}&body=${encodeURIComponent("Project: "+project.title+"\nRating: "+rating+"/5\n\nReview:\n"+feedback)}`;
 const share=async()=>{try{const url=project.live||project.github||window.location.href;if(navigator.share)await navigator.share({title:project.title,text:project.desc,url});else{await navigator.clipboard.writeText(project.title+"\n"+project.desc+"\n"+url);setNotice("Project details copied to clipboard.")}}catch{setNotice("Sharing is unavailable or was cancelled.")}};
 return <><div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-10"><button aria-label="Close project" onClick={onClose} className="absolute inset-0 bg-black/90 backdrop-blur-xl"/><div role="dialog" aria-modal="true" className="relative h-[min(88vh,900px)] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-800 bg-black text-white shadow-[0_32px_120px_rgba(0,0,0,0.8)]"><button onClick={onClose} className="absolute right-5 top-5 z-20 rounded-full border border-neutral-700 bg-neutral-900/90 p-2 text-white shadow-sm backdrop-blur transition hover:border-purple-400"><X/></button><div className="grid h-full min-h-0 grid-cols-1 grid-rows-[minmax(220px,0.8fr)_minmax(0,1.2fr)] overflow-hidden lg:grid-cols-[minmax(340px,0.78fr)_minmax(0,1.22fr)] lg:grid-rows-1"><section className="min-h-0 overflow-y-auto overscroll-contain border-b border-neutral-800 bg-neutral-950 p-6 pt-16 md:p-10 md:pt-10 lg:border-b-0 lg:border-r"><p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-neutral-500">Kiluva James · Project notes</p><p className="mb-4 text-xs font-bold uppercase tracking-widest text-purple-300">{project.category==="ai"?"AI & ML":project.category==="data"?"Data & Analytics":"Web & Software"} · {project.origin}</p><h3 className="mb-5 font-serif text-4xl font-bold leading-tight text-white md:text-5xl">{project.title}</h3><p className="mb-6 text-sm leading-relaxed text-neutral-300">{project.desc}</p>{project.longDesc&&<div className="mb-7 border-t border-neutral-800 pt-5"><h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-400">Full project review & implementation</h4><p className="text-sm leading-relaxed text-neutral-400">{project.longDesc}</p></div>}<div className="mb-7 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-widest text-neutral-300">Rate this project</p><p className="mt-1 text-xs text-neutral-500">Your rating stays in this browser.</p></div><div className="text-right"><p className="text-sm font-bold text-amber-300">{savedRating ? `${savedRating}/5` : "Not rated"}<span className="ml-1 text-amber-300">★</span></p><p className="text-[10px] text-neutral-500">Your rating</p></div></div><div className="mt-3 flex gap-1" role="radiogroup" aria-label="Rate this project from one to five">{[1,2,3,4,5].map(n=><button key={n} type="button" role="radio" aria-checked={savedRating===n} aria-label={`${n} star${n>1?'s':''}`} onClick={()=>{setSavedRating(n);localStorage.setItem(ratingKey,String(n));}} className={`rounded-md p-1 text-2xl transition hover:scale-110 ${n<=savedRating?"text-amber-300":"text-neutral-600 hover:text-amber-300"}`}>★</button>)}</div>{savedRating>0&&<p className="mt-2 text-xs text-emerald-400">Thanks for rating this project {savedRating}/5.</p>}</div><div className="mb-8 flex flex-wrap gap-2">{project.tags.map(t=><span key={t} className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">{t}</span>)}</div><div className="mb-7 grid gap-3 sm:grid-cols-2">{project.github&&<a href={project.github} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-black"><Github size={17} className="mr-2 inline"/>Source / Project</a>}{project.live&&<a href={project.live} target="_blank" rel="noreferrer" className="rounded-xl border border-neutral-700 px-4 py-3 text-center text-sm font-bold text-white transition hover:border-purple-400"><Globe size={17} className="mr-2 inline"/>Live experience</a>}</div><div className="flex flex-wrap gap-3"><button onClick={share} className="rounded-lg border border-neutral-700 px-4 py-2 text-xs font-bold text-white transition hover:border-purple-400"><Send size={15} className="mr-2 inline"/>Share project</button><button onClick={()=>setReview(v=>!v)} className="rounded-lg border border-neutral-700 px-4 py-2 text-xs font-bold text-white transition hover:border-purple-400"><Award size={15} className="mr-2 inline"/>Review project</button></div>{notice&&<p className="mt-3 text-xs text-neutral-400">{notice}</p>}{review&&<form onSubmit={e=>{e.preventDefault();window.location.href=reviewUrl}} className="mt-5 space-y-3 rounded-xl border border-neutral-800 p-4"><h4 className="font-bold">Share your review</h4><label className="block text-xs text-neutral-400">Rating<select value={rating} onChange={e=>setRating(e.target.value)} className="mt-1 block w-full rounded-lg border border-neutral-700 bg-neutral-900 p-2 text-white">{[5,4,3,2,1].map(n=><option key={n} value={n}>{n} / 5</option>)}</select></label><label className="block text-xs text-neutral-400">Feedback<textarea required value={feedback} onChange={e=>setFeedback(e.target.value)} rows={4} className="mt-1 block w-full rounded-lg border border-neutral-700 bg-neutral-900 p-3 text-white" placeholder="What worked well? What could improve?"/></label><button className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-black">Continue by email</button><p className="text-[11px] text-neutral-500">The review opens in your email app; this site does not store submissions.</p></form>}</section><section className="min-h-0 overflow-y-auto overscroll-contain bg-black p-4 md:p-8"><div className="sticky -top-4 z-10 -mx-4 mb-5 bg-black/90 px-4 py-3 backdrop-blur md:-mx-8 md:px-8"><p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">A closer look</p><h4 className="font-serif text-2xl font-bold text-white">Inside the work <span className="ml-2 text-xs font-normal text-neutral-500">{images.length} images</span></h4></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{images.map((src,i)=><div key={src+i} className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3 shadow-md shadow-black/40 md:p-4"><button onClick={()=>setLarge(src)} className="block aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-950 p-2 md:p-3"><img src={src} alt={`${project.title} screenshot ${i+1}`} className="h-full w-full object-contain" loading="lazy"/></button><div className="flex justify-between px-2 pt-3 text-[10px] uppercase tracking-[0.12em] text-neutral-400"><span className="text-neutral-500">Image {i+1}</span><div className="flex flex-wrap gap-3"><button onClick={()=>setLarge(src)} className="font-semibold">Expand</button><a href={src} download className="font-semibold">Download</a><button onClick={async()=>{try{const imageUrl=new URL(src,window.location.href).href;if(navigator.share)await navigator.share({title:project.title,text:`${project.title} · image ${i+1}`,url:imageUrl});else{await navigator.clipboard.writeText(imageUrl);setNotice('Image link copied to clipboard.')}}catch{setNotice('Image sharing was cancelled or is unavailable.')}}} className="font-semibold text-purple-300">Share</button></div></div></div>)}</div><p className="mt-5 text-xs text-neutral-500">Gallery images are configured in the project's <code>gallery</code> array in <code>src/App.tsx</code>.</p></section></div></div></div>{large&&<div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4" onClick={()=>setLarge(null)}><div className="absolute right-5 top-5 flex gap-3"><a href={large} download onClick={e=>e.stopPropagation()} className="rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-white">Download image</a><button onClick={()=>setLarge(null)} className="rounded-full border border-neutral-700 bg-neutral-900 p-2 text-white"><X/></button></div><img src={large} alt="Expanded project image" className="max-h-[88vh] max-w-full object-contain" onClick={e=>e.stopPropagation()}/></div>}</>;
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    const navigate = (event: Event) => {
      const destination = (event as CustomEvent<string>).detail;
      if (destination) setActiveTab(destination);
    };
    window.addEventListener('portfolio:navigate', navigate);
    return () => window.removeEventListener('portfolio:navigate', navigate);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-neutral-800 text-left">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden shadow-lg shadow-purple-500/20">
               <img 
                src="/images/logo.png" 
                alt="Profile" 
                className="w-full h-full object-cover" 
                onError={(e: any) => { e.target.src = "images/kiluva.jpeg"; }}
               />   
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">KILUVA JAMES</h1>
              <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em]">Mentor | Data Scientist | Software Engineer</p>
            </div>
          </div>

          <nav className="flex items-center bg-neutral-900/50 rounded-full p-1 border border-neutral-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === item.id 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 text-neutral-400">
            <a href="https://github.com/kiteluva" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/kiteluva08" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <div className="h-4 w-px bg-neutral-800 mx-2"></div>
            <button 
              onClick={() => setActiveTab('contact')}
              className="text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors">
              Partner with me
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 min-h-[70vh]">
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} onOpenMore={() => setShowMore(true)} />}
        {activeTab === 'projects' && <ProjectsView setSelectedProject={setSelectedProject} />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      <footer className="border-t border-neutral-900 bg-neutral-950 pt-16 pb-8 text-left">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <img src="/images/drawn.png" alt="icon" className="w-5 h-5 rounded-full border border-accent shadow-sm" /> 
              Kiluva James
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Believing that the future is Data Science, Tech and AI, a better tomorrow can be created by even the most marginalized brains when empowered with quality knowledge, access to resources and equal opportunities.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/itskite_luva" target="_blank" rel="noreferrer" className="p-2 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"><Instagram size={18} /></a>
              <a href="https://twitter.com/@KitenyeK" target="_blank" rel="noreferrer" className="p-2 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"><Twitter size={18} /></a>
              <a href="https://linkedin.com/in/kiteluva08" target="_blank" rel="noreferrer" className="p-2 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"><Linkedin size={18} /></a>
              <a href="https://github.com/kiteluva" target="_blank" rel="noreferrer" className="p-2 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"><Github size={18} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Explore Work</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setActiveTab('projects')} className="text-neutral-400 hover:text-white transition-colors">Data Analysis</button></li>
              <li><button onClick={() => setActiveTab('projects')} className="text-neutral-400 hover:text-white transition-colors">Software Development</button></li>
              <li><button onClick={() => setActiveTab('projects')} className="text-neutral-400 hover:text-white transition-colors">AI & ML Solutions</button></li>
              <li><button onClick={() => setActiveTab('contact')} className="text-neutral-400 hover:text-white transition-colors">Partnerships</button></li>
            </ul>
            <div className="kadsa-maker-card" aria-label="Website made by KADSA">
              <div className="kadsa-maker-accent" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
              <div className="kadsa-maker-mark" aria-hidden="true">
                  <span className="text-neutral-400 hover:text-white transition-colors">a-</span>
                  <span className="kadsa-k">K</span><span className="kadsa-a">A</span><span className="kadsa-d">D</span><span className="kadsa-s">S</span><span className="kadsa-a2">A</span>
                  <span className="text-neutral-400 hover:text-white transition-colors">-make!</span>
                </div>
                <a className="kadsa-maker-link" href="https://the-website-chi.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="KADSA made website">
                  <img src="images/icon2.png" alt="KADSA Logo" />
                </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Direct Reach</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li>
                <a href="mailto:kitennykiluva@gmail.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group">
                  <Mail size={16} className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <span>kitennykiluva@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/kiteluva08" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group">
                  <Linkedin size={16} className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <span>James Kiluva</span>
                </a>
              </li>
              <li>
                <a href="tel:+254115939757" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group">
                  <Phone size={16} className="text-purple-500 group-hover:scale-110 transition-transform" />
                  <span>+254 115 939 757</span>
                </a>
              </li>
            </ul>

            {/* Creative Box for Statement */}
            <div className="p-4 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors duration-500"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
              <p className="relative text-xs font-mono text-neutral-400 italic font-semibold tracking-tight">
                "My soul magnifies the Lord, and my spirit rejoices in God my Savior."
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-neutral-600 text-[10px] uppercase tracking-widest">
            <p>© {new Date().getFullYear()} KITELUVA. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {showMore && <MoreModal onClose={() => setShowMore(false)} />}
    </div>
  );
};

export default App;
