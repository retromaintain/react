import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import '../App.css'

export default function TooltipIcon() {
  return (
    <div className="inline-block align-middle ">
      <Tooltip
        className="backdrop-blur-md bg-opacity-25 bg-gray-600"
        content={
          <div className="w-auto ">
            <Typography color="white" className="text-font-white">
              Software Engineer
            </Typography>
          </div>
        }
      >
        <InformationCircleIcon
          strokeWidth={2}
          className="text-white w-7 h-7 cursor-pointer mb-1"
        />
      </Tooltip>
    </div>
  );
}
