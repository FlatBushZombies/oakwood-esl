import Link from "next/link"
import { BookOpen, Users, Mic, ArrowRight, CheckCircle } from 'lucide-react'
import { TiBook } from "react-icons/ti"
import { CiBookmarkCheck } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { MdRecommend } from "react-icons/md";
import Image from "next/image"

const courses = [
  {
    id: "individual",
    icon: BookOpen,
    title: "Individual Lessons",
    description: "One-on-one personalized lessons tailored to your specific needs and goals",
    features: [
      "Customized curriculum",
      "One-on-one attention",
      "Flexible scheduling",
      "Progress tracking",
      "Minimum 3 lessons",
    ],
    price: "₽2,500",
    trial: "₽1,250",
    highlight: false,
  },
  {
    id: "groups",
    icon: Users,
    title: "Group Lessons (2-3 Students)",
    description: "Interactive lessons in small groups for collaborative learning and peer support",
    features: [
      "Collaborative learning",
      "Group activities",
      "Affordable pricing",
      "Social interaction",
      "Minimum 3 lessons",
    ],
    price: "₽1,500",
    trial: "₽750",
    highlight: false,
  },
  {
    id: "club",
    icon: Mic,
    title: "Speaking Club",
    description: "Join our dynamic speaking club for conversation practice and networking",
    features: [
      "Free conversation practice",
      "Group discussions",
      "Cultural exchange",
      "Community building",
      "Minimum 3 sessions",
    ],
    price: "₽1,500",
    trial: "₽750",
    highlight: false,
  },
]

const courseBooks = [
  {
    id: 1,
    title: "Level One",
    subtitle: "Phonemic Awareness",
    image: "/assets/books/IMG-20251113-WA0001.jpg",
    color: "from-orange-400 to-yellow-500",
  },
  {
    id: 2,
    title: "Coloring Book",
    subtitle: "Phonemic Awareness",
    image: "/assets/books/IMG-20251113-WA0002.jpg",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Level Two",
    subtitle: "Phonemic Awareness",
    image: "/assets/books/IMG-20251113-WA0000.jpg",
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 4,
    title: "Level Three",
    subtitle: "Phonemic Awareness",
    image: "/assets/books/IMG-20251113-WA0003.jpg",
    color: "from-pink-400 to-rose-500",
  },
]

export default function Courses() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-24 px-4 bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Our Learning Formats
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-balance">Choose Your Perfect Learning Path</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Three flexible formats designed to fit your lifestyle and accelerate your English proficiency
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  course.highlight
                    ? "ring-2 ring-primary shadow-lg md:scale-105 origin-center"
                    : "border border-border/50 hover:border-primary/30"
                }`}
              >
                {course.highlight && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}

                <div
                  className={`p-8 h-full flex flex-col bg-white ${course.highlight ? "bg-gradient-to-br from-white to-blue-50/20" : ""}`}
                >
                  {course.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${course.highlight ? "bg-primary/10" : "bg-muted"}`}>
                      <course.icon className={`w-6 h-6 ${course.highlight ? "text-primary" : "text-foreground/70"}`} />
                    </div>
                    {course.highlight && (
                      <span className="text-xs font-bold text-primary tracking-wider">RECOMMENDED</span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold mb-2 text-foreground">{course.title}</h2>
                  <p className="text-foreground/70 mb-8 text-sm leading-relaxed">{course.description}</p>

                  <div className="mb-8 space-y-3 flex-grow">
                    <div className="text-xs font-bold text-foreground uppercase tracking-wider">What's Included</div>
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/pricing"
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      course.highlight
                        ? "bg-primary text-primary-foreground hover:shadow-lg hover:bg-primary/95"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Course Books</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive workbooks designed to build strong phonemic awareness and reading skills
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseBooks.map((book) => (
              <div
                key={book.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[3/4] relative bg-gradient-to-br overflow-hidden">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={`${book.title} - ${book.subtitle}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{book.title}</h3>
                  <p className="text-white/80 text-sm">{book.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Start your English learning journey in just four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent -z-10" />

            {[
              {
                step: 1,
                title: "Choose Your Package",
                description: "Select the learning format that best fits your needs and goals",
                icon: <TiBook />,
              },
              {
                step: 2,
                title: "Trial Lesson",
                description: "Get 50% off your first session and meet our instructors",
                icon: <CiBookmarkCheck color="red" />,
              },
              {
                step: 3,
                title: "Meet Your Teacher",
                description: "Connect with an expert instructor matched to your level",
                icon: <GiTeacher color="green" />,
              },
              {
                step: 4,
                title: "Start Learning",
                description: "Begin your journey with a minimum of 3 lessons for continuity",
                icon: <LiaHourglassStartSolid />,
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-full flex items-center justify-center font-bold mx-auto mb-6 text-2xl relative z-10 bg-white">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Ready to Transform Your English?</h2>
            <p className="text-lg text-white/90 text-pretty">
              Start with your first trial lesson at 50% off and experience personalized learning
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-200 hover:bg-white/95"
          >
            Explore All Packages
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
