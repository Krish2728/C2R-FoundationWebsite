import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';
import { GraduationCap, Briefcase, TrendingUp, CheckCircle2 } from 'lucide-react';
import { usePrograms } from '@/hooks/useQueries';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getImageUrl } from '@/lib/images';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ChapterHeader } from '@/components/ChapterHeader';

export default function ProgramsPage() {
  const navigate = useNavigate();
  const { data: programs = [] } = usePrograms();

  const defaultPrograms = [
    {
      id: 1,
      chapter: 'Dream',
      title: 'C2R Career Catalyst Mentorship Program',
      icon: GraduationCap,
      image: getImageUrl('/assets/generated/career-catalyst.dim_600x400.jpg'),
      story: 'Meet Priya, a first-generation college student who dreamed of becoming a software engineer but didn\'t know where to start. Through our mentorship program, she connected with an industry professional who guided her journey, reviewed her resume, and opened doors she never knew existed.',
      objective: 'To provide personalized career guidance and mentorship to students and young professionals from underserved communities, helping them navigate their career paths and achieve their professional goals.',
      focusAreas: [
        'Career exploration and goal setting',
        'Resume building and interview preparation',
        'Professional networking and personal branding',
        'Industry insights and workplace readiness',
      ],
      modules: [
        'One-on-one mentorship sessions',
        'Career assessment and planning workshops',
        'Mock interviews and feedback sessions',
        'Networking events with industry professionals',
      ],
      outcomes: [
        'Increased career clarity and confidence',
        'Improved job application success rates',
        'Expanded professional networks',
        'Higher employment rates among participants',
      ],
    },
    {
      id: 2,
      chapter: 'Learn',
      title: 'C2R Skill Development Program',
      icon: Briefcase,
      image: getImageUrl('/assets/generated/skill-development.dim_600x400.jpg'),
      story: 'Rahul had the passion but lacked the technical skills employers demanded. Our skill development program equipped him with industry-recognized certifications and hands-on project experience. Today, he works at a leading tech company, mentoring others who were once in his shoes.',
      objective: 'To bridge the skills gap by providing industry-relevant training programs that prepare participants for in-demand careers and enhance their employability.',
      focusAreas: [
        'Technical skills training (IT, digital marketing, data analysis)',
        'Soft skills development (communication, leadership, teamwork)',
        'Industry certifications and credentials',
        'Hands-on project experience',
      ],
      modules: [
        'Structured training courses with expert instructors',
        'Practical assignments and real-world projects',
        'Certification preparation and exam support',
        'Job placement assistance and career counseling',
      ],
      outcomes: [
        'Industry-recognized certifications',
        'Enhanced technical and soft skills',
        'Portfolio of completed projects',
        'Improved job market competitiveness',
      ],
    },
    {
      id: 3,
      chapter: 'Thrive',
      title: 'C2R Livelihoods & Entrepreneurship Support Program',
      icon: TrendingUp,
      image: getImageUrl('/assets/generated/entrepreneurship-support.dim_600x400.jpg'),
      story: 'Ayesha had a vision to create sustainable fashion from recycled materials. With our entrepreneurship support, she developed a business plan, secured funding, and launched her venture. Now, her business employs 15 people from her community, creating a ripple effect of opportunity.',
      objective: 'To empower aspiring entrepreneurs and small business owners with the knowledge, resources, and support needed to launch and grow sustainable ventures that create economic opportunities within their communities.',
      focusAreas: [
        'Business planning and strategy development',
        'Financial literacy and funding access',
        'Marketing and customer acquisition',
        'Operations management and scaling',
      ],
      modules: [
        'Entrepreneurship bootcamps and workshops',
        'Business mentorship and advisory services',
        'Pitch preparation and investor connections',
        'Access to microfinance and grant opportunities',
      ],
      outcomes: [
        'Viable business plans and models',
        'Launched or scaled businesses',
        'Access to funding and resources',
        'Job creation within communities',
      ],
    },
  ];

  const displayPrograms = programs.length > 0 ? programs.map(p => {
    const defaultProg = defaultPrograms.find(dp => dp.id === Number(p.id)) || defaultPrograms[0];
    return {
      ...p,
      chapter: defaultProg.chapter,
      story: defaultProg.story,
      icon: defaultProg.icon,
      image: defaultProg.image,
    };
  }) : defaultPrograms;

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero with Parallax */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/career-catalyst.dim_600x400.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Three Chapters of Transformation</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Every journey has its stages. Dream, Learn, Thrive—these are the chapters we write together.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs as Story Chapters */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="space-y-32">
            {displayPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index}>
                  <ChapterHeader 
                    chapter={`Chapter ${index + 1}: ${program.chapter}`}
                    title={program.title}
                    icon={<Icon className="h-16 w-16 text-c2r-accent" />}
                  />

                  <div className="max-w-6xl mx-auto space-y-12">
                    {/* Story Section */}
                    <ScrollReveal delay={100} direction={index % 2 === 0 ? 'left' : 'right'}>
                      <Card className="bg-gradient-to-br from-c2r-accent/5 to-c2r-primary/5 border-l-4 border-l-c2r-accent">
                        <CardContent className="pt-8">
                          <h3 className="text-2xl font-bold mb-4">A Story of {program.chapter}</h3>
                          <p className="text-lg text-muted-foreground italic leading-relaxed">
                            {program.story}
                          </p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>

                    {/* Program Details */}
                    <div className={`flex flex-col gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                      <ScrollReveal delay={200} direction={index % 2 === 0 ? 'left' : 'right'} className="lg:w-1/2">
                        <div className="relative overflow-hidden rounded-lg shadow-2xl">
                          <img src={program.image} alt={program.title} className="w-full h-auto transform transition-transform duration-700 hover:scale-110" />
                        </div>
                      </ScrollReveal>

                      <ScrollReveal delay={300} direction={index % 2 === 0 ? 'right' : 'left'} className="lg:w-1/2">
                        <Card className="h-full border-t-4 border-t-c2r-primary">
                          <CardContent className="pt-6 space-y-6">
                            <div>
                              <h4 className="text-xl font-bold mb-3">Our Approach</h4>
                              <p className="text-muted-foreground leading-relaxed">{program.objective}</p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">Focus Areas</h4>
                              <div className="flex flex-wrap gap-2">
                                {program.focusAreas.map((area, i) => (
                                  <Badge key={i} variant="secondary" className="text-sm">{area}</Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">What You'll Experience</h4>
                              <ul className="space-y-2">
                                {program.modules.map((module, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-c2r-accent flex-shrink-0 mt-0.5" />
                                    <span>{module}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">Your Transformation</h4>
                              <ul className="space-y-2">
                                {program.outcomes.map((outcome, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-c2r-primary flex-shrink-0 mt-0.5" />
                                    <span>{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </ScrollReveal>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-secondary to-c2r-accent" />
        </ParallaxSection>
        <div className="container relative z-10 text-center text-white">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl font-bold mb-4">Ready to Write Your Chapter?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every great story begins with a single step. Take yours today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => navigate({ to: '/mentorship' })}>
                Begin Your Journey
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" onClick={() => navigate({ to: '/contact' })}>
                Learn More
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
