import { Target, Eye, Award, Users, TrendingUp, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    { year: "2015", event: "Organization started its journey" },
    { year: "2016", event: "Received government recognition and support" },
    { year: "2017", event: "Expanded operations across the entire Bihar region" },
    { year: "2019", event: "Formed a dedicated team in Delhi" },
    { year: "2022", event: "Achieved major milestones and resolved numerous cases" },
    { year: "2025", event: "Continuing towards future excellence and greater impact" },
  ];
  

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About NHRWWO
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2015, we've been at the forefront of human rights advocacy and women's welfare, 
              creating lasting change through education, legal support, and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 border-t-4 border-t-primary">
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48">
                  <Lottie 
                    animationData={missionAnimation} 
                    loop={true}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To protect and promote human rights, especially for women and children, through advocacy, 
                education, legal support, and community empowerment programs. We strive to create a society 
                where every individual has equal opportunities and lives with dignity, free from discrimination 
                and violence.
              </p>
            </Card>

            <Card className="p-8 border-t-4 border-t-secondary">
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48">
                  <Lottie 
                    animationData={visionAnimation} 
                    loop={true}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where human rights are universally respected, women are empowered to reach their full 
                potential, and children grow up in safe, nurturing environments. We envision communities where 
                justice prevails, equality is the norm, and every person can contribute meaningfully to society.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Organization Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                National Human Rights and Women Welfare Organization
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong>National Human Rights and Women Welfare Organization</strong> is a dedicated unit of Seva Samarpit Foundation, 
                  registered under the Societies Registration Act, 1860. Our organization works with a strong commitment to 
                  uphold human rights and ensure dignity, equality, and justice for every individual in society.
                </p>
                <p>
                  We focus on reducing crime, domestic violence, and atrocities by promoting awareness, providing guidance, 
                  and standing with those who need protection and support. Along with safeguarding rights, we also extend 
                  help to the underprivileged sections of society through our welfare programs.
                </p>
                <p>
                  Through continuous efforts, community involvement, and a commitment to social harmony, we strive to build 
                  a safer, just, and compassionate society where every individual can live with respect and equal opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Our Core Values</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The principles that guide our work and define our organizational culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Our Journey</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From humble beginnings to nationwide impact - milestones that shaped our organization.
          </p>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                    {milestone.year.slice(2)}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-primary font-semibold mb-1">{milestone.year}</div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">Governance & Transparency</h2>
            <p className="text-center text-muted-foreground mb-12">
              We maintain the highest standards of accountability and transparency in all our operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <FileText className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Annual Reports</h3>
                <p className="text-muted-foreground mb-4">
                  Download our comprehensive annual reports detailing our programs, financials, and impact.
                </p>
                <Button variant="outline">Download Reports</Button>
              </Card>

              <Card className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Certifications</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Society Registration Act</li>
                  <li>• NGO Darpan Registration / NITI Aayog</li>
                  <li>• 12A & 80G Tax Exemption Certificate</li>
                  <li>• ISO 9001:2015 Certified</li>
                  <li>• CRS Registration</li>
                  <li>• FCRA Registration</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;