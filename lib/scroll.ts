export function scrollToElement(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}