import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Users, Linkedin, Heart, Award, Sparkles } from 'lucide-react';
import { useTeamMembers } from '@/hooks/useQueries';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ChapterHeader } from '@/components/ChapterHeader';
import { getImageUrl } from '@/lib/images';

export default function OurTeamPage() {
  const navigate = useNavigate();
  const { data: teamMembers = [] } = useTeamMembers();

  // Categorize team members (you can adjust this logic based on your data structure)
  const leadership = teamMembers.filter(m => m.role.toLowerCase().includes('founder') || m.role.toLowerCase().includes('director'));
  const coreTeam = teamMembers.filter(m => !m.role.toLowerCase().includes('founder') && !m.role.toLowerCase().includes('director') && !m.role.toLowerCase().includes('advisor'));
  const advisors = teamMembers.filter(m => m.role.toLowerCase().includes('advisor'));

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
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Our Team</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                The passionate individuals driving our mission forward
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Our People"
            title="The People Behind the Movement"
            subtitle="United by purpose, driven by passion, committed to impact"
          />

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6 text-center">
                <p className="text-xl">
                  Behind every success story, every transformed life, and every empowered community is a team of 
                  dedicated individuals who believe in the power of mentorship and the potential in every person.
                </p>
                
                <p>
                  Our team brings together diverse expertise from education, technology, social impact, and business—all 
                  united by a shared commitment to creating opportunities for underserved communities.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-5xl mx-auto">
              <img 
                src="/assets/generated/team-collaboration.dim_800x500.jpg" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-2xl w-full transform transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Team */}
      {leadership.length > 0 && (
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-secondary/10 via-transparent to-c2r-accent/10" />
          <div className="container relative">
            <ChapterHeader 
              chapter="Leadership"
              title="Guiding Our Vision"
              subtitle="The leaders steering our mission and strategy"
              icon={<Award className="h-8 w-8" />}
            />

            <div className="max-w-6xl mx-auto">
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {leadership.map((member, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-t-4 border-t-c2r-primary">
                      <CardContent className="pt-8 text-center">
                        {member.photoUrl ? (
                          <img 
                            src={member.photoUrl} 
                            alt={member.name} 
                            className="mb-6 h-40 w-40 rounded-full object-cover mx-auto border-4 border-c2r-accent/20 shadow-xl" 
                          />
                        ) : (
                          <div className="mb-6 h-40 w-40 rounded-full bg-gradient-to-br from-c2r-primary to-c2r-accent mx-auto flex items-center justify-center text-white text-4xl font-bold">
                            {member.name.charAt(0)}
                          </div>
                        )}
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-sm text-c2r-primary font-semibold mb-4">{member.role}</p>
                        <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                        {member.linkedinUrl && (
                          <a 
                            href={member.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-c2r-primary hover:text-c2r-accent transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="text-sm font-medium">Connect on LinkedIn</span>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Team */}
      {coreTeam.length > 0 && (
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container">
            <ChapterHeader 
              chapter="Core Team"
              title="The Heart of Our Operations"
              subtitle="Dedicated professionals making it all happen"
              icon={<Users className="h-8 w-8" />}
            />

            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {coreTeam.map((member, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="pt-8 text-center">
                        {member.photoUrl ? (
                          <img 
                            src={member.photoUrl} 
                            alt={member.name} 
                            className="mb-4 h-32 w-32 rounded-full object-cover mx-auto border-4 border-c2r-secondary/20 shadow-lg" 
                          />
                        ) : (
                          <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-c2r-secondary to-c2r-accent mx-auto flex items-center justify-center text-white text-3xl font-bold">
                            {member.name.charAt(0)}
                          </div>
                        )}
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-sm text-c2r-secondary font-semibold mb-3">{member.role}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                        {member.linkedinUrl && (
                          <a 
                            href={member.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-c2r-secondary hover:text-c2r-accent transition-colors text-sm"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Advisors */}
      {advisors.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container">
            <ChapterHeader 
              chapter="Advisors"
              title="Guiding Voices"
              subtitle="Experienced mentors shaping our strategy and impact"
              icon={<Sparkles className="h-8 w-8" />}
            />

            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {advisors.map((member, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-l-4 border-l-c2r-accent">
                      <CardContent className="pt-8 text-center">
                        {member.photoUrl ? (
                          <img 
                            src={member.photoUrl} 
                            alt={member.name} 
                            className="mb-4 h-32 w-32 rounded-full object-cover mx-auto border-4 border-c2r-accent/20 shadow-lg" 
                          />
                        ) : (
                          <div className="mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-c2r-accent to-c2r-primary mx-auto flex items-center justify-center text-white text-3xl font-bold">
                            {member.name.charAt(0)}
                          </div>
                        )}
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-sm text-c2r-accent font-semibold mb-3">{member.role}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                        {member.linkedinUrl && (
                          <a 
                            href={member.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-c2r-accent hover:text-c2r-primary transition-colors text-sm"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Community Contributors Note */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-c2r-primary/5 to-c2r-accent/5">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="mx-auto mb-6 h-16 w-16 text-c2r-accent" />
              <h2 className="text-3xl font-bold mb-6">Our Community of Contributors</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Beyond our core team, Connect2Roots is powered by a vibrant community of volunteer mentors, 
                partner organizations, and supporters who contribute their time, expertise, and resources to 
                make our mission possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">50+ volunteer mentors</span> from diverse industries, 
                <span className="font-bold text-foreground"> 10+ partner colleges</span>, and countless supporters 
                who believe in the power of mentorship to transform lives.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary to-c2r-accent" />
        </ParallaxSection>
        <div className="container relative z-10 text-center text-white">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether as a mentor, volunteer, or team member—there's a place for you in our movement
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
                onClick={() => navigate({ to: '/contact' })}
              >
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
