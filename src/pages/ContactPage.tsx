import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { useState } from 'react';
import { useContactForm, usePartnershipInquiry } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { getImageUrl } from '@/lib/images';

export default function ContactPage() {
  const [generalForm, setGeneralForm] = useState({ name: '', email: '', message: '' });
  const [partnershipForm, setPartnershipForm] = useState({ companyName: '', contactPerson: '', email: '', message: '' });

  const contactMutation = useContactForm();
  const partnershipMutation = usePartnershipInquiry();

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactMutation.mutateAsync(generalForm);
      toast.success('Thank you! Your message has been sent successfully.');
      setGeneralForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handlePartnershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await partnershipMutation.mutateAsync(partnershipForm);
      toast.success('Thank you! We will get back to you soon regarding partnership opportunities.');
      setPartnershipForm({ companyName: '', contactPerson: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send inquiry. Please try again.');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${getImageUrl('/assets/generated/team-collaboration.dim_800x500.jpg')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-lg text-white/90">
              We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="general">General Inquiry</TabsTrigger>
                <TabsTrigger value="partnership">CSR/Partnership</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleGeneralSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={generalForm.name}
                          onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={generalForm.email}
                          onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          value={generalForm.message}
                          onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" disabled={contactMutation.isPending}>
                        {contactMutation.isPending ? 'Sending...' : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="partnership">
                <Card>
                  <CardHeader>
                    <CardTitle>Partnership Inquiry</CardTitle>
                    <CardDescription>
                      Interested in partnering with us? Let's discuss how we can work together
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePartnershipSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company/Organization Name *</Label>
                        <Input
                          id="companyName"
                          placeholder="Your organization"
                          value={partnershipForm.companyName}
                          onChange={(e) => setPartnershipForm({ ...partnershipForm, companyName: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactPerson">Contact Person *</Label>
                        <Input
                          id="contactPerson"
                          placeholder="Your full name"
                          value={partnershipForm.contactPerson}
                          onChange={(e) => setPartnershipForm({ ...partnershipForm, contactPerson: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partnershipEmail">Email *</Label>
                        <Input
                          id="partnershipEmail"
                          type="email"
                          placeholder="your.email@company.com"
                          value={partnershipForm.email}
                          onChange={(e) => setPartnershipForm({ ...partnershipForm, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partnershipMessage">Tell us about your interest *</Label>
                        <Textarea
                          id="partnershipMessage"
                          placeholder="Describe your partnership goals and how you'd like to collaborate..."
                          rows={6}
                          value={partnershipForm.message}
                          onChange={(e) => setPartnershipForm({ ...partnershipForm, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" disabled={partnershipMutation.isPending}>
                        {partnershipMutation.isPending ? 'Sending...' : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Inquiry
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Other Ways to Reach Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Mail className="mb-2 h-8 w-8 text-c2r-primary" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>General: info@connect2roots.org</p>
                  <p>Partnerships: partnerships@connect2roots.org</p>
                  <p>Media: press@connect2roots.org</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="mb-2 h-8 w-8 text-c2r-primary" />
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>Main Office: +1 (555) 123-4567</p>
                  <p>Toll Free: 1-800-C2R-HELP</p>
                  <p>Hours: Mon-Fri, 9AM-5PM EST</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="mb-2 h-8 w-8 text-c2r-primary" />
                  <CardTitle>Office Address</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Connect2Roots Foundation</p>
                  <p>123 Impact Street, Suite 400</p>
                  <p>Community City, CC 12345</p>
                  <p>United States</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Visit Our Office</CardTitle>
                <CardDescription>Find us on the map</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="mx-auto mb-2 h-12 w-12" />
                    <p>Map integration placeholder</p>
                    <p className="text-sm">123 Impact Street, Suite 400, Community City, CC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Connect on Social Media</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Follow us for updates, success stories, and community news
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary text-white transition-transform hover:scale-110">
                <SiFacebook className="h-8 w-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary text-white transition-transform hover:scale-110">
                <SiX className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary text-white transition-transform hover:scale-110">
                <SiLinkedin className="h-8 w-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-16 w-16 items-center justify-center rounded-full bg-c2r-primary text-white transition-transform hover:scale-110">
                <SiInstagram className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
