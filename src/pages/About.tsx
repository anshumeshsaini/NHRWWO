import { Target, Eye, Award, Users, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import missionAnimation from "../assets/animation/Mission.json";
import visionAnimation from "../assets/animation/Vision.json";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Justice",
      description: "Unwavering commitment to fairness and equality for all individuals.",
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Building capacity and confidence in communities to advocate for their rights.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Maintaining transparency and ethical practices in all our operations.",
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "Focusing on measurable, sustainable change that transforms lives.",
    },
  ];

  const milestones = [
    { year: "2015", event: "Organization started its journey with grassroot initiatives" },
    { year: "2016", event: "Received official government recognition and NGO support" },
    { year: "2017", event: "Expanded operations across the entire Bihar region" },
    { year: "2019", event: "Formed a dedicated team and advocacy unit in Delhi" },
    { year: "2022", event: "Achieved major milestones and resolved numerous legal welfare cases" },
    { year: "2025", event: "Continuing towards future excellence and nationwide scaling" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden pt-12">
      
      {/* 1. Hero Section - Elegant Typography */}
      <section className="relative py-28 bg-white border-b border-zinc-150 bg-noise">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[12vw] font-serif font-black text-zinc-100/30 leading-none">
          ABOUT
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary border-l-2 border-primary pl-3">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-foreground leading-none text-balance">
              Advocating for human dignity & <span className="italic text-primary font-normal">equality</span> since 2015
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed text-balance max-w-3xl">
              NHRWWO stands at the forefront of human rights protection and women's welfare in India. We build agency and self-reliance in underserved communities through direct legal aid, education, and social protection programs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision - Premium Split Screen */}
      <section className="py-24 bg-zinc-50/50 border-b border-zinc-150">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
            
            {/* Mission Panel */}
            <div className="space-y-8 pb-12 lg:pb-0 lg:pr-12 text-left">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 flex-shrink-0 bg-primary/5 border border-primary/10 p-2 overflow-hidden shadow-lg">
                  <Lottie 
                    animationData={missionAnimation} 
                    loop={true}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Core Purpose</span>
                  <h2 className="text-3xl font-serif font-black text-foreground mt-0.5">Our Mission</h2>
                </div>
              </div>
              <p className="text-muted-foreground font-sans font-light leading-relaxed text-lg text-balance">
                To protect and promote fundamental human rights, with a specific focus on women and children. We do this through advocacy, active legal support, and direct community empowerment programs. We strive to build a society where every individual has equal opportunities and lives with dignity, free from violence and systemic discrimination.
              </p>
            </div>

            {/* Vision Panel */}
            <div className="space-y-8 pt-12 lg:pt-0 lg:pl-12 text-left">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 flex-shrink-0 bg-secondary/5 border border-secondary/10 p-2 overflow-hidden shadow-lg">
                  <Lottie 
                    animationData={visionAnimation} 
                    loop={true}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Future Horizon</span>
                  <h2 className="text-3xl font-serif font-black text-foreground mt-0.5">Our Vision</h2>
                </div>
              </div>
              <p className="text-muted-foreground font-sans font-light leading-relaxed text-lg text-balance">
                We envision a world where human rights are universally respected, women are fully empowered to reach their complete potential, and children grow up in safe, nurturing environments. We work to establish communities where justice prevails, social equality is standard, and every citizen contributes to social welfare.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Organization Description - Editorial statement block */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto border border-zinc-200 p-8 md:p-12 relative text-left bg-zinc-50 bg-noise shadow-md">
            
            {/* Absolute offset line decoration */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-black text-foreground mb-6">
              National Human Rights and Women Welfare Organization
            </h2>
            <div className="h-[1px] w-full bg-zinc-200 mb-6"></div>

            <div className="space-y-6 text-muted-foreground font-sans font-light leading-relaxed">
              <p>
                <strong>National Human Rights and Women Welfare Organization</strong> is a dedicated unit of Seva Samarpit Foundation, registered under the Societies Registration Act, 1860. Our organization works with a strong commitment to uphold human rights and ensure dignity, equality, and justice for every individual in society.
              </p>
              <p>
                We focus on reducing crime, domestic violence, and atrocities by promoting awareness, providing guidance, and standing with those who need protection and support. Along with safeguarding rights, we also extend help to the underprivileged sections of society through our welfare programs.
              </p>
              <p>
                Through continuous efforts, community involvement, and a commitment to social harmony, we strive to build a safer, just, and compassionate society where every individual can live with respect and equal opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values - Asymmetric Grid */}
      <section className="py-24 bg-zinc-50 border-t border-b border-zinc-250">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Our Core Values
            </h2>
            <div className="h-[2px] w-12 bg-primary/30 mx-auto"></div>
            <p className="text-muted-foreground font-sans font-light">
              The principles that guide our work and define our organizational culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`bg-white border border-zinc-200 p-8 text-left hover:shadow-lg hover:border-primary/45 transition-all duration-300 ${
                  index % 2 === 1 ? "lg:translate-y-4" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-none bg-primary/5 border border-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. History Timeline - Monospace Editorial Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Chronology
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Our Journey
            </h2>
            <div className="h-[2px] w-12 bg-secondary/30 mx-auto"></div>
            <p className="text-muted-foreground font-sans font-light">
              From humble beginnings to nationwide impact—milestones that shaped our organization.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative pl-6 border-l border-zinc-200 space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative group text-left pl-6">
                {/* Year indicator dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-none bg-white border-2 border-primary group-hover:bg-primary transition-colors"></div>
                
                <div className="space-y-1">
                  <span className="font-mono font-bold text-lg text-primary tracking-wider">
                    {milestone.year}
                  </span>
                  <p className="text-lg font-sans font-light text-muted-foreground leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Governance & Certifications */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-150">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-left space-y-16">
            
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Accountability
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
                Governance & Transparency
              </h2>
              <p className="text-muted-foreground font-sans font-light">
                We maintain the highest standards of accountability and transparency in all our operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Box 1 */}
              <div className="bg-white border border-zinc-200 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <FileText className="h-10 w-10 text-secondary" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Annual Reports</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Download our complete annual performance and financial statements detailing our programmatic goals, budget allocations, and auditing results.
                  </p>
                </div>
                <Button className="bg-zinc-950 hover:bg-zinc-800 text-white rounded-none self-start py-5 px-6 uppercase tracking-wider font-bold text-xs">
                  Download Reports
                </Button>
              </div>

              {/* Box 2 */}
              <div className="bg-white border border-zinc-200 p-8 space-y-6">
                <div className="space-y-4">
                  <Award className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Official Credentials</h3>
                </div>
                <ul className="text-sm text-muted-foreground font-sans font-light space-y-3 pl-1">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span> Society Registration Act (Est. 2015)</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span> NGO Darpan / NITI Aayog Verified</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span> 12A & 80G Income Tax Exemptions</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span> ISO 9001:2015 Quality Management</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span> CRS & FCRA Compliant Unit</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;