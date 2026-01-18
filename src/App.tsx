import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhoWeArePage from './pages/WhoWeArePage';
import VisionMissionPage from './pages/VisionMissionPage';
import OurTeamPage from './pages/OurTeamPage';
import WorkingModelPage from './pages/WorkingModelPage';
import OurValuesPage from './pages/OurValuesPage';
import JourneyPage from './pages/JourneyPage';
import ProgramsPage from './pages/ProgramsPage';
import MentorshipPage from './pages/MentorshipPage';
import SepfPage from './pages/SepfPage';
import ResourcesPage from './pages/ResourcesPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import DonatePage from './pages/DonatePage';
import DonationSuccessPage from './pages/DonationSuccessPage';
import DonationCancelPage from './pages/DonationCancelPage';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const whoWeAreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/who-we-are',
  component: WhoWeArePage,
});

const visionMissionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/vision-mission',
  component: VisionMissionPage,
});

const ourTeamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/our-team',
  component: OurTeamPage,
});

const workingModelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/working-model',
  component: WorkingModelPage,
});

const ourValuesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/our-values',
  component: OurValuesPage,
});

const journeyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/journey',
  component: JourneyPage,
});

const programsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/programs',
  component: ProgramsPage,
});

const mentorshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mentorship',
  component: MentorshipPage,
});

const sepfRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sepf',
  component: SepfPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: ResourcesPage,
});

const getInvolvedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/get-involved',
  component: GetInvolvedPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const donateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/donate',
  component: DonatePage,
});

const donationSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/donation-success',
  component: DonationSuccessPage,
});

const donationCancelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/donation-cancel',
  component: DonationCancelPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  whoWeAreRoute,
  visionMissionRoute,
  ourTeamRoute,
  workingModelRoute,
  ourValuesRoute,
  journeyRoute,
  programsRoute,
  mentorshipRoute,
  sepfRoute,
  resourcesRoute,
  getInvolvedRoute,
  contactRoute,
  loginRoute,
  donateRoute,
  donationSuccessRoute,
  donationCancelRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
