/**
 * RecruitLens — Profile Optimization & Recruiter Lens Data Engine
 * Section-by-section practical guide for students, freshers, and early-career professionals.
 * Each section follows: What it is → Why it matters → What to add → Examples → Common mistakes → How to improve
 */

const LINKEDIN_DATA = {

  // ─── 15 Profile Section Guides ───────────────────────────────────────────────
  sections: [
    {
      id: "photo",
      title: "Profile Photo",
      badge: "Visual First Impression",
      whatIsIt: "Your profile photo is the circular image displayed next to your name across all of LinkedIn — in search results, connection requests, comments, and direct messages.",
      whyItMatters: "Profiles with professional headshots receive up to 14x more profile views and 9x more connection requests. It is the very first element a recruiter's eye lands on — a low-quality photo can cause them to skip your profile before reading a single word.",
      photoPreview: "images/headshot_good.jpg",
      whatToAdd: [
        "Head & shoulders framing — your face should fill 60–70% of the circular frame.",
        "Natural, soft front lighting — facing a large window during daytime works best.",
        "Plain, neutral, or softly blurred background (avoid cluttered rooms).",
        "High resolution — at least 800×800px (crisp, not pixelated).",
        "Smart-casual or industry-appropriate attire.",
        "A warm, approachable smile with direct eye contact."
      ],
      examples: {
        bad: "A dimly lit smartphone selfie taken inside a car with sunglasses on and a dark vintage filter applied.",
        good: "Crisp, well-lit headshot against a plain warm-gray wall. Smart-casual shirt, facing forward with a natural smile and clear eye contact. Face fills 65% of the circular frame."
      },
      commonMistakes: [
        "Selfies with car interiors, gym mirrors, or cluttered bedroom backgrounds.",
        "Cropped group photos where other people's shoulders or arms are visible.",
        "Low-resolution, blurry, or heavily filtered photos.",
        "Wearing sunglasses, hats, or dark tinted lenses.",
        "Using AI avatars, cartoon characters, or anime-style graphics.",
        "Using the same photo for 5+ years — update every 2–3 years."
      ],
      howToImprove: "You don't need a professional photographer. Stand near a large window on a cloudy day for soft, even natural light. Use your phone's self-timer or ask a friend. Take 20–30 shots and pick the best one. The entire process takes under 10 minutes."
    },
    {
      id: "banner",
      title: "Cover Banner",
      badge: "Brand Canvas",
      whatIsIt: "The wide rectangular image (1584×396px) displayed behind your profile photo at the top of your LinkedIn page — visible to everyone who visits your profile.",
      whyItMatters: "Your banner is prime visual real estate sitting directly behind your headshot. It instantly communicates your domain, tech stack, and personal brand in 2 seconds. A custom banner signals that you take your professional career presence seriously.",
      bannerPreviewImage: "images/banner_preview.jpg",
      whatToAdd: [
        "Custom dimensions: 1584×396px (4:1 aspect ratio).",
        "Your target role in large, readable text.",
        "4–6 core technical skills or keywords.",
        "Portfolio domain or GitHub handle on the right side.",
        "Keep the left 25% of the banner clear — your profile photo overlaps there.",
        "A clean, cohesive color palette that reflects your personal brand."
      ],
      examples: {
        bad: "Default blank LinkedIn turquoise/gray placeholder banner, or a random scenic nature photo with no professional context.",
        good: "Clean dark-slate background: 'Full Stack Engineer • TypeScript | React | Python | AWS' in bold white text. Portfolio URL and GitHub handle on the right. Subtle tech icon accents. Left side kept clear for avatar overlap."
      },
      commonMistakes: [
        "Leaving the default LinkedIn turquoise/gray placeholder.",
        "Placing key text or logos on the bottom-left corner where your avatar overlaps.",
        "Using low-resolution landscape photos that pixelate on retina screens.",
        "Cluttering the banner with long, unreadable paragraphs of text.",
        "Using copyrighted corporate logos or brand imagery without permission."
      ],
      howToImprove: "Use Canva — search 'LinkedIn Banner' for free professionally designed templates. Choose a dark or neutral background, add your role in clear text, list 4–6 skills, and add your portfolio URL. Takes under 15 minutes and makes an immediate, professional visual impact."
    },
    {
      id: "headline",
      title: "Headline",
      badge: "Highest SEO Value",
      whatIsIt: "The short line of text displayed directly under your name across all of LinkedIn — in search results, connection previews, comments, and recruiter dashboards.",
      whyItMatters: "Your headline is LinkedIn's #1 keyword field for recruiter search. If a recruiter searches 'Frontend Developer React', your profile only appears if those exact words are in your headline. It's the single highest-impact field on your entire profile — yet most students waste it by writing 'Student at XYZ College'.",
      formula: {
        title: "The Recruiter Search Headline Formula",
        structure: "[Target Job Title] | [Core Technical Skills (3-4)] | [Value Delivered / What You Build] | [Proof Point / Credential]",
        breakdown: [
          { part: "Target Job Title", desc: "Exact title recruiters search: 'Frontend Developer', 'Data Analyst'" },
          { part: "Core Skills", desc: "Top 3-4 tools separated by • or | (e.g. React.js • TypeScript • Next.js)" },
          { part: "Value Proposition", desc: "What you create: 'Building High-Performance Accessible Web Apps'" },
          { part: "Proof Point", desc: "Ex-Intern @ Startup | B.Tech '25 | 300+ LeetCode Solved" }
        ]
      },
      whatToAdd: [
        "Your exact target job title — use words recruiters actually search (e.g. 'Frontend Developer', not 'Code Enthusiast').",
        "3–4 of your top technical keywords separated by • or |.",
        "A short value statement describing what you build or deliver.",
        "One brief credential or proof point (e.g. 'Ex-Intern @ Startup | Class of 2025').",
        "Total length: keep between 120–180 characters."
      ],
      examples: {
        bad: "Student at ABC Institute of Technology | Looking for exciting software internships | Passionate Learner | Open to opportunities",
        good: "Frontend Developer | React.js • TypeScript • Next.js • Tailwind CSS | Building Accessible Web Apps | Ex-Intern @ DevCo | Open Source Contributor"
      },
      commonMistakes: [
        "Writing only 'Student at XYZ College' — this is not searchable by any recruiter.",
        "Vague phrases: 'Aspiring Engineer', 'Seeking Opportunities', 'Passionate about Technology'.",
        "Buzzwords: 'Ninja Coder', 'Rockstar Developer', 'Tech Guru'.",
        "ALL CAPS or excessive emojis that look unprofessional.",
        "Never updating your headline after gaining new skills, certifications, or internship experience."
      ],
      howToImprove: "Use our headline generator tool in the Tools tab. Enter your target role, top 3 skills, what you build, and proof point to generate 3 recruiter-ready variations in 5 seconds."
    },
    {
      id: "custom_url",
      title: "Custom URL & Contact Info",
      badge: "Professional Polish",
      whatIsIt: "Your LinkedIn profile URL and the contact details (email, portfolio, GitHub) that are publicly visible to recruiters and connections on your profile page.",
      whyItMatters: "A clean URL like linkedin.com/in/alex-morgan looks polished on your resume, email signature, and GitHub profile. A default URL with random numbers (linkedin.com/in/alex-4a810928b) signals inattention to detail — a small but noticeable signal to careful recruiters.",
      whatToAdd: [
        "Claim your vanity URL: linkedin.com/in/firstname-lastname.",
        "If your preferred URL is taken, add a professional suffix: linkedin.com/in/alex-morgan-dev.",
        "Add a professional email address — not a gaming or expiring student email.",
        "Add your portfolio website URL in Contact Info.",
        "Add your GitHub profile link.",
        "Verify your public profile visibility is turned ON."
      ],
      examples: {
        bad: "URL: linkedin.com/in/john-doe-4a810928b/\nEmail: johnny_gaming_2004@hotmail.com",
        good: "URL: linkedin.com/in/johndoe-dev\nEmail: john.doe.dev@gmail.com\nPortfolio: johndoe.dev\nGitHub: github.com/johndoe"
      },
      commonMistakes: [
        "Never customizing the URL — leaving the default random-number string unchanged.",
        "Using gamer tags, nicknames, or humorous usernames in a professional URL.",
        "Using a student email that expires after graduation.",
        "Not adding your portfolio or GitHub to Contact Info.",
        "Setting your profile to private — recruiters and employers cannot find or see you."
      ],
      howToImprove: "Go to LinkedIn → Edit public profile & URL (top right of your profile page) → click the pencil next to your URL. Use firstname-lastname format. This takes 30 seconds. Then click Contact Info and add your Gmail, GitHub, and portfolio link."
    },
    {
      id: "about",
      title: "About / Summary",
      badge: "Personal Pitch",
      whatIsIt: "A free-text section below your profile header where you introduce yourself in your own voice — describing your background, skills, projects, and what opportunities you're looking for.",
      whyItMatters: "The first 3 lines appear before the 'See more' cutoff — this is your hook. A strong About converts a recruiter's initial curiosity into genuine interest. It's also a major keyword field that LinkedIn's algorithm uses to match profiles to job searches.",
      framework: [
        { step: "1. The Hook (Lines 1-3)", desc: "Who you are, what you specialize in, and what problems you love solving. Must grab attention before 'See more'." },
        { step: "2. Technical Arsenal", desc: "Bulleted list of technical skills, frameworks, databases, and developer tools organized logically." },
        { step: "3. Measurable Highlights", desc: "1-2 standout projects, hackathons, or internship milestones with concrete numbers/metrics." },
        { step: "4. Call to Action (CTA)", desc: "What roles you are seeking + your direct contact email address so recruiters can message you directly." }
      ],
      whatToAdd: [
        "Hook (first 2–3 lines): who you are, what you specialize in, and what excites you.",
        "A bulleted list of your core technical skills and tools — use keywords recruiters search.",
        "1–2 project highlights with concrete results (e.g. '500+ users', '40% faster load time').",
        "What you're currently learning or working towards.",
        "A clear call to action ending with your direct professional email address."
      ],
      examples: {
        bad: "I am a hardworking computer science graduate looking for a job in a reputed company where I can utilize my skills for organizational growth and enhance my technical knowledge.",
        good: "I'm a Frontend Developer who builds fast, accessible web applications using React, Next.js, and TypeScript.\n\nOver 2 years I've shipped 8+ production apps — including a real-time workspace used by 5,000+ monthly users with sub-100ms load speeds.\n\n🛠️ Stack: React.js • Next.js • TypeScript • Tailwind CSS • Node.js • PostgreSQL • Git\n\n🌱 Currently deepening expertise in Web Performance Optimization and Next.js Server Components.\n\n📫 Open to Frontend / Full Stack roles. Reach me at alex@email.com or visit alexmorgan.dev"
      },
      commonMistakes: [
        "Copy-pasting a generic resume objective word-for-word.",
        "A single massive wall of text with no paragraph breaks or structure.",
        "Overused clichés: 'highly motivated self-starter', 'team player', 'passion for technology'.",
        "Leaving the section completely blank — this removes a major keyword indexing opportunity.",
        "Not including your email — recruiters without paid InMail credits can't contact you directly."
      ],
      howToImprove: "Write in first person. Use short paragraphs (2–3 sentences max). A bulleted technical skills list in the middle dramatically improves keyword matching. Always end with your direct email — this simple addition significantly increases recruiter outreach rates."
    },
    {
      id: "featured",
      title: "Featured Section",
      badge: "Visual Showcase",
      whatIsIt: "A large visual card section displayed directly below your About — where you pin your most important assets: resume PDF, portfolio link, top posts, certifications, or project demos for easy one-click access.",
      whyItMatters: "Featured is the most visually prominent section on LinkedIn. Recruiters who reach this section are already engaged — give them your portfolio, resume, and live projects in one instant click. It makes your profile immediately actionable without requiring back-and-forth messages.",
      whatToAdd: [
        "Your updated 1-page Resume as a PDF with a clean preview image.",
        "Your personal portfolio website or your strongest deployed project link.",
        "A high-engagement technical post, hackathon certificate, or written article.",
        "A live demo link to your most impressive project.",
        "Limit to 2–4 items maximum — quality always beats quantity here."
      ],
      examples: {
        bad: "Featured section left completely empty, or containing only a single irrelevant repost from 2 years ago with no personal commentary.",
        good: "1. 📄 Resume PDF — Software Engineer 2025 (clean 1-page preview)\n2. 🌐 Portfolio & Project Showcase — alexmorgan.dev\n3. 🏆 Hackathon 1st Place Certificate & Project Demo Video\n4. ✍️ Post: 'How I built a full-stack app handling 10k events/sec — what I learned'"
      },
      commonMistakes: [
        "Leaving the Featured section completely empty — it's the most underused section.",
        "Pinning 10+ items that dilute and overwhelm your strongest work.",
        "Pinning low-quality memes, irrelevant reposts, or off-topic content.",
        "Pinning an outdated resume with old contact information.",
        "Not using this section at all — even 2 well-chosen items create a massive difference."
      ],
      howToImprove: "Go to LinkedIn → Add profile section → Featured. Upload your resume PDF first — recruiters love opening it without needing to message you. Add your portfolio link as item 2. These two actions alone make your profile dramatically more actionable for any recruiter who visits."
    },
    {
      id: "experience",
      title: "Experience",
      badge: "Proof of Impact",
      whatIsIt: "The section where you list all practical experience — internships, part-time jobs, freelance work, college projects, and volunteer positions — with descriptions of what you actually did and what you achieved.",
      whyItMatters: "Recruiters spend the most time reading experience entries. Even without formal jobs, well-written project or internship descriptions with measurable results prove you can deliver real work. The absence of any descriptions is the most common reason entry-level profiles get skipped.",
      formula: {
        title: "The XYZ Impact Bullet Formula (Google Standard)",
        structure: "[Accomplished X Action Verb] [specific feature/task Y] using [Tools/Stack Z], resulting in [Measurable Metric/Outcome %]",
        breakdown: [
          { part: "Action Verb", desc: "Engineered, Architected, Refactored, Automated, Deployed" },
          { part: "Specific Feature", desc: "Responsive React UI, JWT Auth, Microservice API, Data Pipeline" },
          { part: "Tools & Stack", desc: "TypeScript, PostgreSQL, Docker, Tailwind CSS, Redis" },
          { part: "Measurable Outcome", desc: "Reduced render latency by 32%, handled 10k daily requests" }
        ]
      },
      whatToAdd: [
        "Every internship, part-time role, freelance project, or meaningful volunteer position.",
        "3–5 bullet points per role starting with strong past-tense action verbs (Engineered, Built, Automated, Led, Designed).",
        "The specific tools and technologies you used in each role.",
        "Quantifiable results wherever possible: percentages, user counts, time saved, performance gains.",
        "Even personal or academic projects count — add them as 'Project-Based Experience'."
      ],
      examples: {
        bad: "Frontend Intern at TechStartup (3 months)\n- Worked on website development\n- Fixed bugs in the user interface\n- Attended daily standup meetings with the team",
        good: "Frontend Developer Intern — TechStartup (June–Aug 2024)\n• Engineered 12+ responsive React & TypeScript components, reducing mobile page load time by 32%.\n• Integrated RESTful APIs for user auth and Stripe payments, handling 10,000+ daily requests with zero downtime.\n• Resolved 25+ cross-browser compatibility bugs, raising Lighthouse accessibility score from 68 to 96.\n• Collaborated in Agile 2-week sprints with 2 UX designers and 3 backend engineers to ship the v2.0 dashboard on schedule."
      },
      commonMistakes: [
        "Passive language: 'Responsible for...', 'Helped with...', 'Was involved in...'.",
        "Listing only your job title with zero description — recruiters have no idea what you did.",
        "Describing job duties instead of achievements — what impact did your work have?",
        "Omitting the specific technologies and tools you used.",
        "Inconsistent verb tenses — use past tense consistently for all completed roles."
      ],
      howToImprove: "Use our Bullet Point Optimizer in the Tools tab. Enter your raw bullet point, select an action verb, and specify technologies + metrics to instantly format recruiter-ready XYZ bullet points."
    },
    {
      id: "projects",
      title: "Projects",
      badge: "Proof of Work",
      whatIsIt: "A dedicated section to showcase personal, academic, or open-source projects — with descriptions, technology stacks, your specific contribution, and links to live demos and code repositories.",
      whyItMatters: "For students and freshers with limited work experience, your projects ARE your proof of ability. A live demo link proves engineering skills faster than any amount of resume text. Recruiters click live links — they skip plain text project names.",
      whatToAdd: [
        "2–4 projects with clear, specific, descriptive names.",
        "The problem the project solves and who it's built for.",
        "The full technology stack used: React, Node.js, PostgreSQL, Vercel, etc.",
        "Your specific contribution — especially important for team or group projects.",
        "Key features and any measurable outcomes (signups, performance scores, usage).",
        "A working Live Demo URL AND a GitHub repository link."
      ],
      examples: {
        bad: "E-Commerce Website\nBuilt an e-commerce website using HTML and CSS for a college project.",
        good: "ShopSphere — Full-Stack E-Commerce Platform\nTech: React, Node.js, Stripe, MongoDB, Cloudinary, Vercel\n• Architected a responsive e-commerce app with product search, cart persistence, and Stripe payment integration.\n• Implemented JWT authentication with bcrypt hashing and role-based access (Admin / Customer).\n• Optimized images via Cloudinary, achieving 95+ Google Lighthouse Performance score.\n🔗 Live Demo: shopsphere.demo.app | GitHub: github.com/username/shopsphere"
      },
      commonMistakes: [
        "Listing only the project name with zero description.",
        "Submitting unmodified tutorial clones: basic calculator, weather app, generic to-do list.",
        "Providing broken or localhost demo URLs — always deploy to Vercel, Netlify, or Render.",
        "Not specifying your individual contribution in team or group projects.",
        "Forgetting to link the GitHub repository."
      ],
      howToImprove: "Deploy every project — even small ones — to Vercel, Netlify, or Render for free. A clickable live demo transforms a project from text into tangible, clickable proof. If your best project isn't deployed yet, dedicate 1 hour this week to making it live."
    },
    {
      id: "skills",
      title: "Skills",
      badge: "Algorithmic Match",
      whatIsIt: "A dedicated section where you list the technical skills, programming languages, frameworks, tools, and platforms you are proficient in.",
      whyItMatters: "LinkedIn's search algorithm compares your listed skills against job posting requirements to rank candidates in recruiter searches. Matching 8+ of a target job's must-have skills places your profile in the top results shown to hiring managers.",
      whatToAdd: [
        "Pin your 3 most important skills at the top — these should exactly match your target role.",
        "15–25 targeted technical skills total.",
        "Order logically: Languages → Frameworks → Databases → Cloud → Dev Tools.",
        "Only add skills you can confidently discuss or demonstrate in an interview.",
        "Remove soft skills (like 'Communication') — they add very little value in this section."
      ],
      examples: {
        bad: "Skills listed: Microsoft Word, Communication, Team Player, Internet Browsing, Hard Worker, Punctuality",
        good: "Pinned (Top 3): React.js • TypeScript • Next.js\nTechnical: JavaScript (ES6+), Node.js, HTML5, CSS3, Tailwind CSS, Redux Toolkit, REST APIs, Git, GitHub\nDatabases: MongoDB, PostgreSQL, Firebase\nTools: Vite, Jest, Figma, Docker (basics), AWS (basics)"
      },
      commonMistakes: [
        "Adding generic soft skills: 'Hardworking', 'Punctual', 'MS Word', 'Good Communicator'.",
        "Adding 50+ random skills with no focus on your target role.",
        "Leaving your Top 3 pinned skills empty.",
        "Adding skills you cannot answer basic technical interview questions about.",
        "Fewer than 10 total skills — LinkedIn flags this as an incomplete profile."
      ],
      howToImprove: "Go to LinkedIn → Skills → tap the pencil icon. Delete soft skills and irrelevant entries. Add technical skills from 2–3 job descriptions for roles you'd love to land. Then use the 'Pin' option on your top 3 most critical skills. This single step can dramatically improve your search ranking."
    },
    {
      id: "education",
      title: "Education",
      badge: "Academic Foundation",
      whatIsIt: "The section listing your college/university, degree, field of study, graduation year, relevant coursework, and any academic achievements or campus leadership.",
      whyItMatters: "Recruiters filter by graduation year for entry-level and fresher roles. A complete education entry validates your technical foundation and can highlight relevant coursework, campus leadership, and honors that differentiate you from other entry-level candidates.",
      whatToAdd: [
        "Full degree name: e.g. 'B.Tech in Computer Science & Engineering'.",
        "University/college name — spelled correctly.",
        "Start year and expected or actual graduation year.",
        "6–8 relevant technical subjects from your coursework.",
        "CGPA/GPA — include only if 7.5/10 or above.",
        "Campus clubs, leadership roles, hackathon wins, or academic scholarships."
      ],
      examples: {
        bad: "XYZ College\nStudent\n2022",
        good: "B.Tech Computer Science & Engineering — ABC Institute of Technology (2021–2025)\nCGPA: 8.8/10.0\nRelevant Coursework: Data Structures & Algorithms, OOP, Database Management Systems, Computer Networks, Operating Systems, Full Stack Web Development\nLeadership: Technical Lead @ Google Developer Student Club — organized 4 React & Git workshops for 200+ students\nAward: 1st Place, University Annual Hackathon 2024"
      },
      commonMistakes: [
        "Listing high school details once you're in college — remove it.",
        "Including a low CGPA (below 7.5/10) — simply omit it if it hurts.",
        "Omitting your graduation year — this is a key filter recruiters use for entry-level roles.",
        "Leaving the description blank with just the college name and degree title.",
        "Misspelling your university name or degree title."
      ],
      howToImprove: "Add your 6–8 most relevant technical subjects in the description field. Even just typing 'Relevant Coursework: DSA, DBMS, OS, Computer Networks' takes 30 seconds and significantly improves your profile's keyword match for entry-level engineering roles."
    },
    {
      id: "certifications",
      title: "Certifications",
      badge: "Industry Credibility",
      whatIsIt: "A section to list verified professional certifications from recognized platforms — Google, Meta, AWS, Microsoft, IBM, freeCodeCamp, Coursera, or similar credible organizations.",
      whyItMatters: "Certifications validate modern, job-relevant skills beyond your college curriculum. For entry-level candidates, they signal proactive self-learning — a quality recruiters actively look for when formal work experience is limited.",
      whatToAdd: [
        "The exact certification name and the issuing organization.",
        "Issue date and expiry date (if applicable).",
        "Credential ID and a direct verification URL.",
        "Tag the relevant LinkedIn skills to each certification.",
        "Prioritize well-known issuers: AWS, Meta, Google, Microsoft, IBM, freeCodeCamp."
      ],
      examples: {
        bad: "Certificate of Participation — 1-Hour Webinar on AI Trends\n(No credential ID, no verification link, no issuing organization details)",
        good: "Meta Frontend Developer Professional Certificate\nIssued by: Meta (via Coursera) | March 2024\nCredential ID: ABC123XYZ789\nVerification: coursera.org/verify/ABC123XYZ789\nTagged Skills: React.js, JavaScript, UX Principles, Version Control"
      },
      commonMistakes: [
        "Adding 20+ low-effort 30-minute webinar attendance slips to pad the section.",
        "Listing certifications without a Credential ID or verification link.",
        "Including expired certifications listed as current without noting the expiry.",
        "Adding certificates completely unrelated to your target role.",
        "Confusing 'course completion' certificates with verifiable professional certifications — these are very different."
      ],
      howToImprove: "Start with one recognized free certification: Google IT Support (Coursera), Meta Frontend Developer Certificate, or freeCodeCamp Responsive Web Design. These are verifiable, widely respected, and completely free. Three real credentials with verification links always beat twenty participation slips."
    },
    {
      id: "activity",
      title: "Activity & Posts",
      badge: "Engagement Signal",
      whatIsIt: "The posts, comments, reposts, and articles you publish on LinkedIn — visible to your connections, your extended network, and anyone who visits your profile and scrolls to the Activity section.",
      whyItMatters: "A completely silent profile tells recruiters nothing about your thinking, growth, or engagement. Regular activity keeps you visible in your network's feed, signals active learning, and builds your personal brand gradually over time — all without spending a rupee.",
      whatToAdd: [
        "Project posts: 'Just shipped [X] — here's what I built and what I learned.'",
        "Learning posts: Explain a technical concept you recently understood in plain, simple language.",
        "Milestone posts: internship start/end, certification earned, project deployed.",
        "Thoughtful comments on posts by developers and industry professionals you follow.",
        "Reshared useful articles with your own 2–3 sentence opinion or key takeaway added."
      ],
      examples: {
        bad: "Profile with zero posts, zero comments, zero activity — last active 8 months ago.",
        good: "✅ Just shipped my first full-stack project! 🚀\n\nBuilt a Task Manager using React, Node.js, and PostgreSQL with JWT auth and real-time task updates.\n\nWhat I learned:\n• Structuring REST API routes cleanly\n• Managing async state with TanStack Query\n• Deploying both frontend & backend for free on Vercel + Render\n\n🔗 Live demo: [link] | GitHub: [link]\n\nStill a lot to improve — but shipping always beats perfecting. 💪"
      },
      commonMistakes: [
        "Posting motivational quotes or memes unrelated to your professional domain.",
        "Sharing content without adding any personal opinion or context.",
        "Posting 10 times in one week then going completely silent for 3 months.",
        "Only engaging with close friends — comment on industry professionals' posts too.",
        "Complaining about the job market without offering any constructive insight or experience."
      ],
      howToImprove: "Aim for 2–4 posts per month — consistency matters far more than frequency. Start simple: next time you finish a project or learn something new, write 5–6 honest lines about it. You don't need to be an expert. Authenticity about your learning journey resonates strongly on LinkedIn."
    },
    {
      id: "connections",
      title: "Connections & Networking",
      badge: "Network Strategy",
      whatIsIt: "The people you are connected with on LinkedIn — your 1st-degree network. LinkedIn's algorithm prioritizes your profile in searches made by people within your extended (1st, 2nd, 3rd degree) network.",
      whyItMatters: "Recruiters filter searches by connection degree. Having 500+ relevant connections dramatically increases how often your profile surfaces in searches. Your network also creates referral and visibility opportunities that no job board can replicate.",
      whatToAdd: [
        "Alumni from your college currently working in your target industry.",
        "Developers, designers, or professionals in roles similar to your career goal.",
        "Recruiters and HR professionals at companies you're genuinely interested in.",
        "Professors, mentors, project supervisors, and research guides.",
        "Classmates, batchmates, and peers who are also growing in your field.",
        "A short personalized note with every single connection request."
      ],
      examples: {
        bad: "72 connections — all college classmates, zero industry professionals, zero recruiters, zero alumni in tech.",
        good: "Connection Request Note:\n\n'Hi [Name], I came across your profile while researching [Company]. I'm a CS student focused on frontend development and your work on [specific project/area] really caught my attention. Would love to connect and learn from your journey. No pressure at all — just building my network thoughtfully!'"
      },
      commonMistakes: [
        "Sending blank connection requests with no message — this has a very low acceptance rate.",
        "Mass-connecting with strangers in bulk with no personalization or context.",
        "Connecting only with profiles completely unrelated to your industry or goals.",
        "Treating connection count as a pure vanity metric — quality always matters more.",
        "Never following up with a genuine conversation after connecting."
      ],
      howToImprove: "Send 5–10 personalized connection requests each week. Use LinkedIn's Alumni tool (search your university's page → Alumni tab) to find graduates working in your target roles. Always add a short, specific note — mentioning why you're reaching out triples your acceptance rate."
    },
    {
      id: "recommendations",
      title: "Recommendations",
      badge: "Social Proof",
      whatIsIt: "Written testimonials from people who have worked directly with you — internship managers, professors, teammates, or project supervisors — publicly displayed on your LinkedIn profile.",
      whyItMatters: "Recommendations provide credible, third-party validation of your skills and character. A specific, genuine recommendation from a real manager or professor carries far more weight than any self-reported quality on your own profile.",
      whatToAdd: [
        "Ask your internship manager or direct supervisor first — they carry the most credibility.",
        "Ask professors whose projects, research, or courses you contributed to meaningfully.",
        "Ask senior teammates or project leads who directly observed your contributions.",
        "When requesting, briefly remind them of specific work or achievements you did together.",
        "Offer to write a recommendation for them in return — reciprocity significantly helps."
      ],
      examples: {
        bad: "Request sent: 'Hey can you please recommend me on LinkedIn?'\n\nRecommendation received: 'Alex is a good student and hard worker. I recommend him.'",
        good: "Request sent: 'Hi [Manager's name], I truly valued working with you on [Project]. Would you be comfortable writing a short LinkedIn recommendation about my work on the API integration and dashboard features? Happy to return the favor!\n\nRecommendation received: 'Alex joined as a Frontend Intern and immediately took ownership of our dashboard component library. He refactored 12 UI components in React & TypeScript, reducing our bundle size by 22%. His initiative, attention to detail, and communication were exceptional. I'd hire him again without hesitation.'"
      },
      commonMistakes: [
        "Asking strangers or people who barely know your actual work.",
        "Sending a generic 'Can you please recommend me?' with no context.",
        "Waiting too long after the internship or project ends — ask within 2–4 weeks.",
        "Accepting vague one-line recommendations that say nothing specific.",
        "Repeatedly following up with people who have not responded after 2 messages."
      ],
      howToImprove: "Think of 2–3 people you've worked closely with in the past 6 months. Message one of them this week with a specific, friendly, low-pressure request. Make it easy — briefly remind them of the concrete work you did together so they don't have to start from scratch."
    },
    {
      id: "job_preferences",
      title: "Job Preferences & Open to Work",
      badge: "Recruiter Signal",
      whatIsIt: "LinkedIn settings where you specify the types of roles, locations, and employment types you're looking for — and optionally display an 'Open to Work' signal to recruiters or your entire network.",
      whyItMatters: "LinkedIn's job matching algorithm uses your preferences to surface your profile to relevant recruiters and send you matching job alerts. Incomplete or vague preferences mean you're invisible in LinkedIn's active job-seeker filters — a dedicated tool recruiters use daily to find candidates.",
      whatToAdd: [
        "Desired job titles using exact recruiter search terms (e.g. 'Frontend Developer', 'React Developer', 'UI Engineer').",
        "Employment types: Full-time, Internship, Contract — select all that apply.",
        "Preferred locations AND enable Remote/Hybrid/On-site options.",
        "Accurate start date: 'Immediately', 'Within 1 month', 'In 3 months'.",
        "Enable 'Open to Work' → Recruiters Only (private — your current employer cannot see it).",
        "Revisit and refresh your preferences every 60–90 days."
      ],
      examples: {
        bad: "Job Preferences: Not configured.\nOpen to Work: Off.\nDesired Role: 'Anything in tech.'\nLocations: Not set.",
        good: "Configured Job Preferences:\n• Desired Titles: Frontend Developer, React Developer, UI Engineer\n• Employment Type: Full-time, Internship, Contract\n• Locations: Bangalore, Hyderabad + Remote (India)\n• Start Date: Available Immediately\n• Open to Work: Enabled — Recruiters Only\n• Industries: Software / IT, Fintech, SaaS Product Companies"
      },
      commonMistakes: [
        "Leaving job preferences completely blank — recruiters can't filter for you in job-seeker searches.",
        "Using vague desired roles like 'Anything in tech' or just 'Software'.",
        "Setting Open to Work to 'All LinkedIn Members' while currently employed.",
        "Selecting every possible industry and location — this dilutes your relevance in searches.",
        "Forgetting to turn off 'Open to Work' after you've accepted a job offer."
      ],
      howToImprove: "Go to LinkedIn → Jobs → Job Preferences. Spend 5 focused minutes completing every field. Then enable 'Open to Work' for Recruiters Only — this adds your profile to a dedicated LinkedIn recruiter filter that hiring managers actively use. It's free, private, and takes under 2 minutes to set up."
    }
  ],

  // ─── 100-Point Profile Assessment Questions ──────────────────────────────────
  assessmentQuestions: [
    {
      id: "photo",
      title: "Profile Photo (Headshot)",
      weight: 8,
      question: "How is your current LinkedIn profile picture set up?",
      options: [
        { score: 8, status: "complete", label: "Professional, well-lit headshot, 60% face fill, neutral background & natural smile." },
        { score: 3, status: "needs_work", label: "Casual smartphone selfie, distant group crop, or slightly dated photo." },
        { score: 0, status: "missing", label: "Default blank silhouette or cartoon/AI/anime graphic." }
      ]
    },
    {
      id: "banner",
      title: "Custom Cover Banner",
      weight: 6,
      question: "What is currently displayed in your 1584×396px cover banner?",
      options: [
        { score: 6, status: "complete", label: "Custom branded banner with my target role, tech stack, and portfolio domain/GitHub." },
        { score: 2, status: "needs_work", label: "Generic scenic wallpaper or stock photo with no professional text." },
        { score: 0, status: "missing", label: "Default blank LinkedIn turquoise/gray background." }
      ]
    },
    {
      id: "headline",
      title: "Recruiter SEO Headline",
      weight: 12,
      question: "How is your headline structured under your name?",
      options: [
        { score: 12, status: "complete", label: "Formula: [Target Job Title] | [Top 3-4 Skills] | [Value Proposition] | [Proof Point]." },
        { score: 5, status: "needs_work", label: "Only mentions 'Student at XYZ' or generic 'Aspiring Software Developer'." },
        { score: 0, status: "missing", label: "Blank or single vague word (e.g. 'Student', 'Seeker')." }
      ]
    },
    {
      id: "custom_url",
      title: "Custom URL & Contact Info",
      weight: 4,
      question: "Is your public profile URL and contact info fully configured?",
      options: [
        { score: 4, status: "complete", label: "Clean URL (/in/firstname-lastname) + professional email, GitHub, and portfolio linked." },
        { score: 2, status: "needs_work", label: "Default random numbers in URL or missing portfolio/GitHub links." },
        { score: 0, status: "missing", label: "Default URL with zero contact info or profile set to private." }
      ]
    },
    {
      id: "about",
      title: "About / Summary Pitch",
      weight: 12,
      question: "How comprehensive is your About section?",
      options: [
        { score: 12, status: "complete", label: "4-part structure: strong hook, technical skill bullets, project metric, and direct contact email." },
        { score: 5, status: "needs_work", label: "1-2 brief generic sentences or copy-pasted resume objective." },
        { score: 0, status: "missing", label: "Completely blank About section." }
      ]
    },
    {
      id: "featured",
      title: "Featured Section Media",
      weight: 8,
      question: "What assets have you pinned in your Featured section?",
      options: [
        { score: 8, status: "complete", label: "Pinned 1-page Resume PDF, live portfolio link, and standout project demo." },
        { score: 3, status: "needs_work", label: "Only pinned an old post or repost from months ago." },
        { score: 0, status: "missing", label: "Featured section is completely empty." }
      ]
    },
    {
      id: "experience",
      title: "Experience Descriptions (XYZ Formula)",
      weight: 12,
      question: "How are your internship / job / freelance entries formatted?",
      options: [
        { score: 12, status: "complete", label: "Action verbs + tools used + quantifiable metrics (XYZ formula) for each role." },
        { score: 5, status: "needs_work", label: "Bullet points list general tasks without tools or numbers." },
        { score: 0, status: "missing", label: "Only job titles with zero descriptions, or no experience listed." }
      ]
    },
    {
      id: "projects",
      title: "Projects with Live Demo URLs",
      weight: 10,
      question: "How are your projects presented?",
      options: [
        { score: 10, status: "complete", label: "2–4 standout projects with tech stack breakdown, live demo URL, and GitHub link." },
        { score: 4, status: "needs_work", label: "Projects listed as plain text with no live demos or broken links." },
        { score: 0, status: "missing", label: "Zero projects listed in the projects section." }
      ]
    },
    {
      id: "skills",
      title: "Skills & Top 3 Pinned Skills",
      weight: 8,
      question: "How is your Skills section curated?",
      options: [
        { score: 8, status: "complete", label: "15+ technical keywords matching my target role, with top 3 most relevant skills pinned." },
        { score: 3, status: "needs_work", label: "A mix of random soft skills ('Hard worker', 'MS Word') with unpinned top skills." },
        { score: 0, status: "missing", label: "Fewer than 5 skills listed." }
      ]
    },
    {
      id: "education",
      title: "Education & Coursework",
      weight: 6,
      question: "How is your education entry populated?",
      options: [
        { score: 6, status: "complete", label: "Full degree title, correct graduation year, 6+ relevant technical courses, and CGPA (if >= 7.5)." },
        { score: 3, status: "needs_work", label: "College name and degree only, with no coursework or graduation year." },
        { score: 0, status: "missing", label: "Missing or incomplete college information." }
      ]
    },
    {
      id: "certifications",
      title: "Verifiable Certifications",
      weight: 4,
      question: "Do you have recognized certifications listed?",
      options: [
        { score: 4, status: "complete", label: "1-3 recognized credentials with issuing organization, Credential ID, and verify link." },
        { score: 2, status: "needs_work", label: "Attendance certificates without IDs or links." },
        { score: 0, status: "missing", label: "No certifications listed." }
      ]
    },
    {
      id: "activity",
      title: "Recent Activity & Engagement",
      weight: 3,
      question: "How active have you been on LinkedIn in the last 30 days?",
      options: [
        { score: 3, status: "complete", label: "Posted 2+ learning updates or projects and commented on industry posts." },
        { score: 1, status: "needs_work", label: "Only liked/reposted a couple of posts occasionally." },
        { score: 0, status: "missing", label: "Zero activity for 6+ months." }
      ]
    },
    {
      id: "connections",
      title: "Targeted Industry Network",
      weight: 3,
      question: "What is your current connection status?",
      options: [
        { score: 3, status: "complete", label: "250+ targeted connections including college alumni, developers, and tech recruiters." },
        { score: 1, status: "needs_work", label: "Under 100 connections, mostly close batchmates." },
        { score: 0, status: "missing", label: "Under 30 connections." }
      ]
    },
    {
      id: "recommendations",
      title: "Social Proof Recommendations",
      weight: 2,
      question: "Do you have recommendations from managers, mentors, or peers?",
      options: [
        { score: 2, status: "complete", label: "1-2 written recommendations from an internship manager, professor, or project lead." },
        { score: 1, status: "needs_work", label: "Requested but currently waiting on feedback." },
        { score: 0, status: "missing", label: "Zero recommendations." }
      ]
    },
    {
      id: "job_preferences",
      title: "Job Preferences & Open to Work",
      weight: 2,
      question: "Are your job search preferences configured?",
      options: [
        { score: 2, status: "complete", label: "Titles, locations, and remote preferences set; 'Open to Work' enabled for Recruiters Only." },
        { score: 1, status: "needs_work", label: "Partially configured preferences." },
        { score: 0, status: "missing", label: "Job preferences unconfigured." }
      ]
    }
  ],

  // ─── 100-Point Optimization Checklist Items ──────────────────────────────────
  checklistItems: [
    // Visual Identity (20 pts)
    { id: "chk_photo_crop", title: "Profile Photo Face Fill", desc: "Face fills 60–70% of frame with bright, soft front lighting", points: 5, sectionId: "photo", category: "visual" },
    { id: "chk_photo_bg", title: "Clean Headshot Background", desc: "Neutral or softly blurred background with zero distracting clutter", points: 5, sectionId: "photo", category: "visual" },
    { id: "chk_banner_specs", title: "Custom 1584×396px Banner", desc: "Custom banner stating target role, 4-6 skills, and portfolio link", points: 5, sectionId: "banner", category: "visual" },
    { id: "chk_custom_url", title: "Claim Clean Vanity URL", desc: "Custom URL formatted as linkedin.com/in/firstname-lastname", points: 5, sectionId: "custom_url", category: "visual" },

    // Search & SEO (25 pts)
    { id: "chk_headline_formula", title: "Headline SEO Formula", desc: "[Target Role] | [Top Skills] | [Value Proposition] | [Proof Point]", points: 10, sectionId: "headline", category: "seo" },
    { id: "chk_skills_pinned", title: "Pin Top 3 Technical Skills", desc: "Top 3 pinned skills exactly match your target job requirements", points: 5, sectionId: "skills", category: "seo" },
    { id: "chk_skills_count", title: "Add 15+ Target Keywords", desc: "Populate 15-25 domain-specific tools and programming languages", points: 5, sectionId: "skills", category: "seo" },
    { id: "chk_job_prefs", title: "Configure Job Preferences", desc: "Set target titles, locations, and enable Open to Work for Recruiters", points: 5, sectionId: "job_preferences", category: "seo" },

    // Content & Story (25 pts)
    { id: "chk_about_hook", title: "About First 3 Lines Hook", desc: "Engaging 2-3 line summary before the 'See more' cutoff", points: 5, sectionId: "about", category: "content" },
    { id: "chk_about_stack", title: "About Technical Arsenal", desc: "Bulleted technical competencies block embedded in summary", points: 5, sectionId: "about", category: "content" },
    { id: "chk_about_cta", title: "About Direct Email CTA", desc: "Direct email address added at the end for frictionless recruiter outreach", points: 5, sectionId: "about", category: "content" },
    { id: "chk_featured_resume", title: "Pin 1-Page Resume PDF", desc: "Upload clean 1-page PDF preview to the Featured section", points: 5, sectionId: "featured", category: "content" },
    { id: "chk_featured_portfolio", title: "Pin Live Portfolio Link", desc: "Add clickable link to deployed portfolio or live flagship project", points: 5, sectionId: "featured", category: "content" },

    // Proof & Experience (20 pts)
    { id: "chk_exp_xyz", title: "Experience XYZ Metric Bullets", desc: "Action verbs + tools + measurable percentage/number metrics", points: 10, sectionId: "experience", category: "proof" },
    { id: "chk_proj_demos", title: "Projects with Live Demos", desc: "2-4 projects with live hosted URLs and GitHub repository links", points: 5, sectionId: "projects", category: "proof" },
    { id: "chk_edu_courses", title: "Education Relevant Coursework", desc: "Degree, graduation year, and 6+ core technical course subjects", points: 5, sectionId: "education", category: "proof" },

    // Network & Credibility (10 pts)
    { id: "chk_cert_verifiable", title: "Verifiable Certification", desc: "Recognized certification with Credential ID and verification link", points: 4, sectionId: "certifications", category: "network" },
    { id: "chk_network_reach", title: "Build 250+ Industry Network", desc: "Connect with college alumni, recruiters, and target role developers", points: 3, sectionId: "connections", category: "network" },
    { id: "chk_activity_post", title: "Publish Monthly Project Post", desc: "Share a technical project breakdown or learning milestone", points: 3, sectionId: "activity", category: "network" }
  ],

  // ─── Role-Based Customization Hub ────────────────────────────────────────────
  roles: [
    {
      id: "frontend",
      title: "Frontend Developer",
      badge: "Engineering",
      icon: "code",
      targetHeadline: "Frontend Developer | React.js • Next.js • TypeScript • Tailwind CSS | Building Accessible & High-Performance Web Apps",
      keywords: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "HTML5 / CSS3", "REST APIs", "GraphQL", "Web Performance", "Jest / Testing Library", "Responsive Design"],
      skillsList: [
        "React.js (Pinned)", "TypeScript (Pinned)", "Next.js (Pinned)",
        "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "HTML5", "CSS3 / SASS",
        "REST APIs", "Git & GitHub", "Vite", "Responsive Web Design", "Web Performance Optimization", "Jest"
      ],
      headlineTemplates: [
        "Frontend Developer | React.js • TypeScript • Next.js • Tailwind | Crafting Scalable, User-Centric Web Experiences",
        "Junior Frontend Engineer | React • JavaScript (ES6+) • Redux | Ex-Intern @ TechCorp | Open Source Contributor",
        "Computer Science Graduate | Frontend Specialist (React, TS, Tailwind) | Building Fast & Accessible Web Applications"
      ],
      aboutTemplate: `I am a Frontend Developer dedicated to building performant, accessible, and visually stunning web interfaces. I specialize in the modern JavaScript/TypeScript ecosystem with a heavy focus on React, Next.js, and Tailwind CSS.\n\nI believe great software is built at the intersection of clean architecture, intuitive UX design, and robust performance engineering.\n\n💻 Technical Stack:\n• Core: TypeScript, JavaScript (ES6+), HTML5, Semantic CSS\n• Frameworks & State: React.js, Next.js (App Router), Redux Toolkit, Zustand, TanStack Query\n• Styling: Tailwind CSS, CSS Modules, Styled Components, Framer Motion\n• Tools & Practices: Git/GitHub, Vite, Webpack, Jest, CI/CD, Lighthouse (95+ score optimization)\n\n🚀 Selected Highlights:\n• Built a real-time collaborative dashboard used by 2,000+ active users with sub-100ms render latency.\n• Maintained 98% Lighthouse accessibility standards across 15+ production pages.\n\n📫 Interested in collaborating or hiring? Reach out at your.email@domain.com or explore my work at yourportfolio.dev.`,
      projectIdeas: [
        "E-Commerce Storefront with Next.js App Router, Stripe Checkout, and Server-Side Rendering.",
        "Real-Time Collaborative Code / Markdown Editor using React, WebSockets, and Monaco Editor.",
        "Interactive Analytics Dashboard with Tailwind CSS, Chart.js, and dark/light theme persistence."
      ]
    },
    {
      id: "backend",
      title: "Backend Developer",
      badge: "Engineering",
      icon: "server",
      targetHeadline: "Backend Developer | Node.js • Python • PostgreSQL • Docker • AWS | Designing Scalable APIs & Microservices",
      keywords: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS (EC2, S3, RDS)", "RESTful APIs", "Microservices", "System Design"],
      skillsList: [
        "Node.js (Pinned)", "Python (Pinned)", "PostgreSQL (Pinned)",
        "Express.js", "FastAPI / Django", "MongoDB", "Redis Caching", "Docker",
        "AWS Cloud", "RESTful API Architecture", "Microservices", "Git", "JWT Authentication", "Unit Testing"
      ],
      headlineTemplates: [
        "Backend Developer | Node.js • Python • PostgreSQL • Docker | Architecting High-Throughput REST APIs & Cloud Systems",
        "Software Engineer (Backend Focus) | Express.js • Redis • AWS • Microservices | Passionate about Scalable Systems",
        "Backend Engineer | Python (FastAPI/Django) • SQL • Database Optimization | Building Secure & Reliable Backends"
      ],
      aboutTemplate: `I am a Backend Engineer focused on designing resilient, scalable, and high-performance server architectures, RESTful APIs, and database systems.\n\nI enjoy tackling complex backend challenges: optimizing SQL queries for millions of rows, implementing distributed caching with Redis, and containerizing microservices with Docker.\n\n🛠️ Technical Expertise:\n• Languages: Python, JavaScript/TypeScript, Go (Basics), SQL\n• Frameworks: Node.js (Express, NestJS), FastAPI, Django\n• Databases: PostgreSQL, MySQL, MongoDB, Redis (Caching & Rate Limiting)\n• DevOps & Cloud: Docker, AWS (EC2, S3, RDS, Lambda), GitHub Actions, Linux\n• Protocols & Tools: REST APIs, WebSockets, JWT, OAuth2, Postman, Jest, PyTest\n\n⚡ Impact Highlight:\n• Architected a notification service handling 50,000+ requests/minute with a 99.9% uptime SLA.\n\n📫 Let's connect! Email me at your.backend.email@domain.com or inspect my code at github.com/username.`,
      projectIdeas: [
        "Distributed Task Queue & Job Scheduler with Redis and Node.js worker pools.",
        "High-Throughput RESTful API with PostgreSQL connection pooling and JWT auth.",
        "Containerized Microservices Architecture with Docker Compose and API Gateway."
      ]
    },
    {
      id: "fullstack",
      title: "Full Stack Developer",
      badge: "Engineering",
      icon: "layers",
      targetHeadline: "Full Stack Developer | React • Node.js • TypeScript • PostgreSQL • AWS | Building End-to-End Scalable Products",
      keywords: ["React.js", "Node.js", "TypeScript", "Next.js", "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "REST & GraphQL", "AWS", "CI/CD", "Full Stack Engineering"],
      skillsList: [
        "Full Stack Development (Pinned)", "React.js (Pinned)", "Node.js (Pinned)",
        "TypeScript", "Next.js", "PostgreSQL", "MongoDB", "Express.js",
        "Tailwind CSS", "Docker", "Git/GitHub", "REST APIs", "AWS Cloud", "System Architecture"
      ],
      headlineTemplates: [
        "Full Stack Developer | React.js • Node.js • TypeScript • PostgreSQL | Transforming Ideas into Deployed Web Products",
        "Full Stack Engineer | Next.js • Tailwind • Express • MongoDB • AWS | Building High-Performance Web Applications",
        "Software Engineer | MERN & PERN Stack Specialist | Product-Minded Developer | Ex-Intern @ Startup"
      ],
      aboutTemplate: `I am a Full Stack Developer who thrives on taking products from zero to production. With deep experience across both client-side interfaces and server-side backends, I bridge the gap between design, business logic, and database architecture.\n\nI build fast, reliable, and scalable web solutions using modern full-stack technologies (React, Next.js, Node.js, TypeScript, PostgreSQL).\n\n🚀 Full-Stack Arsenal:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Responsive UI/UX\n• Backend: Node.js, Express, RESTful APIs, GraphQL, Authentication (JWT/OAuth)\n• Databases: PostgreSQL, Prisma ORM, MongoDB, Redis\n• Cloud & Deployment: AWS, Docker, Vercel, Netlify, Render, GitHub Actions (CI/CD)\n\n📦 Featured Project:\n• Shipped an end-to-end SaaS application with real-time billing, team workspaces, and analytics dashboard serving 1,000+ users.\n\n📫 Feel free to reach out directly at alex.fullstack@email.com or explore my GitHub at github.com/username.`,
      projectIdeas: [
        "SaaS Project Management Tool with drag-and-drop Kanban, team permissions, and real-time updates.",
        "Multi-vendor Marketplace with full payment workflow, seller dashboards, and instant search.",
        "AI-Powered Content Generation Dashboard with user auth, tier limits, and PDF export."
      ]
    },
    {
      id: "uiux",
      title: "UI/UX Designer",
      badge: "Design",
      icon: "figma",
      targetHeadline: "UI/UX Designer | Product Designer | Figma • Wireframing • Design Systems • User Research | Crafting Intuitive Digital Products",
      keywords: ["UI/UX Design", "Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Information Architecture", "Design Thinking", "Interaction Design"],
      skillsList: [
        "UI/UX Design (Pinned)", "Figma (Pinned)", "Design Systems (Pinned)",
        "User Research", "Wireframing", "Interactive Prototyping", "Usability Testing",
        "Information Architecture", "Mobile App Design", "Web Design", "Design Thinking", "HTML/CSS Basics"
      ],
      headlineTemplates: [
        "UI/UX Designer | Figma • Design Systems • User Research • Prototyping | Designing Human-Centered Digital Products",
        "Product Designer | Transforming Complex Problems into Simple, Beautiful UI Experiences | Figma Specialist",
        "Junior UI/UX Designer | User-Centric Web & Mobile Interfaces | Design Systems & Wireframing Enthusiast"
      ],
      aboutTemplate: `I am a UI/UX & Product Designer driven by a simple goal: making technology effortless and enjoyable for everyday users. I combine structured user research with pixel-perfect visual design to create impactful digital products.\n\nFrom user interviews and journey mapping to design systems and interactive prototypes in Figma, I focus on solving real customer pain points while aligning with business objectives.\n\n🎨 Core Design Capabilities:\n• UX Research: User Interviews, Personas, Journey Maps, Usability Testing, Heuristic Evaluation\n• UI & Visual: Figma, Design Systems, Typography, Color Theory, Responsive Layouts, Auto Layout Master\n• Prototyping: Interactive Micro-Animations, Component Variants, Clickable Mobile/Web Flows\n• Collaboration: Agile Handoffs, Developer Documentation, Design QA\n\n🏆 Case Study Spotlight:\n• Redesigned the onboarding flow for a mobile fintech app, increasing signup completion rate by 24%.\n\n🔗 View My Interactive Portfolio: designerportfolio.com | 📩 Reach me at design.name@email.com.`,
      projectIdeas: [
        "Comprehensive Fintech App Redesign with full UX case study, user personas, and Figma prototype.",
        "Cross-Platform Design System in Figma with 50+ tokenized, accessible UI components.",
        "Healthcare / Telemedicine Mobile App with frictionless appointment scheduling and testing logs."
      ]
    },
    {
      id: "data",
      title: "Data Analyst",
      badge: "Data & AI",
      icon: "bar-chart",
      targetHeadline: "Data Analyst | Python • SQL • Power BI • Tableau • Excel | Turning Raw Data into Actionable Business Insights",
      keywords: ["Data Analysis", "SQL (PostgreSQL / MySQL)", "Python (Pandas, NumPy)", "Power BI", "Tableau", "Advanced Excel", "Data Visualization", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "Business Intelligence"],
      skillsList: [
        "Data Analysis (Pinned)", "SQL (Pinned)", "Power BI / Tableau (Pinned)",
        "Python (Pandas, NumPy)", "Advanced Microsoft Excel", "Data Visualization",
        "Exploratory Data Analysis (EDA)", "Statistical Modeling", "Business Intelligence", "ETL Pipelines", "Git"
      ],
      headlineTemplates: [
        "Data Analyst | SQL • Python • Power BI • Tableau • Excel | Uncovering Growth Insights Through Data & Visualizations",
        "Junior Data Analyst | Statistical Modeling • EDA • Dashboard Engineering | Ex-Analytics Intern",
        "Data Analytics Enthusiast | Python (Pandas) • PostgreSQL • Business Intelligence Dashboards | Problem Solver"
      ],
      aboutTemplate: `I am a Data Analyst passionate about turning messy datasets into clear, actionable business strategies. I specialize in writing complex SQL queries, building automated analytics pipelines with Python, and designing high-impact interactive dashboards in Power BI and Tableau.\n\nI believe the best data insights are those that empower non-technical stakeholders to make confident, revenue-driving decisions.\n\n📊 Core Analytics Skills:\n• Languages & Queries: SQL (PostgreSQL, MySQL, BigQuery), Python (Pandas, NumPy, Matplotlib, Seaborn)\n• Business Intelligence & BI: Power BI (DAX, Data Modeling), Tableau, Google Looker Studio\n• Spreadsheets: Advanced Excel (VLOOKUP, XLOOKUP, Pivot Tables, Power Query, VBA basics)\n• Statistical Methods: Hypothesis Testing, A/B Testing, Regression Analysis, Cohort Analysis\n\n💡 Business Impact Highlight:\n• Built an executive sales dashboard tracking $2M+ in pipeline data, identifying churn patterns and saving an estimated $45k annually.\n\n📫 Let's talk data! Email me at analyst.data@email.com or explore my analytics case studies at github.com/username.`,
      projectIdeas: [
        "E-Commerce Customer Segmentation & RFM Analysis using Python, Pandas, and KMeans clustering.",
        "Interactive Sales & Revenue Executive Dashboard in Power BI with dynamic filtering and DAX measures.",
        "Hospital Patient Care & Operational Efficiency SQL Analysis analyzing 100k+ healthcare records."
      ]
    },
    {
      id: "marketing",
      title: "Digital Marketer",
      badge: "Growth",
      icon: "trending-up",
      targetHeadline: "Digital Marketer | SEO • Performance Marketing • Content Strategy • Google Analytics | Driving ROI & User Acquisition",
      keywords: ["Digital Marketing", "SEO / SEM", "Google Analytics (GA4)", "Performance Marketing", "Meta Ads", "Content Strategy", "Email Marketing", "Copywriting", "Conversion Rate Optimization (CRO)", "A/B Testing"],
      skillsList: [
        "Digital Marketing (Pinned)", "Search Engine Optimization - SEO (Pinned)", "Performance Marketing (Pinned)",
        "Google Analytics 4 (GA4)", "Google Ads", "Meta Ads Manager", "Content Marketing",
        "Email Marketing (Mailchimp/HubSpot)", "Conversion Rate Optimization (CRO)", "Copywriting", "Social Media Strategy"
      ],
      headlineTemplates: [
        "Digital Marketer | SEO • Performance Marketing • Google Analytics 4 | Scaling Organic Traffic & Paid ROI",
        "Growth Marketer & Content Strategist | Meta Ads • Email Marketing • CRO | Helping Brands Scale Customer Acquisition",
        "Digital Marketing Specialist | Search Engine Optimization (SEO) • Data-Driven Campaigns • Social Strategy"
      ],
      aboutTemplate: `I am a Growth & Digital Marketer focused on building predictable, scalable customer acquisition engines. I bridge the gap between creative storytelling and data-driven performance marketing.\n\nWith hands-on experience in organic SEO, Google Ads, Meta Ads Manager, and GA4 analytics, I help businesses increase organic search visibility, lower customer acquisition costs (CAC), and maximize campaign ROI.\n\n📈 Marketing Toolkit:\n• Organic Acquisition: Technical SEO, On-Page SEO, Keyword Research (Ahrefs, SEMrush), Content Marketing\n• Paid Channels: Google Search/Display Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads\n• Analytics & CRO: Google Analytics 4, Google Tag Manager, Hotjar, Landing Page A/B Testing\n• Automation & Retention: HubSpot, Mailchimp, Customer Lifecycle Journeys\n\n🎯 Proven Results:\n• Grew organic search traffic for an educational portal by 180% in 6 months through topic clusters and technical SEO fixes.\n\n📬 Open for freelance & full-time growth roles. Reach me at marketer.growth@email.com.`,
      projectIdeas: [
        "Comprehensive SEO Audit & Strategy Case Study for a B2B SaaS startup with keyword roadmap.",
        "End-to-End Performance Ad Campaign Blueprint with audience segmentation, ad creatives, and ROAS targets.",
        "Email Nurture Sequence & CRO Teardown boosting funnel conversion by 22%."
      ]
    },
    {
      id: "fresher",
      title: "Student / Fresher",
      badge: "Early Career",
      icon: "graduation-cap",
      targetHeadline: "Computer Science Student | Aspiring Software Developer | Java • Python • Data Structures • Web Dev | Class of 2025",
      keywords: ["Data Structures & Algorithms", "Java", "Python", "C++", "HTML/CSS/JavaScript", "SQL", "Git/GitHub", "Problem Solving", "Object-Oriented Programming", "Full Stack Basics"],
      skillsList: [
        "Data Structures & Algorithms (Pinned)", "Java or Python (Pinned)", "Web Development Basics (Pinned)",
        "C++ / C", "Object-Oriented Programming (OOP)", "Database Management (SQL)",
        "Git & GitHub", "Problem Solving", "HTML5 & CSS3", "JavaScript", "Agile Fundamentals"
      ],
      headlineTemplates: [
        "Computer Science Student @ XYZ University | Java • Python • Web Development | 300+ LeetCode Solved | Class of 2025",
        "Aspiring Software Engineer | B.Tech CSE '25 | React • Node.js • SQL | Building Projects & Seeking SDE Internships",
        "Recent CS Graduate | Full Stack Web Developer | JavaScript • Python • Git | Passionate About Clean Code"
      ],
      aboutTemplate: `I am a final-year Computer Science student at [Your University Name] (Class of 2025) with a strong foundation in Data Structures, Algorithms, and Full-Stack Web Development.\n\nI love turning algorithmic concepts and design ideas into functional, real-world software applications. Over the past 3 years, I have solved 350+ algorithmic problems on LeetCode/CodeChef and built 4+ complete web applications from scratch.\n\n💻 Technical Skills:\n• Programming Languages: Java, Python, C++, JavaScript (ES6+)\n• Web Technologies: React.js, HTML5, CSS3, Tailwind CSS, Node.js basics\n• Core CS Foundations: Data Structures & Algorithms, OOP, Database Systems (SQL), Operating Systems, Computer Networks\n• Developer Tools: Git, GitHub, VS Code, Postman, Linux\n\n🏆 Achievements & Projects:\n• Solved 350+ problems on LeetCode across Arrays, Linked Lists, Trees, and Dynamic Programming.\n• Built an AI-assisted Study Planner web app for university students with 300+ campus signups.\n• Active Technical Member of Google Developer Student Clubs (GDSC).\n\n🎯 What I'm looking for:\nI am actively seeking Software Development Engineer (SDE) Intern or Entry-Level Full-Time roles starting in 2025. Feel free to connect or email me at your.name.student@email.com!`,
      projectIdeas: [
        "Full-Stack Student Collaboration & Note Sharing Portal with user auth, search, and PDF uploads.",
        "Interactive Pathfinding & Sorting Visualizer Web App built in JavaScript and HTML5 Canvas.",
        "Personal Portfolio Website showcasing LeetCode stats, live GitHub repositories, and resume."
      ]
    },
    {
      id: "product",
      title: "Business / Product Professional",
      badge: "Strategy",
      icon: "briefcase",
      targetHeadline: "Associate Product Manager | Product Strategy • Agile/Scrum • User Research • Wireframing | Driving Product Growth",
      keywords: ["Product Management", "Agile / Scrum", "Product Strategy", "User Stories", "Roadmapping", "Jira", "Market Research", "Wireframing", "Data-Driven Decision Making", "A/B Testing"],
      skillsList: [
        "Product Management (Pinned)", "Agile & Scrum (Pinned)", "Product Strategy (Pinned)",
        "User Research", "Wireframing & Prototyping", "Jira / Confluence",
        "Data Analytics & Metrics", "A/B Testing", "Cross-Functional Leadership", "Go-To-Market Strategy"
      ],
      headlineTemplates: [
        "Associate Product Manager | Product Strategy • Agile • User Research • Jira | Building Products Users Love",
        "Product Operations & Strategy Specialist | Data-Driven Decision Making • Roadmap Execution • Cross-Functional Alignment",
        "Aspiring Product Manager | CS Background + Business Acumen | Transforming User Insights into Shippable Features"
      ],
      aboutTemplate: `I am an Associate Product Manager who loves sitting at the intersection of technology, business strategy, and user experience. I help cross-functional engineering and design teams turn ambiguous customer problems into clear, shippable product features.\n\nWith a background spanning both technical fundamentals and business analytics, I focus on defining clear PRDs (Product Requirements Documents), prioritizing roadmaps based on user data, and measuring release success with clear OKRs.\n\n💼 Product Core Competencies:\n• Product Lifecycle: Discovery, User Interviews, PRD Writing, Feature Prioritization (RICE/MoSCoW), User Stories\n• Delivery & Agile: Scrum Ceremonies, Sprint Planning, Backlog Grooming, Jira, Confluence, Trello\n• Design & Wireframing: Figma, Whimsical, User Journey Mapping, Information Architecture\n• Metrics & Analytics: Google Analytics, Mixpanel, SQL basics, A/B Testing, Retention & Funnel Analysis\n\n🎯 Key Accomplishment:\n• Led the feature discovery and rollout for a self-serve onboarding wizard, decreasing customer onboarding time by 35%.\n\n📫 Let's connect! Reach me at product.lead@email.com.`,
      projectIdeas: [
        "Comprehensive Product Teardown & Redesign PRD for Spotify / Uber with metrics framework.",
        "Market Research & Competitive Landscape Analysis for an emerging AI SaaS vertical.",
        "End-to-End Feature Roadmap & Interactive Figma Prototype for a B2B productivity app."
      ]
    }
  ],

  // ─── Recruiter Profile Mockup Data (Simulated Comparison) ────────────────────
  recruiterViewData: {
    weak: {
      name: "Alex Morgan",
      headline: "Student at State Tech | Looking for Opportunities | Passionate Learner",
      location: "San Francisco Bay Area",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      banner: "bg-slate-200",
      bannerText: "",
      about: "I am a hardworking computer science student looking for a challenging role in an organization to enhance my knowledge and skills.",
      experienceTitle: "Student Intern",
      experienceCompany: "Local Tech",
      experienceBullets: ["Worked on web development tasks", "Helped with frontend UI"],
      skills: ["Microsoft Word", "HTML", "Communication", "Team Player"],
      projectsCount: "0 Projects Listed",
      featuredCount: "No items featured",
      score: 38,
      verdict: "Needs Substantial Optimization",
      verdictColor: "text-rose-600 bg-rose-50 border-rose-200",
      recruiterGazeNotes: [
        { label: "1. Headshot & Headline", note: "Vague headline 'Looking for Opportunities' lacks target role and technical search keywords." },
        { label: "2. About Summary", note: "Single generic sentence sounds passive and lacks technical stack or achievements." },
        { label: "3. Experience & Proof", note: "No metrics or specific technologies mentioned. Zero proof of software development ability." }
      ]
    },
    optimized: {
      name: "Alex Morgan",
      headline: "Frontend Developer | React.js • Next.js • TypeScript • Tailwind CSS | Building Accessible Web Apps | Ex-Intern @ CloudScale",
      location: "San Francisco Bay Area • Open to Remote & Relocation",
      avatar: "images/headshot_good.jpg",
      banner: "bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900",
      bannerText: "Frontend Developer • React | Next.js | TypeScript • alexmorgan.dev",
      about: "Frontend Developer with 2+ years of experience building high-performance, accessible web applications. Engineered 8+ full-stack apps with sub-100ms render speeds. Specialized in React, Next.js, TypeScript, and modern design systems. Let's connect: alex.morgan.dev@email.com.",
      experienceTitle: "Frontend Engineering Intern",
      experienceCompany: "CloudScale Technologies (June 2024 – Present)",
      experienceBullets: [
        "Engineered 14+ reusable UI components in React & TypeScript, boosting mobile page speed by 34%.",
        "Integrated REST APIs and payment webhooks, handling 15,000+ daily requests with 99.9% reliability.",
        "Refactored state management using TanStack Query, eliminating redundant re-renders by 45%."
      ],
      skills: ["React.js (Top 5%)", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Jest", "Git"],
      projectsCount: "3 Featured Production Projects (Live Demos Linked)",
      featuredCount: "4 Items (Resume PDF, Live Portfolio, GitHub, Hackathon Award)",
      score: 98,
      verdict: "Recruiter-Ready (Top 5% Tier)",
      verdictColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      recruiterGazeNotes: [
        { label: "1. Search Match (SEO)", note: "Instant keyword match for 'Frontend Developer', 'React', 'TypeScript', 'Next.js'." },
        { label: "2. Proof of Impact", note: "Clear quantifiable numbers (34% faster, 15k requests, 45% fewer re-renders)." },
        { label: "3. Frictionless Outreach", note: "Direct contact email, 1-click resume PDF, and live clickable portfolio demo." }
      ]
    }
  }
};
