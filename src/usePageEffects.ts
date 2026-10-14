import { useEffect, useState } from "react";

export default function usePageEffects() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[id]"));
    let observer: IntersectionObserver | undefined;
    function observeSections() {
      observer?.disconnect();
      const top = Math.min(112, window.innerHeight / 3);
      const bottom = Math.max(0, window.innerHeight - top - 64);
      observer = new IntersectionObserver(() => {
        const current = sections.find(section => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= top + 32 && bounds.bottom > top + 32;
        });
        setActiveSection(current?.id ?? "");
      }, { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0 });
      sections.forEach(section => observer?.observe(section));
    }
    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;
    function configureReveals() {
      observer?.disconnect();
      elements.forEach(element => element.classList.remove("reveal-pending"));
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("reveal-pending");
          observer?.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -24px 0px", threshold: 0 });
      elements.forEach(element => {
        if (element.getBoundingClientRect().top <= window.innerHeight) return;
        element.classList.add("reveal-pending");
        observer?.observe(element);
      });
    }
    configureReveals();
    preference.addEventListener("change", configureReveals);
    return () => {
      observer?.disconnect();
      elements.forEach(element => element.classList.remove("reveal-pending"));
      preference.removeEventListener("change", configureReveals);
    };
  }, []);

  return activeSection;
}
