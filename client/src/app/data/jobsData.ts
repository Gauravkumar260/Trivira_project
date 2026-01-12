/**
 * Filename: app/data/jobsData.ts
 * Description: Central source of truth for job listings.
 */

export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string; // Full-time, Remote, etc.
  description: string;
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "sales-marketing-executive",
    title: "Sales & Marketing Executive",
    location: "Ahmedabad, Gujarat",
    department: "Direct Sales",
    type: "Full-Time",
    description: "We are seeking a Sales & Marketing Executive who will play a key role in expanding Trivira’s reach across India. This role combines sales, brand promotion, and customer engagement to drive awareness, adoption, and loyalty for our wellness products.",
    requirements: [
      "Bachelor’s degree in Marketing, Business Administration, or related field.",
      "1–3 years of experience in sales (FMCG/Wellness preferred).",
      "Strong communication and interpersonal skills.",
      "Willingness to travel across regions."
    ]
  },
  {
    id: "product-designer",
    title: "Product Designer",
    location: "Gurugram",
    department: "Product",
    type: "Full-Time",
    description: "Design intuitive and beautiful user experiences for our digital wellness platforms. You will work closely with product managers and engineers to bring ideas to life.",
    requirements: [
      "3+ years experience in UI/UX design.",
      "Proficiency in Figma and Adobe Creative Suite.",
      "Strong portfolio showcasing web and mobile apps."
    ]
  },
  {
    id: "sales-manager",
    title: "Sales Manager, Product Solutions",
    location: "Gurugram",
    department: "Direct Sales",
    type: "Full-Time",
    description: "Lead our enterprise sales team to new heights. You will be responsible for defining sales strategies and managing key client relationships.",
    requirements: [
      "5+ years in B2B sales.",
      "Proven track record of meeting targets.",
      "Leadership experience."
    ]
  },
  {
    id: "operation-coordinator",
    title: "Operations Coordinator",
    location: "Texas, USA",
    department: "Operations",
    type: "Remote",
    description: "Coordinate global logistics and supply chain operations to ensure timely delivery of our premium products worldwide.",
    requirements: [
      "Experience in logistics or supply chain management.",
      "Strong organizational skills.",
      "Fluent in English."
    ]
  }
];