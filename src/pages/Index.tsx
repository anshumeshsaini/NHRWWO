import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Phone, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Lottie from "lottie-react";
import missionAnimation from "@/assets/animation/Mission.json";
import womenEmpowerment from "@/assets/women-empowerment.jpg";
import childRights from "@/assets/child-rights.jpg";
import legalAid from "@/assets/legal-aid.jpg";
import homepage from "@/assets/homepage.jpeg";
// Add these imports for president and secretary images
import presidentImage from "../assets/president.jpeg";
import secretaryImage from "../assets/sectry.jpeg";
import MundrikaImage from "../assets/mishra2.jpg";
// Import your program images
import programImage1 from "../assets/homeimg1.jpeg";
import programImage2 from "@/assets/homeimg2.jpeg";
import programImage3 from "@/assets/homeimg3.jpeg";
import programImage4 from "@/assets/homeimg4.jpeg";

const Index = () => {
  const [counts, setCounts] = useState({ communities: 0, women: 0, programs: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const missionRef = useRef(null);

  // Program images array
  const programImages = [
    programImage1,
    programImage2,
    programImage3,
    programImage4
  ];

  // Auto-slide effect for program images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === programImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [programImages.length]);

  // Manual navigation
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  const programs = [
    {
      title: "Women Empowerment",
      description: "Skill development, entrepreneurship training, and economic independence programs for women.",
      image: womenEmpowerment,
      link: "/programs",
    },
    {
      title: "Child Rights Protection",
      description: "Ensuring safety, education, and a nurturing environment for every child.",
      image: childRights,
      link: "/programs",
    },
    {
      title: "Legal Aid Services",
      description: "Free legal consultation and support for those facing injustice and rights violations.",
      image: legalAid,
      link: "/programs",
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      story: "From domestic abuse survivor to successful entrepreneur, now employing 12 women in her community.",
      impact: "Economic Independence",
    },
    {
      name: "Aisha Khan",
      story: "Fought for her daughter's education rights and now runs literacy programs for 200+ girls.",
      impact: "Education Access",
    },
    {
      name: "Maria Rodriguez",
      story: "Received legal aid to escape trafficking and now advocates for victims' rights nationwide.",
      impact: "Legal Justice",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={homepage} alt="Empowering communities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/65"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          National human rights & women welfare organisations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          The National Human Rights and Women Welfare Organisation is dedicated to promoting justice, equality, and safety in society. We work to prevent crime, domestic violence, and social atrocities by providing awareness, support, and legal guidance. Our aim is to protect the rights of women, children, and the vulnerable, and help build a community where every individual lives with dignity and respect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/get-involved">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg">
                Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/emergency">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary font-semibold text-lg">
                Emergency Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-counter">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-foreground mb-2">{counts.communities}+</div>
              <div className="text-lg text-muted-foreground">Communities Reached</div>
            </div>
            <div className="text-center animate-counter" style={{ animationDelay: "0.1s" }}>
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-foreground mb-2">{counts.women.toLocaleString()}+</div>
              <div className="text-lg text-muted-foreground">Women & Children Helped</div>
            </div>
            <div className="text-center animate-counter" style={{ animationDelay: "0.2s" }}>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-foreground mb-2">{counts.programs}+</div>
              <div className="text-lg text-muted-foreground">Active Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Program Images Carousel */}
     

      {/* Tribute Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="relative max-w-3xl mx-auto lg:mx-0">
                <img 
                  src={MundrikaImage} 
                  alt="Late Shri Mundrika Prasad Mishra" 
                  className="rounded-xl shadow-2xl w-full h-[650px] object-cover lg:h-[700px] xl:h-[750px]"
                />
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-5 rounded-xl shadow-xl">
                  <Quote className="h-10 w-10" />
                </div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Tribute to Late Shri Mundrika Prasad Mishra</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">In Loving Memory,</p>
                <p>
                  Our organisation draws its vision and strength from the noble ideals of Late Shri Mundrika Prasad Mishra. 
                  He dedicated his life to serving the needy, uplifting the voiceless, and standing firm for justice and human rights.
                </p>
                <p>
                  His courage, compassion, and unwavering commitment to humanity continue to guide us in our mission to build 
                  a society where every person can live with dignity, safety, and equal opportunity. Through his example, 
                  he taught us that real change begins when people unite with compassion, courage, and responsibility.
                </p>
                <p>
                  We walk on the path he showed, working hand-in-hand with citizens, government bodies, law enforcement agencies, 
                  and social institutions to promote justice and ensure that every voice is heard. His legacy lives on through 
                  our counseling services, legal support, awareness programs, training sessions, and community outreach.
                </p>
                <p>
                  His inspiration is our foundation. His values are our direction. We honor his memory by continuing the work 
                  he began - protecting the rights of individuals, supporting victims, and spreading awareness so that 
                  wrongdoings do not find a place in our communities.
                </p>
                <p>
                  Though he is no longer with us, his spirit guides our every action as we strive to create a safer, kinder, 
                  and more just society in his honor.
                </p>
                <p className="font-semibold text-foreground mt-6">
                  Eternal Gratitude,<br />
                  <span className="text-primary">National Human Rights and Human Welfare Organisation</span><br />
                  Carrying forward the legacy of Late Shri Mundrika Prasad Mishra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="relative max-w-3xl mx-auto lg:mx-0">
                <img 
                  src={presidentImage} 
                  alt="President Sunil Kumar" 
                  className="rounded-xl shadow-2xl w-full h-[650px] object-cover lg:h-[700px] xl:h-[750px]"
                />
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-5 rounded-xl shadow-xl">
                  <Quote className="h-10 w-10" />
                </div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Message from Our President</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">"Dear Visitors"</p>
                <p>
                  It gives me great honor to share the vision and mission of the National Human Rights and Human Welfare Organisation with you. 
                  Our society today is witnessing many challenges such as crime, corruption, domestic violence, exploitation, and social injustice. 
                  These issues not only harm individuals, but also weaken the very foundation of our nation.
                </p>
                <p>
                  Our organisation is committed to building a society where every person can live with dignity, safety, and equal opportunity. 
                  We work to protect the rights of individuals, support victims, and spread awareness so that wrongdoings do not find a place in our communities. 
                  We believe that real change begins when people unite with compassion, courage, and responsibility.
                </p>
                <p>
                  Our approach is rooted in collaboration. We work hand-in-hand with citizens, government bodies, law enforcement agencies, 
                  and social institutions to promote justice and ensure that every voice is heard. Through counseling, legal support, 
                  awareness programs, training sessions, and community outreach, we continue to serve those who need us most.
                </p>
                <p>
                  I invite you to join us in this movement. Whether through volunteering, spreading awareness, or standing up against 
                  injustice in your daily life, your participation strengthens our mission. Together, we can create a safer, kinder, 
                  and more just society.
                </p>
                <p>Let us move forward with hope and commitment.</p>
                <p className="font-semibold text-foreground mt-6">
                  Warm regards,<br />
                  <span className="text-primary">Sunil Kumar</span><br />
                  President<br />
                  National Human Rights and Human Welfare Organisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secretary's Message */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="relative max-w-3xl mx-auto lg:mx-0">
                <img 
                  src={secretaryImage} 
                  alt="Secretary Sonal Singh" 
                  className="rounded-xl shadow-2xl w-full h-[650px] object-cover lg:h-[700px] xl:h-[750px]"
                />
                <div className="absolute -bottom-8 -left-8 bg-secondary text-white p-5 rounded-xl shadow-xl">
                  <Quote className="h-10 w-10" />
                </div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Message from Our Secretary</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">"Dear Visitors"</p>
                <p>
                  Our organisation is dedicated to creating a society where every individual, especially women and children, 
                  can live with dignity, freedom, and equal opportunities.
                </p>
                <p>
                  We work to safeguard the rights of women, provide legal assistance to those facing injustice, and help women 
                  gain financial independence through employment and skill development. We believe that when women are empowered, 
                  families grow stronger and communities progress. Our efforts also focus on ensuring that children receive 
                  education and guidance, so that they can build a brighter and secure future for themselves.
                </p>
                <p>
                  Awareness is the foundation of change. Through workshops, counseling sessions, community outreach and public 
                  awareness campaigns, we are continuously working to inform and inspire society to stand against violence, 
                  discrimination, and social injustice. At the same time, we extend support to those in need, ensuring that 
                  no one is left unheard or unsupported.
                </p>
                <p>
                  Our journey is driven by compassion, commitment, and collective effort. I invite you to join hands with us 
                  in this mission. Your support, participation, and encouragement help us bring meaningful change and touch more lives.
                </p>
                <p>Let us work together towards a society where justice is accessible to all, and where every human being lives with respect.</p>
                <p className="font-semibold text-foreground mt-6">
                  With warm regards,<br />
                  <span className="text-secondary">Sonal Singh</span><br />
                  Secretary<br />
                  National Human Rights and Human Welfare Organisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Our Work in Action</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Glimpses of our ongoing initiatives and community outreach programs making a real difference
          </p>
          
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            {/* Floating Images Container */}
            <div className="relative w-full h-full">
              {programImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Our Program ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {programImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-6 right-6 bg-black/50 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {currentImageIndex + 1} / {programImages.length}
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold drop-shadow-lg">Program Initiative {currentImageIndex + 1}</h3>
              <p className="text-white/90 drop-shadow-lg">Making a difference in communities nationwide</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each image represents our commitment to creating positive change through various community programs and initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Our Programs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive initiatives designed to create lasting impact in communities across the nation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Link to={program.link}>
                    <Button variant="link" className="text-primary p-0 hover:gap-2 transition-all group">
                      Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Helpline */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Phone className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">24/7 Emergency Helpline</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            In crisis? We're here to help. Immediate support for emergencies, legal assistance, and crisis intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-3xl font-bold">+91-7992481330</div>
            <Link to="/emergency">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Get Emergency Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Success Stories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real stories of courage, resilience, and transformation that inspire us every day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mr-4">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{story.name}</h3>
                    <span className="text-sm text-primary">{story.impact}</span>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{story.story}"</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline">Read More Stories</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;