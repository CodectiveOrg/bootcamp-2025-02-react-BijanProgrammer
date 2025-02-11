import { Vibe } from "./vibe.ts";

export type Dream = {
  id: string;
  title: string;
  description: string;
  date: Date;
  vibe: Vibe;
};
