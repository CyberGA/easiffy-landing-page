import Image from "next/image";
import Link from "next/link"

const AppLogo = () => (
  <Link href="/">
    <Image
      src="/logo.png"
      alt="Brand logo"
      width={110.77}
      height={32}
    />
  </Link>
);

export default AppLogo;
