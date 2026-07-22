import { FileText, Download, Video, ExternalLink, BookOpen, Scale, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Resources = () => {
  const resources = [
    {
      category: "Legal Rights",
      icon: Scale,
      items: [
        {
          title: "Women's Legal Rights Handbook",
          description: "Comprehensive guide covering property rights, domestic violence laws, and workplace rights.",
          type: "PDF",
          size: "2.5 MB",
        },
        {
          title: "Child Protection Laws Guide",
          description: "Understanding POCSO Act, child labor laws, and reporting mechanisms.",
          type: "PDF",
          size: "1.8 MB",
        },
        {
          title: "Know Your Rights: Quick Reference",
          description: "Easy-to-understand overview of fundamental rights and legal remedies.",
          type: "PDF",
          size: "500 KB",
        },
      ],
    },
    {
      category: "Self-Help Guides",
      icon: BookOpen,
      items: [
        {
          title: "Domestic Violence: Safety Planning",
          description: "Step-by-step guide for creating a personal safety plan and accessing support.",
          type: "PDF",
          size: "1.2 MB",
        },
        {
          title: "Financial Literacy for Women",
          description: "Practical guide to banking, savings, and financial independence.",
          type: "PDF",
          size: "3.1 MB",
        },
        {
          title: "Starting Your Own Business",
          description: "Entrepreneur's guide covering registration, funding, and marketing basics.",
          type: "PDF",
          size: "2.8 MB",
        },
      ],
    },
    {
      category: "Annual Reports",
      icon: FileText,
      items: [
        {
          title: "Annual Report 2023",
          description: "Comprehensive report on programs, impact, and financial statements.",
          type: "PDF",
          size: "5.2 MB",
        },
        {
          title: "Impact Assessment 2023",
          description: "Detailed analysis of program outcomes and beneficiary testimonials.",
          type: "PDF",
          size: "3.4 MB",
        },
        {
          title: "Financial Audit Report 2023",
          description: "Independently audited financial statements and utilization certificates.",
          type: "PDF",
          size: "1.9 MB",
        },
      ],
    },
  ];

  const videos = [
    {
      title: "Understanding Domestic Violence Laws",
      duration: "12:45",
      views: "25K",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop",
    },
    {
      title: "How to File a Legal Complaint",
      duration: "8:30",
      views: "18K",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=225&fit=crop",
    },
    {
      title: "Women's Empowerment Success Stories",
      duration: "15:20",
      views: "42K",
      thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=225&fit=crop",
    },
    {
      title: "Child Rights Awareness Workshop",
      duration: "20:15",
      views: "31K",
      thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=225&fit=crop",
    },
  ];

  const externalLinks = [
    {
      name: "National Commission for Women",
      url: "http://ncw.nic.in/",
      description: "Official government body for women's rights and welfare",
    },
    {
      name: "National Human Rights Commission",
      url: "https://nhrc.nic.in/",
      description: "Independent statutory body for human rights protection",
    },
    {
      name: "Child Rights Portal",
      url: "https://www.childlineindia.org/",
      description: "24/7 helpline and resources for child protection",
    },
    {
      name: "Legal Services Authority",
      url: "https://nalsa.gov.in/",
      description: "Free legal aid services across India",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Access educational materials, legal guides, reports, and helpful resources to empower yourself and your community.
          </p>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Downloadable Materials</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Free educational materials, guides, and reports available for download.
          </p>

          <div className="space-y-12">
            {resources.map((category, catIndex) => (
              <div key={catIndex} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="p-6 hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <FileText className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{item.size}</span>
                        <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Video Resources</h2>
              <p className="text-muted-foreground">Educational videos and awareness content</p>
            </div>
            <Video className="h-12 w-12 text-secondary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/70">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{video.views} views</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Videos
            </Button>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Helpful External Links</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Trusted organizations and government resources for additional support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {externalLinks.map((link, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{link.description}</p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Visit Website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <ExternalLink className="h-6 w-6 text-secondary flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Need Personalized Support?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our team is here to help you access the resources and support you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
