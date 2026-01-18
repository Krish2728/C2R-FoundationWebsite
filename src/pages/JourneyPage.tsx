import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { getImageUrl } from '@/lib/images';
import { MapPin, Calendar, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { ParallaxSection } from '@/components/ParallaxSection';

export default function JourneyPage() {
  const milestones = [
    {
      year: '2017',
      title: 'The Seed is Planted',
      description: 'Connect2Roots Foundation was founded with a vision to bridge the opportunity gap for underserved youth through mentorship.',
      icon: MapPin,
      image: getImageUrl('/assets/generated/founder-headshot.dim_300x300.jpg'),
      highlights: [
        'Foundation established',
        'First mentorship pilot program launched',
        'Initial team of 5 volunteer mentors',
      ],
    },
    {
      year: '2018-2019',
      title: 'Building the Foundation',
      description: 'We developed our core mentorship curriculum and established partnerships with educational institutions.',
      icon: Users,
      image: getImageUrl('/assets/generated/team-collaboration.dim_800x500.jpg'),
      highlights: [
        'Structured mentorship curriculum created',
        'Partnership with first 3 colleges',
        'Reached 100 students',
        'Mentor training program established',
      ],
    },
    {
      year: '2020-2021',
      title: 'Adapting and Growing',
      description: 'Despite pandemic challenges, we pivoted to virtual mentorship and expanded our reach across multiple states.',
      icon: TrendingUp,
      image: getImageUrl('/assets/generated/mentorship-workshop.dim_800x600.jpg'),
      highlights: [
        'Transitioned to virtual mentorship platform',
        'Expanded to 8 states',
        'Launched skill development workshops',
        'Reached 500+ students',
        'Grew mentor network to 30+ volunteers',
      ],
    },
    {
      year: '2022-2023',
      title: 'Scaling Impact',
      description: 'We introduced AI-powered mentor matching and launched the TRIANGLE Framework for sustainable career outcomes.',
      icon: Sparkles,
      image: getImageUrl('/assets/generated/skill-development.dim_600x400.jpg'),
      highlights: [
        'AI-powered mentor matching implemented',
        'TRIANGLE Framework launched',
        'Corporate partnership program initiated',
        'Reached 1,500+ students',
        'Expanded to 15+ states',
        'Launched C2R SEPF (Skills & Entrepreneurship Policy Forum)',
      ],
    },
    {
      year: '2024',
      title: 'Deepening Our Reach',
      description: 'We strengthened our programs, expanded partnerships, and achieved significant milestones in student outcomes.',
      icon: Award,
      image: getImageUrl('/assets/generated/volunteer-mentoring.dim_800x500.jpg'),
      highlights: [
        'Crossed 2,000 students mentored',
        '50+ volunteer mentors',
        '10+ partner colleges',
        'Launched livelihood support programs',
        'Established corporate CSR partnerships',
        'Published first annual impact report',
      ],
    },
    {
      year: '2025 & Beyond',
      title: 'Vision for the Future',
      description: 'We aim to reach 10,000 students annually and establish Connect2Roots as a leading model for career mentorship in India.',
      icon: Calendar,
      image: getImageUrl('/assets/generated/future-of-work.dim_800x500.jpg'),
      highlights: [
        'Target: 10,000 students annually',
        'Expand to all Indian states',
        'Launch alumni network',
        'Develop advanced AI tools',
        'Establish regional hubs',
        'Create policy advocacy initiatives',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
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
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Journey</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                From a small idea to a growing movement—the story of Connect2Roots
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">A Story of Growth and Impact</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What began as a vision to connect underserved youth with career mentors has grown into a comprehensive 
                  platform transforming lives across India. Here's how we've evolved over the years.
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-c2r-primary via-c2r-secondary to-c2r-accent hidden md:block" />

              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-c2r-primary to-c2r-secondary text-white shadow-lg z-10">
                        <milestone.icon className="h-8 w-8" />
                      </div>

                      {/* Content */}
                      <div className="md:ml-24">
                        <Card className="border-l-4 border-l-c2r-accent hover:shadow-xl transition-all duration-300">
                          <CardContent className="pt-8">
                            <div className="grid gap-8 lg:grid-cols-[1fr,auto] items-start">
                              <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-c2r-accent/20 md:hidden">
                                    <milestone.icon className="h-6 w-6 text-c2r-accent" />
                                  </div>
                                  <div className="text-2xl font-bold text-c2r-accent">{milestone.year}</div>
                                </div>
                                <h3 className="text-2xl font-bold">{milestone.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                  {milestone.description}
                                </p>
                                <div className="bg-muted/50 p-4 rounded-lg">
                                  <h4 className="font-semibold mb-3 text-c2r-primary">Key Highlights:</h4>
                                  <ul className="space-y-2">
                                    {milestone.highlights.map((highlight, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <div className="mt-1.5 h-2 w-2 rounded-full bg-c2r-accent shrink-0" />
                                        <span className="text-muted-foreground">{highlight}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="lg:w-64 shrink-0">
                                <img 
                                  src={milestone.image} 
                                  alt={milestone.title} 
                                  className="rounded-lg shadow-lg w-full object-cover"
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-c2r-primary via-c2r-secondary to-c2r-accent text-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">The Journey Continues</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Every milestone we've achieved has been possible because of our dedicated mentors, passionate students, 
                supportive partners, and committed team. As we look to the future, we remain focused on our mission: 
                empowering every young person to achieve their full potential.
              </p>
              <p className="text-xl font-semibold text-white">
                Join us as we write the next chapter of this journey together.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
