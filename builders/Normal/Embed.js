/**
 * Represents an embed object with various properties.
 * @class
 */
class Embed {
  /**
   * Constructs an embed object with the provided properties.
   * @constructor
   * @param {Object} options - The options object containing the properties for the embed.
   * @param {string} options.title - The title of the embed.
   * @param {string} options.color - The color of the embed.
   * @param {Object} options.author - The author of the embed.
   * @param {string} options.url - The URL of the embed.
   * @param {string} options.description - The description of the embed.
   * @param {string} options.image - The image URL of the embed.
   * @param {Object} options.footer - The footer of the embed.
   * @param {string} options.timestamp - The timestamp of the embed.
   * @returns {Object} - The constructed embed object.
   */
  constructor({title, color, author, url, description, image, footer, timestamp, thumbnail, fields}) {
    this.title = title ?? undefined;
    this.color = color ?? undefined;
    this.author = {...author} ?? {};
    this.url = url ?? undefined;
    this.description = description ?? undefined;
    this.image = image ?? undefined;
    this.footer = {...footer} ?? {};
    this.timestamp = timestamp ?? undefined;
    this.thumbnail = thumbnail ?? undefined;
    if (fields) {
      this.fields = [...fields];
    } else {
      this.fields = undefined;
    }
    const embed = {
      title: this.title,
      description: this.description,
      url: this.url,
      timestamp: this.timestamp,
      color: this.color,
      footer: {
        text: this.footer.text ?? undefined,
        icon_url: this.footer.image ?? undefined,
      },
      image: {
        url: this.image,
      },
      thumbnail: {
        url: this.thumbnail,
      },
      fields: this.fields,
      author: {
        name: this.author.name ?? undefined,
        url: this.author.image ?? undefined,
      },
    };
    return embed;
  }
}

module.exports = Embed;
