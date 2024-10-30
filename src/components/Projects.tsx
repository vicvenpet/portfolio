import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'skyline-emu/website',
    description:
      'style: conversion to svg and markdown format.',
    image:
      'https://raw.githubusercontent.com/skyline-emu/branding/refs/heads/master/kofi/cover-banner.png',
    link: 'https://github.com/skyline-emu/website/pull/5',
  },
  {
    id: 2,
    title: 'midudev/landing-infojobs',
    description: 'fix: follow us store apps guidelines.',
    image:
      'https://brand.infojobs.net/images/logo-base.png',
    link: 'https://github.com/midudev/landing-infojobs/pull/115',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Notable Contributions
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a
                href={project.link}
                className="block w-full h-[280px] overflow-hidden bg-gray-100 dark:bg-gray-800"
                target='_blank'
              >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === project.id
                        ? 'grayscale-0 scale-105'
                        : 'grayscale'
                      }`}
                    />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                </div>
              </a>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/vicvenpet?tab=overview"                      
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            target='_blank'
          >
            More contributions
            <sup className="ml-1">[+]</sup>
          </a>
        </div>
      </div>
    </section>
  );
}
