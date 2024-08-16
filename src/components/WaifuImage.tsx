import { TriggerWrapper } from "react-use-trigger/types/TriggerWrapper";

interface Props {
  waifuImage: WaifuImageType;
  requestTrigger: TriggerWrapper;
}

interface WaifuImageType {
  image_id: number;
  favorites: number;
  dominant_color: string | undefined;
  source: string;
  uploaded_at: string;
  is_nsfw: boolean;
  width: number;
  height: number;
  url: string;
  tags: Tag[];
}

interface Tag {
  tag_id: number;
  name: string;
  description: string;
  is_nsfw: boolean;
}

export const WaifuImage: React.FC<Props> = ({ waifuImage, requestTrigger }) => (
  <div
    style={{ backgroundColor: waifuImage.dominant_color }}
    className="h-full flex justify-center text-slate-100"
  >
    <img
      className="object-scale-down max-h-full"
      src={waifuImage.url}
      onClick={() => requestTrigger()}
    />
    <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-2">
      <a
        className=" bg-slate-800 hover:text-slate-200 hover:bg-slate-900 p-3 rounded-full"
        href={waifuImage.url}
      >
        Raw
      </a>
      <a
        className=" bg-slate-800 hover:text-slate-200 hover:bg-slate-900 p-3 rounded-full"
        href={waifuImage.source}
      >
        Source
      </a>
    </div>
  </div>
);
