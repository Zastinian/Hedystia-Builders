declare class EmbedBuilder {
  public title: string | undefined;
  public type: string;
  public description: string | undefined;
  public url: string | undefined;
  public timestamp: string | undefined;
  public color: number | undefined;
  public footer:
    | {
        text: string;
        iconURL: string | undefined;
        icon_url: string | undefined;
        proxyIconURL: string | undefined;
      }
    | undefined;
  public image:
    | {
        url: string;
        proxyURL: string | undefined;
        height: number | undefined;
        width: number | undefined;
      }
    | undefined;
  public thumbnail:
    | {
        url: string;
        proxyURL: string | undefined;
        height: number | undefined;
        width: number | undefined;
      }
    | undefined;
  public video:
    | {
        url: string;
        height: number;
        width: number;
      }
    | undefined;
  public provider:
    | {
        name: string;
        url: string;
      }
    | undefined;
  public author:
    | {
        name: string;
        url: string | undefined;
        iconURL: string | undefined;
        icon_url: string | undefined;
        proxyIconURL: string | undefined;
      }
    | undefined;
  public fields: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
  constructor(data?: {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: string | number;
    footer?: {
      text: string;
      iconURL?: string;
      icon_url?: string;
      proxyIconURL?: string;
    };
    image?: {
      url: string;
      proxyURL?: string;
      height?: number;
      width?: number;
    };
    thumbnail?: {
      url: string;
      proxyURL?: string;
      height?: number;
      width?: number;
    };
    video?: {
      url: string;
      height: number;
      width: number;
    };
    provider?: {
      name: string;
      url: string;
    };
    author?: {
      name: string;
      url?: string;
      iconURL?: string;
      icon_url?: string;
      proxyIconURL?: string;
    };
    fields?: {
      name: string;
      value: string;
      inline?: boolean;
    }[];
  });
  setTitle(title: string): this;
  setDescription(description: string): this;
  setURL(url: string): this;
  setTimestamp(timestamp: Date | number): this;
  setColor(color: string | number): this;
  setFooter(footer: string): this;
  setImage(image: {url: string}): this;
  setThumbnail(thumbnail: {url: string}): this;
  setAuthor(author: {name: string; url?: string; iconURL?: string}): this;
  addFields(...fields: Array<Array<{name: string; value: string; inline?: boolean}>> | Array<{name: string; value: string; inline?: boolean}>): this;
  addField(nm: string, vl: string, il?: boolean): this;
  setFields(...fields: {name: string; value: string; inline?: boolean}[][]): this;
  toJSON(): {
    type?: string;
    title?: string;
    description?: string;
    author?: {
      name?: string;
      url?: string;
      icon_url?: string;
    };
    image?: {
      url?: string;
    };
    thumbnail?: {
      url?: string;
    };
    color?: number;
    timestamp?: string;
    url?: string;
    footer?: {
      text?: string;
      icon_url?: string;
    };
    fields?: {
      name: string;
      value: string;
      inline?: boolean;
    }[];
  };
  static transformFields(fields: {name: string; value: string; inline?: boolean}): {
    name: string;
    value: string;
    inline?: boolean;
  };
}
declare class ButtonBuilder {
  constructor(data?: {
    customid?: string | undefined;
    style?: number | undefined;
    label?: string | undefined;
    emoji?:
      | {
          name: string;
          id: string;
        }
      | undefined;
    disabled?: boolean | undefined;
    url?: string | undefined;
  });

  setLabel(label: string): this;
  setEmoji(emoji: {name: string; id: string}): this;
  setDisabled(): this;
  setStyle(style: number): this;
  setUrl(url: string): void;
  setCustomId(customid: string): this;
  toJSON(): {
    type: number;
    custom_id: string | undefined;
    style: number;
    label: string | undefined;
    emoji:
      | {
          name: string;
          id: string;
        }
      | undefined;
    disabled: boolean;
    url: string | undefined;
  };
  static transformFields(fields: {
    customid?: string | undefined;
    style?: number | undefined;
    text?: string | undefined;
    emoji?:
      | {
          name: string;
          id: string;
        }
      | undefined;
    disabled?: boolean | undefined;
    url?: string | undefined;
  }): {
    type: number;
    custom_id: string | undefined;
    style: number | undefined;
    label: string | undefined;
    emoji:
      | {
          name: string;
          id: string;
        }
      | undefined;
    disabled: boolean | undefined;
    url: string | undefined;
  };
}

interface ButtonProperties {
  emoji?: {name: string; id: string};
  label?: string;
  url?: string;
  customid?: string;
  style?: number;
  disabled?: boolean;
}
declare class Button {
  constructor(properties: ButtonProperties);
  emoji?: {name: string; id: string};
  label?: string;
  url?: string;
  customid?: string;
  custom_id?: string | undefined;
  style: number;
  disabled: boolean;
}
interface EmbedOptions {
  title?: string;
  color?: number;
  author?: {
    name?: string;
    image?: string;
  };
  url?: string;
  description?: string;
  image?: string;
  footer?: {
    text?: string;
    image?: string;
  };
  timestamp?: string;
  thumbnail?: string;
  fields?: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
}

interface EmbedData {
  title?: string;
  color?: number;
  author?: {
    name?: string;
    url?: string;
  };
  url?: string;
  description?: string;
  image?: {
    url?: string;
  };
  footer?: {
    text?: string;
    icon_url?: string;
  };
  timestamp?: string;
  thumbnail?: {
    url?: string;
  };
  fields?: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
}

declare class Embed {
  constructor(options: EmbedOptions);
  readonly title?: string;
  readonly color?: number;
  readonly author?: {
    readonly name?: string;
    readonly image?: string;
  };
  readonly url?: string;
  readonly description?: string;
  readonly image?: string;
  readonly footer?: {
    readonly text?: string;
    readonly image?: string;
  };
  readonly timestamp?: string;
  readonly thumbnail?: string;
  readonly fields?: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
  toJSON(): EmbedData;
}

declare class Row {
  components: object[];
  constructor(data?: {components: object[]});
  toObject(): {type: number; components: object[]};
}

declare class SelectMenu {
  constructor({
    customid,
    placeholder,
    disabled,
    minvalues,
    maxvalues,
    options,
  }: {
    customid?: string;
    placeholder?: string;
    disabled?: boolean;
    minvalues?: number;
    maxvalues?: number;
    options?: SelectMenuOption[];
  });

  private customid?: string;
  private placeholder?: string;
  private disabled?: boolean;
  private minvalues?: number;
  private maxvalues?: number;
  private options?: SelectMenuOption[];

  public build(): SelectMenuData;
}

interface SelectMenuOption {
  label: string;
  value: string;
  description?: string;
  emoji?: {
    name?: string;
    id?: string;
    animated?: boolean;
  };
}

interface SelectMenuData {
  type: number;
  custom_id?: string;
  placeholder?: string;
  options?: SelectMenuOption[];
  min_values?: number;
  max_values?: number;
  disabled?: boolean;
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
  static resolveColor(color: string | number): number;
  static generateISOString(date?: Date | number | null): string | null;
}

type RowBuilderData = {
  components?: ButtonProperties[];
};

declare class RowBuilder {
  constructor(data?: RowBuilderData);
  type: number;
  components: ButtonProperties[];
  addComponents(buttons: ButtonProperties[]): this;
  build(): ButtonProperties[];
}

declare class SelectMenuBuilder {
  type: number;
  custom_id: string | null;
  placeholder: string | null;
  options: Array<{label: string; value: string; description?: string | null; emoji?: string | null}>;
  min_values: number | null;
  max_values: number | null;
  disabled: boolean;

  constructor();
  setCustomId(customId: string): SelectMenuBuilder;
  setPlaceholder(placeholder: string): SelectMenuBuilder;
  addOption(label: string, value: string, description?: string | null, emoji?: string | null): SelectMenuBuilder;
  setMinValues(minValues: number | null): SelectMenuBuilder;
  setMaxValues(maxValues: number | null): SelectMenuBuilder;
  setDisabled(disabled: boolean): SelectMenuBuilder;
  build(): {
    type: number;
    custom_id: string;
    placeholder: string | null;
    options: Array<{label: string; value: string; description?: string | null; emoji?: string | null}>;
    min_values: number | null;
    max_values: number | null;
    disabled: boolean;
  };
}
