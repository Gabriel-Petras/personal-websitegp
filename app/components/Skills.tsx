'use client';

import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: 'First Impressions Matter',
      description: 'Your website is often the first interaction potential customers have with your business. A professional, well-designed site builds trust and credibility instantly.',
      icon: '✨',
    },
    {
      title: 'Increased Conversion Rates',
      description: 'Good design guides users naturally through your site, making it easier for them to find what they need and take action, directly impacting your bottom line.',
      icon: '📈',
    },
    {
      title: 'Mobile-First Experience',
      description: 'With over 60% of web traffic coming from mobile devices, a responsive design ensures you don\'t lose potential customers on smaller screens.',
      icon: '📱',
    },
    {
      title: 'Better Search Rankings',
      description: 'Search engines favor well-structured, fast-loading websites. Good design often includes SEO best practices that help you rank higher.',
      icon: '🔍',
    },
    {
      title: 'Competitive Advantage',
      description: 'In today\'s digital marketplace, a polished website sets you apart from competitors and positions your brand as modern and reliable.',
      icon: '🏆',
    },
    {
      title: 'Reduced Bounce Rate',
      description: 'Users leave poorly designed sites quickly. An intuitive, attractive design keeps visitors engaged longer, increasing the chance of conversion.',
      icon: '⏱️',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900 snap-start"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Good Design Matters</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A well-designed website is more than aesthetics—it's a powerful business tool that drives results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-black p-6 rounded-lg shadow-md transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
