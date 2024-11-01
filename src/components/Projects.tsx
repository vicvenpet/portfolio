import { ArrowRight } from 'lucide-react';

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
    description: 'style: conversion to svg and markdown format.',
    image: 'https://opengraph.githubassets.com/72a2ec30bf9a21f65be43ad0c5e90140c1dfa40e4e5383dbe12a9d65de6d53eb/skyline-emu/website',
    link: 'https://github.com/skyline-emu/website/pull/5',
  },
  {
    id: 2,
    title: 'midudev/landing-infojobs',
    description: 'fix: follow us store apps guidelines.',
    image: 'https://opengraph.githubassets.com/219e2db1fcd0ae7b51c74de488d9fda5d29244377fefebb563dc96494b9c2cfc/midudev/landing-infojobs',
    link: 'https://github.com/midudev/landing-infojobs/pull/115',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Notable Contributions
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <a
                href={project.link}
                className="block w-full h-[280px] overflow-hidden bg-gray-100 dark:bg-gray-800"
                target='_blank'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
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
            className="inline-flex items-center text-white hover:underline"
            target='_blank'
          >
            more contributions
            <span className="ml-2"><ArrowRight size={15} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
