import { useEffect, useRef, useState } from 'react';

type UseIntersectionObserverOptions = IntersectionObserverInit & {
  /** Trigger only once */
  once?: boolean;
};

export function useIntersectionObserver(
  {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    once = false,
  }: UseIntersectionObserverOptions = {}
) {
  const ref = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Cleanup previous observer
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting) {
          setHasIntersected(true);

          // Stop observing if once = true
          if (once) {
            observerRef.current?.unobserve(entry.target);
          }
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observerRef.current.observe(element);

    return () => observerRef.current?.disconnect();
  }, [root, rootMargin, threshold, once]);

  return {
    ref,
    isIntersecting,
    hasIntersected,
  };
}
