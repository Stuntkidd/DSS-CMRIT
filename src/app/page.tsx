// src/app/page.tsx

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
// Removed unused import: import ContractCard from "@/components/ui/ContractCard"; 
import Image from 'next/image'; // Ensure Next.js Image component is imported
import React from 'react'; // Ensure React is imported for JSX

// Data declarations (outside Home for simplicity, but used inside)
const teamMembers = [
  // Using only the 4 members currently displayed on the Home page
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
    title: 'Projects Lead',
    imageUrl: 'https://i.postimg.cc/W3ZnDjDQ/Whats-App-Image-2025-10-21-at-19-44-03-b253a3ed.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/yashwanth-paleti', twitter: '#', email: 'pv.yashwanth@dss.in' },
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
    name: 'S Jahnavi',
    title: 'Outreach coordinator',
    imageUrl: 'https://i.postimg.cc/wj0pD6Tv/Whats-App-Image-2025-10-24-at-12-24-34-caf387e2.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/jahnavi-sagaboina-53657a380', twitter: '#', email: 's.jahnavi@dss.in' },
  }

];


export default function Home() {
  
  // Data definitions moved INSIDE the Home component function
  const joinBenefits = [
    { 
      title: "Skill Enhancement", 
      description: "Gain hands-on experience with cutting-edge tools and technologies through workshops and projects.", 
      span: "md:col-span-2",
      bgStyle: { background: 'rgba(255, 255, 255, 0.05)' } // Soft dark background 1
    },
    { 
      title: "Networking Opportunities", 
      description: "Connect with peers, faculty, and industry professionals, expanding your professional network.", 
      span: "md:col-span-3",
      bgStyle: { background: 'rgba(0, 0, 0, 0.2)' } // Slightly darker soft background
    },
    { 
      title: "Career Development", 
      description: "Access resources and guidance for internships, placements, and further studies in data science.", 
      span: "md:col-span-3",
      bgStyle: { background: 'rgba(255, 255, 255, 0.08)' } // Lighter soft background
    },
    { 
      title: "Community Building", 
      description: "Be part of a supportive and collaborative community that shares your passion for data.", 
      span: "md:col-span-2",
      bgStyle: { background: 'rgba(0, 0, 0, 0.3)' } // Darkest soft background
    },
    { 
      title: "Knowledge Sharing", 
      description: "Participate in discussions, seminars, and hackathons to deepen your understanding and share insights.", 
      span: "md:col-span-5", // Full-width feature card
      bgStyle: { background: 'color-mix(in oklab, var(--accent) 15%, #0a0a0a)', border: '1px solid var(--accent)' } 
    },
  ];


  const eventTypes = [
    { type: "Workshops", description: "Hands-on sessions covering essential data science tools and techniques (e.g., Python for Data Science, Machine Learning Algorithms, Data Visualization with Power BI/Tableau, Deep Learning Frameworks)." },
    { type: "Guest Lectures", description: "Inviting industry experts and academics to share their insights on emerging trends, real-world applications, and career paths in data science." },
    { type: "National Level Hackathon", description: "A challenging event where participants work in teams to solve real-world data problems using their skills." },
    { type: "Project Weeks", description: "Members will have dedicated time for collaborative data science and other projects — from initial ideas to full implementation. Opportunities will be provided to showcase research and research papers, with guidance from senior members and faculty." },
    { type: "Mentorship", description: "Structured programs connecting junior members with senior students and industry professionals for guidance and support." },
    { type: "Content Creation", description: "To elevate the college’s standing, members will create and share tutorials and articles on data science and related topics. This initiative will boost the club’s online presence and reputation as a leader." },
  ];
  
  const activityOutline = [
    {
      pillar: "Learning & Development",
      id: "I",
      activities: [
        { name: "Workshops & Training Sessions", details: ["Introduction to Python/R for Data Science", "Machine Learning Fundamentals", "Deep Learning & Neural Networks", "Data Visualization & Storytelling", "Big Data Technologies (e.g., Apache Spark, Hadoop)", "Cloud Platforms for Data Science (e.g., AWS, GCP, Azure)"] },
        { name: "Guest Lectures & Seminars", details: ["Industry insights from data scientists", "Academic research presentations", "Panel discussions on trending topics"] },
        { name: "Study Groups & Discussion Forums", details: ["Collaborative learning sessions for advanced topics", "Preparation for data science competitions", "Book clubs on data science literature"] },
        { name: "Content Creation", details: ["Developing tutorials, articles, and blog posts", "Creating video lectures and educational resources"] },
      ],
    },
    {
      pillar: "Practical Application & Innovation",
      id: "II",
      activities: [
        { name: "Hackathons & Datathons", details: ["Solving real-world problems with data", "Team-based competitive coding challenges"] },
        { name: "Project Weeks & Capstone Projects", details: ["Mentored projects from ideation to deployment", "Showcasing student work and innovations", "Opportunities will be provided to showcase research and research papers, with guidance from senior members and faculty."] },
        { name: "Competitions & Challenges", details: ["Participation in national and international data science competitions", "Internal coding challenges to test skills"] },
      ],
    },
    {
      pillar: "Community & Networking",
      id: "III",
      activities: [
        { name: "Networking Events", details: ["Meet-and-greet sessions with faculty and alumni", "Industry interaction programs"] },
        { name: "Mentorship Program", details: ["Connecting junior members with senior students and industry professionals", "Career guidance and personal development support"] },
        { name: "Career Development", details: ["Resume building workshops", "Interview preparation sessions", "Access to internship and job opportunities"] },
      ],
    },
  ];

  const magazineContent = {
    release: 'Udbhav 2025',
    tagline: 'A comprehensive collection of insights and highlights from the Data Science Society.', 
    insideThisIssue: [
      // College & Administration
      'College Overview',
      'About College',
      'Director’s Message',
      'Principal’s Message',
      'HOD & Department',
      // Academics & Achievements
      'Faculty Research & Insights',
      'Student Research & Insights',
      'Department Ascend',
      'Faculty Laurels',
      'Student Laurels',
      // Inspiration & Perspectives
      'Motivation',
      'Legendary',
      'Faculty Viewpoints',
      'Student Viewpoints',
      'Alumni Voices',
      // Campus Life & Beyond
      'Academic Highlights',
      'Projects & Expert Opinions',
      'Recent Trends in Data Science',
      'Placements & Career Insights',
      'Cultural & Arts',
      'Sports & NSS',
    ],
    contributors: 'DSS Editorial Team'
  }

  // Logic to split the articles into two columns for the magazine section
  const articleList = magazineContent.insideThisIssue;
  const splitPoint = Math.ceil(articleList.length / 2); // Split point for 21 articles is 11
  const articleCol1 = articleList.slice(0, splitPoint);
  const articleCol2 = articleList.slice(splitPoint);

  // --- NEW: LATEST NEWS DATA (Retained for easy reference) ---
  const latestNews = [
    {
        id: 1,
        title: "Udbhav 2025: Magazine Release",
        description: "Explore the latest articles, projects, and interviews from the DSS community in our official publication.",
        tag: "NEW",
        link: "https://udhbhv-dss-chronicle.vercel.app/",
        date: "October 24, 2025",
    },
    {
        id: 2,
        title: "Live CodeX: Inter-college Coding Challenge",
        description: "Join the live-streamed Inter-college Coding Challenge and test your skills against the best data scientists.",
        tag: "LIVE",
        link: "https://live-codex-reveal.vercel.app/",
        date: "October 24, 2025",
    },
  ];

  const featuredNews = latestNews[0]; // Udbhav Magazine
  const secondaryNews = latestNews[1]; // Live CodeX
  // --- END NEW DATA ---
  
  // Removed unused const: const socialProofWords = [...]

  // The SocialProof component logic was already removed.

  return (
    <div className="relative overflow-hidden">
      {/* Hero background: Uses radial gradient with var(--accent) for the global green glow effect */}
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl" style={{
          background:
            "radial-gradient(closest-side, var(--accent), transparent 60%)",
        }} />
      </div>

      {/* HERO SECTION - Headings Highlighted */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 w-full"> 
        <div className="mx-0">
          <div
            className="relative isolate overflow-hidden rounded-[3rem] text-center py-24 sm:py-32 shadow-2xl"
            style={{
              background: 'var(--accent)',
            }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> 
              <p className="text-md font-semibold mb-4 tracking-wider uppercase text-gray-900">
                “WHERE <span className='text-gray-800'>IDEAS</span> MEET <span className='text-gray-800'>ACTION</span>”
              </p>
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-gray-900">
                <span className="text-gray-900">Innovate.</span> <span className="text-gray-800">Analyze. Lead.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-800 max-w-3xl mx-auto">
                Our motto reflects our core values: to inspire innovative thinking, encourage rigorous data
                analysis, and empower students to become leaders in the data science and other domains.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <a href="/join" className="rounded-full px-7 py-3 text-lg font-medium bg-gray-900 text-white hover:bg-gray-700 transition">Join the Club</a>
                <a 
        href="/events" 
        // Corrected text color to black/dark for visibility on the bright green hero
        className="rounded-full px-7 py-3 text-lg font-medium border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition"
    >
        View Events
    </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* NEW: MODERN BLACK QUOTE SECTION (Replacing Social Proof Marquee) */}
      <section id="quote-section" className="w-full py-12">
        <Card className="p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background element for visual interest, subtle pattern */}
            <div className="absolute inset-0 -z-10 opacity-5" aria-hidden>
                <div className="w-full h-full bg-no-repeat bg-center" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
            </div>

            <p className="text-xl sm:text-2xl font-light italic text-muted max-w-4xl mx-auto leading-relaxed">
                &ldquo;The greatest value of a <span className='text-[color:var(--accent)] font-medium not-italic'>picture</span> is when it forces us to notice what we never expected to <span className='text-[color:var(--accent)] font-medium not-italic'>see</span>.&rdquo;
            </p>
            <footer className="mt-6 text-sm sm:text-base font-semibold text-foreground">
                — John Tukey, <span className='text-muted font-normal'>Statistician</span>
            </footer>
        </Card>
      </section>
      
      {/* --- START REPLICATED: LATEST NEWS SECTION (Based on Udbhav Magazine) --- */}
      <Section title="Latest News" subtitle="Current Events & Releases">
        <div id="latest-news" className="grid md:grid-cols-3 gap-5 items-stretch">
          
          {/* Featured News Card (Magazine Release Style) - Left Column */}
          <Card className="p-0 md:col-span-1 overflow-hidden h-full flex flex-col" style={{ border: '1px solid var(--accent)', background: 'linear-gradient(160deg, color-mix(in oklab, var(--accent) 20%, #0a0a0a) 0%, #0a0a0a 70%)' }}>
            <div className="p-8 flex-grow">
              <div className="text-xs tracking-wide opacity-90 text-white uppercase">{featuredNews.tag} Release</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-white"><span className='text-[color:var(--accent)]'>{featuredNews.title.split(':')[0]}</span> {featuredNews.title.split(':')[1]}</div>
              <p className="mt-2 text-sm opacity-90 text-white max-w-sm">
                {featuredNews.description}
              </p>
            </div>
            <div className="p-8 pt-0 flex-none">
              <div className="flex gap-3">
                <Button asChild><a href={featuredNews.link} target="_blank" rel="noopener noreferrer">Read Now</a></Button>
                <Button variant="outline" asChild className="border-white/[0.3] text-white hover:bg-white/[0.1]"><a href="/events">All Publications</a></Button>
              </div>
              <p className="mt-4 text-xs text-white/70">Released: {featuredNews.date}</p>
            </div>
          </Card>

          {/* Other Highlights Card (Issue Highlights Style) - Right Columns */}
          <Card className="p-6 md:col-span-2 flex flex-col justify-between">
            <div className='flex-grow'>
                <h3 className="text-xl font-medium mb-3">Upcoming <span className='text-[color:var(--accent)]'>Highlights</span></h3>
                
                {/* Secondary News Item (Live CodeX) */}
                <a href={secondaryNews.link} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg transition-colors duration-200 hover:bg-white/[0.05] border border-white/[0.12] hover:border-[color:var(--accent)] group">
                    <div className='flex items-center justify-between'>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-[color:var(--accent)] transition-colors">
                            {secondaryNews.title}
                        </h4>
                        <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-red-600 text-white animate-pulse">
                            {secondaryNews.tag}
                        </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{secondaryNews.description}</p>
                    <p className="mt-2 text-xs font-semibold text-muted/80">Date: {secondaryNews.date}</p>
                </a>

                {/* Placeholder/Call-to-Action for other news/events */}
                <div className="mt-6 space-y-3">
                    <h4 className="text-base font-semibold text-foreground">Other Key Events:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted">
                        <li>• Mentorship Program Launch</li>
                        <li>• Data Ethics Seminar Series</li>
                        <li>• Annual Tech Project Showcase</li>
                        <li>• Next Workshop: Big Data with Spark</li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-8 text-center border-t border-white/[0.12] pt-4">
              <Button variant="outline" asChild className="w-full border-white/[0.3]"><a href="/events">View All Events & News</a></Button>
            </div>
          </Card>
        </div>
      </Section>
      {/* --- END REPLICATED: LATEST NEWS SECTION --- */}

      {/* WHY JOIN US? SECTION - Title reverted to string, Headings Highlighted internally */}
      <Section title="Why Join Us?" subtitle="Unlock your potential in Data Science">
        <div id="join-benefits" className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {joinBenefits.map((item, index) => (
            <Card key={index} className={`p-6 ${item.span}`} style={item.bgStyle}>
              <div className="flex items-start mb-3">
                <span className="text-2xl font-extrabold text-[color:var(--accent)] mr-3">
                  {`0${index + 1}`}
                </span>
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  <span className='text-[color:var(--accent)]'>{item.title.split(' ')[0]}</span> {item.title.substring(item.title.indexOf(' ') + 1)}
                </h3>
              </div>
              <p className="text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* UPDATED EXPERTISE SECTION: New Content and Highlighting */}
      <Section title="Our Expertise" subtitle="Outline of Our Activities">
        <div id="expertise-content">
          <Card className="p-6 md:p-8 space-y-8">
            <p className="text-sm text-muted">
              Our activities will be structured around three core pillars: <span className='text-[color:var(--accent)] font-medium'>Learning</span>, <span className='text-[color:var(--accent)] font-medium'>Application</span>, and <span className='text-[color:var(--accent)] font-medium'>Community</span>.
            </p>

            {activityOutline.map((pillar) => (
              <div key={pillar.id} className="pt-6 border-t border-white/[0.1]">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {pillar.id}. <span className='text-[color:var(--accent)]'>{pillar.pillar.split(' ')[0]}</span> {pillar.pillar.substring(pillar.pillar.indexOf(' ') + 1)}
                </h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pillar.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="space-y-2">
                      <h4 className="font-semibold text-foreground text-base">
                        • {activity.name}
                      </h4>
                      <ul className="text-sm text-muted ml-4 space-y-1">
                        {activity.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="list-disc">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <p className="pt-6 text-sm text-muted border-t border-white/[0.1]">
              We look forward to welcoming you to the Data Science Society and embarking on an
              enriching journey of data discovery and innovation!
            </p>
          </Card>
        </div>
      </Section>

      {/* ABOUT SECTION - Title reverted to string, Headings Highlighted internally */}
      <Section title="About Us" subtitle="Who we are" >
        <div id="about" className="grid lg:grid-cols-3 gap-5">
          {/* Left Panel (Vision/Agenda) - Wider Column */}
          <Card className="p-8 lg:col-span-2 h-full flex flex-col justify-between" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-[color:var(--accent)] tracking-wider uppercase">
                Data Science Society: <span className='text-foreground'>CSE(DS)</span> Department
              </h2>
              <h3 className="text-3xl font-bold tracking-tight text-foreground">
                Our <span className='text-[color:var(--accent)]'>Vision</span> & Agenda
              </h3>
              
              <div className="text-sm text-muted">
                <h4 className="font-semibold text-foreground mb-2">The Data Science Society: A Departmental Initiative by CSE(DS)</h4>
                <p>
                  The Data Science Society (DSS) is a departmental initiative by the Computer Science and
                  Engineering (Data Science) department. Our vision is to cultivate a thriving community
                  within the department, empowering students with a passion for data science to excel. We
                  aim to create an environment that fosters learning, innovation, and collaboration,
                  equipping students for successful careers in the dynamic field of data science and related
                  domains. Through diverse opportunities for skill development and networking, we strive
                  to bridge the gap between academic knowledge and practical application, positioning our
                  students as leaders in the field.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild><a href="/about">Read Full Charter</a></Button>
            </div>
          </Card>

          {/* Right Panel (Motto) - Narrower Column */}
          <div className="lg:col-span-1 space-y-5">
            {/* Motto Card */}
            <Card className="p-6 h-full flex flex-col justify-between" style={{ border: '1px solid var(--accent)' }}>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-[color:var(--accent)] mb-2">Our Motto</h4>
                <div className="text-2xl font-bold tracking-tight text-foreground">&quot;Innovate. Analyze. <span className='text-[color:var(--accent)]'>Lead.</span>&quot;</div>
                <p className="mt-2 text-sm text-muted">&ldquo;WHERE <span className='text-[color:var(--accent)]'>IDEAS</span> MEET <span className='text-[color:var(--accent)]'>ACTION</span>&rdquo;</p>
              </div>
              <p className="text-sm text-muted">
                Our motto reflects our core values: to inspire innovative thinking, encourage rigorous data
                analysis, and empower students to become leaders in the data science and other domains.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* EVENTS SECTION - Title reverted to string */}
      <Section title="Upcoming Events" subtitle="What's happening next">
        <div id="events" className="grid lg:grid-cols-1 gap-6"> 
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Events We Will Be <span className='text-[color:var(--accent)]'>Conducting</span></h3>
            <p className="text-sm text-muted mb-6">
              The Data Science Society will organize a variety of events throughout the academic year to cater to different interests and skill levels.
            </p>
            <div className="space-y-4">
              {eventTypes.map((item, i) => (
                <div key={i} className="p-3 rounded-lg border border-white/[0.12]">
                  <h4 className="text-sm font-medium text-foreground"><span className='text-[color:var(--accent)]'>{item.type}:</span></h4>
                  <p className="text-xs text-muted mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted">
              The Data Science Society will regularly update its event schedule and communicate details through official channels.
            </p>
            <div className="mt-6 text-center">
                <Button variant="outline" asChild className="w-full border-white/[0.3]"><a href="/events">View All Events</a></Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* UPDATED TEAM SECTION: Uses the structure from the Team Page and Next.js Image. Height increased to h-80. */}
      <Section title="Meet the Team" subtitle="People behind the club">
        <div id="team" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.slice(0, 4).map((member) => (
            <Card key={member.id} className="relative p-0 overflow-hidden">
                {/* Image Section - **HEIGHT INCREASED TO h-80** */}
                <div className="relative h-80 w-full"> 
                    {/* Replaced <img> with Next.js <Image /> component for performance */}
                    <Image 
                      src={member.imageUrl} 
                      alt={member.name} 
                      fill // Use fill for dynamic sizes defined by the parent div
                      style={{ objectFit: 'cover' }} 
                      className="grayscale transition-opacity duration-300 hover:grayscale-0"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                </div>
                
                {/* Info Section (Name, Role, Contact) - Now uses the full TeamCard structure */}
                <div className="p-4 space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
                    <p className="text-sm text-[color:var(--accent)]">{member.title}</p>
                    
                    {/* Contact Links */}
                    <div className="flex gap-3 pt-2">
                        {/* LinkedIn Icon */}
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                           aria-label={`LinkedIn profile for ${member.name}`}>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.3 38.5-38.5 38.5zm282.7 243h-66.4V297.8c0-26.1-23.4-48.5-52.9-48.5-29.4 0-51.4 22.3-51.4 48.5V416h-66.4V202.2h66.3v26.7h.9c8.7-18.9 33.4-46.7 88.5-46.7 66.8 0 94.5 43.1 94.5 98.4V416z"/>
                           </svg>
                        </a>
                        {/* Email Icon */}
                        <a href={`mailto:${member.socials.email}`} 
                           className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                           aria-label={`Email ${member.name}`}>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.6 27.4 8.6 38.8 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V392c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 340.8c-20.9 15.7-47.5 15.7-68.4 0L0 176z"/>
                           </svg>
                        </a>
                        {/* Twitter/X Icon */}
                         <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" 
                           className="text-muted hover:text-[color:var(--accent)] transition-colors" 
                           aria-label={`X/Twitter profile for ${member.name}`}>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H381.5L248.8 296.7 113.1 464H41.6L201.2 284.4 21.6 48H138.1L257.4 205.1 389.2 48zM364.4 421.8h39.7L132.3 90.8H88.3L364.4 421.8z"/>
                           </svg>
                        </a>
                    </div>
                </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
            <Button variant="outline" asChild><a href="/team">Meet the full team</a></Button>
        </div>
      </Section>

      <Section title="Project Gallery" subtitle="A peek into our activities">
        <div id="gallery" className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="aspect-video" />
          ))}
        </div>
        <div className="mt-4"><Button variant="outline" asChild><a href="/gallery">Open gallery</a></Button></div>
      </Section>

      {/* REDESIGNED UDBHAV MAGAZINE SECTION (Original structure used as inspiration) */}
      <Section title="Udbhav Magazine" subtitle="The official DSS publication">
        <div id="udbhav" className="grid md:grid-cols-3 gap-5 items-stretch">
          
          {/* Featured Magazine Cover Card */}
          <Card className="p-0 md:col-span-1 overflow-hidden h-full flex flex-col" style={{ border: '1px solid var(--accent)', background: 'linear-gradient(160deg, color-mix(in oklab, var(--accent) 20%, #0a0a0a) 0%, #0a0a0a 70%)' }}>
            <div className="p-8 flex-grow">
              <div className="text-xs tracking-wide opacity-90 text-white">NEW RELEASE</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-white"><span className='text-[color:var(--accent)]'>Udbhav</span> 2025</div>
              <p className="mt-2 text-sm opacity-90 text-white max-w-sm">
                {magazineContent.tagline}
              </p>
            </div>
            <div className="p-8 pt-0 flex-none">
              <div className="flex gap-3">
                <Button asChild><a href="#">Read online</a></Button>
                <Button variant="outline" asChild className="border-white/[0.3] text-white hover:bg-white/[0.1]"><a href="#">Download PDF</a></Button>
              </div>
            </div>
          </Card>

          {/* Issue Highlights Card - UPDATED TO USE magazineContent DATA */}
          <Card className="p-6 md:col-span-2 flex flex-col justify-between">
            <div className='flex-grow'>
                <h3 className="text-xl font-medium mb-3">Inside this <span className='text-[color:var(--accent)]'>Issue</span></h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Dynamic list for column 1 */}
                    <ul className="mt-3 grid gap-2 text-sm space-y-1">
                      {articleCol1.map((item, index) => (
                        <li key={`col1-${index}`}>• {item}</li>
                      ))}
                    </ul>
                    {/* Dynamic list for column 2 */}
                    <ul className="mt-3 grid gap-2 text-sm space-y-1">
                        {articleCol2.map((item, index) => (
                        <li key={`col2-${index}`}>• {item}</li>
                      ))}
                    </ul>
                </div>
            </div>
            <div className="mt-5 text-xs text-muted border-t border-white/[0.12] pt-4">
              Contributors: {magazineContent.contributors}
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Contact Us" subtitle="We'd love to hear from you">
        <div id="contact" className="grid md:grid-cols-5 gap-5">
          <Card className="p-6 md:col-span-2">
            <div className="font-medium"><span className='text-[color:var(--accent)]'>Contact</span> Information</div>
            <ul className="mt-3 grid gap-3 text-sm">
              <li>
                <span className="text-muted">Email</span>
                <div className="text-foreground">cmritdatasciencesociety@gmail.com</div>
              </li>
              <li>
                <span className="text-muted">Location</span>
                <div className="text-foreground">CMRIT Hyderabad, Data Science Society Room</div>
              </li>
              <li>
                <span className="text-muted">Club Hours</span>
                <div className="text-foreground">Wed–Fri, 3:00 PM – 4:00 PM</div>
              </li>
            </ul>
            <div className="mt-4">
              <div className="text-sm text-muted">Socials</div>
              <div className="mt-2 flex gap-2">
                <a className="rounded-full px-3 py-1 border border-white/[0.12] text-xs" href="#">Instagram</a>
                <a className="rounded-full px-3 py-1 border border-white/[0.12] text-xs" href="#">X</a>
                <a className="rounded-full px-3 py-1 border border-white/[0.12] text-xs" href="#">LinkedIn</a>
              </div>
            </div>
          </Card>
          <Card className="p-6 md:col-span-3">
            <div className="font-medium">Send us a <span className='text-[color:var(--accent)]'>Message</span></div>
            <div className="mt-4 h-[500px]">
              <iframe
                title="Contact Form"
                src="https://docs.google.com/forms/d/e/CONTACT_FORM_ID/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
              >Loading…</iframe>
            </div>
          </Card>
        </div>
      </Section>

      {/* REPLACED: Original Join the Club section is replaced with this prominent Quote/Final CTA */}
      <Section title="Ready to Lead?" subtitle="Your journey in Data Science starts here">
        <Card className="relative p-10 md:p-16 text-center overflow-hidden" 
              style={{ 
                background: 'color-mix(in oklab, var(--accent) 15%, #0a0a0a)', 
                border: '1px solid var(--accent)',
                boxShadow: '0 0 40px rgba(var(--accent-rgb), 0.2)' // Added a glow for prominence
              }}>
            
            {/* Quote (Motto) */}
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto">
                &quot;Innovate. Analyze. <span className='text-[color:var(--accent)]'>Lead.</span>&quot;
            </h3>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                Join the Data Science Society and transform your ideas into industry-leading projects.
            </p>
            
            {/* Final CTA Button */}
            <div className="mt-8 flex justify-center gap-4">
                <Button asChild className="px-8 py-4 text-lg font-semibold">
                    <a href="/join">Become a Member Now</a>
                </Button>
            </div>
        </Card>
      </Section>

    </div>
  );
}
