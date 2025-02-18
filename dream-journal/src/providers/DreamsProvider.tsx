import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { toast } from "react-toastify";

import { DREAMS_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys.ts";

import { DreamsContext } from "../context/dreams-context.ts";

import { Dream } from "../types/dream.ts";

type Props = PropsWithChildren;

export default function DreamsProvider({ children }: Props): ReactNode {
  const [dreams, setDreams] = useState<Dream[]>(loadDreamsInitialState);

  useEffect(() => {
    localStorage.setItem(DREAMS_LOCAL_STORAGE_KEY, JSON.stringify(dreams));
  }, [dreams]);

  const createDream = (dream: Dream): void => {
    setDreams((old) => [...old, { ...dream }]);
    toast.success("Dream created successfully.");
  };

  const editDream = (dream: Dream): void => {
    setDreams((old) => old.map((x) => (x.id === dream.id ? { ...dream } : x)));
    toast.success("Dream edited successfully.");
  };

  const removeDream = (id: string): void => {
    setDreams((old) => old.filter((x) => x.id !== id));
    toast.success("Dream removed successfully.");
  };

  return (
    <DreamsContext.Provider
      value={{
        dreams,
        createDream,
        editDream,
        removeDream,
      }}
    >
      {children}
    </DreamsContext.Provider>
  );
}

function loadDreamsInitialState(): Dream[] {
  const item = localStorage.getItem(DREAMS_LOCAL_STORAGE_KEY);

  if (!item) {
    return [];
  }

  return JSON.parse(item);
}
