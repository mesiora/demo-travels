import type { Item } from "~/types/item";
import type { Timestampable } from "~/types/timestampable";
import type { Blameable } from "~/types/blameable";

export interface Post extends Item, Timestampable, Blameable {
  id?: number;
  title?: string;
  content?: string;
}
