export const site = {
  name: 'Stichting Probitas',
  shortName: 'Probitas',
  tagline: 'Innovatie begint bij mensen',
  description:
    'Stichting Probitas ontwikkelt, verbindt en ondersteunt innovatieve projecten op het gebied van onderwijs, technologie en duurzame ontwikkeling in Suriname.',
} as const;

export const pillars = [
  { label: 'Technology', accent: 'blue' },
  { label: 'Education', accent: 'green' },
  { label: 'Agriculture', accent: 'orange' },
  { label: 'Impact', accent: 'purple' },
] as const;

export const nav = {
  primary: [
    { label: 'Home', href: '#home' },
    { label: 'Projecten', href: '#nieuws' },
    { label: 'Partners', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ],
  programs: [
    {
      title: 'InnovED',
      description: 'Digitale geletterdheid, AI en trainingen',
      href: '#programmas',
    },
    {
      title: 'World Smart College',
      description: 'Arbeidsmarktgerichte opleidingen',
      href: '#programmas',
    },
    {
      title: 'ITLearn',
      description: 'ICT-support en netwerkbeheer',
      href: '#programmas',
    },
    {
      title: 'Probi-Kas',
      description: 'Agro-innovatie en aquaponics',
      href: '#programmas',
    },
    {
      title: 'STEM & Innovatie',
      description: 'FabLab, robotica en digitale fabricage',
      href: '#programmas',
    },
  ],
} as const;

export const programs = [
  {
    key: 'digital-skills',
    title: 'Digital Skills',
    description: 'Digitale vaardigheden voor vandaag en morgen.',
    icon: 'RiComputerLine',
    accent: 'blue',
    href: '#programmas',
  },
  {
    key: 'probi-kas',
    title: 'Probi-Kas',
    description: 'Slimme landbouw voor een duurzame toekomst.',
    icon: 'RiSeedlingLine',
    accent: 'green',
    href: '#programmas',
  },
  {
    key: 'consultatie',
    title: 'Consultatie',
    description: 'Samen bouwen aan kansen en een betere samenleving.',
    icon: 'RiTeamLine',
    accent: 'orange',
    href: '#programmas',
  },
] as const;

export const stats = [
  {
    key: 'students',
    value: '750+',
    label: 'Studenten bereikt',
    icon: 'RiGraduationCapLine',
    accent: 'blue',
  },
  {
    key: 'hours',
    value: '1000+',
    label: 'Trainingsuren verzorgd',
    icon: 'RiBookOpenLine',
    accent: 'purple',
  },
  {
    key: 'partners',
    value: '15',
    label: 'Partners',
    icon: 'RiHandHeartLine',
    accent: 'green',
  },
  {
    key: 'projects',
    value: '25+',
    label: 'Innovatieprojecten',
    icon: 'RiLeafLine',
    accent: 'green',
  },
] as const;

export const news = [
  {
    key: 'ai-workshop',
    image: '/images/news-ai-workshop.png',
    category: 'Training',
    accent: 'blue',
    title: 'AI & ChatGPT Workshop voor jongeren',
    date: '15 mei 2025',
    href: '#',
  },
  {
    key: 'stem-lab',
    image: '/images/news-stem-lab.png',
    category: 'STEM',
    accent: 'purple',
    title: 'Nieuw STEM Lab in ontwikkeling',
    date: '8 mei 2025',
    href: '#',
  },
  {
    key: 'peppers',
    image: '/images/news-peppers.png',
    category: 'Probi-Kas',
    accent: 'green',
    title: 'Eerste paprika oogst succesvol binnen!',
    date: '2 mei 2025',
    href: '#',
  },
  {
    key: 'partnership',
    image: '/images/news-partnership.png',
    category: 'Partnerschap',
    accent: 'orange',
    title: 'Nieuwe samenwerking met NATIN',
    date: '25 april 2025',
    href: '#',
  },
] as const;

export const footerLinks = [
  { label: "Programma's", href: '#programmas' },
  { label: 'Projecten', href: '#nieuws' },
  { label: 'Word Partner', href: '#contact' },
  { label: 'Contact', href: '#contact' },
] as const;

export const socials = [
  { label: 'Facebook', icon: 'RiFacebookFill', href: '#' },
  { label: 'Instagram', icon: 'RiInstagramLine', href: '#' },
  { label: 'LinkedIn', icon: 'RiLinkedinFill', href: '#' },
  { label: 'YouTube', icon: 'RiYoutubeFill', href: '#' },
] as const;

export const contact = {
  address: ['Kwattaweg 405', 'Paramaribo, Suriname'],
  phone: '+597 873 9797',
  email: 'info@stichtingprobitas.org',
  website: 'www.stichtingprobitas.org',
};
