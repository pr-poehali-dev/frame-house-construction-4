import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BeforeAfter from '@/components/BeforeAfter';
import { useReveal } from '@/hooks/useReveal';

const BEFORE_IMG = 'https://cdn.poehali.dev/projects/754de67a-0731-4bca-a69e-90ca97ce60ed/files/8642e07a-a3d2-45c3-bbd1-a3b678d2a1e6.jpg';
const AFTER_IMG = 'https://cdn.poehali.dev/projects/754de67a-0731-4bca-a69e-90ca97ce60ed/files/288acaf7-bebb-4bcf-8d13-788e893ee566.jpg';

const NAV = [
  { id: 'about', label: 'О компании' },
  { id: 'services', label: 'Услуги' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'stages', label: 'Этапы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Ruler', title: 'Проектирование', text: 'Инженерные изыскания, геология грунта, архитектурный и конструктивный разделы.' },
  { icon: 'Layers', title: 'Фундамент', text: 'Плита, лента, свайно-винтовой или УШП с полной гидроизоляцией.' },
  { icon: 'Home', title: 'Силовой каркас', text: 'Тепловой контур: обвязка, стены из сухой доски, перекрытия и кровля.' },
  { icon: 'PaintRoller', title: 'Фасад и утепление', text: 'Базальтовая вата, ветро-гидрозащита, сайдинг, блок-хаус, штукатурка.' },
  { icon: 'DoorOpen', title: 'Окна и двери', text: 'ПВХ и алюминиевые окна, патио-двери и утеплённые входные группы по ГОСТ.' },
  { icon: 'Wrench', title: 'Инженерные сети', text: 'Электрика, сантехника, отопление, вентиляция и рекуперация «под ключ».' },
];

const STAGES = [
  { n: '01', title: 'Подготовка и проект', text: 'Изыскания, проектирование, расчистка и планировка участка, временные коммуникации.' },
  { n: '02', title: 'Фундамент', text: 'Земляные работы, опалубка, армирование, бетонирование и гидроизоляция.' },
  { n: '03', title: 'Силовой каркас', text: 'Нижняя обвязка, сборка стен, перекрытия, стропильная система и кровля.' },
  { n: '04', title: 'Фасад и утепление', text: 'Теплоизоляция, мембраны с проклейкой швов, наружная отделка фасада.' },
  { n: '05', title: 'Окна и коммуникации', text: 'Остекление, монтаж электрики, сантехники, отопления и вентиляции.' },
  { n: '06', title: 'Внутренняя отделка', text: 'Черновая обшивка, стяжка, чистовые покрытия, покраска, межкомнатные двери.' },
];

const STATS = [
  { v: '7', l: 'этапов полного цикла' },
  { v: '100%', l: 'работа по договору' },
  { v: 'МО', l: 'вся Московская область' },
  { v: '12', l: 'месяцев гарантии' },
];

const Index = () => {
  useReveal();
  const [menu, setMenu] = useState(false);

  const scrollTo = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Icon name="Home" size={18} className="text-accent-foreground" />
            </span>
            КАРКАС<span className="text-accent">МО</span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Рассчитать проект
          </Button>
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            <Icon name={menu ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menu && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <div className="container py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-2 font-medium">{n.label}</button>
              ))}
              <Button onClick={() => scrollTo('contacts')} className="mt-2 bg-accent text-accent-foreground">Рассчитать проект</Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 noise-bg opacity-[0.4] pointer-events-none" />
        <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Подрядчик и субподрядчик · Московская область</span>
          </div>
          <h1 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-5xl sm:text-7xl lg:text-8xl max-w-5xl animate-fade-in">
            Каркасные дома<br />
            <span className="text-accent">под ключ</span> — <span className="text-stroke">честно</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Полный цикл строительно-монтажных работ: от геологии грунта до чистовой отделки. Для бизнеса и частных заказчиков.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" onClick={() => scrollTo('contacts')} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base h-14 px-8">
              Обсудить проект <Icon name="ArrowRight" size={18} className="ml-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('portfolio')} className="font-semibold text-base h-14 px-8 border-2">
              Смотреть работы
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {STATS.map((s) => (
              <div key={s.l} className="bg-card p-6">
                <div className="font-display font-bold text-4xl text-accent">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-4 bg-primary text-primary-foreground overflow-hidden border-y border-primary">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {['Проектирование', 'Фундамент УШП', 'Тепловой контур', 'Кровля', 'Утепление', 'Инженерные сети', 'Отделка под ключ'].map((t) => (
                <span key={t} className="flex items-center font-display uppercase text-lg tracking-wide">
                  <span className="mx-6">{t}</span>
                  <Icon name="Hexagon" size={14} className="text-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="font-display uppercase text-sm tracking-widest text-accent">О компании</span>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight mt-4">
              Строим каркас, которому доверяют
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              ИП Лазарев Иван Сергеевич — строительно-монтажные работы полного цикла для возведения каркасных жилых домов в Московской области. Работаем как подрядчик и субподрядчик для бизнеса и частных заказчиков.
            </p>
            <div className="mt-8 space-y-4">
              {['Официальный договор и прозрачная смета', 'Сухая доска и базальтовое утепление', 'Полный цикл: проект → фундамент → отделка'].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <Icon name="Check" size={14} className="text-accent" />
                  </span>
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-xl bg-secondary text-sm text-muted-foreground">
              ИНН 232105497807 · ОГРНИП 326619600051486
            </div>
          </div>
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img src={AFTER_IMG} alt="Каркасный дом" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-secondary/50">
        <div className="container">
          <div className="reveal max-w-2xl">
            <span className="font-display uppercase text-sm tracking-widest text-accent">Услуги</span>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight mt-4">
              Строительно-монтажные работы
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="reveal group bg-card rounded-2xl p-7 border border-border hover:border-accent hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: `${i * 40}ms` }}>
                <span className="w-12 h-12 rounded-xl bg-primary group-hover:bg-accent flex items-center justify-center transition-colors">
                  <Icon name={s.icon} size={22} className="text-primary-foreground" />
                </span>
                <h3 className="font-display font-semibold text-xl mt-5">{s.title}</h3>
                <p className="text-muted-foreground mt-2">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24">
        <div className="container">
          <div className="reveal max-w-2xl">
            <span className="font-display uppercase text-sm tracking-widest text-accent">Портфолио</span>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight mt-4">
              До и после
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Потяните ползунок, чтобы увидеть, как пустой участок превращается в готовый дом.
            </p>
          </div>
          <div className="mt-12 reveal max-w-4xl mx-auto">
            <BeforeAfter before={BEFORE_IMG} after={AFTER_IMG} beforeLabel="Участок" afterLabel="Готовый дом" />
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{ icon: 'MapPin', t: 'Одинцовский р-н' }, { icon: 'Ruler', t: '124 м² · 2 этажа' }, { icon: 'CalendarCheck', t: 'Срок 4 месяца' }].map((c) => (
              <div key={c.t} className="reveal flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
                <Icon name={c.icon} size={20} className="text-accent" />
                <span className="font-medium text-sm">{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section id="stages" className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="reveal max-w-2xl">
            <span className="font-display uppercase text-sm tracking-widest text-accent">Этапы работ</span>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight mt-4">
              От участка до новоселья
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STAGES.map((s, i) => (
              <div key={s.n} className="reveal border-t-2 border-accent pt-5" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="font-display font-bold text-5xl text-accent/40">{s.n}</span>
                <h3 className="font-display font-semibold text-xl mt-3">{s.title}</h3>
                <p className="text-primary-foreground/60 mt-2 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container">
          <div className="reveal relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-16">
            <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-display uppercase text-sm tracking-widest text-accent">Контакты</span>
                <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight mt-4">
                  Обсудим ваш дом?
                </h2>
                <p className="mt-5 text-muted-foreground text-lg">
                  Оставьте заявку — рассчитаем смету и предложим оптимальное решение по фундаменту и каркасу.
                </p>
                <div className="mt-8 space-y-4">
                  <a href="tel:+70000000000" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Icon name="Phone" size={18} className="group-hover:text-accent-foreground" />
                    </span>
                    <span className="font-medium">+7 (000) 000-00-00</span>
                  </a>
                  <a href="mailto:info@karkasmo.ru" className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Icon name="Mail" size={18} className="group-hover:text-accent-foreground" />
                    </span>
                    <span className="font-medium">info@karkasmo.ru</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Icon name="MapPin" size={18} />
                    </span>
                    <span className="font-medium">Московская область</span>
                  </div>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-secondary/60 rounded-2xl p-6">
                <div>
                  <label className="text-sm font-medium">Имя</label>
                  <input className="mt-1.5 w-full h-11 rounded-lg border border-border bg-background px-4 outline-none focus:border-accent transition-colors" placeholder="Иван" />
                </div>
                <div>
                  <label className="text-sm font-medium">Телефон</label>
                  <input className="mt-1.5 w-full h-11 rounded-lg border border-border bg-background px-4 outline-none focus:border-accent transition-colors" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium">Комментарий</label>
                  <textarea rows={3} className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 outline-none focus:border-accent transition-colors resize-none" placeholder="Расскажите о проекте" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="font-display font-bold text-foreground text-lg">КАРКАС<span className="text-accent">МО</span></div>
          <div className="text-center">ИП Лазарев Иван Сергеевич · ИНН 232105497807 · ОГРНИП 326619600051486</div>
          <div>© 2026 Все права защищены</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;