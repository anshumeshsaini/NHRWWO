import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Phone, Quote, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import womenEmpowerment from "@/assets/women-empowerment.jpg";
import childRights from "@/assets/child-rights.jpg";
import legalAid from "@/assets/legal-aid.jpg";
import homepage from "@/assets/homepage.jpeg";
import presidentImage from "../assets/president.jpeg";
import secretaryImage from "../assets/sectry.jpeg";
import MundrikaImage from "../assets/mishra2.jpg";
import programImage1 from "../assets/homeimg1.jpeg";
import programImage2 from "@/assets/homeimg2.jpeg";
import programImage3 from "@/assets/homeimg3.jpeg";
import programImage4 from "@/assets/homeimg4.jpeg";
import programImage5 from "@/assets/slide5.jpeg";
import programImage6 from "@/assets/slide6.jpeg";
import programImage7 from "@/assets/slide7.jpeg"
import programImage8 from "@/assets/slide8.jpeg"
import programImage9 from "@/assets/slide9.jpeg"  


const Index = () => {
  const [counts, setCounts] = useState({ communities: 0, women: 0, programs: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const heroRef = useRef(null);

  const programImages = [
    programImage1,
    programImage2,
    programImage3,
    programImage4,
    programImage5,
    programImage6,
    programImage7,
    programImage8,
    programImage9
  ];

  // Auto-slide effect for program images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === programImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [programImages.length]);

  const nextImage = () => {
    setCurrentImageIndex(current => 
      current === programImages.length - 1 ? 0 : current + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(current => 
      current === 0 ? programImages.length - 1 : current - 1
    );
  };

  // Counting animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const targets = { communities: 250, women: 50000, programs: 45 };
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        communities: Math.floor((targets.communities / steps) * step),
        women: Math.floor((targets.women / steps) * step),
        programs: Math.floor((targets.programs / steps) * step),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const programs = [
    {
      index: "01",
      title: "Women Empowerment",
      description: "Skill development, entrepreneurship training, and economic independence programs for women.",
      image: womenEmpowerment,
      color: "border-primary",
      tag: "Independence"
    },
    {
      index: "02",
      title: "Child Rights Protection",
      description: "Ensuring safety, education, and a nurturing environment for every child.",
      image: childRights,
      color: "border-secondary",
      tag: "Protection"
    },
    {
      index: "03",
      title: "Legal Aid Services",
      description: "Free legal consultation and support for those facing injustice and rights violations.",
      image: legalAid,
      color: "border-zinc-800",
      tag: "Justice"
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      story: "From domestic abuse survivor to successful entrepreneur, now employing 12 women in her community.",
      impact: "Economic Independence",
      initial: "P",
    },
    {
      name: "Aisha Khan",
      story: "Fought for her daughter's education rights and now runs literacy programs for 200+ girls.",
      impact: "Education Access",
      initial: "A",
    },
    {
      name: "Maria Rodriguez",
      story: "Received legal aid to escape trafficking and now advocates for victims' rights nationwide.",
      impact: "Legal Justice",
      initial: "M",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      
      {/* 1. Hero Section - Premium Asymmetric Editorial Layout */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-24">
        {/* Layered Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-noise pointer-events-none opacity-50 z-0"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
        <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none -z-10 animate-float-slow"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typographic Focus */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Badge/Kicker */}
              <div className="inline-flex items-center space-x-2 border-b border-primary/20 pb-2">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary">
                  ESTD 2015
                </span>
                <span className="text-muted-foreground/45 text-xs">•</span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-500">
                  Advocates for Equality & Dignity
                </span>
              </div>

              {/* Editorial Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-foreground leading-[1.05] text-balance">
                National Human Rights & <br className="hidden md:inline" />
                <span className="relative inline-block text-primary italic font-normal pr-3">
                  Women Welfare Organisation
                  <span className="absolute bottom-1 left-0 w-full h-1.5 bg-primary/10 -rotate-1 -z-10"></span>
                </span> 
              </h1>

              {/* Body Text */}
              <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed max-w-2xl text-balance">
                Dedicated to promoting justice, equality, and safety. We work to prevent domestic violence, crime, and social atrocities by providing active support, awareness, and legal guidance. We protect the rights of the vulnerable and build communities where everyone lives with dignity.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/get-involved">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-white font-bold text-sm uppercase tracking-wider rounded-none px-8 py-7 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(255,0,0,0.25)] hover:-translate-y-0.5">
                    Join Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/emergency">
                  <Button size="lg" variant="outline" className="border-2 border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white font-bold text-sm uppercase tracking-wider rounded-none px-8 py-7 transition-all duration-300">
                    Emergency Help
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Multi-layered Image Composition */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative w-full max-w-[420px] mx-auto">
                
                {/* Floating Big Backdrop Letter "N" */}
                <div className="absolute -top-16 -left-12 pointer-events-none select-none text-[15rem] font-display font-black text-zinc-150/40 leading-none -z-10">
                  N
                </div>

                {/* Primary Offset Border Block */}
                <div className="absolute -inset-4 border-2 border-primary rotate-2 pointer-events-none z-0"></div>

                {/* Secondary Background Solid Block */}
                <div className="absolute inset-4 bg-zinc-100 -rotate-1 -z-10 shadow-lg"></div>

                {/* Main Portrait Frame */}
                <div className="relative overflow-hidden aspect-[4/5] bg-zinc-800 shadow-2xl z-10 animate-float">
                  <img 
                    src={homepage} 
                    alt="NHRWWO Community Empowerment" 
                    className="w-full h-full object-cover filter contrast-[1.05] grayscale-[15%] hover:scale-105 hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating Caption inside Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/80 mb-1">Impact Initiative</p>
                    <h3 className="font-serif text-lg font-bold leading-tight">Supporting grassroots communities nationwide</h3>
                  </div>
                </div>

                {/* Overlapping small feature card */}
               
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Statistics Section - Premium Floating Bar */}
      <section className="relative z-20 -mt-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl bg-white border border-zinc-200/60 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] py-12 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            
            {/* Stat Item 1 */}
            <div className="text-center md:px-4 py-4 md:py-0">
              <span className="block text-4xl sm:text-5xl font-display font-black text-primary tracking-tight mb-2">
                {counts.communities}+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Communities Reached
              </span>
            </div>

            {/* Stat Item 2 */}
            <div className="text-center md:px-4 py-4 md:py-0">
              <span className="block text-4xl sm:text-5xl font-display font-black text-foreground tracking-tight mb-2">
                {counts.women.toLocaleString()}+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Women & Children Helped
              </span>
            </div>

            {/* Stat Item 3 */}
            <div className="text-center md:px-4 py-4 md:py-0">
              <span className="block text-4xl sm:text-5xl font-display font-black text-secondary tracking-tight mb-2">
                {counts.programs}+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Active Programs
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Tribute Section - Editorial narrative layout */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Portrait Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative max-w-[380px] mx-auto lg:mx-0">
                
                {/* Visual Offset Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-zinc-50 border border-zinc-200 -z-10"></div>
                <div className="absolute bottom-4 right-4 w-full h-full border border-primary/20 -z-10"></div>

                <img 
                  src={MundrikaImage} 
                  alt="Late Shri Mundrika Prasad Mishra" 
                  className="w-full aspect-[3/4] object-cover grayscale filter contrast-110 shadow-xl"
                />

                {/* Floating quote badge */}
                <div className="absolute -bottom-6 -right-6 bg-zinc-950 text-white p-5 shadow-2xl">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-primary border-l-2 border-primary pl-3">
                In Loving Memory & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
                Tribute to Late Shri Mundrika Prasad Mishra
              </h2>
              <div className="h-[2px] w-20 bg-primary/20"></div>

              <div className="space-y-4 text-muted-foreground font-sans font-light leading-relaxed">
                <p className="text-foreground font-medium text-lg font-serif">
                  "Real change begins when people unite with compassion, courage, and responsibility."
                </p>
                <p>
                  Our organisation draws its vision and strength from the noble ideals of Late Shri Mundrika Prasad Mishra. He dedicated his life to serving the needy, uplifting the voiceless, and standing firm for justice and human rights.
                </p>
                <p>
                  His courage, compassion, and unwavering commitment to humanity continue to guide us in our mission. We walk on the path he showed, working hand-in-hand with citizens, government bodies, law enforcement agencies, and social institutions.
                </p>
                <p>
                  We honor his memory by continuing the work he began—protecting the rights of individuals, supporting victims, and spreading awareness so that wrongdoings do not find a place in our communities.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <p className="font-serif italic text-foreground font-bold">
                  Carrying forward the legacy of Late Shri Mundrika Prasad Mishra
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mt-1">
                  National Human Rights and Human Welfare Organisation
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Leadership Messages - Alternating Asymmetric Sections */}
      <section className="py-24 bg-zinc-50/50 border-t border-b border-zinc-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-32">
            
            {/* President's Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Leader Bio Left */}
              <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20 px-3 py-1.5 bg-primary/5">
                  President's Address
                </span>
                <h3 className="text-3xl font-serif font-black tracking-tight text-foreground">
                  Building a Dignified Society
                </h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  "Our society today is witnessing many challenges such as crime, corruption, domestic violence, exploitation, and social injustice. These issues not only harm individuals, but also weaken the very foundation of our nation."
                </p>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  "Our organisation is committed to building a society where every person can live with dignity, safety, and equal opportunity. We believe that real change begins when people unite. Through counseling, legal support, and community outreach, we continue to serve those who need us most."
                </p>
                <div className="pt-4">
                  <h4 className="font-serif font-bold text-foreground text-lg">Sunil Kumar</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">President, NHRWWO</p>
                </div>
              </div>

              {/* Leader Image Right */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative max-w-[340px] mx-auto">
                  <div className="absolute inset-4 bg-primary rotate-3 pointer-events-none -z-10 opacity-10"></div>
                  <div className="absolute inset-0 border border-zinc-200 z-10 pointer-events-none"></div>
                  <img 
                    src={presidentImage} 
                    alt="President Sunil Kumar" 
                    className="w-full aspect-[4/5] object-cover shadow-xl filter contrast-105" 
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white border border-zinc-100 p-4 shadow-lg z-20">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

            </div>

            {/* Secretary's Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Leader Image Left */}
              <div className="lg:col-span-5">
                <div className="relative max-w-[340px] mx-auto">
                  <div className="absolute inset-4 bg-secondary rotate-[-3deg] pointer-events-none -z-10 opacity-10"></div>
                  <div className="absolute inset-0 border border-zinc-200 z-10 pointer-events-none"></div>
                  <img 
                    src={secretaryImage} 
                    alt="Secretary Sonal Singh" 
                    className="w-full aspect-[4/5] object-cover shadow-xl filter contrast-105" 
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white border border-zinc-100 p-4 shadow-lg z-20">
                    <Quote className="h-5 w-5 text-secondary" />
                  </div>
                </div>
              </div>

              {/* Leader Bio Right */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary border border-secondary/20 px-3 py-1.5 bg-secondary/5">
                  Secretary's Address
                </span>
                <h3 className="text-3xl font-serif font-black tracking-tight text-foreground">
                  Safeguarding Rights & Empowering Lives
                </h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  "Our efforts focus on creating a society where every individual, especially women and children, can live with dignity, freedom, and equal opportunities."
                </p>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  "We help women gain financial independence through employment and skill development. We believe that when women are empowered, families grow stronger and communities progress. Through workshops, counseling, and awareness campaigns, we stand against violence and discrimination."
                </p>
                <div className="pt-4">
                  <h4 className="font-serif font-bold text-foreground text-lg">Sonal Singh</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Secretary, NHRWWO</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Work in Action (Carousel) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Initiatives & Outreach
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Our Work in Action
            </h2>
            <div className="h-[2px] w-12 bg-primary/30 mx-auto"></div>
            <p className="text-muted-foreground font-sans font-light">
              Glimpses of our ongoing initiatives and community outreach programs making a real difference
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-none overflow-hidden border border-zinc-200 shadow-2xl group aspect-[16/9] md:aspect-[21/9]">
            {/* Carousel Container */}
            <div className="relative w-full h-full bg-zinc-950">
              {programImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Our Program ${index + 1}`}
                    className="w-full h-full object-cover opacity-85 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Premium custom styles */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-primary text-white border border-white/10 p-4 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-primary text-white border border-white/10 p-4 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Content overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between text-white text-left z-20">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase block mb-1">
                  Outreach Program
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  Program Initiative {currentImageIndex + 1}
                </h3>
              </div>
              <p className="text-xs text-white/70 font-light mt-2 md:mt-0 max-w-xs leading-relaxed">
                Empowering grassroots groups and protecting rights across rural regions.
              </p>
            </div>

            {/* Progress indicators */}
            <div className="absolute top-6 right-6 bg-black/50 text-white border border-white/10 px-4 py-2 font-mono text-xs backdrop-blur-sm">
              {currentImageIndex + 1} / {programImages.length}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${((currentImageIndex + 1) / programImages.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Programs - Asymmetric Editorial cards */}
      <section className="py-24 bg-zinc-50/50 border-t border-b border-zinc-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Areas of Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Our Core Programs
            </h2>
            <div className="h-[2px] w-12 bg-secondary/30 mx-auto"></div>
            <p className="text-muted-foreground font-sans font-light">
              Comprehensive initiatives designed to create lasting impact in communities across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-stretch">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className={`flex flex-col bg-white border border-zinc-200/60 shadow-lg hover:shadow-xl transition-all duration-300 text-left hover:-translate-y-2 group ${
                  index === 1 ? "md:translate-y-6" : ""
                }`}
              >
                {/* Image block */}
                <div className="relative overflow-hidden aspect-[16/10] bg-zinc-150">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                    {program.tag}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-mono text-zinc-300 font-bold text-4xl block mb-2">{program.index}</span>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">{program.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{program.description}</p>
                  </div>

                  <Link to="/programs" className="block pt-4 border-t border-zinc-100">
                    <Button variant="link" className="p-0 text-primary hover:text-primary-hover font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                      Learn Details <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/programs">
              <Button size="lg" className="bg-zinc-950 hover:bg-zinc-800 text-white rounded-none px-8 py-7 uppercase tracking-wider font-bold text-xs">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Emergency Helpline - Crisis visual board */}
      <section className="relative py-24 bg-primary text-white overflow-hidden bg-noise">
        {/* Abstract background graphics */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 flex items-center justify-center select-none pointer-events-none">
          <Phone className="h-[30vw] w-[30vw]" />
        </div>
        <div className="absolute left-10 top-10 w-40 h-40 border-4 border-white/5 rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl space-y-8">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto animate-bounce">
            <Phone className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white">
            24/7 Emergency Helpline
          </h2>
          <p className="text-lg text-primary-foreground/90 font-light max-w-2xl mx-auto leading-relaxed">
            In crisis? We are here to help. Contact us for immediate support with domestic emergencies, human rights violations, abuse rescue, and legal crisis intervention.
          </p>

          <div className="h-[2px] w-20 bg-white/20 mx-auto"></div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 px-8 py-5 text-2xl sm:text-3xl font-mono font-bold tracking-wider">
              +91-7992481330
            </div>
            <Link to="/emergency">
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold text-sm uppercase tracking-wider rounded-none px-8 py-7 shadow-xl hover:-translate-y-0.5 transition-all">
                Get Urgent Assistance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Success Stories - Premium Portrait Slider */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Real Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Success Stories
            </h2>
            <div className="h-[2px] w-12 bg-primary/30 mx-auto"></div>
            <p className="text-muted-foreground font-sans font-light">
              Real stories of courage, resilience, and transformation that inspire us every day.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Story Card */}
            <div className="border border-zinc-200 p-8 md:p-12 bg-zinc-50 relative text-left">
              {/* Quotation Glyph */}
              <div className="absolute top-6 left-6 pointer-events-none select-none text-[8rem] font-serif font-black text-zinc-200/50 leading-none -z-0">
                “
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                {/* Initial Avatar */}
                <div className="w-16 h-16 rounded-none bg-primary text-white font-serif font-black text-3xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  {successStories[activeStoryIndex].initial}
                </div>

                <div className="space-y-4 flex-1">
                  <p className="text-lg md:text-xl text-foreground font-serif italic font-medium leading-relaxed">
                    "{successStories[activeStoryIndex].story}"
                  </p>
                  
                  <div className="pt-4 border-t border-zinc-200 flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <h4 className="font-serif font-bold text-foreground text-lg">
                        {successStories[activeStoryIndex].name}
                      </h4>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {successStories[activeStoryIndex].impact}
                      </span>
                    </div>

                    {/* Slider Navigators */}
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setActiveStoryIndex(prev => prev === 0 ? successStories.length - 1 : prev - 1)}
                        className="p-2 border border-zinc-300 hover:bg-zinc-200 hover:text-black transition-colors"
                        aria-label="Previous story"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => setActiveStoryIndex(prev => prev === successStories.length - 1 ? 0 : prev + 1)}
                        className="p-2 border border-zinc-300 hover:bg-zinc-200 hover:text-black transition-colors"
                        aria-label="Next story"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {successStories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`h-2 transition-all duration-300 ${
                    idx === activeStoryIndex ? "w-8 bg-primary" : "w-2 bg-zinc-300"
                  }`}
                  aria-label={`Go to story ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/blog">
              <Button variant="outline" className="border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-none px-6 py-6 text-xs uppercase tracking-wider font-bold">
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;