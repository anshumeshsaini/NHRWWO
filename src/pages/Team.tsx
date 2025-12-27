import { Linkedin, Mail, Award, Briefcase, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Import leadership team images
import leader1 from "../assets/teams/leader1.jpeg";
import leader2 from "../assets/teams/leader2.jpeg";
import leader3 from "../assets/teams/leaders3.jpeg";

// Import board members images
import board1 from "../assets/teams/teamimg1.jpeg";
import board2 from "../assets/teams/teamimg2.jpeg";
import board3 from "../assets/teams/teamimg3.jpeg";
import board4 from "../assets/teams/teamimg4.jpeg";
import board5 from "../assets/teams/teamimg5.jpeg";
import board6 from "../assets/teams/teamimg6.jpeg";
import board7 from "../assets/teams/teamimg7.jpeg";
import board8 from "../assets/teams/teamimg8.jpeg";
import board9 from "../assets/teams/teamimg9.jpeg";
import board10 from "../assets/teams/teamimg10.jpeg";
import board11 from "../assets/teams/teamimg11.jpeg";

// Import youth president images
import youth1 from "../assets/teams/teamimg1.jpeg";
import youth2 from "../assets/teams/teamimg1.jpeg";
import youth3 from "../assets/teams/teamimg1.jpeg";
import youth4 from "../assets/teams/teamimg1.jpeg";

// import member images
import member1 from "../assets/member/member1.jpeg";
import member2 from "../assets/member/member2.jpeg";
import member3 from "../assets/member/member3.jpeg";
import member4 from "../assets/member/member4.jpeg";
import member5 from "../assets/member/member5.jpeg";
import member6 from "../assets/member/member6.jpeg";
import member7 from "../assets/member/member7.jpeg";
import member8 from "../assets/member/member8.jpeg";
import member9 from "../assets/member/member9.jpeg";
import member10 from "../assets/member/member10.jpeg";
import member11 from "../assets/member/member11.jpeg";
import member12 from "../assets/member/member12.jpeg";
import member13 from "../assets/member/member13.jpeg";
import member14 from "../assets/member/member14.jpeg";
import member15 from "../assets/member/member15.jpeg";
import member16 from "../assets/member/member16.jpeg";
import member17 from "../assets/member/member17.jpeg";
import member18 from "../assets/member/member18.jpeg";
import member19 from "../assets/member/member19.jpeg";
import member20 from "../assets/member/member20.jpeg";
import member21 from "../assets/member/member21.jpeg";
import member22 from "../assets/member/member22.jpeg";
import member23 from "../assets/member/member23.jpeg";
import member188 from "../assets/member/member188.jpeg";
import statecore1 from "../assets/statecore/statecore1.jpeg";
// import youth image

import youth5 from '../assets/member/youth/youth1.jpeg'
import youth6 from '../assets/member/youth/youth2.jpeg'
import youth7 from '../assets/member/youth/youth3.jpeg'
import youth8 from '../assets/member/youth/youth4.jpeg'
import youth9 from '../assets/member/youth/youth5.jpeg'
import youth10 from '../assets/member/youth/youth6.jpeg'
import youth11 from '../assets/member/youth/youth7.jpeg'
import youth12 from '../assets/member/youth/youth8.jpeg'
import youth13 from '../assets/member/youth/youth9.jpeg'
import youth14 from '../assets/member/youth/youth10.jpeg'
import youth15 from '../assets/member/youth/youth11.jpeg'
import youth16 from '../assets/member/youth/youth12.jpeg'
import youth17 from '../assets/member/youth/youth13.jpeg'
import youth18 from '../assets/member/youth/youth14.jpeg'
import youth19 from '../assets/member/youth/youth15.jpeg'
import youth20 from '../assets/member/youth/youth16.jpeg'
import youth21 from '../assets/member/youth/youth17.jpeg'
import youth22 from '../assets/member/youth/youth18.jpeg'
import youth23 from '../assets/member/youth/youth19.jpeg'
import youth24 from "../assets/member/youth/youth20.jpeg";
import youth25 from "../assets/member/youth/youth22.jpeg";
import youth26 from "../assets/member/youth/youth23.jpeg";
import youth27 from "../assets/member/youth/youth24.jpeg";
import youth28 from "../assets/member/youth/youth25.jpeg";
import youth29 from "../assets/member/youth/youth26.jpeg";
import youth30 from "../assets/member/youth/youth27.jpeg";
import youth31 from "../assets/member/youth/youth28.jpeg";
import youth32 from "../assets/member/youth/youth29.jpeg";

const Team = () => {
  const leadership = [
    {
      name: "Sunil Kumar",
      position: "National President",
      image: leader1,
      bio: "25+ years of experience in human rights advocacy and social work. Led multiple national campaigns for women's rights.",
      email: "rajesh@nhrwwo.org",
    },
    {
      name: "Sonal Singh",
      position: "National Program Secretary",
      image: leader2,
      bio: "Expert in program development and community engagement with 15 years in the nonprofit sector.",
      email: "priya@nhrwwo.org",
    },
  ];

  const boardMembers = [
    { 
      name: "Premlata Singh", 
      position: "National Joint Secretary", 
      expertise: "Legal & Compliance",
      image: board6,
      email: "arjun.patel@nhrwwo.org",
    },
    { 
      name: "Rani Pathak", 
      position: "National General Secretary", 
      expertise: "Legal & Compliance",
      image: board7,
      email: "arjun.patel@nhrwwo.org",
    },
    { 
      name: "Mamta Sahu", 
      position: "National Executive President", 
      expertise: "Public Health",
      image: board1,
      email: "sunita.verma@nhrwwo.org",
    },
    { 
      name: "Rajkanta Raj", 
      position: "National vice president", 
      expertise: "Legal & Compliance",
      image: board5,
      email: "arjun.patel@nhrwwo.org",
    },
    { 
      name: "Meera Parkash", 
      position: "National Vice President", 
      expertise: "Corporate Social Responsibility",
      image: board2,
      email: "rajiv.mehta@nhrwwo.org",
    },
    { 
      name: "Madhuri Devi", 
      position: "National Vice President", 
      expertise: "Gender Studies",
      image: board3,
      email: "anjali.desai@nhrwwo.org",
    },
    { 
      name: "Dr. Madhuri Kumari", 
      position: "National Chief Convenr", 
      expertise: "Legal & Compliance",
      image: board4,
      email: "arjun.patel@nhrwwo.org",
    },
    { 
      name: "Sangeeta Singh", 
      position: "National Convenor", 
      expertise: "Legal & Compliance",
      image: board8,
      email: "arjun.patel@nhrwwo.org",
    },
    { 
      name: "Ghanshyam Sah", 
      position: "National Vice President", 
      expertise: "Legal & Compliance",
      image: board9,
      email: "arjun.patel@nhrwwo.org",
    },
    { 
      name: "Renu Dhari", 
      position: "National Convenor", 
      expertise: "Legal & Compliance",
      image: board10,
      email: "arjun.patel@nhrwwo.org",
    },
    { 
      name: "Alka Priya", 
      position: "National Legal Advisor", 
      expertise: "Legal & Compliance",
      image: board11,
      email: "arjun.patel@nhrwwo.org",
    },
  ];

  // State Core Committee
  const stateCommittee = [
    {
      name: "Pankaj Pathak",
      position: "Vice President",
      state: "Bihar Jharkhand",
      expertise: "Vice President",
      image: statecore1,
      email: "anjali.sharma@nhrwwo.org",
    },
    
  ];

  // Youth President Team
  const youthPresidents = [
    {
      name: "Rahul Verma",
      position: "National Youth President",
      image: youth1,
      bio: "Young dynamic leader with expertise in youth mobilization and digital activism. Spearheading our youth engagement programs across the nation.",
      email: "rahul.verma@nhrwwo.org",
    },
    {
      name: "Priya Sharma",
      position: "National Youth Vice President",
      image: youth2,
      bio: "Passionate about education reform and youth empowerment. Leading initiatives for skill development and career guidance.",
      email: "priya.sharma@nhrwwo.org",
    },
    {
      name: "Amit Kumar",
      position: "Youth Secretary",
      image: youth3,
      bio: "Tech-savvy activist focused on leveraging technology for social change. Manages our digital outreach and online campaigns.",
      email: "amit.kumar@nhrwwo.org",
    },
    {
      name: "Neha Gupta",
      position: "Youth Program Coordinator",
      image: youth4,
      bio: "Specializes in campus outreach and student engagement. Building strong networks with educational institutions nationwide.",
      email: "neha.gupta@nhrwwo.org",
    },
  ];

  const departments = [
    {
      name: "Program Team",
      icon: Users,
      count: 45,
      description: "Field workers, trainers, and program coordinators",
    },
    {
      name: "Legal Team",
      icon: Briefcase,
      count: 18,
      description: "Lawyers, paralegals, and legal counselors",
    },
    {
      name: "Operations Team",
      icon: Award,
      count: 12,
      description: "Administration, finance, and logistics",
    },
  ];

  // Member Slider Images - 740x726 ratio
  const memberSliderImages = [
    {
      url: member1,
      alt: "Team collaboration meeting",
    },
    {
      url: member2,
      alt: "Team collaboration meeting",
    },
    {
      url: member4,
      alt: "Team collaboration meeting",
    },
    {
      url: member5,
      alt: "Team collaboration meeting",
    },
    {
      url: member6,
      alt: "Team collaboration meeting",
    },
    {
      url: member7,
      alt: "Team collaboration meeting",
    },
    {
      url: member9,
      alt: "Team collaboration meeting",
    },
    {
      url: member8,
      alt: "Team collaboration meeting",
    },
    {
      url: member10,
      alt: "Team collaboration meeting",
    },
    {
      url: member11,
      alt: "Team collaboration meeting",
    },
    {
      url: member12,
      alt: "Team collaboration meeting",
    },
    {
      url: member13,
      alt: "Team collaboration meeting",
    },
    {
      url: member14,
      alt: "Team collaboration meeting",
    },
    {
      url: member15,
      alt: "Team collaboration meeting",
    },
    {
      url: member16,
      alt: "Team collaboration meeting",
    },
    {
      url: member17,
      alt: "Team collaboration meeting",
    },
  ];

  // Youth President Slider Images - 740x726 ratio
  const youthSliderImages = [
    {
      url: youth5,
      alt: "Youth leadership conference",
    },
    {
      url: youth6,
      alt: "Youth leadership conference",
    },
    {
      url: youth7,
      alt: "Youth leadership conference",
    },
    {
      url: youth8,
      alt: "Youth leadership conference",
    },
    {
      url: youth9,
      alt: "Youth leadership conference",
    },
    {
      url: youth10,
      alt: "Youth leadership conference",
    },
    {
      url: youth11,
      alt: "Youth leadership conference",
    },
    {
      url: youth12,
      alt: "Youth leadership conference",
    },
    {
      url: youth13,
      alt: "Youth leadership conference",
    },
    {
      url: youth5,
      alt: "Youth leadership conference",
    },
    {
      url: youth14,
      alt: "Youth leadership conference",
    },
    {
      url: youth15,
      alt: "Youth leadership conference",
    },
    {
      url: youth16,
      alt: "Youth leadership conference",
    },
    {
      url: youth17,
      alt: "Youth leadership conference",
    },
    {
      url: youth18,
      alt: "Youth leadership conference",
    },
    {
      url: youth19,
      alt: "Youth leadership conference",
    },
    {
      url: youth20,
      alt: "Youth leadership conference",
    },
    {
      url: youth21,
      alt: "Youth leadership conference",
    },
    {
      url: youth22,
      alt: "Youth leadership conference",
    },
    {
      url: youth23,
      alt: "Youth leadership conference",
    },
    {
      url: youth24,
      alt: "Youth leadership conference",
    },
    {
      url: youth25,
      alt: "Youth leadership conference",
    },
    {
      url: youth26,
      alt: "Youth leadership conference",
    },
    {
      url: youth27,
      alt: "Youth leadership conference",
    },
    {
      url: youth28,
      alt: "Youth leadership conference",
    },
    {
      url: youth29,
      alt: "Youth leadership conference",
    },
    {
      url: youth30,
      alt: "Youth leadership conference",
    },
    {
      url: youth31,
      alt: "Youth leadership conference",
    },
    {
      url: youth32,
      alt: "Youth leadership conference",
    },
  ];

  const [currentMemberSlide, setCurrentMemberSlide] = useState(0);
  const [currentYouthSlide, setCurrentYouthSlide] = useState(0);

  const nextMemberSlide = () => {
    setCurrentMemberSlide((prev) => (prev === memberSliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevMemberSlide = () => {
    setCurrentMemberSlide((prev) => (prev === 0 ? memberSliderImages.length - 1 : prev - 1));
  };

  const nextYouthSlide = () => {
    setCurrentYouthSlide((prev) => (prev === youthSliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevYouthSlide = () => {
    setCurrentYouthSlide((prev) => (prev === 0 ? youthSliderImages.length - 1 : prev - 1));
  };

  // Auto-slide functionality for both sliders
  useEffect(() => {
    const memberInterval = setInterval(() => {
      nextMemberSlide();
    }, 5000);

    const youthInterval = setInterval(() => {
      nextYouthSlide();
    }, 5000);

    return () => {
      clearInterval(memberInterval);
      clearInterval(youthInterval);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Meet the passionate individuals dedicated to creating positive change and empowering communities across the nation.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Leadership Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experienced professionals leading our mission with vision, integrity, and compassion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[740/726] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                     
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3 text-sm">{member.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Board of Directors</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Distinguished professionals providing strategic guidance and governance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[740/726] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                     
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{member.name}</h3>
                  <p className="text-primary font-medium mb-2 text-sm">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State Core Committee */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">State Core Committee</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Dedicated leaders driving our mission at the state level with regional expertise and local impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stateCommittee.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[740/726] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">

                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{member.name}</h3>
                  <p className="text-primary font-medium mb-2 text-sm">{member.position}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {member.state}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Slider */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Our Members in Action</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Dedicated team members working tirelessly to drive our mission forward.
          </p>
          
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* Slides Container */}
            <div className="relative aspect-[740/726] overflow-hidden">
              {memberSliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentMemberSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-lg font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevMemberSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextMemberSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {memberSliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMemberSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMemberSlide ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Youth President Slider */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Youth Leadership Initiatives</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Empowering the next generation of leaders through innovative programs and activities.
          </p>
          
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* Slides Container */}
            <div className="relative aspect-[740/726] overflow-hidden">
              {youthSliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentYouthSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-lg font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevYouthSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextYouthSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {youthSliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentYouthSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentYouthSlide ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Our Departments</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Dedicated teams working collaboratively to achieve our mission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <dept.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{dept.name}</h3>
                <div className="text-4xl font-bold text-primary mb-3">{dept.count}</div>
                <p className="text-muted-foreground text-sm">{dept.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;