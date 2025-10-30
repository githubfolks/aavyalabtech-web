import { cn } from "@/utils";

const CustomArrow = ({ className, style, onClick, direction }: any) => {
    return (
      <button
        className={cn(
          `h-16 w-16 absolute bg-gray-800 text-white rounded-full  bottom-10`,
          direction === "prev" ? "right-36" : "right-10",
          "z-10" 
        )}
        style={{ ...style }}
        onClick={onClick}
      >
        {direction === "prev" ? "←" : "→"}
      </button>
    );
  };

  export default CustomArrow