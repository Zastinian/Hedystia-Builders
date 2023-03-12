/* The Button class is a class that represents a button. */
class ButtonBuilder {
  /**
   * The function takes an object as an argument, and then assigns the object's properties to the
   * function's properties.
   */
  constructor(data = {}) {
    this.type = 2;
    this.custom_id = data.customid ?? undefined;
    this.style = data.style ?? 2;
    this.label = data.label ?? undefined;
    this.emoji = {...data.emoji} ?? undefined;
    this.disabled = data.disabled ?? false;
    this.url = data.url ?? undefined;
  }

  /**
   * This function sets the label property of the component to the value of the label parameter.
   * @param {string} label - The label of the button.
   * @access public
   */
  setLabel(label) {
    this.label = label;
    return this;
  }

  /**
   * This function sets the emoji property of the component to the emoji passed in as an argument.
   * @param {{name: string, id: string}} emoji - The emoji to set.
   * @access public
   */
  setEmoji(emoji) {
    this.emoji = emoji;
    return this;
  }

  /**
   * `setDisabled()` sets the `disabled` property to `true` and returns the object.
   * @returns The object itself.
   */
  setDisabled() {
    this.disabled = true;
    return this;
  }

  /**
   * `setStyle` is a function that takes a parameter called `style` and sets the value of the `style`
   * property of the object that called it to the value of the `style` parameter.
   *
   * The `return this` statement at the end of the function is a common pattern in JavaScript. It allows
   * us to chain function calls together. For example, we can call `setStyle` and then immediately call
   * `setColor` like this:
   * @param {number} style - The style to apply to the element.
   * @access public
   * @returns The object itself.
   */
  setStyle(style) {
    this.style = style;
    return this;
  }

  /**
   * This function sets the url property of the component to the url passed in as an argument.
   * @param {string} url - The URL of the page to be loaded.
   * @access public
   */
  setUrl(url) {
    this.url = url;
  }

  /**
   * This function sets the customid property of the component to the value of the customid parameter.
   * @param {string} customid - The custom id of the user.
   * @access public
   */
  setCustomId(customid) {
    this.custom_id = customid;
    return this;
  }

  /**
   * It returns an object with the properties of the button.
   * @access public
   * @returns An object with the properties type, custom_id, style, label, emoji, disabled, and url.
   */
  toJSON() {
    return {
      type: 2,
      custom_id: this.customid,
      style: this.style,
      label: this.label,
      emoji: this.emoji,
      disabled: this.disabled,
      url: this.url,
    };
  }

  /**
   * This function takes an object with properties named 'emoji', 'text', 'url', 'customid', 'style', and
   * 'disabled', and returns an object with the same properties, but with the names changed to 'emoji',
   * 'label', 'url', 'customid', 'style', and 'disabled'.
   * @param fields - The fields object that is passed to the component.
   * @access public
   * @returns The transformFields function is returning an object with the following properties:
   * emoji, label, url, customid, style, and disabled.
   */
  static transformFields(fields) {
    return {
      type: 2,
      custom_id: fields.customid,
      style: fields.style,
      label: fields.text,
      emoji: fields.emoji,
      url: fields.url,
      disabled: fields.disabled,
    };
  }
}

module.exports = ButtonBuilder;
