import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage';
import './App.css'
import FaqPage from './pages/FaqPage';
import ServicesPage from './pages/ServicePage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DigitalHealthProfile from './pages/DigitalHealthProgram';
import ProfessionalProfile from './pages/ProfessionalProfile';
import DoctorProfile from './pages/DoctorProfile';
import PatientDashboard from './pages/PatientDashboard';
import PatientHealthProfile from './pages/PatientHealthProfile';
import FindSpecialist from './pages/FindSpecialist';
import AppointmentsOverview from './pages/AppointmentsOverview';
import NotificationsCenter from './pages/NotificationsCenter';
import DoctorDashboard from './pages/DoctorDashboard';
import ManageAvailability from './pages/ManageAvailability';
import PatientRoster from './pages/PatientRoster';
import PatientProfile from './pages/PatientProfile';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/faq' element={<FaqPage/>}/>
      <Route path='/service' element={<ServicesPage/>}/>
      <Route path='/privacy' element={<PrivacyPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/digitalhealth' element={<DigitalHealthProfile/>}/>
      <Route path='/profprofile' element={<ProfessionalProfile/>}/>
      <Route path='/docprofile' element={<DoctorProfile/>}/>
      <Route path='/patientdashboard' element={<PatientDashboard/>}/>
      <Route path='/patienthealthprofile' element={<PatientHealthProfile/>}/>
      <Route path='/findspecialist' element={<FindSpecialist/>}/>
      <Route path='/appointmentsoverview' element={<AppointmentsOverview/>}/>
      <Route path='/doctordashboard' element={<DoctorDashboard/>}/>
      <Route path='/manageavailability' element={<ManageAvailability/>}/>
      <Route path='/patientroster' element={<PatientRoster/>}/>
      <Route path='/patientprofile' element={<PatientProfile/>}/>
      <Route path='/notificationscenter' element={<NotificationsCenter/>}/>
    </Routes>
    </>
  )
}

export default App;