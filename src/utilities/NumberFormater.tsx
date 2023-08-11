const NUMBER_FORMATTER = new Intl.NumberFormat("eng");

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}
