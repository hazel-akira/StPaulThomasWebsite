// src/hooks/use-toast.ts
import { useState } from "react";
import type { ReactNode } from "react";

export type ToastItem = {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  duration?: number; // milliseconds
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = (toast: Omit<ToastItem, "id">) => {
    const id = crypto.randomUUID(); // or any unique ID generator
    setToasts((prev) => [...prev, { id, ...toast }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, addToast, removeToast };
}
