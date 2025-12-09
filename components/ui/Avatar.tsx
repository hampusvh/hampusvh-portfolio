import Image from "next/image";
import portrait from "@/public/images/avatar.png";

function Avatar() {
  return (
    <Image
      src={portrait}
      alt="Hampus"
      width={320}
      height={320}
      className="avatar-image"
      priority
    />
  );
}
export default Avatar;