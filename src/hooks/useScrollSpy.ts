import { useEffect, useState } from 'react';

/**
 * PRO Scroll Spy
 * Uses IntersectionObserver instead of scroll event
 * Much better performance.
 */
export function useScrollSpy(
  sectionIds: string[],
  rootMargin: string = '-40% 0px -55% 0px'
) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger when section is actually visible
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeSection;
}
