export function formatDate(dateString: string): string {
  return dateString?.split("T")?.[0];
}
