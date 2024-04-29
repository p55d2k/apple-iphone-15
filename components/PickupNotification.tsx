import Link from "next/link";

const PickupNotification = () => {
  return (
    <div className="w-full min-h-12 justify-center items-center flex pt-12">
      <p className="text-sm text-center mx-12 py-3">
        <Link href={"https://www.apple.com/sg/store"} target="_blank" className="text-blue-500 hover:underline">Shop online</Link>{" "}
        and get Specialist help, free delivery and more. Get in-stock items with
        Apple Pickup.
      </p>
    </div>
  );
};

export default PickupNotification;
  