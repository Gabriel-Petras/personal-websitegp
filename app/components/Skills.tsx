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

  return (
    <section
      id="skills"
      ref={ref}
      className="relative h-screen bg-gray-50 dark:bg-gray-900 snap-start overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/stonks.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-black/50 backdrop-blur-sm rounded-lg p-8 md:p-12 transition-all duration-1000 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Good Design Matters</h2>
          <div className="w-24 h-1 bg-blue-400 mb-8"></div>
          
          <div className="text-xl text-gray-100 leading-relaxed space-y-4">
            <p>
              In today's digital landscape, a well-designed website is no longer optional—it's essential for business success. Your website serves as the digital storefront for your brand, often making the critical first impression on potential customers. It's where trust is built, relationships begin, and conversions happen.
            </p>
            <p>
              A professional website establishes credibility and legitimacy in your industry. When customers search for your business online, a polished, user-friendly site reassures them that you're serious, reliable, and invested in your craft. This trust directly impacts your ability to convert visitors into customers.
            </p>
            <p>
              Beyond aesthetics, a well-designed website is a powerful business tool that drives measurable results. From improving search engine visibility and reducing bounce rates to streamlining the customer journey and increasing conversion rates, every element matters. Your website works 24/7 to generate leads, inform customers, and grow your bottom line—making it one of the best investments you can make in your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
