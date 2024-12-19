'use client';
import React, { useState, useEffect } from 'react';
import {
  Briefcase, Code, Server, Database, Layout,
  LineChart, Settings, Sun, Moon,
  Globe, Terminal, Cloud, Brain, Mail, Github, Linkedin
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import WordPressMigrationDemo from '@/components/WordPressMigrationDemo';
import InteractiveDemos from '@/components/InteractiveDemos';
import CodeDemoSection from '@/components/CodeDemoSection';

const DemoSection = ({ title, icon: Icon, description, children }) => (
  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 dark:text-white">
        <Icon className="h-6 w-6" />
        {title}
      </CardTitle>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const PortfolioPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const experiences = [
    {
      title: "Software Developer",
      company: "BMG360",
      current: true,
      type: "ui-components",
      achievements: [
        "Developed TypeScript/React UI component library used to create high-converting landing pages",
        "Built full-stack Python/PHP analytics dashboards for campaign ad data serving major brands",
        "Created landing pages using custom component library",
        "Managed WordPress sites for select clients"
      ]
    },
    {
      title: "AI Solutions Developer",
      company: "Black Flag Design & NCEE",
      type: "ai-integration",
      achievements: [
        "Created a robust teacher team facilitation tool for online and same room/same device meetings with real time graphic recorder, summary analysis, and real time concept map (all from the meeting)",
        "Leveraged React, Express, Langchain, Langsmith, and getstream.io for innovative education tools"
      ]
    },
    {
      title: "WordPress Migration Consultant",
      company: "Offsec previously known as Offensive Security",
      type: "wordpress",
      achievements: [
        "Led major website architecture migration from WordPress monolith to headless WordPress",
        "Built new frontend using Astro and Svelte",
        "Developed automated migration tools",
        "Implemented technical optimizations to improve site performance"
      ]
    },
    {
      title: "Freelance Developer",
      company: "Upwork",
      type: "freelance",
      achievements: [
        "Maintained 100% Job Success Score while serving approximately 100 clients",
        "Delivered diverse range of frontend and backend development solutions",
        "Successfully completed projects across various technologies and frameworks"
      ]
    },
    {
      title: "Mentor",
      company: "OpenClassrooms",
      type: "mentoring",
      achievements: [
        "Mentored students in web development, providing practical examples and resources to accelerate learning",
        "Supported students in securing industry positions upon completing their programs",
        "1.5 years of dedicated mentoring experience"
      ]
    }
  ];

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'code', label: 'Code Examples', icon: Code },
    { id: 'demos', label: 'Technical Demos', icon: Server },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with Dark Mode Toggle */}
      <header className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold dark:text-white">Bobby Nicholson</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300">Technical Portfolio</h2>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="h-6 w-6 text-white" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="max-w-4xl mx-auto mb-8">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {navigationTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors
                ${activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-8">
        {activeTab === 'overview' && (
          <>
            {experiences.map((exp, index) => (
              <DemoSection
                key={index}
                title={`${exp.title} at ${exp.company}`}
                icon={Briefcase}
              >
                <div className="space-y-6">
                  {/* Experience achievements */}
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Relevant demo based on experience type */}
                  {/* {exp.type === 'ui-components' && <ComponentDemo />}
                  {exp.type === 'ai-integration' && <AIDemo />} */}
                  {/* {exp.type === 'wordpress' && <WordPressMigrationDemo />} */}
                </div>
              </DemoSection>
            ))}
          </>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6">
            <DemoSection
              title="Frontend Development"
              icon={Globe}
              description="Modern web development technologies and frameworks"
            >
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700 dark:text-gray-300">React, Next.js, and TypeScript expertise with focus on performance optimization</li>
                <li className="text-gray-700 dark:text-gray-300">Component library development using modern design patterns</li>
                <li className="text-gray-700 dark:text-gray-300">Responsive design and accessibility implementation</li>
                <li className="text-gray-700 dark:text-gray-300">State management with Redux, Context API, and Zustand</li>
              </ul>
            </DemoSection>

            <DemoSection
              title="Backend Development"
              icon={Terminal}
              description="Server-side technologies and API development"
            >
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700 dark:text-gray-300">Node.js and Express.js API development</li>
                <li className="text-gray-700 dark:text-gray-300">Python backend services with FastAPI and Django</li>
                <li className="text-gray-700 dark:text-gray-300">Database design and optimization (SQL and NoSQL)</li>
                <li className="text-gray-700 dark:text-gray-300">RESTful API and GraphQL implementation</li>
              </ul>
            </DemoSection>

            <DemoSection
              title="Cloud & DevOps"
              icon={Cloud}
              description="Cloud infrastructure and deployment expertise"
            >
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700 dark:text-gray-300">AWS and Digital Ocean cloud infrastructure management</li>
                <li className="text-gray-700 dark:text-gray-300">Docker containerization and Kubernetes orchestration</li>
                <li className="text-gray-700 dark:text-gray-300">CI/CD pipeline implementation with GitHub Actions</li>
                <li className="text-gray-700 dark:text-gray-300">Infrastructure as Code using Terraform</li>
              </ul>
            </DemoSection>

            <DemoSection
              title="AI Integration"
              icon={Brain}
              description="AI and ML implementation experience"
            >
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700 dark:text-gray-300">LangChain and LangSmith implementation for AI applications</li>
                <li className="text-gray-700 dark:text-gray-300">OpenAI API integration and prompt engineering</li>
                <li className="text-gray-700 dark:text-gray-300">Vector database implementation for AI applications</li>
                <li className="text-gray-700 dark:text-gray-300">Real-time AI processing and streaming responses</li>
              </ul>
            </DemoSection>
          </div>
        )}

        {activeTab === 'code' && (
          <DemoSection
            title="Code Examples"
            icon={Code}
            description="Interactive code examples with live previews"
          >
            <CodeDemoSection />
          </DemoSection>
        )}

        {activeTab === 'demos' && (
          <DemoSection
            title="Technical Demonstrations"
            icon={Server}
            description="Interactive technical demos showcasing various capabilities"
          >
            <InteractiveDemos />
          </DemoSection>
        )}

        {activeTab === 'performance' && (
          <DemoSection
            title="Performance Metrics"
            icon={LineChart}
            description="Real-time performance monitoring and analytics"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add your PerformanceMetrics components here */}
            </div>
          </DemoSection>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 pb-8">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Let's Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:bobbynicholson78704@gmail.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>bobbynicholson78704@gmail.com</span>
            </a>
            <a
              href="https://github.com/SelfTaughtCoder78704"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bobby-n-760b16155/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;