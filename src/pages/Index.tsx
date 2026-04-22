import { ArrowRight, Leaf, Mail, MapPin, Phone, Send, Sprout, Star, Users } from "lucide-react";

const productCategories = [
  {
    title: "Eco Goods",
    text: "[Описание экологичных товаров для дома и ежедневного использования здесь].",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Natural Cosmetics",
    text: "[Текст о натуральной косметике, составе и преимуществах здесь].",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Healthy Food",
    text: "[Описание полезного питания, натуральных продуктов и ассортимента здесь].",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
];

const steps = ["Register", "Learn", "Sell", "Grow"];

const levels = [
  ["Partner", "[Бонус за первые продажи и стартовое обучение здесь]"],
  ["Senior Partner", "[Повышенный процент и поддержка команды здесь]"],
  ["Leader", "[Командный бонус и доступ к закрытым материалам здесь]"],
  ["Director", "[Бонус глубины структуры и премии за оборот здесь]"],
  ["Eco Ambassador", "[Премиальные бонусы, признание и стратегические возможности здесь]"],
];

const testimonials = [
  ["Айгуль, партнёр", "[История успеха партнёра: рост дохода, обучение и экологичная миссия здесь]."],
  ["Руслан, лидер команды", "[Отзыв о развитии сети, поддержке наставников и продуктах здесь]."],
  ["Мадина, консультант", "[Личный результат, первые продажи и впечатления клиентов здесь]."],
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-soft-gradient text-foreground">
      <section className="relative min-h-[92vh] px-6 py-6 md:px-10">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--hero-foreground))_1px,transparent_0)] [background-size:34px_34px]" />
        <div className="absolute right-8 top-28 hidden h-44 w-44 rounded-full border border-hero-foreground/20 md:block animate-float-leaf" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-hero-foreground/20 bg-hero-foreground/10 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3 text-hero-foreground">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-hero-foreground/15"><Leaf className="h-5 w-5" /></span>
            <span className="font-display text-xl font-bold">Green Eco Mall</span>
          </div>
          <a href="#contact" className="hidden rounded-full bg-hero-foreground px-5 py-2.5 text-sm font-bold text-primary shadow-premium transition-transform hover:-translate-y-0.5 md:inline-flex">Join Us</a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 pb-14 pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-28">
          <div className="text-hero-foreground animate-reveal-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-foreground/25 bg-hero-foreground/10 px-4 py-2 text-sm font-semibold backdrop-blur-md"><Sprout className="h-4 w-4" /> Eco-friendly MLM company</p>
            <h1 className="eco-text-balance max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">Green Eco Mall — бизнес с заботой о природе</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-hero-foreground/85 md:text-xl">[Короткое описание компании, преимуществ партнёрства и экологичной миссии на русском языке здесь].</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-hero-foreground px-7 py-4 font-extrabold text-primary shadow-premium transition-all hover:-translate-y-1 hover:shadow-card">Join Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href="#products" className="inline-flex items-center justify-center rounded-full border border-hero-foreground/35 px-7 py-4 font-extrabold text-hero-foreground backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-hero-foreground/10">View Products</a>
            </div>
          </div>
          <div className="relative animate-float-leaf">
            <div className="rounded-[2rem] border border-hero-foreground/25 bg-hero-foreground/15 p-5 shadow-premium backdrop-blur-lg">
              <img className="h-[430px] w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80" alt="Eco products and green plants" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-reveal mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-10">
        <div>
          <p className="font-bold uppercase tracking-[0.24em] text-primary">About</p>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Миссия, ценности и основатель</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl bg-card p-8 shadow-card transition-transform hover:-translate-y-1">
            <Leaf className="mb-5 h-9 w-9 text-primary" />
            <h3 className="text-2xl font-bold">Eco Values</h3>
            <p className="mt-4 leading-7 text-muted-foreground">[Текст о миссии Green Eco Mall, экологичных принципах и устойчивом потреблении здесь].</p>
          </article>
          <article className="rounded-3xl bg-card p-8 shadow-card transition-transform hover:-translate-y-1">
            <Users className="mb-5 h-9 w-9 text-primary" />
            <h3 className="text-2xl font-bold">Founder</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Основатель: <strong className="text-foreground">Baetov Asan Zhusupbekovich</strong>. [Информация об основателе, видении и развитии компании здесь].</p>
          </article>
        </div>
      </section>

      <section id="products" className="section-reveal bg-cream px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">Продукты для осознанного образа жизни</h2>
            <p className="max-w-md text-muted-foreground">[Краткий текст о продуктовой линейке и стандартах качества здесь].</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {productCategories.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-3xl bg-card shadow-card">
                <img className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt={`${item.title} placeholder`} loading="lazy" />
                <div className="p-7">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal mx-auto max-w-7xl px-6 py-24 md:px-10">
        <h2 className="text-center text-4xl font-bold md:text-5xl">How it works</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-border bg-card p-7 text-center shadow-card transition-all hover:-translate-y-1 hover:border-primary/40">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">{index + 1}</span>
              <h3 className="mt-5 text-2xl font-bold">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">[Описание шага «{step}» здесь].</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-reveal bg-hero px-6 py-24 text-hero-foreground md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">Career / Levels</h2>
          <p className="mt-4 max-w-2xl text-hero-foreground/75">[Вводный текст о партнёрской программе, росте команды и бонусах здесь].</p>
          <div className="mt-12 grid gap-4">
            {levels.map(([name, bonus], index) => (
              <article key={name} className="grid gap-4 rounded-2xl border border-hero-foreground/15 bg-hero-foreground/10 p-6 backdrop-blur-md transition-transform hover:translate-x-1 md:grid-cols-[90px_1fr_1.4fr] md:items-center">
                <span className="font-display text-3xl font-bold text-secondary">0{index + 1}</span>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-hero-foreground/78">{bonus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal mx-auto max-w-7xl px-6 py-24 md:px-10">
        <h2 className="text-4xl font-bold md:text-5xl">Testimonials</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map(([name, quote]) => (
            <article key={name} className="rounded-3xl bg-card p-8 shadow-card">
              <div className="mb-5 flex gap-1 text-secondary"><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /></div>
              <p className="leading-7 text-muted-foreground">{quote}</p>
              <h3 className="mt-6 text-xl font-bold">{name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-reveal bg-cream px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Свяжитесь с Green Eco Mall</h2>
            <p className="mt-5 leading-7 text-muted-foreground">[Текст приглашения для будущих партнёров и клиентов здесь].</p>
            <div className="mt-8 grid gap-4">
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> [Телефон здесь]</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> [Email здесь]</p>
              <p className="flex items-center gap-3"><Send className="h-5 w-5 text-primary" /> [Telegram здесь]</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> [Город / адрес здесь]</p>
            </div>
          </div>
          <form className="rounded-3xl bg-card p-6 shadow-premium md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-input bg-background px-5 py-4 outline-none transition focus:ring-2 focus:ring-ring" placeholder="[Имя здесь]" />
              <input className="rounded-2xl border border-input bg-background px-5 py-4 outline-none transition focus:ring-2 focus:ring-ring" placeholder="[Телефон здесь]" />
            </div>
            <input className="mt-4 w-full rounded-2xl border border-input bg-background px-5 py-4 outline-none transition focus:ring-2 focus:ring-ring" placeholder="[Email здесь]" />
            <textarea className="mt-4 min-h-36 w-full rounded-2xl border border-input bg-background px-5 py-4 outline-none transition focus:ring-2 focus:ring-ring" placeholder="[Сообщение здесь]" />
            <button type="button" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-extrabold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-card">Join Us <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>

      <footer className="bg-hero px-6 py-10 text-hero-foreground md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3"><Leaf className="h-6 w-6" /><span className="font-display text-2xl font-bold">Green Eco Mall</span></div>
          <p className="text-sm text-hero-foreground/70">© 2026 Green Eco Mall. [Все права защищены].</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
