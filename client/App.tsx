import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReportCard from "./pages/ReportCard";
import Placeholder from "./pages/Placeholder";
import Notifications from "./pages/Notifications";
import Circulars from "./pages/Circulars";
import CircularDetail from "./pages/CircularDetail";
import HomeworkDetail from "./pages/HomeworkDetail";
import { ThemeProvider } from "next-themes";
import { NotificationProvider } from "@/contexts/NotificationContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NotificationProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/report-card" element={<ReportCard />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/circulars" element={<Circulars />} />
                <Route path="/circulars/:id" element={<CircularDetail />} />
                <Route
                  path="/homework"
                  element={<Placeholder title="Homework" />}
                />
                <Route path="/homework/:id" element={<HomeworkDetail />} />
                <Route
                  path="/k12-diary"
                  element={<Placeholder title="K12-Diary" />}
                />
                <Route
                  path="/discipline"
                  element={<Placeholder title="Disciplinary Remarks" />}
                />
                <Route
                  path="/attendance"
                  element={<Placeholder title="Attendance" />}
                />
                <Route
                  path="/fees"
                  element={<Placeholder title="School Fee" />}
                />
                <Route
                  path="/receipt"
                  element={<Placeholder title="Download Receipt" />}
                />
                <Route
                  path="/class-schedule"
                  element={<Placeholder title="Class Schedule" />}
                />
                <Route
                  path="/exam-schedule"
                  element={<Placeholder title="Exam Schedule" />}
                />
                <Route
                  path="/calendar"
                  element={<Placeholder title="Academic Calendar" />}
                />
                <Route path="/admit-card" element={<ReportCard />} />
                <Route
                  path="/student-profile"
                  element={<Placeholder title="Student Profile" />}
                />
                <Route
                  path="/e-content"
                  element={<Placeholder title="e-Content" />}
                />
                <Route
                  path="/syllabus"
                  element={<Placeholder title="Syllabus" />}
                />
                <Route
                  path="/gate-pass"
                  element={<Placeholder title="Gate Pass" />}
                />
                <Route
                  path="/leave-record"
                  element={<Placeholder title="Leave Record" />}
                />
                <Route
                  path="/online-classes"
                  element={<Placeholder title="Online Classes" />}
                />
                <Route
                  path="/online-exam"
                  element={<Placeholder title="Online Exam" />}
                />
                <Route
                  path="/principals-desk"
                  element={<Placeholder title="Principal's Desk" />}
                />
                <Route
                  path="/subject-teachers"
                  element={<Placeholder title="Subject Teachers" />}
                />
                <Route
                  path="/school-family"
                  element={<Placeholder title="School Family" />}
                />
                <Route
                  path="/settings"
                  element={<Placeholder title="Settings" />}
                />
                <Route path="/help" element={<Placeholder title="Help" />} />
                <Route
                  path="/privacy-policy"
                  element={<Placeholder title="Privacy Policy" />}
                />
                <Route
                  path="/disclaimer"
                  element={<Placeholder title="Disclaimer" />}
                />
                <Route
                  path="/logout"
                  element={<Placeholder title="Logout" />}
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
