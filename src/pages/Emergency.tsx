import { useState } from "react";
import { Phone, AlertTriangle, Shield, MapPin, FileText, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Emergency = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    incidentType: "",
    location: "",
    incidentDate: "",
    details: "",
    assistance: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const subject = "Confidential Emergency Report";
    const body = `
CONFIDENTIAL EMERGENCY REPORT

${isAnonymous ? "**Reported Anonymously**" : `**Reporter Information:**
Name: ${formData.name || "Not provided"}
Contact: ${formData.phone || "Not provided"}`}

**Incident Details:**
Type: ${formData.incidentType || "Not specified"}
Location: ${formData.location || "Not specified"}
Timeframe: ${formData.incidentDate || "Not specified"}

**Incident Description:**
${formData.details || "No details provided"}

**Assistance Required:**
${formData.assistance || "Not specified"}

**Report Submitted:** ${new Date().toLocaleString()}
    `.trim();

    // Encode the email content for mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    // Create mailto link
    const mailtoLink = `mailto:sevasamarpitfoundaiton@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Redirect to email client
    window.location.href = mailtoLink;
    
    toast.success("Opening email client with your report details. Please send the email to submit.");
  };

  const emergencyNumbers = [
    {
      title: "24/7 Crisis Helpline",
      number: "+91-79924 81330",
      description: "Immediate support for all emergencies",
      available: "Available 24/7",
    },
    {
      title: "Women's Helpline",
      number: "1091",
      description: "Government helpline for women in distress",
      available: "24/7",
    },
    {
      title: "Child Helpline",
      number: "1098",
      description: "For child abuse, trafficking, or emergency",
      available: "24/7",
    },
    {
      title: "Police Emergency",
      number: "100",
      description: "Immediate police assistance",
      available: "24/7",
    },
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Ensure Your Safety",
      description: "Move to a safe location if possible. If in immediate danger, call police (100) first.",
      icon: Shield,
    },
    {
      step: 2,
      title: "Contact Emergency Helpline",
      description: "Call our 24/7 helpline at +91-79924 81330 for immediate assistance.",
      icon: Phone,
    },
    {
      step: 3,
      title: "Document the Situation",
      description: "If safe, take photos of injuries or evidence. Keep all relevant documents.",
      icon: FileText,
    },
    {
      step: 4,
      title: "Report to Authorities",
      description: "File a formal complaint with police. We can provide legal aid and accompaniment.",
      icon: AlertTriangle,
    },
  ];

  const shelterLocations = [
    {
      name: "Head Office - Basudeo Vihar",
      address: "Basudeo Vihar Apartment, Patna, Bihar 800001",
      phone: "+91-79924 81330",
      capacity: "24/7 Emergency Shelter",
      mapLink: "https://maps.google.com/?q=Basudeo+Vihar+Apartment,Patna,Bihar",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.796668188462!2d85.12199249999999!3d25.611672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59005635afb9%3A0x99acd0be89532270!2sBasudeo%20Vihar%20Apartment!5e0!3m2!1sen!2sin!4v1762693568694!5m2!1sen!2sin"
    },
    {
      name: "Head Office - Human Rights Welfare Organization",
      address: "Kurukshetra, Haryana - 136118",
      phone: "+91 99999 99999",
      email: "info@nhrwwo.org",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      mapLink: "https://maps.google.com/?q=Kurukshetra,Haryana",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.0928571575314!2d76.994299!3d29.6877069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e70056aaaaaab%3A0x438c1eb5ace74a08!2sHuman%20Rights%20Welfare%20Organization!5e1!3m2!1sen!2sin!4v1762797870590!5m2!1sen!2sin"
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Emergency Alert Banner */}
      <section className="py-6 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <AlertTriangle className="h-6 w-6 animate-pulse" />
            <h2 className="text-2xl font-bold">EMERGENCY ASSISTANCE</h2>
          </div>
          <p className="text-lg">If you're in immediate danger, call 100 (Police) or +91-79924 81330</p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Emergency Help
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We're here for you 24/7. Access immediate support, crisis intervention, and emergency services.
          </p>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Emergency Contact Numbers</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Save these numbers for immediate assistance. All services are free and confidential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyNumbers.map((contact, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{contact.title}</h3>
                <a href={`tel:${contact.number.replace(/[^0-9]/g, '')}`} className="text-3xl font-bold text-primary mb-3 block hover:underline">
                  {contact.number}
                </a>
                <p className="text-sm text-muted-foreground mb-2">{contact.description}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-green-600 font-semibold">
                  <Clock className="h-3 w-3" />
                  {contact.available}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Steps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">What to Do in an Emergency</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Follow these steps to ensure your safety and get the help you need.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencySteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <step.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Reporting Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">Confidential Reporting</h2>
            <p className="text-center text-muted-foreground mb-8">
              Report an incident confidentially. Our team will respond within 2 hours.
            </p>

            <Card className="p-8">
              <form onSubmit={handleEmergencySubmit} className="space-y-6">
                <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
                  <Checkbox
                    id="anonymous"
                    checked={isAnonymous}
                    onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                  />
                  <label htmlFor="anonymous" className="text-sm font-medium cursor-pointer">
                    I want to report anonymously
                  </label>
                </div>

                {!isAnonymous && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reportName">Your Name</Label>
                      <Input 
                        id="reportName" 
                        placeholder="Optional if not anonymous" 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="reportPhone">Contact Number</Label>
                      <Input 
                        id="reportPhone" 
                        type="tel" 
                        placeholder="For follow-up" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="incidentType">Incident Type *</Label>
                  <Select 
                    required
                    onValueChange={(value) => handleInputChange('incidentType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="domestic">Domestic Violence</SelectItem>
                      <SelectItem value="assault">Sexual Assault</SelectItem>
                      <SelectItem value="child">Child Abuse</SelectItem>
                      <SelectItem value="trafficking">Human Trafficking</SelectItem>
                      <SelectItem value="harassment">Workplace Harassment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Location of Incident</Label>
                  <Input 
                    id="location" 
                    placeholder="City or area" 
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="incidentDate">When did this occur?</Label>
                  <Select
                    onValueChange={(value) => handleInputChange('incidentDate', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="now">Happening now</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This week</SelectItem>
                      <SelectItem value="month">This month</SelectItem>
                      <SelectItem value="earlier">Earlier</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="details">Incident Details *</Label>
                  <Textarea
                    id="details"
                    rows={6}
                    placeholder="Please describe what happened. Include as much detail as you're comfortable sharing."
                    required
                    value={formData.details}
                    onChange={(e) => handleInputChange('details', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="assistance">What kind of help do you need?</Label>
                  <Select
                    onValueChange={(value) => handleInputChange('assistance', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select assistance needed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="legal">Legal Aid</SelectItem>
                      <SelectItem value="shelter">Emergency Shelter</SelectItem>
                      <SelectItem value="counseling">Counseling Support</SelectItem>
                      <SelectItem value="medical">Medical Assistance</SelectItem>
                      <SelectItem value="police">Police Complaint Support</SelectItem>
                      <SelectItem value="all">Comprehensive Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg text-sm text-muted-foreground">
                  <p className="font-semibold mb-1">Your privacy is protected:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>All reports are encrypted and confidential</li>
                    <li>We never share information without your consent</li>
                    <li>You can remain anonymous throughout the process</li>
                    <li>Report will be sent securely via email</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
                >
                  Submit Confidential Report
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Shelter Locations with Maps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Emergency Office Locations
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Safe spaces providing immediate support services.
          </p>

          {/* Location Cards and Maps Grid */}
          <div className="max-w-6xl mx-auto space-y-12">
            {shelterLocations.map((shelter, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                {/* Map on left for even index, right for odd index */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-2xl h-full">
                    <iframe
                      src={shelter.mapEmbed}
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      title={`Location map for ${shelter.name}`}
                    ></iframe>
                  </div>
                </div>

                {/* Card on right for even index, left for odd index */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 h-full">
                    <div className="flex flex-col items-center h-full">
                      <MapPin className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                        {shelter.name}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4 flex-grow text-center">
                        <p>{shelter.address}</p>
                        <p className="font-semibold text-foreground">{shelter.phone}</p>
                        {shelter.email && (
                          <p className="text-blue-600">{shelter.email}</p>
                        )}
                        {shelter.capacity && (
                          <p className="text-primary font-semibold">{shelter.capacity}</p>
                        )}
                        {shelter.hours && (
                          <p className="text-green-600">{shelter.hours}</p>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-auto"
                        size="sm"
                        onClick={() => window.open(shelter.mapLink, "_blank")}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;