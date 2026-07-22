import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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
    const mailtoLink = `mailto:sevasamarpitfoundaiton@gmail.com?subject=${encodeURIComponent(formData.subject || "General Inquiry")}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    toast.success("Redirecting to your email client...");
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
      name: "Bihar Regional Office",
      address: "Basudeo Vihar Apartment, Patna, Bihar 800001",
      phone: "+91-79924 81330",
      email: "sevasamarpitfoundaiton@gmail.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
      name: "Haryana Liaison Office",
      address: "Kurukshetra, Haryana - 136118",
      phone: "+91-79924 81330",
      email: "sevasamarpitfoundaiton@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
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
    <div className="min-h-screen bg-background overflow-hidden pt-12">
      
      {/* 1. Hero Section */}
      <section className="relative py-28 bg-white border-b border-zinc-150 bg-noise">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[12vw] font-serif font-black text-zinc-100/30 leading-none">
          CONTACT
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-left">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary border-l-2 border-primary pl-3">
              Reach Out
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-foreground leading-none text-balance">
              Get in touch <span className="italic text-primary font-normal">with us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed text-balance max-w-3xl">
              Have questions, need legal support, or want to partner with us? Fill out the form below or contact our regional offices.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact form & Details Grid */}
      <section className="py-24 bg-white border-b border-zinc-150">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form Left */}
            <div className="lg:col-span-8 border border-zinc-200 p-8 md:p-12 bg-zinc-50 bg-noise text-left relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-foreground mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-650">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="rounded-none border-zinc-300 focus-visible:ring-primary focus-visible:ring-1"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-650">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="rounded-none border-zinc-300 focus-visible:ring-primary focus-visible:ring-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-650">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="rounded-none border-zinc-300 focus-visible:ring-primary focus-visible:ring-1"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-650">Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger className="rounded-none border-zinc-300">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                        <SelectItem value="legal">Legal Assistance</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="donation">Donation Information</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-zinc-650">Address (Optional)</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your city/region"
                    className="rounded-none border-zinc-300 focus-visible:ring-primary focus-visible:ring-1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-650">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="rounded-none border-zinc-300 focus-visible:ring-primary focus-visible:ring-1"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest py-6 rounded-none transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Quick Cards Right */}
            <div className="lg:col-span-4 space-y-8 text-left">
              
              {/* Emergency Box */}
              <div className="border border-primary/20 bg-primary/5 p-8 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Crisis Contact</span>
                <h3 className="text-xl font-serif font-black text-foreground">24/7 Helpline</h3>
                <div className="h-[1px] bg-primary/20 w-12"></div>
                <p className="text-sm text-zinc-550 leading-relaxed font-light">
                  If you are reporting a critical legal concern, domestic violence, or human trafficking issue, call our helpline directly.
                </p>
                <div className="text-lg font-mono font-bold text-primary">
                  +91-79924 81330
                </div>
              </div>

              {/* General Mailbox */}
              <div className="border border-zinc-200 bg-zinc-50 p-8 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Inbox</span>
                <h3 className="text-xl font-serif font-black text-foreground">Email Support</h3>
                <div className="h-[1px] bg-zinc-200 w-12"></div>
                <p className="text-sm text-muted-foreground font-light break-words">
                  sevasamarpitfoundaiton@gmail.com
                </p>
              </div>

              {/* Office hours */}
              <div className="border border-zinc-200 p-8 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Working Hours</span>
                <h3 className="text-xl font-serif font-black text-foreground">Office Timing</h3>
                <div className="h-[1px] bg-zinc-200 w-12"></div>
                <ul className="text-sm text-muted-foreground font-sans font-light space-y-2">
                  <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Regional Offices Asymmetric Grid */}
      <section className="py-24 bg-zinc-50/50 border-b border-zinc-150">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Our Regional Offices
            </h2>
            <div className="h-[2px] w-12 bg-secondary/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-white border border-zinc-200 p-8 text-left shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Office {index + 1}</span>
                  <h3 className="text-xl font-serif font-bold text-foreground">{office.name}</h3>
                  <div className="h-[1px] bg-zinc-150 w-8"></div>
                  
                  <div className="space-y-3 text-sm text-muted-foreground font-light">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4.5 w-4.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                      <span className="break-all">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Information
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="h-[2px] w-12 bg-primary/30 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-zinc-200 pb-6 text-left"
              >
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
