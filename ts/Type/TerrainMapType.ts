/**
 * Tipos de terrenos.
 */
export enum TerrainMapType {
  /**
   * Espaço vazio.
   */
  Empty = 0,

  /**
   * Parede.
   */
  Wall = TERRAIN_MASK_WALL,

  /**
   * Pântano.
   */
  Swamp = TERRAIN_MASK_SWAMP,

  /**
   * Lava
   */
  Lava = TERRAIN_MASK_LAVA
}
