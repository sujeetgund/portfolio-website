/**
 * Formats a YYYY-MM-DD date string into "Month YYYY" (e.g. "Apr 2026")
 */
export function formatMonthYear(dateString: string): string {
  if (!dateString) return "";
  
  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/**
 * Formats a YYYY-MM-DD date string into "MMM Do, YYYY" (e.g. "Apr 11th, 2026")
 */
export function formatFullDate(dateString: string): string {
  if (!dateString) return "";
  
  const [year, month, day] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  
  const monthStr = date.toLocaleDateString("en-US", { month: "short" });
  const yearStr = date.getFullYear();
  const dayNum = date.getDate();
  
  let daySuffix = "th";
  if (dayNum % 10 === 1 && dayNum !== 11) daySuffix = "st";
  else if (dayNum % 10 === 2 && dayNum !== 12) daySuffix = "nd";
  else if (dayNum % 10 === 3 && dayNum !== 13) daySuffix = "rd";
  
  return `${monthStr} ${dayNum}${daySuffix}, ${yearStr}`;
}

/**
 * Formats a start and end date into a range string (e.g. "Apr 2026 - Present")
 */
export function formatDateRange(startDate: string, endDate?: string | null): string {
  const startStr = formatMonthYear(startDate);
  const endStr = endDate ? formatMonthYear(endDate) : "Present";
  
  return `${startStr} - ${endStr}`;
}
