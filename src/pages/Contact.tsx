import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:sevasamarpitfoundaiton@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    toast.success("Redirecting to your email client...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const offices = [
    
    {
      name: "Head Office - Basudeo Vihar",
      address: "Basudeo Vihar Apartment, Patna, Bihar 800001",
      phone: "+91-79924 81330",
      email: "sevasamarpitfoundaiton@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
  
    {
      name: "Head Office - Human Rights Welfare Organization",
      address: "Kurukshetra, Haryana - 136118",
      phone: "+91-79924 81330",
      email: "sevasamarpitfoundaiton@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapLink: "https://maps.google.com/?q=Kurukshetra,Haryana",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.0928571575314!2d76.994299!3d29.6877069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e70056aaaaaab%3A0x438c1eb5ace74a08!2sHuman%20Rights%20Welfare%20Organization!5e1!3m2!1sen!2sin!4v1762797870590!5m2!1sen!2sin"
    },
    
  ];

  const faqs = [
    {
      question: "How can I volunteer with NHRWWO?",
      answer: "Visit our Get Involved page and fill out the volunteer application form. We'll contact you within 48 hours.",
    },
    {
      question: "Do you provide legal aid services?",
      answer: "Yes, we offer free legal consultation and representation for cases related to human rights violations, domestic violence, and child rights.",
    },
    {
      question: "How can I report an emergency situation?",
      answer: "Call our 24/7 emergency helpline at +91-79924 81330 or visit our Emergency Help page for immediate assistance.",
    },
    {
      question: "Are donations tax-deductible?",
      answer: "Yes, NHRWWO is registered under 80G and all donations are eligible for tax exemptions as per government regulations.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Have questions, need support, or want to get involved? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                          <SelectItem value="legal">Legal Assistance</SelectItem>
                          <SelectItem value="complaint">Complaint/Concern</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="donation">Donation Information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address (Optional)</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your city/region"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
                  >
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24-48 hours during business days.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24/7 Helpline</h3>
                    <p className="text-muted-foreground text-sm mb-1">Emergency: +91-79924 81330</p>
                    <p className="text-muted-foreground text-sm">General: +91-79924 81330</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-1">sevasamarpitfoundaiton@gmail.com</p>
                    <p className="text-muted-foreground text-sm">sevasamarpitfoundaiton@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">Nageshwar Colony, Patna</p>
                    <p className="text-muted-foreground text-sm">India, Bihar - 110001</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
                <Clock className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2 text-lg">Office Hours</h3>
                <p className="text-sm mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm mb-1">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-sm">Sunday: Closed</p>
                <p className="text-sm mt-3 font-semibold">Emergency Helpline: Available 24/7</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Our Offices</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Regional offices serving communities across the nation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{office.name}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Quick answers to common questions. Can't find what you're looking for? Contact us directly.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
