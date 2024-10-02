import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="relative w-[148px] h-[22px] flex">
      <h1 className="uppercase font-bold">Axenexx .</h1>
    </Link>
  );
};

export default Logo;
