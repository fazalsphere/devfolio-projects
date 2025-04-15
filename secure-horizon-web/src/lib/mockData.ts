export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Auto Insurance Coverage Options',
    excerpt: 'Learn about the different types of auto insurance coverage and how to choose the right options for your needs.',
    content: `
      Auto insurance is a crucial investment that protects you financially in case of accidents, theft, or damage to your vehicle. Understanding the different types of coverage available is essential for making informed decisions about your insurance policy.

      ## Types of Auto Insurance Coverage

      ### 1. Liability Coverage
      This is the most basic and required type of auto insurance in most states. It covers:
      - Bodily injury to others
      - Property damage to others' vehicles or property
      - Legal defense costs if you're sued

      ### 2. Collision Coverage
      This coverage pays for damage to your vehicle when you're in an accident, regardless of who's at fault. It's especially important for newer vehicles or those with high value.

      ### 3. Comprehensive Coverage
      Protects your vehicle from non-collision related damage, including:
      - Theft
      - Vandalism
      - Natural disasters
      - Falling objects
      - Animal collisions

      ## How to Choose the Right Coverage

      When selecting auto insurance coverage, consider:
      1. Your vehicle's value
      2. Your financial situation
      3. State requirements
      4. Your risk tolerance
      5. Your driving habits

      Remember, while it might be tempting to choose the minimum required coverage to save money, having adequate protection can save you from significant financial hardship in the long run.
    `,
    date: 'April 10, 2025',
    readTime: '5 min read',
    author: 'Michael Johnson',
    category: 'Auto Insurance',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'How to Protect Your Home Against Natural Disasters',
    excerpt: 'Discover essential tips and insurance considerations to protect your home from hurricanes, floods, earthquakes and more.',
    content: `
      Natural disasters can strike at any time, causing devastating damage to homes and properties. Being prepared and having the right insurance coverage is crucial for protecting your investment and ensuring peace of mind.

      ## Common Natural Disasters and Protection Strategies

      ### Hurricanes
      - Install impact-resistant windows and doors
      - Reinforce your roof
      - Have a reliable backup power system
      - Maintain proper drainage systems
      - Review your windstorm insurance coverage

      ### Floods
      - Elevate critical utilities
      - Install flood barriers
      - Use water-resistant building materials
      - Consider flood insurance (separate from standard homeowners insurance)
      - Create an emergency evacuation plan

      ### Earthquakes
      - Secure heavy furniture and fixtures
      - Retrofit your foundation if necessary
      - Install flexible gas and water connections
      - Add earthquake insurance to your policy
      - Keep emergency supplies readily available

      ## Insurance Considerations

      1. Review your policy annually
      2. Understand what is and isn't covered
      3. Document your belongings
      4. Consider additional coverage for specific risks
      5. Maintain an emergency fund

      Remember: Standard homeowners insurance may not cover all natural disasters. Speak with your insurance agent to ensure you have comprehensive protection for your specific location and risks.
    `,
    date: 'April 3, 2025',
    readTime: '7 min read',
    author: 'Sarah Williams',
    category: 'Home Insurance',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Life Insurance 101: What You Need to Know',
    excerpt: 'An introduction to life insurance policies, how they work, and how to determine the right coverage for your family.',
    content: `
      Life insurance is one of the most important financial tools for protecting your family's future. Understanding the basics will help you make informed decisions about your coverage needs.

      ## Types of Life Insurance

      ### Term Life Insurance
      - Provides coverage for a specific period
      - Generally more affordable
      - Pure death benefit
      - No cash value component
      - Ideal for temporary needs

      ### Permanent Life Insurance
      - Provides lifetime coverage
      - Builds cash value
      - Higher premiums
      - Various types:
        - Whole Life
        - Universal Life
        - Variable Life

      ## How Much Coverage Do You Need?

      Consider these factors when determining coverage:
      1. Current income and future earning potential
      2. Outstanding debts
      3. Future education expenses
      4. Funeral and final expenses
      5. Family's lifestyle needs

      ## Choosing the Right Policy

      When selecting a life insurance policy:
      - Assess your long-term financial goals
      - Compare quotes from multiple insurers
      - Consider your budget
      - Review the insurer's financial strength
      - Understand policy terms and conditions

      Remember: Life insurance needs change over time. Review your coverage regularly and adjust as needed to ensure your family remains adequately protected.
    `,
    date: 'March 28, 2025',
    readTime: '6 min read',
    author: 'David Chen',
    category: 'Life Insurance',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
}; 