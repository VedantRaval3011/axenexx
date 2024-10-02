import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const icons = [
  {
    src: "/footer/linkedin.svg",
    href: "https://www.linkedin.com/in/vedant-raval-69967320a/",
  },
  {
    src: "/footer/github.svg",
    href: "https://github.com/VedantRaval3011",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#10112f] py-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:justify-between xl:px-6">
          <div className="flex-1 flex gap-8">
            {icons.map((icon, index) => {
              return (
                <Link href={icon.href} key={index}>
                  <div className="relative w-6 h-6">
                    <Image
                      src={icon.src}
                      fill
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex-1 flex justify-center">
            <Logo />
          </div>

          <p className="flex-1 flex justify-end font-light">
            &copy; 2024 Focus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
