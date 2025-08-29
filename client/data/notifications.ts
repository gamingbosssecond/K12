export type NotificationItem = {
  id: string;
  author: string;
  avatar?: string;
  message: string;
  time: string; // e.g., '4h', '1d'
  seen: boolean;
};

export const notifications: NotificationItem[] = [
  {
    id: "0",
    author: "Fr. Armstrong Edison SJ",
    message:
      "Hello Abhijeet Rao — an important circular just landed. Please check it out!",
    time: "1m",
    seen: false,
  },
  {
    id: "1",
    author: "Fr. Armstrong Edison SJ",
    message:
      "Hello, Abhijeet Rao! Discover the latest circulars/notices from Fr. Armstrong Edison SJ. Stay informed with important updates and announcements!",
    time: "4h",
    seen: false,
  },
  {
    id: "2",
    author: "Fr. Armstrong Edison SJ",
    message:
      "Stay informed with the latest circulars/notices from Fr. Armstrong Edison SJ for Abhijeet Rao. Keep up-to-date with important announcements and events. Check them out now!",
    time: "4h",
    seen: false,
  },
  {
    id: "3",
    author: "Shaheen Siddiqui",
    message:
      "Abhijeet Rao, get ready for some brain power! Shaheen Siddiqui has just shared a new Mathematics homework with you. Let's exercise those neurons!",
    time: "1d",
    seen: false,
  },
];
