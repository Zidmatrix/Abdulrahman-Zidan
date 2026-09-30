export type ExperienceItem = {
  company: string; role: string; period: string; summary: string; bullets: string[]; tools: string[];
};

export const profile = {
  name: "Abdulrahman Zidan",
  shortName: "AZ",
  headline: "Real Estate Sales & Lead Management Professional",
  roles: ["Real Estate Cold Caller","Lead Manager","Appointment Setter","Virtual Assistant"],
  intro: "I help U.S. real estate teams connect with prospects, qualify opportunities, manage follow-ups and keep the pipeline moving.",
  email: "abd3lra7man@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdulrahman-zidan/",
  voice: "https://voca.ro/1fkEQqwvLeaj",
};

export const services = [
  { number:"01", title:"Real Estate Cold Calling", kicker:"CONNECT", description:"U.S. homeowner outreach, rapport building, objection handling and motivated-seller discovery.", tags:["Outbound","Rapport","Objections","Lead Gen"] },
  { number:"02", title:"Lead Management", kicker:"QUALIFY", description:"Qualification, CRM hygiene, follow-up cadence and a clean handoff to acquisitions.", tags:["Qualification","CRM","Follow-up","Pipeline"] },
  { number:"03", title:"Appointment Setting", kicker:"BOOK", description:"Prospecting, qualification and booking conversations with the right decision makers.", tags:["Prospecting","B2B","Qualification","Booking"] },
  { number:"04", title:"Virtual Assistance", kicker:"OPERATE", description:"Reliable remote support across CRM, research, pipeline administration and sales operations.", tags:["CRM","Research","Admin","Operations"] },
];

export const process = [
  ["01","FIND","Identify the right prospect."],["02","CONNECT","Start a natural conversation."],["03","QUALIFY","Understand motivation and fit."],
  ["04","FOLLOW UP","Keep opportunities warm."],["05","BOOK","Create qualified appointments."],["06","HANDOFF","Pass clean context to the next team."],
];

export const experience: ExperienceItem[] = [
  { company:"U.S. Real Estate", role:"Lead Manager", period:"Recent experience", summary:"Direct homeowner conversations, seller qualification and pipeline ownership.", bullets:["Qualified inbound and outbound opportunities","Captured motivation, condition, occupancy, timeline and price expectations","Maintained follow-up cadence and CRM accuracy","Worked closely with acquisitions for qualified handoffs"], tools:["CRM","ReadyMode","CallTools","REI Sift"] },
  { company:"U.S. Real Estate", role:"Cold Caller", period:"3+ years", summary:"High-volume outbound conversations focused on lead generation and motivated-seller discovery.", bullets:["Cold-called U.S. homeowners","Built rapport and handled objections","Identified motivated sellers and qualified opportunities","Worked against daily performance targets"], tools:["ReadyMode","Mojo Dialer","CallTools","Apollo"] },
  { company:"Sales Operations", role:"Appointment Setter", period:"Capability", summary:"Transferable sales skills for prospecting, qualification and calendar-setting workflows.", bullets:["Prospecting and first-contact conversations","Needs discovery and qualification","Objection handling and follow-up","Clean handoff to closers or account executives"], tools:["CRM","Dialers","Calendar","Pipeline"] },
  { company:"Remote Operations", role:"Virtual Assistant", period:"Capability", summary:"Technology-comfortable support for the daily systems around a sales pipeline.", bullets:["CRM updates and data hygiene","Lead research and organization","Follow-up support","Remote coordination and administrative execution"], tools:["CRM","Research","Spreadsheets","Communication"] },
];

export const tools = ["ReadyMode","CallTools","REI Sift","Apollo","Mojo Dialer","Enzo","CRM Systems","Pipeline Management"];
export const strengths = ["U.S. homeowner communication","Objection handling","Seller qualification","Consistent follow-up","CRM discipline","Remote collaboration","Technology comfort","Fast learning"];
export const proof = [{value:"3+",label:"Years",text:"U.S. real estate experience"},{value:"04",label:"Roles",text:"Cold Caller / LM / Setter / VA"},{value:"US",label:"Market",text:"Remote U.S. sales environment"}];
