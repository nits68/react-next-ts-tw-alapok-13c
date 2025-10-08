import Image from "next/image";
import Link from "next/link";

type LinkType = {
  id: number;
  href: string;
  label: string;
};

const links: LinkType[] = [
  { id: 1, href: "/counter", label: "Counter demó" },
  { id: 2, href: "/flexbox", label: "Flexbox demó" },
  { id: 3, href: "/name-and-age", label: "useEffect demó" },
  { id: 4, href: "/teglalap/ssr", label: "Téglalap SSR demó" },
  { id: 5, href: "/teglalap/csr", label: "Téglalap CSR demó" },
];

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-lg">
        <Image alt="globe" height="100" src={"globe.svg"} width={100} />
        <h1 className="text-2xl font-bold">Hello World!</h1>
        <ul className="list-disc">
          {links.map((link) => (
            <li key={link.id}>
              <Link className="text-blue-500" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
