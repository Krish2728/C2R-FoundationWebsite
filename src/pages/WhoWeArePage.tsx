import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Heart, Users, Target, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ChapterHeader } from '@/components/ChapterHeader';
import { getImageUrl } from '@/lib/images';

export default function WhoWeArePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/team-collaboration.dim_800x500.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Who We Are</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                A movement dedicated to empowering communities through mentorship, skills, and opportunity
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Summary */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our Identity"
            title="More Than an Organization"
            subtitle="We are a community of changemakers, united by a shared vision"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p className="text-xl">
                  Connect2Roots Foundation is a social impact organization that bridges the gap between aspiration and achievement. 
                  We believe that <span className="font-bold text-foreground">talent is everywhere, but opportunity is not</span>.
                </p>
                
                <p>
                  Founded on the principle that every individual deserves access to quality mentorship and career guidance, 
                  we've built a platform that connects aspiring professionals from underserved communities with experienced 
                  mentors who can guide them toward meaningful careers.
                </p>

                <p>
                  Our work goes beyond traditional career counseling. We provide comprehensive support through mentorship programs, 
                  skill development initiatives, and entrepreneurship pathways—creating a holistic ecosystem that nurtures talent 
                  and transforms lives.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-16 max-w-5xl mx-auto">
              <img 
                src={getImageUrl('/assets/generated/team-collaboration.dim_800x500.jpg')} 
                alt="Team Collaboration" 
                className="rounded-lg shadow-2xl w-full transform transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-secondary/10 via-transparent to-c2r-accent/10" />
        <div className="container relative">
          <ChapterHeader 
            chapter="Our Beginning"
            title="The Story of How We Started"
            subtitle="Every movement begins with a moment of clarity"
          />

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <Card className="border-l-4 border-l-c2r-accent bg-gradient-to-br from-background to-muted/30">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                    <img 
                      src={getImageUrl('/assets/generated/founder-headshot.dim_300x300.jpg')} 
                      alt="Founder" 
                      className="h-48 w-48 rounded-full object-cover border-4 border-c2r-accent/20 shadow-xl flex-shrink-0" 
                    />
                    <div className="flex-1 space-y-6">
                      <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                        <p>
                          In 2017, our founder witnessed a troubling pattern: brilliant young minds from underserved communities 
                          were struggling not because they lacked talent or ambition, but because they lacked access to the right 
                          guidance at the right time.
                        </p>
                        
                        <p>
                          A conversation with a talented student who was about to give up on her dreams became the catalyst. 
                          She had the grades, the drive, and the potential—but no one to show her the path forward. That moment 
                          sparked a question: <span className="font-bold text-foreground italic">"What if we could connect every 
                          aspiring professional with someone who's walked the path they want to take?"</span>
                        </p>

                        <p>
                          From that simple question, Connect2Roots was born. What started as informal mentoring sessions with 
                          a handful of students has grown into a comprehensive platform serving thousands of individuals across 
                          multiple communities.
                        </p>

                        <p>
                          Today, we're not just an organization—we're a movement. A movement that believes in the power of human 
                          connection, the transformative impact of guidance, and the potential that exists in every individual 
                          when given the right support.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our Approach"
            title="What Makes Us Different"
            subtitle="A unique blend of empathy, technology, and community"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <ScrollReveal delay={100}>
              <Card className="h-full border-t-4 border-t-c2r-primary transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8 text-center">
                  <Heart className="mx-auto mb-4 h-12 w-12 text-c2r-primary" />
                  <h3 className="text-xl font-bold mb-3">Human-Centered</h3>
                  <p className="text-muted-foreground">
                    We put people first, understanding that every journey is unique and deserves personalized attention.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full border-t-4 border-t-c2r-secondary transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8 text-center">
                  <Sparkles className="mx-auto mb-4 h-12 w-12 text-c2r-secondary" />
                  <h3 className="text-xl font-bold mb-3">Technology-Enabled</h3>
                  <p className="text-muted-foreground">
                    AI-powered matching ensures students connect with mentors who truly understand their aspirations.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full border-t-4 border-t-c2r-accent transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8 text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-c2r-accent" />
                  <h3 className="text-xl font-bold mb-3">Community-Driven</h3>
                  <p className="text-muted-foreground">
                    Built on the power of giving back—professionals helping the next generation succeed.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="h-full border-t-4 border-t-c2r-primary transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8 text-center">
                  <Target className="mx-auto mb-4 h-12 w-12 text-c2r-primary" />
                  <h3 className="text-xl font-bold mb-3">Impact-Focused</h3>
                  <p className="text-muted-foreground">
                    Every program, every initiative is designed with measurable outcomes and lasting transformation in mind.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary to-c2r-accent" />
        </ParallaxSection>
        <div className="container relative z-10 text-center text-white">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl font-bold mb-4">Learn More About Our Work</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Explore our vision, meet our team, and discover how we're making a difference
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6" 
                onClick={() => navigate({ to: '/about/vision-mission' })}
              >
                Our Vision & Mission
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" 
                onClick={() => navigate({ to: '/about/our-team' })}
              >
                Meet Our Team
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
