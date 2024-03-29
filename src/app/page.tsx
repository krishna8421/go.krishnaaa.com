import { GO_PACKAGES } from "@/constants";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 text-gray-800">
      <h1 className="text-3xl font-bold m-20 text-center">Go Packages</h1>
      <ul className="flex flex-col gap-12">
        {GO_PACKAGES.map((pkg) => (
          <Link href={`/${pkg.slug}`} key={pkg.slug}>
            <li className="border p-6 rounded-xl shadow-md bg-white">
              <span className="text-2xl font-semibold text-black hover:text-gray-700">
                {pkg.name}
              </span>
              <p className="mt-4 text-lg text-gray-600">{pkg.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
