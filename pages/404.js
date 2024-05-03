import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for does not exist or has been moved.</p>
      <Link href="/">
        <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Go back to Home</a>
      </Link>
    </div>
  );
}
