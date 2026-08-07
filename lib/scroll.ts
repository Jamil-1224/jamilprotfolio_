export function scrollToElement(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const headerOffset = 112;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(elementTop - headerOffset, 0),
    behavior: "smooth",
  });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}