import Image from 'next/image';
import { certificates } from '@/data/config'; // Assuming you have a 'certificates' data source

export default function Certificates() { // Renamed the component to Certificates
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {certificates.title} {/* Changed 'projects' to 'certificates' */}
        </h2>
      </div>
      <p className="text-lg">{certificates.desc}</p> {/* Changed 'projects' to 'certificates' */}
      <div className=" mt-8">
        {certificates.certificates.map((item, index) => { // Changed 'projects' to 'certificates'
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
                    <span className="ml-2 text-blue-500 transition-colors hover:underline duration-500">
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
                    <span className="ml-2 text-lightText  transition-colors hover:underline duration-500">
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
