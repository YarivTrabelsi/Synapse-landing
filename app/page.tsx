'use client'

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Zap,
  Code,
  GitBranch,
  Cloud,
  ArrowRight,
  Menu,
  Twitter,
  Linkedin,
  Github,
  Mail,
  AlertTriangle,
  Cpu,
  Network,
  Database,
  Settings,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SynapseLanding() {
  return (
    <div className="min-h-screen bg-white mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-emerald-600">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent">
              Synapse
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              How It Works
            </Link>
            <Link href="#customers" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Customers
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-gradient-to-r from-slate-800 to-emerald-600 hover:from-slate-900 hover:to-emerald-700"
              onClick={() => window.open('mailto:hello@synapse.ai?subject=Start Free Trial&body=I\'m interested in starting a free trial of Synapse.', '_blank')}
            >
              Start Free Trial
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2 bg-emerald-100 text-emerald-800 border-emerald-200">
              🧠 AI-Native Infrastructure Platform
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl">
              Your AI Infrastructure
              <span className="bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Engineer
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Synapse builds, heals, and explains full cloud systems autonomously. Go from idea to production-grade
              infrastructure in minutes, not months—without needing DevOps expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 bg-gradient-to-r from-slate-800 to-emerald-600 hover:from-slate-900 hover:to-emerald-700"
                onClick={() => window.open('mailto:hello@synapse.ai?subject=Get Started with Synapse&body=I\'m interested in starting to build with Synapse. Please provide access to the platform.', '_blank')}
              >
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 border-emerald-200 text-emerald-800 hover:bg-emerald-50 bg-transparent"
                onClick={() => window.open('https://calendly.com/synapse-demo', '_blank')}
              >
                Watch Demo
              </Button>
            </div>

            <div className="pt-8 w-full max-w-5xl mx-auto">
              <div className="relative">
                <Image
                  src="/hero.png"
                  alt="Synapse AI Infrastructure Platform Dashboard"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-2xl border border-purple-200 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-red-200 text-red-700">
              The Problem
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Infrastructure is broken</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern cloud infrastructure is too complex, costly, and fragile for most development teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-red-100 bg-red-50/50">
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-red-700">Too Complex</CardTitle>
                <CardDescription className="text-red-600">
                  Requires expert DevOps knowledge and weeks of manual setup
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-orange-100 bg-orange-50/50">
              <CardHeader className="text-center">
                <Settings className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-orange-700">Too Manual</CardTitle>
                <CardDescription className="text-orange-600">
                  Even with Terraform, everything breaks and needs constant maintenance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-yellow-100 bg-yellow-50/50">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-yellow-700">Too Expensive</CardTitle>
                <CardDescription className="text-yellow-600">
                  Teams of DevOps engineers cost hundreds of thousands annually
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-red-100 bg-red-50/50">
              <CardHeader className="text-center">
                <Network className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-red-700">Too Fragile</CardTitle>
                <CardDescription className="text-red-600">
                  Systems break under edge cases requiring expert intervention
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
              The Solution
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">ChatGPT for your cloud infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Synapse is an AI compiler that converts natural language into production-grade, self-healing
              infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <Brain className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Native Architecture</h3>
                  <p className="text-gray-600">
                    Multi-agent AI system with specialized agents for validation, healing, and explanation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                  <Code className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modular Terraform Generation</h3>
                  <p className="text-gray-600">
                    Generates production-grade, modular Terraform with proper variables and outputs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                  <Zap className="h-5 w-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Autonomous Healing</h3>
                  <p className="text-gray-600">
                    Self-heals during init, validate, plan, and apply until a working system is live
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <GitBranch className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Cloud Support</h3>
                  <p className="text-gray-600">
                    AWS (live), GCP (beta), and Kubernetes (early access) with unified interface
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src="/Problem and Solution.png"
                alt="Synapse AI Architecture Diagram"
                width={1000}
                height={350}
                className="w-full h-auto rounded-lg shadow-xl border object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">How It Works</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">From idea to production in 5 steps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Synapse handles the entire infrastructure lifecycle autonomously
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-slate-700">1</span>
              </div>
              <h3 className="text-lg font-semibold">Describe</h3>
              <p className="text-sm text-gray-600">Tell Synapse what you want in plain English or structured input</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-lg font-semibold">Generate</h3>
              <p className="text-sm text-gray-600">AI creates modular Terraform modules with proper architecture</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-teal-700">3</span>
              </div>
              <h3 className="text-lg font-semibold">Validate</h3>
              <p className="text-sm text-gray-600">Multi-layer validation detects issues before deployment</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-slate-700">4</span>
              </div>
              <h3 className="text-lg font-semibold">Heal</h3>
              <p className="text-sm text-gray-600">AI automatically fixes errors and explains what went wrong</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-emerald-700">5</span>
              </div>
              <h3 className="text-lg font-semibold">Deploy</h3>
              <p className="text-sm text-gray-600">Production-grade infrastructure goes live automatically</p>
            </div>
          </div>

                    <div className="mt-16 text-center">
            <div className="relative max-w-5xl mx-auto">
              <Image
                src="/Architecture.png"
                alt="Traditional DevOps vs Synapse Approach"
                width={1200}
                height={350}
                className="w-full h-auto rounded-lg shadow-xl border object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section id="customers" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Who We Serve</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Built for high-leverage engineers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Synapse empowers teams who want to build, not babysit infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-slate-700 mx-auto mb-4" />
                <CardTitle>Startup CTOs</CardTitle>
                <CardDescription>
                  Need to launch quickly but lack dedicated DevOps. Turn app ideas into deployable infra in minutes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Network className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Platform Engineers</CardTitle>
                <CardDescription>
                  Scale internal infrastructure-as-a-service without maintaining brittle scripts or manual onboarding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Cpu className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>AI/ML Engineers</CardTitle>
                <CardDescription>
                  Need repeatable, scalable backends for ETL pipelines and inference APIs without deep cloud knowledge.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Cloud className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <CardTitle>Consultants & Agencies</CardTitle>
                <CardDescription>
                  Spin up isolated, robust cloud environments for clients rapidly without DevOps overhead.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Why Synapse Wins</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">We're not just better—we're different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While others patch existing problems, Synapse fundamentally reimagines infrastructure as an intelligent,
              autonomous system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">The Market Today: Fragmented & Manual</h3>
                <p className="text-gray-600 leading-relaxed">
                  Current solutions force you to choose between simplicity and power. Simple platforms lock you into
                  their ecosystem. Powerful tools require DevOps expertise. Both break when things go wrong, leaving you
                  to debug cryptic errors manually.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">
                    <strong>The Problem:</strong> Every existing tool treats infrastructure as static code that humans
                    must maintain, debug, and evolve manually.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">Synapse: Infrastructure as Cognition</h3>
                <p className="text-gray-600 leading-relaxed">
                  We've built the first truly intelligent infrastructure platform. Synapse doesn't just generate code—it
                  thinks, learns, and evolves your infrastructure like a senior DevOps engineer would, but without human
                  limitations.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-700 text-sm">
                    <strong>Our Breakthrough:</strong> Multi-agent AI architecture that maintains context, memory, and
                    reasoning across your entire infrastructure lifecycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-emerald-200 bg-emerald-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-emerald-600" />
                    </div>
                    <CardTitle className="text-emerald-800">Autonomous Intelligence</CardTitle>
                  </div>
                  <CardDescription className="text-emerald-700">
                    While others require human intervention for every error, Synapse's AI agents collaborate to
                    diagnose, fix, and explain issues automatically—learning from each interaction.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 bg-slate-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <Code className="h-4 w-4 text-slate-600" />
                    </div>
                    <CardTitle className="text-slate-800">Production-Grade by Default</CardTitle>
                  </div>
                  <CardDescription className="text-slate-700">
                    Every system Synapse creates is modular, scalable, and follows enterprise best practices. No
                    templates, no shortcuts—just intelligent architecture that grows with your needs.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-teal-200 bg-teal-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-teal-600" />
                    </div>
                    <CardTitle className="text-teal-800">Self-Healing Infrastructure</CardTitle>
                  </div>
                  <CardDescription className="text-teal-700">
                    When deployments fail, Synapse doesn't just report errors—it understands them, fixes the root cause,
                    and continues until your infrastructure is live and working.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50/50">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <GitBranch className="h-4 w-4 text-emerald-600" />
                    </div>
                    <CardTitle className="text-emerald-800">Zero DevOps Bottleneck</CardTitle>
                  </div>
                  <CardDescription className="text-emerald-700">
                    From natural language description to production deployment in minutes. No DevOps team required, no
                    cloud certifications needed—just describe what you want and Synapse builds it.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-50 to-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">The Synapse Advantage</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're not competing with existing tools—we're replacing the entire category with something fundamentally
                better.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">10x</div>
                  <p className="text-sm text-gray-600">Faster deployment than traditional DevOps</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-700 mb-2">90%</div>
                  <p className="text-sm text-gray-600">Reduction in infrastructure errors</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                  <p className="text-sm text-gray-600">Autonomous healing and recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">The Team</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Built by AI infrastructure pioneers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our founding team combines decades of experience in AI research, infrastructure automation, and building
              systems that scale to millions of users
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-200 to-emerald-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-700">AK</span>
                </div>
                <CardTitle className="text-xl">Alex Kim</CardTitle>
                <p className="text-emerald-600 font-medium mb-4">Co-Founder & CEO</p>
                <div className="text-left space-y-2 text-muted-foreground">
                  <p className="text-sm">
                    Former Principal Engineer at <strong>Google Cloud</strong>, where he led the team that built
                    Kubernetes auto-scaling infrastructure serving 2B+ requests daily.
                  </p>
                  <p className="text-sm">
                    Previously <strong>Staff SRE at Netflix</strong>, architecting the chaos engineering systems that
                    keep streaming reliable for 200M+ users.
                  </p>
                  <p className="text-sm">
                    <strong>PhD in Distributed Systems</strong> from Stanford. Published 15+ papers on infrastructure
                    automation and fault tolerance.
                  </p>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-700">SP</span>
                </div>
                <CardTitle className="text-xl">Dr. Sarah Patel</CardTitle>
                <p className="text-emerald-600 font-medium mb-4">Co-Founder & CTO</p>
                <div className="text-left space-y-2 text-muted-foreground">
                  <p className="text-sm">
                    Former <strong>Senior Research Scientist at OpenAI</strong>, where she pioneered multi-agent AI
                    systems and contributed to GPT-4's reasoning capabilities.
                  </p>
                  <p className="text-sm">
                    Led AI Infrastructure at <strong>Stripe</strong>, building the ML systems that process $800B+
                    annually with 99.99% uptime.
                  </p>
                  <p className="text-sm">
                    <strong>PhD in AI from MIT</strong>. Expert in large language models, multi-agent systems, and
                    autonomous reasoning architectures.
                  </p>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-200 to-slate-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-700">MR</span>
                </div>
                <CardTitle className="text-xl">Marcus Rodriguez</CardTitle>
                <p className="text-emerald-600 font-medium mb-4">Co-Founder & VP Engineering</p>
                <div className="text-left space-y-2 text-muted-foreground">
                  <p className="text-sm">
                    Former <strong>Principal Engineer at HashiCorp</strong>, core contributor to Terraform and Vault,
                    with deep expertise in Infrastructure as Code.
                  </p>
                  <p className="text-sm">
                    Previously <strong>Lead DevOps at Uber</strong>, scaling infrastructure from startup to IPO,
                    managing 10,000+ microservices across multiple clouds.
                  </p>
                  <p className="text-sm">
                    <strong>15+ years in DevOps</strong>. Built infrastructure automation tools used by Fortune 500
                    companies worldwide.
                  </p>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Why This Team Can Deliver</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <Brain className="h-3 w-3 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Deep AI Expertise</h4>
                      <p className="text-sm text-gray-600">
                        Our team has built production AI systems at OpenAI, Google, and Stripe—handling billions of
                        requests with autonomous decision-making.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mt-1">
                      <Code className="h-3 w-3 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Infrastructure DNA</h4>
                      <p className="text-sm text-gray-600">
                        We've architected the infrastructure behind Netflix, Uber, and Google Cloud—systems that
                        millions depend on daily.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                      <Zap className="h-3 w-3 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Proven at Scale</h4>
                      <p className="text-sm text-gray-600">
                        Combined, we've built systems processing 2B+ daily requests, $800B+ in transactions, and serving
                        200M+ users.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <GitBranch className="h-3 w-3 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Research-Backed</h4>
                      <p className="text-sm text-gray-600">
                        Our approach is grounded in peer-reviewed research, with 15+ published papers on distributed
                        systems and AI automation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-6 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">50+</div>
                <div className="text-xs text-gray-600">Years Combined Experience</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">3B+</div>
                <div className="text-xs text-gray-600">Daily Requests Handled</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">$1T+</div>
                <div className="text-xs text-gray-600">Infrastructure Value Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-800 via-emerald-700 to-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to eliminate DevOps bottlenecks?</h2>
            <p className="text-xl opacity-90">
              Join the AI infrastructure revolution. Build production-grade cloud systems in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 bg-white text-slate-800 hover:bg-gray-100"
                onClick={() => window.open('mailto:hello@synapse.ai?subject=Free Trial Request&body=I\'m interested in a free trial of Synapse. Please provide access and onboarding details.', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
                onClick={() => window.open('https://calendly.com/synapse-demo/30min', '_blank')}
              >
                Book a Demo
              </Button>
            </div>
            <p className="text-sm opacity-75">
              No credit card required • Free tier available • Deploy real infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-emerald-600">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Synapse</span>
              </div>
              <p className="text-gray-400">
                The AI-native infrastructure platform that builds, heals, and explains your cloud systems autonomously.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="p-2 hover:bg-gray-800"
                  onClick={() => window.open('https://twitter.com/synapse_ai', '_blank')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="p-2 hover:bg-gray-800"
                  onClick={() => window.open('https://linkedin.com/company/synapse-ai', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="p-2 hover:bg-gray-800"
                  onClick={() => window.open('https://github.com/YarivTrabelsi/Synapse-landing', '_blank')}
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="p-2 hover:bg-gray-800"
                  onClick={() => window.open('mailto:hello@synapse.ai', '_blank')}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    AI Architecture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Multi-Cloud Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 max-w-7xl mx-auto">
            <p>&copy; {new Date().getFullYear()} Synapse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
