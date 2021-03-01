/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This schema describes version 20210228 of the metadata standard for the amulet poem format, designed for the Zora protocol.
 */
export interface Amulet20210228 {
  /**
   * An HTTPS link to the carbon offset purchased in this poem's name.
   */
  carbonOffsetURL: {
    [k: string]: unknown;
  };
  /**
   * The description of the amulet. You can feel free to have fun & be evocative with this; including a link to the current formal definition is probably wise, but not required.
   */
  description: string;
  /**
   * The mimeType of the amulet. This will always be text/plain.
   */
  mimeType: "text/plain";
  /**
   * The title of the amulet.
   */
  name: string;
  /**
   * The text of the amulet. Although this is required, the text at the contentURI in the Zora NFT is considered the canonical version.
   */
  poemText: string;
  /**
   * The rarity level of the amulet.
   */
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic" | "beyond mythic";
  /**
   * The calendar version of the schema.
   */
  version: string;
  [k: string]: unknown;
}
