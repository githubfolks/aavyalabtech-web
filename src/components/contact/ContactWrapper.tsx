import { IContactWrapper } from "@/utils/interface";

const ContactWrapper: React.FC<IContactWrapper> = ({ children }) => {
  return (
    <div className="py-[14px] md:px-0 px-[10px]" id="contact">
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse md:flex-row">
          <div className="relative flex items-center md:items-start justify-center flex-col md:basis-[50%] basis-full bg-contact">
            <div className="mt-5 w-[90%]"></div>
          </div>
          <div className="rounded-md py-2 flex-1 bg-white drop-shadow-md md:m-4 p-4 md:py-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactWrapper;
