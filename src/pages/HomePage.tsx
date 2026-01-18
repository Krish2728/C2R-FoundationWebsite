import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, Users, Target, TrendingUp, Sparkles, Heart } from 'lucide-react';
import { useTestimonials } from '@/hooks/useQueries';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TriangleFramework } from '@/components/TriangleFramework';
import { getImageUrl } from '@/lib/images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HomePage() {
  const navigate = useNavigate();
  const { data: testimonials = [] } = useTestimonials();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${getImageUrl('/assets/generated/hero-banner.dim_1200x600.jpg')})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        
        <div className="container relative z-10 py-20">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl leading-tight">
              Empowering Communities for a Brighter Future
            </h1>
            <p className="mb-10 text-xl md:text-2xl text-white/95 leading-relaxed">
              Free career guidance, future-ready skills, and livelihood pathways — enabling young people to grow and citizens to give back to their roots and society.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6" 
                onClick={() => navigate({ to: '/mentorship' })}
              >
                Find a Mentor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" 
                onClick={() => navigate({ to: '/mentorship' })}
              >
                Become a Mentor
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" 
                onClick={() => navigate({ to: '/get-involved' })}
              >
                Partner With Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" 
                onClick={() => navigate({ to: '/get-involved' })}
              >
                Support the Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold mb-6">Welcome to Connect2Roots</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Connect2Roots Foundation is a non-profit organization dedicated to empowering underserved communities through free career mentorship, skill development, and livelihood support.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that every young person deserves access to guidance, opportunities, and the tools they need to build a meaningful career and contribute to society.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to bridge the gap between aspiration and achievement by connecting students with experienced mentors, providing future-ready skills training, and creating pathways to sustainable livelihoods.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <img 
                src={getImageUrl('/assets/generated/team-collaboration.dim_800x500.jpg')} 
                alt="Team Collaboration" 
                className="rounded-lg shadow-xl w-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem We Are Trying to Solve */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">The Problem We Are Trying to Solve</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Millions of young people in underserved communities face significant barriers to career success, not due to lack of talent or ambition, but due to systemic gaps in access and opportunity.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-12 md:grid-cols-2 items-center mt-16">
              <ScrollReveal direction="left" delay={100}>
                <img 
                  src={getImageUrl('/assets/generated/founder-headshot.dim_300x300.jpg')} 
                  alt="Founder" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={100}>
                <div className="space-y-6">
                  <div className="bg-c2r-accent/10 border-l-4 border-c2r-accent p-6 rounded-r-lg">
                    <p className="text-2xl font-bold text-c2r-accent mb-2">
                      "Talent is everywhere, opportunity is not."
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-6 w-6 rounded-full bg-c2r-primary/20 flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-c2r-primary" />
                      </div>
                      <p className="text-lg text-muted-foreground">
                        <strong>Lack of Career Guidance:</strong> Students from underserved backgrounds often lack access to mentors who can guide them through career choices, skill development, and job opportunities.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-6 w-6 rounded-full bg-c2r-primary/20 flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-c2r-primary" />
                      </div>
                      <p className="text-lg text-muted-foreground">
                        <strong>Skills Gap:</strong> Traditional education systems often fail to equip students with the practical, industry-relevant skills needed to succeed in today's job market.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-6 w-6 rounded-full bg-c2r-primary/20 flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-c2r-primary" />
                      </div>
                      <p className="text-lg text-muted-foreground">
                        <strong>Limited Livelihood Opportunities:</strong> Even with education, many young people struggle to find meaningful employment or entrepreneurial pathways due to lack of networks and resources.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-6 w-6 rounded-full bg-c2r-primary/20 flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-c2r-primary" />
                      </div>
                      <p className="text-lg text-muted-foreground">
                        <strong>Disconnect Between Education and Industry:</strong> There is a significant gap between what students learn in school and what employers need, leaving many graduates unprepared for the workforce.
                      </p>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">How It Works</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our platform connects students with mentors and provides a structured pathway to career success through four simple steps.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '1',
                  title: 'Students Register',
                  description: 'Students create profiles with their career aspirations, educational background, and areas of interest.',
                  icon: Users,
                },
                {
                  step: '2',
                  title: 'Platform Matches Mentors',
                  description: 'Our AI-powered platform analyzes student profiles and matches them with the most suitable mentors based on industry, experience, and goals.',
                  icon: Sparkles,
                },
                {
                  step: '3',
                  title: 'C2R Mentorship Curriculum',
                  description: 'Students and mentors follow our structured curriculum covering career planning, skill development, and professional growth.',
                  icon: Target,
                },
                {
                  step: '4',
                  title: 'Skills & Livelihood Programs',
                  description: 'Students gain access to skill development workshops and livelihood support programs to enhance their employability.',
                  icon: TrendingUp,
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full border-2 hover:border-c2r-accent transition-all duration-300 hover:shadow-lg">
                    <CardContent className="pt-6 text-center">
                      <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-c2r-primary to-c2r-secondary text-white text-2xl font-bold shadow-lg">
                        {item.step}
                      </div>
                      <item.icon className="h-10 w-10 mx-auto mb-4 text-c2r-accent" />
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRIANGLE Framework Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background">
        <ScrollReveal>
          <div className="text-center pt-20 pb-8 container">
            <h2 className="text-4xl font-bold mb-6">The TRIANGLE Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our proven approach to transforming aspirations into sustainable career outcomes through three interconnected pillars.
            </p>
          </div>
        </ScrollReveal>
        <TriangleFramework />
      </section>

      {/* Impact Snapshot */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-c2r-primary to-c2r-secondary text-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Together, we're transforming lives and building a more equitable future for underserved communities.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {[
                { value: 2000, suffix: '+', label: 'Students Mentored' },
                { value: 10, suffix: '+', label: 'Partner Colleges' },
                { value: 50, suffix: '+', label: 'Volunteer Mentors' },
              ].map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center transition-all duration-300 hover:scale-105">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix}
                      className="mb-2 text-5xl md:text-6xl font-bold"
                    />
                    <div className="text-lg text-white/90">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Field Work Images Gallery */}
            <ScrollReveal delay={100}>
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center mb-8">Stories from the Field</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    { src: getImageUrl('/assets/generated/mentorship-workshop.dim_800x600.jpg'), alt: 'Mentorship Workshop', title: 'Mentorship in Action' },
                    { src: getImageUrl('/assets/generated/volunteer-mentoring.dim_800x500.jpg'), alt: 'Volunteer Mentoring', title: 'Volunteer Mentors' },
                    { src: getImageUrl('/assets/generated/skill-development.dim_600x400.jpg'), alt: 'Skill Development', title: 'Skills Training' },
                  ].map((image, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                      <CardContent className="pt-4">
                        <p className="text-white font-semibold text-center">{image.title}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonials Carousel */}
            {testimonials.length > 0 && (
              <ScrollReveal delay={200}>
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-center mb-12">Mentor Stories</h3>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                            <CardContent className="pt-6">
                              <div className="flex items-center gap-4 mb-4">
                                {testimonial.photoUrl && (
                                  <img 
                                    src={testimonial.photoUrl} 
                                    alt={testimonial.name} 
                                    className="h-14 w-14 rounded-full object-cover border-2 border-white/30" 
                                  />
                                )}
                                <div>
                                  <div className="font-bold text-white">{testimonial.name}</div>
                                  <div className="text-sm text-white/70">{testimonial.role}</div>
                                </div>
                              </div>
                              <p className="text-white/90 italic leading-relaxed">"{testimonial.message}"</p>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-white border-white/30 hover:bg-white/20" />
                    <CarouselNext className="text-white border-white/30 hover:bg-white/20" />
                  </Carousel>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* AI Advantage Banner */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-c2r-secondary via-c2r-primary to-c2r-accent">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center text-white">
              <Sparkles className="h-16 w-16 mx-auto mb-6 text-white" />
              <h2 className="text-4xl font-bold mb-6">Where Technology Meets Empathy</h2>
              <p className="text-2xl text-white/95 leading-relaxed">
                AI that understands aspirations — matching students with mentors who truly care about their success.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Enable */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">What We Enable</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Through our comprehensive approach, we empower students to achieve their full potential.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Career Clarity',
                  description: 'Students gain clear direction on career paths, industry insights, and professional development strategies.',
                  icon: Target,
                },
                {
                  title: 'Skill Development',
                  description: 'Access to industry-relevant training programs that bridge the gap between education and employment.',
                  icon: TrendingUp,
                },
                {
                  title: 'Mentorship Network',
                  description: 'Connection with experienced professionals who provide guidance, support, and real-world perspectives.',
                  icon: Users,
                },
                {
                  title: 'Livelihood Pathways',
                  description: 'Support for entrepreneurship and job placement to create sustainable career opportunities.',
                  icon: Heart,
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full border-l-4 border-l-c2r-accent hover:shadow-xl transition-all duration-300">
                    <CardContent className="pt-6">
                      <item.icon className="h-12 w-12 mb-4 text-c2r-primary" />
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-br from-c2r-primary/5 to-c2r-accent/5 border-none shadow-xl max-w-4xl mx-auto">
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-bold mb-4">Impact Snapshot (Extended)</h3>
                    <div className="grid gap-6 md:grid-cols-2 text-left">
                      <div className="space-y-3">
                        <p className="text-lg">
                          <strong className="text-c2r-primary">Diverse Reach:</strong> Students from 15+ states across India
                        </p>
                        <p className="text-lg">
                          <strong className="text-c2r-primary">Industry Coverage:</strong> Mentors from 20+ industries including tech, healthcare, finance, and education
                        </p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-lg">
                          <strong className="text-c2r-primary">Success Rate:</strong> 85% of mentored students report improved career clarity
                        </p>
                        <p className="text-lg">
                          <strong className="text-c2r-primary">Community Impact:</strong> Creating ripple effects in underserved communities nationwide
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-c2r-primary via-c2r-secondary to-c2r-accent text-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 text-white fill-white" />
              <h2 className="text-4xl font-bold mb-6">Join Us in Creating Change</h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Whether you're a student seeking guidance or a professional ready to give back, your journey starts here.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-8 py-6" 
                  onClick={() => navigate({ to: '/mentorship' })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" 
                  onClick={() => navigate({ to: '/about/who-we-are' })}
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
