declare class EmbedBuilder {
  title: any;
  type: any;
  description: any;
  url: any;
  timestamp: any;
  color: any;
  footer: any;
  image: any;
  thumbnail: any;
  video: any;
  provider: any;
  author: any;
  fields: any;
  constructor(data?: {});
  setTitle(title: any): this;
  setDescription(description: any): this;
  setURL(url: any): this;
  setTimestamp(timestamp: any): this;
  setColor(color: any): this;
  setFooter(footer: any): this;
  setImage(image: {url: any}): this;
  setThumbnail(thumbnail: {url: any}): this;
  setAuthor(author: any): this;
  addFields(...fields: any[][]): this;
  addField(nm: any, vl: any, il: any): this;
  setFields(...fields: any[][]): this;
  toJSON(): {
    type: any;
    title: any;
    description: any;
    author: any;
    image: any;
    thumbnail: any;
    color: any;
    timestamp: any;
    url: any;
    footer: any;
    fields: any;
  };
  static transformFields(fields: any[]): {
    name: any;
    value: any;
    inline: any;
  };
}
declare class Button {
  emoji: any;
  label: any;
  url: any;
  customid: any;
  style: any;
  disabled: any;
  constructor({emoji, label, url, customid, style, disabled}: {emoji: any; label: any; url: any; customid: any; style: any; disabled: any});
}
declare class Embed {
  title: any;
  color: any;
  author: any;
  url: any;
  description: any;
  image: any;
  footer: any;
  timestamp: any;
  thumbnail: any;
  fields: any;
  constructor({
    title,
    color,
    author,
    url,
    description,
    image,
    footer,
    timestamp,
    thumbnail,
    fields,
  }: {
    title: any;
    color: any;
    author: any;
    url: any;
    description: any;
    image: any;
    footer: any;
    timestamp: any;
    thumbnail: any;
    fields: any;
  });
}
declare class Row {
  components: any;
  constructor(data?: {});
}
declare class SelectMenu {
  customid: any;
  placeholder: any;
  disabled: any;
  minvalues: any;
  maxvalues: any;
  options: any;
  min_values: any;
  max_values: any;
  constructor({
    customid,
    placeholder,
    disabled,
    minvalues,
    maxvalues,
    options,
  }: {
    customid: any;
    placeholder: any;
    disabled: any;
    minvalues: any;
    maxvalues: any;
    options: any;
  });
}

declare const ButtonStyle: {
  Primary: number;
  Secondary: number;
  Success: number;
  Danger: number;
  Link: number;
};
export declare const Colors: {
  DEFAULT: number;
  WHITE: number;
  AQUA: number;
  GREEN: number;
  BLUE: number;
  YELLOW: number;
  PURPLE: number;
  LUMINOUS_VIVID_PINK: number;
  FUCHSIA: number;
  GOLD: number;
  ORANGE: number;
  RED: number;
  GREY: number;
  NAVY: number;
  DARK_AQUA: number;
  DARK_GREEN: number;
  DARK_BLUE: number;
  DARK_PURPLE: number;
  DARK_VIVID_PINK: number;
  DARK_GOLD: number;
  DARK_ORANGE: number;
  DARK_RED: number;
  DARK_GREY: number;
  DARKER_GREY: number;
  LIGHT_GREY: number;
  DARK_NAVY: number;
  BLURPLE: number;
  GREYPLE: number;
  DARK_BUT_NOT_BLACK: number;
  NOT_QUITE_BLACK: number;
};
declare class Util {
  static resolveColor(color: string): any;
  static generateISOString(date?: any): any;
}
