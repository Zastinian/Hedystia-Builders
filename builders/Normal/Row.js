/**
 * Represents a row in a table.
 * @class
 */
class Row {
  /**
   * Constructs a new instance of the class.
   * @constructor
   * @param {object} [data] - Optional data object to initialize the instance.
   * @property {Array} components - The components of the row.
   * @returns {object} - The constructed instance.
   */
  constructor(data = {}) {
    this.components = data.components;
    let row = {
      type: 1,
      components: this.components,
    };
    return row;
  }
}

module.exports = Row;
