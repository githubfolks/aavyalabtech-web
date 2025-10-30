/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const PlatformCard = ({ platform }: { platform: Record<string, any> }) => {
  return (
    <div className="bg-white border-2 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:border-primary-main">
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4 flex justify-center items-center bg-white border-2 ">
        <Image
          src={platform.image}
          alt={platform.name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-primary-main">
          {platform.name}
        </h3>
        <p className="text-gray-800 md:text-xl mt-2">{platform.description}</p>
      </div>

      <div className="mt-4 text-center">
        <Button
          variant="contained"
          color="secondary"
          href={platform.href}
          startIcon={<FaArrowRight />}
          className="inline-block text-white font-bold hover:underline"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};


export default PlatformCard