import Image from 'next/image';
import { jobs } from '@/data/config'; // Assuming you have a 'jobs' data source

export default function Jobs() { // Renamed the component to Jobs
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {jobs.title} {/* Changed 'certificates' to 'jobs' */}
        </h2>
      </div>
      <p className="text-lg">{jobs.desc}</p> {/* Changed 'certificates' to 'jobs' */}
      <div className=" mt-8">
        {jobs.jobs.map((item, index) => { // Changed 'certificates' to 'jobs'
          return (
            <div
              key={index}
              className="p-6 border border-violet-400 border-lightText rounded-xl mb-4"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.link && (
                  <a
                    href={item.link}
                    className="font-bold flex items-center  py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.link}
                    </span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={`https://github.com/${item.github}`}
                    className="font-bold flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.github}
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
