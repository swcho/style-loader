
declare const DEBUG: boolean;

declare const __webpack_nonce__;

interface Window {
  static HTMLIFrameElement: any;
}

type Options = {
  hmr?: boolean;
  base?: number;
  attrs?: Partial<Pick<HTMLLinkElement, 'type', 'rel'>>;
  insertAt?: string | object;
  insertInto?: string | Function;
  transform?: Function | { default: Function };
  singleton?: boolean;
  sourceMap?: boolean;
  convertToAbsoluteUrls?: boolean;
  universal?: boolean;
};

type Part = {
  css: string;
  media: string;
  sourceMap: any;
}

type Style = {
  id: string;
  parts: Part[];
}

type AddStyle = (newObj?) => void;

type StylesInDom = {
  [id: string]: {
    id: string;
    refs: number;
    parts: AddStyle[];
  }
}