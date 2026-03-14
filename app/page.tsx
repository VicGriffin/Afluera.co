'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { ArrowRight, Sparkles, TrendingUp, BarChart3, Shield, Zap, Star, Users, Search } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Smart Influencer Matching',
    description: 'AI-powered algorithm finds creators whose audiences align perfectly with your target market'
  },
  {
    icon: BarChart3,
    title: 'Audience Insights & Analytics',
    description: 'Deep dive into audience demographics, interests, and buying behaviors'
  },
  {
    icon: TrendingUp,
    title: 'Campaign Performance Tracking',
    description: 'Real-time metrics on engagement, reach, and conversion impact'
  },
  {
    icon: Shield,
    title: 'Fake Follower Detection',
    description: 'Identify authentic influencers with real, engaged audiences'
  },
  {
    icon: Zap,
    title: 'ROI Prediction',
    description: 'Data-driven predictions on campaign performance before launch'
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description: 'Maximize campaign results with AI-powered recommendations'
  }
]

const influencers = [
  {
    name: 'Sarah Chen',
    niche: 'Beauty & Skincare',
    followers: '245K',
    engagement: '8.4%',
    match: '92%'
  },
  {
    name: 'Marcus Williams',
    niche: 'Tech Reviews',
    followers: '189K',
    engagement: '6.2%',
    match: '87%'
  },
  {
    name: 'Emma Rodriguez',
    niche: 'Fashion & Style',
    followers: '312K',
    engagement: '7.8%',
    match: '85%'
  }
]

const testimonials = [
  {
    quote: 'Afluera helped us find creators that actually drove sales. Our conversion rate increased by 320% compared to manual selection.',
    company: 'TechStartup Inc'
  },
  {
    quote: 'The AI matching is incredibly accurate. We saved months of research and found perfect brand ambassadors in days.',
    company: 'Beauty Collective'
  }
]

const faqs = [
  {
    question: 'How does Afluera match influencers?',
    answer: 'Our proprietary AI analyzes audience demographics, engagement patterns, purchasing behaviors, and content alignment to find the best matches for your product.'
  },
  {
    question: 'What platforms are supported?',
    answer: 'Currently, we support Instagram, TikTok, and YouTube. We\'re expanding to additional platforms soon.'
  },
  {
    question: 'How is ROI measured?',
    answer: 'We track clicks, conversions, and sales attributable to each influencer campaign with detailed attribution models.'
  },
  {
    question: 'Is this for small brands?',
    answer: 'Absolutely! Afluera works for brands of any size, from startups to enterprise companies.'
  }
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [product, setProduct] = useState('Skincare')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Welcome to the beta! We'll contact ${email} soon.`)
    setEmail('')
  }

  return (
    <main className="w-full overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-32 px-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200">Powered by Advanced AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Find the Perfect Influencer for Your Product in Seconds
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Afluera's AI matches brands with influencers whose audiences are ready to buy. Stop guessing, start converting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-full px-8">
              Start a Campaign <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-purple-400/30 text-white hover:bg-purple-500/10">
                Join the Waitlist
              </Button>
            </Link>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="relative rounded-2xl overflow-hidden border border-purple-400/20 bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl p-6 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-purple-400/10">
                  <Search className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">Matching influencers for Skincare...</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {influencers.map((influencer, i) => (
                    <div key={i} className="rounded-lg bg-slate-800/50 p-4 border border-purple-400/10 hover:border-purple-400/30 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-white">{influencer.name}</h4>
                          <p className="text-xs text-purple-300">{influencer.niche}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-green-400">{influencer.match}</div>
                          <div className="text-xs text-gray-400">match</div>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-300">
                          <span>Followers:</span>
                          <span className="font-semibold">{influencer.followers}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Engagement:</span>
                          <span className="font-semibold">{influencer.engagement}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Influencer Marketing Is Broken
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Traditional influencer selection relies on outdated metrics and guesswork
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Brands choose influencers based on followers only',
              'Fake engagement is common',
              'Campaigns don\'t always convert',
              'Hard to measure ROI'
            ].map((problem, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-slate-800/50 border border-purple-400/10">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                </div>
                <p className="text-gray-300">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center py-8 border-t border-purple-400/10">
            <p className="text-lg text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text font-semibold">
              Afluera fixes this with data-driven matching.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Add Your Product', desc: 'Tell us about your product and target audience' },
              { step: '2', title: 'AI Finds the Best', desc: 'Our AI analyzes thousands of influencers' },
              { step: '3', title: 'Launch & Convert', desc: 'Start campaigns that actually drive sales' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 p-8 text-center hover:border-purple-400/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {i < 2 && <ArrowRight className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 text-purple-400/30 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Powerful Features Built for Results
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <Card key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-purple-400/20 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 group">
                  <div className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
            See It In Action
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Try our matching engine right now
          </p>

          <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-3">Enter Your Product Category</label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-400/20 text-white placeholder-gray-500 focus:border-purple-400/50 focus:outline-none"
              >
                <option>Skincare</option>
                <option>Fashion</option>
                <option>Tech</option>
                <option>Food & Beverage</option>
                <option>Fitness</option>
              </select>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Sample Matched Influencers</h3>
              <div className="space-y-3">
                {influencers.map((inf, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-purple-400/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                      <div>
                        <p className="font-semibold text-white">{inf.name}</p>
                        <p className="text-xs text-purple-300">{inf.niche}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-400">{inf.match}</p>
                      <p className="text-xs text-gray-400">match score</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Trusted by Innovative Brands
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-purple-400/20">
                <div className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-purple-400 text-purple-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  <p className="text-sm font-semibold text-purple-300">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            {['BrandA', 'BrandB', 'BrandC', 'BrandD'].map((brand, i) => (
              <div key={i} className="px-6 py-3 rounded-lg bg-slate-800/50 border border-purple-400/10 text-gray-400 text-sm font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border border-purple-400/20 overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-800/30 hover:border-purple-400/50 transition-colors cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <div className={`text-purple-400 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-gray-400 border-t border-purple-400/10 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-y border-purple-400/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Start Finding Influencers That Actually Sell
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join hundreds of brands using Afluera to scale their influencer marketing
          </p>

          <form onSubmit={handleWaitlistSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full bg-slate-800/50 border-purple-400/30 text-white placeholder-gray-500 focus:border-purple-400/50 py-6 px-6"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-full py-6 font-semibold"
              >
                Join the Beta
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 rounded-full border-purple-400/30 text-white hover:bg-purple-500/10 py-6 font-semibold"
              >
                Request Demo
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-12 px-4 border-t border-purple-400/10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Ready to transform your influencer marketing?</h3>
            <p className="text-gray-400">Get started with Afluera today</p>
          </div>
          <div className="flex gap-4">
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-full px-8">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
