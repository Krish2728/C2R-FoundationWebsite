import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Users, Briefcase, Heart, CheckCircle2, ArrowRight, Clock, BookOpen, Sparkles, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getImageUrl } from '@/lib/images';
import { ParallaxSection } from '@/components/ParallaxSection';
import { StoryCard } from '@/components/StoryCard';
import { ChapterHeader } from '@/components/ChapterHeader';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export default function GetInvolvedPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero with Parallax */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/volunteer-mentoring.dim_800x500.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal direction="fade">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">Join the Next Chapter</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Every great story needs heroes. Choose your role in this movement of transformation—whether through mentorship, partnership, support, or collaboration.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Volunteer Section - Become a Mentor */}
      <section id="volunteer" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <ChapterHeader 
            chapter="Share Your Journey"
            title="Volunteer with Us"
            subtitle="Your time and expertise can transform lives"
            icon={<Users className="h-16 w-16 text-c2r-primary" />}
          />

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Featured Quote */}
            <ScrollReveal delay={100}>
              <div className="relative py-16 px-8 md:px-16 bg-gradient-to-br from-c2r-primary/10 via-c2r-accent/5 to-c2r-secondary/10 rounded-2xl border-l-8 border-c2r-accent">
                <div className="absolute top-8 left-8 text-8xl text-c2r-accent/20 font-serif">"</div>
                <blockquote className="relative z-10 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    2 hours a week can change a student's future.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    And in the process, it might just change yours too.
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Become a Mentor Volunteer */}
            <div className="space-y-12">
              <ScrollReveal delay={200}>
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h3 className="text-3xl font-bold mb-4">Become a Mentor Volunteer</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Join a community of professionals who are making a tangible difference. As a mentor volunteer, 
                    you'll guide students through career decisions, share your insights, and help them navigate the 
                    path from aspiration to achievement.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: <Clock className="h-10 w-10 text-c2r-primary" />,
                    title: 'Flexibility',
                    description: 'Commit just 2 hours a week at times that work for you. Virtual sessions mean you can mentor from anywhere.'
                  },
                  {
                    icon: <BookOpen className="h-10 w-10 text-c2r-accent" />,
                    title: 'Training Provided',
                    description: 'Comprehensive onboarding and ongoing support ensure you feel confident and prepared for every session.'
                  },
                  {
                    icon: <Sparkles className="h-10 w-10 text-c2r-secondary" />,
                    title: 'AI Tools Support',
                    description: 'Access our AI-powered platform that helps match you with students and provides conversation guides and resources.'
                  },
                  {
                    icon: <Award className="h-10 w-10 text-c2r-primary" />,
                    title: 'Meaningful Purpose',
                    description: 'Experience the profound satisfaction of watching your mentee grow, succeed, and pay it forward to others.'
                  }
                ].map((benefit, index) => (
                  <ScrollReveal key={index} delay={300 + index * 100}>
                    <Card className="h-full border-t-4 border-t-c2r-accent transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="pt-8 text-center">
                        <div className="flex justify-center mb-4">{benefit.icon}</div>
                        <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={700}>
                <div className="text-center">
                  <Button size="lg" className="text-lg px-10 py-6" onClick={() => navigate({ to: '/contact' })}>
                    Apply as a Mentor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Mentor Success Story */}
            <StoryCard
              title="How Mentoring Changed Priya's Life"
              description="When Priya signed up as a mentor, she didn't expect to gain as much as she gave. Through guiding her mentee, she rediscovered her passion, expanded her network, and found a renewed sense of purpose. 'I thought I was just sharing career advice,' she says, 'but I ended up transforming my own perspective on success and fulfillment.'"
              image={getImageUrl('/assets/generated/volunteer-mentoring.dim_800x500.jpg')}
              delay={800}
            />
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section id="partnerships" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-secondary/10 via-transparent to-c2r-accent/10" />
        <div className="container relative">
          <ChapterHeader 
            chapter="Partner for Impact"
            title="Corporate Partnerships"
            subtitle="When business meets purpose, communities thrive"
            icon={<Briefcase className="h-16 w-16 text-c2r-accent" />}
          />

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Partnership Overview */}
            <ScrollReveal delay={100}>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Partner with Connect2Roots to build a future-ready workforce while creating meaningful social impact. 
                  Our corporate partnerships go beyond traditional CSR—they're strategic investments in talent development, 
                  employee engagement, and community transformation.
                </p>
              </div>
            </ScrollReveal>

            {/* Engagement Models */}
            <div className="space-y-8">
              <ScrollReveal delay={200}>
                <h3 className="text-3xl font-bold text-center mb-8">Engagement Models</h3>
              </ScrollReveal>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { 
                    title: 'Employee Mentorship Programs', 
                    desc: 'Engage your team in meaningful community impact while developing their leadership and coaching skills.',
                    link: 'Learn More'
                  },
                  { 
                    title: 'Skills Sponsorship', 
                    desc: 'Fund training programs that create a pipeline of job-ready talent aligned with your industry needs.',
                    link: 'Explore Options'
                  },
                  { 
                    title: 'Internship & Hiring Partnerships', 
                    desc: 'Access motivated, trained candidates while providing life-changing career opportunities.',
                    link: 'View Programs'
                  },
                  { 
                    title: 'CSR Integration', 
                    desc: 'Align your corporate values with measurable social impact through structured programs.',
                    link: 'Get Started'
                  },
                  { 
                    title: 'Custom Solutions', 
                    desc: 'Co-create programs tailored to your organization\'s goals and community impact vision.',
                    link: 'Contact Us'
                  },
                  { 
                    title: 'Pro Bono Consulting', 
                    desc: 'Leverage your team\'s expertise to strengthen our operations and scale our impact.',
                    link: 'Contribute'
                  }
                ].map((model, index) => (
                  <ScrollReveal key={index} delay={300 + index * 100}>
                    <Card className="h-full border-l-4 border-l-c2r-accent transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="pt-6">
                        <h4 className="text-xl font-bold mb-3">{model.title}</h4>
                        <p className="text-muted-foreground mb-4">{model.desc}</p>
                        <Button variant="link" className="p-0 h-auto text-c2r-accent">
                          {model.link} <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Employer Benefits & Impact Stats */}
            <div className="grid gap-8 lg:grid-cols-2">
              <ScrollReveal delay={600}>
                <Card className="h-full bg-gradient-to-br from-c2r-primary/5 to-c2r-accent/5">
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-bold mb-6">Employer Benefits</h3>
                    <ul className="space-y-4">
                      {[
                        'Enhanced employer brand and talent attraction',
                        'Improved employee engagement and retention',
                        'Development of leadership and coaching skills',
                        'Access to diverse, motivated talent pipeline',
                        'Measurable social impact aligned with ESG goals',
                        'Strengthened community relationships'
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-c2r-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <Card className="h-full bg-gradient-to-br from-c2r-secondary/5 to-c2r-accent/5">
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-bold mb-6">Impact Statistics</h3>
                    <div className="space-y-6">
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-4xl font-bold text-c2r-primary mb-2">
                          <AnimatedCounter end={2000} suffix="+" />
                        </div>
                        <p className="text-sm text-muted-foreground">Students Mentored</p>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-4xl font-bold text-c2r-accent mb-2">
                          <AnimatedCounter end={50} suffix="+" />
                        </div>
                        <p className="text-sm text-muted-foreground">Corporate Partners</p>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-4xl font-bold text-c2r-secondary mb-2">
                          <AnimatedCounter end={85} suffix="%" />
                        </div>
                        <p className="text-sm text-muted-foreground">Placement Success Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* How It Works - 3 Steps */}
            <div className="space-y-8">
              <ScrollReveal delay={800}>
                <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
              </ScrollReveal>

              <div className="relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-c2r-primary via-c2r-accent to-c2r-secondary -translate-y-1/2 z-0" />
                
                <div className="grid gap-8 lg:grid-cols-3 relative z-10">
                  {[
                    {
                      step: '1',
                      title: 'Discovery & Alignment',
                      description: 'We meet to understand your goals, values, and desired impact. Together, we design a partnership model that aligns with your organizational objectives.'
                    },
                    {
                      step: '2',
                      title: 'Program Design & Launch',
                      description: 'Our team handles the logistics—from employee onboarding to student matching. We provide training, resources, and ongoing support to ensure success.'
                    },
                    {
                      step: '3',
                      title: 'Impact & Reporting',
                      description: 'Track measurable outcomes through our dashboard. Receive regular impact reports, success stories, and insights to share with stakeholders.'
                    }
                  ].map((step, index) => (
                    <ScrollReveal key={index} delay={900 + index * 100}>
                      <Card className="relative bg-background border-2 border-c2r-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <CardContent className="pt-8 text-center">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-c2r-primary to-c2r-accent flex items-center justify-center text-white text-xl font-bold shadow-lg">
                            {step.step}
                          </div>
                          <h4 className="text-xl font-bold mb-4 mt-4">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Partnership Story */}
            <StoryCard
              title="How TechCorp Transformed Their CSR"
              description="TechCorp partnered with us to create an employee mentorship program. Not only did they help 200+ students find their career paths, but their employees reported 40% higher engagement and job satisfaction. 'Our partnership with Connect2Roots isn't just CSR—it's become part of our culture and a key driver of employee retention,' says their CEO."
              image={getImageUrl('/assets/generated/corporate-handshake.dim_600x400.jpg')}
              delay={1200}
              reverse
            />

            <ScrollReveal delay={1300}>
              <div className="text-center">
                <Button size="lg" className="text-lg px-10 py-6" onClick={() => navigate({ to: '/contact' })}>
                  Partner with Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Challenges We Solve</h2>
              <p className="text-lg text-muted-foreground">
                Organizations face critical workforce challenges. Connect2Roots provides strategic solutions 
                that address these pain points while creating social impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '/assets/generated/talent-scarcity-icon.dim_64x64.png',
                title: 'Talent Scarcity',
                description: 'Access a pipeline of motivated, trained candidates from diverse backgrounds ready to contribute to your organization.'
              },
              {
                icon: '/assets/generated/performance-icon.dim_64x64.png',
                title: 'On-the-Job Performance',
                description: 'Our mentorship-first approach ensures candidates arrive with soft skills, work readiness, and professional mindset.'
              },
              {
                icon: '/assets/generated/attrition-icon.dim_64x64.png',
                title: 'High Attrition',
                description: 'Employees engaged in mentorship programs show 25% higher retention rates and stronger organizational commitment.'
              },
              {
                icon: '/assets/generated/reskilling-icon.dim_64x64.png',
                title: 'Reskilling & Workforce Transition',
                description: 'Partner with us to upskill your existing workforce and prepare them for emerging roles and technologies.'
              }
            ].map((challenge, index) => (
              <ScrollReveal key={index} delay={100 + index * 100}>
                <Card className="h-full text-center border-t-4 border-t-c2r-accent transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-4">
                      <img src={challenge.icon} alt={challenge.title} className="w-16 h-16" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Connect2Roots Different */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/5 via-transparent to-c2r-accent/5" />
        <div className="container relative">
          <div className="max-w-6xl mx-auto space-y-16">
            <ScrollReveal>
              <div className="relative py-16 px-8 md:px-16 bg-gradient-to-br from-c2r-accent/10 via-c2r-primary/5 to-c2r-secondary/10 rounded-2xl border-l-8 border-c2r-primary">
                <div className="absolute top-8 left-8 text-8xl text-c2r-primary/20 font-serif">"</div>
                <blockquote className="relative z-10 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-relaxed">
                    What Makes Connect2Roots Different
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    We don't just connect students with mentors—we build ecosystems. Our TRIANGLE Framework ensures 
                    that career pathways are future-focused, mentorship is human-centered, and outcomes are sustainable 
                    through industry-academia-government alignment. We combine cutting-edge AI with deep empathy, 
                    creating a scalable model that transforms lives while respecting the unique journey of each individual.
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Voices from Our Ecosystem */}
            <div className="space-y-8">
              <ScrollReveal delay={200}>
                <h3 className="text-3xl font-bold text-center mb-12">Voices from Our Ecosystem</h3>
              </ScrollReveal>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'Rajesh Kumar',
                    role: 'Student, Engineering Graduate',
                    message: 'Connect2Roots didn\'t just help me find a job—they helped me discover my purpose. My mentor believed in me when I didn\'t believe in myself.',
                    photo: null
                  },
                  {
                    name: 'Priya Sharma',
                    role: 'Mentor, Tech Lead at Microsoft',
                    message: 'Mentoring through C2R has been the most rewarding experience of my career. Watching my mentee grow from uncertainty to confidence has been incredible.',
                    photo: null
                  },
                  {
                    name: 'Amit Patel',
                    role: 'HR Director, TechCorp',
                    message: 'Our partnership with Connect2Roots transformed our CSR from checkbox activity to cultural cornerstone. Employee engagement is up 40% since we started.',
                    photo: null
                  },
                  {
                    name: 'Dr. Meera Reddy',
                    role: 'College Principal',
                    message: 'C2R bridges the gap between academic learning and industry readiness. Our students are more confident and career-focused thanks to this partnership.',
                    photo: null
                  },
                  {
                    name: 'Sanjay Gupta',
                    role: 'Entrepreneur & Donor',
                    message: 'I\'ve supported many causes, but C2R\'s impact is tangible and measurable. Every rupee creates ripples that extend far beyond the initial investment.',
                    photo: null
                  },
                  {
                    name: 'Anita Desai',
                    role: 'Student, First-Generation Graduate',
                    message: 'Coming from a small town, I never imagined working at a multinational company. C2R made the impossible possible through guidance and belief.',
                    photo: null
                  }
                ].map((testimonial, index) => (
                  <ScrollReveal key={index} delay={300 + index * 100}>
                    <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="pt-8">
                        <div className="mb-4">
                          <div className="text-4xl text-c2r-accent/30 font-serif">"</div>
                        </div>
                        <p className="text-muted-foreground mb-6 italic leading-relaxed">
                          {testimonial.message}
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-c2r-primary to-c2r-accent flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl font-bold text-center mb-16">A Message from Our Founder</h2>
            </ScrollReveal>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal delay={200} direction="left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-c2r-primary/20 to-c2r-accent/20 rounded-2xl blur-xl" />
                  <img 
                    src={getImageUrl('/assets/generated/founder-headshot.dim_300x300.jpg')} 
                    alt="Founder" 
                    className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300} direction="right">
                <div className="space-y-6">
                  <div className="text-6xl text-c2r-primary/30 font-serif">"</div>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      When I started Connect2Roots, I had a simple belief: <strong className="text-foreground">talent is everywhere, 
                      opportunity is not.</strong> I've seen brilliant minds in small towns and underserved communities—young people 
                      with dreams as big as anyone's, but without the networks, guidance, or pathways to realize them.
                    </p>
                    <p>
                      This isn't just about career counseling or skill training. It's about <strong className="text-foreground">restoring 
                      dignity, unlocking potential, and creating ecosystems</strong> where every young person—regardless of their 
                      background—can access the mentorship, skills, and opportunities they deserve.
                    </p>
                    <p>
                      Every mentor who volunteers, every company that partners, every donor who contributes—you're not just supporting 
                      a program. <strong className="text-foreground">You're investing in human potential.</strong> You're saying that 
                      where someone comes from doesn't determine where they can go.
                    </p>
                    <p>
                      Join us. Whether you have 2 hours a week, resources to share, or a vision to co-create—there's a place for you 
                      in this movement. Together, we're not just changing individual lives. <strong className="text-foreground">We're 
                      transforming communities, one connection at a time.</strong>
                    </p>
                  </div>
                  <div className="pt-6 border-t">
                    <p className="font-bold text-xl">With gratitude and hope,</p>
                    <p className="text-c2r-primary font-semibold text-lg">Founder, Connect2Roots Foundation</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-c2r-accent/10 via-transparent to-c2r-primary/10" />
        <div className="container relative">
          <ChapterHeader 
            chapter="Invest in Change"
            title="Support Our Mission"
            subtitle="Every contribution writes a new chapter in someone's story"
            icon={<Heart className="h-16 w-16 text-c2r-primary" />}
          />

          <div className="max-w-6xl mx-auto space-y-12">
            <StoryCard
              title="How Your Support Creates Ripples"
              description="When you donate to Connect2Roots, you're not just funding programs—you're investing in dreams. Your $50 supports a mentorship session. Your $250 funds a student's journey for three months. Your $1,000 transforms five lives. And those five lives? They go on to mentor others, creating an endless ripple of positive change."
              image={getImageUrl('/assets/generated/donation-impact.dim_600x400.jpg')}
              delay={100}
            />

            <ScrollReveal delay={200}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: 'Supporter', amount: '$50', impact: 'Fund one mentorship session' },
                  { name: 'Champion', amount: '$250', impact: 'Support one student for 3 months' },
                  { name: 'Catalyst', amount: '$1,000', impact: 'Transform 5 students for 6 months' },
                  { name: 'Transformer', amount: '$5,000+', impact: 'Fund a complete program cohort' },
                ].map((pkg, index) => (
                  <Card key={index} className={`transition-all duration-300 hover:scale-105 ${index === 3 ? 'border-t-4 border-t-c2r-accent' : ''}`}>
                    <CardContent className="pt-8 text-center">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-bold text-c2r-primary mb-4">{pkg.amount}</div>
                      <p className="text-sm text-muted-foreground mb-6">{pkg.impact}</p>
                      <Button className="w-full" variant={index === 3 ? 'default' : 'outline'}>
                        Donate Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="bg-gradient-to-br from-c2r-accent/10 to-c2r-primary/10 border-none">
                <CardContent className="pt-8 text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Every contribution, no matter the size, makes a difference. Your support helps us reach more students, 
                    train more mentors, and create more opportunities for underserved communities. Together, we're not just 
                    changing lives—we're transforming futures.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Other Alliances */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Other Alliances & Collaborations</h2>
              <p className="text-lg text-muted-foreground">
                Beyond mentorship and corporate partnerships, we collaborate with diverse stakeholders to create 
                systemic change and expand our impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Academic Institutions',
                description: 'Partner with colleges and universities to integrate career readiness into curriculum and provide students with mentorship access.',
                cta: 'Explore Academic Partnerships'
              },
              {
                title: 'Government & Policy Bodies',
                description: 'Collaborate on skill development initiatives, policy research, and programs aligned with national employment goals.',
                cta: 'Learn About Policy Work'
              },
              {
                title: 'NGOs & Social Enterprises',
                description: 'Join forces with organizations working in education, livelihoods, and community development for greater collective impact.',
                cta: 'Partner with Us'
              },
              {
                title: 'Technology Partners',
                description: 'Leverage technology platforms, AI tools, and digital infrastructure to scale our mentorship and training programs.',
                cta: 'Explore Tech Collaboration'
              },
              {
                title: 'Media & Communications',
                description: 'Amplify our stories, raise awareness, and inspire more people to join the movement through strategic media partnerships.',
                cta: 'Get Involved'
              },
              {
                title: 'Foundations & Philanthropies',
                description: 'Collaborate on grant-funded programs, research initiatives, and long-term strategic projects for sustainable impact.',
                cta: 'Discuss Opportunities'
              }
            ].map((alliance, index) => (
              <ScrollReveal key={index} delay={100 + index * 100}>
                <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold mb-3">{alliance.title}</h3>
                    <p className="text-muted-foreground mb-6">{alliance.description}</p>
                    <Button variant="link" className="p-0 h-auto text-c2r-accent" onClick={() => navigate({ to: '/contact' })}>
                      {alliance.cta} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary to-c2r-accent" />
        </ParallaxSection>
        <div className="container relative z-10 text-center text-white">
          <ScrollReveal direction="fade">
            <h2 className="text-4xl font-bold mb-4">Your Chapter Awaits</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose how you'll contribute to this story of transformation. Every role matters. Every action counts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => navigate({ to: '/contact' })}>
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm" onClick={() => navigate({ to: '/about' })}>
                Learn Our Story
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
