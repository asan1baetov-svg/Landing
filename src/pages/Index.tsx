import { ArrowRight, Award, BarChart3, Globe2, Leaf, Menu, MessageCircle, Phone, Send, ShoppingBag, Trophy, Users, Wallet } from "lucide-react";

const navLinks = [
  ["Биз жөнүндө", "#about"],
  ["Кантип иштейт", "#how"],
  ["Деңгээлдер", "#levels"],
  ["Өнүмдөр", "#marketplace"],
  ["Байланыш", "#contact"],
];

const stats = [
  ["Өсүп жаткан коомчулук", "1 000+"],
  ["Карьералык деңгээл", "4"],
  ["Макс. мүмкүнчүлүк", "~80 000$"],
];

const steps = [
  ["Чакыруу шилтемесин алуу", "Ишенимдүү өнөктөштөн жеке чакыруу алып, Green Eco Mall экосистемасына кошуласыз."],
  ["Катталуу жана төлөм", "Каттоо Finik QR аркылуу тез жана ыңгайлуу жүргүзүлүп, жеке кабинетиңиз ачылат."],
  ["Командаңды куру", "6 активдүү адамдан турган команда түзүп, товар жүгүртүүнү жана өнөктөштүк даракты өстүрөсүз."],
  ["Бонустарды алуу", "Система командалык жүгүртүүнү автоматтык эсептеп, бонустарды жана кийинки деңгээлди ачат."],
];

const levels = [
  ["Level 1", "Incubator", "Entry: 10 000 сом", "Max income: ~40 000 сом", "25%"],
  ["Level 2", "Incubator Manager", "Gift products: ~44 000 сом", "Bonus: 100 000 сом", "50%"],
  ["Level 3", "Авто", "Gift products: ~176 000 сом", "Prize: 🚗 Автомобиль ~12 000$", "75%"],
  ["Level 4", "Квартира", "Gift products: ~10 000$", "Prize: 🏠 Квартира ~80 000$ + Акционер статусу", "100%"],
];

const bonuses = [
  [Wallet, "💰 Реферал бонусу", "Түз чакыруудан 12.5%, экинчи линиядан 6.25% — команда өсүшү менен киреше да кеңейет."],
  [Trophy, "🏆 Этап бонусу", "Ар бир 3-этап үчүн белгиленген сыйлык — туруктуу прогресс үчүн күчтүү мотивация."],
  [BarChart3, "📈 Дивиденд", "Платформанын жалпы жүгүртүүсүнөн 6.25% — Акционер статусуна жеткен өнөктөштөр үчүн."],
];

const testimonials = [
  ["Айжан", "Бишкек", "Green Eco Mall мага жөн гана сатуу эмес, чоң команда менен өсүү маданиятын көрсөттү."],
  ["Нурбек", "Ош", "Платформадагы система түшүнүктүү: команда түзөсүң, жүгүртүү өсөт, бонус автоматтык эсептелет."],
  ["Элиза", "Каракол", "Эко өнүмдөр, Finik төлөмү жана деңгээлдик карьера — баары заманбап жана ишенимдүү көрүнөт."],
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hero-foreground/10 bg-hero/92 text-hero-foreground backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Green Eco Mall башкы бет">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground"><Leaf className="h-5 w-5" /></span>
            <span className="font-display text-xl font-bold">Green Eco Mall</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {navLinks.map(([label, href]) => <a key={label} href={href} className="transition-colors hover:text-accent">{label}</a>)}
          </div>
          <a href="#contact" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-extrabold text-accent-foreground transition-transform hover:-translate-y-0.5 md:inline-flex">Кошулуу</a>
          <Menu className="h-6 w-6 lg:hidden" aria-hidden="true" />
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden bg-hero-gradient px-5 pb-20 pt-32 text-hero-foreground md:px-8 md:pb-28 md:pt-40">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--hero-foreground))_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="absolute -right-24 top-28 h-72 w-72 rounded-full border border-hero-foreground/20 animate-float-leaf" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-reveal-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-foreground/20 bg-hero-foreground/10 px-4 py-2 text-sm font-bold backdrop-blur-md"><Globe2 className="h-4 w-4" /> greenecomall.kg</p>
            <h1 className="eco-text-balance max-w-4xl text-5xl font-extrabold leading-[1.03] md:text-7xl">Жашыл келечек — сенин мүмкүнчүлүгүң</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-hero-foreground/84">Green Eco Mall — экологиялык өнүмдөрдү, күчтүү өнөктөштүк системаны жана командалык жүгүртүүдөн бонус алуу мүмкүнчүлүгүн бириктирген масштабдуу network marketing платформа.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-hero-foreground px-7 py-4 font-extrabold text-primary shadow-premium transition-all hover:-translate-y-1">Кошулуу <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href="#how" className="inline-flex items-center justify-center rounded-full border border-hero-foreground/35 px-7 py-4 font-extrabold text-hero-foreground transition-all hover:-translate-y-1 hover:bg-hero-foreground/10">Кантип иштейт?</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-hero-foreground/15 bg-hero-foreground/10 p-4 backdrop-blur-md">
                  <p className="font-display text-2xl font-bold">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-hero-foreground/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-float-leaf">
            <div className="rounded-[2rem] border border-hero-foreground/20 bg-hero-foreground/10 p-5 shadow-premium backdrop-blur-md">
              <div className="grid min-h-[430px] place-items-center rounded-[1.5rem] bg-soft-gradient p-8 text-center text-foreground">
                <Leaf className="mx-auto h-20 w-20 text-primary" />
                <h2 className="mt-6 text-4xl font-bold">Eco Network Platform</h2>
                <p className="mt-4 max-w-sm text-muted-foreground">Ички marketplace, Finik төлөмү, автоматтык дарак, бонус эсептөө жана өнөктөштөрдү масштабдуу өнүктүрүү системасы.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-reveal mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="text-center">
          <div className="mx-auto grid h-[200px] w-[200px] place-items-center rounded-full border-8 border-leaf-soft bg-cream shadow-premium">
            <Users className="h-20 w-20 text-primary" />
          </div>
          <p className="mx-auto mt-5 max-w-xs font-bold text-primary">Баетов Асан Жусупбекович, Негиздөөчү</p>
        </div>
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-primary">Биз жөнүндө</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Ишенимге, эко баалуулуктарга жана чоң командалык өсүүгө курулган платформа</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Green Eco Mall — катышуучуларды бир чоң экосистемага бириктирген заманбап network platform. Компаниянын миссиясы — сапаттуу эко өнүмдөрдү жайылтуу, адамдарга жаңы киреше булагын ачуу жана күчтүү өнөктөштүк маданиятын түзүү. Кирүү чакыруу шилтемеси аркылуу жүргүзүлөт, төлөм Finik payment system аркылуу кабыл алынат, ал эми система жаңы мүчөлөрдү даракка автоматтык жайгаштырып, команданын товар жүгүртүүсүнө жараша бонустарды эсептейт.</p>
        </div>
      </section>

      <section id="how" className="section-reveal bg-soft-gradient px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold md:text-5xl">Кантип иштейт</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <article key={title} className="rounded-3xl bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">{index + 1}</span>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="levels" className="section-reveal mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-primary">Деңгээлдер</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Level System</h2>
          </div>
          <p className="max-w-md text-muted-foreground">Ар бир деңгээл — өнөктөштүн лидерлигин, командасынын күчүн жана платформадагы товар жүгүртүүнүн масштабын көрсөтөт.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {levels.map(([level, name, entry, reward, progress]) => (
            <article key={name} className="rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent">
              <p className="text-sm font-extrabold text-primary">{level}</p>
              <h3 className="mt-2 text-2xl font-bold">{name}</h3>
              <p className="mt-5 font-semibold text-muted-foreground">{entry}</p>
              <p className="mt-3 min-h-14 font-bold text-foreground">{reward}</p>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-accent" style={{ width: progress }} />
              </div>
              <p className="mt-2 text-xs font-bold text-muted-foreground">Progress indicator: {progress}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-reveal bg-hero px-5 py-24 text-hero-foreground md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold md:text-5xl">Bonus Types</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bonuses.map(([Icon, title, text]) => (
              <article key={String(title)} className="rounded-3xl border border-hero-foreground/15 bg-hero-foreground/10 p-8 backdrop-blur-md transition-transform hover:-translate-y-1">
                <Icon className="h-10 w-10 text-accent" />
                <h3 className="mt-5 text-2xl font-bold">{title as string}</h3>
                <p className="mt-4 leading-7 text-hero-foreground/75">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="marketplace" className="section-reveal mx-auto grid max-w-7xl gap-10 px-5 py-24 md:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-primary">Өнүмдөр</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Ички marketplace</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Green Eco Mall ичинде ар бир активдүү катышуучу эко өнүмдөрдү сатып алып жана сата алат. Төлөмдөр Finik аркылуу ыңгайлуу жүргүзүлөт, ал эми marketplace командадагы товар жүгүртүүнү өстүрүүгө жардам берет.</p>
        </div>
        <div className="rounded-[2rem] bg-soft-gradient p-8 shadow-premium">
          <ShoppingBag className="h-16 w-16 text-primary" />
          <h3 className="mt-6 text-3xl font-bold">Eco Products Hub</h3>
          <p className="mt-4 text-muted-foreground">[Бул жерде marketplace категориялары жана өнүмдөр боюнча кошумча текст болот.]</p>
        </div>
      </section>

      <section className="section-reveal bg-cream px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold md:text-5xl">Пикирлер</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map(([name, city, quote]) => (
              <article key={name} className="rounded-3xl bg-card p-8 shadow-card">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-leaf-soft text-primary"><Award className="h-7 w-7" /></div>
                <h3 className="mt-5 text-xl font-bold">{name}</h3>
                <p className="text-sm font-semibold text-primary">{city}</p>
                <p className="mt-5 leading-7 text-muted-foreground">“{quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-reveal mx-auto grid max-w-7xl gap-10 px-5 py-24 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-primary">Байланыш</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Green Eco Mall менен байланышыңыз</h2>
          <div className="mt-8 grid gap-4 text-muted-foreground">
            <p className="flex items-center gap-3"><Globe2 className="h-5 w-5 text-primary" /> greenecomall.kg</p>
            <p className="flex items-center gap-3"><Send className="h-5 w-5 text-primary" /> Telegram: [шилтеме]</p>
            <p className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-primary" /> Instagram: [шилтеме]</p>
            <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> WhatsApp: [номер]</p>
          </div>
        </div>
        <form className="rounded-3xl bg-card p-6 shadow-premium md:p-8">
          <input className="w-full rounded-2xl border border-input bg-background px-5 py-4 outline-none transition focus:ring-2 focus:ring-ring" placeholder="Аты-жөнү" />
          <input className="mt-4 w-full rounded-2xl border border-input bg-background px-5 py-4 outline-none transition focus:ring-2 focus:ring-ring" placeholder="Телефон" />
          <textarea className="mt-4 min-h-36 w-full rounded-2xl border border-input bg-background px-5 py-4 outline-none transition focus:ring-2 focus:ring-ring" placeholder="Кабар" />
          <button type="button" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-extrabold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-card">Жөнөтүү <ArrowRight className="h-4 w-4" /></button>
        </form>
      </section>

      <footer className="bg-hero px-5 py-10 text-hero-foreground md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3"><Leaf className="h-6 w-6" /><span className="font-display text-2xl font-bold">Green Eco Mall</span></div>
          <p className="text-sm text-hero-foreground/70">© 2025 Green Eco Mall. Бардык укуктар корголгон.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;