export function formatDate(d: Date) {
  return new Date(d).toLocaleString("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}
