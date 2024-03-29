import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-lg text-gray-600">Page not found</p>
      <Link href="/" className="mt-6 text-blue-500 hover:text-blue-700">
        Go back home
      </Link>
    </div>
  );
}
