import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={`/`} className="flex gap-6 items-center">
      <Image src={logo} alt="Movie Box logo" />
      <div className="text-2xl font-bold">MovieBox</div>
    </Link>
  );
}
