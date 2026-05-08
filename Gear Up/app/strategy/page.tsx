"use client"

import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowLeft } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function StrategyPage() {
  const router = useRouter()
  const [activePhase, setActivePhase] = useState("discovery")
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-12 hover:text-accent/70 transition-colors"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Section Header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Strategy</span>
        <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">AI STRATEGY & CONSULTING</h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground max-w-2xl leading-relaxed">
          See exactly how I build your AI strategy
        </p>
      </div>

      {/* Case Study Intro */}
      <div className="mb-16 border border-border/40 p-8 md:p-12">
        <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight mb-4">Company Example:</h2>
        <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6 text-muted-foreground">Apex Talent Global</h3>
        <p className="font-mono text-xs text-muted-foreground mb-6">Influencer & Content Creator Management Agency</p>
        <p className="text-foreground leading-relaxed">
          Apex manages 5000+ content creators and influencers across TikTok, Instagram, YouTube, and Twitter. They spend 80+
          hours per week on contract management, content performance tracking, and creator outreach. Identifying which creators
          fit brand partnerships is nearly impossible to do manually. They needed AI to scale without adding 50+ staff members.
        </p>
      </div>

      {/* Phase Navigation */}
      <div className="flex gap-3 md:gap-4 mb-16 flex-wrap">
        {[
          { id: "discovery", label: "01. Data Gathering" },
          { id: "analysis", label: "02. Analysis" },
          { id: "recommendations", label: "03. Recommendations" },
        ].map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`font-mono text-xs uppercase tracking-widest py-3 px-4 border transition-all ${
              activePhase === phase.id
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border/40 hover:border-accent/60"
            }`}
          >
            {phase.label}
          </button>
        ))}
      </div>

      {/* Discovery Phase */}
      {activePhase === "discovery" && (
        <div className="space-y-12">
          <div>
            <h3 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight mb-2">Data Gathering Phase</h3>
            <p className="font-mono text-xs text-muted-foreground">Data gathering phase revealed:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Current Challenge",
                desc: "80+ hours/week on contract management, tracking performance across 5000+ creators, creator outreach. Manual processes breaking down at scale.",
              },
              {
                title: "Business Goal",
                desc: "Match 5000+ creators to brand deals in real time. Auto-track performance metrics for entire roster. Reduce deal close time from 3 weeks to same day.",
              },
              {
                title: "Technical Stack",
                desc: "Airtable for creator database, Google Sheets for tracking, Stripe for payments. Some API knowledge. Manual social media monitoring.",
              },
              {
                title: "Team Capability",
                desc: "8 account managers, 2 business development, 1 part-time developer. Creative team but limited technical experience.",
              },
              {
                title: "Budget",
                desc: "$700/month for tools. 8 week implementation timeline to handle holiday campaign season.",
              },
              {
                title: "Success Metrics",
                desc: "Deal closure speed, creator match accuracy, performance tracking accuracy, time saved per deal.",
              },
            ].map((card, i) => (
              <div key={i} className="border-l-4 border-accent p-6 bg-white/5">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">{card.title}</h4>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analysis Phase */}
      {activePhase === "analysis" && (
        <div className="space-y-12">
          <div>
            <h3 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight mb-2">Analysis Phase</h3>
            <p className="font-mono text-xs text-muted-foreground">I evaluated priorities and mapped the opportunity:</p>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-8">Strategic Priorities</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Priority 1: Creator Intelligence",
                  roi: "Highest",
                  borderColor: "border-accent/60",
                  bgColor: "bg-white/5",
                  desc: "Semantic matching + audience analysis. Frees 35+ hrs/week immediately. Revenue impact: 5x deal volume. Timeline to ROI: 1 week.",
                },
                {
                  title: "Priority 2: Analytics Layer",
                  roi: "High",
                  borderColor: "border-accent/40",
                  bgColor: "bg-white/5",
                  desc: "Real-time tracking + sentiment analysis. Enables data-driven decisions. Frees 20+ hrs/week. Timeline to ROI: 2 weeks.",
                },
                {
                  title: "Priority 3: Compliance",
                  roi: "Risk Reduction",
                  borderColor: "border-accent/40",
                  bgColor: "bg-white/5",
                  desc: "NLP contract analysis + anomaly detection. Zero compliance risk. Legal team bandwidth freed. Timeline: 3 weeks.",
                },
              ].map((item, i) => (
                <div key={i} className={`border-l-4 ${item.borderColor} ${item.bgColor} p-6`}>
                  <h5 className="font-[var(--font-bebas)] text-xl tracking-tight mb-2">{item.title}</h5>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">ROI: {item.roi}</p>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-8">Pain Points</h4>
            <div className="space-y-4">
              {[
                {
                  title: "Manual Workload",
                  desc: "80+ hours per week spent on repetitive tasks like contract review, performance tracking, and creator outreach across 5000+ creators.",
                },
                {
                  title: "Scaling Impossible",
                  desc: "Cannot grow roster or take on new clients without hiring 50+ additional staff. Cost prohibitive and complex to manage.",
                },
                {
                  title: "Slow Deal Closure",
                  desc: "Brand partnerships take 3 weeks to close. Matching creators to brands is manual and error prone. Missed opportunities.",
                },
                {
                  title: "No Real Time Data",
                  desc: "Performance metrics are not tracked in real time. Insights are outdated and incomplete. Cannot show clients accurate ROI.",
                },
                {
                  title: "Risk & Compliance",
                  desc: "Contracts reviewed manually. Risk of missing unfavorable terms, compliance issues, payment disputes.",
                },
                {
                  title: "Creator Database Chaos",
                  desc: "Creator data scattered across multiple spreadsheets and platforms. No single source of truth. Data quality issues.",
                },
              ].map((point, i) => (
                <div key={i} className="border-l-4 border-accent/40 p-4 bg-white/5">
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{point.title}</h5>
                  <p className="font-mono text-xs text-muted-foreground">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recommendations Phase */}
      {activePhase === "recommendations" && (
        <div className="space-y-12">
          <div>
            <h3 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight mb-2">Strategic Recommendations</h3>
            <p className="font-mono text-xs text-muted-foreground">Complete strategic blueprint for AI-powered transformation:</p>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-8">01. Pain to Solution Architecture</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/40">
                    <th className="text-left p-4 font-mono text-[10px] uppercase tracking-widest text-accent">Pain Point</th>
                    <th className="text-left p-4 font-mono text-[10px] uppercase tracking-widest text-accent">AI Solution</th>
                    <th className="text-left p-4 font-mono text-[10px] uppercase tracking-widest text-accent">Technology Stack</th>
                    <th className="text-left p-4 font-mono text-[10px] uppercase tracking-widest text-accent">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      pain: "Manual Creator Matching",
                      solution: "Semantic similarity matching + audience cohort analysis",
                      tech: "Vector embeddings, LLM ranking",
                      impact: "90% time reduction",
                    },
                    {
                      pain: "No Real-Time Insights",
                      solution: "Sentiment analysis + engagement prediction models",
                      tech: "Real-time data pipelines, ML models",
                      impact: "50+ hrs/week freed",
                    },
                    {
                      pain: "Contract Risk Exposure",
                      solution: "NLP contract analysis + anomaly detection",
                      tech: "Document AI, rule-based engines",
                      impact: "100% coverage",
                    },
                    {
                      pain: "Slow Deal Closure",
                      solution: "Automated workflow orchestration + predictive routing",
                      tech: "Workflow automation, CRM integration",
                      impact: "3 weeks to same day",
                    },
                    {
                      pain: "Data Fragmentation",
                      solution: "Unified data lake with vector indexing",
                      tech: "Data consolidation, knowledge graph",
                      impact: "Single source of truth",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/40">
                      <td className="p-4 font-mono text-xs text-foreground">{row.pain}</td>
                      <td className="p-4 font-mono text-xs text-muted-foreground">{row.solution}</td>
                      <td className="p-4 font-mono text-xs text-muted-foreground">{row.tech}</td>
                      <td className="p-4 font-mono text-xs text-accent">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-8">02. Operational Workflow Transformation</h4>
            <div className="space-y-6">
              <div className="border border-border/40 p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">Current State (Manual)</p>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  Brand Inquiry → Manual Search (8 hrs) → Spreadsheet Filtering (6 hrs) → Email Outreach (4 hrs) → Wait for
                  Response (3-5 days) → Contract Review (4 hrs) → Deal Closure (14-21 days)
                </p>
              </div>
              <div className="border border-accent/40 p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">AI-Powered State</p>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  Brand Inquiry → AI Matching (2 mins) → Auto-Ranked Results (instant) → Automated Proposal (5 mins) → Smart
                  Outreach (instant) → Auto Contract Analysis (10 mins) → Deal Closure (same day)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-8">03. Strategic Priority Sequencing</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Priority 1: Creator Intelligence",
                  roi: "Highest",
                  desc: "Semantic matching + audience analysis. Frees 35+ hrs/week immediately. Revenue impact: 5x deal volume. Timeline to ROI: 1 week.",
                },
                {
                  title: "Priority 2: Analytics Layer",
                  roi: "High",
                  desc: "Real-time tracking + sentiment analysis. Enables data-driven decisions. Frees 20+ hrs/week. Timeline to ROI: 2 weeks.",
                },
                {
                  title: "Priority 3: Compliance",
                  roi: "Risk Reduction",
                  desc: "NLP contract analysis + anomaly detection. Zero compliance risk. Legal team bandwidth freed. Timeline: 3 weeks.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-accent/60 p-6 bg-white/5">
                  <h5 className="font-[var(--font-bebas)] text-lg tracking-tight mb-2">{item.title}</h5>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">ROI: {item.roi}</p>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-8">04. Quantified Business Impact</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Time Savings",
                  desc: "80+ hours/week freed from manual work. Staff can focus on strategy and relationship building.",
                },
                {
                  title: "Revenue Growth",
                  desc: "5x deal completion rate. Deal closure 14-21 days to same day. 40% higher brand satisfaction scores.",
                },
                {
                  title: "Risk Mitigation",
                  desc: "100% contract coverage. Zero compliance breaches. Predictive issue detection prevents disputes.",
                },
                {
                  title: "Operational Scale",
                  desc: "Scale 5000+ creators without hiring. Handle 3x current deal volume with existing team.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h5 className="font-[var(--font-bebas)] text-lg tracking-tight mb-3">{item.title}</h5>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-8">05. Data Flow & Integration Map</h4>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">Core Data Pipeline</p>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed border-l-4 border-accent/40 pl-6">
                  Social Platforms (TikTok, IG, YT, Twitter) → Data Collection Layer → Unified Creator Data Lake → AI Processing
                  (Matching, Analytics, Contract Review) → Internal Systems (CRM, Deal Tracking, Reporting) → Brand Clients & Creator Dashboard
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">Key Integrations Required</p>
                <ul className="font-mono text-xs text-muted-foreground space-y-2">
                  <li>• Social media APIs (audience, engagement, growth)</li>
                  <li>• CRM system (Airtable/HubSpot)</li>
                  <li>• Email & communication tools</li>
                  <li>• Payment system (Stripe)</li>
                  <li>• Contract storage & retrieval</li>
                  <li>• Real-time dashboard & reporting</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-8">06. Success Metrics & KPIs</h4>
            <div className="space-y-6">
              {[
                {
                  category: "Deal Velocity",
                  metrics: "Days to close (target: 1 day). Deals per month (target: 5x increase). Brand satisfaction (target: 9/10).",
                },
                {
                  category: "Operational Efficiency",
                  metrics: "Hours freed per week (target: 80+). Cost per deal (target: 70% reduction). Team utilization (target: 95%).",
                },
                {
                  category: "Risk & Compliance",
                  metrics: "Contract coverage (target: 100%). Compliance breaches (target: 0). Contract review time (target: 10 mins).",
                },
                {
                  category: "Creator Platform",
                  metrics: "Match accuracy (target: 95%). Creator acquisition (target: 50% faster). Creator retention (target: +30%).",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-accent/40 p-6 bg-white/5">
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">{item.category}</h5>
                  <p className="font-mono text-xs text-muted-foreground">{item.metrics}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-20 pt-12 border-t border-border/40 text-center">
        <p className="font-mono text-xs text-muted-foreground mb-8 uppercase tracking-widest">Ready to build your AI strategy?</p>
        <button className="border border-accent bg-transparent font-mono text-xs uppercase tracking-widest text-accent px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-all duration-300">
          Book a Strategy Session
        </button>
      </div>
    </section>
  )
}
