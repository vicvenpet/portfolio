import {
  SiPython,
  SiDocker,
  SiJavascript,
  SiPostgresql,
  SiDotnet,
  SiReact,
} from 'react-icons/si';
import { 
  FaAws,
} from 'react-icons/fa';
import { 
  GrMysql 
} from "react-icons/gr";

const technologies = [
  { icon: SiPython, name: 'Python' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiDotnet, name: '.NET' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: FaAws, name: 'AWS' },
  { icon: SiReact, name: 'React' },
  { icon: GrMysql, name: 'S' },
];

export default function Technologies() {
  return (
    <section className="py-24 dark:bg-black dark:text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
          Newly employed stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center group"
            >
              <tech.icon className="w-16 h-16 mb-4 text-gray-400 group-hover:text-white transition-colors duration-300 s" />
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
