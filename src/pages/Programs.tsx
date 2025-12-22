import { Link } from "react-router-dom";
import { Users, Heart, Scale, GraduationCap, Stethoscope, AlertCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import womenEmpowerment from "@/assets/womenempowermentthroughactivities.webp";
import childRights from "@/assets/children.webp";
import legalAid from "@/assets/legalaid.webp";
import educationInitiatives from "../assets/EducationInitiatives.jpg";
import healthcareAccess from "../assets/HealthcareAccess.jpg";
import emergencyResponse from "../assets/EmergencyResponse.jpg";
import oldAgeHome from "../assets/oldAgeHome.webp";

const Programs = () => {
  const programs = [
    {
      icon: Users,
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
    },
    {
      icon: Heart,
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
    },
    {
      icon: Scale,
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
    },
    {
      icon: GraduationCap,
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
    },
    {
      icon: Stethoscope,
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
    },
    {
      icon: Stethoscope,
      title: "Old Age Home",
      description: "Providing care, dignity, and comfort to the elderly through dedicated old age homes, medical support, and community engagement programs.",
      image: oldAgeHome,
      stats: { residents: "500+", centers: "10", satisfactionRate: "95%" },
      features: [
        "24/7 Medical Assistance",
        "Nutritious Meals and Care",
        "Recreational Activities",
        "Counseling and Emotional Support",
        "Community Integration Programs",
      ],
    },
    
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Comprehensive initiatives designed to create lasting impact across communities nationwide. 
            Each program is carefully crafted to address specific challenges and empower individuals.
          </p>
        </div>
      </section>

      {/* Programs Detail Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                {program.image && (
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-lg shadow-xl group">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={`lg:w-1/2 ${!program.image && "lg:w-full"}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <program.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{program.title}</h2>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(program.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/get-involved">
                    <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                      Support This Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Creating Measurable Impact</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Every program is designed with clear objectives and measurable outcomes. We believe in data-driven 
            approaches that demonstrate real change and sustainable impact in the communities we serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Get Involved
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                Request Program Info
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
