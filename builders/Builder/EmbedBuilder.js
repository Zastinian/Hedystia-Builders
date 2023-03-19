const Util = require("../../util/Util");

/**
 * It's a class that creates a Discord embed.
 * @class
 */
class EmbedBuilder {
  /**
   * It takes in an object, and then assigns the values of the object to the class properties.
   * @param [data] - The data to use for the embed.
   */
  constructor(data = {}) {
    /* It's assigning the values of the object to the class properties. */
    this.title = data.title ?? undefined;
    this.type = data.type ?? "rich";
    this.description = data.description ?? undefined;
    this.url = data.url ?? undefined;
    this.timestamp = data.timestamp ?? undefined;
    this.color = data.color ? Util.resolveColor(data.color) : undefined;
    this.footer = data.footer
      ? {
          text: data.footer.text,
          iconURL: data.footer.iconURL ?? data.footer.icon_url,
          icon_url: data.footer.iconURL ?? data.footer.icon_url,
          proxyIconURL: data.footer.proxy_icon_url ?? data.footer.proxyIconURL,
        }
      : undefined;
    this.image = data.image
      ? {
          url: data.image.url,
          proxyURL: data.image.proxyURL ?? data.image.proxy_url,
          height: data.image.height,
          width: data.image.width,
        }
      : undefined;
    this.thumbnail = data.thumbnail
      ? {
          url: data.thumbnail.url,
          proxyURL: data.thumbnail.proxyURL ?? data.thumbnail.proxy_url,
          height: data.thumbnail.height,
          width: data.thumbnail.width,
        }
      : undefined;
    this.video = data.video ?? undefined;
    this.provider = data.provider ?? undefined;
    this.author = data.author
      ? {
          name: data.author.name,
          url: data.author.url,
          iconURL: data.author.iconURL ?? data.author.icon_url,
          icon_url: data.author.iconURL ?? data.author.icon_url,
          proxyIconURL: data.author.proxy_icon_url ?? data.author.proxyIconURL,
        }
      : undefined;
    this.fields = data.fields ?? [];
  }

  /**
   * It sets the title of the book and returns the book object.
   * @param {string} title - The title of the modal.
   * @returns The object itself.
   */
  setTitle(title) {
    this.title = title;
    return this;
  }

  /**
   * The function sets the description of the object and returns the object.
   * @param {string} description - The description of the field.
   * @returns The object itself.
   */
  setDescription(description) {
    this.description = description;
    return this;
  }

  /**
   * This function sets the url property of the object it is called on to the value of the argument
   * passed in, and then returns the object it was called on.
   * @param {string} url - The URL to send the request to.
   * @returns The object itself.
   */
  setURL(url) {
    this.url = url;
    return this;
  }

  /**
   * It takes a timestamp and converts it to an ISO string.
   * @param timestamp - The timestamp of the message.
   * @returns The object itself.
   */
  setTimestamp(timestamp) {
    this.timestamp = Util.generateISOString(timestamp);
    return this;
  }

  /**
   * This function sets the color of the object.
   * @param color - The color of the line.
   * @returns The color of the object.
   */
  setColor(color) {
    this.color = Util.resolveColor(color);
    return this;
  }

  /**
   * The setFooter function takes a footer parameter and sets the footer property of the object to the
   * footer parameter. It then returns the object
   * @param footer - The footer text.
   * @returns The object itself.
   */
  setFooter(footer) {
    this.footer = footer;
    return this;
  }

  /**
   * It sets the image property of the object to the image parameter if the image parameter is not
   * null, otherwise it sets the image property to undefined
   * @param image - The image to display.
   * @returns The object itself.
   */
  setImage(image) {
    this.image = image
      ? {
          url: image.url,
        }
      : undefined;
    return this;
  }

  /**
   * It sets the thumbnail property of the object to the thumbnail parameter if it exists, otherwise it
   * sets it to undefined
   * @param thumbnail - The thumbnail of the embed.
   * @returns The object itself.
   */
  setThumbnail(thumbnail) {
    this.thumbnail = thumbnail
      ? {
          url: thumbnail.url,
        }
      : undefined;
    return this;
  }

  /**
   * The function sets the author of the book and returns the book object.
   * @param author - The author of the book.
   * @returns The object itself.
   */
  setAuthor(author) {
    this.author = author;
    return this;
  }

  /**
   * It takes an array of objects, and pushes each object into another array
   * @param fields - Array&lt;EmbedBuilderField&gt; | EmbedBuilderField
   * @returns The return value is the instance of the class.
   */
  addFields(...fields) {
    if (Array.isArray(fields[0])) {
      fields[0]?.map((val) => this.fields.push(EmbedBuilder.transformFields(val)));
    } else {
      fields?.map((val) => this.fields.push(EmbedBuilder.transformFields(val)));
    }

    return this;
  }

  /**
   * It adds a field to the embed
   * @param nm - The name of the field.
   * @param vl - The value of the field.
   * @param il - Inline
   * @returns The object itself.
   */
  addField(nm, vl, il) {
    const fil = {
      name: nm,
      value: vl,
      inline: il ?? undefined,
    };
    this.fields.push(fil);
    return this;
  }

  /**
   * It takes an array of objects, and then maps over each object, and then returns the mapped array
   * @param fields - Array&lt;EmbedBuilderField&gt; | EmbedBuilderField
   * @returns The fields are being returned.
   */
  setFields(...fields) {
    if (Array.isArray(fields[0])) {
      this.fields = fields[0]?.map((val) => EmbedBuilder.transformFields(val));
    } else {
      this.fields = fields?.map((val) => EmbedBuilder.transformFields(val));
    }

    return this;
  }

  /**
   * It returns an object with the properties of the embed
   * @returns The return value is an object with the properties of the embed.
   */
  toJSON() {
    return {
      type: this.type,
      title: this.title,
      description: this.description,
      author: this.author,
      image: this.image,
      thumbnail: this.thumbnail,
      color: this.color,
      timestamp: this.timestamp,
      url: this.url,
      footer: this.footer,
      fields: this.fields,
    };
  }

  /**
   * It takes an array of objects, and returns an array of objects with the same keys, but with the
   * values transformed
   * @param fields - The fields to be added to the embed.
   * @returns The return value is an object with the properties name, value, and inline.
   */
  static transformFields(fields) {
    return {
      name: fields.name,
      value: fields.value,
      inline: fields.inline ?? undefined,
    };
  }
}

module.exports = EmbedBuilder;
