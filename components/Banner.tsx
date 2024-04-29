import Image from "next/image";
import Button from "./Button";

interface ButtonData {
  children?: React.ReactNode;
  variant: "primary" | "secondary";
}

export interface BannerProps {
  order: "image" | "text";
  imageSrc: string;
  bgColor: "gray" | "black" | "white";
  textColor?: string;
  imageSize?: number | "full";
  headerText: string;
  subtitle: string;
  buttons: ButtonData[];
  mini?: boolean;
}

const Banner = ({
  imageSrc,
  bgColor,
  textColor,
  imageSize,
  order,
  headerText,
  subtitle,
  buttons,
  mini,
}: BannerProps) => {
  return (
    <div
      className={`${
        bgColor === "gray"
          ? "bg-gray-100"
          : bgColor === "white"
          ? "bg-white"
          : "bg-black"
      } ${textColor || "text-black"} w-full ${
        imageSize === "full" ? "py-8" : "p-8"
      } flex ${order === "image" ? "flex-col pt-0" : "flex-col-reverse pb-0"} ${
        order === "text" && !mini && "pt-12"
      } justify-center items-center`}
    >
      <Image
        src={imageSrc}
        width={(imageSize !== "full" && imageSize) || 500}
        height={(imageSize !== "full" && imageSize) || 500}
        alt={headerText}
        className={imageSize === "full" ? "w-full h-full" : ""}
        unoptimized
      />
      <div className="flex flex-col text-center">
        <h2
          className={`${
            mini
              ? "text-3xl md:text-4xl lg:text-5xl"
              : "text-4xl md:text-5xl lg:text-6xl"
          } font-medium`}
        >
          {headerText}
        </h2>
        <h2
          className={`${
            mini
              ? "text-lg md:text-xl lg:text-2xl"
              : "text-xl md:text-2xl lg:text-3xl"
          } mt-1 font-light`}
        >
          {subtitle}
        </h2>
        <div className="mt-3 flex flex-row justify-center items-center space-x-4">
          {buttons.map((button, i) => (
            <Button variant={button.variant} key={i}>
              {button.children}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
