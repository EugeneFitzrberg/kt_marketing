import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import SidebarLayout from './components/SidebarLayout.jsx';
import { CRM_SECTIONS, PASSENGER_SECTIONS } from './nav.js';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import CrmOverview from './pages/crm/CrmOverview.jsx';
import CrmFleet from './pages/crm/CrmFleet.jsx';
import CrmBookings from './pages/crm/CrmBookings.jsx';
import CrmTeam from './pages/crm/CrmTeam.jsx';
import CrmAnalytics from './pages/crm/CrmAnalytics.jsx';
import PassengerOverview from './pages/passenger-site/PassengerOverview.jsx';
import PassengerBooking from './pages/passenger-site/PassengerBooking.jsx';
import DriverCabinet from './pages/passenger-site/DriverCabinet.jsx';
import ManagerCabinet from './pages/passenger-site/ManagerCabinet.jsx';
import PassengerPlatform from './pages/passenger-site/PassengerPlatform.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/crm"
            element={
              <SidebarLayout
                sections={CRM_SECTIONS}
                title="CRM для перевозчика"
                tagline="Единая система для рейсов, кассы, водителей и пассажиров"
                accent="brand"
                ctaLabel="Запросить демо CRM"
              />
            }
          >
            <Route index element={<CrmOverview />} />
            <Route path="fleet" element={<CrmFleet />} />
            <Route path="bookings" element={<CrmBookings />} />
            <Route path="team" element={<CrmTeam />} />
            <Route path="analytics" element={<CrmAnalytics />} />
          </Route>

          <Route
            path="/passenger-site"
            element={
              <SidebarLayout
                sections={PASSENGER_SECTIONS}
                title="Сайт для ваших пассажиров"
                tagline="Брендированный сайт бронирования — с вашим логотипом, вашим доменом и вашими маршрутами"
                accent="sun"
                ctaLabel="Хотим такой сайт"
              />
            }
          >
            <Route index element={<PassengerOverview />} />
            <Route path="booking" element={<PassengerBooking />} />
            <Route path="driver-cabinet" element={<DriverCabinet />} />
            <Route path="manager-cabinet" element={<ManagerCabinet />} />
            <Route path="platform" element={<PassengerPlatform />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
