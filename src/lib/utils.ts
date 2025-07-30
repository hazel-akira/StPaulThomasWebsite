import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes using clsx and tailwind-merge.
 *
 * @param inputs - array of class values to combine
 * @returns merged string of Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
