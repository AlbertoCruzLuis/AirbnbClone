import Image from "next/image";
import { memo } from "react";
import { useWindowSize } from "react-use";

const LogoComponent = () => {
  const { width } = useWindowSize();
  const isMobile = width < 1200;

  return (
    <div className={`font-poppins flex items-center gap-1 tracking-wide`}>
      {isMobile && (
        <Image
          src="/assets/images/Isotipo.svg"
          alt="Isotipo"
          width={102}
          height={32}
        />
      )}
      {!isMobile && (
        <Image
          src="/assets/images/Imagotipo.svg"
          alt="Imagotipo"
          width={102}
          height={32}
        />
      )}
    </div>
  );
};

export const Logo = memo(LogoComponent);
