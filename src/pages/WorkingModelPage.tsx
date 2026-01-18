import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { TrendingUp, Users, Lightbulb, Target, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ChapterHeader } from '@/components/ChapterHeader';
import { TriangleFramework } from '@/components/TriangleFramework';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getImageUrl } from '@/lib/images';

export default function WorkingModelPage() {
  const navigate = useNavigate();

  const mentorPathwaySteps = [
    { stage: 'Discovery', description: 'Students explore career options through mentor interactions', outcome: 'Career clarity and direction' },
    { stage: 'Guidance', description: 'Personalized mentorship sessions focused on goals', outcome: 'Actionable career roadmap' },
    { stage: 'Skill Building', description: 'Targeted skill development aligned with career path', outcome: 'Job-ready competencies' },
    { stage: 'Opportunity', description: 'Access to internships, jobs, and entrepreneurship support', outcome: 'Career launch or advancement' },
  ];

  const triangleFramework = [
    { 
      pillar: 'Mentorship', 
      icon: <Users className="h-8 w-8" />,
      description: 'One-on-one guidance from experienced professionals',
      impact: 'Personalized career navigation and industry insights'
    },
    { 
      pillar: 'Skills', 
      icon: <Lightbulb className="h-8 w-8" />,
      description: 'Practical training in in-demand competencies',
      impact: 'Job-ready capabilities and competitive advantage'
    },
    { 
      pillar: 'Opportunities', 
      icon: <Target className="h-8 w-8" />,
      description: 'Pathways to employment and entrepreneurship',
      impact: 'Real-world career advancement and economic mobility'
    },
  ];

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
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Our Working Model</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                A proven framework for transforming aspirations into achievements
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* India's Future Readiness Context */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="The Context"
            title="India's Future Readiness Challenge"
            subtitle="Understanding the landscape we're working to transform"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p className="text-xl">
                  India stands at a critical juncture. With one of the world's youngest populations and a rapidly 
                  evolving economy, the nation has unprecedented potential. Yet, millions of talented young people 
                  face a fundamental challenge: <span className="font-bold text-foreground">the gap between education 
                  and employability</span>.
                </p>
                
                <p>
                  Traditional education systems often fail to provide the practical skills, industry connections, 
                  and career guidance needed to navigate today's job market. This gap is particularly acute in 
                  underserved communities, where access to mentorship and professional networks is limited.
                </p>

                <p>
                  The result? A paradox where employers struggle to find qualified candidates while millions of 
                  educated youth remain unemployed or underemployed. This isn't just an economic issue—it's a 
                  question of social equity and national potential.
                </p>

                <div className="bg-c2r-accent/10 border-l-4 border-l-c2r-accent p-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-foreground mb-2">The Challenge:</p>
                  <p className="text-base">
                    How do we bridge this gap and ensure that every talented individual, regardless of background, 
                    has the guidance and skills needed to thrive in the modern economy?
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Connect2Roots Thesis */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-secondary/10 via-transparent to-c2r-accent/10" />
        <div className="container relative">
          <ChapterHeader 
            chapter="Our Thesis"
            title="The Connect2Roots Approach"
            subtitle="A mentor-first pathway to career success"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="border-t-4 border-t-c2r-primary">
                <CardContent className="pt-8">
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    <p className="text-xl font-semibold text-foreground">
                      We believe that meaningful career guidance is the missing link between education and employment.
                    </p>
                    
                    <p>
                      Our thesis is simple but powerful: when aspiring professionals have access to experienced mentors 
                      who understand their journey, combined with practical skill development and clear pathways to 
                      opportunity, they don't just find jobs—they build careers.
                    </p>

                    <p>
                      This isn't about replacing formal education. It's about complementing it with the human element 
                      that makes all the difference: personalized guidance, industry insights, and the confidence that 
                      comes from knowing someone believes in your potential.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={200}>
              <Card className="h-full border-l-4 border-l-c2r-primary transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8">
                  <CheckCircle2 className="mb-4 h-10 w-10 text-c2r-primary" />
                  <h3 className="text-xl font-bold mb-3">Human-Centered</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Technology enables us, but human connection transforms lives. Every student gets personalized 
                    attention from mentors who care.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full border-l-4 border-l-c2r-secondary transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8">
                  <CheckCircle2 className="mb-4 h-10 w-10 text-c2r-secondary" />
                  <h3 className="text-xl font-bold mb-3">Holistic Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We address the full journey—from career clarity to skill building to opportunity access—not 
                    just isolated pieces.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="h-full border-l-4 border-l-c2r-accent transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="pt-8">
                  <CheckCircle2 className="mb-4 h-10 w-10 text-c2r-accent" />
                  <h3 className="text-xl font-bold mb-3">Community-Driven</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built on the principle of giving back—successful professionals helping the next generation 
                    succeed.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mentor-First Pathway Table */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our Process"
            title="The Mentor-First Pathway"
            subtitle="A structured journey from aspiration to achievement"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-8">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold text-base">Stage</TableHead>
                        <TableHead className="font-bold text-base">What Happens</TableHead>
                        <TableHead className="font-bold text-base">Outcome</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mentorPathwaySteps.map((step, index) => (
                        <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                          <TableCell className="font-semibold text-c2r-primary">{step.stage}</TableCell>
                          <TableCell>{step.description}</TableCell>
                          <TableCell className="text-muted-foreground">{step.outcome}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-c2r-primary/10 to-c2r-accent/10 rounded-lg border-l-4 border-l-c2r-accent">
                <Sparkles className="h-6 w-6 text-c2r-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">The Mentor Advantage</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike traditional career counseling, our mentor-first approach ensures students receive guidance 
                    from professionals who have actually walked the path they aspire to take. This creates authentic 
                    connections, realistic expectations, and actionable insights that generic advice simply cannot provide.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRIANGLE Framework */}
      <section className="bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our Framework"
            title="The TRIANGLE Framework"
            subtitle="Three interconnected pillars of transformation"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl text-muted-foreground text-center leading-relaxed">
                Success in today's economy requires more than just one element. Our TRIANGLE Framework integrates 
                three essential components that work together to create lasting impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        <TriangleFramework />

        <div className="container">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 mt-16">
            {triangleFramework.map((pillar, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="h-full border-t-4 border-t-c2r-primary transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardContent className="pt-8 text-center">
                    <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-c2r-primary to-c2r-accent mx-auto flex items-center justify-center text-white">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{pillar.pillar}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>
                    <div className="pt-6 border-t border-border">
                      <p className="text-sm font-semibold text-c2r-primary mb-2">Impact:</p>
                      <p className="text-sm text-muted-foreground">{pillar.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-16 max-w-4xl mx-auto pb-24">
              <Card className="bg-gradient-to-br from-c2r-accent/10 to-c2r-primary/10 border-none">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center space-y-4">
                    <TrendingUp className="mx-auto h-12 w-12 text-c2r-accent" />
                    <h3 className="text-2xl font-bold">Why the Triangle Works</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Each pillar reinforces the others. Mentorship provides direction, skills provide capability, 
                      and opportunities provide application. Together, they create a complete pathway from aspiration 
                      to achievement—addressing not just what students need to learn, but how they learn it and where 
                      they apply it.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Contributions */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-c2r-primary/5 to-c2r-accent/5">
        <div className="container">
          <ChapterHeader 
            chapter="Our Impact"
            title="What We Contribute"
            subtitle="Tangible outcomes that transform lives and communities"
          />

          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={100}>
              <Card className="h-full border-l-4 border-l-c2r-primary">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-c2r-primary" />
                    For Students
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-c2r-primary flex-shrink-0 mt-0.5" />
                      <span>Clear career direction and actionable roadmaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-c2r-primary flex-shrink-0 mt-0.5" />
                      <span>Industry-relevant skills and certifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-c2r-primary flex-shrink-0 mt-0.5" />
                      <span>Professional networks and mentorship relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-c2r-primary flex-shrink-0 mt-0.5" />
                      <span>Access to internships, jobs, and entrepreneurship support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full border-l-4 border-l-c2r-accent">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-c2r-accent" />
                    For Communities
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-c2r-accent flex-shrink-0 mt-0.5" />
                      <span>Increased employability and economic mobility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-c2r-accent flex-shrink-0 mt-0.5" />
                      <span>Local talent development and retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-c2r-accent flex-shrink-0 mt-0.5" />
                      <span>Culture of mentorship and giving back</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-c2r-accent flex-shrink-0 mt-0.5" />
                      <span>Entrepreneurial ecosystem development</span>
                    </li>
                  </ul>
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
            <h2 className="text-4xl font-bold mb-4">See Our Model in Action</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Explore our programs and discover how we're transforming lives through mentorship
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6" 
                onClick={() => navigate({ to: '/programs' })}
              >
                Explore Programs
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" 
                onClick={() => navigate({ to: '/get-involved' })}
              >
                Get Involved
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
