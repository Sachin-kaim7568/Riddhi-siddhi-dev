import { Activity, Sparkles, Smile, Palette, Scissors, Brush, Layers, Hammer, Sun, HeartPulse, ShieldAlert, Stethoscope, AlignJustify, Zap, Baby } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import serviceRct from "@/assets/service-rct.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceAligners from "@/assets/service-aligners.jpg";
import serviceSmile from "@/assets/service-smile.jpg";
import Dental from "@/assets/Dental.png";
import Porcelain from "@/assets/Porcelain.png";
import Smiles from "@/assets/Smiles.png";

export interface Service {
  id: number;
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  description: string;
  details: string;
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
  bannerTitle?: string;
  contentHeading?: string;
  benefitsHeading?: string;
  sidebarHeading?: string;
  sidebarText?: string;
  faqs?: { question: string; answer: string }[];
  buttons?: { label: string; href: string; type?: "link" | "phone" }[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    bannerTitle: "Root Canal Treatment in Jaipur for Healthy, Pain-Free Smiles",
    contentHeading: "Root Canal Treatment in Jaipur",
    benefitsHeading: "Why choose root canal treatment?",
    sidebarHeading: "Book Your Root Canal Consultation",
    sidebarText: "If you are experiencing tooth pains and sensitivities, come to Riddhi Siddhi Dental Hospital in Vaishali Nagar, Jaipur to get professional dental care. Our friendly team can offer you a comfortable root canal treatment.",
    icon: Activity,
    image: serviceRct,
    description: "Treatment to resolve infection and/or damage to your tooth. This can help to save your tooth.",
    details: "At Riddhi Siddhi Dental Hospital we offer root canal treatments at Jaipur to alleviate tooth pain and prevent infections. We remove the infected pulp from the root of the tooth. Then carefully clean and sterilize the root canal. After which we seal the tooth. Our treatments are done under local anaesthetic so you are comfortable during treatment. The tooth will then be restored appropriately.",
    benefits: [
      "Provides relief from pain caused by tooth infection.",
      "Protects your natural tooth.",
      "Infected pulp and bacteria removed.",
      "Helps prevent infection spreading.",
      "Restore tooth functionality to allow you to chew.",
      "Improves long term oral health through proper restoration.",
    ],
    faqs: [
      {
        question: "When would you recommend a root canal treatment?",
        answer: "It is recommended when the inner pulp of a tooth gets infected or damaged because of severe tooth decay, fractures, trauma or multiple dental treatments. Patients often have symptoms such as continuous toothache, sensitivity to hot or cold, swelling and pain while chewing. It is best to see your dentist early to identify the correct treatment.",
      },
      {
        question: "Is root canal treatment painful?",
        answer: "Root canal treatment is done under local anaesthetic so there should be little to no pain during the treatment. Some patients may feel some mild discomfort or sensitivity for a few days after the treatment. Your dentist will give you the correct advice.",
      },
      {
        question: "How many appointments would I need?",
        answer: "The number of appointments will depend on how bad the infection is, how complicated the roots are and what treatment is needed. Some patients may only require one appointment whereas others may require more than one appointment.",
      },
      {
        question: "How long would a root canal treated tooth last?",
        answer: "With correct restorations, good oral hygiene and regular check-ups your root canal treated tooth can last many years. Depending on the condition of your tooth a crown may be recommended to protect it from breaking.",
      },
      {
        question: "How can I find the right root canal dentist in Jaipur?",
        answer: "When looking for a root canal dentist in Jaipur look at their experience, what treatment they offer, what diagnostic equipment they have and how they treat their patients. At Riddhi Siddhi Dental Hospital in Vaishali Nagar, Jaipur our dental team can talk through your condition with you and help you find the right root canal treatment for you.",
      },
    ],
    buttons: [
      { label: "Contact Us", href: "/contact", type: "link" },
    ],
    metaTitle: "Root Canal Dentist in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Looking for a root canal dentist in Jaipur? Riddhi Siddhi Dental Hospital can help you, explore treatment for an infected or painful tooth. Book today.",
  },
  {
    id: 2,
    slug: "dental-implants",
    title: "Dental Implants",
    bannerTitle: "Dental Implants in Jaipur for a Natural-Looking, Confident Smile",
    contentHeading: "Dental Implants in Jaipur",
    benefitsHeading: "Why choose dental implants?",
    sidebarHeading: "Book Your Dental Implant Consultation",
    sidebarText: "When you are looking for a reliable way of replacing missing teeth, visit Riddhi Siddhi Dental Hospital located at Vaishali Nagar, Jaipur to get the right kind of dental implant treatment. Book your appointment now.",
    icon: Sparkles,
    image: serviceImplants,
    description: "Find out more about tooth replacement option using implants. This is after an assessment of your teeth.",
    details: "We are offering dental implant treatment at Riddhi Siddhi Dental Hospital, Vaishali Nagar, Jaipur to replace lost teeth. A dental implant is a small titanium post inserted into your jawbone to hold replacement teeth such as crowns. Dental implants help to provide a firm base that can support natural looking replacement teeth. They can also help to keep your jawbone healthy. Our dental professionals will assess your mouth and bone health to recommend the best treatment option.",
    benefits: [
      "Long-lasting solution to replace your teeth if looked after properly",
      "Aesthetically pleasing and comfortable",
      "Improved chewing and speaking",
      "Preserves your jaw bone",
      "No need to reshape neighboring healthy teeth",
      "Gives you a beautiful smile and boosts confidence.",
    ],
    faqs: [
      {
        question: "What are dental implants?",
        answer: "Dental implants are artificial tooth roots made of Titanium. These are used to replace one or more missing teeth. These are suitable for patients who have had one or more teeth removed due to decay, gum disease, trauma or other dental issues. After an assessment by a dentist it can be determined if this is the correct treatment for you.",
      },
      {
        question: "Are dental implants painful?",
        answer: "Treatment for dental implants is usually completed under local anaesthetic. Patients may feel a little pain, tenderness and swelling post-surgery but this is usually improved as the surgery heals. Your dentist will give you the correct advice after your treatment.",
      },
      {
        question: "How long will my treatment take?",
        answer: "Your treatment time will depend on the condition of your bone, healing and individual needs. Once your dental implant has been placed you will need some healing time for your bone to fuse with the dental implant. Some patients may require extra treatments such as bone grafts.",
      },
      {
        question: "Where can I find a reputable dental implant clinic near me in Jaipur?",
        answer: "Look at the dentist's experience, diagnostic equipment, treatment planning, hygiene and patient care. Riddhi Siddhi Dental Hospital in Vaishali Nagar, Jaipur can provide you with a dental consultation to see if you have any missing teeth and suitable dental implant treatments.",
      },
      {
        question: "How long will my dental implants last?",
        answer: "With correct care your dental implants can last many years. Keeping your mouth clean, brushing twice a day, cleaning between your teeth and visiting your dentist regularly will help keep your gums and bone healthy around the implant. You should also avoid using tobacco products and follow your dentist's advice.",
      },
    ],
    buttons: [
      { label: "Book Your Consultation Now", href: "/contact", type: "link" },
      { label: "Call Now", href: "tel:+917737129368", type: "phone" },
    ],
    metaTitle: "Dental Implants in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Searching for a dental implant clinic in Jaipur? Riddhi Siddhi Dental Hospital shares information about dental implants. Contact us to discuss your needs.",
  },
  {
    id: 3,
    slug: "clear-aligners",
    title: "Clear Aligners",
    bannerTitle: "Clear Aligner Treatment in Jaipur for a Straighter, Confident Smile",
    contentHeading: "Clear Aligner Treatment in Jaipur",
    benefitsHeading: "Why Choose Clear Aligner Treatment?",
    sidebarHeading: "Book Your Clear Aligner Consultation",
    sidebarText: "If you are looking for straighter teeth, then clear aligners can help. Visit Riddhi Siddhi Dental Hospital, Vaishali Nagar, Jaipur to learn more about clear aligners. Book your consultation today to find out what treatment is right for you.",
    icon: Smile,
    image: serviceAligners,
    description: "Find out more about clear, removable aligners that will slowly help to improve any issues concerning your teeth positioning.",
    details: "Riddhi Siddhi Dental Hospital offers clear aligner treatments at Vaishali Nagar, Jaipur. A clear aligner is a transparent custom-fitted tray that can help you get perfectly aligned teeth without using traditional metal braces. These are easily removed clear trays that can be worn anywhere. We assess your teeth alignment and smile goals to provide you with a suitable treatment plan to give you perfectly aligned, health looking teeth.",
    benefits: [
      "Near invisible so you can straighten your teeth discreetly.",
      "The aligners are removable so you can eat and clean easily.",
      "No metal parts.",
      "Personalised to the shape of your teeth.",
      "Easy to clean.",
      "Comfortable and convenient.",
    ],
    faqs: [
      {
        question: "What are clear aligners?",
        answer: "Clear aligners are a type of transparent tray that is made specifically for your teeth. This allows your teeth to be moved gradually into the desired position. They are an invisible option to traditional metal braces. They can assist with some alignment issues such as crowded teeth, spaces between teeth and minor to moderate bite issues. Your treatment will be tailored to your teeth.",
      },
      {
        question: "Are clear aligners better than traditional braces?",
        answer: "Clear aligners have many benefits over traditional braces. They are nearly invisible and can be taken out. They are easier to clean (brush and floss). However, traditional braces may be a better option for some complex alignment and bite issues. It depends on your teeth and what you want to achieve.",
      },
      {
        question: "How long will my treatment take?",
        answer: "This depends on how complicated your teeth movement is. Some people only need a few months of treatment. Others may require longer. If you follow the instructions with wearing your aligners and attend your appointments you will be on track.",
      },
      {
        question: "How long should I wear my aligners?",
        answer: "Generally, you will need to wear your aligners for around 20-22 hours per day. Please follow your dentists instructions. Usually you will need to remove them when eating, drinking (other than water) and brushing your teeth. If you consistently wear your aligners you will achieve the desired tooth movements.",
      },
      {
        question: "Where can I get clear aligners near me in Jaipur?",
        answer: "If you are looking for clear aligner treatment near me or invisible braces treatment in Jaipur, Riddhi Siddhi Dental Hospital in Vaishali Nagar can provide you with a dental consultation. We can assess your teeth alignment and discuss the best treatment options for you. Come along to see us so we can advise you on what treatment you will need and how we can provide you with a personalised approach to give you a straighter smile.",
      },
    ],
    buttons: [
      { label: "Schedule a Consultation", href: "/contact", type: "link" },
      { label: "Call Now", href: "tel:+917737129368", type: "phone" },
    ],
    metaTitle: "Clear Aligner Services in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Considering clear aligner treatment in Jaipur? Riddhi Siddhi Dental Hospital offers transparent, removable aligners. Contact us to arrange a consultation today.",
  },
  {
    id: 4,
    slug: "smile-designing",
    title: "Smile Designing",
    bannerTitle: "Smile Designing in Jaipur for a Beautiful, Confident Smile",
    contentHeading: "Smile Designing in Jaipur",
    benefitsHeading: "Why Choose Smile Designing?",
    sidebarHeading: "Book Your Smile Designing Consultation",
    sidebarText: "Wish to improve your smile? Get customised smile designing services from Riddhi Siddhi Dental Hospital situated in Vaishali Nagar, Jaipur. Schedule an appointment to know about the best treatment options that can help you achieve your desired smile.",
    icon: Palette,
    image: serviceSmile,
    description: "Find out more about dental treatments that can help improve the appearance of your teeth including shape, colour, positioning and your smile. ",
    details: "Riddhi Siddhi Dental Hospital, Vaishali Nagar, Jaipur provides personalized smile design services. We take into account your facial features, shape, size, color and positioning of teeth to help you achieve your desired smile. Depending on your dental requirements, Smile design can include aesthetic procedures such as teeth whitening, veneers, crowns etc. to improve the look of your smile and increase your confidence.",
    benefits: [
      "Personalised treatment plans",
      "Improved shape, shade and positioning of teeth",
      "Improved smile and facial aesthetics",
      "A variety of cosmetic dental treatments",
      "Increased confidence and self-esteem with your smile",
      "Treatments specific to your dental requirements",
    ],
    faqs: [
      {
        question: "What is Smile designing?",
        answer: "Smile designing refers to a personal cosmetic dentistry treatment that can help you improve your smile. This treatment can benefit people with discolored, chipped, crooked, out-of-proportion, or irregular-shaped teeth. During a consultation with your dentist, they will be able to establish what treatments would be suitable for your smile.",
      },
      {
        question: "What treatments are used during smile designing?",
        answer: "During Smile Designing, you may have one or more cosmetic dental treatments. Some popular treatments include teeth whitening, veneers, crowns, tooth-colored fillings, and orthodontics. Your dentist will assess your teeth, gums, and facial features to provide you with a suitable smile makeover treatment.",
      },
      {
        question: "How long does Smile Designing take?",
        answer: "This depends on the treatments being performed and the complexity of your dental issues. Some treatments like teeth whitening can be completed in less time, whilst veneers, crowns, or orthodontics can take longer. Your dentist will be able to advise you on how long your treatment should last during your consultation.",
      },
      {
        question: "How much does a Smile Makeover treatment cost in Jaipur?",
        answer: "The cost of a smile makeover treatment can vary depending on how many teeth are being treated, what treatments are needed, what materials are used, and the complexity of the treatment. During a consultation with your dentist we can establish what your requirements are and provide you with a personal treatment plan.",
      },
      {
        question: "Where can I get Smile designing near me in Jaipur?",
        answer: "Riddhi Siddhi Dental Hospital in Vaishali Nagar offers consultations to patients who are looking to enhance their smiles. Come into our dental hospital to discuss your concerns, see what cosmetic treatments are suitable for you, and find out what personal smile makeover treatments you can have.",
      },
    ],
    buttons: [
      { label: "Book Your Consultation", href: "/contact", type: "link" },
      { label: "Call Now", href: "tel:+917737129368", type: "phone" },
    ],
    metaTitle: "Smile Designing Service in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Looking for smile designing services in Jaipur? Riddhi Siddhi Dental Hospital offers personalized planning to enhance smile aesthetics. Book a consultation.",
  },
  {
    id: 5,
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    description: "Safe removal of damaged or wisdom teeth with minimal discomfort",
    details: "Tooth extraction becomes necessary when a tooth is severely damaged, infected, or impacted (such as wisdom teeth). We perform both simple and surgical extractions using modern techniques to ensure a smooth and painless experience.",
    benefits: [
      "Painless procedure with local anesthesia",
      "Quick relief from severe pain or infection",
      "Safe removal of impacted wisdom teeth",
      "Faster healing with proper guidance",
      "Emergency extraction available",
    ],
    metaTitle: "Tooth Extraction in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Need tooth extraction services in Jaipur? Riddhi Siddhi Dental Hospital can help you explore tooth removal options. Contact us to enquire or book a visit.",
  },
  {
    id: 6,
    slug: "scaling-polishing",
    title: "Scaling & Polishing",
    icon: Brush,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    description: "Professional teeth cleaning to remove plaque and enhance oral hygiene",
    details: "Scaling and polishing help remove plaque, tartar, and stains from teeth surfaces. It prevents gum disease and keeps your breath fresh. This routine dental cleaning is recommended every 6 months for better oral health.",
    benefits: [
      "Removes plaque & tartar buildup",
      "Prevents gum infection",
      "Fresh breath and brighter teeth",
      "Quick and painless procedure",
      "Improves overall oral hygiene",
    ],
    metaTitle: "Scaling and Polishing Treatment | Riddhi Siddhi Dental Hospital",
    metaDescription: "Get Scaling & Polishing in Jaipur at Riddhi Siddhi Dental Hospital. Explore dental scaling services and contact our team to book an appointment today.",
  },
  {
    id: 7,
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    description: "Durable restorations to protect teeth and replace missing ones",
    details: "Crowns are used to cover damaged teeth, while bridges replace one or more missing teeth. Our clinic offers high-quality zirconia and ceramic crowns that look natural and last long. They restore function and appearance effectively.",
    benefits: [
      "Natural-looking appearance",
      "Restores chewing and bite strength",
      "Protects weak or damaged teeth",
      "Long-lasting and durable materials",
      "Customized to match your teeth",
    ],
    metaTitle: "Crowns and Bridges Treatment | Riddhi Siddhi Dental Hospital",
    metaDescription: "Need Crowns & Bridges in Jaipur? Riddhi Siddhi Dental Hospital explains options for restoring damaged or missing teeth. Contact us to learn more today.",
  },
  {
    id: 8,
    slug: "dental-fillings",
    title: "Dental Fillings",
    icon: Hammer,
    image: "https://media.istockphoto.com/id/1496589808/photo/teeth-white-composite-filling.jpg?s=612x612&w=0&k=20&c=aOjM16NeDNd4u7U9PQGXWR8Da5YHKgDP4ni4BOhDb2c=",
    description: "Restoration of decayed teeth with high-quality tooth-colored fillings",
    details: "Dental fillings help restore teeth damaged by cavities or decay. We use tooth-colored composite materials that blend naturally with your teeth, ensuring strength, durability, and aesthetics.",
    benefits: [
      "Prevents further decay",
      "Matches natural tooth color",
      "Quick and painless process",
      "Restores tooth function",
      "Strong and durable results",
    ],
    metaTitle: "Dental Filling Services in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Need Dental Filling Services in Jaipur? Riddhi Siddhi Dental Hospital offers care for cavities and damaged teeth. Contact us today to book an appointment.",
  },
  {
    id: 9,
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: Sun,
    image: "https://static.vecteezy.com/system/resources/thumbnails/031/315/282/small/perfect-healthy-teeth-smile-of-a-young-woman-at-a-dentist-teeth-whitening-dental-care-stomatology-concept-by-ai-generated-free-photo.jpg",
    description: "Professional whitening treatments for a brighter, more confident smile",
    details: "Our advanced teeth whitening procedures effectively remove deep stains and discoloration caused by coffee, tea, smoking, or aging. Achieve a noticeably whiter smile in just one visit or with our convenient take-home kits. Our treatments are safe for your enamel and customized to minimize sensitivity.",
    benefits: [
      "Immediate and noticeable results",
      "Safe and enamel-friendly process",
      "Customized treatment to reduce sensitivity",
      "Removes stubborn stains",
      "Boosts confidence with a radiant smile",
    ],
    metaTitle: "Teeth Whitening Treatment Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Explore teeth whitening service in Jaipur at Riddhi Siddhi Dental Hospital. Discuss your smile goals with our team and book an appointment today. Contact us.",
  },
  {
    id: 10,
    slug: "gum-surgery",
    title: "Gum Surgery",
    icon: HeartPulse,
    image: "https://cdn.vectorstock.com/i/500p/16/29/dental-implant-surgery-tooth-replacement-vector-27061629.jpg",
    description: "Advanced periodontal care to treat gum disease and restore oral health",
    details: "Gum surgery may be necessary to treat advanced periodontal disease, correct gum recession, or improve the aesthetics of your smile. We provide state-of-the-art surgical procedures with a focus on minimizing discomfort and maximizing the health and stability of your teeth and supporting tissues.",
    benefits: [
      "Halts the progression of gum disease",
      "Restores tissue health and attachments",
      "Improves the appearance of receded gums",
      "Reduces tooth sensitivity",
      "Helps prevent tooth loss",
    ],
    metaTitle: "Gum Surgery in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Explore gum surgery options at Riddhi Siddhi Dental Hospital in Jaipur. Learn about gum care and periodontal treatment, then contact us to discuss your needs.",
  },
  {
    id: 11,
    slug: "mouth-ulcer-treatment",
    title: "Mouth Ulcer Treatment",
    icon: ShieldAlert,
    image: Dental,
    description: "Effective and soothing solutions for painful mouth ulcers and sores",
    details: "Frequent or persistent mouth ulcers can be both painful and indicative of underlying issues. We offer comprehensive evaluation to identify the cause and provide targeted treatments to accelerate healing, relieve pain instantly, and prevent future recurrences.",
    benefits: [
      "Immediate pain relief",
      "Faster healing of mouth sores",
      "Identification of root causes",
      "Prevention of frequent recurrences",
      "Personalized treatment plans",
    ],
    metaTitle: "Mouth Ulcer Treatment in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Need mouth ulcer treatment in Jaipur? Riddhi Siddhi Dental Hospital can help you discuss mouth sores and suitable next steps. Contact us to book a visit.",
  },
  {
    id: 12,
    slug: "dentures",
    title: "Dentures",
    icon: Layers,
    image: "https://media.istockphoto.com/id/1386868459/photo/all-on-4-removable-implants-supported-overdenture-installation.jpg?s=612x612&w=0&k=20&c=yYiB5kSN-RgK-C5eqDIEMZhDEMuWKcw0IY4emmqTDNg=",
    description: "Custom-fitted complete and partial dentures for a functional smile",
    details: "We provide high-quality, custom-crafted dentures to replace missing teeth and restore your ability to eat, speak, and smile with confidence. Whether you need partial dentures or a complete set, our prosthetics are designed for a comfortable fit and natural appearance.",
    benefits: [
      "Custom-fitted for maximum comfort",
      "Restores full chewing capacity",
      "Improves facial volume and profile",
      "Natural-looking replacement teeth",
      "Durable and long-lasting materials",
    ],
    metaTitle: "Denture Services in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Explore denture services in Jaipur at Riddhi Siddhi Dental Hospital. Learn about dental dentures and denture treatment, then contact us to book a visit.",
  },
  {
    id: 13,
    slug: "general-oral-care",
    title: "General Oral Care",
    icon: Stethoscope,
    image: "https://media.istockphoto.com/id/1485043284/photo/dentistry-concept.jpg?s=612x612&w=0&k=20&c=fE5W33mz4bFiV_j9-YQxxOJtFYE-kWLApIFwRu3xO2I=",
    description: "Routine checkups and preventive care for lifelong dental wellness",
    details: "Preventive dentistry is the foundation of a healthy smile. Our general oral care services include comprehensive exams, digital x-rays, oral cancer screenings, and personalized hygiene instructions to keep your teeth and gums healthy and catch potential issues early.",
    benefits: [
      "Early detection of dental issues",
      "Comprehensive oral health strategy",
      "Personalized hygiene advice",
      "Prevents complex and costly treatments",
      "Maintains overall well-being",
    ],
    metaTitle: "General Oral Care in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Explore General Oral Care at Riddhi Siddhi Dental Hospital in Jaipur. Learn about general dental care and preventive oral care services. Contact us today.",
  },
  {
    id: 14,
    slug: "orthodontic-braces",
    title: "Orthodontic Braces",
    icon: AlignJustify,
    image: "https://homorthodontics.com/wp-content/uploads/2025/11/AdobeStock_281854083-1024x683.jpeg",
    description: "Traditional and advanced braces for perfectly aligned teeth",
    details: "Orthodontic braces are a highly effective solution for correcting misaligned teeth, crowded teeth, overbites, and underbites. We offer traditional metal braces as well as aesthetic ceramic options to gradually move your teeth into their ideal positions, improving both function and appearance.",
    benefits: [
      "Corrects severe misalignments",
      "Improves bite and chewing function",
      "Enhances facial aesthetics",
      "Durable and reliable treatment",
      "Customized for patients of all ages",
    ],
    metaTitle: "Orthodontic Braces Treatment | Riddhi Siddhi Dental Hospital",
    metaDescription: "Explore orthodontic braces treatment in Jaipur at Riddhi Siddhi Dental Hospital. Learn about teeth alignment options and book an appointment with us today.",
  },
  {
    id: 15,
    slug: "porcelain-veneers",
    title: "Porcelain Veneers",
    icon: Sparkles,
    image: Porcelain,
    description: "Custom-made thin shells to conceal imperfections and enhance your smile",
    details: "Porcelain veneers are ultra-thin, custom-made ceramic shells bonded to the front surface of your teeth to instantly correct discoloration, chips, gaps, or minor misalignments. They are highly stain-resistant and closely mimic the light-reflecting properties of natural teeth.",
    benefits: [
      "Instantly transforms your smile",
      "High resistance to staining",
      "Minimal enamel removal required",
      "Natural and beautiful appearance",
      "Long-lasting cosmic solution",
    ],
    metaTitle: "Porcelain Veneer Treatment Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Explore porcelain veneers treatment in Jaipur with Riddhi Siddhi Dental Hospital. Learn about dental veneers options for your smile and contact us today.",
  },
  {
    id: 16,
    slug: "sensitive-teeth-treatment",
    title: "Sensitive Teeth Treatment",
    icon: Zap,
    image: "https://www.thedental-corner.com/wp-content/uploads/2025/01/Sensitive-Teeth-Treatment.jpg",
    description: "Targeted therapies to relieve sharp pain caused by tooth sensitivity",
    details: "Tooth sensitivity typically occurs when the protective enamel wears down or gums recede, exposing the underlying dentin. We identify the specific cause of your sensitivity and provide targeted treatments, such as desensitizing agents or fluoride varnishes, to block pain signals and strengthen your enamel.",
    benefits: [
      "Fast relief from sharp, sudden pain",
      "Strengthens weakened enamel",
      "Protects exposed tooth roots",
      "Identifies underlying dental issues",
      "Restores comfort while eating and drinking",
    ],
    metaTitle: "Sensitive Teeth Treatment | Riddhi Siddhi Dental Hospital",
    metaDescription: "Need sensitive teeth treatment in Jaipur? Riddhi Siddhi Dental Hospital can help you explore care options for tooth sensitivity. Contact us to book a visit.",
  },
  {
    id: 17,
    slug: "kids-dentistry",
    title: "Kids Dentistry",
    icon: Baby,
    image: Smiles,
    description: "Gentle and specialized dental care tailored for children and adolescents",
    details: "Our pediatric dentistry services are designed to make dental visits a positive and fun experience for children. From first tooth checkups to preventive sealants and cavity treatments, we focus on establishing excellent oral hygiene habits early on in a friendly, comfortable environment.",
    benefits: [
      "Child-friendly and gentle approach",
      "Preventive care to stop cavities early",
      "Educates children on proper oral hygiene",
      "Monitors healthy dental development",
      "Reduces dental anxiety in kids",
    ],
    metaTitle: "Kids Dentistry in Jaipur | Riddhi Siddhi Dental Hospital",
    metaDescription: "Explore Kids Dentistry in Jaipur at Riddhi Siddhi Dental Hospital. Learn about care for children and contact us to discuss your child's dental needs today.",
  }
]