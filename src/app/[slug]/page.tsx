import { GO_PACKAGES, GITHUB_URL, VANITY_URL } from "@/constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface IProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug } = params;
  const pkg = GO_PACKAGES.find((pkg) => pkg.slug === slug);

  if (!pkg) {
    redirect("/404");
  }

  return {
    title: `${pkg.name} - Go | Krishna Kumar`,
    description: pkg.description,
    other: {
      "go-import": `${VANITY_URL}/${pkg.slug} git ${GITHUB_URL}/${pkg.repo}`,
      "go-source": `${VANITY_URL}/${pkg.slug} ${GITHUB_URL}/${pkg.repo} ${GITHUB_URL}/${pkg.repo}/tree/master{/dir} ${GITHUB_URL}/${pkg.repo}/blob/master{/dir}/{file}#L{line}`,
    },
  };
}

export default function PackagePage({ params }: IProps) {
  const { slug } = params;
  const packageDetails = GO_PACKAGES.find((pkg) => pkg.slug === slug);
  if (!packageDetails) {
    redirect("/404");
    return null;
  }
  return (
    <div className="max-w-2xl mx-auto px-4 text-gray-800">
      <h1 className="text-xl font-light my-20">
        <Link href="/" className="text-blue-600 hover:underline">
          All Packages
        </Link>
        {" / "}
        <Link href={`/${slug}`} className="text-blue-600 hover:underline">
          {slug}
        </Link>
      </h1>
      <div className="border p-6 rounded-xl shadow-md bg-white">
        <div className="flex justify-between">
          <span className="text-2xl font-semibold text-black hover:text-gray-700">
            {packageDetails.name}
          </span>
          <a
            href={`${GITHUB_URL}/${packageDetails.repo}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-600 flex items-center gap-2"
          >
            <FaGithub className="inline-block" />
            {packageDetails.repo}
          </a>
        </div>

        <p className="mt-4 text-lg text-gray-600">
          {packageDetails.description}
        </p>

        <div className="mt-4">
          {/* <h2 className="text-xl font-semibold">Packages</h2>
          <ul className="mt-2">
            {packageDetails.packages.map((pkg) => (
              <li key={pkg} className="text-gray-600">
                {pkg}
              </li>
            ))}
          </ul> */}
          <h2 className="text-xl font-semibold mt-4">Installation</h2>
          <pre className="bg-gray-100 p-4 rounded-md mt-2">
            go get go.krishnaaa.com/{packageDetails.slug}
          </pre>
        </div>
      </div>
    </div>
  );
}
