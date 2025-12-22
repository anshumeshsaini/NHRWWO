import { Link } from "react-router-dom";
import { Cookie, Settings, Shield, Eye, Trash2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CookiePolicy = () => {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const handleCookiePreferenceChange = (type) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveCookiePreferences = () => {
    // In a real implementation, you would save these preferences to localStorage/cookies
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowCookieSettings(false);
    alert('Your cookie preferences have been saved successfully.');
  };

  const resetCookiePreferences = () => {
    setCookiePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Cookie className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
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
              <h2 className="text-2xl font-bold text-foreground mb-6">What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and showing you relevant content.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Cookie Consent</h4>
                    <p className="text-blue-800 text-sm">
                      By using our website, you consent to the use of necessary cookies. For other types of cookies, we will ask for your consent before placing them on your device.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Cookies We Use */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-red-500" />
                    Strictly Necessary Cookies
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </p>
                  <div className="bg-muted/50 p-4 rounded">
                    <h4 className="font-semibold text-foreground mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Session management and security</li>
                      <li>Load balancing and performance</li>
                      <li>Remembering cookie preferences</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-blue-500" />
                    Analytics Cookies
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <div className="bg-muted/50 p-4 rounded">
                    <h4 className="font-semibold text-foreground mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Counting visits and traffic sources</li>
                      <li>Understanding which pages are most popular</li>
                      <li>Identifying user behavior patterns</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-green-500" />
                    Preference Cookies
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                  </p>
                  <div className="bg-muted/50 p-4 rounded">
                    <h4 className="font-semibold text-foreground mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Remembering your language preference</li>
                      <li>Storing accessibility settings</li>
                      <li>Remembering your region or location</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                    <Cookie className="h-5 w-5 mr-2 text-purple-500" />
                    Marketing Cookies
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                  </p>
                  <div className="bg-muted/50 p-4 rounded">
                    <h4 className="font-semibold text-foreground mb-2">Examples:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Social media integration cookies</li>
                      <li>Advertising campaign tracking</li>
                      <li>Retargeting and audience building</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookie Duration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cookie Duration</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-muted/30 rounded-lg">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold text-foreground">Cookie Type</th>
                      <th className="text-left p-4 font-semibold text-foreground">Duration</th>
                      <th className="text-left p-4 font-semibold text-foreground">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium text-foreground">Session Cookies</td>
                      <td className="p-4 text-muted-foreground">Until browser closed</td>
                      <td className="p-4 text-muted-foreground">Temporary session management</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium text-foreground">Preference Cookies</td>
                      <td className="p-4 text-muted-foreground">Up to 1 year</td>
                      <td className="p-4 text-muted-foreground">Remembering user settings</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium text-foreground">Analytics Cookies</td>
                      <td className="p-4 text-muted-foreground">Up to 2 years</td>
                      <td className="p-4 text-muted-foreground">Website usage analysis</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-foreground">Marketing Cookies</td>
                      <td className="p-4 text-muted-foreground">Up to 1 year</td>
                      <td className="p-4 text-muted-foreground">Advertising and retargeting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Some cookies on our website are placed by third-party services that appear on our pages. We have no control over these cookies and they are subject to the respective privacy policies of these third parties.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Common Third-Party Services</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Google Analytics (Analytics)</li>
                    <li>• YouTube (Video embedding)</li>
                    <li>• Social media platforms (Sharing buttons)</li>
                    <li>• Payment processors (Donation processing)</li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Your Control</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You can block third-party cookies</li>
                    <li>• Adjust browser settings for privacy</li>
                    <li>• Use opt-out tools where available</li>
                    <li>• Review third-party privacy policies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
           

            {/* Browser-Specific Instructions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Browser-Specific Instructions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Google Chrome</h4>
                  <p className="text-sm text-muted-foreground">
                    Settings → Privacy and Security → Cookies and other site data
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Mozilla Firefox</h4>
                  <p className="text-sm text-muted-foreground">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Safari</h4>
                  <p className="text-sm text-muted-foreground">
                    Preferences → Privacy → Cookies and website data
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Microsoft Edge</h4>
                  <p className="text-sm text-muted-foreground">
                    Settings → Privacy, search, and services → Cookies
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Opera</h4>
                  <p className="text-sm text-muted-foreground">
                    Settings → Advanced → Privacy & security → Cookies
                  </p>
                </div>
              </div>
            </section>

            {/* Updates to Cookie Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Updates to This Cookie Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our services. We will notify you of any significant changes by:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Updating the "Last updated" date at the top of this policy</li>
                <li>Posting a notice on our website</li>
                <li>Where required by law, seeking your renewed consent</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Cookie className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Cookie Questions</h4>
                      <p className="text-muted-foreground">sevasamarpitfoundaiton@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Data Protection</h4>
                      <p className="text-muted-foreground">sevasamarpitfoundaiton@gmail.com</p>
                    </div>
                  </div>
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

export default CookiePolicy;