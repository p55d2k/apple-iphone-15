import { BannerProps } from "@/components/Banner";

export interface MiniSection {
  content: BannerProps[];
}

export const contentData: (BannerProps | MiniSection)[] = [
  {
    imageSrc: "/imgs/apple-event.png",
    order: "image",
    imageSize: 400,
    bgColor: "gray",
    headerText: "Apple Event",
    subtitle: "Watch online on 7 May at 10 pm SGT.",
    buttons: [
      {
        variant: "primary",
        children: "Learn more",
      },
    ],
  },
  {
    imageSrc: "/imgs/iphone15pro.jpg",
    bgColor: "black",
    imageSize: "full",
    order: "text",
    textColor: "text-white",
    headerText: "iPhone 15 Pro",
    subtitle: "Titanium. So strong. So light. So Pro.",
    buttons: [
      {
        variant: "primary",
        children: "Learn more",
      },
      {
        variant: "secondary",
        children: "Buy",
      },
    ],
  },
  {
    imageSrc: "/imgs/iphone15.jpeg",
    order: "text",
    imageSize: "full",
    bgColor: "gray",
    headerText: "iPhone 15",
    subtitle: "New camera. New design. Newphoria.",
    buttons: [
      {
        variant: "primary",
        children: "Learn more",
      },
      {
        variant: "secondary",
        children: "Buy",
      },
    ],
  },
  {
    content: [
      {
        imageSrc: "/imgs/macbook-air.jpeg",
        imageSize: "full",
        bgColor: "gray",
        mini: true,
        order: "text",
        headerText: "MacBook Air",
        subtitle: "Lean. Mean. M3 Machine.",
        buttons: [
          {
            variant: "primary",
            children: "Learn more",
          },
          {
            variant: "secondary",
            children: "Buy",
          },
        ],
      },
      {
        imageSrc: "/imgs/watch-series-9.jpeg",
        order: "text",
        mini: true,
        bgColor: "black",
        textColor: "text-white",
        imageSize: "full",
        headerText: "Watch Series 9",
        subtitle: "Smarter. Brighter. Mightier",
        buttons: [
          {
            variant: "primary",
            children: "Learn more",
          },
          {
            variant: "secondary",
            children: "Buy",
          },
        ],
      },
    ],
  },
  {
    content: [
      {
        imageSrc: "/imgs/airpods.jpeg",
        order: "text",
        mini: true,
        bgColor: "black",
        textColor: "text-white",
        imageSize: "full",
        headerText: "AirPods Pro",
        subtitle: "Adaptive Audio. Now playing.",
        buttons: [
          {
            variant: "primary",
            children: "Learn more",
          },
          {
            variant: "secondary",
            children: "Buy",
          },
        ],
      },
      {
        imageSrc: "/imgs/ipad.png",
        imageSize: "full",
        bgColor: "gray",
        mini: true,
        order: "text",
        headerText: "iPad",
        subtitle: "Lovable. Drawable. Magical.",
        buttons: [
          {
            variant: "primary",
            children: "Learn more",
          },
          {
            variant: "secondary",
            children: "Buy",
          },
        ],
      },
    ],
  },
];
