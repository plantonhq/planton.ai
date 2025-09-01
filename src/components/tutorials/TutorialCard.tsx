import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tutorial } from '@/lib/tutorials';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {tutorial.featuredImage && (
        <div className="relative h-48 w-full bg-gray-700 flex items-center justify-center">
          {tutorial.featuredImage.endsWith('.svg') ? (
            <Image
              src={tutorial.featuredImage}
              alt={tutorial.title}
              width={80}
              height={80}
              className="object-contain"
            />
          ) : (
            <Image
              src={tutorial.featuredImage}
              alt={tutorial.title}
              fill
              className="object-cover"
            />
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            {tutorial.category}
          </span>
          {tutorial.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {tutorial.title}
        </h3>
        
        {tutorial.excerpt && (
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {tutorial.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {tutorial.author[0]?.profilePicture && (
              <Image
                src={tutorial.author[0].profilePicture}
                alt={tutorial.author[0].name}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            <span className="text-gray-400 text-sm">
              {tutorial.author[0]?.name || 'Planton Team'}
            </span>
          </div>
          
          <span className="text-gray-500 text-sm">
            {new Date(tutorial.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </div>
        
        <Link
          href={`/tutorials/${tutorial.slug}`}
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Read Tutorial
        </Link>
      </div>
    </div>
  );
}
