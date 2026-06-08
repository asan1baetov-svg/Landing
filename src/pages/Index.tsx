import { useState } from "react";
import { ArrowRight, Award, BarChart3, Globe2, Leaf, Menu, Phone, ShoppingBag, Trophy, Users, Wallet, X } from "lucide-react";

const navLinks = [
  ["Биз жөнүндө", "#about"],
  ["Өнүмдөр", "#marketplace"],
  ["Кантип иштейт", "#how"],
  ["Деңгээлдер", "#levels"],
  ["Өнөктөштөр", "#partners"],
  ["Байланыш", "#contact"],
];

const stats = [
  ["Маркетплейс экосистемасы", "24/7"],
  ["Өнүм категориялары", "100+"],
  ["Командалык мүмкүнчүлүк", "~80 000$"],
];

const steps = [
  ["Чакыруу шилтемесин алуу", "Ишенимдүү өнөктөштөн жеке чакыруу алып, Green Eco Mall marketplace экосистемасына кошуласыз."],
  ["Катталуу жана кабинет ачуу", "Жеке кабинетиңиз ачылып, өнүмдөрдү сатып алуу, сатуу жана командаңыздын өсүшүн көзөмөлдөө мүмкүнчүлүгү берилет."],
  ["Маркетплейс аркылуу жүгүртүү түзүү", "6 активдүү адамдан турган команда менен реалдуу өнүмдөрдүн сатылышын күчөтүп, жалпы товар жүгүртүүнү өстүрөсүз."],
  ["Бонустарды алуу", "Командалык товар жүгүртүү өскөн сайын система бонустарды эсептеп, кийинки деңгээлдерди ачат."],
];

const levels = [
  ["1 - Долбоор", "Incubator", "Entry: 10 000 сом", "Киреше: ~40 000 сом", "25%"],
  ["2 - Долбоор", "Incubator Manager", "Бекер Продукция: ~44 000 сом", "Киреше: 100 000 сом", "50%"],
  ["3 - Долбоор", "Авто", "Бекер Продукция: ~176 000 сом", "Prize: 🚗 Автомобиль ~12 000$", "75%"],
  ["4 - Долбоор", "Квартира", "Бекер Продукция: ~10 000$", "Prize: 🏠 Квартира ~80 000$ + Акционер статусу", "100%"],
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hero-foreground/10 bg-hero/95 text-hero-foreground backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
          <a href="#top" className="flex items-center gap-2" aria-label="Green Eco Mall">
            <img src="/logo.png" alt="Green Eco Mall" className="h-9 w-9 rounded-full bg-white object-contain p-0.5" />
            <span className="font-display text-lg font-bold md:text-xl">Green Eco Mall</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold lg:flex">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition-colors hover:text-accent">{label}</a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a href="https://greenecomall.com/login" className="rounded-full border border-hero-foreground/40 px-4 py-2 text-sm font-extrabold text-hero-foreground transition-all hover:-translate-y-0.5 hover:bg-hero-foreground/10">Войти</a>
            <a href="https://greenecomall.com/register" className="rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-accent-foreground transition-transform hover:-translate-y-0.5">Регистрация</a>
          </div>

          <button
            className="flex items-center justify-center rounded-lg p-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-hero-foreground/10 bg-hero/98 px-4 pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold transition-colors hover:bg-hero-foreground/10"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <a href="https://greenecomall.com/login" className="rounded-full border border-hero-foreground/40 py-3 text-center text-sm font-extrabold transition hover:bg-hero-foreground/10">Войти</a>
              <a href="https://greenecomall.com/register" className="rounded-full bg-accent py-3 text-center text-sm font-extrabold text-accent-foreground">Регистрация</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-hero-gradient px-4 pb-16 pt-28 text-hero-foreground md:px-8 md:pb-28 md:pt-40">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--hero-foreground))_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="absolute -right-24 top-28 h-72 w-72 rounded-full border border-hero-foreground/20 animate-float-leaf" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-reveal-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-hero-foreground/20 bg-hero-foreground/10 px-3 py-1.5 text-xs font-bold backdrop-blur-md sm:text-sm">
              <Globe2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> greenecomall.com
            </p>
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              GREEN ECO MALL — чоң мүмкүнчүлүктөр экосистемасы
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-hero-foreground/84 sm:text-lg sm:leading-8">
              Эко өнүмдөрдүн ички маркетплейс платформасы. Бул жерде катышуучулар реалдуу товар жүгүртүүнү түзүп, командасынын өсүшүнөн жана сатуу активдүүлүгүнөн бонустарды ала алышат.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-hero-foreground px-6 py-3.5 font-extrabold text-primary shadow-premium transition-all hover:-translate-y-1 sm:px-7 sm:py-4">
                Кошулуу <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-full border border-hero-foreground/35 px-6 py-3.5 font-extrabold text-hero-foreground transition-all hover:-translate-y-1 hover:bg-hero-foreground/10 sm:px-7 sm:py-4">
                Кантип иштейт?
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-hero-foreground/15 bg-hero-foreground/10 p-3 backdrop-blur-md sm:p-4">
                  <p className="font-display text-lg font-bold sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[10px] font-semibold text-hero-foreground/70 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden animate-float-leaf lg:block">
            <div className="rounded-[2rem] border border-hero-foreground/20 bg-hero-foreground/10 p-5 shadow-premium backdrop-blur-md">
              <div className="grid min-h-[400px] place-items-center rounded-[1.5rem] bg-soft-gradient p-8 text-center text-foreground">
                <Leaf className="mx-auto h-20 w-20 text-primary" />
                <h2 className="mt-6 text-4xl font-bold">Eco Network Platform</h2>
                <p className="mt-4 max-w-sm text-muted-foreground">Ички маркетплейс, эко өнүмдөр каталогу, командалык товар жүгүртүү, бонус эсептөө жана өнөктөштөрдү масштабдуу өнүктүрүү системасы.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-reveal mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="text-center">
          <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border-8 border-leaf-soft bg-cream shadow-premium sm:h-[200px] sm:w-[200px]">
            <Users className="h-16 w-16 text-primary sm:h-20 sm:w-20" />
          </div>
          <p className="mx-auto mt-5 max-w-xs font-bold text-primary">Баетов Асан Жусупбекович, Негиздөөчү</p>
        </div>
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-primary">Биз жөнүндө</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl">Ишенимге, эко баалуулуктарга жана чоң командалык өсүүгө курулган платформа</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Green Eco Mall — катышуучуларды бир чоң marketplace экосистемасына бириктирген заманбап network platform. Компаниянын миссиясы — сапаттуу эко өнүмдөрдү кеңири жайылтуу, ар бир өнөктөшкө реалдуу сатуу инфраструктурасын берүү жана күчтүү командалык өсүү маданиятын түзүү.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section-reveal bg-soft-gradient px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">Кантип иштейт</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <article key={title} className="rounded-3xl bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-premium">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">{index + 1}</span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section id="levels" className="section-reveal mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Долбоорлор</h2>
          <p className="max-w-md text-muted-foreground">Ар бир долбоор — маркетплейс ичиндеги товар жүгүртүүнүн, өнөктөштүн лидерлигинин жана командасынын масштабын көрсөтөт.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {levels.map(([level, name, entry, reward, progress]) => (
            <article key={name} className="rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent">
              <p className="text-sm font-extrabold text-primary">{level}</p>
              <h3 className="mt-2 text-xl font-bold">{name}</h3>
              <p className="mt-4 font-semibold text-muted-foreground">{entry}</p>
              <p className="mt-3 font-bold text-foreground">{reward}</p>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-accent" style={{ width: progress }} />
              </div>
              <p className="mt-2 text-xs font-bold text-muted-foreground">Progress: {progress}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Bonuses */}
      <section className="section-reveal bg-hero px-4 py-16 text-hero-foreground md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Бонустар</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {bonuses.map(([Icon, title, text]) => (
              <article key={String(title)} className="rounded-3xl border border-hero-foreground/15 bg-hero-foreground/10 p-6 backdrop-blur-md transition-transform hover:-translate-y-1 sm:p-8">
                <Icon className="h-9 w-9 text-accent sm:h-10 sm:w-10" />
                <h3 className="mt-4 text-xl font-bold sm:mt-5 sm:text-2xl">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-hero-foreground/75 sm:text-base sm:leading-7">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section id="marketplace" className="section-reveal mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-primary">Өнүмдөр</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl">Ички marketplace</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Green Eco Mall ичинде маркетплейс — платформанын негизги жүрөгү. Ар бир активдүү катышуучу эко товарларды, табигый косметиканы жана ден соолукка пайдалуу продукцияларды сатып алып, сата алат.
          </p>
        </div>
        <div className="rounded-[2rem] bg-soft-gradient p-6 shadow-premium sm:p-8">
          <ShoppingBag className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
          <h3 className="mt-5 text-2xl font-bold sm:text-3xl">Eco Products Hub</h3>
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">Эко товарлар, табигый косметика, пайдалуу азыктар жана күнүмдүк керектелүүчү продукциялар үчүн күчтүү ички соода мейкиндиги.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-reveal bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Пикирлер</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map(([name, city, quote]) => (
              <article key={name} className="rounded-3xl bg-card p-6 shadow-card sm:p-8">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-leaf-soft text-primary"><Award className="h-6 w-6" /></div>
                <h3 className="mt-4 text-lg font-bold sm:text-xl">{name}</h3>
                <p className="text-sm font-semibold text-primary">{city}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">"{quote}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-reveal mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-primary">Байланыш</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl">Биз менен байланышыңыз</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Green Eco Mall маркетплейс экосистемасына кошулуп, реалдуу өнүмдөр, күчтүү команда жана товар жүгүртүүгө негизделген мүмкүнчүлүктөр менен өсүңүз.
          </p>
          <div className="mt-7 grid gap-4 text-muted-foreground">
            <p className="flex items-center gap-3"><Globe2 className="h-5 w-5 shrink-0 text-primary" /> greenecomall.com</p>
            <a href="https://wa.me/996554071975" className="flex items-center gap-3 transition-colors hover:text-primary">
              <Phone className="h-5 w-5 shrink-0 text-primary" /> WhatsApp: +996 554 071 975
            </a>
            <a href="tel:+996554071975" className="flex items-center gap-3 transition-colors hover:text-primary">
              <Phone className="h-5 w-5 shrink-0 text-primary" /> +996 554 071 975
            </a>
          </div>
        </div>
        <form className="rounded-3xl bg-card p-5 shadow-premium sm:p-8">
          <input className="w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-ring sm:px-5 sm:py-4 sm:text-base" placeholder="Аты-жөнү" />
          <input className="mt-3 w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-ring sm:mt-4 sm:px-5 sm:py-4 sm:text-base" placeholder="Телефон" />
          <textarea className="mt-3 min-h-32 w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-ring sm:mt-4 sm:min-h-36 sm:px-5 sm:py-4 sm:text-base" placeholder="Кабар" />
          <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-extrabold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-card sm:mt-5 sm:py-4">
            Жөнөтүү <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </section>

      {/* Partners */}
      <section id="partners" className="section-reveal bg-soft-gradient px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-primary">Өнөктөштөр</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl">Биздин өнөктөштөр</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Green Eco Mall платформасы ишенимдүү бренддер жана компаниялар менен кызматташат — сапаттуу эко өнүмдөрдү жана финансылык маданиятты биргелешип жайылтуу үчүн.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* GreenLeaf */}
            <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-2 hover:shadow-premium">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605615923013-f26c14fe7155?w=800&q=80&auto=format&fit=crop"
                  alt="GreenLeaf eco products"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">ECO BRAND</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">GreenLeaf</h3>
                <p className="mt-1 text-sm font-semibold text-primary">Эко өнүмдөр өндүрүүчүсү</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Табигый ингредиенттерден даярдалган эко продукциянын алдыңкы өндүрүүчүсү. GreenLeaf өнүмдөрү Green Eco Mall маркетплейсинин негизги каталогун түзөт.
                </p>
              </div>
            </article>

            {/* Бальзамы Короткова */}
            <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-2 hover:shadow-premium">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=800&q=80&auto=format&fit=crop"
                  alt="Natural herbs balsam"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">NATURAL</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Бальзамы Короткова</h3>
                <p className="mt-1 text-sm font-semibold text-primary">Табигый бальзамдар</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Дарылык чөптөрдөн жасалган табигый бальзамдардын белгилүү бренди. Ден соолукту чыңдоочу продукциясы менен өнөктөштөрдүн ичинде өзгөчө орунду ээлейт.
                </p>
              </div>
            </article>

            {/* Smart & Rich */}
            <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-2 hover:shadow-premium sm:col-span-2 lg:col-span-1">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521012012373-6a85bade18da?w=800&q=80&auto=format&fit=crop"
                  alt="Smart and Rich coffee tea"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">COFFEE & TEA</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Smart & Rich</h3>
                <p className="mt-1 text-sm font-semibold text-primary">Кофе жана чай продукциясы</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Smart & Rich — сапаттуу кофе жана чай продукциясынын бренди. Green Eco Mall маркетплейси аркылуу жаратылыш ичимдиктерин өнөктөштөргө жана кардарларга жеткирет.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hero px-4 py-8 text-hero-foreground md:px-8 md:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Green Eco Mall" className="h-8 w-8 rounded-full bg-white object-contain p-0.5 sm:h-9 sm:w-9" />
            <span className="font-display text-xl font-bold sm:text-2xl">Green Eco Mall</span>
          </div>
          <p className="text-xs text-hero-foreground/70 sm:text-sm">© 2026 Green Eco Mall. Бардык укуктар корголгон.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
