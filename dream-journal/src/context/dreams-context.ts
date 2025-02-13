import { Dream } from "../types/dream.ts";
import { createContext, Dispatch, SetStateAction } from "react";

type DreamsContextValue = {
  dreams: Dream[];
  setDreams: Dispatch<SetStateAction<Dream[]>>;
};

export const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  setDreams: () => {},
});
