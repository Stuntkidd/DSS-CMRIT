// src/app/(site)/team/page.tsx (Assuming this file MUST be .tsx for Vercel)

import Image from 'next/image'; 

// 1. Explicit TypeScript Type Definitions
interface Socials {
  linkedin: string;
  twitter?: string; // Optional since some are set to '#'
  email: string;
}

interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  socials: Socials;
}

// Props interface for TeamCard
interface TeamCardProps {
    Member: TeamMember;
}

export const metadata = { title: "Team" };

// Mock data structure for the team members (12 total)
// 2. Explicitly cast the array to the correct type
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ch Pradeeptha',
    title: 'President',
    imageUrl: 'https://i.postimg.cc/Nj3r1KvD/Whats-App-Image-2025-10-21-at-22-08-26.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/pradeeptha-ch-943450335/', twitter: '#', email: 'ch.pradeeptha@dss.in' },
  },
  {
    id: 2,
    name: 'P V Yashwanth',
    title: 'President,Projects Lead',
    imageUrl: 'https://i.postimg.cc/NFSt9bg8/Whats-App-Image-2025-10-24-at-12-22-39-4681aee4.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/yashwanth-paleti', twitter: '#', email: 'yashwanthpaleti2006@gmail.com' },
  },
  {
    id: 3,
    name: 'Sri Nag Charan',
    title: 'Treasurer',
    imageUrl: 'https://i.postimg.cc/cH5S3pym/Whats-App-Image-2026-01-12-at-12-05-43-PM.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/nammina-sri-nag-charan-6b928732b', twitter: '#', email: 'srinagcharanyadav@gmail.com' },
  },
  {
    id: 4,
    name: 'D Abhishek',
    title: 'Secretary',
    imageUrl: 'https://i.postimg.cc/0QYpjHPm/IMG-20251024-120055.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/abhishek-danuka-580145368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#', email: 'd.abhishek@dss.in' },
  },
  {
    id: 5,
    name: 'S Jahnavi',
    title: 'Outreach coordinator',
    imageUrl: 'https://i.postimg.cc/wj0pD6Tv/Whats-App-Image-2025-10-24-at-12-24-34-caf387e2.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/jahnavi-sagaboina-53657a380', twitter: '#', email: 's.jahnavi@dss.in' },
  },
  {
    id: 6,
    name: 'E Sandeep',
    title: 'Technical Lead',
    imageUrl: 'https://i.postimg.cc/pdk8z531/Whats-App-Image-2025-10-24-at-11-43-02-d4a2764e.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/eppakayala-sandeep-62146932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#', email: 'e.sandeep@dss.in' },
  },
  
  
  {
    id: 7,
    name: 'M Tejeswini',
    title: 'Content Lead',
    imageUrl: 'https://i.postimg.cc/sghMD3GM/Whats-App-Image-2025-10-21-at-22-09-11.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/tejaswini-m-449042292/', twitter: '#', email: 'm.tejeswini@dss.in' },
  },
  {
    id: 8,
    name: 'U Sanjay',
    title: 'Digital Lead',
    imageUrl: 'https://i.postimg.cc/N0bTm2ZV/Whats-App-Image-2025-10-24-at-11-43-03-a2576d4a.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/uyyala-sanjay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#', email: 'u.sanjay@dss.in' },
  },
  {
    id: 9,
    name: 'Satnam',
    title: 'Event Coordinator',
    imageUrl: 'https://i.postimg.cc/xCGsDHgf/Whats_App_Image_2026_01_11_at_7_32_34_PM.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/juni-sathnam-258b053a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', twitter: '#', email: '#' },
  },
  {
    id: 10,
    name: 'Sai Sreshta',
    title: 'Event Coordinator',
    imageUrl: 'https://i.postimg.cc/rsQQzkvZ/Whats_App_Image_2026_01_11_at_10_16_40_PM.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/sai-sreshta-332876367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', twitter: '#', email: '#' },
  }
  
];

// Mock data for Faculty Coordinators
const facultyCoordinators: TeamMember[] = [
    {
        id: 1,
        name: 'Ms Samala Bhavana',
        title: 'Faculty Coordinator (CSE-DS)',
        imageUrl: 'https://i.postimg.cc/qqxvQmDc/Orange-Get-your-Business-certificate-Instagram-Post.png',
        socials: { linkedin: '#', email: 'john.smith@cmrit.in' },
    },
];

// FIX: TeamCard definition signature is fixed to use the explicit TypeScript interface.
const TeamCard = ({ Member }: TeamCardProps) => { 
    return (
        <div className="card relative p-0 overflow-hidden">
            {/* Image Section - Increased height to h-72 */}
            <div className="relative h-72 w-full"> 
                {/* Replaced <img> with Next.js <Image /> component for performance */}
                <Image 
                  src={Member.imageUrl} 
                  alt={Member.name} 
                  fill // Use fill for dynamic sizing defined by the parent div (h-72 w-full)
                  style={{ objectFit: 'cover' }} 
                  className="grayscale transition-opacity duration-300 hover:grayscale-0"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            </div>
            
            {/* Info Section (Name, Role, Contact) */}
            <div className="p-4 space-y-2">
                <h4 className="text-lg font-bold text-foreground">{Member.name}</h4>
                <p className="text-sm text-[color:var(--accent)]">{Member.title}</p>
                
                {/* Contact Links */}
                <div className="flex gap-3 pt-2">
                  {/* LinkedIn Icon */}
                  <a href={Member.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                      className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                      aria-label={`LinkedIn profile for ${Member.name}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.3 38.5-38.5 38.5zm282.7 243h-66.4V297.8c0-26.1-23.4-48.5-52.9-48.5-29.4 0-51.4 22.3-51.4 48.5V416h-66.4V202.2h66.3v26.7h.9c8.7-18.9 33.4-46.7 88.5-46.7 66.8 0 94.5 43.1 94.5 98.4V416z"/>
                      </svg>
                  </a>
                  {/* Email Icon */}
                  <a href={`mailto:${Member.socials.email}`} 
                      className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                      aria-label={`Email ${Member.name}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.6 27.4 8.6 38.8 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V392c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 340.8c-20.9 15.7-47.5 15.7-68.4 0L0 176z"/>
                      </svg>
                  </a>
                  {/* Twitter/X Icon (Only included if member has a twitter link) */}
                  {Member.socials.twitter && (
                    <a href={Member.socials.twitter} target="_blank" rel="noopener noreferrer" 
                      className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                      aria-label={`X/Twitter profile for ${Member.name}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H381.5L248.8 296.7 113.1 464H41.6L201.2 284.4 21.6 48H138.1L257.4 205.1 389.2 48zM364.4 421.8h39.7L132.3 90.8H88.3L364.4 421.8z"/>
                      </svg>
                    </a>
                  )}
                </div>
            </div>
        </div>
    );
};


export default function Page() {
  // Use the full 11-member list
  const teamToDisplay = teamMembers;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* HEADER: Modernized Header */}
      <header className="card p-8 bg-white/[0.05] border border-white/[0.1] text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Meet the <span className="text-[color:var(--accent)]">Data Science Society</span> Team
        </h1>
        <p className="mt-3 text-muted max-w-4xl mx-auto">
          The passionate individuals behind the Data Science Society, driving innovation and fostering 
          a vibrant community of data enthusiasts at CMRIT Hyderabad.
        </p>
      </header>

      {/* NEW SECTION: FACULTY COORDINATORS */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">
          <span className="text-[color:var(--accent)]">Faculty</span> Coordinators
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {facultyCoordinators.map((m) => (
            <div key={m.id} className="card p-5 flex items-center space-x-4">
                {/* Image Section (Smaller for Faculty) */}
                <div className="relative h-24 w-24 shrink-0"> 
                    {/* FIX: Replaced <img> with Next.js <Image /> component for performance */}
                    <Image 
                      src={m.imageUrl} 
                      alt={m.name} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg border-2 border-[color:var(--accent)]" 
                      sizes="96px"
                    />
                </div>
                
                {/* Info Section (Name, Role, Contact) */}
                <div className="flex-grow space-y-1">
                    <h4 className="text-xl font-bold text-foreground">{m.name}</h4>
                    <p className="text-sm text-muted">{m.title}</p>
                    
                    {/* Contact Links (Simplified) */}
                    <div className="flex gap-3 pt-2">
                        {/* LinkedIn Icon */}
                        <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                           aria-label={`LinkedIn profile for ${m.name}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.3 38.5-38.5 38.5zm282.7 243h-66.4V297.8c0-26.1-23.4-48.5-52.9-48.5-29.4 0-51.4 22.3-51.4 48.5V416h-66.4V202.2h66.3v26.7h.9c8.7-18.9 33.4-46.7 88.5-46.7 66.8 0 94.5 43.1 94.5 98.4V416z"/>
                            </svg>
                        </a>
                        {/* Email Icon */}
                        <a href={`mailto:${m.socials.email}`} 
                           className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                           aria-label={`Email ${m.name}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.6 27.4 8.6 38.8 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V392c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 340.8c-20.9 15.7-47.5 15.7-68.4 0L0 176z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>
      

      {/* TEAM MEMBERS GRID: Displaying 11 cards */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">
          <span className="text-[color:var(--accent)]">Student</span> Leadership
        </h2>
        {/* Adjusted grid to 4 columns to fit the horizontal card content well */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
          {/* FIX: Corrected the map to pass the full 'm' object as 'member' */}
          {teamToDisplay.map((m) => (
            // Using the custom TeamCard component defined above
            <TeamCard key={m.id} Member={m} />
          ))}
        </div>
      </section>

      {/* LEADERSHIP STRUCTURE */}
      <section className="mt-12">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Leadership <span className="text-[color:var(--accent)]">Structure</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border border-white/[0.1] rounded-lg">
              <h3 className="font-medium text-[color:var(--accent)]">Executive Board</h3>
              <p className="text-sm text-muted mt-1">President, Vice President, and core leadership team overseeing all operations.</p>
            </div>
            <div className="p-4 border border-white/[0.1] rounded-lg">
              <h3 className="font-medium text-[color:var(--accent)]">Event Leads</h3>
              <p className="text-sm text-muted mt-1">Coordinators for organizing and executing workshops, competitions, and community meetups.</p>
            </div>
            <div className="p-4 border border-white/[0.1] rounded-lg">
              <h3 className="font-medium text-[color:var(--accent)]">Technical Leads</h3>
              <p className="text-sm text-muted mt-1">Specialists in ML, data viz, and research domains providing mentorship and technical guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN OUR TEAM CTA */}
      <section className="mt-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">
            <span className="text-[color:var(--accent)]">Join</span> Our Team
          </h2>
          <p className="text-sm text-muted mb-4">
            We&apos;re always looking for passionate individuals to join our leadership team. 
            Help us organize events, mentor peers, and shape the future of data science at CMRIT.
          </p>
          <div className="flex gap-3">
            <a href="/contact" className="bg-[color:var(--accent)] text-gray-900 font-medium rounded-full px-5 py-3 text-sm hover:bg-green-700 transition">Contact Us</a>
            <a href="/join" className="rounded-full px-5 py-3 text-sm font-medium border border-white/[0.12] hover:border-[color:var(--accent)] transition">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
