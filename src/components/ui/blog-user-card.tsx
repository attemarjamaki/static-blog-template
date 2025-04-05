import Image from "next/image";

export default function UserCard() {
  return (
    <div className="flex items-center mt-4">
      <Image
        src="/images/office-woman.jpg"
        width={400}
        height={400}
        alt="Code"
        className="w-8 h-8 rounded-full object-cover"
      />
      <p className="ml-2">Michelle Scott</p>
      <p className="ml-8 text-neutral-500">Feb, 22, 2020</p>
    </div>
  );
}
