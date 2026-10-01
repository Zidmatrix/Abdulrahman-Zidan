export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  tools: string[];
};

export const profile = {
  name: "Abdulrahman Zidan",
  shortName: "AZ",
  headline: "Real Estate Sales & Lead Management Professional",
  roles: ["Real Estate Cold Caller", "Lead Manager", "Appointment Setter", "Virtual Assistant"],
  intro:
    "I work across lead-generation and lead-management environments, with hands-on experience in U.S. real estate and solar. I connect with prospects, qualify opportunities, manage follow-ups and keep pipelines moving.",
  email: "abd3lra7man@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdulrahman-zidan/",
  telegram: "https://t.me/ZIDAAAAAAAAN",
  cv: "/Abdulrahman-Zidan/Abdulrahman-Zidan-CV.pdf",
  photo: "/Abdulrahman-Zidan/profile.jpg",
};

export const services = [
  {
    number: "01",
    title: "Real Estate Cold Calling",
    kicker: "CONNECT",
    description:
      "U.S. homeowner outreach, rapport building, objection handling and motivated-seller discovery.",
    tags: ["Outbound", "Rapport", "Objections", "Lead Gen"],
  },
  {
    number: "02",
    title: "Lead Management",
    kicker: "QUALIFY",
    description:
      "Qualification, CRM hygiene, follow-up cadence and a clean handoff to acquisitions.",
    tags: ["Qualification", "CRM", "Follow-up", "Pipeline"],
  },
  {
    number: "03",
    title: "Appointment Setting",
    kicker: "BOOK",
    description:
      "Prospecting, qualification and booking conversations with the right decision makers.",
    tags: ["Prospecting", "Qualification", "Booking", "Calendar"],
  },
  {
    number: "04",
    title: "Virtual Assistance",
    kicker: "OPERATE",
    description:
      "Reliable remote support across CRM, research, pipeline administration and sales operations.",
    tags: ["CRM", "Research", "Admin", "Operations"],
  },
];

export const process = [
  ["01", "FIND", "Identify the right prospect."],
  ["02", "CONNECT", "Start a natural conversation."],
  ["03", "QUALIFY", "Understand motivation and fit."],
  ["04", "FOLLOW UP", "Keep opportunities warm."],
  ["05", "BOOK", "Create qualified appointments."],
  ["06", "HANDOFF", "Pass clean context to the next team."],
];

export const experience: ExperienceItem[] = [
  {
    company: "U.S. Real Estate",
    role: "Lead Manager",
    period: "Recent experience",
    summary:
      "Direct homeowner conversations, seller qualification and pipeline ownership.",
    bullets: [
      "Qualified inbound and outbound opportunities",
      "Captured motivation, condition, occupancy, timeline and price expectations",
      "Maintained follow-up cadence and CRM accuracy",
      "Worked closely with acquisitions for qualified handoffs",
    ],
    tools: ["GoHighLevel", "CRM", "ReadyMode", "CallTools", "REI Sift"],
  },
  {
    company: "U.S. Real Estate",
    role: "Cold Caller",
    period: "3+ years",
    summary:
      "High-volume outbound conversations focused on lead generation and motivated-seller discovery.",
    bullets: [
      "Cold-called U.S. homeowners",
      "Built rapport and handled objections",
      "Identified motivated sellers and qualified opportunities",
      "Worked against daily performance targets",
    ],
    tools: ["ReadyMode", "Mojo Dialer", "CallTools", "Apollo", "GoHighLevel"],
  },
  {
    company: "Solar / Lead Generation",
    role: "Lead Generation",
    period: "Industry experience",
    summary:
      "Prospecting and first-contact conversations in a second lead-generation environment outside real estate.",
    bullets: [
      "Worked in outbound lead-generation workflows",
      "Started conversations and qualified interest",
      "Handled objections and kept follow-up organized",
      "Applied the same pipeline discipline across industries",
    ],
    tools: ["Dialers", "CRM", "Lead Lists", "Follow-up"],
  },
  {
    company: "Sales Operations",
    role: "Appointment Setter",
    period: "Capability",
    summary:
      "Transferable sales skills for prospecting, qualification and calendar-setting workflows.",
    bullets: [
      "Prospecting and first-contact conversations",
      "Needs discovery and qualification",
      "Objection handling and follow-up",
      "Clean handoff to closers or account executives",
    ],
    tools: ["CRM", "Dialers", "Calendar", "Pipeline"],
  },
  {
    company: "Remote Operations",
    role: "Virtual Assistant",
    period: "Capability",
    summary:
      "Technology-comfortable support for the daily systems around a sales pipeline.",
    bullets: [
      "CRM updates and data hygiene",
      "Lead research and organization",
      "Follow-up support",
      "Remote coordination and administrative execution",
    ],
    tools: ["CRM", "Research", "Spreadsheets", "Communication"],
  },
];

export const tools = [
  "GoHighLevel (GHL)",
  "ReadyMode",
  "CallTools",
  "REI Sift",
  "Mojo Dialer",
  "Enzo",
  "Apollo",
  "CRM Systems",
  "Pipeline Management",
];

export const strengths = [
  "U.S. homeowner communication",
  "Cross-industry lead generation",
  "Lead qualification",
  "Objection handling",
  "Consistent follow-up",
  "CRM discipline",
  "Remote collaboration",
  "Fast learning",
];

export const proof = [
  { value: "3+", label: "Years", text: "U.S. real estate experience" },
  { value: "02", label: "Industries", text: "Real Estate + Solar lead-generation work" },
  { value: "US", label: "Market", text: "Remote U.S. sales environment" },
];
