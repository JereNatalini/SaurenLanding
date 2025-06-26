import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "power2.out",
  scrollStart = "top 85%",
  scrollEnd = "bottom 40%",
  stagger = 0.03,
  as: ContainerTag = "div"
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const { content, isString } = useMemo(() => {
    if (typeof children === "string") {
      return {
        isString: true,
        content: children.split("").map((char, index) => (
          <span className="char" key={index} aria-hidden="true">
            {char === " " ? "\u00A0" : char}
          </span>
        ))
      };
    }
    return { isString: false, content: children };
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Clean up previous ScrollTrigger
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    const targets = isString
      ? el.querySelectorAll<HTMLElement>(".char")
      : [el.querySelector<HTMLElement>(".scroll-float-content")!];

    const ctx = gsap.context(() => {
      gsap.fromTo(targets,
        {
          opacity: 0,
          yPercent: 120,
          scaleY: 1.8,
          scaleX: 0.85
        },
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          duration: animationDuration,
          ease,
          stagger: isString ? stagger : 0,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            toggleActions: "play none none none",
            markers: false
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [
    isString,
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  const Tag = ContainerTag as React.ElementType;

  return (
    <Tag
      ref={containerRef as React.RefObject<any>}  /* relajamos el tipo del ref */
      className={`scroll-float ${containerClassName}`}
    >
      <span className={`scroll-float-content ${textClassName}`}>
        {content}
      </span>
    </Tag>
  );
};

export default ScrollFloat;