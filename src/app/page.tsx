import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Mail, DribbbleIcon as Behance, Twitter, Check, Github } from 'lucide-react'
import { AnimatedText } from '../components/ui/AnimatedText'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-grey-100 to-white" id="home">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          src="./uiuc.jpg"
          alt="UIUC View"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6">Isha Deshpande</h1>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold">
            <AnimatedText 
              texts={[
                "Cyber Security Engineer and Product Manager"
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetweenTexts={100}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 sm:py-20" id="about">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* First column: Profile image and Skills */}
              <div className="lg:w-1/3 bg-gray-50 p-6 sm:p-8">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 mb-6 sm:mb-8">
                    <Image
                      src="./profile.jpg"
                      alt="Isha Deshpande Image"
                      width={200}
                      height={200}
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <div className="w-full">
                    <div className="space-y-4 sm:space-y-6">
                      <SkillCategory title="Skills" skills={["User Experience (UX) Design", "User Interface (UI) Design", "Branding & Visual Identity", "Adobe Creative Suite", "Sketch & InVision", "Prototyping & Wireframing"]} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Second column: About text */}
              <div className="lg:w-2/3 p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl text-gray-900 font-extrabold leading-loose mb-4 sm:mb-6">ABOUT ME</h1>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                    Hello! I am Isha, a product manager with a background in cybersecurity and entrepreneurship.
                    Currently pursuing graduate studies at the University of Illinois Urbana-Champaign,
                    I focus on creating innovative, consumer-centric solutions while prioritizing privacy right from the design process.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border-l-4 border-black">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      I believe in the modified phrase, &quotCuriosity educated the cat.&quot I am always exploring new technologies and discovering how they can complement businesses.
                      For me, creating digital products is not just about innovation—it is about ensuring they serve the physical businesses or consumers at their core.
                      I enjoy creating 3D landscapes in Blender, fostering kittens, and exploring photography. These hobbies keep me grounded and inspire creativity in all aspects of my work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-12 sm:py-20" id="experience">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">EXPERIENCE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <ExperienceCard
              src="./pwc_logo.png?height=400&width=400"
              companyName="Price Waterhouse Coopers (PwC)"
              position="Associate"
              duration="Aug 2023 - Aug 2024"
            />
            <ExperienceCard
              src="./mercedes_logo.jpeg?height=250&width=250"
              companyName="Mercedes Benz"
              position="Project Intern"
              duration="Jun 2022 - Aug 2022"
            />
            <ExperienceCard
              src="./roumy_logo.png?height=250&width=250"
              companyName="ROUMY"
              position="Co-Founder"
              duration="Apr 2020 - Dec 2021"
            />
            <ExperienceCard
              src="./graphy_logo.png?height=250&width=250"
              companyName="Graphy"
              position="Acquisition Intern"
              duration="Apr 2021 - Nov 2021"
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-12 sm:py-20" id="education">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">EDUCATION</h2>
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 sm:gap-8">
            <EducationCard 
              src="./uiuc_logo.jpg?height=250&width=250"
              universityName="University of Illinois Urbana-Champaign"
              degree="Master of Science in Technology Management"
              year="2024 - 2025"
            />
            <EducationCard 
              src="./ccoew_logo.jpeg?height=250&width=250"
              universityName="Cummins college of Engineering"
              degree="Bachelor of Engineering in Information Technology"
              year="2019 - 2023"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <footer className="relative w-full py-16 sm:py-40" id="contact">
        <div className="w-full h-full bg-black"></div>
        <div className="absolute inset-0 bg-black bg-opacity-100 flex flex-col items-center justify-center text-white px-4">
          <a href="mailto:isha.letsconnect@gmail.com" className="text-xl sm:text-2xl mb-6 hover:text-gray-300 transition-colors">
            isha.letsconnect@gmail.com
          </a>
          <div className="flex space-x-4 sm:space-x-6">
            <Link href="mailto:isha.letsconnect@gmail.com" aria-label="Email">
              <Mail className="text-white hover:text-gray-300 w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/isha-deshpande-16722a183/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <Behance className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-6 h-6 sm:w-8 sm:h-8 hover:text-gray-300 transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div>
      <h3 className="font-bold mb-2 text-gray-800">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 font-medium">
            <Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

function EducationCard({ src, universityName, degree, year }: { src: string, universityName: string, degree: string, year: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden w-full max-w-sm mx-auto">
      <div className="p-4 flex flex-col h-full">
        <div className="mb-4 flex-shrink-0">
          <Image
            src={src}
            alt={`${universityName} logo`}
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-center mb-2">{universityName}</h3>
          <div>
            <p className="text-sm text-gray-600 text-center mb-1">{degree}</p>
            <p className="text-sm text-gray-500 text-center">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ src, companyName, position, duration }: { src: string, companyName: string, position: string, duration: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden w-full max-w-sm mx-auto">
      <div className="p-4 flex flex-col h-full">
        <div className="mb-4 flex-shrink-0">
          <Image
            src={src}
            alt={`${companyName} logo`}
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-center mb-2">{companyName}</h3>
          <p className="text-sm text-gray-700 text-center mb-1">{position}</p>
          <p className="text-sm text-gray-500 text-center">{duration}</p>
        </div>
      </div>
    </div>
  );
}