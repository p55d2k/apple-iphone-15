import { FooterContent, FooterContentType } from "@/constants/Footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen p-2 md:p-4 bg-gray-100 text-gray-500 flex justify-center items-center">
      <div className="flex flex-col divide-y divide-slate-300 text-xs w-full lg:w-auto">
        <p className="pb-4">A subscription is required for Apple TV+.</p>
        <div className="hidden md:flex justify-between lg:space-x-16 w-full pt-6 p-4">
          {FooterContent.map((section: FooterContentType[], index: number) => (
            <div key={index} className="flex flex-col space-y-4">
              {section.map((item: FooterContentType) => (
                <div key={item.title} className="flex flex-col space-y-2">
                  <p className="text-black font-medium">{item.title}</p>
                  {item.items.map((subItem: string) => (
                    <p key={subItem}>{subItem}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="py-3">
          More ways to shop: Find an{" "}
          <span className="text-blue-500 underline cursor-pointer">
            Apple Store
          </span>{" "}
          or{" "}
          <span className="text-blue-500 underline cursor-pointer">
            a retailer
          </span>{" "}
          near you. Or call 1800-692-7753.
        </p>
        <div className="flex flex-row justify-between w-full py-4">
          <div className="flex flex-col space-y-1">
            <p>
              Copyright © 2024 Apple Inc. (Remade by{" "}
              <Link
                href={"https://github.com/p55d2k"}
                target="_blank"
                className="text-blue-500 underline"
              >
                p55d2k
              </Link>
              ) All rights reserved.
            </p>
            <div className="flex flex-row space-x-2 text-black">
              <p className="hover:underline cursor-pointer">Privacy Policy</p>
              <p>|</p>
              <p className="hover:underline cursor-pointer">Terms of Use</p>
              <p>|</p>
              <p className="hover:underline cursor-pointer">
                Sales and Refunds
              </p>
              <p>|</p>
              <p className="hover:underline cursor-pointer">Legal</p>
              <p>|</p>
              <p className="hover:underline cursor-pointer">Site Map</p>
            </div>
          </div>
          <p className="hidden sm:block">Singapore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
