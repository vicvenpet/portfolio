import Image from 'next/image';
import { hero } from '@/data/config';

export default function Hero() {
  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="border border-gray-300 border-2 w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="Viktor"
          />
        </div>
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}