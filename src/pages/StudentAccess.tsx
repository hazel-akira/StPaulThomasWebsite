// src/pages/StudentAccess.tsx
import { Helmet } from 'react-helmet-async'

import {
  EnvelopeIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
  VideoCameraIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'

const accessItems = [
  {
    title: 'Student Email',
    url: 'https://login.microsoftonline.com',
    Icon: EnvelopeIcon,
  },
  {
    title: 'Moodle Access',
    url: 'https://elearning.stpaulthomasacademy.co.ke/',
    Icon: ComputerDesktopIcon,
  },
  {
    title: 'Online Library',
    url: 'https://library.stpaulthomasacademy.co.ke/',
    Icon: BookOpenIcon,
  },
  {
    title: 'Online Classes',
    url: 'https://teams.microsoft.com',
    Icon: VideoCameraIcon,
  },
  {
    title: 'Register to Club & Sport',
    url: '/student-life', // replace with actual club & sport registration link if available
    Icon: UserGroupIcon,
  },
]

const StudentAccess: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#083056]">
    {/* Hero */}
    <Helmet>
      <title>Student Access | St Paul Thomas Academy</title>
    </Helmet>
    <section
      className="relative h-[60vh]  flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/studentAccess.webp')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-[#093056]/30" />
      
    </section>

    {/* Access Cards */}
    <main className="flex-grow container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {accessItems.map(({ title, url, Icon }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e4af23] rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
          >
            <Icon className="w-12 h-12 text-[#093056] mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
          </a>
        ))}
      </div>
    </main>
  </div>
)

export default StudentAccess
