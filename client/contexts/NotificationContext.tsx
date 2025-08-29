import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  notifications as initialNotifications,
  NotificationItem,
} from "@/data/notifications";

interface NotificationContextType {
  notifications: NotificationItem[];
  unseenCount: number;
  markAsSeen: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(initialNotifications);

  const unseenCount = notifications.filter((n) => !n.seen).length;

  const markAsSeen = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, seen: true } : notification,
      ),
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, unseenCount, markAsSeen }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider",
    );
  }
  return context;
}
