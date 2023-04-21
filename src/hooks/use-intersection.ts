import { useRef, useEffect } from "react";

export default function useInfiniteScroll(onEnd: VoidFunction, options = {}) {
  const endElmRef = useRef();

  useEffect(() => {
    const endElm = endElmRef.current;
    let observer: IntersectionObserver;
    if (endElm) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              onEnd();
            }
          });
        },
        { threshold: 1, ...options }
      );

      observer.observe(endElm);
    }

    return () => {
      if (endElm) {
        observer.unobserve(endElm);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endElmRef, onEnd]);

  return endElmRef;
}
