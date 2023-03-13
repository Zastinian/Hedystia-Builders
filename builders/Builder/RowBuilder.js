/* It's a constructor function that takes an object as an argument and sets the type property to 1 and
the components property to the components property of the object if it exists, otherwise it sets it
to an empty array */
class RowBuilder {
  /**
   * It's a constructor function that takes an object as an argument and sets the type property to 1 and
   * the components property to the components property of the object if it exists, otherwise it sets it
   * to an empty array.
   * @param [data] - The data object that is passed to the constructor.
   */
  constructor(data = {}) {
    this.type = 1;
    this.components = data.components ?? [];
  }

  /**
   * Add a button to the row.
   * @param {object} button - Button object to add to the row.
   * @returns {RowBuilder} The updated RowBuilder object.
   */
  addComponents(buttons = []) {
    const lengthRow = this.components.length + this.buttons.length;
    if (this.components.length >= 5) throw new Error("Cannot add more than 5 buttons to a row.");
    if (lengthRow >= 5) throw new Error("Cannot add more than 5 buttons to a row.");
    if (this.buttons.length >= 5) throw new Error("Cannot add more than 5 buttons to a row.");
    this.components.push(buttons);
    return this;
  }

  /**
   * Returns the button row.
   * @returns {object[]} The button row as an array of button objects.
   */
  build() {
    return this.components;
  }
}

module.exports = RowBuilder;
