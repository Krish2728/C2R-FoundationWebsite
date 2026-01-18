import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useCreateDonation } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { Heart, Users, BookOpen, TrendingUp, Shield, Check } from 'lucide-react';
import { getImageUrl } from '@/lib/images';

const donationTiers = [
  {
    amount: 500,
    title: 'Support One Student Session',
    description: 'Fund a single mentorship session for a student',
    icon: Users,
  },
  {
    amount: 1000,
    title: 'Fund Weekly Mentorship',
    description: 'Enable a week of guidance and support',
    icon: BookOpen,
  },
  {
    amount: 2500,
    title: 'Enable Skills Training',
    description: 'Provide comprehensive skill development',
    icon: TrendingUp,
  },
  {
    amount: 5000,
    title: 'Transform a Career Path',
    description: 'Complete mentorship journey for one student',
    icon: Heart,
  },
];

export default function DonatePage() {
  const navigate = useNavigate();
  const createDonation = useCreateDonation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [error, setError] = useState('');

  const handleTierSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setError('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
    setError('');
  };

  const handleDonate = async () => {
    const amount = selectedAmount || parseInt(customAmount);

    if (!amount || isNaN(amount)) {
      setError('Please select or enter a donation amount');
      return;
    }

    if (amount < 500) {
      setError('Minimum donation amount is Rs. 500');
      return;
    }

    if (!donorName.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!donorEmail.trim() || !donorEmail.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      // Convert to paise (multiply by 100)
      const amountInPaise = BigInt(amount * 100);
      const result = await createDonation.mutateAsync({
        amount: amountInPaise,
        donorName,
        donorEmail,
      });
      
      // Redirect to checkout (in production, this would be Stripe checkout URL)
      // For demo, redirect to success page
      window.location.href = result.checkoutUrl;
    } catch (err: any) {
      console.error('Donation error:', err);
      toast.error(err.message || 'Failed to process donation. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getImageUrl('/assets/generated/donation-impact.dim_600x400.jpg')}
            alt="Donation Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
        <div className="relative z-10 container text-center text-white px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Support Creates Lasting Change
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Every donation helps bridge the gap between talent and opportunity, empowering young minds to build brighter futures.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The Impact of Your Generosity
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              See how your contributions transform lives and create opportunities
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0.1}>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-c2r-accent mb-2">
                    <AnimatedCounter end={2000} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">Students Mentored</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-c2r-accent mb-2">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">Volunteer Mentors</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-c2r-accent mb-2">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">Partner Colleges</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.2}>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={getImageUrl('/assets/generated/volunteer-mentoring.dim_800x500.jpg')}
                  alt="Volunteer Mentoring"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={getImageUrl('/assets/generated/skill-development.dim_600x400.jpg')}
                  alt="Skill Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Donation Tiers Section */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Choose Your Impact
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Select a donation tier or enter a custom amount
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier, index) => (
              <ScrollReveal key={tier.amount} delay={index * 0.1}>
                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedAmount === tier.amount
                      ? 'ring-2 ring-c2r-accent border-c2r-accent'
                      : ''
                  }`}
                  onClick={() => handleTierSelect(tier.amount)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <tier.icon className="h-8 w-8 text-c2r-accent" />
                      {selectedAmount === tier.amount && (
                        <Check className="h-6 w-6 text-c2r-accent" />
                      )}
                    </div>
                    <CardTitle className="text-2xl">₹{tier.amount}</CardTitle>
                    <CardDescription className="font-semibold text-foreground">
                      {tier.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Donation Form */}
          <ScrollReveal delay={0.4}>
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Complete Your Donation</CardTitle>
                <CardDescription>
                  Enter your details to proceed with the donation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="customAmount">Custom Amount (₹)</Label>
                  <Input
                    id="customAmount"
                    type="number"
                    placeholder="Enter amount (minimum ₹500)"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    min="500"
                  />
                  {customAmount && parseInt(customAmount) < 500 && (
                    <p className="text-sm text-destructive">
                      Minimum donation amount is Rs. 500
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donorName">Your Name *</Label>
                  <Input
                    id="donorName"
                    type="text"
                    placeholder="Enter your name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donorEmail">Your Email *</Label>
                  <Input
                    id="donorEmail"
                    type="email"
                    placeholder="Enter your email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                    {error}
                  </div>
                )}

                <Button
                  onClick={handleDonate}
                  disabled={createDonation.isPending}
                  className="w-full"
                  size="lg"
                >
                  {createDonation.isPending ? 'Processing...' : 'Proceed to Payment'}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Secure payment powered by Stripe</span>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Your Donation Matters Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Your Donation Matters
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-c2r-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-c2r-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Direct Impact on Students</h3>
                  <p className="text-muted-foreground">
                    Your contribution directly funds mentorship sessions, skill development programs, and career guidance for students who lack access to such opportunities.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-c2r-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-c2r-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Growth</h3>
                  <p className="text-muted-foreground">
                    We invest in long-term solutions that create lasting change, building a robust ecosystem of mentors, partners, and resources.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-c2r-accent/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-c2r-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Transformation</h3>
                  <p className="text-muted-foreground">
                    Every student we help becomes a catalyst for change in their community, creating a ripple effect of positive impact.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
