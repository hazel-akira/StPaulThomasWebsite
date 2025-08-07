// src/pages/Nurture.tsx

import { Helmet } from 'react-helmet-async'

const features = [
  {
    title: 'Holistic Development',
    text: 'We focus on nurturing the whole child—academically, emotionally, socially, and physically—ensuring comprehensive growth and well-being.'
  },
  {
    title: 'Academic Excellence',
    text: 'Our dedicated faculty provides high-quality, personalized education, fostering curiosity, critical thinking, and a lifelong love for learning.'
  },
  {
    title: 'Emotional and Social Support',
    text: 'We offer counseling, mentoring, and peer support to help students build strong relationships, develop emotional intelligence, and feel valued.'
  },
  {
    title: 'Extracurricular Opportunities',
    text: 'Our diverse extracurricular activities allow students to explore their passions, develop new skills, and build confidence outside the classroom.'
  },
  {
    title: 'Strong Community',
    text: 'We foster an inclusive and supportive culture where students, parents, and staff collaborate to create a positive and enriching environment.'
  },
  {
    title: 'Life Skills',
    text: 'We equip students with essential life skills such as leadership, communication, and resilience, preparing them for success in all areas of life.'
  },
  {
    title: 'Safe and Positive Environment',
    text: 'We prioritize the physical and emotional safety of our students, promoting respect, kindness, and inclusivity to help them thrive.'
  },
  {
    title: 'Partnership with Parents',
    text: 'We actively involve parents in their children’s education, fostering collaboration and communication to provide the best support for each student.'
  },
  {
    title: 'Lifelong Impact',
    text: 'Our nurturing environment ensures that students leave St. Thomas with the skills, values, and mindset needed to make a positive difference in the world.'
  }
]

const Nurture: React.FC = () => (
  <>
    <Helmet>
      <title>Nurture | St Paul Thomas Academy</title>
    </Helmet>

    {/* Hero */}
    <section className="bg-[#062747] py-12">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Nurturing Environment at St. Paul Thomas Academy
        </h1>
      </div>
    </section>

    {/* Features Grid */}
    <section className="container mx-auto py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((f) => (
          <div key={f.title} className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#062747]">
              {f.title}
            </h2>
            <p className="text-gray-700">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  </>
)

export default Nurture;
