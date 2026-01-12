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
      <section className="w-full bg-[#0a0a0a] pt-2 pb-10">
        <div className="w-full px-0 sm:px-4 lg:px-6">
          <div
            className="relative isolate overflow-hidden w-full flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20 sm:rounded-[2.5rem] lg:rounded-[3.5rem]"
            style={{
              background: `var(--accent)`,
            }}
          >
            {/* 1. TECHNICAL GRID - Reduced opacity for subtle texture */}
            <div
              className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(circle_at_center,white,transparent_85%)]"
              style={{
                backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
                backgroundSize: '45px 45px'
              }}
            />

            <div className="relative z-10 w-full max-w-6xl">
              {/* Compact Monospace Badge */}
              <div className="mb-6 inline-block">
                <p className="font-mono text-[9px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gray-900 bg-black/5 px-3 py-1.5 rounded-full border border-black/10">
                  STRATEGY // ANALYSIS // ACTION
                </p>
              </div>

              {/* Scaled Heading - High impact, less vertical space */}
              <h1 className="text-[11vw] sm:text-[8vw] lg:text-[90px] font-[900] tracking-tighter text-gray-950 leading-[0.85] uppercase">
                Innovate<span className="opacity-20">.</span> Analyze<span className="opacity-20">.</span> Lead<span className="opacity-20">.</span>
              </h1>

              {/* Minimalist description - One line on desktop for height reduction */}
              <p className="mt-6 text-base sm:text-lg text-gray-900/70 max-w-2xl mx-auto font-medium leading-relaxed">
                The hub for data science at CMRIT. <span className="text-black font-bold">Building the future</span> through code and community.
              </p>

              {/* Action Block - More compact padding */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="/join"
                  className="w-full sm:w-auto bg-gray-900 text-white px-9 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-black hover:-translate-y-0.5 active:scale-95 shadow-xl shadow-black/10"
                >
                  Join Society
                </a>

                <a
                  href="/events"
                  className="group flex items-center gap-2 text-gray-950 font-bold text-xs uppercase tracking-widest"
                >
                  Explore Events
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Decorative Technical Detail - Tucked in corner */}
            <div className="absolute bottom-6 right-8 hidden lg:block opacity-20 font-mono text-[9px] uppercase text-gray-900 tracking-tighter">
              Node: CMRIT_HYD // v0.1.2
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

      <Section title="Meet the Team" subtitle="The architects of our community">
        <div id="team" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <Card
              key={member.id}
              className="group relative p-0 overflow-hidden bg-[#111] border-white/[0.05] transition-all duration-500 hover:border-[color:var(--accent)]/50 hover:-translate-y-2"
            >
              {/* Monospace Index Decor (// 01, // 02) */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-white/30 tracking-widest group-hover:text-[color:var(--accent)] transition-colors">
                {'//'} 0{index + 1}
              </div>

              {/* Image Section - Premium h-96 height */}
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Subtle Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Glass-morphism Social Bar - Slides up on Hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a href={member.socials.linkedin} target="_blank" className="text-white/70 hover:text-[color:var(--accent)] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href={`mailto:${member.socials.email}`} className="text-white/70 hover:text-[color:var(--accent)] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </a>
                  <a href={member.socials.twitter} target="_blank" className="text-white/70 hover:text-[color:var(--accent)] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" /></svg>
                  </a>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold tracking-tight text-white mb-1 transition-colors group-hover:text-[color:var(--accent)]">
                  {member.name}
                </h4>
                <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
                  {member.title}
                </p>
              </div>
            </Card>
          ))}
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
