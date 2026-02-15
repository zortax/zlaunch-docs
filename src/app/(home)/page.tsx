import Link from 'next/link';
import {
  Rocket,
  Calculator,
  AppWindow,
  Smile,
  ClipboardList,
  Search,
  BotMessageSquare,
  Palette,
  Zap,
  Settings,
  ArrowRight,
  Github,
  BookOpen,
  Download,
} from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Applications',
    description: 'Fuzzy search and launch any desktop app instantly.',
    screenshot: '/img/modules-applications.webp',
  },
  {
    icon: AppWindow,
    title: 'Window Switcher',
    description: 'See all open windows and focus any of them.',
    screenshot: '/img/modules-windows.webp',
  },
  {
    icon: Calculator,
    title: 'Calculator',
    description: 'Math expressions with functions and unit conversions.',
    screenshot: '/img/modules-calculator.webp',
  },
  {
    icon: Smile,
    title: 'Emoji Picker',
    description: 'Searchable emoji grid, copy with Enter.',
    screenshot: '/img/modules-emojis.webp',
  },
  {
    icon: ClipboardList,
    title: 'Clipboard History',
    description: 'Browse and re-paste anything you copied.',
    screenshot: '/img/modules-clipboard.webp',
  },
  {
    icon: BotMessageSquare,
    title: 'AI Chat',
    description: 'Query Ollama, Gemini, OpenAI, or OpenRouter.',
    screenshot: '/img/modules-ai.webp',
  },
  {
    icon: Search,
    title: 'Web Search',
    description: 'Configurable providers with trigger prefixes.',
    screenshot: '/img/modules-search.webp',
  },
  {
    icon: Palette,
    title: '15 Themes',
    description: 'Bundled color schemes with hot-reload and custom theme support.',
    screenshot: null,
  },
];

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  return (
    <div className="group rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:bg-fd-accent/50 h-full">
      <div className="mb-3 flex items-center gap-3">
        <feature.icon className="size-5 text-fd-primary" />
        <h3 className="font-semibold text-fd-foreground">{feature.title}</h3>
      </div>
      <p className="text-sm text-fd-muted-foreground mb-4">
        {feature.description}
      </p>
      {feature.screenshot && (
        <img
          src={feature.screenshot}
          alt={feature.title}
          className="rounded-lg border border-fd-border w-full"
        />
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero + Highlights: fill the viewport below the nav */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--fd-nav-height,3.5rem))] w-full max-w-4xl px-6 py-12">
        <div className="flex flex-col items-center text-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fd-foreground mb-4">
            A fast, all-in-one launcher for Wayland
          </h1>
          <p className="text-lg text-fd-muted-foreground max-w-2xl mb-8">
            Apps, windows, calculator, emoji, clipboard, web search, and AI —
            all from one keyboard shortcut. Zero config required.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
            >
              <ArrowRight className="size-4" />
              Get Started
            </Link>
            <a
              href="https://github.com/zortax/zlaunch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </div>
          <img
            src="/img/hero.webp"
            alt="zlaunch in combined mode"
            className="rounded-xl border border-fd-border shadow-xl w-full max-w-3xl"
          />
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl pt-12">
          <div className="flex flex-col items-center text-center p-6">
            <Zap className="size-8 text-fd-primary mb-3" />
            <h3 className="font-semibold text-fd-foreground mb-1">Instant</h3>
            <p className="text-sm text-fd-muted-foreground">
              Daemon architecture — no startup delay, ever.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Settings className="size-8 text-fd-primary mb-3" />
            <h3 className="font-semibold text-fd-foreground mb-1">
              Zero Config
            </h3>
            <p className="text-sm text-fd-muted-foreground">
              Sensible defaults. Looks good and works out of the box.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Palette className="size-8 text-fd-primary mb-3" />
            <h3 className="font-semibold text-fd-foreground mb-1">Themeable</h3>
            <p className="text-sm text-fd-muted-foreground">
              15 bundled themes, or create your own with TOML.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-screen px-6 sm:px-10 lg:px-16 pb-16">
        <h2 className="text-2xl font-bold text-fd-foreground text-center mb-2">
          Everything you need, built in
        </h2>
        <p className="text-fd-muted-foreground text-center mb-10 max-w-xl mx-auto">
          More useful than a basic app list out of the box — no plugins or
          scripts required.
        </p>
        <div className="flex flex-wrap justify-center gap-5 max-w-[104rem] mx-auto">
          {features.map((f) => (
            <div key={f.title} className="w-full md:basis-[calc(50%-0.625rem)] xl:basis-[calc(33.333%-0.875rem)] shrink-0 grow-0">
              <FeatureCard feature={f} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl px-6 pb-20">
        <div className="rounded-xl border border-fd-border bg-fd-card p-8 text-center">
          <h2 className="text-xl font-bold text-fd-foreground mb-2">
            Ready to try it?
          </h2>
          <p className="text-fd-muted-foreground mb-6">
            Install via Nix flake, AUR, or build from source.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
            >
              <Download className="size-4" />
              Installation Guide
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
            >
              <BookOpen className="size-4" />
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
