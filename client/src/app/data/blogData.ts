export interface BlogPost {
  id: string; // Slug for the URL (e.g., 'functional-mushrooms')
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  readTime: string;
  date: string;
  content: string; // HTML content for the article
}

const assets = {
  blogs: {
    functionalMushrooms: "/assets/images/functional-mushrooms.svg",
    stevia: "/assets/images/stevia.svg",
    plantBasedProtein: "/assets/images/plant-based-protein.svg",
  }
};

export const blogPosts: BlogPost[] = [
  {
    id: "functional-mushrooms",
    title: "Functional Mushrooms",
    subtitle: "Ancient Wisdom for Modern Health",
    desc: "Discover how Reishi, Lion’s Mane and Cordyceps harness ancient wisdom to boost immunity, energy, and focus.",
    image: assets.blogs.functionalMushrooms, 
    readTime: "6 min read",
    date: "Oct 12, 2024",
    content: `
      <p>For thousands of years, mushrooms have fascinated humans—not just as a source of food, but also as powerful allies in healing and wellness. Across ancient civilizations, particularly in Traditional Chinese Medicine (TCM), Ayurveda, and indigenous practices, functional mushrooms were revered for their ability to promote longevity, restore balance, and strengthen the body against disease.</p>
      <br/>
      <h3>A Look Back: Mushrooms in Ancient Healing</h3>
      <p>Archaeological evidence shows that humans have used mushrooms medicinally for nearly 5,000 years. In ancient China, Reishi (Ganoderma lucidum) was called the “Mushroom of Immortality”. Tibetan healers prized Cordyceps for vitality. In Japan, Lion’s Mane was associated with sharpening the mind.</p>
      <br/>
      <h3>Key Functional Mushrooms</h3>
      <ul>
        <li><strong>Reishi:</strong> The "Queen of Mushrooms" for calm and immunity.</li>
        <li><strong>Lion's Mane:</strong> The "Brain Booster" for focus and memory.</li>
        <li><strong>Cordyceps:</strong> The "Energy Mushroom" for stamina and performance.</li>
      </ul>
    `
  },
  {
    id: "stevia",
    title: "Stevia",
    subtitle: "The Natural Sweetness Revolution",
    desc: "A zero-calorie, plant-based alternative to sugar that supports weight management and is safe for diabetics.",
    image: assets.blogs.stevia, 
    readTime: "4 min read",
    date: "Oct 15, 2024",
    content: `
      <p>Stevia is a natural sweetener derived from the leaves of the Stevia rebaudiana plant. It is up to 300 times sweeter than sugar but contains zero calories, making it a revolutionary ingredient for modern diets.</p>
      <br/>
      <h3>Why Switch?</h3>
      <p>Excessive sugar consumption is linked to obesity, diabetes, and inflammation. Stevia offers a safe alternative that doesn't spike blood glucose levels, allowing you to enjoy sweetness without the health risks.</p>
    `
  },
  {
    id: "plant-based-protein",
    title: "Plant-Based Protein",
    subtitle: "Fuel Your Body Cleanly",
    desc: "Clean, delicious, and packed with amino acids — supporting muscle recovery, energy, and overall wellness.",
    image: assets.blogs.plantBasedProtein, 
    readTime: "6 min read",
    date: "Oct 20, 2024",
    content: `
      <p>Gone are the days when protein meant only meat or dairy. Plant-based proteins are now complete, offering all essential amino acids your body needs for muscle repair and daily energy.</p>
      <br/>
      <h3>Sustainability</h3>
      <p>Plant protein requires significantly less water and land to produce than animal protein, making it the eco-friendly choice for the future. It's not just good for you; it's good for the planet.</p>
    `
  }
];