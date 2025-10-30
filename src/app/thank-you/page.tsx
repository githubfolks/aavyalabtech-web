import Link from "next/link";
import { Button } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import Logo from "../../../public/images/logo-colour.png";
import Image from "next/image";

const ThankyouPage = () => {
  return (
    <div className="flex items-center min-h-screen container mx-auto">
      <div className="items-center flex flex-col w-full">
        <h3 className="text-primary-main text-center text-md font-bold">
          Your request has been submitted successfully.
        </h3>
        <p className="text-center text-sm font-bold">
          We will connect your shortly. Expected ETA 24 Hours.
        </p>
        <div className="text-center">
          <Image
            alt="Under development"
            src={Logo}
            width={456}
            height={300}
            className="objedt-contain"
          />
        </div>
        <Link href="/">
          <Button
            startIcon={<FaArrowLeft fontSize="small" />}
            sx={{ mt: 3 }}
            variant="contained"
          >
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankyouPage;
