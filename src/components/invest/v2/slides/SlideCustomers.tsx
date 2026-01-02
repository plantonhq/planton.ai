'use client';

import React from 'react';
import Image from 'next/image';
import { Slide, SlideTitle, SlideSubtitle, Callout } from '../shared';

const customers = [
  {
    name: 'Jai.CX',
    logo: '/images/customers/logos/jai-cx.svg',
    className: 'scale-50', // Reduce size - logo appears larger than others
  },
  {
    name: 'TYNYBAY',
    logo: '/images/customers/logos/tynybay.png',
    className: 'scale-[1.8]', // Larger to compensate for logo padding
  },
  {
    name: 'iorta TechNext',
    logo: '/images/customers/logos/iorta.svg',
    className: '',
  },
  {
    name: 'Odwen',
    logo: '/images/customers/logos/odwen.svg',
    className: '',
  },
  // TODO: Add Aadvil logo to /images/customers/logos/aadvil.svg (First GCP Customer)
];

export default function SlideCustomers() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Customers</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Trusted by IT Consulting Firms and Startups
      </SlideSubtitle>

      {/* Customer Logos - Simple row */}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 mb-6 sm:mb-8">
        {customers.map((customer) => (
          <div key={customer.name} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
            <Image 
              src={customer.logo} 
              alt={customer.name} 
              width={80} 
              height={80} 
              className={`object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity ${customer.className}`}
            />
          </div>
        ))}
      </div>

      {/* Key Quote with avatar */}
      <Callout variant="highlight" className="max-w-2xl">
        <div className="flex items-center gap-3 mb-2">
          <Image 
            src="/images/customers/people/balaji-borra.png" 
            alt="Balaji Borra" 
            width={32} 
            height={32} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-xs text-white font-medium">Balaji Borra</p>
            <p className="text-xs text-white/50">DevOps Engineer, TYNYBAY</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-white italic sm:whitespace-nowrap">
          &ldquo;Developers Self-Onboard Their Own Services. That&apos;s a Huge Win.&rdquo;
        </p>
      </Callout>

      {/* Retention highlight */}
      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
        <span className="text-emerald-400 text-lg">✓</span>
        <span className="text-sm sm:text-base text-white font-medium">
          100% Customer Retention Since Launch
        </span>
      </div>
    </Slide>
  );
}

