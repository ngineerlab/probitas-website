export const site = {
  name: 'Stichting Probitas',
  shortName: 'Probitas',
  tagline: 'Innovatie begint bij mensen',
  description:
    'Stichting Probitas ontwikkelt, verbindt en ondersteunt innovatieve projecten op het gebied van onderwijs, technologie en duurzame ontwikkeling in Suriname.',
  positioning:
    'Stichting Probitas ontwikkelt, verbindt en ondersteunt innovatieve projecten op het gebied van onderwijs, technologie en duurzame ontwikkeling. Samen met gespecialiseerde partners realiseren wij programma’s die impact maken voor studenten, professionals en de samenleving.',
} as const;

export const pillars = [
  { label: 'Technology', accent: 'blue' },
  { label: 'Education', accent: 'green' },
  { label: 'Agriculture', accent: 'orange' },
  { label: 'Impact', accent: 'purple' },
] as const;

export const programDetails = [
  {
    slug: 'innoved',
    title: 'InnovED',
    accent: 'blue',
    icon: 'RiComputerLine',
    summary:
      'Digitale geletterdheid, AI en professionalisering voor studenten en professionals.',
    intro:
      'Hier komen alle opleidingen en trainingen op het gebied van digitale vaardigheden, kunstmatige intelligentie en professionele ontwikkeling samen — van basisvaardigheden tot bedrijfstrainingen op maat.',
    topics: [
      'Digitale geletterdheid',
      'Microsoft Office',
      'AI',
      'Docentprofessionalisering',
      'Bedrijfstrainingen',
      'Workshops',
    ],
  },
  {
    slug: 'world-smart-college',
    title: 'World Smart College',
    accent: 'purple',
    icon: 'RiUserHeartLine',
    summary:
      'Arbeidsmarktgerichte opleidingen en persoonlijke ontwikkeling voor jongeren en vrouwen.',
    intro:
      'World Smart College richt zich op jongeren en vrouwen die willen groeien: via arbeidsmarktgerichte opleidingen, persoonlijke ontwikkeling en community-projecten die mensen dichter bij hun doelen brengen.',
    topics: [
      'Jongeren',
      'Vrouwen',
      'Arbeidsmarktgerichte opleidingen',
      'Persoonlijke ontwikkeling',
      'Community-projecten',
    ],
  },
  {
    slug: 'itlearn',
    title: 'ITLearn',
    accent: 'orange',
    icon: 'RiServerLine',
    summary:
      'ICT-support, netwerkbeheer en consultancy voor bedrijven en instellingen.',
    intro:
      'ITLearn ondersteunt organisaties met technisch beheer en advies — van dagelijks computeronderhoud tot volledige servicecontracten en IT-consultancy op maat.',
    topics: [
      'Computeronderhoud',
      'Netwerkbeheer',
      'ICT-support',
      'Hardware-upgrades',
      'Consultancy',
      'Servicecontracten',
    ],
  },
  {
    slug: 'probi-kas',
    title: 'Probi-Kas',
    accent: 'green',
    icon: 'RiSeedlingLine',
    summary:
      'Agro-innovatie: slimme landbouw, aquaponics en klimaatslimme technieken.',
    intro:
      'De agro-innovatiepagina van Probitas: hier onderzoeken en demonstreren we klimaatslimme landbouwtechnieken, met studentenprojecten die de landbouw van morgen vormgeven.',
    topics: [
      'Innovatiekas',
      'Aquaponics',
      'Klimaatslimme landbouw',
      'Paprikateelt',
      'Onderzoek',
      'Demonstraties',
      'Studentenprojecten',
    ],
  },
  {
    slug: 'stem-innovation',
    title: 'STEM & Innovatie',
    accent: 'red',
    icon: 'RiCpuLine',
    summary:
      'FabLab, robotica en digitale fabricage voor de makers van morgen.',
    intro:
      'In het FabLab van Probitas maken jongeren kennis met robotica, elektronica en digitale fabricage — een makerspace waar ideeën uitgroeien tot prototypes.',
    topics: [
      'FabLab',
      'Robotica',
      'Arduino',
      '3D-printing',
      'Makerspace',
      'Digitale fabricage',
    ],
  },
] as const;

export const nav = {
  primary: [
    { label: 'Home', href: '/' },
    { label: 'Over Probitas', href: '/about' },
    { label: 'Projecten', href: '/projects' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ],
  programs: programDetails.map((program) => ({
    title: program.title,
    description: program.summary,
    href: `/programs/${program.slug}`,
    icon: program.icon,
    accent: program.accent,
  })),
} as const;

export const programs = [
  {
    key: 'digital-skills',
    title: 'Digital Skills',
    description: 'Digitale vaardigheden voor vandaag en morgen.',
    icon: 'RiComputerLine',
    accent: 'blue',
    href: '/programs/innoved',
  },
  {
    key: 'probi-kas',
    title: 'Probi-Kas',
    description: 'Slimme landbouw voor een duurzame toekomst.',
    icon: 'RiSeedlingLine',
    accent: 'green',
    href: '/programs/probi-kas',
  },
  {
    key: 'consultatie',
    title: 'Consultatie',
    description: 'Samen bouwen aan kansen en een betere samenleving.',
    icon: 'RiTeamLine',
    accent: 'orange',
    href: '/partners',
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
    href: '/projects',
  },
  {
    key: 'stem-lab',
    image: '/images/news-stem-lab.png',
    category: 'STEM',
    accent: 'red',
    title: 'Nieuw STEM Lab in ontwikkeling',
    date: '8 mei 2025',
    href: '/projects',
  },
  {
    key: 'peppers',
    image: '/images/news-peppers.png',
    category: 'Probi-Kas',
    accent: 'green',
    title: 'Eerste paprika oogst succesvol binnen!',
    date: '2 mei 2025',
    href: '/projects',
  },
  {
    key: 'partnership',
    image: '/images/news-partnership.png',
    category: 'Partnerschap',
    accent: 'orange',
    title: 'Nieuwe samenwerking met NATIN',
    date: '25 april 2025',
    href: '/projects',
  },
] as const;

export const footerLinks = [
  { label: 'Over Probitas', href: '/about' },
  { label: "Programma's", href: '/programs' },
  { label: 'Projecten', href: '/projects' },
  { label: 'Word Partner', href: '/contact' },
  { label: 'Contact', href: '/contact' },
] as const;

// No confirmed social profile URLs yet — point to Contact rather than invent handles.
export const socials = [
  { label: 'Facebook', icon: 'RiFacebookFill', href: '/contact' },
  { label: 'Instagram', icon: 'RiInstagramLine', href: '/contact' },
  { label: 'LinkedIn', icon: 'RiLinkedinFill', href: '/contact' },
  { label: 'YouTube', icon: 'RiYoutubeFill', href: '/contact' },
] as const;

export const contact = {
  address: ['Kwattaweg 405', 'Paramaribo, Suriname'],
  phone: '+597 873 9797',
  email: 'info@stichtingprobitas.org',
  website: 'www.stichtingprobitas.org',
};
