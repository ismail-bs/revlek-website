'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft, MapPin, Clock, Briefcase, Send, ChevronRight,
  Code, Palette, BarChart3, Users, Zap, Globe, GraduationCap, Heart, Coffee, Rocket
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useState } from 'react';

export default function CareersPage() {
  const router = useRouter();
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const openPositions = [
    {
      title: "Full Stack Developer",
      department: "Development",
      type: "Full-time",
      location: "Remote",
      icon: Code,
      description: "We're looking for a skilled Full Stack Developer to build and maintain scalable web applications using modern frameworks and technologies.",
      responsibilities: [
        "Develop and maintain full-stack web applications",
        "Collaborate with designers and product managers to deliver high-quality features",
        "Write clean, maintainable, and well-tested code",
        "Participate in code reviews and technical discussions",
        "Contribute to architecture decisions and technical roadmap"
      ],
      requirements: [
        "2+ years of experience in full-stack development",
        "Proficiency in React/Next.js, Node.js, and TypeScript",
        "Experience with databases (MongoDB, PostgreSQL)",
        "Understanding of RESTful APIs and microservices",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      title: "Backend Developer",
      department: "Development",
      type: "Full-time",
      location: "Remote",
      icon: Code,
      description: "We are looking for a Backend Developer who is passionate about building robust, scalable server-side systems and APIs.",
      responsibilities: [
        "Design and implement highly scalable and reliable backend services",
        "Optimize application performance and ensure system stability",
        "Integrate third-party services and APIs",
        "Work on database design, optimization, and management",
        "Collaborate with frontend developers for seamless API integration"
      ],
      requirements: [
        "2+ years of professional backend development experience",
        "Expertise in Node.js, NestJS, or similar backend frameworks",
        "Strong understanding of database systems (SQL and NoSQL)",
        "Proficiency in designing and implementing RESTful and GraphQL APIs",
        "Experience with cloud services (AWS, Google Cloud) and DevOps practices"
      ]
    },
    {
      title: "UI/UX Designer",
      department: "UI / UX",
      type: "Full-time",
      location: "Remote",
      icon: Palette,
      description: "Join our design team to craft intuitive and visually stunning user experiences for web and mobile applications.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate closely with developers to ensure design integrity",
        "Maintain and evolve design systems",
        "Present design solutions to stakeholders"
      ],
      requirements: [
        "2+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe XD, or similar tools",
        "Strong portfolio showcasing web and mobile design work",
        "Understanding of design systems and component libraries",
        "Excellent visual design and typography skills"
      ]
    },
    {
      title: "Sales & Marketing Executive",
      department: "Sales & Marketing",
      type: "Full-time",
      location: "Remote",
      icon: BarChart3,
      description: "Drive growth and expand REVLEK's market presence through strategic sales initiatives and digital marketing campaigns.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Develop and execute marketing strategies across digital channels",
        "Build and maintain client relationships",
        "Create compelling proposals and presentations",
        "Track and report on sales and marketing metrics"
      ],
      requirements: [
        "1+ years of experience in sales, marketing, or business development",
        "Strong communication and negotiation skills",
        "Experience with CRM tools and digital marketing platforms",
        "Understanding of the IT services industry is a plus",
        "Self-motivated with a results-driven mindset"
      ]
    }
  ];

  const perks = [
    { icon: Globe, title: "Remote First", description: "Work from anywhere in the world" },
    { icon: GraduationCap, title: "Learning Budget", description: "Annual budget for courses & conferences" },
    { icon: Zap, title: "Flexible Hours", description: "Work when you're most productive" },
    { icon: Heart, title: "Health & Wellness", description: "We care about your well-being" },
    { icon: Coffee, title: "Team Culture", description: "Regular virtual hangouts & team events" },
    { icon: Rocket, title: "Growth Path", description: "Clear career progression framework" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>Careers at REVLEK - Join Our Team</title>
        <meta name="description" content="Explore career opportunities at REVLEK. Join a team of passionate developers, designers, and innovators building world-class software solutions." />
        <meta property="og:title" content="Careers at REVLEK - Join Our Team" />
        <meta property="og:description" content="Explore career opportunities at REVLEK. Join a team of passionate developers, designers, and innovators." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://revlek.com/careers" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* Back to Home Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.button
            onClick={() => router.push('/')}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </motion.button>
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-700/10 to-blue-800/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full border border-blue-600/30 mb-6">
                  We&apos;re Hiring
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Build the Future<br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    With Us
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Join a team of passionate engineers, designers, and innovators who are shaping the future of technology.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Open Circular Banner */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-cyan-600/20 border border-blue-500/30 p-8 md:p-12"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Open Circular</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Don&apos;t See Your Role? Apply Anyway!
                  </h2>
                  <p className="text-slate-300 max-w-2xl text-lg">
                    We&apos;re always on the lookout for exceptional talent. If you believe you can add value to our team,
                    we&apos;d love to hear from you — send us your CV and a brief introduction.
                  </p>
                </div>
                <motion.a
                  href="mailto:info@revlek.com?subject=Open Application - [Your Name]&body=Hi REVLEK Team,%0D%0A%0D%0AI'm interested in joining your team. Here's a brief introduction about myself:%0D%0A%0D%0AName: %0D%0AExpertise: %0D%0AExperience: %0D%0ALinkedIn: %0D%0A%0D%0AI've attached my CV for your review.%0D%0A%0D%0ABest regards"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className="w-5 h-5" />
                  Send Your CV
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us / Perks */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Join REVLEK?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We offer more than just a job — we offer a place where you can grow, innovate, and make an impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                    <perk.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {perk.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore our current openings and find the role that&apos;s right for you.
              </p>
            </motion.div>

            <div className="space-y-4">
              {openPositions.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/30 rounded-2xl border border-slate-700/30 hover:border-blue-500/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Role Header */}
                  <button
                    onClick={() => setExpandedRole(expandedRole === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-800/20 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <role.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{role.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                            <Briefcase className="w-3.5 h-3.5" /> {role.department}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                            <Clock className="w-3.5 h-3.5" /> {role.type}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                            <MapPin className="w-3.5 h-3.5" /> {role.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedRole === index ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-6 h-6 text-slate-400" />
                    </motion.div>
                  </button>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedRole === index ? 'auto' : 0,
                      opacity: expandedRole === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-slate-700/30 pt-6">
                      <p className="text-slate-300 mb-6">{role.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-400" /> Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {role.responsibilities.map((item, i) => (
                              <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-blue-400" /> Requirements
                          </h4>
                          <ul className="space-y-2">
                            {role.requirements.map((item, i) => (
                              <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <motion.a
                        href={`mailto:info@revlek.com?subject=Application for ${role.title}&body=Hi REVLEK Team,%0D%0A%0D%0AI'm writing to express my interest in the ${role.title} position.%0D%0A%0D%0AName: %0D%0AExperience: %0D%0ALinkedIn: %0D%0A%0D%0AI've attached my CV for your review.%0D%0A%0D%0ABest regards`}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Send className="w-4 h-4" />
                        Apply for this Role
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Hiring Process
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Simple, transparent, and respectful of your time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Apply", description: "Submit your CV along with a short introduction to info@revlek.com." },
                { step: "02", title: "Review", description: "Our team carefully evaluates your profile, experience, and overall fit." },
                { step: "03", title: "Technical Interview I", description: "An initial discussion to assess your core technical knowledge and problem-solving approach." },
                { step: "04", title: "Technical Interview II", description: "A deeper evaluation focusing on practical skills, real-world scenarios, and system thinking." },
                { step: "05", title: "HR Round", description: "A conversation to understand your communication, culture fit, and career expectations." },
                { step: "06", title: "Welcome!", description: "If selected, you'll receive an offer and begin your journey with our team." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="text-5xl font-black text-blue-600/20 mb-3">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 -right-3 w-6 text-slate-600">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Whether you see a role that fits or not, we want to hear from talented people like you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:info@revlek.com?subject=Open Application - [Your Name]&body=Hi REVLEK Team,%0D%0A%0D%0AI'm interested in joining your team. Here's a brief introduction about myself:%0D%0A%0D%0AName: %0D%0AExpertise: %0D%0AExperience: %0D%0ALinkedIn: %0D%0A%0D%0AI've attached my CV for your review.%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className="w-5 h-5" />
                  Apply Now
                </motion.a>
                <motion.button
                  className="border border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-medium hover:bg-slate-800 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => router.push('/team')}
                >
                  Meet the Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}