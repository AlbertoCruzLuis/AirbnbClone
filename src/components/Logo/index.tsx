import Image from "next/image";
import { memo } from "react";
import { useWindowSize } from "react-use";

const LogoComponent = () => {
  const { width } = useWindowSize();
  const isMobile = width < 1200;

  return (
    <div className={`flex items-center`}>
      {isMobile && (
        <div className="w-8">
          <Image
            src="/assets/images/Isotipo.svg"
            alt="Isotipo"
            width={32}
            height={32}
          />
        </div>
      )}
      {!isMobile && (
        <div className="w-[102px]">
          <Image
            src="/assets/images/Imagotipo.svg"
            alt="Imagotipo"
            width={102}
            height={32}
          />
        </div>
      )}
    </div>
  );
};

export const Logo = memo(LogoComponent);
