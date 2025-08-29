import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  Bell,
  Menu,
  FileText,
  User,
  CalendarDays,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNotifications } from "@/contexts/NotificationContext";
import { circulars } from "@/data/circulars";

const navItems: { label: string; to: string; icon: React.ElementType }[] = [
  { label: "Homework", to: "/homework", icon: FileText },
  { label: "K12-Diary", to: "/k12-diary", icon: FileText },
  { label: "Circulars/Notice", to: "/circulars", icon: FileText },
  { label: "Disciplinary Remarks", to: "/discipline", icon: FileText },
  { label: "Attendance", to: "/attendance", icon: CalendarDays },
  { label: "School Fee", to: "/fees", icon: FileText },
  { label: "Download Receipt", to: "/receipt", icon: FileText },
  { label: "Class Schedule", to: "/class-schedule", icon: CalendarDays },
  { label: "Exam Schedule", to: "/exam-schedule", icon: FileText },
  { label: "Academic Calendar", to: "/calendar", icon: CalendarDays },
  { label: "Admit Card", to: "/admit-card", icon: FileText },
  { label: "Report Card", to: "/report-card", icon: FileText },
  { label: "Student Profile", to: "/student-profile", icon: User },
  { label: "e-Content", to: "/e-content", icon: FileText },
  { label: "Syllabus", to: "/syllabus", icon: FileText },
  { label: "Gate Pass", to: "/gate-pass", icon: FileText },
  { label: "Leave Record", to: "/leave-record", icon: CalendarDays },
  { label: "Online Classes", to: "/online-classes", icon: FileText },
  { label: "Online Exam", to: "/online-exam", icon: FileText },
  { label: "Notifications", to: "/notifications", icon: FileText },
  { label: "Principal's Desk", to: "/principals-desk", icon: FileText },
  { label: "Subject Teachers", to: "/subject-teachers", icon: User },
  { label: "School Family", to: "/school-family", icon: User },
  { label: "Settings", to: "/settings", icon: FileText },
  { label: "Help", to: "/help", icon: FileText },
  { label: "Privacy Policy", to: "/privacy-policy", icon: FileText },
  { label: "Disclaimer", to: "/disclaimer", icon: FileText },
  { label: "Logout", to: "/logout", icon: FileText },
];

function DrawerNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1 overflow-y-auto pr-1 px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "flex items-center justify-between rounded-md py-2 px-0 text-base text-foreground/90 hover:bg-accent hover:text-accent-foreground",
              isActive && "bg-accent text-accent-foreground",
            )
          }
        >
          <span className="flex items-center gap-3">
            <Icon className="size-4 text-[#2B6CB0]" />
            {label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}

// Page title mapping
const pageTitles: Record<string, string> = {
  "/homework": "Homework",
  "/k12-diary": "K12-Diary",
  "/circulars": "Circulars/Notice",
  "/discipline": "Disciplinary Remarks",
  "/attendance": "Attendance",
  "/fees": "School Fee",
  "/receipt": "Download Receipt",
  "/class-schedule": "Class Schedule",
  "/exam-schedule": "Exam Schedule",
  "/calendar": "Academic Calendar",
  "/admit-card": "Admit Card",
  "/report-card": "Report Card",
  "/student-profile": "Student Profile",
  "/e-content": "e-Content",
  "/syllabus": "Syllabus",
  "/gate-pass": "Gate Pass",
  "/leave-record": "Leave Record",
  "/online-classes": "Online Classes",
  "/online-exam": "Online Exam",
  "/notifications": "Notifications",
  "/principals-desk": "Principal's Desk",
  "/subject-teachers": "Subject Teachers",
  "/school-family": "School Family",
  "/settings": "Settings",
  "/help": "Help",
  "/privacy-policy": "Privacy Policy",
  "/disclaimer": "Disclaimer",
  "/logout": "Logout",
};

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const { unseenCount } = useNotifications();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  // Handle dynamic routes
  let currentPageTitle = pageTitles[location.pathname];
  if (!currentPageTitle) {
    if (location.pathname.startsWith("/homework/")) {
      currentPageTitle = "Homework";
    } else if (location.pathname.startsWith("/circulars/")) {
      const id = location.pathname.split("/")[2];
      const c = circulars.find((x) => x.id === id);
      currentPageTitle = c?.title ?? "Circulars/Notice";
    } else {
      currentPageTitle = "K12App";
    }
  }

  const handleBack = () => {
    // Always navigate to main page
    navigate("/");
  };

  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-3 sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            {isHomePage ? (
              <>
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Open Menu"
                      onClick={() => setOpen(true)}
                    >
                      <Menu className="size-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[clamp(50vw,60vw,70vw)] min-w-[50vw] max-w-[70vw] bg-background text-foreground [&>button]:hidden [&>button]:opacity-0 [&>button]:pointer-events-none"
                  >
                    <div className="flex h-full flex-col">
                      <SheetTitle className="sr-only">
                        Main navigation
                      </SheetTitle>
                      <div className="-mx-6 -mt-6 mb-0 bg-[#2B6CB0] p-5 text-white">
                        <div className="flex flex-col items-start text-left">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2Faf1c670c6b9b4dd2b4cbec2104ce658b?format=webp&width=200"
                            alt="Student"
                            className="h-14 w-14 rounded-full object-cover shadow-md ring-2 ring-white/40"
                          />
                          <div className="mt-3 text-base font-semibold leading-tight">
                            ABHIJEET RAO
                          </div>
                          <div className="text-xs opacity-90">
                            Student ID: 10220E6147
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto pt-4 -mx-6 px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <DrawerNav onNavigate={() => setOpen(false)} />
                      </div>
                      <div className="mt-auto border-t px-3 py-2 text-xs text-muted-foreground">
                        Version: 1.0.43
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <Link to="/" className="font-medium text-[16px] tracking-tight">
                  K12App
                </Link>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Go Back"
                  onClick={handleBack}
                >
                  <ArrowLeft className="size-5" />
                </Button>
                <h1 className="font-semibold tracking-tight text-lg truncate max-w-[62vw] sm:max-w-[70vw]">
                  {currentPageTitle}
                </h1>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            {!isHomePage && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Refresh"
                onClick={handleRefresh}
              >
                <RotateCcw className="size-4" />
              </Button>
            )}
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="relative"
            >
              <Link to="/notifications" aria-label="Open notifications">
                <Bell className="size-5" />
                {unseenCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                    {unseenCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-screen-lg px-3 py-6 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
}
