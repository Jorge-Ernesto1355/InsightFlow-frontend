import { create } from "zustand";
import { GeneralClusteringData } from "../../features/dashboard/pages/AIAnswers/utils/enhancePrompt/types";

type Store = {
  data: GeneralClusteringData;
  processing_time_ms: null | number;
  status: string;

  setData: (data: GeneralClusteringData) => void;
  setProcessingTime: (processing_time_ms: number) => void;
};

const useStore = create<Store>()((set) => ({
  data: {
    clusters: {},
    cluster_summaries: [],
    metadata: {},
    cluster_data: {},
    feature_importance: {},
  },
  processing_time_ms: null,
  status: "processing",
  setData: (data: GeneralClusteringData) => set(() => ({ data })),

  setProcessingTime: (processing_time_ms: number) =>
    set(() => ({ processing_time_ms })),
  setStatus: (status: string) => set(() => ({ status })),
}));

export default useStore;
