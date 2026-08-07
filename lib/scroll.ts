const DEFAULT_STICKY_HEADER_OFFSET = 112;

export function getStickyHeaderOffset() {
  if (typeof document === "undefined") {
    return DEFAULT_STICKY_HEADER_OFFSET;
  }

  const stickyHeader = document.querySelector<HTMLElement>("[data-sticky-header='true']");

  if (!stickyHeader) {
    return DEFAULT_STICKY_HEADER_OFFSET;
  }

  return stickyHeader.getBoundingClientRect().height + 16;
}

export function scrollToElement(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const headerOffset = getStickyHeaderOffset();

  window.scrollTo({
    top: Math.max(elementTop - headerOffset, 0),
    behavior: "smooth",
  });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}