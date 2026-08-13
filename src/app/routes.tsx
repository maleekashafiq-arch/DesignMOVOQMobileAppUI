import { createBrowserRouter } from "react-router";
import { Splash } from "./screens/Splash";
import { Onboarding } from "./screens/Onboarding";
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import { SpinWheel } from "./screens/SpinWheel";
import { Wallet } from "./screens/Wallet";
import { LuckyDraw } from "./screens/LuckyDraw";
import { Marketplace } from "./screens/Marketplace";
import { Profile } from "./screens/Profile";
import { NotFound } from "./screens/NotFound";
import { JoinTeam } from "./screens/JoinTeam";
import { TeamDashboard } from "./screens/TeamDashboard";
import { TeamChallenge } from "./screens/TeamChallenge";
import { CoachProfile } from "./screens/CoachProfile";
import { TeamInvite } from "./screens/TeamInvite";
import { StreakRepair } from "./screens/StreakRepair";
import { AppIconPreview } from "./screens/AppIconPreview";

// Admin imports
import { AdminLayout } from "./layouts/AdminLayout";
import { Dashboard } from "./screens/admin/Dashboard";
import { Users } from "./screens/admin/Users";
import { Activity } from "./screens/admin/Activity";
import { Points } from "./screens/admin/Points";
import { Tickets } from "./screens/admin/Tickets";
import { Rewards } from "./screens/admin/Rewards";
import { LuckyDraws } from "./screens/admin/LuckyDraws";
import { Prizes } from "./screens/admin/Prizes";
import { Sponsors } from "./screens/admin/Sponsors";
import { Teams } from "./screens/admin/Teams";
import { AICoach as AdminAICoach } from "./screens/admin/AICoach";
import { Ads } from "./screens/admin/Ads";
import { Campaigns } from "./screens/admin/Campaigns";
import { Announcements } from "./screens/admin/Announcements";
import { Support } from "./screens/admin/Support";
import { Fraud } from "./screens/admin/Fraud";
import { Analytics } from "./screens/admin/Analytics";
import { Content } from "./screens/admin/Content";
import { Roles } from "./screens/admin/Roles";
import { Settings } from "./screens/admin/Settings";

export const router = createBrowserRouter([
  // Mobile App Routes
  { path: "/", Component: Splash },
  { path: "/onboarding", Component: Onboarding },
  { path: "/login", Component: Login },
  { path: "/home", Component: Home },
  { path: "/spin", Component: SpinWheel },
  { path: "/wallet", Component: Wallet },
  { path: "/lucky-draw", Component: LuckyDraw },
  { path: "/marketplace", Component: Marketplace },
  { path: "/profile", Component: Profile },
  { path: "/join-team", Component: JoinTeam },
  { path: "/team", Component: TeamDashboard },
  { path: "/team/challenge", Component: TeamChallenge },
  { path: "/team/invite", Component: TeamInvite },
  { path: "/coach-profile", Component: CoachProfile },
  { path: "/streak-repair", Component: StreakRepair },
  { path: "/app-icon", Component: AppIconPreview },

  // Admin Panel Routes
  {
    path: "/admin",
    element: <AdminLayout><Dashboard /></AdminLayout>,
  },
  {
    path: "/admin/users",
    element: <AdminLayout><Users /></AdminLayout>,
  },
  {
    path: "/admin/activity",
    element: <AdminLayout><Activity /></AdminLayout>,
  },
  {
    path: "/admin/points",
    element: <AdminLayout><Points /></AdminLayout>,
  },
  {
    path: "/admin/tickets",
    element: <AdminLayout><Tickets /></AdminLayout>,
  },
  {
    path: "/admin/rewards",
    element: <AdminLayout><Rewards /></AdminLayout>,
  },
  {
    path: "/admin/draws",
    element: <AdminLayout><LuckyDraws /></AdminLayout>,
  },
  {
    path: "/admin/prizes",
    element: <AdminLayout><Prizes /></AdminLayout>,
  },
  {
    path: "/admin/sponsors",
    element: <AdminLayout><Sponsors /></AdminLayout>,
  },
  {
    path: "/admin/teams",
    element: <AdminLayout><Teams /></AdminLayout>,
  },
  {
    path: "/admin/ai-coach",
    element: <AdminLayout><AdminAICoach /></AdminLayout>,
  },
  {
    path: "/admin/ads",
    element: <AdminLayout><Ads /></AdminLayout>,
  },
  {
    path: "/admin/campaigns",
    element: <AdminLayout><Campaigns /></AdminLayout>,
  },
  {
    path: "/admin/announcements",
    element: <AdminLayout><Announcements /></AdminLayout>,
  },
  {
    path: "/admin/support",
    element: <AdminLayout><Support /></AdminLayout>,
  },
  {
    path: "/admin/fraud",
    element: <AdminLayout><Fraud /></AdminLayout>,
  },
  {
    path: "/admin/analytics",
    element: <AdminLayout><Analytics /></AdminLayout>,
  },
  {
    path: "/admin/content",
    element: <AdminLayout><Content /></AdminLayout>,
  },
  {
    path: "/admin/roles",
    element: <AdminLayout><Roles /></AdminLayout>,
  },
  {
    path: "/admin/settings",
    element: <AdminLayout><Settings /></AdminLayout>,
  },

  { path: "*", Component: NotFound },
]);