/**
 * Filename: app/data/jobsData.ts
 * Description: Unified data source for Job Listings and Job Detail pages.
 * tailored to match Trivira Nutraceuticals content.
 */

export interface Job {
  // Listing Fields (Card View)
  id: string;
  title: string;
  category: string; // Used for the Section Headers in the listing page
  location: string;
  department: string; // Used for Sidebar filtering
  type: string; 
  shortDescription: string;
  
  // Detail Fields (Single Page View)
  companyDescription: string;
  roleOverview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  // --- Category: Sales & Marketing Executive ---
  {
    id: "sales-marketing-executive",
    title: "Sales & Marketing Executive",
    category: "Sales & Marketing Executive",
    location: "Ahmedabad, Gujarat",
    department: "Direct Sales",
    type: "Full-Time",
    shortDescription: "Drive brand awareness and sales adoption across India.",
    
    companyDescription: "At Trivira Nutraceuticals, we're on a mission to bring plant-based proteins, functional mushrooms, and natural wellness products to every Indian household. Founded with the vision of blending tradition with modern science, we create premium nutrition solutions that nurture health and sustain nature. As we grow, we're looking for passionate individuals to join our journey.",
    roleOverview: "We are seeking a Sales & Marketing Executive who will play a key role in expanding Trivira’s reach across India. This role combines sales, brand promotion, and customer engagement to drive awareness, adoption, and loyalty for our wellness products.",
    responsibilities: [
      "Develop and implement sales strategies to achieve monthly and quarterly targets.",
      "Build and maintain relationships with distributors, retailers, and wellness communities.",
      "Conduct product presentations, demos, and awareness sessions for potential clients.",
      "Identify new markets, partnerships, and growth opportunities.",
      "Plan and execute marketing campaigns (online and offline) to promote Trivira products.",
      "Collaborate with the creative team for digital content, promotions, and campaigns.",
      "Monitor competitor activities and market trends to refine strategies.",
      "Represent Trivira at trade shows, wellness events, and exhibitions."
    ],
    requirements: [
      "Bachelor’s degree in Marketing, Business Administration, or a related field.",
      "1–3 years of experience in sales and/or marketing (FMCG, nutraceuticals, or wellness industry preferred).",
      "Strong communication, presentation, and interpersonal skills.",
      "Ability to work independently and meet deadlines.",
      "Passion for health, wellness, and sustainable living.",
      "Willingness to travel across regions for business development."
    ],
    benefits: [
      "Competitive salary + performance-based incentives.",
      "Opportunity to work with a growing wellness brand shaping the future of nutrition.",
      "Collaborative, people-first work culture.",
      "Career growth and skill development opportunities.",
      "The chance to make a real impact on India’s health and wellness landscape."
    ]
  },
  {
    id: "sales-manager-sol",
    title: "Sales Manager, Product Solutions",
    category: "Sales & Marketing Executive",
    location: "Gurugram",
    department: "Direct Sales",
    type: "Full-Time",
    shortDescription: "Lead enterprise sales strategies and solutions.",
    
    companyDescription: "Trivira Nutraceuticals is expanding its enterprise footprint.",
    roleOverview: "Lead our enterprise sales strategies, focusing on B2B partnerships and bulk wellness solutions.",
    responsibilities: [
      "Manage key enterprise accounts.",
      "Develop sales forecasts and strategies.",
      "Lead a team of junior sales executives."
    ],
    requirements: [
      "B2B sales experience",
      "Proven track record in closing large deals",
      "5+ years of experience"
    ],
    benefits: ["Health Insurance", "Stock Options", "Remote friendly"]
  },

  // --- Category: Product Development Intern ---
  {
    id: "prod-dev-intern",
    title: "Product Development Intern",
    category: "Product Development Intern",
    location: "Ahmedabad",
    department: "Product",
    type: "Internship",
    shortDescription: "Assist in the lifecycle of new wellness products.",
    
    companyDescription: "Join the innovation heart of Trivira.",
    roleOverview: "Support the product team in researching and testing new formulations.",
    responsibilities: [
      "Assist in market research.",
      "Help coordinate product testing phases.",
      "Document feedback and improvements."
    ],
    requirements: [
      "BCA/B.Tech student",
      "Java basics",
      "Analytical skills"
    ],
    benefits: ["Internship Certificate", "Mentorship", "Stipend"]
  },
  {
    id: "prod-designer",
    title: "Product Designer",
    category: "Product Development Intern",
    location: "Gurugram",
    department: "Product",
    type: "Internship",
    shortDescription: "Design packaging and digital assets for new products.",
    
    companyDescription: "Help shape the visual identity of our wellness products.",
    roleOverview: "Work closely with the design lead to create packaging and marketing materials.",
    responsibilities: [
      "Create mockups for product packaging.",
      "Design social media assets.",
      "Collaborate with the marketing team."
    ],
    requirements: [
      "Design degree student",
      "Adobe Creative Suite",
      "Portfolio"
    ],
    benefits: ["Internship Certificate", "Flexible hours"]
  },

  // --- Category: Creative Designer ---
  {
    id: "ux-designer",
    title: "UX Designer",
    category: "Creative Designer",
    location: "United Kingdom",
    department: "Engineering",
    type: "Remote",
    shortDescription: "Design intuitive user experiences for our digital platforms.",
    
    companyDescription: "Trivira is going digital with a new global platform.",
    roleOverview: "Design user-centric interfaces for our e-commerce and wellness tracking apps.",
    responsibilities: [
      "Create wireframes and prototypes.",
      "Conduct user research.",
      "Collaborate with developers."
    ],
    requirements: [
      "Figma proficiency",
      "3+ years experience",
      "Understanding of HTML/CSS"
    ],
    benefits: ["Remote work", "Global team exposure"]
  },
  {
    id: "design-manager",
    title: "Design Manager",
    category: "Creative Designer",
    location: "Gurugram",
    department: "Product",
    type: "Full-Time",
    shortDescription: "Lead the design team and brand consistency.",
    
    companyDescription: "Ensure the Trivira brand remains premium and consistent.",
    roleOverview: "Oversee all design outputs from digital to physical packaging.",
    responsibilities: [
      "Manage the design team.",
      "Approve all creative assets.",
      "Define brand guidelines."
    ],
    requirements: [
      "Leadership experience",
      "Strong Portfolio",
      "Brand management experience"
    ],
    benefits: ["Leadership bonus", "Health coverage"]
  },

  // --- Category: Operations & Supply Chain Coordinator ---
  {
    id: "ops-manager",
    title: "Operation Manager",
    category: "Operations & Supply Chain Coordinator",
    location: "Ahmedabad",
    department: "Operations",
    type: "Full-Time",
    shortDescription: "Oversee daily operations and logistics.",
    
    companyDescription: "Operational excellence is key to our customer promise.",
    roleOverview: "Ensure smooth daily operations from warehousing to delivery.",
    responsibilities: [
      "Optimize supply chain processes.",
      "Manage vendor relationships.",
      "Oversee inventory management."
    ],
    requirements: [
      "5+ years experience",
      "Supply chain management degree",
      "Problem-solving skills"
    ],
    benefits: ["Competitive Pay", "On-site gym"]
  },
  {
    id: "ops-coordinator",
    title: "Operation Coordinator",
    category: "Operations & Supply Chain Coordinator",
    location: "USA, Texas",
    department: "Operations",
    type: "Remote",
    shortDescription: "Coordinate global logistics and supply chain operations.",
    
    companyDescription: "Supporting our international expansion.",
    roleOverview: "Coordinate logistics for our US-based distribution centers.",
    responsibilities: [
      "Track shipments.",
      "Coordinate with local carriers.",
      "Manage export/import documentation."
    ],
    requirements: [
      "Logistics experience",
      "Strong organizational skills",
      "Time zone flexibility"
    ],
    benefits: ["Remote work", "Travel allowance"]
  }
];