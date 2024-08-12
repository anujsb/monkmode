import axios from "axios";

/**
 * Utility function for fetching data using axios.
 * @param url The URL to fetch data from.
 * @returns A promise that resolves with the data.
 */
export async function fetcher(url: string) {
  const response = await axios.get(url);
  return response.data;
}

/**
 * Utility function to format dates.
 * @param date Date object or date string.
 * @returns Formatted date string.
 */
export function formatDate(date: Date | string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}

/**
 * Utility function to capitalize the first letter of a string.
 * @param str The string to capitalize.
 * @returns The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Utility function to get a random integer between two values, inclusive.
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random integer between min and max.
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
