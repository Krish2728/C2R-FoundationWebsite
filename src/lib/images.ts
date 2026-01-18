// Image mappings to Unsplash - free, high-quality images relevant to Connect2Roots Foundation
// These are placeholder images that can be replaced with actual photos later

export const images = {
  // Hero and banners
  'hero-banner.dim_1200x600.jpg': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop&q=80',
  
  // Team and collaboration
  'team-collaboration.dim_800x500.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&q=80',
  'founder-headshot.dim_300x300.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80',
  
  // Mentorship and education
  'mentorship-workshop.dim_800x600.jpg': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
  'volunteer-mentoring.dim_800x500.jpg': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop&q=80',
  'career-catalyst.dim_600x400.jpg': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&q=80',
  
  // Skills and development
  'skill-development.dim_600x400.jpg': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80',
  'digital-skills.dim_400x300.jpg': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&q=80',
  'sustainability-skills.dim_400x300.jpg': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&q=80',
  'human-skills.dim_400x300.jpg': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&q=80',
  'entrepreneurship-skills.dim_400x300.jpg': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&q=80',
  'livelihood-skills.dim_400x300.jpg': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop&q=80',
  
  // Entrepreneurship
  'entrepreneurship-support.dim_600x400.jpg': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&q=80',
  
  // Corporate and partnerships
  'corporate-partnership.dim_600x400.jpg': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&q=80',
  'corporate-handshake.dim_600x400.jpg': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&q=80',
  
  // Future of work and policy
  'future-of-work.dim_800x500.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80',
  'policy-research.dim_600x400.jpg': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
  
  // Donation and impact
  'donation-impact.dim_600x400.jpg': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&q=80',
  
  // Reports
  'annual-report-cover.dim_400x600.jpg': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=600&fit=crop&q=80',
  
  // SDG Icons (using relevant images)
  'sdg-4-education.dim_200x200.png': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=200&fit=crop&q=80',
  'sdg-8-work.dim_200x200.png': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop&q=80',
  'sdg-9-innovation.dim_200x200.png': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop&q=80',
  'sdg-10-equality.dim_200x200.png': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=200&fit=crop&q=80',
  'sdg-17-partnerships.dim_200x200.png': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop&q=80',
  
  // Challenge icons (using relevant icons)
  'talent-scarcity-icon.dim_64x64.png': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=64&h=64&fit=crop&q=80',
  'performance-icon.dim_64x64.png': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=64&h=64&fit=crop&q=80',
  'attrition-icon.dim_64x64.png': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=64&h=64&fit=crop&q=80',
  'reskilling-icon.dim_64x64.png': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=64&h=64&fit=crop&q=80',
  
  // Logo placeholder
  'c2r-logo-transparent.dim_200x200.png': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop&q=80',
};

// Helper function to get image URL
export function getImageUrl(imagePath: string): string {
  // Extract filename from path
  const filename = imagePath.split('/').pop() || imagePath;
  
  // Check if we have a mapping for this image
  if (images[filename as keyof typeof images]) {
    return images[filename as keyof typeof images];
  }
  
  // Return original path if no mapping found
  return imagePath;
}

// Helper to get image URL or return default
export function getImageUrlOrDefault(imagePath: string, defaultUrl?: string): string {
  const url = getImageUrl(imagePath);
  if (url === imagePath && defaultUrl) {
    return defaultUrl;
  }
  return url;
}
