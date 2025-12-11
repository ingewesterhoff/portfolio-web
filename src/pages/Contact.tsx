import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { SiteFooter } from "../components/SiteFooter";
import { PortfolioButton } from "../components/PortfolioButton";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<
    string | null
  >(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    const mailtoLink = `mailto:ingewesterhoff2002@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#261e35] from-[39.904%] to-[#312545] to-[80.769%] text-white">
      <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-[188px] pt-40 sm:pt-44 md:pt-48 pb-24 sm:pb-28 md:pb-32 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-0 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-[#c4a9ff]/8 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-[#c4a9ff]/6 rounded-full blur-[100px] pointer-events-none"
        />

        {/* Header */}
        <div className="mb-24 sm:mb-28 md:mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 px-2 sm:px-0"
          >
            <h1 className="font-['Big_Shoulders_Display',sans-serif] font-bold text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[100px] text-[#c4a9ff] tracking-[2.5px] sm:tracking-[3px] md:tracking-[5px] lg:tracking-[7px] xl:tracking-[8px] uppercase leading-[0.95] drop-shadow-[0_0_25px_rgba(196,169,255,0.4)] break-words hyphens-auto">
              CONTACT
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-1 h-[2px] sm:h-[2.5px] md:h-[3px] bg-gradient-to-r from-[#c4a9ff] to-transparent shadow-[0_0_10px_rgba(196,169,255,0.3)] origin-left"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mb-16 relative z-10"
        ></motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#261e35]/50 p-6 px-8 sm:p-8 md:p-12 rounded-[40px] border border-[#312545] shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_70px_rgba(196,169,255,0.15)] transition-all duration-300"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-8 sm:space-y-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3 sm:space-y-4"
              >
                <Label
                  htmlFor="name"
                  className="font-['Outfit',sans-serif] font-bold text-[18px] text-white"
                >
                  Name
                </Label>
                <motion.div
                  animate={{
                    scale: focusedField === "name" ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-[#261e35] border-2 border-[#312545] text-white placeholder:text-[#c4a9ff]/50 rounded-[20px] h-[60px] px-6 text-[18px] font-['Roboto',sans-serif] focus:border-[#c4a9ff] focus:shadow-[0_0_20px_rgba(196,169,255,0.2)] transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-3 sm:space-y-4"
              >
                <Label
                  htmlFor="email"
                  className="font-['Outfit',sans-serif] font-bold text-[18px] text-white"
                >
                  Email
                </Label>
                <motion.div
                  animate={{
                    scale: focusedField === "email" ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-[#261e35] border-2 border-[#312545] text-white placeholder:text-[#c4a9ff]/50 rounded-[20px] h-[60px] px-6 text-[18px] font-['Roboto',sans-serif] focus:border-[#c4a9ff] focus:shadow-[0_0_20px_rgba(196,169,255,0.2)] transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-3 sm:space-y-4"
              >
                <Label
                  htmlFor="message"
                  className="font-['Outfit',sans-serif] font-bold text-[18px] text-white"
                >
                  Message
                </Label>
                <motion.div
                  animate={{
                    scale:
                      focusedField === "message" ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-[#261e35] border-2 border-[#312545] text-white placeholder:text-[#c4a9ff]/50 rounded-[20px] px-6 py-4 text-[18px] font-['Roboto',sans-serif] resize-none focus:border-[#c4a9ff] focus:shadow-[0_0_20px_rgba(196,169,255,0.2)] transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <PortfolioButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Send Message
                </PortfolioButton>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}