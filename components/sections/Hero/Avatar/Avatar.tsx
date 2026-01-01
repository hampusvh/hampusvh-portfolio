import Image from "next/image";
import portrait from "@/public/images/avatar2.png";
import "@/components/sections/Hero/Avatar/avatar.css";

function Avatar() {
  return (
    <Image
      src={portrait}
      alt="Hampus"
      className="avatar-image"
      priority
    />
  );
}
export default Avatar;