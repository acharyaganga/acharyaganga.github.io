import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('opacity-100', 'translate-y-0');
                    element.classList.remove('opacity-0', 'translate-y-8');
                    observer.unobserve(element);
                }
            },
            { threshold: 0.1 }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out will-change-transform will-change-opacity"
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
