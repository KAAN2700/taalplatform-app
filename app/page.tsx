"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Headphones, MessageCircle, Sparkles, Twitter } from "lucide-react"; // Added Twitter for footer example

// Removed Shadcn UI component imports

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const exercises = [
    {
      name: "Woordenschat",
      description: "Leer nieuwe woorden en uitdrukkingen",
      icon: "📚",
      // Using Tailwind gradients directly as DaisyUI doesn't have specific gradient component classes
      color: "from-primary/20 to-secondary/20",
    },
    {
      name: "Grammatica",
      description: "Verbeter je grammaticale vaardigheden",
      icon: "📝",
      color: "from-secondary/20 to-accent/20",
    },
    {
      name: "Luistervaardigheid",
      description: "Oefen met het verstaan van gesproken Nederlands",
      icon: "🎧",
      color: "from-accent/20 to-warning/20", // Assuming 'warning' is defined in your DaisyUI theme
    },
    {
      name: "Spreekvaardigheid",
      description: "Verbeter je uitspraak en vloeiendheid",
      icon: "🗣️",
      color: "from-info/20 to-primary/20", // Assuming 'info' is defined in your DaisyUI theme
    },
  ];

  // --- REMEMBER TO REPLACE placeholder.svg URLs ---

  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-base-content">
      {/* Header using DaisyUI Navbar structure (optional, but common) */}
      <header className="sticky top-0 z-40 w-full border-b border-base-200 bg-base-100/80 backdrop-blur-sm">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            {/* Optional: Dropdown for mobile */}
             <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="#">Functies</Link></li>
                <li><Link href="#">Cursussen</Link></li>
                <li><Link href="#">Prijzen</Link></li>
                <li><Link href="#">Community</Link></li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl flex items-center gap-2" href="/">
              <div className="avatar placeholder">
                 <div className="bg-primary text-primary-content rounded-full w-8">
                  <Globe className="h-5 w-5" />
                 </div>
              </div>
              <span className="font-bold">NederlandsLeren</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Functies</Link></li>
                <li><Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Cursussen</Link></li>
                <li><Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Prijzen</Link></li>
                <li><Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <Link href="#" className="btn btn-ghost btn-sm hidden sm:inline-flex">
              Inloggen
            </Link>
            <Link href="#" className="btn btn-primary btn-sm">
              Aan de slag
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-base-100 to-base-200 py-20 md:py-32">
          {/* You might need to adjust the placeholder or use a DaisyUI specific background pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5"></div>
          <div className="container relative mx-auto px-4">
            <motion.div
              className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="flex flex-col gap-6">
                {/* Removed empty div */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="block">Leer Nederlands</span>
                  <span className="block mt-1 text-primary">op een natuurlijke manier</span>
                </h1>
                <p className="max-w-[600px] text-lg text-base-content/80">
                  Immersieve leerervaringen die zich aanpassen aan jouw stijl. Beheers de Nederlandse taal door
                  conversatie, niet door memorisatie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link href="#" className="btn btn-primary btn-lg">
                    Begin gratis met leren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="#" className="btn btn-outline btn-lg">
                    Ontdek meer
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  {/* DaisyUI Avatar Group */}
                  <div className="avatar-group -space-x-3">
                     {[1, 2, 3, 4].map((i) => (
                       <div key={i} className="avatar border-2 border-base-100">
                         <div className="w-8">
                           {/* Replace with actual image or keep placeholder */}
                           <Image src={`/placeholder.svg?height=32&width=32&text=${i}`} width={32} height={32} alt={`User ${i}`} />
                         </div>
                       </div>
                     ))}
                      {/* Optional: Add a placeholder for count */}
                     {/* <div className="avatar placeholder">
                       <div className="w-8 bg-neutral-focus text-neutral-content">
                         <span>+</span>
                       </div>
                     </div> */}
                  </div>
                  <span className="text-sm font-medium">5000+ actieve studenten</span>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="relative lg:ml-auto"
              >
                <div className="relative">
                   {/* Floating icons */}
                   <motion.div
                    className="absolute -top-6 -left-6 z-10 rounded-lg bg-secondary p-3 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                  >
                    <Sparkles className="h-6 w-6 text-secondary-content" /> {/* Use content color */}
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-6 -right-6 z-10 rounded-lg bg-accent p-3 shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-accent-content" /> {/* Use content color */}
                  </motion.div>
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-2xl border-8 border-base-100 shadow-2xl">
                    <Image
                      // Remember to replace placeholder
                      src="/placeholder.svg?height=600&width=600&text=Nederlands+Leren"
                      alt="Nederlands Leren App"
                      width={600}
                      height={600}
                      className="w-full h-auto block" // 'block' helps remove extra space below image
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating shapes - Using Tailwind classes */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Exercise Cards */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Oefeningen</h2>
              <p className="text-base-content/70 max-w-2xl mx-auto">
                Verbeter je Nederlands met verschillende soorten interactieve oefeningen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exercises.map((exercise, i) => (
                <motion.div
                  key={exercise.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card bg-base-200 hover:shadow-lg transition-all group" // Card container
                >
                  {/* Figure for the icon part */}
                   <figure className={`relative h-40 bg-gradient-to-r ${exercise.color} overflow-hidden`}>
                     <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-80 group-hover:opacity-100 transition-opacity">
                      {exercise.icon}
                    </div>
                    {/* Optional overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent"></div> */}
                  </figure>
                   {/* Card Body */}
                  <div className="card-body p-6 items-center text-center"> {/* Use card-body for padding */}
                    <h3 className="card-title text-xl font-bold mb-1">{exercise.name}</h3>
                    <p className="text-sm text-base-content/70 mb-4">{exercise.description}</p>
                    <div className="card-actions justify-center w-full mt-4">
                       <button className="btn btn-primary w-full group-hover:translate-y-0 translate-y-1 transition-transform">
                         Begin met oefenen
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              {/* DaisyUI Badge */}
              <div className="badge badge-secondary mb-4">Functies</div>
              <h2 className="text-3xl font-bold mb-4">Hoe je leert</h2>
              <p className="text-base-content/70 max-w-2xl mx-auto">
                Onze unieke aanpak combineert de nieuwste taalleermethoden met boeiende, interactieve ervaringen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Item 1 */}
              <motion.div
                className="flex flex-col items-center text-center p-6 rounded-xl bg-base-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Icon Background */}
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Immersieve Audio</h3>
                <p className="text-base-content/70">
                  Train je oor met moedertaalsprekers en perfectioneer je uitspraak met onze AI-spraakherkenning
                </p>
              </motion.div>

              {/* Feature Item 2 */}
              <motion.div
                className="flex flex-col items-center text-center p-6 rounded-xl bg-base-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                 <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gespreksoefeningen</h3>
                <p className="text-base-content/70">
                  Oefen echte gesprekken met onze AI-tutors die zich aanpassen aan jouw niveau
                </p>
              </motion.div>

              {/* Feature Item 3 */}
              <motion.div
                className="flex flex-col items-center text-center p-6 rounded-xl bg-base-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                 <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Culturele Context</h3>
                <p className="text-base-content/70">
                  Leer niet alleen de taal, maar ook de culturele nuances die je als een native laten klinken
                </p>
              </motion.div>
            </div>

             {/* Tab Section */}
            <div className="mt-20">
               {/* Using card for structure and shadow */}
              <div className="card lg:card-side bg-base-100 shadow-lg overflow-hidden">
                 {/* Content side */}
                <div className="card-body p-8 lg:p-12 lg:w-1/2">
                  {/* DaisyUI Tabs (can also use radio buttons for a pure CSS approach) */}
                   <div className="tabs tabs-boxed mb-6">
                    <button
                      onClick={() => setActiveTab(0)}
                      className={`tab tab-lg flex-1 ${activeTab === 0 ? 'tab-active !bg-primary text-primary-content' : ''}`}
                    >
                      Luisteren
                    </button>
                    <button
                      onClick={() => setActiveTab(1)}
                       className={`tab tab-lg flex-1 ${activeTab === 1 ? 'tab-active !bg-primary text-primary-content' : ''}`}
                    >
                      Spreken
                    </button>
                    <button
                      onClick={() => setActiveTab(2)}
                      className={`tab tab-lg flex-1 ${activeTab === 2 ? 'tab-active !bg-primary text-primary-content' : ''}`}
                    >
                      Lezen
                    </button>
                  </div>

                  <div className="space-y-4 min-h-[250px]"> {/* Add min-height to prevent layout shifts */}
                    {/* Tab Content 0 */}
                    {activeTab === 0 && (
                      <motion.div
                        key="tab-0" // Add key for AnimatePresence or simple transition
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold mb-4">Train je oor</h3>
                        <p className="text-base-content/70 mb-4">
                          Onze audio-oefeningen bevatten moedertaalsprekers op verschillende snelheden. Begin langzaam en werk toe naar een natuurlijk gesprekstempo.
                        </p>
                        <ul className="space-y-2">
                           {/* Use text-success or theme appropriate color */}
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Authentieke accenten en dialecten</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Aanpasbare afspeelsnelheden</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Contextuele audioscenario's</span>
                          </li>
                        </ul>
                      </motion.div>
                    )}

                    {/* Tab Content 1 */}
                    {activeTab === 1 && (
                       <motion.div
                        key="tab-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold mb-4">Perfectioneer je uitspraak</h3>
                        <p className="text-base-content/70 mb-4">
                          Onze AI-spraakherkenning geeft directe feedback op je uitspraak, zodat je natuurlijker klinkt.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Realtime uitspraakfeedback</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Gespreksoefeningen met AI-tutors</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Begeleiding bij toon en intonatie</span>
                          </li>
                        </ul>
                      </motion.div>
                    )}

                     {/* Tab Content 2 */}
                    {activeTab === 2 && (
                       <motion.div
                        key="tab-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold mb-4">Verbeter je tekstbegrip</h3>
                        <p className="text-base-content/70 mb-4">
                          Van eenvoudige zinnen tot authentieke teksten, onze leesoefeningen helpen je geschreven Nederlands op een natuurlijke manier te begrijpen.
                        </p>
                         <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Progressieve moeilijkheidsgraden</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Culturele artikelen en verhalen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span>Interactieve woordenschatopbouw</span>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Image Side */}
                <figure className="relative lg:w-1/2 hidden lg:block"> {/* Hide on small screens */}
                   {/* Optional gradient overlay */}
                   {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div> */}
                  <Image
                    // Remember to replace placeholder
                    src="/placeholder.svg?height=600&width=800&text=Nederlands+Leren"
                    alt="Feature demonstratie"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
           <div className="container mx-auto px-4">
             {/* Use Hero component structure or a simple div */}
            <div className="hero rounded-3xl bg-primary text-primary-content overflow-hidden">
              <div className="hero-overlay bg-opacity-60 bg-gradient-to-r from-primary to-primary/80"></div>
              {/* Optional background pattern */}
               <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10 -z-10"></div>

              <div className="hero-content text-center py-16 sm:py-24 lg:py-16 relative">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Klaar om te beginnen met Nederlands leren?
                  </h2>
                  <p className="mt-4 text-lg text-primary-content/90">
                    Sluit je aan bij meer dan 5000 studenten. Begin vandaag gratis.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                     {/* Button styling needs contrast from primary background */}
                    <Link href="#" className="btn btn-lg btn-neutral text-neutral-content hover:bg-neutral-focus"> {/* Or btn-secondary, btn-accent */}
                      Gratis beginnen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link href="#" className="btn btn-lg btn-outline border-primary-content/40 text-primary-content hover:bg-primary-content/10">
                      Bekijk abonnementen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer using DaisyUI Footer component */}
      <footer className="footer p-10 bg-base-200 text-base-content border-t border-base-300">
        <aside>
           <Link className="flex items-center gap-2" href="/">
              <div className="avatar placeholder">
                 <div className="bg-primary text-primary-content rounded-full w-8">
                  <Globe className="h-5 w-5" />
                 </div>
              </div>
            <span className="font-bold text-xl">NederlandsLeren</span>
          </Link>
          <p className="mt-4 text-sm text-base-content/70 max-w-xs">
            Nederlands leren natuurlijk, effectief en plezierig maken door middel van immersieve ervaringen.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Functies</header>
          <a className="link link-hover">Audio Lessen</a>
          <a className="link link-hover">AI Tutor</a>
          <a className="link link-hover">Oefeningen</a>
          <a className="link link-hover">Community</a>
        </nav>
        <nav>
          <header className="footer-title">Bedrijf</header>
          <a className="link link-hover">Over Ons</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Carrières</a>
        </nav>
        <nav>
          <header className="footer-title">Sociaal</header>
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="text-base-content/70 hover:text-primary">
              <span className="sr-only">Twitter</span>
              {/* You can use Lucide icon here */}
              <Twitter className="h-6 w-6" />
              {/* Or keep the SVG */}
              {/* <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> */}
            </a>
            {/* Add other social icons */}
          </div>
        </nav>
      </footer>
    </div>
  );
}