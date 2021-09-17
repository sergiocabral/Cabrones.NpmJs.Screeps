import { InvalidArgumentError } from '@sergiocabral/helper';
import { TerrainMapType } from '../Type/TerrainMapType';
import { TerrainMapConfiguration } from './TerrainMapConfiguration';

/**
 * Manipula informações referente ao mapa.
 */
export class TerrainMap {
  /**
   * Construtor.
   * @param location Localização.
   */
  public constructor(public readonly location: string) {
    try {
      this.terrain = new Room.Terrain(location);
    } catch (error: unknown) {
      throw new InvalidArgumentError(
        'Map location "{location}" not found'.querystring({ location }),
        error
      );
    }
  }

  /**
   * Terreno.
   */
  public terrain: RoomTerrain;

  /**
   * Matriz original do mapa.
   */
  public getRawBuffer(): Uint8Array {
    const terrain = this.terrain as unknown as {
      getRawBuffer: () => Uint8Array;
    };
    return terrain.getRawBuffer();
  }

  /**
   * Matriz do mapa.
   * @private
   */
  public getMatrix(): TerrainMapType[][] {
    const width = 50;
    return this.getRawBuffer().reduce((result, code: TerrainMapType) => {
      let currentLine = result[result.length - 1] ?? [];
      if (currentLine.length === width) currentLine = Array<TerrainMapType>();
      if (currentLine.length === 0) result.push(currentLine);
      currentLine.push(code);
      return result;
    }, Array<TerrainMapType[]>());
  }

  /**
   * Retorna uma exibição como texto.
   */
  public getMatrixAsText(configuration?: TerrainMapConfiguration): string {
    configuration = configuration ?? new TerrainMapConfiguration();
    return this.getMatrix()
      .map(terrainType => terrainType.join(' '))
      .join('\n')
      .replaceAll(String(TerrainMapType.Empty), configuration.empty)
      .replaceAll(String(TerrainMapType.Wall), configuration.wall)
      .replaceAll(String(TerrainMapType.Swamp), configuration.swamp)
      .replaceAll(String(TerrainMapType.Lava), configuration.lava);
  }
}
