/**
 * It's a class that allows you to build a SelectMenu object that can be sent to Discord
 * @class
 */
class SelectMenuBuilder {
  constructor() {
    /**
     * The type of the SelectMenu
     * @type {number}
     * @default 3
     */
    this.type = 3;

    /**
     * The custom ID of the SelectMenu
     * @type {?string}
     * @default null
     */
    this.custom_id = null;

    /**
     * The placeholder text of the SelectMenu
     * @type {?string}
     * @default null
     */
    this.placeholder = null;

    /**
     * The options of the SelectMenu
     * @type {Array<Object>}
     * @default []
     */
    this.options = [];

    /**
     * The minimum number of options that can be selected in the SelectMenu
     * @type {?number}
     * @default null
     */
    this.min_values = null;

    /**
     * The maximum number of options that can be selected in the SelectMenu
     * @type {?number}
     * @default null
     */
    this.max_values = null;

    /**
     * Whether the SelectMenu is disabled or not
     * @type {boolean}
     * @default false
     */
    this.disabled = false;
  }

  /**
   * Set the custom ID of the SelectMenu
   * @param {string} customId - The custom ID to set
   * @returns {SelectMenuBuilder}
   */
  setCustomId(customId) {
    this.custom_id = customId;
    return this;
  }

  /**
   * Set the placeholder text of the SelectMenu
   * @param {string} placeholder - The placeholder text to set
   * @returns {SelectMenuBuilder}
   */
  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  /**
   * Add an option to the SelectMenu
   * @param {string} label - The label text of the option
   * @param {string} value - The value of the option
   * @param {?string} [description] - The description of the option
   * @param {?string} [emoji] - The emoji of the option
   * @returns {SelectMenuBuilder}
   */
  addOption(label, value, description = null, emoji = null) {
    this.options.push({label, value, description, emoji});
    return this;
  }

  /**
   * Set the minimum number of options that can be selected in the SelectMenu
   * @param {?number} minValues - The minimum number of options to set
   * @returns {SelectMenuBuilder}
   */
  setMinValues(minValues) {
    this.min_values = minValues;
    return this;
  }

  /**
   * Set the maximum number of options that can be selected in the SelectMenu
   * @param {?number} maxValues - The maximum number of options to set
   * @returns {SelectMenuBuilder}
   */
  setMaxValues(maxValues) {
    this.max_values = maxValues;
    return this;
  }

  /**
   * Set whether the SelectMenu is disabled or not
   * @param {boolean} disabled - Whether the SelectMenu is disabled or not
   * @returns {SelectMenuBuilder}
   */
  setDisabled(disabled) {
    this.disabled = disabled;
    return this;
  }

  /**
   * Build the SelectMenu object
   * @returns {Object} The SelectMenu object that can be sent to Discord
   */
  build() {
    if (!this.custom_id) {
      throw new Error("Custom ID not set");
    }

    if (this.options.length < 1) {
      throw new Error("Options not set");
    }

    return {
      type: this.type,
      custom_id: this.custom_id,
      placeholder: this.placeholder,
      options: this.options,
      min_values: this.min_values,
      max_values: this.max_values,
      disabled: this.disabled,
    };
  }
}

module.exports = SelectMenuBuilder;
