import tour1 from './images/tour-1.jpg';
import tour2 from './images/tour-2.jpg';
import tour3 from './images/tour-3.jpg';
import tour4 from './images/tour-4.jpg';
import tour5 from './images/tour-5.jpg';
import tour6 from './images/tour-6.jpg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
  { id: 3, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'Tailored Adventures',
    text: 'Embark on a personalized journey. Our tailored adventures cater to individual preferences, ensuring a unique and unforgettable experience. Whether you crave an adrenaline-packed mountain trek, a cultural immersion, or a luxurious getaway, our diverse range of services allows you to customize your dream vacation.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'Guided Exploration',
    text: 'Discover the world with confidence through our expertly guided tours. Our team of seasoned professionals are not just guides but passionate ambassadors of the destinations they navigate. Immerse yourself in the heart of each location, gaining insights that go beyond the surface. From historical landmarks to hidden gems, our guided explorations promise a deeper connection with the places you visit.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'Responsible Travel',
    text: 'We are committed to responsible tourism. Our services prioritize sustainability and community support, ensuring minimal environmental impact while maximizing positive contributions to local cultures. Choose our eco-friendly and socially responsible travel options, and experience the joy of exploring the world while leaving a positive footprint behind.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2022',
    title: 'Tibet Adventure',
    info: 'Embark on a mystical journey to the roof of the world with our Tibet Adventure. Explore ancient monasteries, breathtaking landscapes, and immerse yourself in the rich cultural tapestry of Tibet. This tour offers a unique blend of spirituality and natural beauty, with highlights including visits to Lhasa, the Potala Palace, and the serene shores of Yamdrok Lake.',
    location: 'china',
    duration: '6 days',
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2022',
    title: 'best of java',
    info: "Indulge your senses in the diverse wonders of Java with our Best Of Java tour. From the vibrant streets of Jakarta to the ancient temples of Borobudur, this adventure captures the essence of Indonesia's most populous island. Witness the inspiring sunrise over Mount Bromo and experience the warmth of Javanese hospitality, making it an ideal exploration for culture enthusiasts and nature lovers alike.",
    location: 'indonesia',
    duration: '11 days',
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2023',
    title: 'explore hong kong',
    info: 'Uncover the dynamic fusion of East and West in the dazzling cityscape of Hong Kong. Our Explore Hong Kong tour takes you on a captivating journey through this vibrant metropolis. From the bustling markets and delicious street food to the serene beauty of Victoria Peak, experience the contrasts that make Hong Kong a truly unique destination for modern explorers.',
    location: 'hong kong',
    duration: '8 days',
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2023',
    title: 'kenya highlights',
    info: "Embark on a safari adventure through the wild wonders of Kenya with our Kenya Highlights tour. Witness the majestic landscapes of the Masai Mara, encounter diverse wildlife, and immerse yourself in the rich Maasai culture. This tour encapsulates the essence of East Africa, offering an unforgettable blend of thrilling wildlife encounters and cultural immersion in one of Africa's most iconic destinations.",
    location: 'kenya',
    duration: '20 days',
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: 'december 5th, 2024',
    title: 'Scandinavian Splendors',
    info: 'Discover the enchanting beauty of Scandinavia on our Scandinavian Splendors tour. Over 10 days, explore the vibrant cities of Stockholm, Oslo, and Copenhagen, each with its unique blend of history, modernity, and natural beauty. From the stunning fjords of Norway to the iconic landmarks of Sweden and Denmark, this journey promises a perfect mix of cultural immersion and breathtaking landscapes. Embrace the Nordic charm as you delve into rich history, savor local cuisine, and witness the mesmerizing Northern Lights.',
    location: 'Denmark',
    duration: '10 days',
    cost: 3500,
  },
  {
    id: 6,
    image: tour6,
    date: 'december 5th, 2024',
    title: 'Serengeti Safari Escape',
    info: 'Embark on an unforgettable wildlife adventure with our Serengeti Safari Escape. Spend 7 days exploring the vast plains of the Serengeti in Tanzania, home to the iconic Great Migration. Witness the incredible spectacle of wildebeest and zebras on their annual journey, and encounter the Big Five in their natural habitat. Immerse yourself in the unique landscapes, from the Ngorongoro Crater to the expansive Serengeti National Park. This safari promises an immersive wildlife experience, expertly guided, and filled with the magic of the African wilderness.',
    location: 'Tanzania',
    duration: '7 days',
    cost: 4200,
  },
];