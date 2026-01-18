import { ChapterHeader } from '@/components/ChapterHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getImageUrl } from '@/lib/images';
import { StoryCard } from '@/components/StoryCard';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Lightbulb, Target, Users, TrendingUp, Globe, Briefcase, Leaf, Heart, Rocket, MapPin } from 'lucide-react';
import { ParallaxSection } from '@/components/ParallaxSection';

export default function SepfPage() {
  const sdgs = [
    {
      number: 4,
      title: 'Quality Education',
      description: 'Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all.',
      image: getImageUrl('/assets/generated/sdg-4-education.dim_200x200.png'),
    },
    {
      number: 8,
      title: 'Decent Work and Economic Growth',
      description: 'Promoting sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.',
      image: getImageUrl('/assets/generated/sdg-8-work.dim_200x200.png'),
    },
    {
      number: 9,
      title: 'Industry, Innovation, and Infrastructure',
      description: 'Building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.',
      image: getImageUrl('/assets/generated/sdg-9-innovation.dim_200x200.png'),
    },
    {
      number: 10,
      title: 'Reduced Inequalities',
      description: 'Reducing inequality within and among countries through equitable access to opportunities.',
      image: getImageUrl('/assets/generated/sdg-10-equality.dim_200x200.png'),
    },
    {
      number: 17,
      title: 'Partnerships for the Goals',
      description: 'Strengthening the means of implementation and revitalizing global partnerships for sustainable development.',
      image: getImageUrl('/assets/generated/sdg-17-partnerships.dim_200x200.png'),
    },
  ];

  const skillClusters = [
    {
      title: 'Digital Skills',
      description: 'Empowering youth with coding, data analytics, AI literacy, and digital marketing capabilities for the tech-driven future.',
      icon: <Target className="h-12 w-12 text-c2r-primary" />,
      image: getImageUrl('/assets/generated/digital-skills.dim_400x300.jpg'),
    },
    {
      title: 'Sustainability Skills',
      description: 'Building awareness and competencies in green technologies, circular economy, and climate-conscious practices.',
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      image: getImageUrl('/assets/generated/sustainability-skills.dim_400x300.jpg'),
    },
    {
      title: 'Human Skills',
      description: 'Cultivating critical thinking, emotional intelligence, communication, and adaptability for collaborative work environments.',
      icon: <Heart className="h-12 w-12 text-c2r-accent" />,
      image: getImageUrl('/assets/generated/human-skills.dim_400x300.jpg'),
    },
    {
      title: 'Entrepreneurship Skills',
      description: 'Fostering innovation mindset, business acumen, and self-employment capabilities for creating sustainable livelihoods.',
      icon: <Rocket className="h-12 w-12 text-c2r-secondary" />,
      image: getImageUrl('/assets/generated/entrepreneurship-skills.dim_400x300.jpg'),
    },
    {
      title: 'Local Livelihood Skills',
      description: 'Strengthening traditional crafts, agriculture tech, and community-based enterprises rooted in local contexts.',
      icon: <MapPin className="h-12 w-12 text-amber-600" />,
      image: getImageUrl('/assets/generated/livelihood-skills.dim_400x300.jpg'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/policy-research.dim_600x400.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="text-center max-w-4xl mx-auto text-white">
              <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Policy & Research</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                C2R SEPF
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-4">
                Skills & Entrepreneurship Policy Forum
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                The foresight, research, and policy arm of Connect2Roots — bridging aspirations with opportunities through evidence-based insights and collaborative action.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <ChapterHeader
            chapter="Our Mission"
            title="Shaping the Future of Work"
            subtitle="SEPF serves as the strategic intelligence hub, analyzing emerging career pathways and advocating for policies that create sustainable opportunities for first-generation learners."
            icon={<Lightbulb className="h-16 w-16 text-c2r-primary" />}
          />

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="left" delay={100}>
              <div>
                <h3 className="text-3xl font-bold mb-6">What We Do</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    SEPF conducts deep research into the evolving landscape of skills, entrepreneurship, and employment. We identify future-ready career pathways and translate complex labor market trends into actionable guidance for youth, educators, and policymakers.
                  </p>
                  <p>
                    Through partnerships with industry, academia, and government, we advocate for inclusive policies that ensure no talented individual is left behind due to lack of information or opportunity.
                  </p>
                  <p>
                    Our work informs Connect2Roots' mentorship curriculum, ensuring every conversation between mentor and mentee is grounded in real-world relevance and forward-looking insights.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                <img
                  src={getImageUrl('/assets/generated/policy-research.dim_600x400.jpg')}
                  alt="Policy Research"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-c2r-accent text-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-semibold text-lg">Evidence-based insights driving real impact</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* UN SDGs Alignment Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="Global Impact"
            title="Aligned with UN Sustainable Development Goals"
            subtitle="Our work directly contributes to achieving the United Nations' vision for a more equitable and sustainable world."
            icon={<Globe className="h-16 w-16 text-c2r-secondary" />}
          />

          <ScrollReveal direction="fade" delay={100}>
            <div className="max-w-5xl mx-auto">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {sdgs.map((sdg) => (
                    <CarouselItem key={sdg.number} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <img src={sdg.image} alt={`SDG ${sdg.number}`} className="h-20 w-20" />
                            <div>
                              <div className="text-sm font-semibold text-c2r-accent mb-1">SDG {sdg.number}</div>
                              <CardTitle className="text-xl">{sdg.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{sdg.description}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Focus Areas Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <ChapterHeader
            chapter="Future-Ready Skills"
            title="Five Core Skill Clusters"
            subtitle="Preparing youth for the multi-dimensional demands of tomorrow's workforce through comprehensive skill development."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillClusters.map((cluster, index) => (
              <ScrollReveal key={cluster.title} direction="up" delay={index * 100}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-c2r-accent">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{cluster.icon}</div>
                    <CardTitle className="text-center text-2xl">{cluster.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={cluster.image}
                        alt={cluster.title}
                        className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <p className="text-muted-foreground text-center">{cluster.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Youth & Future of Work Section */}
      <section className="py-20 bg-gradient-to-br from-c2r-primary/5 to-c2r-secondary/5">
        <div className="container">
          <ChapterHeader
            chapter="The Challenge"
            title="Youth & the Future of Work"
            subtitle="Understanding the seismic shifts reshaping careers and the unique challenges facing first-generation learners."
            icon={<TrendingUp className="h-16 w-16 text-c2r-primary" />}
          />

          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="fade" delay={100}>
              <div className="relative mb-12">
                <img
                  src={getImageUrl('/assets/generated/future-of-work.dim_800x500.jpg')}
                  alt="Future of Work"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal direction="left" delay={200}>
                <Card className="bg-gradient-to-br from-background to-muted/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">Global Shifts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Automation & AI:</strong> Routine jobs are disappearing while demand for creative, analytical, and interpersonal skills is surging.
                    </p>
                    <p>
                      <strong className="text-foreground">Gig Economy:</strong> Traditional employment models are giving way to flexible, project-based work requiring entrepreneurial mindsets.
                    </p>
                    <p>
                      <strong className="text-foreground">Green Transition:</strong> Climate action is creating millions of new jobs in renewable energy, sustainable agriculture, and circular economy.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <Card className="bg-gradient-to-br from-background to-muted/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">First-Generation Challenges</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Information Gap:</strong> Limited access to career guidance and awareness of emerging opportunities beyond traditional paths.
                    </p>
                    <p>
                      <strong className="text-foreground">Network Deficit:</strong> Lack of professional connections and mentors who can open doors and provide insider knowledge.
                    </p>
                    <p>
                      <strong className="text-foreground">Skill Mismatch:</strong> Educational systems often lag behind industry needs, leaving youth unprepared for real-world demands.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <ChapterHeader
            chapter="Critical Insights"
            title="Key Themes Shaping Careers"
            subtitle="Three fundamental shifts that every young person must understand and prepare for."
          />

          <div className="max-w-5xl mx-auto space-y-12">
            <StoryCard
              title="Multi-Career Life Paths"
              description="The era of single-career lifetimes is over. Today's youth will navigate 5-7 different careers, requiring continuous reinvention and adaptability. Success belongs to those who embrace lifelong learning and view career transitions as opportunities for growth rather than setbacks."
              image="/assets/generated/career-catalyst.dim_600x400.jpg"
              delay={100}
            />

            <StoryCard
              title="The Gig Work Evolution"
              description="Freelancing, consulting, and project-based work are becoming mainstream. This shift demands entrepreneurial skills, personal branding, and the ability to manage uncertainty. Young people must learn to be their own CEOs, marketing their skills and building diverse income streams."
              image="/assets/generated/entrepreneurship-support.dim_600x400.jpg"
              delay={200}
              reverse
            />

            <StoryCard
              title="Continuous Learning Imperative"
              description="Skills have a shorter shelf life than ever before. What you learn today may be obsolete in five years. The winners in tomorrow's economy will be those who cultivate curiosity, embrace discomfort, and commit to perpetual skill upgrading through micro-credentials, online courses, and experiential learning."
              image="/assets/generated/skill-development.dim_600x400.jpg"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Role of Career Mentoring Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ChapterHeader
            chapter="The Bridge"
            title="Why Career Mentoring Matters"
            subtitle="Mentoring is the critical link that transforms skills into sustainable livelihoods and aspirations into achievements."
            icon={<Users className="h-16 w-16 text-c2r-accent" />}
          />

          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="fade" delay={100}>
              <div className="bg-gradient-to-br from-c2r-primary/10 to-c2r-secondary/10 rounded-2xl p-8 md:p-12 mb-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="mb-4">
                      <AnimatedCounter end={73} duration={2000} suffix="%" className="text-5xl font-bold text-c2r-primary" />
                    </div>
                    <p className="text-lg font-semibold mb-2">Career Clarity</p>
                    <p className="text-muted-foreground">of mentored youth report clearer career goals</p>
                  </div>
                  <div>
                    <div className="mb-4">
                      <AnimatedCounter end={2.5} duration={2000} suffix="x" decimals={1} className="text-5xl font-bold text-c2r-secondary" />
                    </div>
                    <p className="text-lg font-semibold mb-2">Higher Earnings</p>
                    <p className="text-muted-foreground">average income increase with mentorship</p>
                  </div>
                  <div>
                    <div className="mb-4">
                      <AnimatedCounter end={85} duration={2000} suffix="%" className="text-5xl font-bold text-c2r-accent" />
                    </div>
                    <p className="text-lg font-semibold mb-2">Job Placement</p>
                    <p className="text-muted-foreground">success rate within 6 months of program completion</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal direction="left" delay={200}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">What Mentors Provide</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-c2r-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Insider Knowledge:</strong> Real-world insights that textbooks can't teach</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-c2r-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Network Access:</strong> Introductions to opportunities and key contacts</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-c2r-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Confidence Building:</strong> Encouragement to pursue ambitious goals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-c2r-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Course Correction:</strong> Timely feedback to avoid costly mistakes</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">SEPF's Role in Mentoring</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-c2r-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Curriculum Design:</strong> Evidence-based mentoring frameworks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-c2r-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Trend Analysis:</strong> Identifying emerging career pathways</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-c2r-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Mentor Training:</strong> Equipping mentors with latest insights</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-c2r-secondary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Impact Measurement:</strong> Tracking outcomes and refining approaches</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SEPF's Contribution Section */}
      <section className="py-20 bg-gradient-to-br from-c2r-primary/10 via-background to-c2r-secondary/10">
        <div className="container">
          <ChapterHeader
            chapter="Our Impact"
            title="SEPF's Contribution to the Ecosystem"
            subtitle="Driving systemic change through research, advocacy, and strategic partnerships."
            icon={<Briefcase className="h-16 w-16 text-c2r-primary" />}
          />

          <div className="max-w-5xl mx-auto space-y-8">
            <ScrollReveal direction="up" delay={100}>
              <Card className="border-l-4 border-l-c2r-primary">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Target className="h-8 w-8 text-c2r-primary" />
                    Policy Advocacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    We engage with government bodies, educational institutions, and industry leaders to advocate for policies that expand access to quality career guidance and skill development. Our research briefs inform policy decisions at state and national levels, ensuring the voices of first-generation learners are heard in corridors of power.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <Card className="border-l-4 border-l-c2r-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Lightbulb className="h-8 w-8 text-c2r-secondary" />
                    Research & Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Our research team conducts longitudinal studies tracking career outcomes, analyzes labor market trends, and publishes white papers on emerging skill demands. We translate complex data into actionable insights that inform curriculum design, mentor training, and student guidance across the Connect2Roots ecosystem.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <Card className="border-l-4 border-l-c2r-accent">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Users className="h-8 w-8 text-c2r-accent" />
                    Strategic Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    SEPF convenes industry leaders, academic institutions, and civil society organizations to co-create solutions for youth employability. Through multi-stakeholder forums, we facilitate knowledge exchange, pilot innovative programs, and scale proven interventions that bridge the gap between education and employment.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="fade" delay={400}>
            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold mb-6">Join Us in Shaping the Future</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Whether you're a researcher, policymaker, industry leader, or passionate advocate for youth empowerment, there's a place for you in the SEPF community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-c2r-primary hover:bg-c2r-primary/90">
                  Collaborate With Us
                </Button>
                <Button size="lg" variant="outline">
                  Download Research Reports
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
