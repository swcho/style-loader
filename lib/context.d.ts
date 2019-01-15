
import { Style } from '../types/index'

export type AddStyle = (newObj?: any) => void;

export type StylesInDom = {
  [id: string]: {
    id: string;
    refs: number;
    parts: AddStyle[];
  }
}

export const getStylesInDom: () => StylesInDom[];

export const getStyles: () => Style[];

export const resetStyles: () => void;
