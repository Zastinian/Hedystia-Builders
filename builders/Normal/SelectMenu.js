/**
 * Represents a select menu component.
 * @class
 */
class SelectMenu {
  /**
   * Constructs a select object with the given parameters.
   * @constructor
   * @param {Object} options - The options for the select menu.
   * @param {string} options.customid - The custom ID of the select menu.
   * @param {string} options.placeholder - The placeholder text for the select menu.
   * @param {boolean} options.disabled - Whether the select menu is disabled or not.
   * @param {number} options.minvalues - The minimum number of values that can be selected.
   * @param {number} options.maxvalues - The maximum number of values that can be selected.
   * @param {Array} options.options - The options for the select menu.
   * @returns {Object} The constructed select object.
   */
  constructor({customid, placeholder, disabled, minvalues, maxvalues, options}) {
    this.customid = customid ?? undefined;
    this.placeholder = placeholder ?? undefined;
    this.disabled = disabled ?? false;
    this.minvalues = minvalues ?? 1;
    this.maxvalues = maxvalues ?? 1;
    this.options = options ?? undefined;
    let select = {
      type: 3,
      custom_id: this.customid,
      placeholder: this.placeholder,
      options: this.options,
      min_values: this.minvalues,
      max_values: this.maxvalues,
      disabled: this.disabled,
    };
    return select;
  }
}

module.exports = SelectMenu;
