import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, Instagram, Twitter,
  BrainCircuit, Code2, 
  UserCircle2, ChevronRight, Send, X, 
  Globe, Award,
  CircuitBoard,
  MapPin, Sun,
  GraduationCap,
  LineChart
} from 'lucide-react';

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
        onError={(e: any) => { e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"; }}
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

const HomeView: React.FC<{ setActiveTab: (id: string) => void }> = ({ setActiveTab }) => (
  <div className="space-y-24 animate-in fade-in duration-700 text-left">
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
          Nairobi Based • Remote Global
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Intelligence</span> Thro' Data.
        </h2>
        <p className="text-neutral-400 text-lg mb-8 max-w-lg">
          I'm a -THINKER-, Problem-Solver, Mentor, Data Scientist and a Full-Stack Web Developer. I excel at spoting gaps and fomulating ways to bridge them.
        </p>
        <p className="text-neutral-500 text-lg mb-8 max-w-lg"> 
          I am passionate about leveraging data to drive informed decision-making and crafting seamless web experiences that empower users. With a strong foundation in both data science and web development, I thrive on creating innovative solutions that make a real impact.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setActiveTab('projects')}
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all flex items-center gap-2">
            Projects <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3 border border-neutral-700 font-bold rounded-full hover:bg-neutral-900 transition-all">
            Inquiry
          </button>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full group-hover:bg-purple-600/30 transition-all duration-700"></div>
        <ProjectCardImage text="Profile & Identity" imageSrc="/images/profile.jpg" height="h-[500px]" />
      </div>
    </section>

    <section className="py-12">
      <div className="flex flex-col border-l-4 border-purple-500 pl-6 text-left mb-16">
        <h3 className="text-3xl font-bold mb-4">Professional Expertise</h3>
        <p className="text-neutral-500 md:ml-6 md:mt-2">
          Providing <strong>high-impact solutions</strong> for technical challenges
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: <BrainCircuit className="text-purple-400" />, 
            title: "Data Science", 
            desc: "Proficient in data cleaning, exploration, and modeling to uncover trends and build predictive forecasting dashboards to drive business insights.",
            skills: ["Python", "R", "SQL", "Pandas", "tidyverse", "Scikit-learn", "Stats-models", "TensorFlow", "PyTorch", "Data Storytelling"]
          },
          {
            icon: <LineChart className="text-blue-400" />,
            title: "Statistical Testing & Modelling",
            desc: "Expertise in hypothesis testing, regression, and survival analysis for data-driven decision making.",
            skills: ["Hypothesis Testing", "Regression Analysis", "Time Series Analysis", "Survival Analysis", "R", "Python", "Data Storytelling"]
          },
          { 
            icon: <Award className="text-yellow-400" />, 
            title: "Data Visualization", 
            desc: "Creating interactive dashboards and reports for actionable insights.",
            skills: ["Power BI", "Tableau", "D3.js", "Matplotlib", "Seaborn", "Plotly", "Data Storytelling", "ggplot2", "Shinny"]
          },
          { 
            icon: <Globe className="text-blue-400" />, 
            title: "Web Development", 
            desc: "Building responsive, high-performance web applications with modern frameworks.",
            skills: ["React", "Next.js", "Tailwind", "Node.js", "TypeScript", "Full-Stack Development", "PWA", "Performance Optimization"]
          },
          { 
            icon: <CircuitBoard className="text-purple-400" />, 
            title: "Machine Learning", 
            desc: "Crafting custom recommendation engines and automated procedures.",
            skills: ["Scikit-learn", "Stats-models", "TensorFlow", "PyTorch", "XGBoost", "Ptredictive Modelling", "Time series", "Survival Analysis", "Custom Model Training"]
          },
          { 
            icon: <BrainCircuit className="text-pink-400" />, 
            title: "Generative AI", 
            desc: "Developing AI models for content generation and automation.",
            skills: ["OpenAI", "Agents", "Chatbots", "Gemini", "GPT", "Custom Model Training", "Prompt Engineering"]
          },
          {
            icon: <Code2 className="text-green-400" />,
            title: "Automation & Scripting",
            desc: "Streamlining workflows and automating data processes for efficiency.",
            skills: ["Python", "Bash", "PowerShell", "Shell Scripting", "Task Automation"]
          },
          {
            icon: <UserCircle2 className="text-emerald-400" />,
            title: "Mentorship & Training",
            desc: "Guiding and empowering others in their technical journey and career development.",
            skills: ["Mentorship", "Technical Training", "Career Guidance", "Workshops", "One-on-One Coaching"]
          },
          {
            icon: <Globe className="text-blue-400" />,
            title: "Global Collaboration",
            desc: "Experience working with international teams and clients across different time zones.",
            skills: ["Remote Work", "Cross-Cultural Communication", "Global Team Collaboration", "Virtual Meetings", "Project Management Tools"]
          }
        ].map((s, i) => (
          <div key={i} className="flex flex-col p-8 bg-neutral-900/40 border border-neutral-800 rounded-2xl hover:border-purple-500/50 hover:bg-neutral-900/60 transition-all group">
            <div className="mb-6 p-3 bg-neutral-800 w-fit rounded-xl group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
        
            <h4 className="text-xl font-bold mb-3">{s.title}</h4>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
              {s.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {s.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full group-hover:border-purple-500/40 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Expanded About Section */}
    <section className="bg-neutral-900/20 rounded-3xl p-8 md:p-12 border border-neutral-800/50">
      <div className="flex flex-col md:flex-row gap-12 items-start text-left">
        <div className="w-full md:w-1/3 sticky top-24 space-y-6">
          <ProjectCardImage text="Creative" imageSrc="/images/about.jpg" height="h-72" />
          <div className="p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800">
             <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-4 flex items-center gap-2">
                <MapPin size={14} /> From Taveta to Tech
             </h4>
             <p className="text-neutral-500 text-xs leading-relaxed">
                Born to peasant farmers on the edge of Kenya, my journey began in the shambas and charcoal kilns of the countryside.
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
                If Not for my sake Oh God, Then for the 19 other children in marginalized communities who won't get the chance to step out. Use me Holy Father, I am here to make sure that "success" isn't just personal—it's communal.
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
              In a community where only 1 in 20 children get the opportunity to step out, I’ve made it my mission to ensure that "success" isn't just personal—it's communal. I am driven to build the foundations and provide the resources that marginalized young minds need to venture into the tech world.
            </p>
            <p>
              This vision led to the founding of :
              <a href="https://the-website-chi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5">
                <img src="/images/icon2.png" alt="icon" className="w-10 h-10 inline-block" /> 
                <strong>KADSA</strong> 
              </a> 
              —a company dedicated to pushing the boundaries of Data, Tech, and AI. Through the KADSA Academy and our innovation pool, we provide quality knowledge to feed the ideas of innovators who, like me, come from backgrounds where amenities are scarce but potential is infinite.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-3">
            <p>Acquired & Sharpened skills:</p>
            {['Critical Thinking', 'Leadership', 'Strategy', 'Creativity', 'Team Work', 'Curiosity', 'Adaptability', 'Communication', 'Determination', 'Problem Solving', 'Collaboration'].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-neutral-800/50 rounded-lg text-xs font-semibold text-neutral-300 border border-neutral-700/50">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ProjectsView: React.FC<{ setSelectedProject: (p: Project) => void }> = ({ setSelectedProject }) => {
  const [filter, setFilter] = useState('all');

  const projectData: Project[] = [
    { 
      title: "KADA; KADSA's Automated Data Analyzer", 
      category: "data", 
      origin: "KADSA",
      imageUrl: "/images/kada.png",
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
      desc: "Interactive Power BI dashboard-system for monitoring sales and Return on investiment (ROI).", 
      longDesc: "Created during academic tenure to simulate real-world data warehousing and visualization environments.",
      tags: ["SQL", "Power Bi", "Excel", "R", "Data Storytelling"],
      github: "https://github.com/FUTURE_DS_01"
    },
    { 
      title: "Facebook Ads Performance", 
      category: "data", 
      origin: "Future Interns",
      imageUrl: "/images/POWER BI 02.png",
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
      desc: "Predictive model of spotify's songs' populaarity.", 
      longDesc: "Identifies key features that contribute to a song going viral using advanced regression and classification techniques. It relates song popularity to its audio features.",
      tags: ["Scikit-Learn", "Regression", "Classification", "Math", "R", "Random Forest","Gradient Boosting", "XGBoost"],
      github: "https://github.com/kiteluva/popularity_regression_and_classification_analysis"
    },
    { 
      title: "KADA; KADSA's Automated Data Analyzer", 
      category: "tech", 
      origin: "KADSA",
      imageUrl: "/images/kada.png",
      desc: "A state ot the art modern PWA, Web based and intergratable across devices.", 
      longDesc: "Designed as a Progressive Web application (PWA) so it can serve even those who do not have access to a traditional desktops, simplified for compatibility even with smartphones, To ease access and use for even those with limited resources.",
      tags: ["JavaScript", "HTML", "CSS", "Data Analysis", "ReactJS", "PWA", "Generative AI", "Chatbot"],
      github: "https://github.com/kiteluva/CSV_XLS_DATA_ANALYZER",
      live: "https://csv-xls-data-analyzer.vercel.app/"
    },
    { 
      title: "KADSA Tech Solutions", 
      category: "tech", 
      origin: "Professional",
      imageUrl: "/images/kadsa.png",
      desc: "Full-scale corporate website for a tech consulting firm.", 
      longDesc: "Includes dynamic service listings, client intake forms, and an optimized performance architecture. With portal and role based database to allow users acces services with respective restrictions. Equiped with an innovation hub and an academy for study materials.",
      tags: ["Tailwind", "JS", "Design", "CSS", "HTML", "React", "PWA", "Chatbot"],
      github: "https://kiteluva.github.io/KADSA/",
      live: "https://the-website-chi.vercel.app/"
    },
    { 
      title: "Ibacho Technical Training College", 
      category: "tech", 
      origin: "Professional",
      imageUrl: "/images/ibacho.png",
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
      imageUrl: "/images/bserve.png",
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
      imageUrl: "/images/cliniq.png",
      desc: "A Company website for a start up health tech company.", 
      longDesc: "This website is Built to exclussively advertise a software the start up developed. It is equiped with a responsive design, great feel even on mobile and modals for deeper contents. Themes, as per the clients tastes.",
      tags: ["Tailwind", "JS", "Design", "CSS", "HTML", "React"],
      github: "https://kiteluva.github.io/clini-q/",
      live: "https://clini-q-sigma.vercel.app/"
    }, 
    { 
      title: "Kiluvaz Portfolio", 
      category: "tech", 
      origin: "Personal",
      imageUrl: "/images/portfolio.png",
      desc: "My own personal portfolio to showcase my work.", 
      longDesc: "This portfolio highlights my skills, projects, and professional journey in data science and web development. It features a sleek design, easy navigation, and responsive layout.",
      tags: ["Tailwind", "JS", "Design", "CSS", "Typescript", "React"],
      github: "https://kiteluva.github.io/kitewebsite/",
      live: "https://kitewebsite-nine.vercel.app/"
    },
    { 
      title: "CPC, Catholic Prayer Companion", 
      category: "ai", 
      origin: "Faith",
      imageUrl: "/images/cpc.png",
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
      imageUrl: "/images/r-shinny.png",
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
      imageUrl: "/images/kada.png",
      desc: "Automated tool for extraction and analysis Data.", 
      longDesc: "Designed and integrated with a generative AI, with a chatbot interphase to help Non-technical users communicate with the AI model, Interprete their findings and give simplified actionable insights from the data being worked on. Most users don't have the technical expertise to operate complicted systems, with KADA; Your firm gets a chance to act on your own Data even with less technical personel.",
      tags: ["Generative AI", "Chatbot" , "Python", "Gemini", "Data Science", "Data Automation", "Data Analysis", "FastAPI", "React"],
      github: "https://github.com/kiteluva/CSV_XLS_DATA_ANALYZER",
      live: "https://csv-xls-data-analyzer.vercel.app/"
    }
    
  ];

  const filteredProjects = filter === 'all' ? projectData : projectData.filter(p => p.category === filter);

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 text-left">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-l-4 border-purple-500 pl-6">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Data, Tech & AI Portfolio</h2>
          <p className="text-neutral-500">These are some of my projects. Diverse across my expertise, separated into technical domains for clear evaluation.</p>
        </div>
        <div className="flex gap-2 p-1 bg-neutral-900 rounded-lg border border-neutral-800">
          {['all', 'data', 'tech', 'ai'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${
                filter === f ? 'bg-white text-black' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedProject(p)}
            className="group cursor-pointer border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all bg-neutral-900/20"
          >
            <ProjectCardImage text={p.title} imageSrc={p.imageUrl} />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                  p.category === 'ai' ? 'text-purple-400 bg-purple-400/10' :
                  p.category === 'data' ? 'text-blue-400 bg-blue-400/10' :
                  'text-emerald-400 bg-emerald-400/10'
                }`}>
                  {p.category}
                </span>
                <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest">{p.origin}</span>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{p.title}</h4>
              <p className="text-neutral-400 text-sm mb-6 line-clamp-2">{p.desc}</p>
              <div className="flex items-center text-xs font-bold text-neutral-500 gap-1 uppercase tracking-tighter">
                Click to expand <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactView: React.FC = () => (
  <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 text-left">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold mb-6">Start a Conversation</h2>
      <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
        I am actively seeking opportunities with forward-thinking tech teams, Researchers and problem solving Thinkers. Whether you have a specific role or just want to discuss data trends, Tech advancements or AI impacts and its positive Importance in today's First moving world, I'm ready!
      </p>
    </div>
    <div className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-2xl flex items-center gap-4 mb-12 justify-center">
      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        <span className="text-sm font-semibold">For mentorship, Anything concerning Data Science, Machine Learning, AI or General Technological advancements, Reach out. I am always looking to share, guide and exchange ideas.</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
      <div className="md:col-span-2 space-y-6">
        <div className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
          <h4 className="font-bold mb-6 text-purple-400 uppercase tracking-widest text-xs">Work Status</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold">Available for Hire</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Seeking: Data Analyst, Data Scientist, ML Engineer, Full-Stack Developer roles or a blend of Data and Software Engineering, especially Automation of Data Analytics.
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
              <option value="Full-time Employment">Full-time Employment</option>
              <option value="Contract Development">Contract Development</option>
              <option value="Data Consultation">Data Consultation</option>
              <option value="Educational Inquiry">Educational Inquiry</option>
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
              placeholder="How can I help your business?"
            ></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-purple-600 rounded-xl font-bold text-white shadow-xl shadow-purple-900/20 hover:bg-purple-500 transition-all flex items-center justify-center gap-2">
            Dispatch Inquiry <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

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
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center overflow-hidden shadow-lg shadow-purple-500/20">
               <img 
                src="/images/kiluva.png" 
                alt="Profile" 
                className="w-full h-full object-cover" 
                onError={(e: any) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"; }}
               />   
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">KILUVA JAMES</h1>
              <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em]">Mentor | Data Scientist | Full Stack Developer</p>
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
              Hire Me
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 min-h-[70vh]">
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
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
              <li><button onClick={() => setActiveTab('home')} className="text-neutral-400 hover:text-white transition-colors">About Me</button></li>
              <li><button onClick={() => setActiveTab('projects')} className="text-neutral-400 hover:text-white transition-colors">Data Analysis</button></li>
              <li><button onClick={() => setActiveTab('projects')} className="text-neutral-400 hover:text-white transition-colors">Tech Development</button></li>
              <li><button onClick={() => setActiveTab('projects')} className="text-neutral-400 hover:text-white transition-colors">AI & ML Solutions</button></li>
              <li><button onClick={() => setActiveTab('contact')} className="text-neutral-400 hover:text-white transition-colors">Hire Me</button></li>
            </ul>
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
                "there aint many dollar bills like me"
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-neutral-600 text-[10px] uppercase tracking-widest">
            <p>© {new Date().getFullYear()} KITELUVA. ALL RIGHTS RESERVED.</p>
            <a href="https://the-website-chi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-italic font-light hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5">
              <img src="/images/icon2.png" alt="icon" className="w-4 h-4 inline-block" /> 
                ~a -<strong>KADSA</strong>- make~
            </a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-neutral-950 border border-neutral-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all z-10"
            >
              <X size={24} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 text-left">
              <div className="h-64 md:h-auto bg-neutral-900 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-800">
                <ProjectCardImage text={selectedProject.title} imageSrc={selectedProject.imageUrl} height="h-full" />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    selectedProject.category.toLowerCase().includes('ai') ? 'bg-purple-500/10 text-purple-400' :
                    selectedProject.category.toLowerCase().includes('data') ? 'bg-blue-500/10 text-blue-400' :
                    'bg-emerald-500/10 text-emerald-400'
                  }`}>
                    {selectedProject.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1">
                    <Award size={12} /> {selectedProject.origin}
                  </span>
                </div>
                
                <h3 className="text-3xl font-extrabold mb-6 leading-tight">{selectedProject.title}</h3>
                
                <div className="space-y-6 text-neutral-300 text-sm leading-relaxed mb-8">
                  <p>{selectedProject.desc}</p>
                  {selectedProject.longDesc && (
                    <div className="pt-4 border-t border-neutral-900">
                      <h5 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest opacity-50">Impact & Implementation</h5>
                      <p>{selectedProject.longDesc}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-neutral-400 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-white text-black text-center font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all">
                      <Github size={18} /> Source Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex-1 py-3 border border-neutral-700 text-white text-center font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-900 transition-all">
                      <Globe size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;