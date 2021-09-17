/**
 * Configuração para desenhar uma mapa.
 */
export class TerrainMapConfiguration {
  /**
   * Construtor.
   * @param empty Espaço vazio.
   * @param wall Parede.
   * @param swamp Pântano.
   * @param lava Lava.
   */
  public constructor(
    public empty: string = '  ',
    public wall: string = '██',
    public swamp: string = '■ ',
    public lava: string = '* '
  ) {}
}
