import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css'
import PatientDashboard from './pages/PatientDashboard';
import AppointmentDetails from './pages/AppointmentDetails';
import DoctorDiscovery from './pages/DoctorDiscovery';
import AISymptomsCheckerPage from './pages/AISymptomsCheckerPage';
import TelemedicineRoom from './pages/TelemedicineRoom';
import MessagingPage from './pages/MessagingPage';
import DigitalPrescription from './pages/DigitalPrescription';
import MedicalReportsPage from './pages/MedicalReportsPage';
import FindPharmacy from './pages/FindPharmacy';
import MedicalRecords from './pages/MedicalRecords';
import HospitalDirectory from './pages/HospitalDirectory';
import EmergencyServices from './pages/EmergencyServices';
import Billing from './pages/Billing';
import NotificationsCenter from './pages/NotificationsCenter';
import LabServices from './pages/LabServices';
import DoctorDashboard from './pages/DoctorDashboard';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HealthMetrics from './pages/HealthMetrics';
import MedicalOnboarding from './pages/MedicalOnboarding';
import Diagnostics from './pages/Diagnostics';
import SymptomsIntake from './pages/SymptomsIntake';
import InsuranceBilling from './pages/InsuranceBilling';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/apppointmentdetails' element={<AppointmentDetails/>}/>
      <Route path='/patientdashboard' element={<PatientDashboard/>}/>
      <Route path='/doctordiscovery' element={<DoctorDiscovery/>}/>
      <Route path='/aisymptomschecker' element={<AISymptomsCheckerPage/>}/>
      <Route path='/telemedicineroom' element={<TelemedicineRoom/>}/>
      <Route path='/messagingpage' element={<MessagingPage/>}/>
      <Route path='/digitalprescription' element={<DigitalPrescription/>}/>
      <Route path='/medicalreports' element={<MedicalReportsPage/>}/>
      <Route path='/findpharmacy' element={<FindPharmacy/>}/>
      <Route path='/medicalrecords' element={<MedicalRecords/>}/>
      <Route path='/hospitaldirectory' element={<HospitalDirectory/>}/>
      <Route path='/emergencyservices' element={<EmergencyServices/>}/>
      <Route path='/billing' element={<Billing/>}/>
      <Route path='/notifications' element={<NotificationsCenter/>}/>
      <Route path='/labservices' element={<LabServices/>}/>
      <Route path='/doctordashboard' element={<DoctorDashboard/>}/>
      <Route path='/aboutpage' element={<AboutPage/>}/>
      <Route path='/servicespage' element={<ServicesPage/>}/>
      <Route path='/healthmetrics' element={<HealthMetrics/>}/>      
      <Route path='/medicalonboarding' element={<MedicalOnboarding/>}/> 
      <Route path='/diagnostics' element={<Diagnostics/>}/> 
      <Route path='/symptomsintake' element={<SymptomsIntake/>}/>
      <Route path='insurancebilling' element={<InsuranceBilling/>}/>
    </Routes>
    </>
  )
}

export default App
