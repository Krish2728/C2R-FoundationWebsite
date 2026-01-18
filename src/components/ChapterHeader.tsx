import { ReactNode } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ChapterHeaderProps {
  chapter: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export function ChapterHeader({ chapter, title, subtitle, icon }: ChapterHeaderProps) {
  return (
    <ScrollReveal direction="fade">
      <div className="text-center mb-16">
        {icon && (
          <div className="flex justify-center mb-6">
            {icon}
          </div>
        )}
        <div className="inline-block mb-4 px-6 py-2 bg-c2r-accent/10 rounded-full">
          <span className="text-sm font-semibold text-c2r-accent uppercase tracking-wider">{chapter}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-c2r-primary to-c2r-secondary bg-clip-text text-transparent">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </ScrollReveal>
  );
}
