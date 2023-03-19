import {Colors} from "./Constants";

/**
 * Utility functions for common tasks
 * @class
 */
class Util {
  /**
   * Resolves a color to a hexadecimal value
   * @param {string|number} color - The color to resolve
   * @returns {number} The hexadecimal value of the color
   */
  static resolveColor(color) {
    if (typeof color === "string") {
      color = Colors[color] ?? color.replace("#", "");
      return parseInt(color, 16);
    }
    return color;
  }

  /**
   * Generates an ISO string from a Date object or timestamp
   * @param {Date|number|null} [date=Date.now()] - The Date object or timestamp to convert to an ISO string
   * @returns {string|null} The ISO string or null if date is null
   */
  static generateISOString(date = Date.now()) {
    if (date === null) return null;
    if (date instanceof Date) return date.toISOString();
    return new Date(date).toISOString();
  }
}

module.exports = Util;
