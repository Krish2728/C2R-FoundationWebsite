import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Users, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxSection } from '@/components/ParallaxSection';
import { StoryCard } from '@/components/StoryCard';
import { ChapterHeader } from '@/components/ChapterHeader';
import { getImageUrl } from '@/lib/images';

export default function MentorshipPage() {
  const navigate = useNavigate();

  const studentBenefits = [
    'Personalized career guidance from experienced professionals',
    'Industry insights and real-world advice',
    'Networking opportunities and professional connections',
    'Resume review and interview preparation',
    'Goal setting and accountability support',
    'Confidence building and skill development',
  ];

  const mentorBenefits = [
    'Make a meaningful impact on someone\'s life',
    'Develop leadership and coaching skills',
    'Expand your professional network',
    'Give back to your community',
    'Gain fresh perspectives and insights',
    'Recognition and professional development opportunities',
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero with Parallax */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/mentorship-workshop.dim_800x600.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        </ParallaxSection>
        
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Where Paths Cross, Lives Change</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                The story of mentorship is the story of human connection—where experience meets aspiration, 
                and guidance transforms into possibility.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Mentorship Matters */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="The Power of Connection"
            title="Why Mentorship Matters"
            subtitle="One conversation can change everything"
          />

          <div className="max-w-6xl mx-auto space-y-16">
            <StoryCard
              title="The Ripple Effect"
              description="Mentorship isn't just about career advice—it's about seeing potential where others see obstacles. It's about opening doors, sharing wisdom, and believing in someone's journey. When a mentor invests in a mentee, they don't just change one life; they create ripples that touch families, communities, and future generations."
              image={getImageUrl('/assets/generated/mentorship-workshop.dim_800x600.jpg')}
              quote="My mentor didn't just teach me skills; they taught me to believe in myself. That belief changed everything."
              author="Former Mentee, Now a Mentor"
              delay={100}
            />
          </div>
        </div>
      </section>

      {/* For Students - Their Story */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-secondary/10 via-transparent to-c2r-accent/10" />
        <div className="container relative">
          <ChapterHeader 
            chapter="For Seekers"
            title="Your Journey Begins Here"
            subtitle="Every expert was once a beginner. Every success story started with a question."
            icon={<Users className="h-16 w-16 text-c2r-accent" />}
          />

          <div className="max-w-6xl mx-auto space-y-12">
            <ScrollReveal delay={100}>
              <Card className="bg-gradient-to-br from-c2r-accent/5 to-c2r-primary/5 border-l-4 border-l-c2r-accent">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold mb-4">How Mentoring Changed Ayesha's Journey</h3>
                  <p className="text-lg text-muted-foreground italic leading-relaxed mb-4">
                    "I was lost, unsure of which path to take. My mentor didn't give me all the answers—they helped me 
                    discover them myself. Through our conversations, I found clarity, confidence, and a career I love. 
                    Now, I'm paying it forward by mentoring others."
                  </p>
                  <p className="text-sm text-muted-foreground">— Ayesha, Software Engineer</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <div className="grid gap-8 lg:grid-cols-2">
              <ScrollReveal delay={200} direction="left">
                <div>
                  <h3 className="text-2xl font-bold mb-6">What You'll Gain</h3>
                  <ul className="space-y-4">
                    {studentBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-c2r-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="mt-8" onClick={() => navigate({ to: '/contact' })}>
                    Find Your Mentor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300} direction="right">
                <Card className="border-l-4 border-l-c2r-primary h-full">
                  <CardContent className="pt-6 space-y-6">
                    <h3 className="text-xl font-bold">Your Journey Unfolds</h3>
                    {[
                      { step: '1', title: 'Share Your Story', desc: 'Tell us about your dreams, challenges, and aspirations' },
                      { step: '2', title: 'Meet Your Guide', desc: 'Connect with a mentor who understands your path' },
                      { step: '3', title: 'Grow Together', desc: 'Regular sessions, honest conversations, real progress' },
                      { step: '4', title: 'Achieve & Inspire', desc: 'Reach your goals and become a guide for others' },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-c2r-primary to-c2r-secondary text-white font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* For Mentors - Their Story */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="For Guides"
            title="Share Your Light"
            subtitle="The greatest gift you can give is your experience, wisdom, and belief in someone's potential."
            icon={<Heart className="h-16 w-16 text-c2r-primary" />}
          />

          <div className="max-w-6xl mx-auto space-y-12">
            <ScrollReveal delay={100}>
              <Card className="bg-gradient-to-br from-c2r-primary/5 to-c2r-secondary/5 border-l-4 border-l-c2r-primary">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold mb-4">How Mentoring Changed Rajesh's Perspective</h3>
                  <p className="text-lg text-muted-foreground italic leading-relaxed mb-4">
                    "I thought I was just sharing career advice. But through mentoring, I rediscovered my own purpose. 
                    Watching my mentee overcome challenges and achieve their dreams reminded me why I fell in love with 
                    my profession in the first place. Mentoring doesn't just change their life—it enriches yours."
                  </p>
                  <p className="text-sm text-muted-foreground">— Rajesh, Senior Product Manager & Mentor</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <div className="grid gap-8 lg:grid-cols-2">
              <ScrollReveal delay={200} direction="left">
                <Card className="border-l-4 border-l-c2r-accent h-full">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-xl font-bold">Your Commitment</h3>
                    <div>
                      <h4 className="font-semibold mb-2">Time Investment</h4>
                      <p className="text-sm text-muted-foreground">
                        2-4 hours per month—small moments that create lasting impact
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Duration</h4>
                      <p className="text-sm text-muted-foreground">
                        Minimum 6 months to build meaningful relationships
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What We Provide</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Comprehensive training and resources</li>
                        <li>• Community of fellow mentors</li>
                        <li>• Ongoing support and guidance</li>
                        <li>• Recognition and appreciation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300} direction="right">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Why Become a Mentor</h3>
                  <ul className="space-y-4">
                    {mentorBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-c2r-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="mt-8" onClick={() => navigate({ to: '/get-involved' })}>
                    Join as a Mentor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary via-c2r-secondary to-c2r-accent" />
        </ParallaxSection>
        <div className="container relative z-10 text-center text-white">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl font-bold mb-4">Join the Next Chapter</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're seeking guidance or ready to give back, your story begins here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => navigate({ to: '/contact' })}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" onClick={() => navigate({ to: '/about' })}>
                Learn More
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
