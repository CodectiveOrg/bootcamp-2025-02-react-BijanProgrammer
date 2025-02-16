import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { DREAMS_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys.ts";

import { DreamsContext } from "../context/dreams-context.ts";

import { Dream } from "../types/dream.ts";

type LocalStorageDream = Omit<Dream, "date"> & { date: string };

type Props = PropsWithChildren;

export default function DreamsProvider({ children }: Props): ReactNode {
  const [dreams, setDreams] = useState<Dream[]>(loadDreamsInitialState);

  useEffect(() => {
    localStorage.setItem(DREAMS_LOCAL_STORAGE_KEY, JSON.stringify(dreams));
  }, [dreams]);

  return (
    <DreamsContext.Provider value={{ dreams, setDreams }}>
      {children}
    </DreamsContext.Provider>
  );
}

function loadDreamsInitialState(): Dream[] {
  const item = localStorage.getItem(DREAMS_LOCAL_STORAGE_KEY);

  if (!item) {
    return [];
  }

  const parsedDreams = JSON.parse(item) as LocalStorageDream[];

  return parsedDreams.map((dream) => ({
    ...dream,
    date: new Date(dream.date),
  }));
}
