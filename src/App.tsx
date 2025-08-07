
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// pages / components
import Home from './pages/Home'
//import Transform from './pages/Transform'
import History from './components/History'
import Leadership from './pages/Leadership'
import Leaders from './pages/Leaders'
import Nurture from './pages/Nurture'
import Nurturing from './pages/nurturing'
import TailorMadeLeadershipPathways from './pages/TailorMadeLeadershipPathways'
import SchoolOfSTEM from './pages/SchoolOfStem'
import SchoolOfSocialSciences from './pages/SchoolOfSocialSciences'
import SchoolOfArtsAndSportsScience from './pages/SchoolOfArtsAndSportsScience'
import Seafarers from './pages/Seafarers'
import Aviator from './pages/Aviator'
import StudentLife from './pages/StudentsLife'
import BoardingLife from './pages/BoardingLife'
import Farm2Fork from './pages/Farm2Fork'
import NursingCare from './pages/NursingCare'
import Chaplaincy from './pages/Chaplaincy'
import JoinUs from './pages/JoinUs'
import Grade9 from './components/grade4'
import Grade10 from './components/Grade5'
import Form3 from './components/Form3'
import Grade4 from './components/grade4'
import Fees from './components/Fees'
//import FeeInfo from './components/grade4Fees'
import LocationPage from './components/LocationPage'
import GetAccess from './pages/GetAccess'
import CalendarOfEvents from './pages/CalendarOfEvents'
import StudentAccess from './pages/StudentAccess'
import StaffAccess from './pages/StaffAccess'
import InfoCard from './components/InfoCard'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer';
import PerformancePage from './pages/perfomance'
import NotFound from './pages/NotFound'
import { Floating } from './components/Floating'
import Grade4Fees from './components/grade4Fees'
import Grade5Fees from './components/Grade5Fees'
import Grade6Fees from './components/grade6fees'
import TermsAndConditions from './pages/TermsAndConditions'
import Sitemap from './components/Sitemap'
import WhoWeAre from './pages/WhoWeAre'

export default function App() {
  return (
    <>
    <Routes>
      {/* All routes share the same Layout */}
      <Route path='/' element={<Layout />}>
        {/* index route ⇒ / */}
        <Route index element={<Home />} />

        {/* top‐level pages */}
        <Route path='/who' element={<WhoWeAre />} />
        <Route path='/history' element={<History />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/leaders' element={<Leaders/>} />
        <Route path='/nurture' element={<Nurture/>} />
        <Route path='/nurturing' element={<Nurturing/>} />
        <Route path='/tailor-made-leadership-pathways' element={<TailorMadeLeadershipPathways />} />

        {/* schools */}
        <Route path='school-of-science-technology-engineering-and-mathematics' element={<SchoolOfSTEM />} />
        <Route path='school-of-social-sciences' element={<SchoolOfSocialSciences />} />
        <Route path='school-of-arts-and-sports-science' element={<SchoolOfArtsAndSportsScience />} />

        {/* special programs */}
        <Route path='seafarers' element={<Seafarers />} />
        <Route path='aviator' element={<Aviator />} />

        {/* student/boarding life */}
        <Route path='student-life' element={<StudentLife />} />
        <Route path='boarding-life' element={<BoardingLife />} />
        <Route path='farm-2-fork' element={<Farm2Fork />} />
        <Route path='nursing-care' element={<NursingCare />} />
        <Route path='chaplaincy' element={<Chaplaincy />} />

        {/* join */}
        <Route path='join' element={<JoinUs />} />
        <Route path='grade9' element={<Grade9 />} />
        <Route path='grade10' element={<Grade10 />} />
        <Route path='form3' element={<Form3 />} />
        <Route path='grade4' element={<Grade4 />} />

        {/* utilities */}
        <Route path='fees' element={<Fees />} />
        <Route path='grade4fee' element={<Grade4Fees/>}/>
        <Route path='grade5fee' element={<Grade5Fees />} />
        <Route path='grade6fee' element={<Grade6Fees />} />
        <Route path='terms' element={<TermsAndConditions />} />

        {/* access */}
        <Route path='access' element={<GetAccess />} />
        <Route path='events' element={<CalendarOfEvents />} />
        <Route path='StuAccess' element={<StudentAccess />} />
        <Route path='staffAccess' element={<StaffAccess />} />
        <Route path='location' element={<LocationPage />} />

     
        
        {/* ad‐hoc info card */}
        <Route
          path='InfoCard'
          element={
            <InfoCard
              title='Sample Title'
              description='Sample description.'
              imageSrc='/public/images/hero.jpg'
            />
          }
        />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/perfomance" element={<PerformancePage/>}/>
        <Route path='/sitemap' element={<Sitemap/>}/>
        {/* 404 Not Found route */}
        <Route path="*" element={<NotFound />} />
      
      </Route>
  
    </Routes>
    <Floating />
    </>
  )
}
