import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Target, Lightbulb, Shield, Sparkles } from 'lucide-react';
import { getImageUrl } from '@/lib/images';
import { ParallaxSection } from '@/components/ParallaxSection';

export default function OurValuesPage() {
  const values = [
    {
      icon: Heart,
      title: 'Empathy First',
      description: 'We believe in understanding the unique challenges faced by underserved communities and approaching every interaction with compassion and respect.',
      story: 'Every student we work with has a unique story. We listen, understand, and tailor our support to meet individual needs, ensuring no one is left behind.',
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Our strength lies in the collective power of mentors, students, partners, and volunteers working together toward a common goal.',
      story: 'From volunteer mentors dedicating their time to corporate partners providing resources, our community is the backbone of our impact.',
    },
    {
      icon: Target,
      title: 'Impact-Oriented',
      description: 'We measure success not by numbers alone, but by the real, tangible changes we create in the lives of students and their communities.',
      story: 'Every mentorship session, every skill learned, and every job secured represents a life transformed and a community uplifted.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Adaptability',
      description: 'We embrace technology and innovative approaches to scale our impact while remaining flexible to the evolving needs of our beneficiaries.',
      story: 'From AI-powered mentor matching to adaptive learning pathways, we continuously innovate to serve our students better.',
    },
    {
      icon: Shield,
      title: 'Integrity & Transparency',
      description: 'We operate with the highest standards of honesty, accountability, and transparency in all our programs and partnerships.',
      story: 'Our stakeholders trust us because we maintain open communication, share our challenges, and celebrate our successes together.',
    },
    {
      icon: Sparkles,
      title: 'Excellence in Execution',
      description: 'We are committed to delivering high-quality programs, resources, and support that truly make a difference.',
      story: 'From comprehensive mentor training to structured curricula, we ensure every aspect of our programs meets the highest standards.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImageUrl('/assets/generated/hero-banner.dim_1200x600.jpg')})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-c2r-primary/90 via-c2r-secondary/85 to-c2r-accent/80" />
        </ParallaxSection>
        <div className="container relative z-10 py-20">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Values</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                The principles that guide our mission and shape every decision we make
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
                <h2 className="text-3xl font-bold mb-6">What Drives Us Forward</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Connect2Roots, our values are more than words on a page—they are the foundation of everything we do. 
                  They guide how we serve our students, engage with our mentors, collaborate with partners, and measure our impact.
                </p>
              </div>
            </ScrollReveal>

            {/* Values Grid */}
            <div className="space-y-12">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="border-l-4 border-l-c2r-accent hover:shadow-xl transition-all duration-300">
                    <CardContent className="pt-8">
                      <div className="grid gap-8 md:grid-cols-[auto,1fr] items-start">
                        <div className="flex flex-col items-center gap-4">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-c2r-primary to-c2r-secondary text-white shadow-lg">
                            <value.icon className="h-10 w-10" />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-c2r-primary">{value.title}</h3>
                          <p className="text-lg text-foreground leading-relaxed">
                            {value.description}
                          </p>
                          <div className="bg-muted/50 p-4 rounded-lg border-l-2 border-c2r-accent">
                            <p className="text-muted-foreground italic leading-relaxed">
                              {value.story}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Living Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Living Our Values Every Day</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our values are reflected in every program we run, every partnership we forge, and every student we serve.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: 'In Our Programs',
                  description: 'We design mentorship curricula that prioritize empathy, cultural sensitivity, and personalized support.',
                },
                {
                  title: 'With Our Mentors',
                  description: 'We provide comprehensive training that emphasizes our values and equips mentors to make meaningful impact.',
                },
                {
                  title: 'Through Our Partnerships',
                  description: 'We collaborate with organizations that share our commitment to equity, excellence, and community empowerment.',
                },
                {
                  title: 'In Our Operations',
                  description: 'We maintain transparent reporting, ethical practices, and continuous improvement in all our activities.',
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-3 text-c2r-primary">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-c2r-primary via-c2r-secondary to-c2r-accent text-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Us in Living These Values</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Whether you're a student, mentor, partner, or supporter, you can be part of a community that puts these values into action every day.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
