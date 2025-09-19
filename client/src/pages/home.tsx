import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Calendar,
  GraduationCap,
  Trophy,
  BookOpen,
  School,
  Users,
  Clock,
  RefreshCw,
  Handshake,
  Rocket,
  Brain,
  Flame,
  Heart,
  Cloud,
  CheckCircle,
  Tag,
  Send,
  Menu,
  X
} from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-08-30 at 11.38.41_a4a6bd86_1757481812452.jpg";

export default function Home() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (width: number) => ({
      width: `${width}%`,
      transition: { duration: 2, ease: "easeOut" }
    })
  };

  function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <button
      onClick={() => scrollToSection(href.substring(1))}
      className="text-muted-foreground hover:text-primary transition-colors"
      data-testid={`nav-${href.substring(1)}`}
    >
      {children}
    </button>
  );

  const skills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "HTML & CSS", level: 90 },
    { name: "SQL", level: 75 },
    { name: "C Programming", level: 70 }
  ];

  const tools = [
    "VS Code", "PyCharm", "Jupyter Notebook", "Power BI", "Excel", "MATLAB", "CloudSim"
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text" data-testid="logo">Prajwal Nayaka N S</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-border pt-4"
            >
              <div className="flex flex-col space-y-4">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#education">Education</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen hero-bg flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.p 
                  className="text-accent font-medium text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  👋 Hello, I'm
                </motion.p>
                <motion.h1 
                  className="text-5xl lg:text-7xl font-black gradient-text leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  data-testid="hero-name"
                >
                  Prajwal Nayaka N S
                </motion.h1>
                <motion.div 
                  className="text-xl lg:text-2xl text-muted-foreground font-light"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ delay: 1, duration: 2 }}
                >
                  Passionate Computer Applications Graduate
                </motion.div>
              </div>
              <motion.p 
                className="text-lg text-muted-foreground max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                data-testid="hero-description"
              >
                Recent MCA graduate passionate about crafting innovative web solutions. 
                Ready to bring fresh perspectives and enthusiasm to your team! 🚀
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
                  data-testid="button-download-cv"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 font-semibold transition-all"
                  onClick={() => scrollToSection('contact')}
                  data-testid="button-get-in-touch"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50"></div>
                  <img 
                    src={profileImage} 
                    alt="Prajwal Nayaka N S - Professional headshot" 
                    className="w-full h-full object-cover"
                    data-testid="profile-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <SectionWrapper>
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="about-title">About Me</h2>
                <p className="text-xl text-muted-foreground">Get to know the person behind the code</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="space-y-6"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeInUp}>
                    <Card className="bg-card/50 backdrop-blur-lg border-border card-glow">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">🎯 My Mission</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          To leverage my academic excellence and fresh perspective in creating innovative 
                          technological solutions that make a meaningful impact. I'm passionate about 
                          continuous learning and ready to contribute to your team's success.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card className="bg-card/50 backdrop-blur-lg border-border card-glow">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-accent mb-4">⚡ What Drives Me</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The excitement of solving complex problems and the satisfaction of building 
                          something from scratch. My academic journey has prepared me with strong 
                          technical foundations and the adaptability to thrive in dynamic environments.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="space-y-6"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeInUp}>
                    <Card className="bg-card/50 backdrop-blur-lg border-border card-glow">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">🚀 Ready for Opportunities</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          As a fresh graduate, I bring enthusiasm, modern technical knowledge, and 
                          a willingness to learn and grow. I'm excited to start my professional 
                          journey and contribute to innovative projects.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div 
                className="mt-16 grid md:grid-cols-4 gap-6"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="text-center bg-card/30 backdrop-blur-lg p-6 rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-cgpa">7.7</div>
                  <div className="text-muted-foreground">CGPA in BCA</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center bg-card/30 backdrop-blur-lg p-6 rounded-xl border border-border">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-languages">3+</div>
                  <div className="text-muted-foreground">Languages Spoken</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center bg-card/30 backdrop-blur-lg p-6 rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-sslc">87.84%</div>
                  <div className="text-muted-foreground">SSLC Score</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center bg-card/30 backdrop-blur-lg p-6 rounded-xl border border-border">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-enthusiasm">100%</div>
                  <div className="text-muted-foreground">Enthusiasm</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Education Timeline */}
      <SectionWrapper>
        <section id="education" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="education-title">Education Journey</h2>
                <p className="text-xl text-muted-foreground">Academic excellence through the years</p>
              </div>

              <div className="relative">
                <div className="timeline-line absolute left-8 top-0 w-1 h-full rounded-full"></div>
                
                <motion.div 
                  className="space-y-12"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* MCA */}
                  <motion.div variants={fadeInUp} className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <GraduationCap className="text-white text-xl" />
                    </div>
                    <Card className="bg-card/50 backdrop-blur-lg border-border card-glow flex-1">
                      <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-primary" data-testid="education-mca-title">Master of Computer Application</h3>
                            <p className="text-muted-foreground font-medium">Dayananda Sagar College of Arts, Science & Commerce</p>
                          </div>
                          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">Pursuing</span>
                        </div>
                        <p className="text-muted-foreground">Currently advancing my knowledge in computer applications with focus on modern technologies and software development practices.</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* BCA */}
                  <motion.div variants={fadeInUp} className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Trophy className="text-white text-xl" />
                    </div>
                    <Card className="bg-card/50 backdrop-blur-lg border-border card-glow flex-1">
                      <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-accent" data-testid="education-bca-title">Bachelor of Computer Application</h3>
                            <p className="text-muted-foreground font-medium">KLE Society's Degree College</p>
                          </div>
                          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">CGPA: 7.7</span>
                        </div>
                        <p className="text-muted-foreground">Completed July 2024 with excellent academic performance, building strong foundations in programming, database management, and software development.</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* PUC */}
                  <motion.div variants={fadeInUp} className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <BookOpen className="text-white text-xl" />
                    </div>
                    <Card className="bg-card/50 backdrop-blur-lg border-border card-glow flex-1">
                      <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-green-400" data-testid="education-puc-title">Intermediate PUC</h3>
                            <p className="text-muted-foreground font-medium">KLE Independent PU College</p>
                          </div>
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">81%</span>
                        </div>
                        <p className="text-muted-foreground">Completed July 2021 with strong academic performance, laying the groundwork for computer science education.</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* SSLC */}
                  <motion.div variants={fadeInUp} className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <School className="text-white text-xl" />
                    </div>
                    <Card className="bg-card/50 backdrop-blur-lg border-border card-glow flex-1">
                      <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-orange-400" data-testid="education-sslc-title">SSLC</h3>
                            <p className="text-muted-foreground font-medium">Jnanavahini Public School</p>
                          </div>
                          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">87.84%</span>
                        </div>
                        <p className="text-muted-foreground">Completed April 2019 with outstanding results, demonstrating consistent academic excellence from early education.</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper>
        <section id="skills" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="skills-title">Skills & Expertise</h2>
                <p className="text-xl text-muted-foreground">Technical and soft skills acquired through education and practice</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <motion.div 
                  className="space-y-8"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-primary mb-6">💻 Technical Skills</h3>
                  
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div key={skill.name} variants={fadeInUp} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-foreground font-medium" data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <motion.div 
                            className="skill-bar h-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: index * 0.1 }}
                            data-testid={`skill-bar-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tools */}
                  <motion.div variants={fadeInUp} className="mt-8">
                    <h4 className="text-xl font-semibold text-accent mb-4">🛠️ Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      {tools.map((tool) => (
                        <span 
                          key={tool} 
                          className="bg-primary/20 text-primary px-3 py-2 rounded-lg text-sm font-medium"
                          data-testid={`tool-${tool.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div 
                  className="space-y-8"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-accent mb-6">🚀 Soft Skills</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div variants={fadeInUp}>
                      <Card className="bg-card/50 backdrop-blur-lg border-border text-center card-glow h-full">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="text-primary text-xl" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2" data-testid="soft-skill-leadership">Leadership</h4>
                          <p className="text-sm text-muted-foreground">Natural ability to guide and inspire teams</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <Card className="bg-card/50 backdrop-blur-lg border-border text-center card-glow h-full">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-accent text-xl" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2" data-testid="soft-skill-time-management">Time Management</h4>
                          <p className="text-sm text-muted-foreground">Efficient at prioritizing and meeting deadlines</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <Card className="bg-card/50 backdrop-blur-lg border-border text-center card-glow h-full">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <RefreshCw className="text-green-400 text-xl" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2" data-testid="soft-skill-adaptability">Adaptability</h4>
                          <p className="text-sm text-muted-foreground">Quick to learn and adapt to new environments</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <Card className="bg-card/50 backdrop-blur-lg border-border text-center card-glow h-full">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Handshake className="text-orange-400 text-xl" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2" data-testid="soft-skill-collaboration">Team Collaboration</h4>
                          <p className="text-sm text-muted-foreground">Excellent at working in team environments</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Languages */}
                  <motion.div variants={fadeInUp}>
                    <h4 className="text-xl font-semibold text-primary mb-4">🌐 Languages</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground" data-testid="language-english">English</span>
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-primary rounded-full"></div>
                          ))}
                          <div className="w-3 h-3 bg-muted rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground" data-testid="language-kannada">Kannada</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-accent rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground" data-testid="language-hindi">Hindi</span>
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-green-400 rounded-full"></div>
                          ))}
                          <div className="w-3 h-3 bg-muted rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper>
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="projects-title">Featured Project</h2>
                <p className="text-xl text-muted-foreground">Academic achievement showcasing problem-solving skills</p>
              </div>

              <Card className="project-card card-glow">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Cloud className="text-primary text-xl" />
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground" data-testid="project-title">Cloud Computing Optimization</h3>
                        </div>
                        <p className="text-xl text-primary font-semibold">Task Scheduling and Resource Allocation using Heuristic Approach</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed" data-testid="project-description">
                        Developed and implemented efficient task scheduling and resource allocation strategies 
                        using advanced heuristic algorithms including Genetic Algorithm and Particle Swarm 
                        Optimization (PSO) to enhance cloud computing performance.
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-accent">🎯 Key Achievements</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="text-green-400 mt-1 h-4 w-4" />
                            <span>Improved system performance by optimizing load distribution</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="text-green-400 mt-1 h-4 w-4" />
                            <span>Minimized execution time in cloud environment</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="text-green-400 mt-1 h-4 w-4" />
                            <span>Implemented multiple heuristic algorithms for comparison</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-3">🛠️ Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {["Python", "CloudSim", "MATLAB", "Genetic Algorithm", "PSO"].map((tech) => (
                            <span 
                              key={tech} 
                              className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm font-medium"
                              data-testid={`project-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                        alt="Cloud computing and data analytics visualization" 
                        className="rounded-xl shadow-2xl w-full"
                        data-testid="project-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
                      {/* Floating elements */}
                      <motion.div 
                        className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity }}
                      ></motion.div>
                      <motion.div 
                        className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Workshop */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/30 backdrop-blur-lg border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Tag className="text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground" data-testid="workshop-title">Java Workshop</h4>
                        <p className="text-muted-foreground">KLE Society's Degree College • April 2023</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Participated in intensive Java workshop to enhance programming skills and stay updated 
                      with current industry practices. Demonstrates commitment to continuous learning and skill development.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Why Hire Me Section */}
      <SectionWrapper>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="why-hire-title">Why Hire Me?</h2>
                <p className="text-xl text-muted-foreground">Fresh perspective meets proven excellence</p>
              </div>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp}>
                  <Card className="bg-card/50 backdrop-blur-lg border-border card-glow text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Rocket className="text-primary text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4" data-testid="hire-reason-fresh-perspective">Fresh Perspective</h3>
                      <p className="text-muted-foreground">Bring innovative ideas and modern approaches learned from latest academic curriculum and industry trends.</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-card/50 backdrop-blur-lg border-border card-glow text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Brain className="text-accent text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4" data-testid="hire-reason-quick-learner">Quick Learner</h3>
                      <p className="text-muted-foreground">Demonstrated ability to grasp complex concepts quickly, as evidenced by consistent academic performance.</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-card/50 backdrop-blur-lg border-border card-glow text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Flame className="text-green-400 text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4" data-testid="hire-reason-enthusiasm">High Enthusiasm</h3>
                      <p className="text-muted-foreground">Passionate about technology with genuine excitement to contribute and grow with your team.</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-card/50 backdrop-blur-lg border-border card-glow text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <RefreshCw className="text-orange-400 text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4" data-testid="hire-reason-adaptable">Highly Adaptable</h3>
                      <p className="text-muted-foreground">Ready to embrace your company culture and adapt to new technologies and methodologies quickly.</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-card/50 backdrop-blur-lg border-border card-glow text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="text-purple-400 text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4" data-testid="hire-reason-excellence">Proven Excellence</h3>
                      <p className="text-muted-foreground">Track record of academic achievement with 7.7 CGPA and consistent high performance throughout education.</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-card/50 backdrop-blur-lg border-border card-glow text-center h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="text-pink-400 text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4" data-testid="hire-reason-dedication">Dedication</h3>
                      <p className="text-muted-foreground">Committed to delivering quality work and building a meaningful career in technology.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper>
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="contact-title">Let's Connect</h2>
                <p className="text-xl text-muted-foreground">Ready to start my career journey with your team</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-card/50 backdrop-blur-lg border-border">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Mail className="text-primary" />
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Email</p>
                            <p className="text-foreground font-semibold" data-testid="contact-email">prajwalnayaka680@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                            <Phone className="text-accent" />
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Phone</p>
                            <p className="text-foreground font-semibold" data-testid="contact-phone">+91 9606236662</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <MapPin className="text-green-400" />
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Location</p>
                            <p className="text-foreground font-semibold" data-testid="contact-location">Bangalore, India</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-lg border-border">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-accent mb-4">Connect on Social</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://www.linkedin.com/in/prajwal-nayaka-41206431b" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-colors"
                          data-testid="social-linkedin"
                        >
                          <Linkedin className="text-blue-400" />
                        </a>
                        <a 
                          href="mailto:prajwalnayaka680@gmail.com" 
                          className="w-12 h-12 bg-red-600/20 hover:bg-red-600/30 rounded-lg flex items-center justify-center transition-colors"
                          data-testid="social-email"
                        >
                          <Mail className="text-red-400" />
                        </a>
                        <a 
                          href="tel:+919606236662" 
                          className="w-12 h-12 bg-green-600/20 hover:bg-green-600/30 rounded-lg flex items-center justify-center transition-colors"
                          data-testid="social-phone"
                        >
                          <Phone className="text-green-400" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-card/50 backdrop-blur-lg border-border">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium text-muted-foreground mb-2">Name</Label>
                          <Input 
                            id="name"
                            type="text" 
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-muted border-border focus:ring-primary"
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium text-muted-foreground mb-2">Email</Label>
                          <Input 
                            id="email"
                            type="email" 
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-muted border-border focus:ring-primary"
                            data-testid="input-email"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="text-sm font-medium text-muted-foreground mb-2">Subject</Label>
                          <Input 
                            id="subject"
                            type="text" 
                            placeholder="Job Opportunity"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="bg-muted border-border focus:ring-primary"
                            data-testid="input-subject"
                          />
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-sm font-medium text-muted-foreground mb-2">Message</Label>
                          <Textarea 
                            id="message"
                            rows={4} 
                            placeholder="Tell me about the opportunity..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="bg-muted border-border focus:ring-primary"
                            data-testid="textarea-message"
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold transition-all transform hover:scale-105"
                          data-testid="button-send-message"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div 
                className="mt-16 text-center bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg p-12 rounded-2xl border border-border"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold gradient-text mb-4" data-testid="cta-title">Ready to Contribute!</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I'm excited to bring my fresh perspective, academic excellence, and enthusiasm to your team. 
                  Let's discuss how I can contribute to your organization's success!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-semibold transition-all transform hover:scale-105"
                    data-testid="button-download-resume"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download My Resume
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 font-semibold transition-all"
                    data-testid="button-schedule-call"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="gradient-text text-2xl font-bold mb-4" data-testid="footer-name">Prajwal Nayaka N S</div>
            <p className="text-muted-foreground mb-6">Passionate Computer Applications Graduate | Ready to Make an Impact</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://www.linkedin.com/in/prajwal-nayaka-41206431b" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="text-xl" />
              </a>
              <a 
                href="mailto:prajwalnayaka680@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-email"
              >
                <Mail className="text-xl" />
              </a>
              <a 
                href="tel:+919606236662" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="text-xl" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Prajwal Nayaka N S. Designed with passion for my career journey.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
