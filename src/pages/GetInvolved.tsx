import { useState } from "react";
import { HandHeart, Users, Briefcase, GraduationCap, Gift, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const GetInvolved = () => {
  const [formType, setFormType] = useState<"volunteer" | "donate" | "partner" | null>(null);
  const [formData, setFormData] = useState({
    // Volunteer form data
    name: "",
    email: "",
    phone: "",
    city: "",
    program: "",
    availability: "",
    skills: "",
    motivation: "",
    
    // Donation form data
    donorName: "",
    donorEmail: "",
    donationType: "",
    donationAmount: "",
    donateProgram: "",
    
    // Partner form data
    orgName: "",
    contactName: "",
    contactEmail: "",
    partnerPhone: "",
    partnerType: "",
    details: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateEmailBody = () => {
    let body = `New ${formType} Form Submission\n\n`;
    body += `Submission Date: ${new Date().toLocaleString()}\n\n`;

    if (formType === "volunteer") {
      body += `VOLUNTEER APPLICATION:\n`;
      body += `Name: ${formData.name}\n`;
      body += `Email: ${formData.email}\n`;
      body += `Phone: ${formData.phone}\n`;
      body += `City: ${formData.city}\n`;
      body += `Preferred Program: ${formData.program}\n`;
      body += `Availability: ${formData.availability}\n`;
      body += `Skills: ${formData.skills}\n`;
      body += `Motivation: ${formData.motivation}\n`;
    } else if (formType === "donate") {
      body += `DONATION INQUIRY:\n`;
      body += `Donor Name: ${formData.donorName}\n`;
      body += `Donor Email: ${formData.donorEmail}\n`;
      body += `Donation Type: ${formData.donationType}\n`;
      body += `Donation Amount: ${formData.donationAmount}\n`;
      body += `Preferred Program: ${formData.donateProgram}\n`;
    } else if (formType === "partner") {
      body += `PARTNERSHIP INQUIRY:\n`;
      body += `Organization: ${formData.orgName}\n`;
      body += `Contact Person: ${formData.contactName}\n`;
      body += `Contact Email: ${formData.contactEmail}\n`;
      body += `Phone: ${formData.partnerPhone}\n`;
      body += `Partnership Type: ${formData.partnerType}\n`;
      body += `Proposal Details: ${formData.details}\n`;
    }

    return encodeURIComponent(body);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const email = "sevasamarpitfoundaiton@gmail.com";
    const subject = encodeURIComponent(`New ${formType} Form Submission`);
    const body = generateEmailBody();
    
    // Redirect to mail client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    toast.success("Thank you for your submission! Opening email client...");
    setFormType(null);
    
    // Reset form data
    setFormData({
      name: "", email: "", phone: "", city: "", program: "", availability: "", skills: "", motivation: "",
      donorName: "", donorEmail: "", donationType: "", donationAmount: "", donateProgram: "",
      orgName: "", contactName: "", contactEmail: "", partnerPhone: "", partnerType: "", details: ""
    });
  };

  const opportunities = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers making a difference in communities.",
      action: () => setFormType("volunteer"),
    },
    {
      icon: Gift,
      title: "Donate",
      description: "Support our programs with one-time or monthly donations.",
      action: () => setFormType("donate"),
    },
    {
      icon: Briefcase,
      title: "Corporate Partnership",
      description: "Partner with us for CSR initiatives and social impact programs.",
      action: () => setFormType("partner"),
    },
    {
      icon: GraduationCap,
      title: "Internships",
      description: "Gain hands-on experience in human rights and social work.",
      action: () => setFormType("volunteer"),
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Participate in our awareness campaigns, workshops, and fundraisers.",
      action: () => setFormType("volunteer"),
    },
    {
      icon: Users,
      title: "Resource Drives",
      description: "Contribute books, clothing, or other resources for our beneficiaries.",
      action: () => setFormType("donate"),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your support can transform lives. Whether through time, resources, or expertise, 
            there are many ways to join our mission of empowering communities.
          </p>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Ways to Contribute</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {opportunities.map((opp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={opp.action}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <opp.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{opp.title}</h3>
                <p className="text-muted-foreground mb-4">{opp.description}</p>
                <Button variant="link" className="text-primary p-0 group-hover:gap-2 transition-all">
                  Learn More →
                </Button>
              </Card>
            ))}
          </div>

          {/* Forms Section */}
          {formType === "volunteer" && (
            <div className="max-w-2xl mx-auto animate-fade-in">
              <Card className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-6">Volunteer Application</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input 
                        id="city" 
                        required 
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="program">Preferred Program Area</Label>
                    <Select onValueChange={(value) => handleSelectChange("program", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="women">Women Empowerment</SelectItem>
                        <SelectItem value="child">Child Rights</SelectItem>
                        <SelectItem value="legal">Legal Aid</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="health">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability (hours per week)</Label>
                    <Select onValueChange={(value) => handleSelectChange("availability", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5-10 hours</SelectItem>
                        <SelectItem value="10">10-15 hours</SelectItem>
                        <SelectItem value="15">15-20 hours</SelectItem>
                        <SelectItem value="20">20+ hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="skills">Skills & Experience</Label>
                    <Textarea 
                      id="skills" 
                      rows={4} 
                      placeholder="Tell us about relevant skills or experience..." 
                      value={formData.skills}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                    <Textarea 
                      id="motivation" 
                      rows={4} 
                      required 
                      value={formData.motivation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                      Submit Application
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setFormType(null)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          )}

          {formType === "donate" && (
            <div className="max-w-2xl mx-auto animate-fade-in">
              <Card className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-6">Make a Donation</h3>
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  {/* Donation Type */}
                  <div>
                    <Label className="text-lg mb-4 block">Donation Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card 
                        className={`p-4 cursor-pointer hover:border-primary transition-colors border-2 ${
                          formData.donationType === "one-time" ? "border-primary" : ""
                        }`}
                        onClick={() => handleSelectChange("donationType", "one-time")}
                      >
                        <h4 className="font-semibold mb-2">One-Time Donation</h4>
                        <p className="text-sm text-muted-foreground">Make an immediate impact</p>
                      </Card>
                      <Card 
                        className={`p-4 cursor-pointer hover:border-primary transition-colors border-2 ${
                          formData.donationType === "monthly" ? "border-primary" : ""
                        }`}
                        onClick={() => handleSelectChange("donationType", "monthly")}
                      >
                        <h4 className="font-semibold mb-2">Monthly Donation</h4>
                        <p className="text-sm text-muted-foreground">Sustained support for our programs</p>
                      </Card>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <Label className="text-lg mb-4 block">Select Amount</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {[500, 1000, 2500, 5000].map((amount) => (
                        <Button 
                          key={amount} 
                          type="button"
                          variant={formData.donationAmount === amount.toString() ? "default" : "outline"}
                          className="h-16 text-lg font-semibold"
                          onClick={() => handleSelectChange("donationAmount", amount.toString())}
                        >
                          ₹{amount}
                        </Button>
                      ))}
                    </div>
                    <Input 
                      type="number" 
                      placeholder="Custom amount" 
                      className="text-lg" 
                      value={formData.donationAmount}
                      onChange={(e) => handleSelectChange("donationAmount", e.target.value)}
                    />
                  </div>

                  {/* Program Selection */}
                  <div>
                    <Label htmlFor="donateProgram">Choose Program (Optional)</Label>
                    <Select onValueChange={(value) => handleSelectChange("donateProgram", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Where it's needed most" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Where needed most</SelectItem>
                        <SelectItem value="women">Women Empowerment</SelectItem>
                        <SelectItem value="child">Child Rights</SelectItem>
                        <SelectItem value="legal">Legal Aid</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Donor Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donorName">Full Name *</Label>
                      <Input 
                        id="donorName" 
                        required 
                        value={formData.donorName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="donorEmail">Email *</Label>
                      <Input 
                        id="donorEmail" 
                        type="email" 
                        required 
                        value={formData.donorEmail}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-primary hover:bg-primary-hover text-primary-foreground flex-1">
                      Proceed to Email
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setFormType(null)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          )}

          {formType === "partner" && (
            <div className="max-w-2xl mx-auto animate-fade-in">
              <Card className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-6">Partnership Inquiry</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="orgName">Organization Name *</Label>
                    <Input 
                      id="orgName" 
                      required 
                      value={formData.orgName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName">Contact Person *</Label>
                      <Input 
                        id="contactName" 
                        required 
                        value={formData.contactName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactEmail">Email *</Label>
                      <Input 
                        id="contactEmail" 
                        type="email" 
                        required 
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="partnerPhone">Phone Number *</Label>
                    <Input 
                      id="partnerPhone" 
                      type="tel" 
                      required 
                      value={formData.partnerPhone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="partnerType">Partnership Type</Label>
                    <Select onValueChange={(value) => handleSelectChange("partnerType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csr">CSR Initiative</SelectItem>
                        <SelectItem value="funding">Funding/Grants</SelectItem>
                        <SelectItem value="inkind">In-kind Donation</SelectItem>
                        <SelectItem value="skills">Skills-based Volunteering</SelectItem>
                        <SelectItem value="awareness">Awareness Campaign</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="details">Partnership Proposal *</Label>
                    <Textarea 
                      id="details" 
                      rows={6} 
                      placeholder="Tell us about your organization and partnership ideas..." 
                      required 
                      value={formData.details}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                      Submit Inquiry
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setFormType(null)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Your Impact Matters</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Every contribution, whether time or resources, creates ripples of change. Join thousands of supporters 
            who are making a real difference in the lives of women, children, and communities across the nation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹500</div>
              <p className="text-muted-foreground">Provides education materials for 5 children</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹2000</div>
              <p className="text-muted-foreground">Vocational training for 1 woman</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹5000</div>
              <p className="text-muted-foreground">Legal aid support for 3 families</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;