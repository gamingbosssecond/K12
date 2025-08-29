export type Circular = {
  id: string;
  title: string;
  excerpt: string;
  dateISO: string; // e.g., 2025-08-29
  content: string;
};

export const circulars: Circular[] = [
  {
    id: "technical-issue",
    title:
      "K12 App Services Under Technical Surveillance – Report Card Access Only",
    excerpt:
      "K12 App is under technical surveillance; only Report Card access is available.",
    dateISO: new Date().toISOString(),
    content: `All Students, Parents, and Staff are hereby informed that the K12 App portal is currently facing certain technical issues.

At present, only the Report Card Download option is available for use. All other features and services of the portal are under technical surveillance and maintenance.

We request everyone to kindly focus only on downloading report cards until further notice. The inconvenience caused is regretted, and we appreciate your patience and cooperation.

Regards,
Fr. Armstrong Edison SJ
Principal`,
  },
  {
    id: "ptm-tomorrow-aug29",
    title: "PTM tomorrow",
    excerpt: "Dear parents and students, Good afternoon",
    dateISO: "2025-08-29",
    content: `Dear parents and students,\n\nGood afternoon\nThis is to remind you that PTM for classes X and XII will be held tomorrow Saturday 30th August 2025.\n\nTiming:\nRoll Nos 1 to 25 - 8 a.m to 9 a.m\n\nRoll Nos 26 & above - 9 a.m to 10 a.m\n\nDear Parents/Guardians, this is to inform you that the PTM will be held tomorrow. You are warmly welcome to attend. Please note that the report cards can also be downloaded online through the K12 App.\nHave a good day.\n\nRegards,\nFr. Armstrong Edison SJ\nPrincipal`,
  },
  {
    id: "late-arrival",
    title: "Late arrival",
    excerpt: "Dear parents and students,",
    dateISO: "2025-08-29",
    content:
      "This is to inform you about late arrival arrangements. Kindly cooperate.",
  },
  {
    id: "janmashtami-holiday",
    title: "Janmashtami - Holiday Tomorrow",
    excerpt: "Dear parents and students,",
    dateISO: "2025-08-15",
    content:
      "School will remain closed tomorrow on the occasion of Janmashtami.",
  },
  {
    id: "early-dismissal-aug14",
    title: "Early dismissal tomorrow",
    excerpt: "Dear parents and students,",
    dateISO: "2025-08-14",
    content:
      "Dear parents and students, Tomorrow the school will have early dismissal. Students will be dismissed 2 hours earlier than usual.",
  },
  {
    id: "change-school-timing-jul31",
    title: "Change in school timing",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-07-31",
    content:
      "Dear Parents and students, Due to weather conditions, the school timing will be modified. New timings will be effective from Monday.",
  },
  {
    id: "holiday-today-jul31",
    title: "Holiday Today",
    excerpt: "Dear parents and students,",
    dateISO: "2025-07-31",
    content:
      "Dear parents and students, Today is declared as a holiday due to administrative reasons. Regular classes will resume tomorrow.",
  },
  {
    id: "early-dismissal-jul28",
    title: "Early dismissal tomorrow",
    excerpt: "Dear parents and students,",
    dateISO: "2025-07-28",
    content:
      "Dear parents and students, Tomorrow we will have early dismissal for all classes. Please arrange transportation accordingly.",
  },
  {
    id: "change-school-timing-jul26",
    title: "Change in school timing",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-07-26",
    content:
      "Dear Parents and students, The school timing will be changed due to summer schedule. Please note the new timings.",
  },
  {
    id: "early-dismissal-jul25",
    title: "Early dismissal tomorrow",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-07-25",
    content:
      "Dear Parents and students, Tomorrow all classes will be dismissed early due to a staff meeting.",
  },
  {
    id: "admit-card-first-terminal",
    title: "Admit Card for First Terminal Examination",
    excerpt: "Dear students of Classes X and XII,",
    dateISO: "2025-07-21",
    content:
      "Dear students of Classes X and XII, Your admit cards for the first terminal examination are now ready for collection.",
  },
  {
    id: "cordova-magazine-july",
    title: "Cordova Magazine-July",
    excerpt:
      "Dear parents and students, I am sending you the July issue of Cordova Today in the attach...",
    dateISO: "2025-07-17",
    content:
      "Dear parents and students, I am sending you the July issue of Cordova Today in the attachment. Please read it with your family.",
  },
  {
    id: "no-classes-july18",
    title: "No classes on 18th July.",
    excerpt: "Dear parents and students, Good morning.",
    dateISO: "2025-07-17",
    content:
      "Dear parents and students, Good morning. There will be no classes on 18th July due to administrative work.",
  },
  {
    id: "social-science-exhibition",
    title: "Social Science Exhibition",
    excerpt: "Dear parents,",
    dateISO: "2025-07-11",
    content:
      "Dear parents, We are organizing a Social Science Exhibition. Students are encouraged to participate actively.",
  },
  {
    id: "early-school-dismissal-jul04",
    title: "Early school dismissal tomorrow",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-07-04",
    content:
      "Dear Parents and students, Tomorrow the school will dismiss early. Please make necessary arrangements for transportation.",
  },
  {
    id: "change-school-timing-reminder",
    title: "Change in School Timing - Reminder",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-06-30",
    content:
      "Dear Parents and students, This is a reminder about the change in school timing effective from tomorrow.",
  },
  {
    id: "change-school-timing-jun28",
    title: "Change in School timing",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-06-28",
    content:
      "Dear Parents and students, Due to the summer season, school timing will be changed to morning hours.",
  },
  {
    id: "early-school-dismissal-jun28",
    title: "Early School dismissal",
    excerpt: "Dear Parents and students",
    dateISO: "2025-06-28",
    content:
      "Dear Parents and students, Today the school will have early dismissal. Students will be released earlier than usual.",
  },
  {
    id: "school-timing-jun22",
    title: "School timing",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-06-22",
    content:
      "Dear Parents and students, Please note the revised school timing for the upcoming week.",
  },
  {
    id: "school-fee-payment",
    title: "School Fee Payment",
    excerpt: "Dear parents Good morning.",
    dateISO: "2025-06-17",
    content:
      "Dear parents, Good morning. This is a reminder regarding the school fee payment. Please clear all pending dues at the earliest.",
  },
  {
    id: "cordova-magazine-jun01",
    title: "Cordova Magazine",
    excerpt: "Dear students, Good evening.",
    dateISO: "2025-06-01",
    content:
      "Dear students, Good evening. The latest issue of Cordova Magazine is now available for reading.",
  },
  {
    id: "school-annual-magazine",
    title: "School Annual Magazine",
    excerpt: "Dear students, Good afternoon.",
    dateISO: "2025-05-24",
    content:
      "Dear students, Good afternoon. Contributions are invited for the school annual magazine. Please submit your articles and artwork.",
  },
  {
    id: "summer-holidays",
    title: "Summer Holidays",
    excerpt: "Dear parents and students Good Evening",
    dateISO: "2025-05-23",
    content:
      "Dear parents and students, Good Evening. The summer holidays will commence from next week. Please note the holiday assignment.",
  },
  {
    id: "early-dismissal-may22",
    title: "Early Dismissal Tomorrow",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-05-22",
    content:
      "Dear Parents and students, Tomorrow the school will have early dismissal due to teacher training program.",
  },
  {
    id: "change-dismissal-time-may21",
    title: "Change in dismissal time tomorrow",
    excerpt:
      "Dear Parents, Kindly note that tomorrow, Thursday 22nd May 2025, the dismissi...",
    dateISO: "2025-05-21",
    content:
      "Dear Parents, Kindly note that tomorrow, Thursday 22nd May 2025, the dismissal time will be 1:00 PM instead of the regular timing.",
  },
  {
    id: "change-school-timing-may12",
    title: "Change in school timing",
    excerpt: "Dear parents and students, Good evening.",
    dateISO: "2025-05-12",
    content:
      "Dear parents and students, Good evening. Due to increasing temperature, the school timing will be revised from Monday.",
  },
  {
    id: "saturday-early-dismissal",
    title: "Saturday - Early dismissal",
    excerpt: "Dear Parents and students,",
    dateISO: "2025-05-02",
    content:
      "Dear Parents and students, This Saturday the school will have early dismissal. All students will be dismissed by 11:00 AM.",
  },
];
