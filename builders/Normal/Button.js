/**
 * Represents a button element with various properties.
 * @class
 */
class Button {
  /**
   * Constructs a button object with the provided properties.
   * @constructor
   * @param {Object} options - The options object containing the button properties.
   * @param {Object} options.emoji - The emoji object for the button.
   * @param {string} options.label - The label text for the button.
   * @param {string} options.url - The URL to open when the button is clicked.
   * @param {string} options.customid - The custom ID for the button.
   * @param {number} options.style - The style of the button.
   * @param {boolean} options.disabled - Whether the button is disabled or not.
   * @returns {Object} - The constructed button object.
   */
  constructor({emoji, label, url, customid, style, disabled}) {
    this.emoji = {...emoji} ?? undefined;
    this.label = label ?? undefined;
    this.url = url ?? undefined;
    this.customid = customid ?? undefined;
    this.style = style ?? 2;
    this.disabled = disabled ?? false;
    const button = {
      type: 2,
      custom_id: this.customid,
      style: this.style,
      label: this.label,
      emoji: this.emoji,
      disabled: this.disabled,
      url: this.url,
    };
    return button;
  }
}

module.exports = Button;
