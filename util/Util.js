const {Colors} = require("./Constants");
/* It resolves a color to a hexadecimal value */
class Util {
  static resolveColor(color) {
    if (typeof color === "string") {
      color = Colors[color] ?? color.replace("#", "");
      return parseInt(color, 16);
    }
    return color;
  }

  static generateISOString(date = Date.now()) {
    if (date === null) return null;
    if (date instanceof Date) return date.toISOString();
    return new Date(date).toISOString();
  }
}

module.exports = Util;
