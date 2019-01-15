
export type Options = {
  hmr?: boolean;
  base?: number;
  attrs?: Partial<Pick<HTMLLinkElement, 'type' | 'rel'>>;
  insertAt?: string | object;
  insertInto?: string | Function;
  transform?: Function | { default: Function };
  singleton?: boolean;
  sourceMap?: boolean;
  convertToAbsoluteUrls?: boolean;
  universal?: boolean;
};

export type Part = {
  css: string;
  media: string;
  sourceMap: any;
}

export type Style = {
  id: string;
  parts: Part[];
}
