import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                At National Human Rights & Women Welfare Organizations (NHRWWO), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-muted-foreground">
                By accessing our website and using our services, you consent to the practices described in this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Information We Collect</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-primary" />
                  Personal Information
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Name and contact details (email address, phone number, address)</li>
                  <li>Demographic information (age, gender, location)</li>
                  <li>Payment information for donations (processed securely through UPI)</li>
                  <li>Communication preferences</li>
                  <li>Information you provide when volunteering or applying for programs</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-primary" />
                  Automatically Collected Information
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data through cookies and similar technologies</li>
                  <li>Pages visited and time spent on our website</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Primary Uses</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Process donations and maintain records</li>
                    <li>• Communicate about our programs and events</li>
                    <li>• Respond to inquiries and provide support</li>
                    <li>• Improve our website and services</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Additional Uses</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Send newsletters and updates (with consent)</li>
                    <li>• Conduct research and analysis</li>
                    <li>• Ensure compliance with legal obligations</li>
                    <li>• Protect against fraud and abuse</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing and Disclosure */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>With trusted service providers who assist our operations (payment processors, email services)</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>During organizational audits or legal proceedings</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Encryption</h4>
                  <p className="text-sm text-muted-foreground mt-2">SSL encryption for data transmission</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Access Control</h4>
                  <p className="text-sm text-muted-foreground mt-2">Limited access to authorized personnel</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Monitoring</h4>
                  <p className="text-sm text-muted-foreground mt-2">Regular security assessments</p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Rights</h2>
              <p className="text-muted-foreground mb-6">
                You have the following rights regarding your personal information:
              </p>
              <div className="bg-muted/30 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Access & Control</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Right to access your personal data</li>
                      <li>• Right to correct inaccurate data</li>
                      <li>• Right to delete your data</li>
                      <li>• Right to restrict processing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Communication & Objection</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Right to object to processing</li>
                      <li>• Right to data portability</li>
                      <li>• Right to withdraw consent</li>
                      <li>• Right to opt-out of marketing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookie preferences through your browser settings. However, disabling cookies may affect some website features.
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. This Privacy Policy applies only to our website. We are not responsible for the privacy practices or content of third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending email notifications for significant changes (where appropriate)</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">sevasamarpitfoundaiton@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+91-79924 81330</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Data Protection Officer:</strong><br />
                    National Human Rights & Women Welfare Organizations<br />
                    Basudeo Vihar Apartment, Patna, Bihar<br />
                    800001
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Navigation */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;