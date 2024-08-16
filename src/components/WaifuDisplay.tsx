import useFetch from "react-fetch-hook";
import { WaifuImage } from "./WaifuImage";

import createTrigger from "react-use-trigger";
import useTrigger from "react-use-trigger/useTrigger";

const requestTrigger = createTrigger();

export const WaifuDisplay: React.FC = () => {
  const requestTriggerValue = useTrigger(requestTrigger);

  const { isLoading, error, data } = useFetch("https://api.waifu.im/search", {
    depends: [requestTriggerValue],
  });

  return isLoading ? (
    <div className="h-full text-center content-center bg-slate-900">
      <p className=" text-slate-100">Loading...</p>
    </div>
  ) : error ? (
    <div className="h-full text-center content-center bg-slate-900">
      <p className="text-slate-100">Error: {error.message}</p>
      <a
        className="text-blue-400 hover:text-blue-500"
        onClick={() => requestTrigger()}
      >
        Try again
      </a>
    </div>
  ) : (
    <WaifuImage
      waifuImage={(data as any).images[0]}
      requestTrigger={requestTrigger}
    />
  );
};
