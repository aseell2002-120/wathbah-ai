import React, { useEffect, useMemo, useState } from "react";
import {
  Activity, ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, Bot, Building2,
  Check, CheckCircle2, ChevronDown, ChevronRight, CircleDollarSign, Clock3,
  Compass, Cpu, FileText, Globe2, Layers3, Lightbulb, ListChecks, LockKeyhole,
  Menu, Rocket, Search, Settings2, ShieldCheck, Sparkles, Target, WandSparkles,
  Workflow, Zap, Play, X, TrendingUp, ShoppingBag, MessageCircle, Send
} from "lucide-react";
import "./style.css";

const COPY = {
  en: {
    brand: "WATHBAH AI", tagline: "Your smarter technology partner",
    navHow: "How it works", navServices: "What we offer", navAbout: "About Wathbah",
    eyebrow: "DIGITAL TRANSFORMATION, MADE PRACTICAL",
    heroA: "The right technology", heroB: "for your business.",
    heroDesc: "Tell Wathbah what your business needs and what you can spend. Get practical technology recommendations that fit your goals and budget.",
    start: "Find my best-fit tools", seeHow: "Explore how it works",
    trust: "Built for small businesses with big ambitions",
    stat1: "Budget-aware", stat2: "Practical recommendations", stat3: "Optional ongoing support",
    howEyebrow: "A CLEARER WAY FORWARD", howTitle: "From business challenge to the right solution.",
    howDesc: "You do not need to be a technology expert. Wathbah helps you make confident, cost-conscious decisions.",
    step1: "Tell us about your business", step1d: "Your industry, goals, challenges and current setup.",
    step2: "We understand what you need", step2d: "Wathbah maps your business needs to practical technology options.",
    step3: "Compare your best-fit tools", step3d: "See alternatives, trade-offs and budget-friendly options.",
    step4: "Get your implementation roadmap", step4d: "Know what to start with and how to roll it out.",
    servicesEyebrow: "ONE PARTNER, TWO WAYS TO WORK", servicesTitle: "Support when you need it. Improvement when you want it.",
    coreTag: "CORE SERVICE", coreTitle: "Technology advisory", coreDesc: "A tailored technology stack, tool comparison and step-by-step adoption plan.",
    optionalTag: "OPTIONAL SERVICE", optionalTitle: "Continuous optimization", optionalDesc: "Ongoing performance reviews and alerts when a better-value tool or approach becomes available.",
    optionalNote: "You choose whether to activate ongoing monitoring. It is not required to use Wathbah.",
    ctaTitle: "Let’s find what works for your business.", ctaDesc: "Start with a few details. No technical knowledge required.",
    cta: "Build my technology plan", footer: "WATHBAH AI · Practical digital transformation for growing businesses",
    workspace: "YOUR WATHBAH WORKSPACE", back: "Back to home", language: "العربية",
    formEyebrow: "LET’S GET TO KNOW YOUR BUSINESS", formTitle: "Build your technology plan",
    formDesc: "Share a little about your business. We’ll use it to shape recommendations around your real needs and budget.",
    businessName: "Business or project name", businessNamePh: "e.g. Bloom Café",
    sector: "Business sector", sectorPh: "Choose your sector",
    sectors: ["Retail & e-commerce", "Food & beverage", "Tourism & hospitality", "Professional services", "Education", "Healthcare", "Construction", "Other"],
    stage: "Business stage", stages: ["Idea / just starting", "Early-stage startup", "Operating business", "Growing business"],
    team: "Team size", teamPh: "Choose team size", teams: ["Just me", "2–5 people", "6–15 people", "16–50 people", "More than 50"],
    goals: "What do you want to improve?", goalsHint: "Choose all that apply",
    goalOptions: ["Build a website or online store", "Manage customers and sales", "Automate repetitive tasks", "Marketing and social media", "Organize documents and workflows", "Analyze data and reports", "Use AI in daily work", "Improve team collaboration"],
    challenge: "What is your biggest challenge?", challengePh: "Tell us what takes too much time, costs too much, or feels difficult...",
    budget: "Monthly technology budget", budgetHint: "Choose the amount you can comfortably spend.",
    budgets: ["Under SAR 250", "SAR 250–500", "SAR 500–1,000", "SAR 1,000–2,500", "More than SAR 2,500", "Not sure yet"],
    currentTools: "Are you already using any tools?", currentToolsPh: "Optional — e.g. Excel, WhatsApp, Shopify...",
    monitoring: "I’m interested in optional ongoing monitoring",
    monitoringDesc: "Review tool performance and costs, and suggest better-value alternatives over time.",
    submit: "Analyze my business needs", analyzing: "Understanding your business...",
    demoNotice: "Prototype mode: recommendations use a curated demo catalogue. Verify current vendor plans and pricing before purchase.",
    resultsEyebrow: "YOUR PERSONALIZED TECHNOLOGY PLAN", resultsTitle: "A clearer path to better tools.",
    resultsDesc: "These suggestions are a starting point based on the information you shared.",
    fit: "BUSINESS FIT", budgetFit: "BUDGET FIT", setup: "SETUP EFFORT",
    recommended: "Recommended tools", compare: "Compare your options",
    why: "Why it fits", bestFor: "Best for", pricing: "Pricing model", tradeoff: "Consideration",
    freeTier: "Free tier / entry option", freemium: "Free tier; paid features vary", paid: "Paid plans; verify current pricing",
    roadmap: "Your implementation roadmap", phase1: "Start small", phase2: "Connect your workflow", phase3: "Measure and improve",
    phase1d: "Set up one high-impact tool and move one task out of manual work.",
    phase2d: "Connect the tools you use and define a simple repeatable process.",
    phase3d: "Review adoption, time saved and costs before expanding.",
    optionalMonitoring: "Optional: continuous optimization",
    monitoringOn: "You asked about ongoing monitoring. Wathbah can periodically review performance and compare alternatives as your business changes.",
    monitoringOff: "Not selected. You can activate ongoing monitoring later if you want Wathbah to review performance and look for better-value tools.",
    edit: "Edit business details", newPlan: "Create another plan", copy: "Copy plan summary", copied: "Summary copied",
    agentTitle: "How Wathbah reached these suggestions", agentDesc: "A coordinated multi-agent workflow turns your business context into a practical plan.",
    agent1: "Business analyst", agent1d: "Organizes your business profile, goals and constraints.",
    agent2: "Needs analyst", agent2d: "Identifies the technology capabilities your business actually needs.",
    agent3: "Tool researcher", agent3d: "Matches needs with suitable tools and budget-friendly alternatives.",
    agent4: "Implementation planner", agent4d: "Turns the recommendations into a phased adoption roadmap.",
    noGoals: "General business productivity", defaultChallenge: "You want to choose useful technology without overspending.",
    localDemo: "Local demo analysis", notLive: "Illustrative catalogue · not live vendor search",
    priceDisclaimer: "Pricing and plan availability change. Confirm details with each vendor before subscribing.",
    errors: "Please add your business name, choose a sector, select at least one goal and set a budget.",
    monitoringLabel: "Monitoring preference", yes: "Interested", no: "Not now",
    tools: "tools", toolCount: "matched options", resultNote: "Wathbah does not make purchases or change your systems without your approval.",
  },
  ar: {
    brand: "وَثبة AI", tagline: "شريكك التقني الأذكى",
    navHow: "كيف يعمل", navServices: "خدماتنا", navAbout: "عن وَثبة",
    eyebrow: "تحول رقمي عملي يناسب منشأتك",
    heroA: "التقنية المناسبة", heroB: "لأعمالك وميزانيتك.",
    heroDesc: "عرّف وَثبة باحتياجات منشأتك وميزانيتك، وسيقترح عليك حلولًا وأدوات تقنية عملية تناسب أهدافك وقدرتك على الإنفاق.",
    start: "اكتشف الأدوات المناسبة", seeHow: "اكتشف كيف يعمل",
    trust: "صُمم للمنشآت الصغيرة ذات الطموحات الكبيرة",
    stat1: "يراعي الميزانية", stat2: "توصيات عملية", stat3: "متابعة اختيارية",
    howEyebrow: "طريق أوضح للتطوير", howTitle: "من تحدي الأعمال إلى الحل المناسب.",
    howDesc: "لست بحاجة إلى خبرة تقنية. يساعدك وَثبة على اتخاذ قرارات تقنية مدروسة ومناسبة للتكلفة.",
    step1: "عرّفنا بمنشأتك", step1d: "مجالك وأهدافك وتحدياتك والأدوات التي تستخدمها حاليًا.",
    step2: "نفهم احتياجاتك", step2d: "نربط احتياجات منشأتك بالقدرات والحلول التقنية المناسبة.",
    step3: "قارن الأدوات المناسبة", step3d: "اطّلع على البدائل والمميزات والاعتبارات والخيارات الاقتصادية.",
    step4: "احصل على خطة التطبيق", step4d: "اعرف من أين تبدأ وكيف تطبق الحلول تدريجيًا.",
    servicesEyebrow: "شريك واحد، وطريقتان للاستفادة", servicesTitle: "دعم عند الحاجة، وتحسين عندما ترغب.",
    coreTag: "الخدمة الأساسية", coreTitle: "الاستشارات التقنية", coreDesc: "مجموعة أدوات مناسبة لمنشأتك، ومقارنة بينها، وخطة تطبيق واضحة.",
    optionalTag: "خدمة اختيارية", optionalTitle: "المراقبة والتحسين المستمر", optionalDesc: "مراجعة دورية للأداء، والتنبيه عند ظهور أداة أو طريقة أفضل من حيث القيمة والتكلفة.",
    optionalNote: "أنت تختار تفعيل المتابعة المستمرة أو عدمها. لا يشترط الاشتراك فيها للاستفادة من وَثبة.",
    ctaTitle: "لنكتشف التقنية الأنسب لمنشأتك.", ctaDesc: "ابدأ ببعض المعلومات البسيطة، ولا تحتاج إلى معرفة تقنية مسبقة.",
    cta: "أنشئ خطتي التقنية", footer: "وَثبة AI · تحول رقمي عملي للمنشآت النامية",
    workspace: "مساحة وَثبة الخاصة بك", back: "العودة للرئيسية", language: "English",
    formEyebrow: "دعنا نتعرف على منشأتك", formTitle: "أنشئ خطتك التقنية",
    formDesc: "شاركنا بعض المعلومات عن منشأتك لنخصص التوصيات حسب احتياجاتك الفعلية وميزانيتك.",
    businessName: "اسم المنشأة أو المشروع", businessNamePh: "مثال: مقهى بلوم",
    sector: "مجال المنشأة", sectorPh: "اختر المجال",
    sectors: ["التجارة والمتاجر الإلكترونية", "الأغذية والمشروبات", "السياحة والضيافة", "الخدمات المهنية", "التعليم", "الصحة", "المقاولات", "أخرى"],
    stage: "مرحلة المنشأة", stages: ["فكرة / في البداية", "منشأة ناشئة", "منشأة قائمة", "منشأة في مرحلة النمو"],
    team: "حجم الفريق", teamPh: "اختر حجم الفريق", teams: ["أنا فقط", "2–5 أشخاص", "6–15 شخصًا", "16–50 شخصًا", "أكثر من 50"],
    goals: "ما الذي ترغب في تطويره؟", goalsHint: "يمكنك اختيار أكثر من خيار",
    goalOptions: ["إنشاء موقع أو متجر إلكتروني", "إدارة العملاء والمبيعات", "أتمتة المهام المتكررة", "التسويق ووسائل التواصل", "تنظيم الملفات وسير العمل", "تحليل البيانات والتقارير", "استخدام الذكاء الاصطناعي في العمل", "تحسين تعاون الفريق"],
    challenge: "ما أكبر تحدٍ تواجهه؟", challengePh: "أخبرنا ما الذي يستهلك وقتًا طويلًا أو يكلفك كثيرًا أو تجد صعوبة في إنجازه...",
    budget: "ميزانيتك التقنية الشهرية", budgetHint: "اختر المبلغ الذي يمكنك تخصيصه بشكل مريح.",
    budgets: ["أقل من 250 ريال", "250–500 ريال", "500–1,000 ريال", "1,000–2,500 ريال", "أكثر من 2,500 ريال", "غير متأكد حاليًا"],
    currentTools: "هل تستخدم أدوات حاليًا؟", currentToolsPh: "اختياري — مثل Excel أو WhatsApp أو Shopify...",
    monitoring: "أرغب في معرفة خدمة المراقبة الاختيارية",
    monitoringDesc: "متابعة أداء الأدوات وتكاليفها، واقتراح بدائل أفضل مع مرور الوقت.",
    submit: "حلّل احتياجات منشأتي", analyzing: "جارٍ فهم احتياجات منشأتك...",
    demoNotice: "نسخة تجريبية: التوصيات مبنية على كتالوج توضيحي. يرجى التأكد من الخطط والأسعار الحالية لدى مزودي الأدوات قبل الشراء.",
    resultsEyebrow: "خطتك التقنية المخصصة", resultsTitle: "طريق أوضح لاختيار الأدوات.",
    resultsDesc: "هذه الاقتراحات نقطة بداية مبنية على المعلومات التي شاركتها.",
    fit: "ملاءمة المنشأة", budgetFit: "ملاءمة الميزانية", setup: "جهد التطبيق",
    recommended: "الأدوات المقترحة", compare: "قارن الخيارات",
    why: "لماذا تناسبك؟", bestFor: "الاستخدام الأنسب", pricing: "نموذج التسعير", tradeoff: "ما يجب مراعاته",
    freeTier: "تتوفر بداية مجانية / خطة دخول", freemium: "خطة مجانية؛ تختلف مزايا الخطط المدفوعة", paid: "خطط مدفوعة؛ تحقق من الأسعار الحالية",
    roadmap: "خطة التطبيق المقترحة", phase1: "ابدأ بخطوة صغيرة", phase2: "اربط سير العمل", phase3: "قِس النتائج وطوّر",
    phase1d: "ابدأ بأداة واحدة ذات أثر واضح، وانقل مهمة واحدة من العمل اليدوي إلى الرقمي.",
    phase2d: "اربط الأدوات التي تستخدمها وحدد إجراءً بسيطًا يمكن تكراره.",
    phase3d: "راجع الاستخدام والوقت الذي تم توفيره والتكلفة قبل التوسع.",
    optionalMonitoring: "اختياري: المراقبة والتحسين المستمر",
    monitoringOn: "أبديت اهتمامك بالمتابعة. يمكن لوَثبة مراجعة الأداء دوريًا ومقارنة البدائل مع تطور احتياجات منشأتك.",
    monitoringOff: "لم يتم اختيارها. يمكنك تفعيل المتابعة لاحقًا إذا رغبت في مراجعة الأداء والبحث عن أدوات أفضل من حيث القيمة.",
    edit: "تعديل بيانات المنشأة", newPlan: "إنشاء خطة جديدة", copy: "نسخ ملخص الخطة", copied: "تم نسخ الملخص",
    agentTitle: "كيف وصل وَثبة إلى هذه التوصيات؟", agentDesc: "سير عمل متعدد الوكلاء يحوّل معلومات منشأتك إلى خطة عملية.",
    agent1: "محلل المنشأة", agent1d: "يرتب معلومات المنشأة وأهدافها وقيودها.",
    agent2: "محلل الاحتياجات", agent2d: "يحدد القدرات التقنية التي تحتاجها المنشأة فعليًا.",
    agent3: "باحث الأدوات", agent3d: "يطابق الاحتياجات مع الأدوات والبدائل الاقتصادية المناسبة.",
    agent4: "مخطط التطبيق", agent4d: "يحول التوصيات إلى مراحل تطبيق واضحة.",
    noGoals: "تحسين إنتاجية الأعمال بشكل عام", defaultChallenge: "تريد اختيار أدوات تقنية مفيدة دون إنفاق أكثر من اللازم.",
    localDemo: "تحليل تجريبي محلي", notLive: "كتالوج توضيحي · ليس بحثًا مباشرًا عن الأدوات",
    priceDisclaimer: "تتغير الأسعار والخطط. تأكد من التفاصيل لدى مزود كل أداة قبل الاشتراك.",
    errors: "يرجى إدخال اسم المنشأة، واختيار المجال، وهدف واحد على الأقل، وتحديد الميزانية.",
    monitoringLabel: "تفضيل المتابعة", yes: "مهتم", no: "ليس الآن",
    tools: "أدوات", toolCount: "خيارات مناسبة", resultNote: "لا يجري وَثبة عمليات شراء أو تغييرات في أنظمتك دون موافقتك.",
  }
};

const CATALOG = [
  { id:"canva", name:"Canva", category:"marketing", fit:["التسويق ووسائل التواصل","Marketing and social media","إنشاء موقع أو متجر إلكتروني","Build a website or online store"], price:"freemium", effort:"Low", best:"Social posts, presentations and simple brand assets", bestAr:"تصميم المنشورات والعروض والهوية البصرية البسيطة", why:"Easy for a small team to create consistent visual content.", whyAr:"يساعد الفريق الصغير على إنتاج محتوى بصري متناسق دون مهارات تصميم متقدمة.", trade:"Advanced brand controls and team features may require a paid plan.", tradeAr:"قد تحتاج مزايا الهوية المتقدمة والعمل الجماعي إلى خطة مدفوعة.", url:"https://www.canva.com/" },
  { id:"wordpress", name:"WordPress", category:"website", fit:["إنشاء موقع أو متجر إلكتروني","Build a website or online store"], price:"freemium", effort:"Medium", best:"Flexible business websites and content", bestAr:"مواقع المنشآت المرنة وإدارة المحتوى", why:"Offers flexibility and a large ecosystem of themes and plugins.", whyAr:"يوفر مرونة كبيرة ونظامًا واسعًا من القوالب والإضافات.", trade:"Hosting, updates and plugin choices need ongoing attention.", tradeAr:"يحتاج إلى استضافة وتحديثات واختيار الإضافات المناسبة.", url:"https://wordpress.org/" },
  { id:"wix", name:"Wix", category:"website", fit:["إنشاء موقع أو متجر إلكتروني","Build a website or online store"], price:"paid", effort:"Low", best:"Quick website launch with a visual editor", bestAr:"إطلاق موقع بسرعة باستخدام محرر مرئي", why:"A visual builder can reduce the need for custom development.", whyAr:"يسهّل إنشاء الموقع دون الحاجة إلى برمجة مخصصة.", trade:"Some business features and customizations depend on paid plans.", tradeAr:"تعتمد بعض مزايا الأعمال والتخصيص على الخطط المدفوعة.", url:"https://www.wix.com/" },
  { id:"hubspot", name:"HubSpot CRM", category:"crm", fit:["إدارة العملاء والمبيعات","Manage customers and sales"], price:"freemium", effort:"Medium", best:"Organizing contacts, leads and sales follow-up", bestAr:"تنظيم العملاء المحتملين ومتابعة المبيعات", why:"Provides a structured place to track customer relationships.", whyAr:"يوفر مكانًا منظمًا لتسجيل العملاء ومتابعة العلاقات معهم.", trade:"Advanced automation and reporting can require paid tiers.", tradeAr:"قد تتطلب الأتمتة والتقارير المتقدمة خططًا مدفوعة.", url:"https://www.hubspot.com/products/crm" },
  { id:"zoho", name:"Zoho CRM", category:"crm", fit:["إدارة العملاء والمبيعات","Manage customers and sales"], price:"paid", effort:"Medium", best:"Sales pipelines and business customer management", bestAr:"إدارة مراحل البيع والعملاء", why:"Useful when a business needs more structured sales processes.", whyAr:"مناسب عندما تحتاج المنشأة إلى تنظيم أكبر لعمليات البيع.", trade:"Compare feature limits and local support before committing.", tradeAr:"قارن حدود المزايا والدعم المتاح قبل الاشتراك.", url:"https://www.zoho.com/crm/" },
  { id:"make", name:"Make", category:"automation", fit:["أتمتة المهام المتكررة","Automate repetitive tasks","تنظيم الملفات وسير العمل","Organize documents and workflows"], price:"freemium", effort:"Medium", best:"Connecting apps and automating repetitive workflows", bestAr:"ربط التطبيقات وأتمتة المهام المتكررة", why:"Visual automation helps connect tools without building everything from scratch.", whyAr:"يساعد على ربط الأدوات بصريًا دون بناء كل شيء من الصفر.", trade:"Complex scenarios need testing and careful usage-limit monitoring.", tradeAr:"تحتاج السيناريوهات المعقدة إلى اختبار ومتابعة حدود الاستخدام.", url:"https://www.make.com/" },
  { id:"n8n", name:"n8n", category:"automation", fit:["أتمتة المهام المتكررة","Automate repetitive tasks","استخدام الذكاء الاصطناعي في العمل","Use AI in daily work"], price:"freemium", effort:"High", best:"Flexible workflow automation and AI integrations", bestAr:"أتمتة مرنة وربط تطبيقات الذكاء الاصطناعي", why:"Offers control and flexibility for teams with technical support.", whyAr:"يوفر تحكمًا ومرونة أكبر إذا توفر دعم تقني للتجهيز.", trade:"Self-hosting and maintenance may require technical skills.", tradeAr:"قد يحتاج التشغيل الذاتي والصيانة إلى مهارات تقنية.", url:"https://n8n.io/" },
  { id:"google-workspace", name:"Google Workspace", category:"collaboration", fit:["تحسين تعاون الفريق","Improve team collaboration","تنظيم الملفات وسير العمل","Organize documents and workflows"], price:"paid", effort:"Low", best:"Business email, shared files and team collaboration", bestAr:"البريد الرسمي والملفات المشتركة وتعاون الفريق", why:"Brings common productivity tools into one familiar environment.", whyAr:"يجمع أدوات الإنتاجية الشائعة في بيئة واحدة مألوفة.", trade:"Business email and administration features are subscription-based.", tradeAr:"تتطلب ميزات البريد الرسمي وإدارة المنشأة اشتراكًا.", url:"https://workspace.google.com/" },
  { id:"notion", name:"Notion", category:"collaboration", fit:["تنظيم الملفات وسير العمل","Organize documents and workflows","تحسين تعاون الفريق","Improve team collaboration"], price:"freemium", effort:"Low", best:"Internal knowledge, task tracking and lightweight processes", bestAr:"تنظيم المعرفة الداخلية والمهام والإجراءات البسيطة", why:"Can replace scattered notes and basic trackers with shared pages.", whyAr:"يساعد على جمع الملاحظات والمهام المتفرقة في مساحة مشتركة.", trade:"A clear workspace structure is needed to avoid clutter.", tradeAr:"يحتاج إلى تنظيم واضح للمساحة لتجنب الفوضى.", url:"https://www.notion.so/" },
  { id:"powerbi", name:"Power BI", category:"analytics", fit:["تحليل البيانات والتقارير","Analyze data and reports"], price:"freemium", effort:"Medium", best:"Business dashboards and reporting", bestAr:"لوحات مؤشرات الأعمال والتقارير", why:"Turns business data into visual reports for decision-making.", whyAr:"يحوّل بيانات المنشأة إلى تقارير مرئية تدعم اتخاذ القرار.", trade:"Data preparation and some sharing capabilities need planning.", tradeAr:"تحتاج تهيئة البيانات وبعض خيارات المشاركة إلى تخطيط.", url:"https://www.microsoft.com/power-platform/products/power-bi" },
  { id:"sheets", name:"Google Sheets", category:"analytics", fit:["تحليل البيانات والتقارير","Analyze data and reports","إدارة العملاء والمبيعات","Manage customers and sales"], price:"freemium", effort:"Low", best:"Simple trackers, budgets and lightweight reporting", bestAr:"متابعة البيانات والميزانيات والتقارير البسيطة", why:"A low-barrier starting point if the team already uses spreadsheets.", whyAr:"بداية سهلة إذا كان الفريق معتادًا على الجداول الإلكترونية.", trade:"Large or sensitive workflows may outgrow spreadsheet-based processes.", tradeAr:"قد تتجاوز العمليات الكبيرة أو الحساسة قدرات الجداول الإلكترونية.", url:"https://sheets.google.com/" },
  { id:"chatgpt", name:"ChatGPT", category:"ai", fit:["استخدام الذكاء الاصطناعي في العمل","Use AI in daily work","التسويق ووسائل التواصل","Marketing and social media"], price:"freemium", effort:"Low", best:"Drafting, brainstorming, summarizing and everyday assistance", bestAr:"صياغة المحتوى وتوليد الأفكار والتلخيص والمساعدة اليومية", why:"Can support many knowledge tasks when staff review the output.", whyAr:"يساعد في مهام معرفية متنوعة مع ضرورة مراجعة المخرجات.", trade:"Do not enter confidential customer or business data without approved safeguards.", tradeAr:"لا تدخل بيانات العملاء أو المنشأة السرية دون ضوابط معتمدة.", url:"https://chatgpt.com/" },
  { id:"mailchimp", name:"Mailchimp", category:"marketing", fit:["التسويق ووسائل التواصل","Marketing and social media","إدارة العملاء والمبيعات","Manage customers and sales"], price:"freemium", effort:"Low", best:"Email campaigns and customer communication", bestAr:"الحملات البريدية والتواصل مع العملاء", why:"Helps organize marketing messages and campaign performance.", whyAr:"يساعد على تنظيم الرسائل التسويقية ومتابعة الحملات.", trade:"Pricing can scale with audience size and feature needs.", tradeAr:"قد ترتفع التكلفة مع زيادة عدد الجمهور والاحتياجات.", url:"https://mailchimp.com/" }
];

const AGENTS = [
  { icon:Building2, color:"violet", en:"Business analyst", ar:"محلل المنشأة", enDesc:"Organizes your business profile, goals and constraints.", arDesc:"يرتب معلومات المنشأة وأهدافها وقيودها." },
  { icon:Target, color:"blue", en:"Needs analyst", ar:"محلل الاحتياجات", enDesc:"Identifies the capabilities your business actually needs.", arDesc:"يحدد القدرات التقنية التي تحتاجها المنشأة فعليًا." },
  { icon:Search, color:"green", en:"Tool researcher", ar:"باحث الأدوات", enDesc:"Matches needs with suitable tools and budget-friendly alternatives.", arDesc:"يطابق الاحتياجات مع الأدوات والبدائل الاقتصادية المناسبة." },
  { icon:Workflow, color:"orange", en:"Implementation planner", ar:"مخطط التطبيق", enDesc:"Turns recommendations into a phased adoption roadmap.", arDesc:"يحول التوصيات إلى مراحل تطبيق واضحة." }
];

function App() {
  const [lang, setLang] = useState("ar");
  const [page, setPage] = useState("home");
  const [showIntro, setShowIntro] = useState(true);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name:"", sector:"", stage:"", team:"", goals:[], challenge:"", budget:"", currentTools:"", monitoring:false
  });
  const [selectedTool, setSelectedTool] = useState(null);
  const [execution, setExecution] = useState(null);
  const [executionBusy, setExecutionBusy] = useState(false);
  const [executionLog, setExecutionLog] = useState([]);
  const [showExecution, setShowExecution] = useState(false);
  const [activeAgent, setActiveAgent] = useState(null);
  const [agentChatInput, setAgentChatInput] = useState("");
  const [agentChatMessages, setAgentChatMessages] = useState([]);
  const [showWebsiteBuilder, setShowWebsiteBuilder] = useState(false);
  const [websiteHtml, setWebsiteHtml] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [websiteType, setWebsiteType] = useState("موقع تعريفي");
  const [websiteDescription, setWebsiteDescription] = useState("");
  const [websiteContact, setWebsiteContact] = useState("");
  const [websiteColor, setWebsiteColor] = useState("#c85c9a");
  const [websiteProductName, setWebsiteProductName] = useState("LUMA Gloss");
  const [websiteHeadline, setWebsiteHeadline] = useState("لمعتك تكمّل إطلالتك");
  const [websiteStyle, setWebsiteStyle] = useState("ناعم وعصري");
  const [websiteImage, setWebsiteImage] = useState("/luma-product-reference.png");

  const t = COPY[lang];
  const ar = lang === "ar";

  useEffect(() => {
    if (!showIntro) return undefined;
    const timer = window.setTimeout(() => setShowIntro(false), 30000);
    return () => window.clearTimeout(timer);
  }, [showIntro]);

  const recommendations = useMemo(() => {
    const goals = form.goals.length ? form.goals : [t.noGoals];
    const normalizedGoals = goals.map(goal => {
      const arIndex = COPY.ar.goalOptions.indexOf(goal);
      return arIndex >= 0 ? COPY.en.goalOptions[arIndex] : goal;
    });
    let list = CATALOG.filter(tool => tool.fit.some(item => normalizedGoals.includes(item)));
    if (!list.length) list = CATALOG.filter(tool => ["notion","sheets","chatgpt"].includes(tool.id));
    const lowBudget = /أقل من|250|500|Under SAR|SAR 250|SAR 500/.test(form.budget);
    if (lowBudget) {
      list.sort((a,b) => (a.price === "freemium" ? -1 : 1) - (b.price === "freemium" ? -1 : 1));
    }
    const unique = [];
    for (const item of list) if (!unique.some(x => x.id === item.id)) unique.push(item);
    return unique.slice(0, 5);
  }, [form.goals, form.budget, lang, t.noGoals, t.budgets]);

  const update = (key, value) => setForm(old => ({...old, [key]:value}));
  const toggleGoal = goal => update("goals", form.goals.includes(goal) ? form.goals.filter(x=>x!==goal) : [...form.goals, goal]);

  const analyze = () => {
    if (!form.name.trim() || !form.sector || !form.goals.length || !form.budget) {
      alert(t.errors); return;
    }
    setBusy(true); setDone(false);
    window.setTimeout(() => { setBusy(false); setDone(true); setPage("results"); }, 1700);
  };

  const runImplementation = async (tool = null) => {
    if (tool?.category === "website") {
      // Show an illustrative website result immediately; users can customize it afterward.
      setShowWebsiteBuilder(true);
      setWebsiteHtml("");
      setWebsiteError("");
      setWebsiteDescription(form.challenge || "");
      setWebsiteContact("");
      setWebsiteType("موقع تعريفي");
      setWebsiteColor("#c85c9a");
      setWebsiteProductName("LUMA Gloss");
      setWebsiteHeadline("لمعتك تكمّل إطلالتك");
      setWebsiteStyle("ناعم وعصري");
      setWebsiteImage("/luma-product-reference.png");
      return;
    }
    const targets = tool ? [tool] : recommendations;
    setShowExecution(true);
    setExecutionBusy(true);
    setExecution({ mode: tool ? "single" : "master", targets: targets.map(x=>x.name), current: 0, status: "running" });
    setExecutionLog([]);
    const stages = ar
      ? ["تحليل متطلبات الإعداد والصلاحيات", "تجهيز خطوات التهيئة", "مراجعة نقاط الربط والتكامل", "إعداد قائمة تحقق للتسليم"]
      : ["Reviewing setup requirements and permissions", "Preparing configuration steps", "Checking integration requirements", "Preparing a handover checklist"];
    for (let i=0;i<targets.length;i++) {
      setExecution(x=>({...x,current:i+1}));
      for (const stage of stages) {
        setExecutionLog(old=>[...old, `${targets[i].name}: ${stage}`]);
        await new Promise(resolve=>setTimeout(resolve,420));
      }
    }
    setExecution(x=>({...x,status:"completed"}));
    setExecutionBusy(false);
  };

  const downloadCampaignKit = async (format = "html") => {
    const title = "حملة غلوس LUMA Beauty — لمعة تكمّل إطلالتك";
    const posts = [
      {name:"منشور الإطلاق", caption:"لمعتك الجديدة وصلت ✨ غلوس LUMA بلمعة زجاجية وملمس مريح. اختاري لمعتك وخلي حضورك يتكلم. اطلبينه الآن!", visual:"لقطة قريبة للشفاه مع انعكاس لامع وخلفية وردية ناعمة", tag:"#LUMA_Beauty #غلوس #لمعة_كل_يوم"},
      {name:"منشور إبراز المزايا", caption:"لمعة واضحة بدون تعقيد 💗 غلوس LUMA يضيف لمسة مشرقة لإطلالتك اليومية. خذيه معك من الدوام إلى طلعتك.", visual:"العبوة بجانب مرآة صغيرة وإضاءة طبيعية", tag:"#LUMA_Gloss #جمالك_ببساطة"},
      {name:"منشور التفاعل", caption:"أي لمعة تمثّلك اليوم؟ 🌸 ناعمة وهادية أو لامعة وجريئة؟ اكتبي اختيارك بالتعليقات وشاركي المنشور مع صديقتك.", visual:"ثلاث درجات غلوس مرتبة بجانب أسماء الدرجات", tag:"#اختاري_لمعتك #LUMA_Beauty"}
    ];
    const calendar = "اليوم 1: منشور الإطلاق | اليوم 3: فيديو قصير لتطبيق الغلوس | اليوم 5: منشور المزايا | اليوم 7: سؤال تفاعلي عن الدرجة المفضلة";
    const textContent = `${title}\n\nالجمهور: محبات مستحضرات التجميل من 18–34 سنة (افتراض تجريبي).\nالهدف: رفع الوعي بالمنتج وتشجيع الطلبات.\nالرسالة: لمعة جميلة وسهلة لكل يوم.\n\n${posts.map(p=>`${p.name}\nالنص: ${p.caption}\nفكرة التصميم: ${p.visual}\nالوسوم: ${p.tag}`).join("\n\n")}\n\nخطة المحتوى: ${calendar}\n\nملاحظة: علامة LUMA Beauty والمنتج والحملة أمثلة خيالية للعرض فقط.`;
    let blob;
    let filename;
    if (format === "txt") {
      blob = new Blob(["\\ufeff", textContent], {type:"text/plain;charset=utf-8"});
      filename = "LUMA-gloss-marketing-campaign.txt";
    } else {
      const escapeHtml = value => String(value).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
      let campaignImage = websiteImage || "/luma-product-reference.png";
      if (campaignImage && !campaignImage.startsWith("data:") && !campaignImage.startsWith("blob:")) {
        const response = await fetch(campaignImage);
        if (!response.ok) throw new Error("تعذر تحميل صورة المنتج لإضافتها إلى ملف الحملة.");
        const imageBlob = await response.blob();
        campaignImage = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result || ""));
          reader.onerror = () => reject(new Error("تعذر تجهيز صورة المنتج."));
          reader.readAsDataURL(imageBlob);
        });
      }
      const cards = posts.map((p,i)=>`<article><img class="post-image" src="${campaignImage}" alt="صورة منتج LUMA Gloss"><h2>${escapeHtml(p.name)}</h2><p>${escapeHtml(p.caption)}</p><h3>فكرة التصميم</h3><p>${escapeHtml(p.visual)}</p><p class="tags">${escapeHtml(p.tag)}</p></article>`).join("");
      const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>*{box-sizing:border-box}body{font-family:Tahoma,Arial;background:#fff7fb;color:#392333;margin:0;padding:32px;line-height:1.9}.wrap{max-width:900px;margin:auto}header{background:linear-gradient(120deg,#5d244f,#d96e9c);color:white;padding:36px;border-radius:24px;display:grid;grid-template-columns:1fr 220px;gap:24px;align-items:center}header img{width:100%;height:230px;object-fit:cover;border-radius:18px}h1{font-size:34px}article{background:white;border:1px solid #f1d7e4;border-radius:18px;padding:24px;margin:18px 0;display:grid;grid-template-columns:180px 1fr;column-gap:22px;align-items:start}article h2,article h3,article p:not(.tags){grid-column:2}.post-image{grid-column:1;grid-row:1/5;width:100%;height:180px;object-fit:cover;border-radius:14px}.tags{color:#a33b70;font-weight:bold;grid-column:2}.note{color:#805d70;font-size:13px}@media(max-width:600px){body{padding:14px}header{grid-template-columns:1fr}header img{height:200px}article{grid-template-columns:1fr}article h2,article h3,article p:not(.tags),.post-image,.tags{grid-column:1;grid-row:auto}.post-image{height:220px}}</style></head><body><main class="wrap"><header><div><small>LUMA BEAUTY · CAMPAIGN CONCEPT</small><h1>لمعتك تكمّل إطلالتك ✨</h1><p>حملة إطلاق غلوس LUMA — نموذج تسويقي تجريبي</p></div><img src="${campaignImage}" alt="منتج LUMA Gloss"></header><h2>فكرة الحملة</h2><p>الهدف: رفع الوعي بالمنتج وتشجيع الطلبات. الجمهور المقترح: محبات مستحضرات التجميل من 18–34 سنة.</p>${cards}<h2>خطة المحتوى الأسبوعية</h2><p>${escapeHtml(calendar)}</p><p class="note">هذه حملة خيالية للعرض. اسم العلامة والمنتج والادعاءات التسويقية أمثلة افتراضية وليست منتجًا حقيقيًا.</p></main></body></html>`;
      blob = new Blob(["\\ufeff", html], {type:"text/html;charset=utf-8"});
      filename = "LUMA-gloss-marketing-campaign.html";
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleWebsiteImage = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) { setWebsiteError("اختاري ملف صورة بصيغة PNG أو JPG أو WebP."); return; }
    if (file.size > 5 * 1024 * 1024) { setWebsiteError("حجم الصورة كبير. اختاري صورة أقل من 5 ميجابايت."); return; }
    const reader = new FileReader();
    reader.onload = () => setWebsiteImage(String(reader.result || ""));
    reader.onerror = () => setWebsiteError("تعذر قراءة الصورة. حاولي اختيارها مرة أخرى.");
    reader.readAsDataURL(file);
  };

  const createWebsite = () => {
    try {
    setWebsiteError("");
    const esc = (value) => String(value || "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
    const business = esc(form.name || "مشروعي");
    const sector = esc(form.sector || "خدمات الأعمال");
    const description = esc(websiteDescription || `نقدم خدمات ${form.sector || "مميزة"} بجودة واهتمام بالتفاصيل.`);
    const contact = esc(websiteContact);
    const productName = esc(websiteProductName || form.name || "منتجي");
    const headline = esc(websiteHeadline || "اكتشفوا منتجاتنا");
    const style = esc(websiteStyle || "ناعم وعصري");
    const imageSrc = websiteImage || "/luma-product-reference.png";
    const color = /^#[0-9a-fA-F]{6}$/.test(websiteColor) ? websiteColor : "#c85c9a";
    const isStore = websiteType.includes("متجر");
    const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${business}</title><style>*{box-sizing:border-box}body{margin:0;font-family:Tahoma,Arial,sans-serif;color:#342638;background:#fff8fc}header{background:white;padding:18px 7%;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f1dce8;position:sticky;top:0}header strong{font-size:22px;color:${color}}.hero{padding:58px 7%;background:linear-gradient(130deg,${color},#f4b8d5);color:white;display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:center}.hero h1{font-size:clamp(34px,5vw,56px);margin:18px 0}.hero p{font-size:18px;line-height:1.9}.product-photo{width:100%;max-height:420px;object-fit:cover;border-radius:24px;background:#fff;box-shadow:0 18px 55px #5d244f35}.btn{display:inline-block;background:white;color:${color};padding:14px 24px;border-radius:999px;font-weight:bold;margin-top:16px;text-decoration:none}.section{padding:48px 7%}.product-feature{display:grid;grid-template-columns:220px 1fr;gap:22px;align-items:center;background:white;padding:20px;border:1px solid #f0dce6;border-radius:20px}.product-feature img{width:100%;height:220px;object-fit:cover;border-radius:14px}footer{padding:28px 7%;background:#342638;color:white}@media(max-width:650px){.hero{padding:42px 7%;grid-template-columns:1fr}.product-feature{grid-template-columns:1fr}}</style></head><body><header><strong>${business}</strong><span>${sector}</span></header><main><section class="hero"><div><small>${style} · مرحبًا بك في ${business}</small><h1>${headline}</h1><p>${description}</p><a class="btn" href="#product">${isStore?"اكتشف المنتج":"تعرف على خدماتنا"}</a></div><img class="product-photo" src="${imageSrc}" alt="${productName}"></section><section class="section" id="product"><h2>${isStore?"منتجنا المميز":"ماذا نقدم؟"}</h2><div class="product-feature"><img src="${imageSrc}" alt="${productName}"><div><h2>${productName}</h2><p>${description}</p><a class="btn" style="background:${color};color:white" href="#contact">${isStore?"اطلب المنتج":"تواصل معنا"}</a></div></div></section><section class="section" id="contact"><h2>تواصل معنا</h2><p>${contact || "أضف وسيلة التواصل الخاصة بمنشأتك."}</p></section></main><footer>© ${new Date().getFullYear()} ${business} — نموذج تجريبي غير منشور</footer></body></html>`;
    if (!html || !html.includes("</html>")) throw new Error("تعذر تجهيز ملف الموقع. راجعي البيانات وحاولي مرة أخرى.");
    setWebsiteHtml(html);
    } catch (error) {
      console.error("Website generation failed:", error);
      setWebsiteError(error?.message || "حدث خطأ أثناء إنشاء الموقع. حاولي مرة أخرى.");
    }
  };

  const downloadWebsite = async () => {
    try {
      let htmlForDownload = websiteHtml;
      // Make the downloaded HTML self-contained: local public-folder images
      // must be embedded, otherwise they disappear when the file is opened offline.
      if (websiteImage && !websiteImage.startsWith("data:") && !websiteImage.startsWith("blob:")) {
        const response = await fetch(websiteImage);
        if (!response.ok) throw new Error("تعذر تحميل صورة المنتج لتضمينها في ملف الموقع.");
        const imageBlob = await response.blob();
        const imageDataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result || ""));
          reader.onerror = () => reject(new Error("تعذر تجهيز صورة المنتج للتنزيل."));
          reader.readAsDataURL(imageBlob);
        });
        htmlForDownload = htmlForDownload.split(websiteImage).join(imageDataUrl);
      }
      const blob = new Blob([htmlForDownload], {type:"text/html;charset=utf-8"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "wathbah-website.html";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error("Website download failed:", error);
      setWebsiteError(error?.message || "تعذر تنزيل الموقع. حاولي مرة أخرى.");
    }
  };

  const openAgentChat = (agent, index) => {
    setActiveAgent({ ...agent, index });
    setAgentChatInput("");
    setAgentChatMessages([{
      role:"assistant",
      text: ar
        ? `مرحبًا، أنا ${agent.ar}. اشرح لي ما تريد تحقيقه، واذكر ميزانيتك وتفضيلاتك أو أي قيود مهمة. سأساعدك في توضيح المتطلبات وتجهيز خطة عمل مناسبة.`
        : `Hi, I'm your ${agent.en}. Tell me what you want to achieve, your budget, preferences, and any constraints. I'll help clarify the requirements and prepare a tailored action plan.`
    }]);
  };

  const sendAgentMessage = () => {
    const message = agentChatInput.trim();
    if (!message || !activeAgent) return;
    const wantsHuman = /(إنسان|انسان|شخص|موظف|مسؤول|مسؤولة|الدعم البشري|أكلم أحد|اكلم احد|أتواصل مع أحد|اتواصل مع احد|بشرية)/i.test(message);
    const confused = /(ما فهمت|مو فاهم|ماني فاهم|ما فهم|مو واضح|غير واضح|اشرح أكثر|اشرح اكثر|ما استوعبت|تلخبطت|صعب علي)/i.test(message);
    const response = ar
      ? (wantsHuman
        ? "أكيد! تقدرين تتواصلين مباشرة مع مسؤولة الدعم البشري عبر البيانات التالية:"
        : confused
          ? "ولا يهمك 🌷 خليني أبسطها لك: أقدر أمشي معك خطوة بخطوة ونبدأ بأبسط جزء. وإذا تفضلين مساعدة من شخص، أقدر أعرض لك بيانات مسؤولة الدعم البشري."
          : `فهمت طلبك: «${message}»\\n\\nخلّنا نحوله إلى خطوات واضحة:\\n1. تحديد النتيجة المطلوبة ومعيار النجاح.\\n2. مراعاة ميزانيتك والأدوات التي تستخدمينها حاليًا.\\n3. إعداد خطوات التنفيذ والمتطلبات والصلاحيات اللازمة.\\n4. عرض الخطة عليك قبل أي إجراء خارجي.\\n\\nإذا احتجتِ مساعدة بشرية في أي وقت، اكتبي «أبغى أكلم شخص».\\n\\nملاحظة: هذه نسخة تجريبية للمحادثة؛ لا يتم الدخول إلى حساباتك أو تغيير إعدادات الأدوات فعليًا من هذه الشاشة.`)
      : (wantsHuman
        ? "Of course. You can contact the human support owner using these details:"
        : confused
          ? "No problem. I'll simplify it and guide you step by step. If you prefer human help, I can show you the support contact details."
          : `I understand your request: “${message}”\\n\\nLet's turn it into a clear action plan:\\n1. Define the outcome and how success will be measured.\\n2. Account for your budget and current tools.\\n3. Prepare setup steps and requirements.\\n4. Show you the plan before any external action.\\n\\nType “talk to a person” anytime to reach human support.\\n\\nNote: this is a prototype chat and does not access your accounts or change vendor settings.`);
    setAgentChatMessages(old => [...old, {role:"user",text:message}, {role:"assistant",text:response, showSupport: wantsHuman || confused}]);
    setAgentChatInput("");
  };

  const summary = () => {
    const toolNames = recommendations.map(x=>x.name).join(", ");
    return `${t.resultsTitle}\n${t.businessName}: ${form.name}\n${t.sector}: ${form.sector}\n${t.budget}: ${form.budget}\n${t.recommended}: ${toolNames}\n${t.roadmap}: ${t.phase1} → ${t.phase2} → ${t.phase3}\n${t.optionalMonitoring}: ${form.monitoring ? t.yes : t.no}`;
  };
  const copySummary = async () => {
    try { await navigator.clipboard.writeText(summary()); setCopied(true); window.setTimeout(()=>setCopied(false),1800); }
    catch { setCopied(false); }
  };
  const reset = () => {
    setForm({name:"",sector:"",stage:"",team:"",goals:[],challenge:"",budget:"",currentTools:"",monitoring:false});
    setDone(false); setPage("form");
  };

  return (
    <div className={ar ? "app rtl" : "app ltr"} dir={ar ? "rtl" : "ltr"} lang={lang}>
      {showIntro && <section className="intro-overlay" aria-label={ar ? "مقدمة وَثبة AI" : "Wathbah AI introduction"}>
        <iframe
          className="intro-fullscreen-frame"
          src={`${import.meta.env.BASE_URL}wathbah-intro.html`}
          title={ar ? "المقدمة السينمائية لوَثبة AI" : "Wathbah AI cinematic introduction"}
          allow="autoplay"
          loading="eager"
        />
        <button className="intro-skip-overlay" onClick={() => setShowIntro(false)}>
          {ar ? "تخطي المقدمة" : "Skip intro"} <X size={16}/>
        </button>
      </section>}
      <header className="topbar">
        <button className="brand" onClick={()=>setPage("home")} aria-label="Wathbah home">
          <span className="brand-mark"><Sparkles size={20}/></span>
          <span><strong>{t.brand}</strong><small>{t.tagline}</small></span>
        </button>
        <nav className="desktop-nav">
          <a href="#how" onClick={()=>setPage("home")}>{t.navHow}</a>
          <a href="#services" onClick={()=>setPage("home")}>{t.navServices}</a>
          <a href="#about" onClick={()=>setPage("home")}>{t.navAbout}</a>
        </nav>
        <div className="top-actions">
          <button className="intro-replay" onClick={()=>setShowIntro(true)}><Play size={14}/>{ar?"الفيديو التشويقي":"Watch teaser"}</button>
          <button className="lang-btn" onClick={()=>setLang(ar?"en":"ar")}><Globe2 size={16}/>{t.language}</button>
          <button className="nav-cta" onClick={()=>setPage("form")}>{t.start}<ArrowUpRight size={16}/></button>
        </div>
      </header>

      {page === "home" && <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"/>{t.eyebrow}</div>
            <h1>{t.heroA}<br/><span>{t.heroB}</span></h1>
            <p>{t.heroDesc}</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={()=>setPage("form")}>{t.start}<ArrowRight size={18}/></button>
              <a className="text-btn" href="#how">{t.seeHow}<ChevronRight size={17}/></a>
            </div>
            <div className="hero-proof"><ShieldCheck size={17}/>{t.trust}</div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="glow-core"><div className="core-icon"><Sparkles size={34}/></div><strong>WATHBAH AI</strong><small>{ar?"يفهم احتياجك · يقترح الحل":"UNDERSTAND · RECOMMEND"}</small></div>
            <div className="float-card float-top"><span className="float-icon purple"><Target size={17}/></span><div><b>{ar?"احتياجك أولًا":"Your needs first"}</b><small>{ar?"تحليل حسب نشاطك":"Business-aware analysis"}</small></div></div>
            <div className="float-card float-bottom"><span className="float-icon mint"><CircleDollarSign size={17}/></span><div><b>{ar?"يراعي ميزانيتك":"Budget-conscious"}</b><small>{ar?"بدائل مجانية واقتصادية":"Free and affordable options"}</small></div></div>
            <div className="spark spark-a">✦</div><div className="spark spark-b">✧</div>
          </div>
        </section>
        <section className="stats-strip">
          <div><BadgeCheck size={19}/><span>{t.stat1}</span></div><div><Lightbulb size={19}/><span>{t.stat2}</span></div><div><Activity size={19}/><span>{t.stat3}</span></div>
        </section>
        <section className="section" id="how">
          <div className="section-heading"><span className="section-eyebrow">{t.howEyebrow}</span><h2>{t.howTitle}</h2><p>{t.howDesc}</p></div>
          <div className="steps-grid">
            {[ [Compass,t.step1,t.step1d], [BrainIcon,t.step2,t.step2d], [Layers3,t.step3,t.step3d], [ListChecks,t.step4,t.step4d] ].map(([Icon,title,desc],i)=><article className="step-card" key={i}><div className="step-top"><span className="step-icon"><Icon size={22}/></span><small>0{i+1}</small></div><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </section>
        <section className="services-section" id="services">
          <div className="section-heading"><span className="section-eyebrow">{t.servicesEyebrow}</span><h2>{t.servicesTitle}</h2></div>
          <div className="service-grid">
            <article className="service-card core-service"><span className="service-tag">{t.coreTag}</span><div className="service-icon"><WandSparkles size={24}/></div><h3>{t.coreTitle}</h3><p>{t.coreDesc}</p><div className="service-line"><Check size={16}/>{ar?"تحليل ومقارنة وخطة تطبيق":"Analysis, comparison and adoption plan"}</div></article>
            <article className="service-card optional-service"><span className="service-tag">{t.optionalTag}</span><div className="service-icon"><Activity size={24}/></div><h3>{t.optionalTitle}</h3><p>{t.optionalDesc}</p><div className="optional-note"><LockKeyhole size={15}/>{t.optionalNote}</div></article>
          </div>
        </section>
        <section className="bottom-cta" id="about"><div className="cta-orb"><Sparkles size={27}/></div><div><h2>{t.ctaTitle}</h2><p>{t.ctaDesc}</p></div><button className="primary-btn" onClick={()=>setPage("form")}>{t.cta}<ArrowRight size={18}/></button></section>
      </main>}

      {page === "form" && <main className="workspace">
        <div className="workspace-head"><button className="back-link" onClick={()=>setPage("home")}><ArrowLeft size={16}/>{t.back}</button><span className="workspace-label"><span className="live-dot"/>{t.workspace}</span></div>
        <div className="form-layout">
          <aside className="form-aside"><span className="section-eyebrow">{t.formEyebrow}</span><h1>{t.formTitle}</h1><p>{t.formDesc}</p><div className="aside-illustration"><Building2 size={38}/><div className="aside-orbit"/><Sparkles className="aside-spark" size={20}/></div><div className="privacy-note"><ShieldCheck size={17}/><span>{t.resultNote}</span></div></aside>
          <section className="form-card">
            <div className="form-section">
              <label>{t.businessName}<span className="required">*</span></label>
              <input value={form.name} onChange={e=>update("name",e.target.value)} placeholder={t.businessNamePh}/>
              <div className="form-row">
                <div><label>{t.sector}<span className="required">*</span></label><select value={form.sector} onChange={e=>update("sector",e.target.value)}><option value="">{t.sectorPh}</option>{t.sectors.map(x=><option key={x}>{x}</option>)}</select></div>
                <div><label>{t.stage}</label><select value={form.stage} onChange={e=>update("stage",e.target.value)}><option value="">{ar?"اختر المرحلة":"Choose stage"}</option>{t.stages.map(x=><option key={x}>{x}</option>)}</select></div>
              </div>
              <div className="form-row">
                <div><label>{t.team}</label><select value={form.team} onChange={e=>update("team",e.target.value)}><option value="">{t.teamPh}</option>{t.teams.map(x=><option key={x}>{x}</option>)}</select></div>
                <div><label>{t.budget}<span className="required">*</span></label><select value={form.budget} onChange={e=>update("budget",e.target.value)}><option value="">{ar?"اختر الميزانية":"Choose budget"}</option>{t.budgets.map(x=><option key={x}>{x}</option>)}</select></div>
              </div>
            </div>
            <div className="form-section">
              <div className="label-row"><label>{t.goals}<span className="required">*</span></label><small>{t.goalsHint}</small></div>
              <div className="goal-grid">{t.goalOptions.map((goal,i)=><button type="button" className={`goal-chip ${form.goals.includes(goal)?"selected":""}`} key={goal} onClick={()=>toggleGoal(goal)}><span className="check-box">{form.goals.includes(goal)&&<Check size={13}/>}</span>{goal}</button>)}</div>
            </div>
            <div className="form-section">
              <label>{t.challenge}</label><textarea rows="3" value={form.challenge} onChange={e=>update("challenge",e.target.value)} placeholder={t.challengePh}/>
              <label className="extra-label">{t.currentTools}</label><input value={form.currentTools} onChange={e=>update("currentTools",e.target.value)} placeholder={t.currentToolsPh}/>
            </div>
            <div className="monitor-optin"><div className="monitor-check"><input id="monitoring" type="checkbox" checked={form.monitoring} onChange={e=>update("monitoring",e.target.checked)}/><label htmlFor="monitoring">{t.monitoring}</label></div><p>{t.monitoringDesc}</p></div>
            <button className="primary-btn submit-btn" disabled={busy} onClick={analyze}>{busy?<><span className="spinner"/>{t.analyzing}</>:<>{t.submit}<Sparkles size={17}/></>}</button>
            <p className="demo-disclaimer"><ShieldCheck size={14}/>{t.demoNotice}</p>
          </section>
        </div>
      </main>}

      {page === "results" && <main className="workspace results-page">
        <div className="workspace-head"><button className="back-link" onClick={()=>setPage("form")}><ArrowLeft size={16}/>{t.edit}</button><span className="workspace-label"><span className="live-dot"/>{t.localDemo}</span></div>
        <div className="results-intro"><span className="section-eyebrow">{t.resultsEyebrow}</span><h1>{t.resultsTitle}</h1><p>{t.resultsDesc}</p><div className="result-business"><Building2 size={17}/><b>{form.name}</b><span>{form.sector}</span><span className="budget-pill"><CircleDollarSign size={14}/>{form.budget}</span></div></div>
        <div className="insight-grid"><div className="insight-card"><span>{t.fit}</span><strong>{ar?"مرتفع":"Strong"}</strong><small>{ar?"بناءً على أهدافك":"Based on selected goals"}</small></div><div className="insight-card"><span>{t.budgetFit}</span><strong>{ar?"يراعي الميزانية":"Budget-aware"}</strong><small>{ar?"تفضيل البدائل الاقتصادية":"Prioritizes accessible options"}</small></div><div className="insight-card"><span>{t.setup}</span><strong>{ar?"تدريجي":"Phased"}</strong><small>{ar?"ابدأ بأداة واحدة":"Start with one tool"}</small></div></div>
        <div className="results-section-title"><div><span className="section-eyebrow">{t.notLive}</span><h2>{t.recommended}</h2></div><span className="count-pill">{recommendations.length} {t.toolCount}</span></div>
        <div className="tools-grid">{recommendations.map((tool,i)=><article className={`tool-card ${i===0?"featured-tool":""}`} key={tool.id}>
          <div className="tool-top"><span className={`tool-logo logo-${tool.category}`}>{tool.name.slice(0,1)}</span><span className="match-pill"><CheckCircle2 size={13}/>{ar?"ملائم":"Good fit"}</span></div>
          <h3>{tool.name}</h3><p className="tool-best">{ar?tool.bestAr:tool.best}</p>
          <div className="tool-meta"><span><CircleDollarSign size={14}/>{tool.price==="paid"?t.paid:tool.price==="freemium"?t.freemium:t.freeTier}</span><span><Clock3 size={14}/>{tool.effort==="Low"?(ar?"سهل":"Low effort"):tool.effort==="Medium"?(ar?"متوسط":"Medium effort"):(ar?"يحتاج خبرة":"Technical setup")}</span></div>
          <div className="tool-detail"><b>{t.why}</b><p>{ar?tool.whyAr:tool.why}</p></div>
          <div className="tool-detail tradeoff"><b>{t.tradeoff}</b><p>{ar?tool.tradeAr:tool.trade}</p></div>
          <a className="tool-link" href={tool.url} target="_blank" rel="noreferrer">{ar?"زيارة الموقع الرسمي":"Visit official website"}<ArrowUpRight size={15}/></a>
          <button className="tool-agent-btn" onClick={()=>runImplementation(tool)}><Bot size={16}/>{ar?"دع وَثبة يجهز هذه الأداة":"Let an Agent set this up"}<ArrowUpRight size={15}/></button>
        </article>)}</div>
        {showWebsiteBuilder && <section className="execution-demo website-builder">
          <div className="execution-head"><div><span className="section-eyebrow">{ar?"وكيل إنشاء المواقع":"WEBSITE CREATION AGENT"}</span><h3>{ar?"جهّز موقع منشأتك":"Build your business website"}</h3></div><button className="close-demo" onClick={()=>setShowWebsiteBuilder(false)}>×</button></div>
          {websiteError && <div role="alert" className="website-error">{websiteError}</div>}
          {!websiteHtml ? <div className="website-builder-form">
            <div className="website-builder-intro"><b>{ar?"كيف تحب أن نصمم موقعك؟":"How would you like your website?"}</b><p>{ar?"اختر شكل الموقع واكتب العبارات التي تفضلها، ويمكنك رفع صورة منتجك أو استخدام صورة الغلوس التجريبية.":"Choose a style, add your preferred wording, and upload a product photo or use the sample gloss image."}</p></div>
            <label>{ar?"نوع الموقع":"Website type"}<select value={websiteType} onChange={e=>setWebsiteType(e.target.value)}><option>موقع تعريفي</option><option>متجر إلكتروني (واجهة أولية)</option></select></label>
            <label>{ar?"اسم المنتج أو الخدمة":"Product or service name"}<input value={websiteProductName} onChange={e=>setWebsiteProductName(e.target.value)} placeholder="LUMA Gloss" /></label>
            <label>{ar?"العنوان الرئيسي الذي يظهر بالموقع":"Website headline"}<input value={websiteHeadline} onChange={e=>setWebsiteHeadline(e.target.value)} placeholder="لمعتك تكمّل إطلالتك" /></label>
            <label>{ar?"وصف النشاط والمنتج":"Business and product description"}<textarea value={websiteDescription} onChange={e=>setWebsiteDescription(e.target.value)} placeholder={ar?"اكتب وصفًا مختصرًا لنشاطك ومنتجك ومميزاته":"Describe your business, product and its features"} /></label>
            <label>{ar?"أسلوب التصميم":"Design style"}<select value={websiteStyle} onChange={e=>setWebsiteStyle(e.target.value)}><option>ناعم وعصري</option><option>فاخر وأنيق</option><option>مرح وملون</option><option>بسيط وعملي</option><option>جريء وحديث</option></select></label>
            <label>{ar?"لون الهوية":"Brand color"}<input type="color" value={websiteColor} onChange={e=>setWebsiteColor(e.target.value)} /></label>
            <label>{ar?"ارفعي صورة منتجك":"Upload product photo"}<input type="file" accept="image/png,image/jpeg,image/webp" onChange={e=>handleWebsiteImage(e.target.files?.[0])} /><small>{ar?"اختياري — PNG أو JPG أو WebP، بحد أقصى 5 ميجابايت.":"Optional — PNG, JPG or WebP, up to 5 MB."}</small></label>
            <div className="website-image-choice"><img src={websiteImage || "/luma-product-reference.png"} alt="معاينة صورة المنتج المختارة" /><div><b>{ar?"الصورة المستخدمة في الموقع":"Image used on the website"}</b><p>{ar?"صورة الغلوس التجريبية محددة افتراضيًا. ارفعي صورة منتجك لاستبدالها.":"The sample gloss image is selected by default. Upload your own photo to replace it."}</p><button type="button" className="secondary-btn" onClick={()=>setWebsiteImage("/luma-product-reference.png")}>{ar?"استخدام صورة الغلوس التجريبية":"Use sample gloss image"}</button></div></div>
            <label>{ar?"رقم التواصل أو البريد (اختياري)":"Contact details (optional)"}<input value={websiteContact} onChange={e=>setWebsiteContact(e.target.value)} placeholder="05xxxxxxxx / email@example.com" /></label>
            <button type="button" className="primary-btn" onClick={createWebsite}><WandSparkles size={16}/>{ar?"أنشئ الموقع الآن":"Generate website"}</button>
          </div> : <div className="website-result">
            <div className="execution-complete"><CheckCircle2 size={18}/>{ar?"جهّز الوكيل معاينة موقع تجريبية بناءً على بيانات منشأتك.":"The agent prepared an illustrative website preview based on your business profile."}</div>
            <iframe title="معاينة موقع وَثبة" srcDoc={websiteHtml} sandbox="allow-same-origin" style={{width:"100%",height:560,border:"1px solid #dce5e8",borderRadius:14,background:"#fff"}} />
            <div className="result-actions"><button type="button" className="secondary-btn" onClick={()=>{setWebsiteHtml("");setWebsiteError("");}}>{ar?"تعديل التفاصيل":"Edit details"}</button><button type="button" className="primary-btn" onClick={downloadWebsite}><FileText size={16}/>{ar?"تنزيل ملف الموقع HTML":"Download website HTML"}</button></div>
            <small className="demo-only-note">{ar?"نتيجة تجريبية للعرض داخل وَثبة AI فقط؛ لم يتم نشر الموقع أو ربطه بنطاق أو قاعدة بيانات أو بوابة دفع.":"Demo result for display inside Wathbah AI only. The site is not published and has no domain, database, or payment integration."}</small>
          </div>}
        </section>}
        <section className="master-agent-banner">
          <div className="master-agent-symbol"><WandSparkles size={25}/></div>
          <div className="master-agent-copy"><span className="section-eyebrow">{ar?"تنفيذ شامل بواسطة الوكلاء":"MASTER AGENT · FULL IMPLEMENTATION"}</span><h3>{ar?"تريد من وَثبة تنفيذ الخطة كاملة؟":"Want Wathbah to coordinate the whole plan?"}</h3><p>{ar?"ينسق الوكلاء خطوات إعداد جميع الأدوات المقترحة في مسار واحد، مع مراجعتك وموافقتك قبل أي ربط أو إجراء خارجي.":"One orchestrator coordinates setup tasks across your recommended tools, with your review before any external connection or action."}</p></div>
          <button className="primary-btn" onClick={()=>runImplementation()}><Bot size={17}/>{ar?"شغّل الوكيل الرئيسي":"Run Master Agent"}<ArrowRight size={17}/></button>
        </section>
        {showExecution && <section className="execution-demo">
          <div className="execution-head"><div><span className="section-eyebrow">{ar?"عرض توضيحي تفاعلي":"INTERACTIVE AGENT DEMO"}</span><h3>{execution?.mode==="single"?(ar?"وكيل الأداة":"Tool Agent"):(ar?"الوكيل الرئيسي":"Master Agent")}</h3></div><button className="close-demo" onClick={()=>setShowExecution(false)}>×</button></div>
          <div className="execution-progress"><span style={{width:`${execution?.status==="completed"?100:Math.max(8,((execution?.current||0)/(execution?.targets?.length||1))*100)}%`}}/></div>
          <div className="execution-targets">{(execution?.targets||[]).map((name,i)=><span className={execution?.status==="completed"||i<(execution?.current||0)?"target-done":""} key={name}><CheckCircle2 size={14}/>{name}</span>)}</div>
          <div className="execution-log">{executionLog.map((line,i)=><div key={i}><span className="log-pulse"/>{line}</div>)}</div>
          {execution?.status==="completed" && <div className="execution-complete"><CheckCircle2 size={18}/>{ar?"اكتمل العرض التوضيحي! تم تجهيز نتيجة تجريبية أدناه.":"Demo completed! An illustrative result is ready below."}</div>}
          {execution?.status==="completed" && <div className="mock-deliverable">
            <div className="mock-deliverable-head"><div><span className="section-eyebrow">{ar?"النتيجة الجاهزة · نموذج تجريبي":"READY RESULT · DEMO"}</span><h4>{(execution?.mode==="master"||(execution?.targets||[]).includes("Canva"))?(ar?"حملة تسويقية لمنتج الغلوس":"Lip gloss marketing campaign"):(ar?`مخرجات ${execution?.targets?.[0]||"الوكيل"}`:`${execution?.targets?.[0]||"Agent"} deliverable`)}</h4></div><span className="mock-status"><CheckCircle2 size={13}/>{ar?"جاهز للمعاينة":"Preview ready"}</span></div>
            {(execution?.mode==="master"||(execution?.targets||[]).includes("Canva")) ? <><div className="campaign-product-hero"><img src="/luma-product-reference.png" alt="صورة مرجعية لمنتج غلوس وردي" /><div><span className="section-eyebrow">LUMA BEAUTY · PRODUCT LAUNCH</span><h3>لمعتك تكمّل إطلالتك</h3><p>حملة إطلاق لغلوس بعبوة وردية ولمسة مرحة مستوحاة من الصورة المرجعية.</p><small>الصورة مرجعية من المستخدم؛ اسم LUMA والنصوص افتراضية للعرض.</small></div></div><div className="mock-design-grid"><article className="mock-design purple-design"><small>LUMA BEAUTY ✦</small><strong>لمعتك<br/>تكمّل إطلالتك</strong><p>غلوس بلمعة زجاجية</p><b>اكتشفي لمعتك</b></article><article className="mock-design light-design"><small>LUMA GLOSS</small><strong>لمعة ناعمة<br/>كل يوم</strong><p>تفاصيل صغيرة، فرق كبير</p><span>✦</span></article><article className="mock-design dark-design"><small>اختاري لمعتك</small><strong>جاهزة<br/>للمعة؟</strong><p>غلوس LUMA لإطلالة مشرقة</p></article></div><div className="mock-output-list"><span>✓ 3 منشورات لحملة غلوس LUMA</span><span>✓ نصوص إعلانية ووسوم للنشر</span><span>✓ خطة محتوى لمدة أسبوع</span></div><div className="campaign-copy-grid"><article><b>منشور الإطلاق</b><p>لمعتك الجديدة وصلت ✨ غلوس LUMA بلمعة زجاجية وملمس مريح. اختاري لمعتك وخلي حضورك يتكلم.</p><small>فكرة التصميم: لقطة قريبة للشفاه مع خلفية وردية ناعمة.</small></article><article><b>منشور المزايا</b><p>لمعة واضحة بدون تعقيد 💗 غلوس LUMA يضيف لمسة مشرقة لإطلالتك اليومية.</p><small>فكرة التصميم: العبوة بجانب مرآة صغيرة وإضاءة طبيعية.</small></article><article><b>منشور تفاعلي</b><p>أي لمعة تمثّلك اليوم؟ 🌸 ناعمة وهادية أو لامعة وجريئة؟ اكتبي اختيارك بالتعليقات.</p><small>فكرة التصميم: عرض ثلاث درجات غلوس.</small></article></div><div className="campaign-calendar"><b>خطة المحتوى الأسبوعية</b><p>اليوم 1: إطلاق المنتج · اليوم 3: فيديو تطبيق · اليوم 5: إبراز المزايا · اليوم 7: سؤال تفاعلي</p></div><div className="master-site-preview"><div><span className="section-eyebrow">WEBSITE · DEMO OUTPUT</span><h4>معاينة متجر LUMA Beauty</h4><p>واجهة متجر تجريبية متناسقة مع الحملة، تعرض صورة المنتج ووصفًا مختصرًا وزر طلب توضيحي.</p></div><div className="master-site-card"><img src="/luma-product-reference.png" alt="منتج الغلوس" /><b>LUMA Gloss</b><span>لمعة ناعمة لإطلالتك اليومية</span><button type="button" onClick={()=>{setShowWebsiteBuilder(true);setWebsiteType("متجر إلكتروني (واجهة أولية)");setWebsiteDescription("متجر تجميلي لعرض غلوس LUMA ومنتجات الجمال.");setWebsiteColor("#c85c9a");setWebsiteProductName("LUMA Gloss");setWebsiteHeadline("لمعتك تكمّل إطلالتك");setWebsiteStyle("ناعم وعصري");setWebsiteImage("/luma-product-reference.png");setWebsiteHtml("");setWebsiteError("");}}>عرض الموقع التفاعلي</button></div></div><div className="campaign-downloads"><button type="button" className="primary-btn" onClick={()=>downloadCampaignKit("html")}><FileText size={16}/> تنزيل الحملة كصفحة HTML</button><button type="button" className="secondary-btn" onClick={()=>downloadCampaignKit("txt")}>تنزيل النصوص والخطة TXT</button></div></> : <div className="mock-generic-result"><div className="mock-file-icon">✦</div><div><b>{ar?"ملف العمل التجريبي جاهز":"Sample work file is ready"}</b><p>{ar?"تم تجهيز نموذج أولي للنتيجة مع عناصر قابلة للمراجعة والتعديل.":"An illustrative deliverable has been prepared for review and editing."}</p><ul><li>{ar?"ملخص المهمة ومتطلباتها":"Task and requirements summary"}</li><li>{ar?"مسودة أولية قابلة للتخصيص":"Customizable first draft"}</li><li>{ar?"خطوات المراجعة والتسليم":"Review and handoff steps"}</li></ul></div></div>}
            <div className="mock-result-actions"><button type="button" className="secondary-btn" onClick={()=>setExecutionLog(old=>[...old,ar?"تم فتح معاينة النتيجة التجريبية.":"Demo result preview opened."])}>{ar?"معاينة النتيجة":"Preview result"}</button><span>{ar?"حملة خيالية لمنتج غلوس باسم LUMA Beauty. يمكنك تنزيل ملفات المعاينة؛ لم يتم إنشاء تصميم داخل حساب Canva.":"Display simulation only — no Canva file or external action was created."}</span></div>
          </div>}
          <small className="demo-only-note">{ar?"محاكاة واجهة لأغراض العرض — لا يتم إنشاء حسابات أو تغيير إعدادات فعلية.":"UI simulation for demonstration — no accounts are created and no live settings are changed."}</small>
        </section>}
        <p className="pricing-disclaimer"><ShieldCheck size={15}/>{t.priceDisclaimer}</p>
        <section className="roadmap-section"><div className="results-section-title"><div><span className="section-eyebrow">{ar?"خطوات عملية":"YOUR NEXT STEPS"}</span><h2>{t.roadmap}</h2></div></div><div className="roadmap-grid"><article><span className="roadmap-num">01</span><h3>{t.phase1}</h3><p>{t.phase1d}</p></article><article><span className="roadmap-num">02</span><h3>{t.phase2}</h3><p>{t.phase2d}</p></article><article><span className="roadmap-num">03</span><h3>{t.phase3}</h3><p>{t.phase3d}</p></article></div></section>
        <section className={`monitor-result ${form.monitoring?"monitor-enabled":""}`}><div className="monitor-result-icon"><Activity size={21}/></div><div><span className="section-eyebrow">{t.optionalTag}</span><h3>{t.optionalMonitoring}</h3><p>{form.monitoring?t.monitoringOn:t.monitoringOff}</p></div><span className={`monitor-status ${form.monitoring?"on":""}`}>{form.monitoring?t.yes:t.no}</span></section>
        <section className="agents-section"><div className="section-heading compact"><span className="section-eyebrow">{t.localDemo}</span><h2>{t.agentTitle}</h2><p>{t.agentDesc}</p></div><div className="agents-grid">{AGENTS.map((agent,i)=>{const Icon=agent.icon;return <article className="agent-card" key={agent.en}><div className={`agent-icon ${agent.color}`}><Icon size={20}/></div><span className="agent-index">0{i+1}</span><h3>{ar?agent.ar:agent.en}</h3><p>{ar?agent.arDesc:agent.enDesc}</p><button className="agent-chat-btn" onClick={()=>openAgentChat(agent,i)}><MessageCircle size={16}/>{ar?"تحدث مع الوكيل":"Chat with agent"}</button></article>})}</div>
          {activeAgent && <section className="agent-chat-panel" aria-label={ar?"محادثة الوكيل":"Agent chat"}>
            <div className="agent-chat-head"><div><span className="section-eyebrow">{ar?"مساعدتك في تخصيص التنفيذ":"PERSONALIZE THE WORK"}</span><h3>{ar?activeAgent.ar:activeAgent.en}</h3><p>{ar?"اشرح المطلوب، وشارك تفضيلاتك والقيود التي تهمك.":"Describe the task, preferences, and constraints that matter to you."}</p></div><button className="close-demo" onClick={()=>setActiveAgent(null)} aria-label={ar?"إغلاق المحادثة":"Close chat"}>×</button></div>
            <div className="agent-chat-messages">{agentChatMessages.map((msg,i)=><div className={`agent-chat-message ${msg.role}`} key={i}><div>{msg.text}</div>{msg.showSupport && <div className="human-support-card"><strong>الدعم البشري – أصيل</strong><a href="tel:0556278987">اتصال: 0556278987</a><a href="mailto:aseel2002.120@gmail.com">البريد: aseel2002.120@gmail.com</a><button type="button" onClick={()=>{navigator.clipboard?.writeText("0556278987");}}>نسخ رقم التواصل</button></div>}</div>)}</div>
            <form className="agent-chat-form" onSubmit={e=>{e.preventDefault();sendAgentMessage();}}>
              <input value={agentChatInput} onChange={e=>setAgentChatInput(e.target.value)} placeholder={ar?"مثال: أبغى أتمتة متابعة العملاء بميزانية 300 ريال...":"Example: Automate customer follow-ups within a SAR 300 budget..."} />
              <button className="primary-btn" type="submit" disabled={!agentChatInput.trim()}><Send size={16}/>{ar?"إرسال":"Send"}</button>
            </form>
            <p className="agent-chat-note">{ar?"نموذج محادثة تجريبي: يساعدك على صياغة المتطلبات والخطة، ولا ينفذ تغييرات فعلية في حسابات الأدوات بعد.":"Prototype chat: helps shape requirements and a plan; it does not yet make live changes to connected tool accounts."}</p>
          </section>}
        </section>
        <div className="result-actions"><button className="secondary-btn" onClick={reset}><RefreshIcon/>{t.newPlan}</button><button className="primary-btn" onClick={copySummary}><FileText size={17}/>{copied?t.copied:t.copy}</button></div>
        <p className="result-footnote"><LockKeyhole size={14}/>{t.resultNote}</p>
      </main>}

      <footer className="footer"><span>{t.footer}</span><span className="footer-mark"><Sparkles size={14}/> WATHBAH</span></footer>
    </div>
  );
}

function BrainIcon({size=22}) { return <Cpu size={size}/>; }
function RefreshIcon() { return <Settings2 size={17}/>; }

export default App;
