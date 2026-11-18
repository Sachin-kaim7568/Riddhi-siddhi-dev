import { motion } from "framer-motion";
import { Award, Heart, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import TeamSlider from "@/components/TeamSlider";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-24 pb-8">
      <SEO
        title="About Riddhi Siddhi Dental Hospital | Best Dentist in Jaipur"
        description="Visit Riddhi Siddhi Dental Hospital in Vaishali Nagar, Jaipur, led by Dr. Pooja Dhanopia (BDS), offering trusted dental care, treatments and healthy smiles."
        keywords="Dr. Pooja Dhanopia, Dentist in Vaishali Nagar, Dental Surgeon Jaipur, Best Lady Dentist Jaipur, Riddhi Siddhi Dental Hospital Team"
        url="https://riddhisiddhidentalhospital.com/about"
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Doctor Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 mt-8"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start max-w-6xl mx-auto">
            {/* Left side: Doctor Image and Name Card */}
            <div className="w-full lg:w-5/12 flex justify-center relative mt-0">
              <div className="relative inline-block">
                <img
                  src="https://ik.imagekit.io/17ss4cqrjc/Rsdh/Remove%20background%20project%20(1).png"
                  alt="Dr. Pooja Dhanopia"
                  className="w-full max-w-[340px] md:max-w-[380px] object-contain h-auto z-10 relative drop-shadow-xl brightness-110 contrast-110 [filter:blur(0px)]"
                  width="380"
                  height="450"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="bg-[#333333] text-white py-4 px-6 md:px-10 rounded-xl absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%] md:w-[115%] z-20 shadow-xl text-center">
                  <h3 className="font-heading font-bold text-lg md:text-xl tracking-wide uppercase">DR. POOJA DHANOPIA</h3>
                  <p className="text-sm md:text-base font-medium mt-1 text-gray-200">BDS, DENTAL SURGEON</p>
                </div>
              </div>
            </div>

            {/* Right side: Content and Stats */}
            <div className="w-full lg:w-7/12 mt-16 lg:mt-0 flex flex-col justify-center">
              <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-[#1e2a3b] mb-6 leading-tight uppercase mt-8">
                DRIVEN BY CARE, TRUSTED BY FAMILIES IN JAIPUR
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 text-justify text-sm md:text-base">
                <p>
                  Dr. Pooja Dhanopia is a dedicated and highly skilled Dental Surgeon and the driving force behind
                  <strong> Riddhi Siddhi Dental Hospital</strong>. She holds a
                  <strong> Bachelor of Dental Surgery (BDS) degree from RUHS</strong> and is known for her
                  patient-centric approach, gentle treatment style, and commitment to delivering
                  premium dental care.
                </p>
              </div>

              {/* Stats Boxes */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="bg-white border border-gray-100 shadow-soft rounded-2xl p-4 md:p-6 text-center hover:shadow-medium transition-shadow flex-1 min-w-[120px]">
                  <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-primary mb-1">2+</h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Years Of Experience</p>
                </div>
                <div className="bg-white border border-gray-100 shadow-soft rounded-2xl p-4 md:p-6 text-center hover:shadow-medium transition-shadow flex-1 min-w-[120px]">
                  <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-primary mb-1">1000+</h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Happy Patients</p>
                </div>
                <div className="bg-white border border-gray-100 shadow-soft rounded-2xl p-4 md:p-6 text-center hover:shadow-medium transition-shadow flex-1 min-w-[120px]">
                  <h4 className="font-heading font-extrabold text-2xl md:text-3xl text-primary mb-1">500+</h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Dental Procedures</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16 lg:mt-20">
            <h3 className="font-heading font-bold text-2xl text-primary mb-6">Description</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify text-sm md:text-base bg-white p-6 md:p-8 rounded-2xl shadow-soft">
              <p>
                Dr. Pooja Dhanopia <strong>2 years of rich clinical experience</strong>, having previously served at
                <strong> Krishan Kripa Dental Hospital</strong>, where she successfully treated
                hundreds of patients. She also serves as a <strong>Mentor at KK Dental Courses</strong>, guiding
                aspiring dental professionals for the past 6 months.
              </p>

              <p>
                Her core expertise includes <strong>Root Canal Treatment (RCT)</strong>,
                <strong> Dental Implants</strong>, <strong>Clear Aligners</strong>,
                <strong> Cosmetic Smile Designing</strong>, and full-mouth rehabilitation. Dr. Pooja stays
                updated with the latest advancements in modern dentistry to ensure every patient
                receives safe, comfortable, and personalized care.
              </p>

              <p>
                She is supported by her team member
                <strong> Nagendra Singh Chauhan</strong>, a qualified
                <strong> Dental Hygienist (BSS)</strong> with <strong>1 year of professional experience</strong>.
                Together, they work to provide ethical, high-quality, and advanced dental treatments
                to the community.
              </p>

              <p>
                Additionally, she has contributed to society through her work with
                <strong> Dant Aarogya Sewa Sansthan (NGO)</strong>, where she served for
                <strong> 1 year</strong> and provided treatment to numerous patients, further strengthening her
                commitment to public healthcare and community service.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            Our Team
          </h2>
          <TeamSlider />
        </motion.section>

        {/* Clinic Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "We treat every patient with empathy and understanding",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering the highest quality treatments",
              },
              {
                icon: Users,
                title: "Patient-Centric",
                description: "Your comfort and satisfaction are our top priorities",
              },
              {
                icon: Target,
                title: "Precision",
                description: "Meticulous attention to detail in every procedure",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-smooth">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Clinic Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-br from-cream-light to-secondary">
            <h2 className="font-heading font-bold text-3xl text-primary text-center mb-8">
              About Our Clinic
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Riddhi Siddhi Dental Hospital is a modern dental clinic located in the heart of Vaishali Nagar, Jaipur. We are dedicated to providing comprehensive dental care in a comfortable, welcoming environment.
              </p>
              <p>
                Our clinic is equipped with state-of-the-art technology and adheres to strict sterilization protocols to ensure the safety and well-being of our patients. We offer a wide range of dental services, from routine check-ups to advanced cosmetic and restorative procedures.
              </p>
              <p>
                At Riddhi Siddhi Dental Hospital, we believe that everyone deserves a healthy, beautiful smile. Our team is committed to making quality dental care accessible and affordable while maintaining the highest standards of excellence.
              </p>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
