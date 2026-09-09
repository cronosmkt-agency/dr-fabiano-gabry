import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Smile,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  Stethoscope,
  Award,
  Car,
  Wrench,
  GraduationCap,
  ShoppingBag,
  Dumbbell,
  Flame,
  Activity,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: ClientLandingPage,
});

export default function ClientLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [name, setName] = useState("");
  const [selectedService, setSelectedService] = useState("Implante Dent\u00e1rio Unit\u00e1rio ou M\u00faltiplo");
  const [notes, setNotes] = useState("");

  const phone = "552136410859";
  const phoneDisplay = "(21) 3641-0859";
  const address = "Av. Lúcio Meira, 14 - Sala 306 (Edifício sobre o Armazém do Grão - Rodoviária), Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sexta das 08:30 às 19:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial e gostaria de mais informações e atendimento."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pelo site oficial e gostaria de atendimento.

*Nome:* ${name || "Não informado"}
*Interesse / Serviço:* ${selectedService}
${notes ? `*Observações:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const services = [["Implantes Dentários Guiados", "Reposição de dentes unitários ou múltiplos com implantes de osseointegração rápida.", "Implantes"], ["Prótese Protocolo Fixo", "O fim da dentadura solta: arco completo de dentes fixos para você comer o que quiser.", "Reabilitação"], ["Lentes de Contato Dental & Facetas", "Transformação milimétrica de formato, cor e alinhamento do sorriso.", "Estética"], ["Medicina Integrada (Dra. Kássia)", "Acompanhamento clínico geral e endócrino associado para sua saúde plena.", "Saúde Global"]];
  const features = [["Award", "Cirurgias Minimamente Invasivas", "Técnicas modernas com conforto absoluto e pós-operatório rápido."], ["Smile", "Reabilitação Estética Total", "Lentes de porcelana e facetas com harmonia e naturalidade perfeitas."], ["HeartHandshake", "Equipe Multidisciplinar Integrada", "Suporte médico com a Dra. Kássia para o equilíbrio da sua saúde geral."]];
  const testimonials = [["Nanda K", "A recepcionista Rejane é maravilhosa, competente, dedicada e a Dra Kássia e o Dr Fabiano são perfeitos! Hiper recomendo sempre, atendimento nota mil!", 5], ["Michel Gottschalk", "Atendimento ótimo desde a recepção até o atendimento com o dentista. Você já é muito bem recebido desde a chegada. Parabéns a toda equipe!", 5], ["Renata", "O consultório é ótimo, a sala de espera é muito acolhedora, tem café, água, mate... A secretária é muito eficiente e nos atende com todo carinho!", 5]];
  const stats = [["372 ★", "Avaliações 5 Estrelas"], ["Sala 306", "Armazém do Grão"], ["100%", "Satisfação dos Pacientes"]];
  const faq = [["Colocar implante dói?", "Não! A cirurgia é realizada sob anestesia local moderna, de forma rápida e indolor. A grande maioria dos pacientes relata pós-operatório muito mais tranquilo do que uma extração simples."], ["O que é o Protocolo sobre Implantes?", "É uma estrutura com todos os dentes fixos instalada sobre 4 a 6 implantes. Ela não solta na boca, devolvendo a mastigação firme de carnes e alimentos duros."], ["Onde fica o consultório?", "Na Av. Lúcio Meira, 14 - Sala 306 (prédio do Armazém do Grão, próximo à Rodoviária na Várzea)."]];
  const simulatorOptions = ["Implante Dentário Unitário ou Múltiplo", "Prótese Protocolo (Dentadura Fixa)", "Lentes de Contato Dental / Facetas", "Avaliação Geral e Check-up Odontológico"];
  const reassuranceItems = [["Cirurgia Guiada Sem Dor", "Tecnologia de precisão milimétrica que dispensa cortes extensos e agiliza a cicatrização."], ["Fim da Dentadura Móvel", "Prótese protocolo fixada sobre implantes para firmeza total ao mastigar."], ["Recepção VIP com a Rejane", "Sala de espera aconchegante com café especial, mate gelado e acolhimento."]];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md">
              <span className="text-xl">🦷</span>
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                Dr. Fabiano Gabry Soluções Odontológicas
              </span>
              <span className="block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Implantes & Reabilitação Oral
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#diferenciais" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Diferenciais
            </a>
            <a href="#servicos" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Sobre
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Avaliações
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              Dúvidas
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Fale no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-100 bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700">
                Diferenciais
              </a>
              <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700">
                Serviços
              </a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700">
                Sobre
              </a>
              <a href="#avaliacoes" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700">
                Avaliações
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700">
                Dúvidas Frequentes
              </a>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3 text-center font-semibold text-white"
              >
                <MessageCircle className="h-5 w-5" />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-12 pb-20 md:pt-20 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[550px] w-[550px] rounded-full bg-slate-200/50 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[-10%] h-[400px] w-[400px] rounded-full bg-slate-100/70 blur-[130px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Text Left */}
            <div className="text-center lg:col-span-7 lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-100/80 px-4 py-1.5 text-xs font-semibold text-slate-800">
                <ShieldCheck className="h-4 w-4 text-slate-700" />
                ⭐ 5,0 com Mais de 370 Avaliações · Líder em Teresópolis · Ed. Armazém do Grão
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Recupere o prazer de sorrir e mastigar com dentes fixos 
                <span className="text-slate-700 underline decoration-slate-300 decoration-wavy underline-offset-8">
                  e o padrão de excelência número 1 da cidade.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Implantes dentários guiados sem dor, prótese protocolo fixa, estética do sorriso e atendimento médico integrado com a Dra. Kássia e a recepcionista Rejane.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/20 transition-all hover:bg-slate-800 active:scale-95 sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto"
                >
                  Ver Especialidades
                </a>
              </div>

              {/* Social Proof Pill */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-800">
                  5,0 Estrelas no Google
                </span>
                <span className="text-sm text-slate-500">· 372 avaliações — Maior índice de aprovação da cidade</span>
              </div>
            </div>

            {/* Reassurance Card Right */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 backdrop-blur-xl">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <span className="text-2xl">🦷</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                      Líder em Implantes
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">Dr. Fabiano Gabry</h3>
                    <p className="text-sm text-slate-500">Av. Lúcio Meira, 14/306 · Várzea</p>
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  {reassuranceItems.map(([title, desc]: [string, string], idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <p className="text-sm text-slate-700">
                        <strong>{title}:</strong> {desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-slate-700" />
                    <div>
                      <p className="text-xs font-medium text-slate-500">Atendimento e Contato</p>
                      <p className="text-sm font-bold text-slate-900">{phoneDisplay}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="border-y border-slate-200 bg-slate-50/70 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {stats.map(([num, label]: [string, string], idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{num}</span>
                <span className="mt-1 text-sm font-medium text-slate-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PILARES / DIFERENCIAIS */}
      <section id="diferenciais" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Por que nos escolher
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Por Que Somos a Clínica Mais Elogiada
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map(([iconName, title, desc]: [string, string, string], idx: number) => (
              <div
                key={idx}
                className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVIÇOS & ESPECIALIDADES */}
      <section id="servicos" className="bg-slate-50/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Nossa Atuação
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tratamentos de Alto Impacto
            </p>
            <p className="mt-4 text-base text-slate-600">
              Soluções odontológicas definitivas para transformar sua autoestima e mastigação
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, desc, tag]: [string, string, string], idx: number) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
              >
                <div>
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {tag}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de mais informações sobre: ${title}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-slate-600"
                  >
                    Consultar Detalhes <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOBRE / O ESPAÇO */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200/60 p-10 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-4xl shadow-md">
                  🦷
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">Dr. Fabiano Gabry Soluções Odontológicas</h3>
                <p className="mt-2 text-sm font-medium text-slate-600">Av. Lúcio Meira, 14 - Sala 306 (Edifício sobre o Armazém do Grão - Rodoviária), Várzea, Teresópolis - RJ</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                  <Clock className="h-4 w-4 text-slate-500" />
                  Segunda a Sexta das 08:30 às 19:00
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Conheça Nossa Estrutura
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Estrutura VIP no Armazém do Grão
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Localizada na Av. Lúcio Meira, 14 (Sala 306, sobre o Armazém do Grão na Rodoviária), nossa clínica foi concebida para oferecer uma experiência de bem-estar do início ao fim.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Nossa recepção, sob o cuidado atencioso da Rejane, conta com café gourmet, mate gelado e uma atmosfera que faz você se sentir em casa antes do seu procedimento.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <MessageCircle className="h-4 w-4" />
                  Tirar Dúvidas Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROVA SOCIAL / AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-slate-50/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Depoimentos Reais
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Histórias de Pacientes Transformados
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(([name, text, stars]: [string, string, number], idx: number) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">
                    "{text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                    {name.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-slate-900">{name}</span>
                  <span className="text-xs text-slate-400">· Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SIMULADOR INTERATIVO / AGENDAMENTO WHATSAPP */}
      <section id="contato" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl sm:p-12">
            <div className="text-center">
              <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-700">
                Atendimento Rápido
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Agende sua Avaliação com a Rejane
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Selecione seu tratamento de interesse e converse no WhatsApp:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700">Seu Nome Completo:</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Tratamento Desejado:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                >
                  {simulatorOptions.map((opt: string, idx: number) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">Observações (Opcional):</label>
                <textarea
                  rows={3}
                  placeholder="Alguma dúvida específica ou melhor dia e horário para seu atendimento?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800 active:scale-95"
              >
                <Send className="h-5 w-5" />
                Enviar Mensagem para o WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. FAQ SANFONADO */}
      <section id="faq" className="bg-slate-50/80 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Tire Suas Dúvidas
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Perguntas Frequentes
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faq.map(([q, a]: [string, string], idx: number) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-50/50"
                >
                  <span>{q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🦷</span>
                <span className="text-lg font-bold text-slate-900">Dr. Fabiano Gabry Soluções Odontológicas</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Implantes guiados sem dor, dentadura fixa protocolo e odontologia de alto padrão com mais de 370 avaliações 5 estrelas no Armazém do Grão/Rodoviária.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Endereço</h4>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">Av. Lúcio Meira, 14 - Sala 306 (Edifício sobre o Armazém do Grão - Rodoviária), Várzea, Teresópolis - RJ</p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Horários</h4>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">Segunda a Sexta das 08:30 às 19:00</p>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Contato Direto</h4>
              <p className="mt-3 text-xs text-slate-600">Telefone / WhatsApp:</p>
              <p className="text-sm font-bold text-slate-900">{phoneDisplay}</p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Dr. Fabiano Gabry Soluções Odontológicas · Todos os direitos reservados · Desenvolvimento e Performance por Cronos Agency
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={defaultWhatsAppLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all hover:scale-110 active:scale-95"
        aria-label="WhatsApp direto"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
