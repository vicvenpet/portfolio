import { useState, useEffect } from 'react';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Jobs from '@/components/Jobs';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Stack from '@/components/Stack';
import SkeletonLoader from '@/components/Skeleton';
import { meta } from '@/data/config';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace with actual data fetching logic
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
          <Hero />
          <div className="p-0 space-y-10">
            <Jobs />
            <Projects />
            <Certificates />
            <Stack />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}
