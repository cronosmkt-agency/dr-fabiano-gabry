import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Award,
  HeartHandshake,
  Smile,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  Calendar,
  CheckCircle2,
  Stethoscope,
  Coffee,
  Check,
  AlertCircle,
  Zap,
  Users
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: FabianoGabryLandingPage,
});

export default function FabianoGabryLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [patientName, setPatientName] = useState("");
  const [treatmentInterest, setTreatmentInterest] = useState("Prótese Protocolo Fixo (Substituir Dentadura Móvel)");
  const [currentSituation, setCurrentSituation] = useState("Uso prótese móvel (dentadura/ponte)");
  const [preferredShift, setPreferredShift] = useState("Manhã");
  const [notes, setNotes] = useState("");

  const phone = "552136410859";
  const phoneDisplay = "(21) 3641-0859";
  const address = "Av. Lúcio Meira, 14 - Sala 306 (Sobre o Armazém do Grão - Rodoviária), Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sexta, das 08:30 às 19:00 (Com hora marcada)";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Rejane! Vim pelo site oficial do Dr. Fabiano Gabry e gostaria de agendar uma avaliação.

*Nome do Paciente:* ${patientName || "Não informado"}
*Tratamento Desejado:* ${treatmentInterest}
*Situação Atual:* ${currentSituation}
*Turno de Preferência:* ${preferredShift}
${notes ? `*Observações adicionais:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá, Rejane! Vim pelo site oficial do Dr. Fabiano Gabry e gostaria de agendar uma consulta de avaliação odontológica."
  )}`;

  const highTicketTreatments = [
    {
      title: "Prótese Protocolo sobre Implantes",
      tag: "O Fim da Dentadura Móvel",
      icon: Smile,
      desc: "Estrutura completa com dentes fixos instalada com segurança sobre implantes. Devolve 100% da força mastigatória para você comer carnes, maçãs e castanhas sem medo de a prótese soltar ou machucar a gengiva."
    },
    {
      title: "Implantes Dentários Unitários & Múltiplos",
      tag: "Tecnologia Guiada Sem Dor",
      icon: Award,
      desc: "Reposição de dentes perdidos com parafusos de titânio de osseointegração rápida. Cirurgia minimamente invasiva, sem cortes traumáticos e com pós-operatório rápido e confortável."
    },
    {
      title: "Lentes de Contato Dental & Facetas de Porcelana",
      tag: "Estética & Harmonia Facial",
      icon: Sparkles,
      desc: "Lâminas ultrafinas de cerâmica que corrigem cor, formato, espaçamentos (diastemas) e pequenas imperfeições do sorriso com acabamento natural e alta durabilidade."
    },
    {
      title: "Medicina & Endocrinologia Integrada (Dra. Kássia)",
      tag: "Saúde Global do Paciente",
      icon: Stethoscope,
      desc: "Atendimento médico associado no mesmo espaço clínico. Acompanhamento do metabolismo, suporte hormonal, regulação glicêmica e preparo fisiológico ideal para procedimentos cirúrgicos e longevidade."
    },
    {
      title: "Cirurgia Oral & Extração de Sisos",
      tag: "Planejamento Tomográfico",
      icon: ShieldCheck,
      desc: "Remoção segura de sisos inclusos, impactados ou com proximidade do nervo alveolar, com planejamento tridimensional, sedação consciente e cuidados pós-operatórios humanizados."
    },
    {
      title: "Reabilitação Oral & Manutenção Preventiva",
      tag: "Longevidade do Sorriso",
      icon: HeartHandshake,
      desc: "Tratamento de bruxismo, ajuste oclusal, profilaxia periódica e controle periodontal para assegurar que seus implantes e restaurações durem décadas com saúde plena."
    }
  ];

  const experienceHighlights = [
    {
      title: "Recepção Humanizada com a Rejane",
      desc: "A secretária Rejane é constantemente elogiada nas avaliações pelo atendimento doce, prestativo e pontualidade impecável."
    },
    {
      title: "Sala de Espera Conforto VIP",
      desc: "Ambiente climatizado e acolhedor preparado com café especial, água mineral e mate gelado para seu total bem-estar."
    },
    {
      title: "Cirurgias Guiadas Minimamente Invasivas",
      desc: "Planejamento computadorizado que dispensa incisões extensas, reduz o sangramento e torna o pós-operatório praticamente indolor."
    },
    {
      title: "Localização Central Privilegiada",
      desc: "Em frente à Rodoviária de Teresópolis, no edifício sobre o Armazém do Grão, com fácil acesso de ônibus ou carro."
    }
  ];

  const testimonials = [
    {
      name: "Nanda K",
      tag: "Avaliação Verificada • Google Maps",
      stars: 5,
      content: "A recepcionista Rejane é maravilhosa... atenciosa, competente, dedicada e mega profissional e a Dra. Kássia e o Dr. Fabiano são perfeitos! Hiper recomendo sempre... atendimento nota mil! Parabéns pela competência, carinho e atendimento!"
    },
    {
      name: "Michel Gottschalk",
      tag: "Avaliação Verificada • Google Maps",
      stars: 5,
      content: "Atendimento ótimo desde a recepção até o atendimento com o dentista. Você já é muito bem recebido desde o momento em que chega à recepção até o seu atendimento. Parabéns a todos os envolvidos pela excelência!"
    },
    {
      name: "Renata",
      tag: "Avaliação Verificada • Google Maps",
      stars: 5,
      content: "O consultório é ótimo, a sala de espera é muito acolhedora, tem café, água, mate, etc. A secretária é muito eficiente e nos atende com todo carinho! Tratamento de implante com resultado maravilhoso."
    }
  ];

  const faqs = [
    {
      q: "A cirurgia de implante dentário dói?",
      a: "Não! O procedimento é realizado com anestésicos modernos de alta eficácia e técnicas cirúrgicas minimamente invasivas guiadas. A imensa maioria dos nossos pacientes relata que a colocação de um implante é consideravelmente mais confortável e tranquila do que uma extração dentária comum."
    },
    {
      q: "O que é a Prótese Protocolo sobre Implantes?",
      a: "É a técnica definitiva para substituir dentaduras ou pontes móveis. São instalados de 4 a 6 implantes no maxilar ou na mandíbula, onde é fixada uma barra de porcelana ou resina com todos os dentes do arco. A prótese não solta, não cai ao falar e não tem céu da boca, devolvendo a sensação de dentes 100% naturais."
    },
    {
      q: "Quem tem perda óssea ainda pode fazer implantes?",
      a: "Sim. Realizamos uma tomografia prévia no planejamento. Em casos com reabsorção óssea, o Dr. Fabiano Gabry avalia a utilização de implantes curtos, técnicas com inclinação estratégica ou enxertos ósseos biocompatíveis para garantir a fixação segura do dente."
    },
    {
      q: "Como funciona o atendimento integrado com a Dra. Kássia?",
      a: "A Dra. Kássia atua na clínica médica e endocrinologia. Essa integração permite avaliar com precisão taxas de glicemia, metabolismo ósseo (vitamina D e cálcio), tireoide e saúde geral do paciente, criando condições ideais para a cicatrização dos implantes e promovendo a saúde global do organismo."
    },
    {
      q: "Onde fica localizado o consultório?",
      a: "Estamos no Edifício sobre o Armazém do Grão, na Av. Lúcio Meira, 14 - Sala 306, no coração da Várzea, em frente à Rodoviária de Teresópolis. O prédio conta com elevador e estrutura com acessibilidade."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-amber-100 selection:text-amber-900 pb-24 lg:pb-0">
      {/* 1. NAVBAR - HEADER LIMPA SEM ÍCONE */}
      <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Apenas o nome do profissional, sem ícone ao lado */}
          <a href="#" className="group flex flex-col justify-center">
            <span className="text-xl font-bold tracking-tight text-slate-900 transition group-hover:text-amber-700 sm:text-2xl">
              Dr. Fabiano Gabry
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-amber-700 uppercase sm:text-xs">
              Soluções Odontológicas & Implantes • Dra. Kássia
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#diferenciais" className="text-sm font-medium text-slate-600 transition hover:text-amber-700">
              Diferenciais
            </a>
            <a href="#tratamentos" className="text-sm font-medium text-slate-600 transition hover:text-amber-700">
              Implantes & Protocolo
            </a>
            <a href="#medicina" className="text-sm font-medium text-slate-600 transition hover:text-amber-700">
              Dra. Kássia
            </a>
            <a href="#consultorio" className="text-sm font-medium text-slate-600 transition hover:text-amber-700">
              O Consultório
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-slate-600 transition hover:text-amber-700">
              Depoimentos
            </a>
            <a href="#triagem" className="text-sm font-medium text-slate-600 transition hover:text-amber-700">
              Agendamento
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 transition hover:text-amber-700">
              Dúvidas
            </a>
          </nav>

          {/* Direct WhatsApp CTA Button */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A192F] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-amber-400" />
              <span>Falar com a Rejane</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-3 pb-6 lg:hidden">
            <div className="flex flex-col gap-3">
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
              >
                Diferenciais da Clínica
              </a>
              <a
                href="#tratamentos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
              >
                Implantes & Protocolo Fixo
              </a>
              <a
                href="#medicina"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
              >
                Medicina Integrada (Dra. Kássia)
              </a>
              <a
                href="#consultorio"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
              >
                Consultório (Sala 306)
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
              >
                372 Avaliações no Google
              </a>
              <a
                href="#triagem"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
              >
                Agendamento Pré-Filtrado
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
              >
                Perguntas Frequentes
              </a>
              <div className="mt-2 pt-2 border-t border-slate-100">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A192F] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <MessageCircle className="h-4 w-4 text-amber-400" />
                  <span>Falar no WhatsApp com a Rejane</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION COM MÁXIMA AUTORIDADE DE TERESÓPOLIS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF7EE] to-[#F8FAFC] pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Texto Principal */}
            <div className="lg:col-span-7">
              {/* Badge Google Maps Recordista */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-950 shadow-sm">
                <div className="flex text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span>Líder Absoluto: 372 Avaliações 5,0 Estrelas no Google</span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
                Recupere o prazer de sorrir e mastigar com{" "}
                <span className="text-amber-700">dentes fixos</span> e conforto absoluto.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Referência máxima em <strong>Implantes Dentários</strong> e <strong>Prótese Protocolo</strong> (o fim definitivo da dentadura móvel) em Teresópolis. Estrutura odontológica premium com o <strong>Dr. Fabiano Gabry</strong>, suporte médico integrado com a <strong>Dra. Kássia</strong> e atendimento acolhedor da <strong>Rejane</strong> na Av. Lúcio Meira (sobre o Armazém do Grão).
              </p>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#triagem"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A192F] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 active:scale-95"
                >
                  <Calendar className="h-4 w-4 text-amber-400" />
                  <span>Agendar Avaliação de Implantes</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50/50 px-6 py-3.5 text-sm font-semibold text-amber-950 shadow-sm transition hover:bg-amber-100 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-amber-600" />
                  <span>Falar com a Rejane na Recepção</span>
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-amber-700">372 ★</span>
                  <span className="text-xs text-slate-600 font-medium">Recorde 5 Estrelas Google</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-amber-700">Dentes Fixos</span>
                  <span className="text-xs text-slate-600 font-medium">Fim da Dentadura Móvel</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-amber-700">Sala 306</span>
                  <span className="text-xs text-slate-600 font-medium">Armazém do Grão</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-amber-700">Multidisciplinar</span>
                  <span className="text-xs text-slate-600 font-medium">Dr. Fabiano & Dra. Kássia</span>
                </div>
              </div>
            </div>

            {/* Card Visual Destacado */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-amber-200/80 bg-white p-6 shadow-xl shadow-amber-900/5 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                  <span>Excelência em Reabilitação Oral</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Por que somos a clínica mais bem avaliada de Teresópolis:
                </h3>

                <ul className="mt-5 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-amber-100 p-1 text-amber-800">
                      <Smile className="h-4 w-4" />
                    </div>
                    <span><strong>Prótese Protocolo Fixo:</strong> substitua a ponte móvel por dentes fixos e firmes em poucos dias, com conforto total ao mastigar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-amber-100 p-1 text-amber-800">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span><strong>Cirurgia Guiada sem Cortes Excessivos:</strong> tecnologia que permite colocar o implante com precisão milimétrica e rápida recuperação.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-amber-100 p-1 text-amber-800">
                      <Stethoscope className="h-4 w-4" />
                    </div>
                    <span><strong>Medicina Integrada (Dra. Kássia):</strong> controle endócrino e metabólico para cicatrização perfeita e saúde plena.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-amber-100 p-1 text-amber-800">
                      <Coffee className="h-4 w-4" />
                    </div>
                    <span><strong>Ambiente VIP com a Rejane:</strong> sala de espera acolhedora com café especial, mate e atendimento personalizado.</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "Atendimento nota mil! A secretária Rejane nos atende com todo carinho, tem café, mate e água, e o Dr. Fabiano e a Dra. Kássia são perfeitos!"
                  </p>
                  <p className="mt-2 text-right text-xs font-semibold text-amber-800">
                    — Nanda K & Renata (372 Avaliações no Google)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DIFERENCIAIS DA EXPERIÊNCIA CLÍNICA */}
      <section id="diferenciais" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              O Padrão Ouro da Odontologia Serrana
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Cuidado Completo da Recepção ao Sorriso Final
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Entenda por que centenas de famílias de Teresópolis confiam seus sorrisos e saúde ao nosso consultório.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experienceHighlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRATAMENTOS DE MAIOR TICKET & ESPECIALIDADES */}
      <section id="tratamentos" className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              Soluções Especializadas
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Implantes, Prótese Protocolo & Odontologia Avançada
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Procedimentos de alta precisão que devolvem a estética natural, a fala límpida e a força mastigatória.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highTicketTreatments.map((treatment, idx) => {
              const IconComp = treatment.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-900">
                        {treatment.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{treatment.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{treatment.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href="#triagem"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900"
                    >
                      <span>Solicitar avaliação</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO CLÍNICA INTEGRADA: DRA. KÁSSIA */}
      <section id="medicina" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-r from-amber-50/40 via-white to-sky-50/30 p-8 lg:p-12 shadow-md">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="text-xs font-bold tracking-widest text-amber-800 uppercase">
                  Diferencial Multidisciplinar Exclusivo
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Dra. Kássia — Medicina & Endocrinologia Integrada
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  A boca não está isolada do restante do corpo. Na nossa clínica, a <strong>Dra. Kássia</strong> oferece suporte 
                  médico aos pacientes que necessitam de regulação da glicemia, controle da osteoporose, equilíbrio 
                  hormonal e saúde metabólica antes, durante e após os procedimentos de implantes.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">
                    Otimização da Cicatrização Óssea
                  </span>
                  <span className="rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">
                    Manejo de Pacientes Diabéticos
                  </span>
                  <span className="rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">
                    Check-up Metabólico Completo
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A192F] text-amber-400 shadow-md">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900">Atendimento Médico & Odontológico</h4>
                <p className="mt-1 text-xs text-slate-500">Tudo no mesmo espaço no Armazém do Grão</p>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-amber-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Consultar Horários da Dra. Kássia</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSULTÓRIO & LOCALIZAÇÃO (ARMAZÉM DO GRÃO - SALA 306) */}
      <section id="consultorio" className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                Fácil Acesso no Centro da Várzea
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Consultório na Av. Lúcio Meira (Sala 306)
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Localizado no edifício sobre o <strong>Armazém do Grão</strong>, exatamente em frente à Rodoviária de Teresópolis. 
                Um ponto de encontro com facilidade de estacionamento, elevador e a recepção acolhedora da Rejane:
              </p>

              <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-amber-100 p-1.5 text-amber-800">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span><strong>Endereço:</strong> Av. Lúcio Meira, 14 - Sala 306 - Várzea, Teresópolis - RJ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-amber-100 p-1.5 text-amber-800">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span><strong>Horários:</strong> Segunda a Sexta, das 08:30 às 19:00 (Com hora marcada)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-amber-100 p-1.5 text-amber-800">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span><strong>Recepção / WhatsApp:</strong> {phoneDisplay} (Falar com a Rejane)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-amber-100 p-1.5 text-amber-800">
                    <Coffee className="h-4 w-4" />
                  </div>
                  <span><strong>Sala VIP:</strong> Café expresso, mate da casa e água aromatizada</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Ver Rotas no Google Maps</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-xs font-semibold text-amber-950 transition hover:bg-amber-100"
                >
                  <MessageCircle className="h-4 w-4 text-amber-700" />
                  <span>Falar no WhatsApp: (21) 3641-0859</span>
                </a>
              </div>
            </div>

            {/* Mapa Embutido Interativo */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-md">
                <iframe
                  title="Localização Dr Fabiano Gabry - Av Lúcio Meira 14"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8423405763914!2d-42.97157812383567!3d-22.416200221461905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b457636e053f%3A0x4a7eb82e887d2ef1!2sAv.%20L%C3%BAcio%20Meira%2C%2014%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025953-003!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROVA SOCIAL: O MAIOR VOLUME DE ELOGIOS DO GOOGLE */}
      <section id="depoimentos" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <span className="block text-xs font-bold tracking-widest text-amber-700 uppercase">
              372 Avaliações Verificadas no Google Maps
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              A Opinião de Quem Transformou o Sorriso
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              A confiança de mais de 370 pacientes que experimentaram a união de tecnologia, carinho da recepção e dentes fixos sem dor.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-amber-700 font-medium">{t.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2 border border-amber-200/70 text-xs font-medium text-amber-900">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>Destaque unânime: "Recepcionista Rejane maravilhosa, sala com café e mate, e o Dr. Fabiano e Dra. Kássia nota 1.000!"</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SIMULADOR DE TRIAGEM & AGENDAMENTO PRÉ-FILTRADO */}
      <section id="triagem" className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50/40 to-white p-6 shadow-lg sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                Agendamento VIP com a Rejane
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Triagem para Avaliação Odontológica
              </h2>
              <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                Preencha os campos para enviar uma mensagem personalizada diretamente para o WhatsApp do consultório, agilizando seu atendimento.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Nome Completo do Paciente
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ex: Michel Gottschalk"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Tratamento de Maior Interesse
                  </label>
                  <select
                    value={treatmentInterest}
                    onChange={(e) => setTreatmentInterest(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Prótese Protocolo Fixo (Substituir Dentadura Móvel)">Prótese Protocolo Fixo (Substituir Dentadura Móvel)</option>
                    <option value="Implante Dentário Unitário ou Múltiplo">Implante Dentário Unitário ou Múltiplo</option>
                    <option value="Lentes de Contato Dental & Facetas">Lentes de Contato Dental & Facetas</option>
                    <option value="Consulta com Dra. Kássia (Medicina Integrada)">Consulta com Dra. Kássia (Medicina Integrada)</option>
                    <option value="Extração de Siso ou Cirurgia Oral">Extração de Siso ou Cirurgia Oral</option>
                    <option value="Avaliação Geral & Limpeza Completa">Avaliação Geral & Limpeza Completa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Qual sua Situação Atual?
                  </label>
                  <select
                    value={currentSituation}
                    onChange={(e) => setCurrentSituation(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Uso prótese móvel (dentadura/ponte) e quero dentes fixos">Uso prótese móvel (dentadura/ponte) e quero dentes fixos</option>
                    <option value="Perdi um ou mais dentes e quero repor com implante">Perdi um ou mais dentes e quero repor com implante</option>
                    <option value="Tenho dentes fraturados ou desgastados">Tenho dentes fraturados ou desgastados</option>
                    <option value="Busco transformação estética (clareamento/lentes)">Busco transformação estética (clareamento/lentes)</option>
                    <option value="Preciso de avaliação de rotina e prevenção">Preciso de avaliação de rotina e prevenção</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Turno de Preferência
                </label>
                <div className="mt-2 flex gap-4">
                  {["Manhã", "Tarde", "Final do Dia (após 17h)"].map((shift) => (
                    <label
                      key={shift}
                      className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border py-2.5 text-xs font-medium transition ${
                        preferredShift === shift
                          ? "border-amber-600 bg-amber-50 text-amber-950 font-bold"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredShift"
                        value={shift}
                        checked={preferredShift === shift}
                        onChange={() => setPreferredShift(shift)}
                        className="sr-only"
                      />
                      <span>{shift}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Dúvidas ou Observações (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Gostaria de saber os valores do protocolo e se precisa de radiografia prévia."
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0A192F] py-4 text-sm font-bold text-white shadow-md transition hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5 text-amber-400" />
                <span>Enviar para a Rejane no WhatsApp: (21) 3641-0859</span>
              </button>

              <p className="text-center text-[11px] text-slate-500">
                Atendimento de segunda a sexta até às 19:00. Resposta ágil e personalizada.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 9. FAQ COMPLETO */}
      <section id="faq" className="py-16 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Perguntas Frequentes sobre Implantes
            </h2>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-amber-700"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-amber-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. RODAPÉ INSTITUCIONAL */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-base font-bold text-slate-900">
                Dr. Fabiano Gabry
              </span>
              <p className="mt-1 text-xs text-amber-700 font-semibold">
                Soluções Odontológicas & Implantes
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Líder de avaliações 5 estrelas em Teresópolis. Especialista em prótese protocolo, implantes guiados sem dor, estética dental e medicina integrada com a Dra. Kássia.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                O Consultório
              </span>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Av. Lúcio Meira, 14 - Sala 306<br />
                (Sobre o Armazém do Grão - Rodoviária)<br />
                Várzea, Teresópolis - RJ, 25953-003
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Contato & Recepção
              </span>
              <p className="mt-2 text-xs text-slate-600">
                Recepção: Rejane<br />
                WhatsApp: {phoneDisplay}<br />
                Segunda a Sexta, das 08:30 às 19:00
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Corpo Clínico
              </span>
              <p className="mt-2 text-xs text-slate-600">
                Dr. Fabiano Gabry • CRO-RJ (Cirurgia & Implantes)<br />
                Dra. Kássia • CRM-RJ (Medicina Integrada & Endocrinologia)
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Dr. Fabiano Gabry Soluções Odontológicas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* 11. BARRA FLUTUANTE FIXA MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-amber-900/10 bg-white/95 p-3 shadow-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span className="block text-xs font-bold text-slate-900">Dr. Fabiano Gabry</span>
            <span className="block text-[11px] text-amber-700 font-medium">Recepção: Rejane</span>
          </div>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0A192F] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-amber-400" />
            <span>Agendar no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Dr.%20Fabiano%20Gabry%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
