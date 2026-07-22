import { Link } from "react-router-dom";
import { Users, Heart, Scale, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import womenEmpowerment from "@/assets/womenempowermentthroughactivities.webp";
import childRights from "@/assets/children.webp";
import legalAid from "@/assets/legalaid.webp";
import educationInitiatives from "../assets/EducationInitiatives.jpg";
import healthcareAccess from "../assets/HealthcareAccess.jpg";
import oldAgeHome from "../assets/oldAgeHome.webp";

const Programs = () => {
  const programs = [
    {
      icon: Users,
      index: "01",
      title: "Women Empowerment Programs",
      description: "Comprehensive skill development, entrepreneurship training, and economic independence initiatives for women from marginalized communities.",
      image: womenEmpowerment,
      stats: { beneficiaries: "15,000+", communities: "120", successRate: "85%" },
      features: [
        "Vocational Skills Training",
        "Entrepreneurship Development",
        "Financial Literacy Programs",
        "Leadership Development",
        "Self-Help Group Formation",
      ],
      themeColor: "text-primary",
      borderColor: "border-primary/20",
      bgColor: "bg-primary/5",
    },
    {
      icon: Heart,
      index: "02",
      title: "Child Rights Protection",
      description: "Ensuring every child's right to safety, education, healthcare, and a nurturing environment through advocacy and direct intervention.",
      image: childRights,
      stats: { beneficiaries: "8,500+", communities: "95", successRate: "92%" },
      features: [
        "Child Safety Programs",
        "Education Support",
        "Healthcare Access",
        "Child Trafficking Prevention",
        "Counseling Services",
      ],
      themeColor: "text-secondary",
      borderColor: "border-secondary/20",
      bgColor: "bg-secondary/5",
    },
    {
      icon: Scale,
      index: "03",
      title: "Legal Aid Services",
      description: "Free legal consultation, representation, and support for individuals facing injustice, discrimination, or rights violations.",
      image: legalAid,
      stats: { beneficiaries: "12,000+", communities: "150", successRate: "78%" },
      features: [
        "Free Legal Consultation",
        "Court Representation",
        "Documentation Support",
        "Legal Awareness Camps",
        "Fast-Track Case Resolution",
      ],
      themeColor: "text-zinc-805",
      borderColor: "border-zinc-300",
      bgColor: "bg-zinc-100/50",
    },
    {
      icon: GraduationCap,
      index: "04",
      title: "Education Initiatives",
      description: "Breaking barriers to education through scholarships, school infrastructure support, and literacy programs.",
      image: educationInitiatives,
      stats: { beneficiaries: "20,000+", communities: "180", successRate: "88%" },
      features: [
        "Scholarship Programs",
        "Adult Literacy Classes",
        "Digital Literacy Training",
        "School Infrastructure Support",
        "Teacher Training Programs",
      ],
      themeColor: "text-primary",
      borderColor: "border-primary/20",
      bgColor: "bg-primary/5",
    },
    {
      icon: Stethoscope,
      index: "05",
      title: "Healthcare Access",
      description: "Improving healthcare access for underserved communities through medical camps, awareness programs, and health insurance support.",
      image: healthcareAccess,
      stats: { beneficiaries: "25,000+", communities: "200", successRate: "90%" },
      features: [
        "Free Medical Camps",
        "Health Insurance Support",
        "Maternal Health Programs",
        "Nutrition Programs",
        "Mental Health Services",
      ],
      themeColor: "text-secondary",
      borderColor: "border-secondary/20",
      bgColor: "bg-secondary/5",
    },
    {
      icon: Stethoscope,
      index: "06",
      title: "Old Age Home Care",
      description: "Providing care, dignity, and comfort to the elderly through dedicated old age homes, medical support, and community engagement programs.",
      image: oldAgeHome,
      stats: { residents: "500+", centers: "10", satisfactionRate: "95%" },
      features: [
        "24/7 Medical Assistance",
        "Nutritious Meals and Care",
        "Recreational Activities",
        "Counseling and Support",
        "Community Integration",
      ],
      themeColor: "text-zinc-805",
      borderColor: "border-zinc-300",
      bgColor: "bg-zinc-100/50",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden pt-12">
      
      {/* 1. Hero Section */}
      <section className="relative py-28 bg-white border-b border-zinc-150 bg-noise">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[12vw] font-serif font-black text-zinc-100/30 leading-none">
          PROGRAMS
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-left">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary border-l-2 border-primary pl-3">
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-foreground leading-none text-balance">
              Our core welfare <span className="italic text-primary font-normal">initiatives</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed text-balance max-w-3xl">
              From legal counsel to women's vocational training and child protection, NHRWWO runs targeted programs designed to deliver measurable, sustainable social impact.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Programs List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-36">
            {programs.map((program, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-16 lg:gap-12 items-center text-left ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left Block: Layered Image Frame */}
                  <div className="w-full lg:w-1/2 relative">
                    {/* Big backdrop index number */}
                    <div className={`absolute -top-12 ${isEven ? "-left-6" : "-right-6"} pointer-events-none select-none text-[8rem] font-serif font-black text-zinc-100 leading-none -z-10`}>
                      {program.index}
                    </div>

                    <div className="relative max-w-[450px] mx-auto">
                      {/* Offset background block */}
                      <div className={`absolute -inset-3 border-2 ${program.borderColor} ${isEven ? "rotate-2" : "-rotate-2"} pointer-events-none z-0`}></div>
                      
                      <div className="relative overflow-hidden aspect-[4/3] bg-zinc-800 shadow-xl z-10">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-750"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Right Block: Content Details */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-none ${program.bgColor} border ${program.borderColor} flex items-center justify-center`}>
                        <program.icon className={`h-5 w-5 ${program.themeColor}`} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-black text-foreground">{program.title}</h2>
                    </div>

                    <p className="text-muted-foreground font-sans font-light leading-relaxed text-lg">
                      {program.description}
                    </p>

                    {/* Stats bar */}
                    <div className="grid grid-cols-3 gap-2 border-t border-b border-zinc-100 py-4">
                      {Object.entries(program.stats).map(([key, value]) => (
                        <div key={key} className="text-left px-2">
                          <div className={`text-xl sm:text-2xl font-display font-black ${program.themeColor} leading-none mb-1`}>
                            {value}
                          </div>
                          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-none">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Features checklist */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">Key Pillars:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground font-sans font-light">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className={`w-1.5 h-1.5 ${program.themeColor === "text-zinc-805" ? "bg-zinc-850" : "bg-primary"} mr-2 flex-shrink-0`}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support Button */}
                    <div className="pt-4">
                      <Link to="/get-involved">
                        <Button className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-none px-6 py-6 transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                          Support This Program <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Impact Statement Banner */}
      <section className="relative py-24 bg-primary text-white overflow-hidden bg-noise">
        <div className="absolute left-10 bottom-10 w-60 h-60 border border-white/5 rounded-none pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white leading-none">
            Creating Measurable Social Impact
          </h2>
          <p className="text-lg text-primary-foreground/90 font-light leading-relaxed text-balance">
            Every program is designed with clear checkpoints and measurable outcomes. We believe in data-driven grassroots support that generates sustainable development in the communities we serve.
          </p>
          <div className="h-[2px] w-12 bg-white/20 mx-auto"></div>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/get-involved">
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-bold text-xs uppercase tracking-wider rounded-none px-8 py-6">
                Get Involved
              </Button>
            </Link>
            <Link to="/contact">
  <Button
    size="lg"
    className="bg-white text-red-600 hover:bg-white hover:text-red-600 font-bold text-xs uppercase tracking-wider rounded-none px-8 py-6 shadow-none"
  >
    Request Program Details
  </Button>
</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Programs;
