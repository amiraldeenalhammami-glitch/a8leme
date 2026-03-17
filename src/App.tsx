import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Map, 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  Building2, 
  Cpu, 
  ArrowLeftRight,
  CheckCircle2,
  AlertTriangle,
  Zap,
  GraduationCap,
  School,
  FileText
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const ruhrWorkforceData = [
  { year: '1955', count: 479316 },
  { year: '1980', count: 143440 },
  { year: '1990', count: 98675 },
  { year: '2018', count: 3371 },
];

const swotData = {
  strengths: [
    "حوكمة إقليمية متينة (RVR) وشرعية انتخابية مباشرة",
    "استغلال التراث الصناعي كأداة للجذب السياحي والهوية",
    "شبكة واسعة من الجامعات ومراكز البحث العلمي (22 جامعة)"
  ],
  opportunities: [
    "الريادة في اقتصاد الهيدروجين الأخضر والتحول الطاقي"
  ],
  weaknesses: [
    "الاعتماد الطويل على الإعانات الحكومية (Lock-in)",
    "ارتفاع تكاليف استصلاح الأراضي الملوثة"
  ],
  threats: [
    "مخاطر البطالة الهيكلية في حال بطء وتيرة إعادة التأهيل",
    "التباين في معدلات التنمية بين مدن الشمال والجنوب"
  ]
};

const comparisonData = [
  {
    criterion: "مركزية القرار",
    ruhr: "لامركزية ديمقراطية؛ انتخاب برلمان الرور مباشرة (91 عضواً) مع استقلالية وظيفية كاملة.",
    rwanda: "مركزية استراتيجية (رؤية 2050) مع لامركزية تنفيذية صارمة عبر عقود الأداء (Imihigo)."
  },
  {
    criterion: "مصادر التمويل",
    ruhr: "رسوم الأعضاء (Member Levy) والقروض والمنح الفيدرالية وصناديق التحول الأوروبية.",
    rwanda: "تمويل هجين (موازنة الدولة، معونات دولية، مساهمات مجتمعية Ubudehe، واستثمارات أجنبية)."
  },
  {
    criterion: "دور التكنولوجيا",
    ruhr: "تكنولوجيا التحول الهيكلي؛ الهيدروجين الأخضر، الابتكار البيئي، والرقمنة الصناعية.",
    rwanda: "تكنولوجيا السيادة والبيانات؛ نظام (NSDI) والمسح العقاري الرقمي الشامل لضمان الملكية."
  },
  {
    criterion: "معالجة المخلفات",
    ruhr: "إعادة تدوير المكان؛ تحويل المناجم لمتاحف ومتنزهات (IBA) وخلق هوية ثقافية جديدة.",
    rwanda: "التخطيط الأخضر؛ تطوير المدن الثانوية كأقطاب نمو وتطبيق سياسات الاستدامة الحضرية."
  }
];

const secondaryCities = [
  { name: "موسانزي (Musanze)", driver: "السياحة البيئية والزراعة", challenge: "الضغط السكاني العالي" },
  { name: "روبافو (Rubavu)", driver: "التجارة العابرة للحدود والسياحة", challenge: "تطوير البنية التحتية اللوجستية" },
  { name: "نيجاتاري (Nyagatare)", driver: "الاستثمار الزراعي والهجرة الداخلية", challenge: "إدارة التوسع العمراني المشتت" },
  { name: "هويي (Huye)", driver: "البحث العلمي والتعليم العالي", challenge: "نقص الموارد المالية الذاتية" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-accent/30">
      {/* Header / Hero */}
      <header className="bg-rw-blue text-white py-24 px-6 relative overflow-hidden border-b-[16px] border-rw-yellow">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rw-yellow rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rw-green rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center gap-4 mb-8">
              <span className="px-6 py-2 bg-rw-yellow text-rw-green rounded-full text-sm font-black border-2 border-white/20 shadow-xl">بحث الدراسات العليا</span>
              <span className="px-6 py-2 bg-white/20 text-white rounded-full text-sm font-bold backdrop-blur-md border border-white/30">قسم التخطيط والبيئة</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black mb-10 leading-[1.1] drop-shadow-2xl">
              حوكمة التخطيط الإقليمي <br/>
              <span className="text-rw-yellow">بين التعافي والتحول الهيكلي</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
              دراسة مقارنة معمقة بين تجربة رواندا وإقليم الرور الألماني <br/>
              <span className="text-rw-yellow/90">لاستنباط نموذج استراتيجي لإعادة إعمار سوريا</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-right glass-panel p-10 rounded-[3rem]">
              <div className="flex items-center gap-6">
                <div className="p-5 bg-rw-yellow text-rw-green rounded-2xl shadow-inner">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-rw-blue font-black text-xs mb-1 uppercase tracking-[0.2em]">الباحث الأكاديمي</p>
                  <p className="text-2xl font-black text-black">أمير الدين الحمامي</p>
                  <p className="text-black font-extrabold">جامعة دمشق - كلية الهندسة المعمارية</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-5 bg-rw-green text-rw-yellow rounded-2xl shadow-inner">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-rw-blue font-black text-xs mb-1 uppercase tracking-[0.2em]">بإشراف الأستاذ الدكتور</p>
                  <p className="text-2xl font-black text-black">حيان سفور</p>
                  <p className="text-black font-extrabold">أستاذ في قسم التخطيط والبيئة</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* Chapter 1: Methodological Framework */}
        <section id="chapter1" className="relative">
          <div className="chapter-badge">الفصل الأول</div>
          <h2 className="section-title">الإطار المنهجي والنظري للبحث</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="infographic-card bg-white border-r-[12px] border-rw-blue col-span-2 shadow-2xl">
              <h3 className="text-3xl font-black mb-6 flex items-center gap-3 text-rw-blue">
                <Lightbulb className="w-8 h-8" /> جوهر وأهمية التخطيط الإقليمي
              </h3>
              <p className="text-black text-xl leading-relaxed mb-6 font-bold">
                يعتبر التخطيط الإقليمي الاستراتيجي أداة حيوية لتنظيم الفضاء المكاني، وركيزة أساسية لتعزيز الوحدة الوطنية وتحفيز النمو الاقتصادي المتوازن. يعمل كجسر يربط بين الأهداف الاستراتيجية الوطنية الكبرى والاحتياجات المحلية التفصيلية، مما يضمن توزيعاً عادلاً للموارد والفرص.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-rw-blue/10 rounded-2xl border-2 border-rw-blue/20">
                  <p className="font-black text-rw-blue text-xl mb-1">العدالة المكانية</p>
                  <p className="text-base text-black font-black">تقليل الفوارق التنموية بين الأقاليم والمدن.</p>
                </div>
                <div className="p-5 bg-rw-green/10 rounded-2xl border-2 border-rw-green/20">
                  <p className="font-black text-rw-green text-xl mb-1">الاستدامة الاقتصادية</p>
                  <p className="text-base text-black font-black">خلق أقطاب نمو قادرة على الصمود أمام الأزمات.</p>
                </div>
              </div>
            </div>
            <div className="infographic-card bg-slate-900 text-white border-none shadow-2xl ring-4 ring-rw-green/30">
              <h3 className="text-3xl font-black mb-6 flex items-center gap-3 text-rw-yellow">
                <AlertTriangle className="w-8 h-8" /> إشكالية البحث السوري
              </h3>
              <p className="text-white text-xl leading-relaxed mb-8 font-black">
                تعاني سوريا من فجوة تخطيطية حادة ناتجة عن تداخل الصلاحيات ومركزية القرار الشديدة، بالإضافة إلى التشظي الإداري ونشوء نماذج حوكمة هجينة وغير مستقرة خلال سنوات الحرب، مما يعيق جهود التعافي المستدام.
              </p>
              <div className="p-6 bg-rw-green/40 rounded-2xl border-2 border-rw-yellow/50 backdrop-blur-sm">
                <p className="font-black text-rw-yellow text-2xl mb-2 underline decoration-rw-yellow/30 underline-offset-8">التحدي الأكبر:</p>
                <p className="text-xl font-black text-white leading-relaxed">غياب رؤية مكانية موحدة عابرة للحدود الإدارية للمحافظات.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 infographic-card border-t-[12px] border-rw-yellow">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-rw-green">
              <FileText className="w-8 h-8" /> المنهجية العلمية المتبعة
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-[2rem] border-2 border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rw-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                <p className="font-black text-rw-blue text-xl mb-4">المنهج الوصفي التحليلي</p>
                <p className="text-slate-600 leading-relaxed">
                  دراسة معمقة للوثائق الوطنية السورية والقوانين الناظمة، مع التركيز على القانون 107 لعام 2011 وتحليل ثغراته في سياق ما بعد النزاع.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2rem] border-2 border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rw-green/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                <p className="font-black text-rw-green text-xl mb-4">المنهج المقارن الدولي</p>
                <p className="text-slate-600 leading-relaxed">
                  تحليل مقارن لتجربة "إقليم الرور" الألماني في التحول الهيكلي، وتجربة "جمهورية رواندا" في التعافي السريع، لاستخلاص مؤشرات حوكمة قابلة للتوطين.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Ruhr Region */}
        <section id="chapter2" className="space-y-12">
          <div>
            <div className="chapter-badge">الفصل الثاني</div>
            <h2 className="section-title">تجربة إقليم "رور" الألماني: من الصناعة الثقيلة إلى الابتكار الأخضر</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="infographic-card border-l-[16px] border-rw-blue">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-rw-blue">
                <TrendingUp className="w-8 h-8" /> ملحمة تحول القوى العاملة (1955 - 2018)
              </h3>
              <div className="h-80 w-full bg-slate-50 p-4 rounded-3xl border border-slate-100">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ruhrWorkforceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 'bold'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                    <Tooltip 
                      cursor={{fill: '#f1f5f9'}}
                      contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', padding: '16px' }}
                      labelStyle={{ fontWeight: '900', color: '#00A1DE', marginBottom: '4px' }}
                    />
                    <Bar dataKey="count" radius={[12, 12, 0, 0]} barSize={60}>
                      {ruhrWorkforceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 3 ? '#20603D' : '#00A1DE'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-500 mt-6 text-center font-bold italic bg-rw-blue/5 py-3 rounded-xl">
                رسم بياني يوضح الانهيار الهيكلي لقطاع التعدين: من 479,316 عاملاً إلى إغلاق آخر منجم في 2018.
              </p>
            </div>

            <div className="space-y-8">
              <div className="infographic-card border-r-[12px] border-rw-yellow">
                <h3 className="text-xl font-black mb-4 flex items-center gap-3 text-rw-green">
                  <Building2 className="w-7 h-7" /> اتحاد إقليم الرور (RVR): نموذج الحوكمة
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  يعد RVR أقدم اتحاد إقليمي في ألمانيا، حيث يجمع 11 مدينة مستقلة و4 مقاطعات. تكمن قوته في <b>"الشرعية الديمقراطية"</b> عبر برلمان منتخب مباشرة، و<b>"الاستقلال المالي"</b> الذي يجنبه التبعية المركزية المفرطة.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-rw-blue/10 text-rw-blue text-xs font-bold rounded-lg">5.1 مليون نسمة</span>
                  <span className="px-3 py-1 bg-rw-green/10 text-rw-green text-xs font-bold rounded-lg">تخطيط مكاني ملزم</span>
                </div>
              </div>
              <div className="infographic-card border-r-[12px] border-rw-green">
                <h3 className="text-xl font-black mb-4 flex items-center gap-3 text-rw-blue">
                  <Zap className="w-7 h-7" /> استراتيجيات التحول البيئي العميق
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-rw-green text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-rw-green/20">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900">مشروع IBA Emscher Park</p>
                      <p className="text-sm text-slate-600">أكبر مشروع استصلاح بيئي في العالم؛ تحويل المجاري الملوثة إلى مسارات خضراء ومتاحف صناعية حية.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-rw-blue text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-rw-blue/20">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900">اقتصاد الهيدروجين الأخضر</p>
                      <p className="text-sm text-slate-600">تحويل البنية التحتية القديمة للفحم لتصبح مركزاً عالمياً للطاقة النظيفة بحلول عام 2032.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="infographic-card bg-slate-900 text-white border-none p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rw-blue via-rw-yellow to-rw-green"></div>
            <h3 className="text-3xl font-black mb-10 text-center text-rw-yellow">مصفوفة SWOT التحليلية لإقليم الرور</h3>
            <div className="swot-grid">
              <div className="swot-item swot-s">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-black">S</div>
                  <p className="text-xl font-black">نقاط القوة</p>
                </div>
                <ul className="space-y-3 text-sm font-medium">
                  {swotData.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="swot-item swot-o">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-xl flex items-center justify-center font-black">O</div>
                  <p className="text-xl font-black">الفرص الواعدة</p>
                </div>
                <ul className="space-y-3 text-sm font-medium">
                  {swotData.opportunities.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="swot-item swot-w">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center font-black">W</div>
                  <p className="text-xl font-black">نقاط الضعف</p>
                </div>
                <ul className="space-y-3 text-sm font-medium">
                  {swotData.weaknesses.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="swot-item swot-t">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-rose-500 text-white rounded-xl flex items-center justify-center font-black">T</div>
                  <p className="text-xl font-black">التحديات والمخاطر</p>
                </div>
                <ul className="space-y-3 text-sm font-medium">
                  {swotData.threats.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: Rwanda Experience */}
        <section id="chapter3" className="space-y-12">
          <div>
            <div className="chapter-badge">الفصل الثالث</div>
            <h2 className="section-title">تجربة رواندا: التخطيط المكاني كأداة للمصالحة والنهوض</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="infographic-card bg-white border-r-[16px] border-rw-blue relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-rw-blue text-white rounded-full flex items-center justify-center font-black shadow-lg">01</div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-rw-blue">
                <ShieldCheck className="w-8 h-8" /> منظومة "إيميهيغو" (Imihigo)
              </h3>
              <p className="text-black leading-relaxed text-lg font-bold">
                هي عقود أداء سنوية متجذرة في الثقافة الرواندية، تربط بين التخطيط الاستراتيجي الوطني والمساءلة المحلية الصارمة. يوقع القادة المحليون هذه العقود علناً أمام رئيس الجمهورية، مما يضمن تحويل الخطط الورقية إلى واقع ملموس يلمسه المواطن.
              </p>
              <div className="mt-6 p-4 bg-rw-blue/10 rounded-2xl border-2 border-rw-blue/20 text-sm font-black text-rw-blue">
                النتيجة: تسريع وتيرة الإنجاز بنسبة 40% في المشاريع التنموية الكبرى.
              </div>
            </div>
            <div className="infographic-card bg-white border-r-[16px] border-rw-green relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-rw-green text-white rounded-full flex items-center justify-center font-black shadow-lg">02</div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-rw-green">
                <Cpu className="w-8 h-8" /> السيادة الرقمية وإدارة الأرض (NSDI)
              </h3>
              <p className="text-black leading-relaxed text-lg font-bold">
                استثمرت رواندا في بناء بنية تحتية رقمية متطورة للبيانات الجيومكانية (NSDI Hub). تم إجراء مسح عقاري رقمي شامل بدقة مذهلة، مما ساهم في إنهاء نزاعات الملكية التي خلفها النزاع وجذب الاستثمارات الأجنبية بضمانات قانونية رقمية.
              </p>
              <div className="mt-6 p-4 bg-rw-green/10 rounded-2xl border-2 border-rw-green/20 text-sm font-black text-rw-green">
                الابتكار: نظام تسجيل أراضٍ رقمي بالكامل يقلل زمن المعاملات من شهور إلى أيام.
              </div>
            </div>
          </div>

          <div className="infographic-card border-b-[16px] border-rw-yellow overflow-hidden">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-rw-green">
              <Map className="w-8 h-8" /> استراتيجية المدن الثانوية (Secondary Cities Strategy)
            </h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              لمواجهة الانفجار السكاني في العاصمة كيغالي، طورت رواندا 6 مدن ثانوية كأقطاب نمو اقتصادية مستقلة، مما خلق توازناً مكانياً فريداً في القارة الأفريقية.
            </p>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>المدينة الثانوية</th>
                    <th>المحرك الاقتصادي الاستراتيجي</th>
                    <th>التحدي التنموي المرصود</th>
                  </tr>
                </thead>
                <tbody>
                  {secondaryCities.map((city, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="font-black text-rw-blue text-lg">{city.name}</td>
                      <td className="font-bold">{city.driver}</td>
                      <td className="text-slate-500 font-medium">{city.challenge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-rw-green text-white rounded-[3rem] shadow-2xl shadow-rw-green/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-2xl font-black mb-6 flex items-center gap-3 text-rw-yellow">
                <Users className="w-8 h-8" /> أموجاندا (Umuganda): العمل الجماعي
              </h4>
              <p className="text-lg leading-relaxed text-white/90">
                يوم عمل مجتمعي إلزامي شهرياً يشارك فيه الجميع من المواطن إلى الرئيس. ساهم في بناء آلاف المدارس والمراكز الصحية، والأهم من ذلك، عمل كأداة قوية للمصالحة الوطنية عبر العمل المشترك في المكان.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="text-4xl font-black text-rw-yellow">19B</div>
                <div className="text-sm font-bold leading-tight">فرنك رواندي <br/> قيمة المساهمات السنوية</div>
              </div>
            </div>
            <div className="p-10 bg-rw-blue text-white rounded-[3rem] shadow-2xl shadow-rw-blue/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-2xl font-black mb-6 flex items-center gap-3 text-rw-yellow">
                <ArrowLeftRight className="w-8 h-8" /> أوبوديهي (Ubudehe): العدالة الاجتماعية
              </h4>
              <p className="text-lg leading-relaxed text-white/90">
                نظام تصنيف مجتمعي تشاركي يحدد مستويات الفقر والاحتياج بدقة متناهية من القاعدة إلى القمة. يضمن توجيه الدعم الحكومي والمعونات الدولية إلى مستحقيها الفعليين، مما يعزز الثقة بين الدولة والمجتمع.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <CheckCircle2 className="w-10 h-10 text-rw-yellow" />
                <div className="text-sm font-bold leading-tight">تغطية شاملة <br/> لبرامج الضمان الاجتماعي</div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: Comparative Analysis */}
        <section id="chapter4" className="space-y-12">
          <div className="text-center">
            <div className="chapter-badge">الفصل الرابع</div>
            <h2 className="section-title mx-auto">المقارنة التحليلية: دروس مستفادة من تجربتين عالميتين</h2>
            <p className="text-slate-500 mt-4 max-w-3xl mx-auto text-lg">
              تحليل الفوارق والتشابهات بين نموذج "الرور" الألماني القائم على اللامركزية الديمقراطية، ونموذج "رواندا" القائم على المركزية الاستراتيجية واللامركزية التنفيذية.
            </p>
          </div>

          <div className="infographic-card overflow-hidden border-t-[16px] border-rw-blue shadow-2xl">
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr className="bg-rw-blue text-white">
                    <th className="w-1/4 py-6 text-xl">معيار المقارنة</th>
                    <th className="w-3/8 py-6 text-xl bg-rw-blue/90">إقليم الرور (ألمانيا)</th>
                    <th className="w-3/8 py-6 text-xl bg-rw-green">تجربة رواندا</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                      <td className="font-black text-rw-blue text-lg p-6 bg-slate-50/50">{row.criterion}</td>
                      <td className="p-6 text-slate-700 leading-relaxed font-medium">{row.ruhr}</td>
                      <td className="p-6 text-slate-700 leading-relaxed font-medium">{row.rwanda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-rw-yellow/10 border-t border-rw-yellow/20">
              <h4 className="text-rw-blue font-black mb-2 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" /> الخلاصة التحليلية:
              </h4>
              <p className="text-slate-700 font-bold leading-relaxed">
                بينما نجح الرور في "إعادة تدوير المكان" عبر الديمقراطية التشاركية، نجحت رواندا في "إعادة بناء المجتمع" عبر الحوكمة الرقمية والمساءلة الصارمة. كلاهما يقدم حلولاً لمشاكل سورية مزمنة: (إدارة الموارد) و (تثبيت الملكية).
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 5: Syrian Reality */}
        <section id="chapter5" className="space-y-12">
          <div className="text-center">
            <div className="chapter-badge">الفصل الخامس</div>
            <h2 className="section-title mx-auto">إسقاط النماذج على الواقع السوري: نحو رؤية وطنية</h2>
            <p className="text-slate-500 mt-4 max-w-3xl mx-auto text-lg">
              تحليل التحديات الراهنة في سوريا واستنباط الحلول الممكنة عبر دمج دروس "الرور" و "رواندا" في سياق محلي يستجيب لمتطلبات التعافي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="infographic-card border-b-[12px] border-rw-blue group"
            >
              <div className="w-16 h-16 bg-rw-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rw-blue group-hover:text-white transition-all duration-500">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-rw-blue">حلب vs إقليم الرور</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                تمثل حلب "الرور السوري". الحاجة ملحة لنموذج حوكمة إقليمي مستقل (على غرار RVR) لإدارة الموارد المائية والصناعية في مناطق مثل "الشيخ نجار"، بعيداً عن البيروقراطية المركزية المعطلة.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="infographic-card border-b-[12px] border-rw-yellow group"
            >
              <div className="w-16 h-16 bg-rw-yellow/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rw-yellow group-hover:text-rw-blue transition-all duration-500">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-rw-blue">استراتيجية الأقطاب</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                تطبيق تجربة "المدن الثانوية" الرواندية لمواجهة التضخم السكاني في دمشق والساحل. تطوير أقطاب نمو في (حمص، حماة، دير الزور) وتزويدها بصلاحيات تنفيذية واسعة لجذب الاستثمارات.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="infographic-card border-b-[12px] border-rw-green group"
            >
              <div className="w-16 h-16 bg-rw-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rw-green group-hover:text-white transition-all duration-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-rw-green">السيادة الرقمية</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                حماية حقوق ملكية النازحين واللاجئين عبر "منظومة بيانات جيومكانية وطنية" (على غرار NSDI الرواندي). توثيق المخططات رقمياً هو "مشروع سيادة" يمنع النزاعات العقارية المستقبلية.
              </p>
            </motion.div>
          </div>

          <div className="bg-rw-yellow/5 border-2 border-rw-yellow/20 p-10 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-rw-yellow/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-rw-blue text-2xl font-black mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-rw-yellow" /> نقد القانون 107 لعام 2011 (الإدارة المحلية)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                رغم محاولة اللامركزية، إلا أن القانون حافظ على "مركزية القرار" عبر سلطة المحافظ المعين، ويفتقر لإطار يسمح بالتخطيط "عبر الحدود الإدارية" للمحافظات، وهو ما يعيق التنمية الإقليمية الشاملة.
              </p>
              <div className="p-6 bg-white rounded-2xl shadow-inner border border-slate-100">
                <h4 className="font-black text-rw-blue mb-2">الفجوة الرئيسية:</h4>
                <p className="text-slate-600 font-medium">غياب "المستوى الإقليمي" الوسيط بين المركز والبلديات، مما يجعل الخطط الوطنية معزولة عن الاحتياجات المحلية المتغيرة.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 6: Proposed Model */}
        <section id="chapter6" className="space-y-16 pb-32">
          <div className="text-center">
            <div className="chapter-badge">الفصل السادس</div>
            <h2 className="text-5xl font-black text-rw-blue mb-4">النموذج المقترح لإعادة إعمار سوريا</h2>
            <p className="text-slate-500 text-xl font-bold">هجين تخطيطي يمزج بين رصانة التنظيم الألماني وديناميكية التنفيذ الرواندي</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex gap-6 p-6 bg-white rounded-3xl shadow-xl border border-slate-100 hover:border-rw-blue transition-all"
              >
                <div className="w-14 h-14 bg-rw-blue text-white rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-lg shadow-rw-blue/20">1</div>
                <div>
                  <h4 className="font-black text-2xl mb-2 text-rw-blue">مجالس الأقاليم التنموية (RDA)</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">تأسيس مجالس أقاليم (الشمال، الساحل، الوسط، الجنوب) تمنح سلطة التخطيط المكاني الملزم والإدارة الذاتية الوظيفية للموارد المحلية.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 p-6 bg-white rounded-3xl shadow-xl border border-slate-100 hover:border-rw-yellow transition-all"
              >
                <div className="w-14 h-14 bg-rw-yellow text-rw-blue rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-lg shadow-rw-yellow/20">2</div>
                <div>
                  <h4 className="font-black text-2xl mb-2 text-rw-blue">عقود الأداء (Imihigo السورية)</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">توقيع عقود إعمار سنوية بين مجالس الأقاليم والحكومة المركزية بمستهدفات رقمية واضحة، وربط التمويل بمدى الإنجاز المحقق فعلياً.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 p-6 bg-white rounded-3xl shadow-xl border border-slate-100 hover:border-rw-green transition-all"
              >
                <div className="w-14 h-14 bg-rw-green text-white rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-lg shadow-rw-green/20">3</div>
                <div>
                  <h4 className="font-black text-2xl mb-2 text-rw-green">اللامركزية المالية والتمويل التشاركي</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">إنشاء صناديق تنمية إقليمية ومأسسة تمويل المغتربين عبر منصات "بلوكشين" شفافة تضمن وصول الأموال لمشاريع البنية التحتية المحلية.</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-slate-900 text-white p-12 rounded-[4rem] relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rw-blue/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-rw-green/10 rounded-full blur-[100px]"></div>
              
              <h4 className="text-rw-yellow text-2xl font-black mb-10 flex items-center gap-3">
                <TrendingUp className="w-8 h-8" /> مؤشر كفاءة التكتل المكاني (AEI)
              </h4>
              
              <div className="text-center py-12 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-xl mb-10">
                <div className="text-4xl font-mono mb-6 tracking-tighter text-white">
                  AEI = ΔGDP<sub>regional</sub> / (ΔU<sub>p</sub> + ΔI<sub>cap</sub>)
                </div>
                <div className="h-1 w-24 bg-rw-yellow mx-auto mb-6"></div>
                <p className="text-slate-400 text-lg max-w-sm mx-auto font-medium">
                  تغير الناتج المحلي للإقليم مقسوماً على نمو السكان الحضري وتطور القدرات المؤسسية
                </p>
              </div>
              
              <div className="p-6 bg-rw-blue/20 rounded-2xl border border-rw-blue/30 text-lg leading-relaxed font-bold text-rw-yellow italic">
                "الهدف الاستراتيجي: ضمان أن إعادة الإعمار تؤدي لنمو حقيقي مستدام وليس مجرد توسع عمراني عشوائي يستهلك الموارد."
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="p-16 bg-gradient-to-br from-rw-blue to-rw-green text-white rounded-[4rem] text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <h3 className="text-4xl font-black mb-8 relative z-10">الخاتمة: سوريا 2045</h3>
            <p className="max-w-4xl mx-auto text-2xl leading-relaxed font-medium relative z-10 text-white/90">
              إعادة إعمار سوريا ليست مجرد عملية تقنية لترميم المباني، بل هي عملية "إعادة بناء العقد الاجتماعي" عبر المكان. الاستثمار في "حوكمة الأقاليم" هو الضمانة الوحيدة لمنع تجدد النزاعات وتحقيق تحول هيكلي يقود سوريا نحو مستقبل مشرق ومستدام.
            </p>
            <div className="mt-12 flex justify-center gap-8 relative z-10">
              <div className="px-8 py-4 bg-white/20 backdrop-blur-md rounded-full font-black text-rw-yellow">وحدة وطنية</div>
              <div className="px-8 py-4 bg-white/20 backdrop-blur-md rounded-full font-black text-rw-yellow">حوكمة إقليمية</div>
              <div className="px-8 py-4 bg-white/20 backdrop-blur-md rounded-full font-black text-rw-yellow">تنمية مستدامة</div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-20 px-6 border-t-8 border-rw-yellow">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-right space-y-4">
            <div className="flex items-center gap-4 justify-end mb-4">
              <div className="w-12 h-1 bg-rw-yellow"></div>
              <p className="text-rw-yellow text-sm uppercase tracking-[0.3em] font-black">جميع الحقوق محفوظة © 2026</p>
            </div>
            <h4 className="text-4xl font-black text-white">أمير الدين الحمامي</h4>
            <p className="text-white text-2xl font-black">جامعة دمشق - كلية الهندسة المعمارية</p>
            <p className="text-white text-xl font-bold">قسم التخطيط والبيئة - الدراسات العليا</p>
          </div>
          
          <div className="flex gap-8">
            <motion.div whileHover={{ scale: 1.2 }} className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-rw-blue transition-colors">
              <School className="w-8 h-8 text-rw-blue" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-rw-yellow transition-colors">
              <Globe className="w-8 h-8 text-rw-yellow" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-rw-green transition-colors">
              <BookOpen className="w-8 h-8 text-rw-green" />
            </motion.div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/20 text-center text-white font-black text-lg">
          تصميم وتطوير الموقع لأغراض البحث العلمي - إشراف د. حيان سفور
        </div>
      </footer>
    </div>
  );
}
