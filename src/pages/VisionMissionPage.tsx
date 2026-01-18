import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Eye, Target, Heart, Compass, Lightbulb, Users, TrendingUp, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ChapterHeader } from '@/components/ChapterHeader';
import { getImageUrl } from '@/lib/images';

export default function VisionMissionPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/future-of-work.dim_800x500.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Vision & Mission</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Guided by vision, driven by mission, united by purpose
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our Vision"
            title="The Future We're Building"
            subtitle="A world where opportunity knows no boundaries"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-5xl mx-auto">
              <Card className="border-t-4 border-t-c2r-primary transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-12 pb-12">
                  <Eye className="mx-auto mb-6 h-16 w-16 text-c2r-primary" />
                  <blockquote className="text-center space-y-6">
                    <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                      "A world where every individual, regardless of their background, has access to the mentorship, 
                      skills, and opportunities needed to achieve their career aspirations and contribute meaningfully 
                      to society."
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p className="text-xl">
                  We envision a future where geographical location, economic status, or social background no longer 
                  determine one's access to quality career guidance and professional development.
                </p>
                
                <p>
                  In this future, every aspiring professional can connect with experienced mentors who understand their 
                  journey, every student has access to the skills they need to thrive in the modern economy, and every 
                  community has the resources to nurture its own talent.
                </p>

                <p>
                  This is not just a dream—it's a commitment we work toward every single day through our programs, 
                  partnerships, and the dedicated community of mentors and supporters who believe in this vision.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-secondary/10 via-transparent to-c2r-accent/10" />
        <div className="container relative">
          <ChapterHeader 
            chapter="Our Mission"
            title="How We Make It Happen"
            subtitle="Concrete actions driving meaningful change"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-5xl mx-auto">
              <Card className="border-t-4 border-t-c2r-accent transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-12 pb-12">
                  <Target className="mx-auto mb-6 h-16 w-16 text-c2r-accent" />
                  <blockquote className="text-center space-y-6">
                    <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                      "To empower underserved communities by providing accessible, high-quality career mentorship, 
                      skill development programs, and entrepreneurship support that bridges the gap between education 
                      and employment."
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <ScrollReveal delay={200}>
              <Card className="h-full border-l-4 border-l-c2r-primary transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8">
                  <Compass className="mb-4 h-10 w-10 text-c2r-primary" />
                  <h3 className="text-xl font-bold mb-3">Career Mentorship</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Connecting aspiring professionals with experienced mentors who provide personalized guidance, 
                    industry insights, and career navigation support.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full border-l-4 border-l-c2r-secondary transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8">
                  <Lightbulb className="mb-4 h-10 w-10 text-c2r-secondary" />
                  <h3 className="text-xl font-bold mb-3">Skill Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Offering practical training programs that equip individuals with in-demand skills for the 
                    modern workforce and emerging industries.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="h-full border-l-4 border-l-c2r-accent transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8">
                  <TrendingUp className="mb-4 h-10 w-10 text-c2r-accent" />
                  <h3 className="text-xl font-bold mb-3">Entrepreneurship Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Providing resources, mentorship, and pathways for individuals to create their own opportunities 
                    through entrepreneurial ventures.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our Purpose"
            title="Why We Exist"
            subtitle="The deeper meaning behind everything we do"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-c2r-accent/10 to-c2r-primary/10 border-none">
                <CardContent className="pt-12 pb-12">
                  <Heart className="mx-auto mb-6 h-16 w-16 text-c2r-accent" />
                  <div className="prose prose-lg max-w-none text-center space-y-6">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      We exist to break down barriers and create pathways to success for those who need it most. 
                      By connecting aspiring professionals with experienced mentors, providing practical skill development, 
                      and supporting entrepreneurial ventures, we're not just changing individual lives—we're transforming 
                      entire communities and building a more inclusive future for all.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <div className="mt-16 max-w-4xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-c2r-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-c2r-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Empowering Individuals</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every person we serve gains not just skills or connections, but confidence, clarity, and the 
                      belief that their dreams are achievable. We empower individuals to take control of their 
                      career journeys and unlock their full potential.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-c2r-secondary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-c2r-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transforming Communities</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When individuals succeed, communities thrive. Our work creates ripple effects—mentored students 
                      become future mentors, skilled professionals contribute to local economies, and entrepreneurs 
                      create opportunities for others.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-c2r-accent/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-c2r-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Building an Inclusive Future</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're working toward a future where success is determined by talent and effort, not by 
                      circumstances of birth. A future where every individual has the support they need to contribute 
                      their unique gifts to society.
                    </p>
                  </div>
                </div>
              </div>
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
            <h2 className="text-4xl font-bold mb-4">Join Us in This Mission</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether as a mentor, partner, or supporter—your contribution makes this vision a reality
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6" 
                onClick={() => navigate({ to: '/get-involved' })}
              >
                Get Involved
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" 
                onClick={() => navigate({ to: '/about/working-model' })}
              >
                See How We Work
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
