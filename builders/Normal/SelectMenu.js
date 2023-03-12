/* It creates a new object with the properties of the class. */
class SelectMenu {
  /**
   * It creates a new object with the properties of the class.
   * @returns An object with the properties of the class.
   */
  constructor({customid, placeholder, disabled, minvalues, maxvalues, options}) {
    /* Setting the default values for the properties of the class. */
    this.customid = customid ?? undefined;
    this.placeholder = placeholder ?? undefined;
    this.disabled = disabled ?? false;
    this.minvalues = minvalues ?? 1;
    this.maxvalues = maxvalues ?? 1;
    this.options = options ?? undefined;
    /* Creating a new object with the properties of the class. */
    let select = {
      type: 3,
      custom_id: this.customid,
      placeholder: this.placeholder,
      options: this.options,
      min_values: this.min_values,
      max_values: this.max_values,
      disabled: this.disabled,
    };
    return select;
  }
}

module.exports = SelectMenu;
