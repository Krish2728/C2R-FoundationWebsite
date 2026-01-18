import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';
import { useTeamMembers } from '@/hooks/useQueries';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getImageUrl } from '@/lib/images';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ChapterHeader } from '@/components/ChapterHeader';

export default function AboutPage() {
  const navigate = useNavigate();
  const { data: teamMembers = [] } = useTeamMembers();

  const timeline = [
    { year: '2017', title: 'The Spark', description: 'A simple observation: talented individuals held back by lack of guidance. The seed of an idea was planted.' },
    { year: '2018', title: 'First Steps', description: 'Pilot mentorship program launched with 50 students and 20 mentors. The journey begins.' },
    { year: '2020', title: 'Growing Roots', description: 'Expanded to 500+ students. Introduced skill development programs. The movement gains momentum.' },
    { year: '2022', title: 'Breaking Barriers', description: 'Reached 2,000 students across multiple communities. Corporate partnerships established.' },
    { year: '2024', title: 'Scaling Impact', description: '5,000+ students mentored. AI-powered matching introduced. The Triangle Framework perfected.' },
    { year: '2025', title: 'Today', description: 'A thriving ecosystem of mentors, students, and partners. The story continues to unfold.' },
    { year: '2047', title: 'The Vision', description: 'A world where every individual has access to the guidance they need to thrive. This is our destination.' },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero with Parallax */}
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
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Our Journey</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                From a simple idea to a movement that's transforming lives and communities
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Journey */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our Story"
            title="Journey from 2017 to 2047"
            subtitle="Every great movement begins with a single step. This is ours."
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-c2r-primary via-c2r-secondary to-c2r-accent md:left-1/2" />

              {timeline.map((item, index) => (
                <ScrollReveal key={index} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}>
                    <div className="flex items-center gap-4 md:gap-8">
                      {index % 2 === 0 ? (
                        <>
                          <div className="flex-1 md:block hidden" />
                          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-c2r-primary to-c2r-secondary text-white font-bold shadow-lg z-10">
                            {item.year}
                          </div>
                          <div className="flex-1 ml-24 md:ml-0">
                            <Card className="border-l-4 border-l-c2r-accent transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                              <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                              </CardContent>
                            </Card>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex-1 ml-24 md:ml-0">
                            <Card className="border-l-4 border-l-c2r-accent transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                              <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                              </CardContent>
                            </Card>
                          </div>
                          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-c2r-secondary to-c2r-accent text-white font-bold shadow-lg z-10">
                            {item.year}
                          </div>
                          <div className="flex-1 md:block hidden" />
                        </>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-secondary/10 via-transparent to-c2r-accent/10" />
        <div className="container relative">
          <ChapterHeader 
            chapter="Our Purpose"
            title="Why We Exist"
            subtitle="Guided by vision, driven by mission, united by purpose"
          />

          <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
            <ScrollReveal delay={100} direction="left">
              <Card className="h-full border-t-4 border-t-c2r-primary transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-8">
                  <Eye className="mb-4 h-12 w-12 text-c2r-primary" />
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A world where every individual, regardless of their background, has access to the mentorship, skills, 
                    and opportunities needed to achieve their career aspirations and contribute meaningfully to society.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <Card className="h-full border-t-4 border-t-c2r-accent transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="pt-8">
                  <Target className="mb-4 h-12 w-12 text-c2r-accent" />
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower underserved communities by providing accessible, high-quality career mentorship, skill 
                    development programs, and entrepreneurship support that bridges the gap between education and employment.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-16 max-w-4xl mx-auto text-center">
              <Card className="bg-gradient-to-br from-c2r-accent/10 to-c2r-primary/10 border-none">
                <CardContent className="pt-8">
                  <Heart className="mx-auto mb-6 h-16 w-16 text-c2r-accent" />
                  <h3 className="text-3xl font-bold mb-4">Our Purpose</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We exist to break down barriers and create pathways to success for those who need it most. By connecting 
                    aspiring professionals with experienced mentors, providing practical skill development, and supporting 
                    entrepreneurial ventures, we're not just changing individual lives—we're transforming entire communities 
                    and building a more inclusive future for all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The People Behind the Movement */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our Team"
            title="The People Behind the Movement"
            subtitle="Passionate individuals united by a common purpose"
          />

          <ScrollReveal delay={100}>
            <div className="mb-16 max-w-4xl mx-auto">
              <img src={getImageUrl('/assets/generated/team-collaboration.dim_800x500.jpg')} alt="Team Collaboration" className="rounded-lg shadow-2xl w-full transform transition-transform duration-700 hover:scale-105" />
            </div>
          </ScrollReveal>

          {teamMembers.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <ScrollReveal delay={200}>
                <div className="grid gap-8 md:grid-cols-3 mb-12">
                  {teamMembers.slice(0, 3).map((member, index) => (
                    <Card key={index} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="pt-8 text-center">
                        {member.photoUrl && (
                          <img src={member.photoUrl} alt={member.name} className="mb-4 h-32 w-32 rounded-full object-cover mx-auto border-4 border-c2r-accent/20" />
                        )}
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-sm text-c2r-primary font-semibold mb-3">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                        {member.linkedinUrl && (
                          <div className="mt-4">
                            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-c2r-primary hover:underline text-sm">
                              Connect on LinkedIn
                            </a>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-24 md:py-32">
        <div className="container">
          <ChapterHeader 
            chapter="A Message"
            title="From Our Founder"
            subtitle="The heart behind the mission"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-c2r-accent bg-gradient-to-br from-background to-muted/30">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                    <img src={getImageUrl('/assets/generated/founder-headshot.dim_300x300.jpg')} alt="Founder" className="h-40 w-40 rounded-full object-cover border-4 border-c2r-accent/20 shadow-xl" />
                    <div className="flex-1">
                      <blockquote className="space-y-6 text-lg text-muted-foreground italic leading-relaxed">
                        <p>
                          "When I started Connect2Roots, I had a simple vision: to ensure that no talented individual is held 
                          back by lack of access to guidance and opportunities. Today, seeing thousands of lives transformed 
                          through our programs fills me with immense pride and gratitude."
                        </p>
                        <p>
                          "But our work is far from done. Every day, there are countless young people searching for direction, 
                          professionals eager to give back, and communities waiting to be empowered. I invite you to join us 
                          in this mission—whether as a mentor, partner, donor, or supporter."
                        </p>
                        <p>
                          "Together, we can create a world where everyone has the opportunity to thrive."
                        </p>
                      </blockquote>
                      <p className="mt-8 font-bold text-xl">— Founder, Connect2Roots Foundation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary to-c2r-accent" />
        </ParallaxSection>
        <div className="container relative z-10 text-center text-white">
          <ScrollReveal direction="fade">
            <Lightbulb className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-4">Be Part of Our Story</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every great story needs heroes. Will you be one of ours?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => navigate({ to: '/get-involved' })}>
                Join the Movement
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" onClick={() => navigate({ to: '/contact' })}>
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
