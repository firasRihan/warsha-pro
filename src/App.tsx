import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Target,
  TrendingUp,
  Users,
  Shield,
  Globe,
  CreditCard,
  Award,
  Briefcase,
  Code2,
  Brain,
  Calendar,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Wrench,
  Droplets,
  Zap as ZapIcon,
  Paintbrush,
  Snowflake,
  Hammer,
  Tv,
  Layers,
  Wifi,
  Handshake,
  Rocket,
  MapPin,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* ──────────── Scroll Reveal Hook ──────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ──────────── Navigation ──────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Opportunity", href: "#opportunity" },
    { label: "Product", href: "#product" },
    { label: "Business Model", href: "#business" },
    { label: "Markets", href: "#markets" },
    { label: "Technology", href: "#technology" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Team", href: "#team" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A1F1A]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/warsha_logo.png" alt="Warsha" className="h-10 w-10" />
            <span className="text-white font-bold text-xl tracking-wide">
              WARSHA<span className="text-[#EF9F27]">PRO</span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-[#EF9F27] px-4 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ──────────── Hero ──────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-teal overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF9F27] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0F6E56] rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-[#EF9F27]/20 text-[#EF9F27] border-[#EF9F27]/30 mb-6 text-sm px-4 py-1.5">
              Internal Venture Proposal — Acksession 2026
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              وَرشَة
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-white/90 mb-6 tracking-wide">
              WARSHA<span className="text-[#EF9F27]">PRO</span>
            </h2>
            <p className="text-xl text-[#EF9F27] font-medium mb-4">
              The Arab World's First Arabic-Native Home Services Marketplace
            </p>
            <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
              A marketplace where service seekers post jobs for free, and
              verified tradespeople pay credits to unlock leads. Modeled on
              Thumbtack's $400M revenue playbook, built specifically for the
              MENA region.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#opportunity">
                <Button
                  size="lg"
                  className="bg-[#EF9F27] hover:bg-[#d98b1c] text-[#0A1F1A] font-bold px-8 rounded-xl"
                >
                  Explore the Opportunity{" "}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#business">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-[#0F6E56] hover:bg-white/10 px-8 rounded-xl"
                >
                  Business Model
                </Button>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-6">
            <img
              src="/warsha_logo.png"
              alt="Warsha Logo"
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain drop-shadow-2xl rounded-2xl"
            />
            <div
              className="glass rounded-2xl max-w-sm"
              style={{ padding: "12px" }}
            >
              <p className="text-white/80 text-center text-lg font-medium italic">
                "حِرفي بضغطة زر"
              </p>
              <p className="text-white/50 text-center text-sm mt-2">
                Your craftsman at the tap of a button
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────── Metrics Bar ──────────── */
function MetricsBar() {
  const metrics = [
    { value: "$45B+", label: "MENA TAM", icon: Globe },
    { value: "$3.2B", label: "Thumbtack Valuation", icon: TrendingUp },
    { value: "$400M", label: "Thumbtack Revenue", icon: CreditCard },
  ];
  return (
    <section className="bg-[#0F6E56] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-center gap-3"
            >
              <m.icon className="w-8 h-8 text-[#EF9F27]" />
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">
                  {m.value}
                </div>
                <div className="text-white/70 text-sm">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────── Market Opportunity ──────────── */
function MarketOpportunity() {
  return (
    <section id="opportunity" className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="bg-[#0F6E56]/10 text-[#0F6E56] mb-4">
              Market Analysis
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1F1A] mb-4">
              A $45B+ Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MENA home services remain 80%+ offline and fragmented. No dominant
              Arabic-native marketplace exists.
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <RevealSection delay={0}>
            <Card className="border-[#0F6E56]/20 card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#0F6E56]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-[#0F6E56]" />
                </div>
                <div className="text-5xl font-bold text-[#0F6E56] mb-2">
                  $45B+
                </div>
                <p className="text-gray-500 font-medium mb-2">
                  Total Addressable Market
                </p>
                <p className="text-sm text-gray-400">
                  Across MENA home improvement, repair & maintenance
                </p>
              </CardContent>
            </Card>
          </RevealSection>
          <RevealSection delay={0.1}>
            <Card className="border-[#EF9F27]/20 card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#EF9F27]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-[#EF9F27]" />
                </div>
                <div className="text-5xl font-bold text-[#EF9F27] mb-2">
                  $12B
                </div>
                <p className="text-gray-500 font-medium mb-2">
                  Serviceable Market
                </p>
                <p className="text-sm text-gray-400">
                  5 target launch countries (LB, EG, UAE, QA, KSA)
                </p>
              </CardContent>
            </Card>
          </RevealSection>
          {/*           <RevealSection delay={0.2}>
            <Card className="border-[#0F6E56]/20 card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#0F6E56]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-[#0F6E56]" />
                </div>
                <div className="text-5xl font-bold text-[#0F6E56] mb-2">
                  $180M
                </div>
                <p className="text-gray-500 font-medium mb-2">
                  Obtainable by Year 5
                </p>
                <p className="text-sm text-gray-400">
                  Based on achievable market share per city
                </p>
              </CardContent>
            </Card>
          </RevealSection> */}
        </div>

        <RevealSection>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0A1F1A] mb-6">
              5 Converging Tailwinds
            </h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  num: "1",
                  title: "Infrastructure Ready",
                  desc: "75%+ smartphone penetration across MENA",
                },
                {
                  num: "2",
                  title: "Behavior Shift",
                  desc: "Post-pandemic digital booking expectations",
                },
                {
                  num: "3",
                  title: "Near-Empty Playing Field",
                  desc: "No Arabic-native home services platform",
                },
                {
                  num: "4",
                  title: "Proven Model",
                  desc: "Thumbtack validated at $400M revenue",
                },
                {
                  num: "5",
                  title: "Gov't Tailwinds",
                  desc: "Vision 2030, Qatar Smart Nation, Egypt Digital",
                },
              ].map((item) => (
                <div key={item.num} className="text-center">
                  <div className="text-3xl font-bold text-[#EF9F27] mb-2">
                    {item.num}
                  </div>
                  <p className="font-semibold text-[#0A1F1A] text-sm mb-1">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ──────────── Product ──────────── */
function Product() {
  const categories = [
    { icon: Droplets, name: "Plumbing" },
    { icon: ZapIcon, name: "Electrical" },
    { icon: Hammer, name: "Carpentry" },
    { icon: Paintbrush, name: "Painting" },
    { icon: Snowflake, name: "AC / HVAC" },
    { icon: Wrench, name: "Handyman" },
    { icon: Briefcase, name: "Cleaning" },
    { icon: Tv, name: "Appliance Repair" },
    { icon: Layers, name: "Flooring / Tiling" },
    { icon: Wifi, name: "Smart Home" },
  ];

  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="bg-[#0F6E56]/10 text-[#0F6E56] mb-4">
              Product
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1F1A] mb-4">
              Three Users. Ten Categories. AI-Powered.
            </h2>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Clients",
              color: "bg-[#0F6E56]",
              desc: "Post jobs for free. Receive multiple quotes. Book verified pros with confidence.",
            },
            {
              icon: Wrench,
              title: "Professionals",
              color: "bg-[#EF9F27]",
              desc: "Buy credits to unlock leads. Submit quotes with unlimited revisions. Build your reputation.",
            },
            {
              icon: Shield,
              title: "Platform Admin",
              color: "bg-[#143D33]",
              desc: "Verify identities, resolve disputes, monitor quality, and detect fraud.",
            },
          ].map((user) => (
            <RevealSection key={user.title} delay={0.1}>
              <Card className="card-hover h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 ${user.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <user.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1F1A] mb-3">
                    {user.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{user.desc}</p>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <h3 className="text-2xl font-bold text-[#0A1F1A] mb-8 text-center">
            10 Core Service Categories
          </h3>
          <div className="grid grid-cols-5 lg:grid-cols-10 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex flex-col items-center gap-2 p-4 bg-[#F8F7F5] rounded-xl hover:bg-[#0F6E56] group transition-all cursor-default"
              >
                <cat.icon className="w-6 h-6 text-[#0F6E56] group-hover:text-white transition-colors" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-white text-center transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="mt-16 bg-gradient-to-r from-[#0A1F1A] to-[#143D33] rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#EF9F27]/20 text-[#EF9F27] mb-4">
                  AI Differentiation
                </Badge>
                <h3 className="text-3xl font-bold text-white mb-6">
                  AI Features Thumbtack Doesn't Have
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "AI Job Intent Router",
                      desc: "Natural language in Arabic or English routes to correct service category with 95%+ accuracy",
                    },
                    {
                      title: "AI Job Description Assistant",
                      desc: "Category-specific dynamic forms generate complete, detailed job postings",
                    },
                    {
                      title: "Rule-Based Price Estimator",
                      desc: "Gives clients realistic budget expectations before quotes arrive",
                    },
                    {
                      title: "AI Review Authenticity",
                      desc: "Only confirmed on-platform bookings can leave reviews",
                    },
                  ].map((f) => (
                    <div key={f.title} className="flex gap-4">
                      <Brain className="w-6 h-6 text-[#EF9F27] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-semibold">{f.title}</p>
                        <p className="text-white/60 text-sm">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#EF9F27] mb-4">
                  Verified Reviews Fix Thumbtack's Biggest Weakness
                </h4>
                <div className="space-y-3">
                  {[
                    "Anyone can leave a review — no proof of hire",
                    "Fake reviews destroy pro reputations",
                    "Reviews cannot be edited or deleted",
                    "No reporting for false reviews",
                    "15 pros charged for one job",
                  ].map((flaw, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-sm">{flaw}</span>
                    </div>
                  ))}
                </div>
                <Separator className="my-4 bg-white/10" />
                <div className="space-y-3">
                  {[
                    "Review Gate — confirmed bookings only",
                    "Contact Blocking — no off-platform leakage",
                    "Reputation Lock-In — profiles tied to platform",
                    "Pro Business Suite — calendar, invoices, analytics",
                  ].map((fix, i) => (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-[#0F6E56] flex-shrink-0" />
                      <span className="text-sm font-medium">{fix}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ──────────── Business Model ──────────── */
function BusinessModel() {
  const streams = [
    {
      pct: "40%",
      title: "Lead Credits",
      desc: "Pay-per-lead credit packs. Primary growth driver. 70%+ gross margin.",
      color: "bg-[#0F6E56]",
    },
    {
      pct: "25%",
      title: "Warsha Pro",
      desc: "Monthly subscription $49-149/mo. Priority ranking, analytics, tools.",
      color: "bg-[#EF9F27]",
    },
    {
      pct: "15%",
      title: "Verification",
      desc: "Identity and skill verification $15-40. Builds trust, reduces fraud.",
      color: "bg-[#6B8F84]",
    },
    {
      pct: "15%",
      title: "Promoted Placement",
      desc: "Pros bid for top placement in search results. CPC auction model.",
      color: "bg-[#143D33]",
    },
    {
      pct: "5%",
      title: "Future Revenue",
      desc: "Pro Academy, B2B enterprise, financing commissions.",
      color: "bg-[#9B9B9B]",
    },
  ];

  return (
    <section id="business" className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="bg-[#EF9F27]/10 text-[#EF9F27] mb-4">
              Business Model
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1F1A] mb-4">
              Credit-Based Monetization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Thumbtack proven playbook: clients post free, pros pay
              credits, no commission on transactions.
            </p>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <RevealSection>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0A1F1A] mb-6">
                Credit Pack Pricing
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Starter",
                    price: "$15",
                    credits: "20 credits",
                    cpm: "$0.75/cr",
                  },
                  {
                    name: "Pro",
                    price: "$45",
                    credits: "70 credits",
                    cpm: "$0.64/cr",
                    popular: true,
                  },
                  {
                    name: "Business",
                    price: "$99",
                    credits: "175 credits",
                    cpm: "$0.57/cr",
                  },
                ].map((pack) => (
                  <div
                    key={pack.name}
                    className={`flex items-center justify-between p-5 rounded-xl ${pack.popular ? "bg-[#0F6E56] text-white" : "bg-gray-50"}`}
                  >
                    <div>
                      <p
                        className={`font-bold text-lg ${pack.popular ? "text-white" : "text-[#0A1F1A]"}`}
                      >
                        {pack.name}
                      </p>
                      <p
                        className={`text-sm ${pack.popular ? "text-white/70" : "text-gray-500"}`}
                      >
                        {pack.credits} @ {pack.cpm}
                      </p>
                    </div>
                    <div
                      className={`text-3xl font-bold ${pack.popular ? "text-[#EF9F27]" : "text-[#0F6E56]"}`}
                    >
                      {pack.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0A1F1A] mb-4">
                Five Revenue Streams
              </h3>
              {streams.map((s) => (
                <div
                  key={s.title}
                  className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm card-hover"
                >
                  <div
                    className={`${s.color} text-white font-bold text-lg w-16 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    {s.pct}
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1F1A]">{s.title}</p>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>

        <RevealSection>
          <div className="bg-gradient-to-r from-[#0F6E56] to-[#143D33] rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              5-Year Financial Projections
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  year: "Year 1",
                  market: "Lebanon",
                  rev: "$180K",
                  pros: "500",
                },
                { year: "Year 2", market: "+ Egypt", rev: "$1.2M", pros: "3K" },
                {
                  year: "Year 3",
                  market: "+ UAE/QA",
                  rev: "$4.5M",
                  pros: "8K",
                },
                { year: "Year 4", market: "+ KSA", rev: "$12M", pros: "20K" },
                {
                  year: "Year 5",
                  market: "+ N. Africa",
                  rev: "$28M",
                  pros: "50K",
                },
              ].map((y) => (
                <div
                  key={y.year}
                  className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm"
                >
                  <p className="text-[#EF9F27] font-bold text-sm mb-1">
                    {y.year}
                  </p>
                  <p className="text-white font-bold text-2xl mb-1">{y.rev}</p>
                  <p className="text-white/60 text-xs mb-2">{y.market}</p>
                  <p className="text-white/40 text-xs">{y.pros} pros</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ──────────── Market Analysis with Charts ──────────── */
const marketData = [
  {
    country: "Lebanon",
    laborForce: 1.9,
    internetPenetration: 92,
    avgIncome: 10000,
    opportunity: "Medium",
  },
  {
    country: "Qatar",
    laborForce: 2.12,
    internetPenetration: 99,
    avgIncome: 68000,
    opportunity: "High",
  },
  {
    country: "UAE",
    laborForce: 7.4,
    internetPenetration: 99,
    avgIncome: 72000,
    opportunity: "High",
  },
  {
    country: "Saudi",
    laborForce: 17.8,
    internetPenetration: 96,
    avgIncome: 32000,
    opportunity: "Very High",
  },
  {
    country: "Kuwait",
    laborForce: 3.7,
    internetPenetration: 99,
    avgIncome: 52000,
    opportunity: "Medium",
  },
  {
    country: "Bahrain",
    laborForce: 0.9,
    internetPenetration: 99,
    avgIncome: 28000,
    opportunity: "Medium",
  },
  {
    country: "Oman",
    laborForce: 2.8,
    internetPenetration: 95,
    avgIncome: 22000,
    opportunity: "Medium",
  },
  {
    country: "Egypt",
    laborForce: 36.0,
    internetPenetration: 75,
    avgIncome: 4500,
    opportunity: "Very High",
  },
  {
    country: "Jordan",
    laborForce: 3.2,
    internetPenetration: 80,
    avgIncome: 6000,
    opportunity: "Medium",
  },
];

const COLORS = [
  "#0F6E56",
  "#EF9F27",
  "#143D33",
  "#6B8F84",
  "#78909C",
  "#546E7A",
  "#37474F",
  "#5D4037",
];

function MarketAnalysis() {
  return (
    <section id="markets" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="bg-[#0F6E56]/10 text-[#0F6E56] mb-4">
              Market Analysis
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1F1A] mb-4">
              Independent Market Projections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each market stands on its own.{" "}
            </p>
          </div>
        </RevealSection>

        {/* Qatar Highlight */}
        {/* <RevealSection>
          <div className="bg-gradient-to-r from-[#0A1F1A] to-[#143D33] rounded-2xl p-8 lg:p-12 mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <Badge className="bg-[#EF9F27]/20 text-[#EF9F27] mb-4">
                  <MapPin className="w-3 h-3 mr-1" /> Recommended Launch Market
                </Badge>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Why Qatar First?
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Qatar combines the ideal conditions for a marketplace launch:
                  near-universal internet penetration (99%), a young,
                  digitally-active population of 2.7 million, and a labor force
                  of 2.1 million that is 94% foreign-born — meaning a large
                  community of skilled workers already in the country. The
                  market is compact geographically, affluent, and critically{" "}
                  <strong className="text-[#EF9F27]">
                    underserved by digital home services platforms
                  </strong>
                  .
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "3.1M", label: "Population" },
                    { value: "2.1M", label: "Labor Force" },
                    { value: "99%", label: "Internet" },
                    { value: "2.7M", label: "Digital Users" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 rounded-lg p-4 text-center"
                    >
                      <div className="text-xl font-bold text-[#EF9F27]">
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <div className="bg-white rounded-xl p-6 max-w-sm">
                  <h4 className="font-bold text-[#0A1F1A] mb-4">
                    Qatar Market Snapshot
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Smartphone Penetration
                      </span>
                      <span className="font-semibold">95%+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Social Media Users</span>
                      <span className="font-semibold">2.6M (95.2%)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Working Age (25-54)</span>
                      <span className="font-semibold">2.18M (69.9%)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Mobile Connections</span>
                      <span className="font-semibold">4.75M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Gov't Digital Push</span>
                      <span className="font-semibold text-[#0F6E56]">
                        Qatar Smart Nation
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Avg. Mobile Speed</span>
                      <span className="font-semibold">244 Mbps</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    Sources: World Bank 2024, DataReportal Digital 2024: Qatar,
                    Global Media Insight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection> */}

        {/* Labor Force Comparison Chart */}
        <RevealSection>
          <div className="bg-[#F8F7F5] rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#0A1F1A] mb-2">
              Labor Force by Market (Millions)
            </h3>
            <p className="text-gray-500 mb-6">
              Total labor force — a proxy for both service providers and
              potential customers
            </p>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={marketData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="country" tick={{ fill: "#666" }} />
                  <YAxis tick={{ fill: "#666" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  />
                  <Bar dataKey="laborForce" radius={[4, 4, 0, 0]}>
                    {marketData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.country === "Qatar"
                            ? "#EF9F27"
                            : COLORS[index % COLORS.length]
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Sources: World Bank, National Statistics Bureaus, ILO 2024
            </p>
          </div>
        </RevealSection>

        {/* Market Cards */}
        <RevealSection>
          <h3 className="text-2xl font-bold text-[#0A1F1A] mb-8">
            Market-by-Market Opportunity
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                country: "Lebanon",
                flag: "L🇧",
                highlight: false,
                pros: "92% internet, educated and eager population",
                cons: "Smaller absolute market size",
                laborForce: "1.9M",
                opportunity: "Medium",
              },
              {
                country: "Qatar",
                flag: "🇶🇦",
                highlight: true,
                pros: "99% internet, compact geography, high income, government digital push, young population",
                cons: "Smaller absolute market size",
                laborForce: "2.1M",
                opportunity: "High",
              },
              {
                country: "UAE",
                flag: "🇦🇪",
                highlight: true,
                pros: "Tech-savvy, high income, established digital payment infrastructure",
                cons: "Competitive market, higher CAC",
                laborForce: "7.4M",
                opportunity: "High",
              },
              {
                country: "Saudi Arabia",
                flag: "🇸🇦",
                highlight: true,
                pros: "Largest GCC market, Vision 2030 digital push, young population",
                cons: "Geographically dispersed, cultural considerations",
                laborForce: "17.8M",
                opportunity: "Very High",
              },
              {
                country: "Kuwait",
                flag: "🇰🇼",
                highlight: false,
                pros: "High income, strong expat workforce, good infrastructure",
                cons: "Smaller market, regulatory complexity",
                laborForce: "3.7M",
                opportunity: "Medium",
              },
              {
                country: "Bahrain",
                flag: "🇧🇭",
                highlight: false,
                pros: "Business-friendly, gateway to GCC, high digital adoption",
                cons: "Smallest GCC market",
                laborForce: "0.9M",
                opportunity: "Medium",
              },
              {
                country: "Oman",
                flag: "🇴🇲",
                highlight: false,
                pros: "Growing digital infrastructure, less competition",
                cons: "Lower income levels, smaller digital market",
                laborForce: "2.8M",
                opportunity: "Medium",
              },
              {
                country: "Egypt",
                flag: "🇪🇬",
                highlight: true,
                pros: "Massive labor force, large addressable market, low competition",
                cons: "Lower income, infrastructure challenges, payment complexity",
                laborForce: "36.0M",
                opportunity: "Very High",
              },
              {
                country: "Jordan",
                flag: "🇯🇴",
                highlight: false,
                pros: "Tech talent hub, young population, regional stability",
                cons: "Smaller market, economic pressures",
                laborForce: "3.2M",
                opportunity: "Medium",
              },
            ].map((market) => (
              <Card
                key={market.country}
                className={`card-hover h-full ${market.highlight ? "ring-2 ring-[#EF9F27]" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{market.flag}</span>
                    <h4 className="font-bold text-[#0A1F1A]">
                      {market.country}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-[#F8F7F5] rounded-lg p-2 text-center">
                      <div className="text-lg font-bold text-[#0F6E56]">
                        {market.laborForce}
                      </div>
                      <div className="text-xs text-gray-500">Labor Force</div>
                    </div>
                    <div className="bg-[#F8F7F5] rounded-lg p-2 text-center">
                      <div className="text-lg font-bold text-[#EF9F27]">
                        {market.opportunity}
                      </div>
                      <div className="text-xs text-gray-500">Opportunity</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-[#0F6E56] font-semibold">
                        Strengths
                      </p>
                      <p className="text-xs text-gray-600">{market.pros}</p>
                    </div>
                    <div>
                      <p className="text-xs text-red-500 font-semibold">
                        Considerations
                      </p>
                      <p className="text-xs text-gray-600">{market.cons}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ──────────── Technology ──────────── */
function Technology() {
  const stack = [
    {
      layer: "Frontend",
      items: "Flutter (iOS/Android), React/Next.js (Web)",
      icon: Code2,
    },
    {
      layer: "Backend",
      items: ".NET 10, API Gateway, JWT Auth",
      icon: Code2,
    },
    {
      layer: "Data",
      items: "PostgreSQL, Redis, Elasticsearch (Arabic)",
      icon: Brain,
    },
    {
      layer: "Payments",
      items: "Stripe (GCC) + Whish (LB) + Fawry (EG)",
      icon: CreditCard,
    },
    {
      layer: "Infrastructure",
      items: "AWS ECS/Azure ACA, GitHub Actions, FCM",
      icon: Rocket,
    },
    {
      layer: "AI",
      items: "Model-agnostic: OpenAI/Gemini/Kimi/Claude APIs",
      icon: Brain,
    },
  ];

  return (
    <section id="technology" className="py-24 bg-[#0A1F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="bg-[#EF9F27]/20 text-[#EF9F27] mb-4">
              Technology
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Full Stack & Architecture
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Scalable, Arabic-native, AI-ready architecture.
            </p>
          </div>
        </RevealSection>

        <div className="space-y-4 mb-16">
          {stack.map((s, i) => (
            <RevealSection key={s.layer} delay={i * 0.05}>
              <div
                className={`flex items-center gap-6 p-6 rounded-xl ${i % 2 === 0 ? "bg-[#143D33]" : "bg-[#0F6E56]/20"}`}
              >
                <div className="w-12 h-12 bg-[#EF9F27]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 text-[#EF9F27]" />
                </div>
                <div className="flex-1">
                  <span className="text-[#EF9F27] font-bold text-sm uppercase tracking-wider">
                    {s.layer}
                  </span>
                  <p className="text-white/80">{s.items}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <h3 className="text-2xl font-bold text-white mb-6">MVP Build Plan</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                week: "Phase 1-2",
                title: "Foundation",
                tasks: "CI/CD, Auth, DB Schema, Flutter Shell",
              },
              {
                week: "Phase 3-4",
                title: "Core",
                tasks: "Job Posting, Discovery, Credits, Matching",
              },
              {
                week: "Phase 5-6",
                title: "Transactions",
                tasks: "Quotes, Messaging, Reviews, Payments",
              },
              {
                week: "Phase 7-8",
                title: "AI + Admin",
                tasks: "AI Routing, Estimator, Dashboard, Analytics",
              },
              {
                week: "Phase 9",
                title: "Launch",
                tasks: "Testing, Optimization, Beta Launch Prep",
              },
            ].map((phase, i) => (
              <div
                key={phase.week}
                className={`rounded-xl p-5 ${i === 4 ? "bg-[#EF9F27] text-[#0A1F1A]" : "bg-[#143D33] text-white"}`}
              >
                <p
                  className={`font-bold text-sm mb-1 ${i === 4 ? "text-[#0A1F1A]/60" : "text-[#EF9F27]"}`}
                >
                  {phase.week}
                </p>
                <p className="font-bold mb-2">{phase.title}</p>
                <p
                  className={`text-xs ${i === 4 ? "text-[#0A1F1A]/70" : "text-white/50"}`}
                >
                  {phase.tasks}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ──────────── Roadmap ──────────── */
function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="bg-[#0F6E56]/10 text-[#0F6E56] mb-4">
              Go-to-Market
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1F1A] mb-4">
              City-by-City Expansion
            </h2>
          </div>
        </RevealSection>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#0F6E56]/20 -translate-y-1/2 hidden lg:block" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "Phase 1",
                city: "Beirut",
                targets: "500 pros, 5K jobs",
                color: "bg-[#0F6E56]",
              },
              {
                phase: "Phase 2",
                city: "Cairo",
                targets: "3K pros, 50K jobs",
                color: "bg-[#143D33]",
              },
              {
                phase: "Phase 3",
                city: "Dubai / Doha",
                targets: "8K pros, 150K jobs",
                color: "bg-[#143D33]",
              },
              {
                phase: "Phase 4",
                city: "Riyadh",
                targets: "20K pros, 400K jobs",
                color: "bg-[#0F6E56]",
              },
            ].map((p, i) => (
              <RevealSection key={p.city} delay={i * 0.1}>
                <div className="relative">
                  <div
                    className={`${p.color} rounded-2xl p-6 text-white h-full`}
                  >
                    <p className="text-[#EF9F27] font-bold text-sm mb-2">
                      {p.phase}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{p.city}</h3>
                    <p className="text-white/70 text-sm">{p.targets}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        <RevealSection delay={0.3}>
          <div className="mt-16 bg-[#F8F7F5] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#0A1F1A] mb-6">
              Supply-First Growth Levers
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Handshake, label: "Trade Unions" },
                { icon: Award, label: "Vocational Schools" },
                { icon: Users, label: "Social Media Leads" },
                { icon: Gift, label: "Referral Bonuses" },
                { icon: Calendar, label: "Seasonal Campaigns" },
                { icon: MapPin, label: "Corporate Partners" },
              ].map((lever) => (
                <div
                  key={lever.label}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl"
                >
                  <lever.icon className="w-6 h-6 text-[#0F6E56]" />
                  <span className="text-xs font-medium text-gray-700 text-center">
                    {lever.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ──────────── Gift icon helper ──────────── */
function Gift({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

/* ──────────── Team ──────────── */
function Team() {
  return (
    <section id="team" className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <Badge className="bg-[#0F6E56]/10 text-[#0F6E56] mb-4">Team</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1F1A] mb-4">
              Vision Leadership
            </h2>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <RevealSection>
            <Card className="card-hover h-full border-l-4 border-l-[#EF9F27]">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#0F6E56] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1F1A] mb-1">
                      Co-Founder & Product Lead
                    </h3>
                    <p className="text-[#0F6E56] font-medium text-sm mb-3">
                      Full-Stack Engineer & MENA Market Expert
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Deep technical architecture expertise and entrepreneurial
                      vision. Responsible for product strategy, technical
                      oversight, and market expansion planning across the MENA
                      region.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={0.1}>
            <Card className="card-hover h-full border-l-4 border-l-[#0F6E56]">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#EF9F27] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1F1A] mb-1">
                      Co-Founder & Marketing Lead
                    </h3>
                    <p className="text-[#EF9F27] font-medium text-sm mb-3">
                      Certified Social Media Marketer
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Experience managing 9-branch international marketing
                      campaigns across multiple countries. Leads all growth,
                      brand strategy, and user acquisition with cutting-edge
                      Meta and platform strategies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealSection>
        </div>

        <RevealSection>
          <div className="bg-gradient-to-r from-[#0A1F1A] to-[#143D33] rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  The Ask: Internal Venture Partnership
                </h3>
                <p className="text-white/70 mb-6">
                  Resource allocation from Acksession in exchange for a share of
                  commercial success. Not a funding round — a true partnership.
                </p>
                <div className="space-y-3">
                  {[
                    "Dedicated development team (Flutter, React, .NET)",
                    "Cloud infrastructure (AWS/Azure)",
                    "Marketing budget for launch and for growth campaigns",
                    "Deep marketing involvement, led by proven expertise",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-[#EF9F27] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#EF9F27]">
                  What We Bring
                </h4>
                <div className="space-y-3">
                  {[
                    "Vision and deep MENA domain expertise",
                    "Proven marketing execution track record",
                    "Ongoing product supervision and roadmap",
                    "Revenue share model participation",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <ChevronRight className="w-5 h-5 text-[#0F6E56] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ──────────── Contact / CTA ──────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 gradient-teal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealSection>
          <img
            src="/warsha_logo.png"
            alt="Warsha"
            className="w-24 h-24 mx-auto mb-8"
          />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Build Warsha Together
          </h2>
          <p className="text-xl text-[#EF9F27] mb-4">حِرفي بضغطة زر</p>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            The Arab world's first home services marketplace. Proven model.
            Untapped market. The right team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#EF9F27] hover:bg-[#d98b1c] text-[#0A1F1A] font-bold px-10 rounded-xl"
            >
              <Handshake className="w-5 h-5 mr-2" /> Partner With Us
            </Button>
          </div>
          <p className="text-white/40 text-sm mt-8">
            Presented to Acksession Internal Investment Committee | 2026
          </p>
        </RevealSection>
      </div>
    </section>
  );
}

/* ──────────── Footer ──────────── */
function Footer() {
  return (
    <footer className="bg-[#0A1F1A] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/warsha_logo.png" alt="Warsha" className="h-10 w-10" />
            <span className="text-white font-bold text-xl">
              WARSHA<span className="text-[#EF9F27]">PRO</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="text-white/50 text-sm">وَرشَة</span>
          </div>
          <p className="text-white/30 text-sm">
            Skilled. Trusted. At your door. — The Arab World's First
            Arabic-Native Home Services Marketplace
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ──────────── App ──────────── */
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MetricsBar />
      <MarketOpportunity />
      <Product />
      <BusinessModel />
      <MarketAnalysis />
      <Technology />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
