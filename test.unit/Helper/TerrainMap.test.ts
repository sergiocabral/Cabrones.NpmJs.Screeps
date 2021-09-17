import { InvalidArgumentError } from '@sergiocabral/helper';
import { TerrainMapConfiguration, TerrainMapType } from '../../ts';
import { TerrainMap } from '../../ts/Helper/TerrainMap';

describe('Class TerrainMap', () => {
  test('Deve usar Room.Terrain para obter dados do terreno', () => {
    // Arrange, Given

    const mockRoomTerrainConstructor = (Room.Terrain = jest.fn());
    const inputLocation = Math.random().toString();

    // Act, When

    new TerrainMap(inputLocation);

    // Assert, Then

    expect(mockRoomTerrainConstructor.mock.calls.length).toBe(1);
    expect(mockRoomTerrainConstructor.mock.calls[0][0]).toBe(inputLocation);
  });
  test('Se Room.Terrain falhar a construção deve falhar', () => {
    // Arrange, Given

    const inputLocation = Math.random().toString();
    const errorMessage = Math.random().toString();
    Room.Terrain = jest.fn(() => {
      throw new Error(errorMessage);
    });

    // Act, When

    const create = () => new TerrainMap(inputLocation);

    // Assert, Then

    let receivedError: InvalidArgumentError | undefined;
    try {
      create();
      receivedError = undefined;
    } catch (error) {
      receivedError = error as InvalidArgumentError;
    }

    expect(receivedError).toBeDefined();
    expect(receivedError?.message).toBe(
      `InvalidArgumentError: Map location "${inputLocation}" not found`
    );
    expect((receivedError?.innerError as Error)?.message).toBe(errorMessage);
  });
  test('getRawBuffer deve ser chamado diretamente da função original', () => {
    // Arrange, Given

    const getRawBufferExpectedResult = new Uint8Array(Math.random());
    Room.Terrain = jest.fn(() => {
      return {
        getRawBuffer: jest.fn(() => getRawBufferExpectedResult)
      };
    }) as any;

    // Act, When

    const getRawBufferResult = new TerrainMap('').getRawBuffer();

    // Assert, Then

    expect(getRawBufferResult).toBe(getRawBufferExpectedResult);
  });
  test('getMatrix deve retornar uma matrix com 50 itens por linha', () => {
    // Arrange, Given

    const lineWidth = 50;
    const lineCount = 5;
    const maxCodeValue = 4;

    const getRawBufferExpectedResult = new Uint8Array(
      lineWidth * lineCount
    ).map((_, i) => i % (maxCodeValue + 1));

    Room.Terrain = jest.fn(() => {
      return {
        getRawBuffer: jest.fn(() => getRawBufferExpectedResult)
      };
    }) as any;

    // Act, When

    const getMatrixResult = new TerrainMap('').getMatrix();

    // Assert, Then

    expect(getMatrixResult.length).toBe(lineCount);
    expect(getMatrixResult[0].length).toBe(lineWidth);

    let expectedCode = 0;
    for (const line of getMatrixResult) {
      for (const code of line) {
        expect(code).toBe(expectedCode++ % (maxCodeValue + 1));
      }
    }
  });
  test('getMatrixAsText deve retornar uma matrix como texto', () => {
    // Arrange, Given

    const terrainMapConfiguration = new TerrainMapConfiguration(
      'A ',
      'B ',
      'C ',
      'D '
    );

    const getMatrixAsTextExpectedResult =
      terrainMapConfiguration.empty +
      ' ' +
      terrainMapConfiguration.empty +
      ' ' +
      terrainMapConfiguration.empty +
      '\n' +
      terrainMapConfiguration.wall +
      ' ' +
      terrainMapConfiguration.wall +
      ' ' +
      terrainMapConfiguration.wall +
      '\n' +
      terrainMapConfiguration.swamp +
      ' ' +
      terrainMapConfiguration.swamp +
      ' ' +
      terrainMapConfiguration.swamp;

    Room.Terrain = jest.fn();

    const terrainMap = new TerrainMap('');
    terrainMap.getMatrix = jest.fn(() => [
      new Uint8Array([
        TerrainMapType.Empty,
        TerrainMapType.Empty,
        TerrainMapType.Empty
      ]),
      new Uint8Array([
        TerrainMapType.Wall,
        TerrainMapType.Wall,
        TerrainMapType.Wall
      ]),
      new Uint8Array([
        TerrainMapType.Swamp,
        TerrainMapType.Swamp,
        TerrainMapType.Swamp
      ])
    ]) as any;

    // Act, When

    const getMatrixAsTextResult = terrainMap.getMatrixAsText(
      terrainMapConfiguration
    );

    // Assert, Then

    expect(getMatrixAsTextResult).toBe(getMatrixAsTextExpectedResult);
  });
  test('se getMatrixAsText não receber um configuration cria um padrão', () => {
    // Arrange, Given

    const terrainMapConfiguration = new TerrainMapConfiguration();

    const getMatrixAsTextExpectedResult =
      terrainMapConfiguration.empty +
      ' ' +
      terrainMapConfiguration.empty +
      ' ' +
      terrainMapConfiguration.empty +
      '\n' +
      terrainMapConfiguration.wall +
      ' ' +
      terrainMapConfiguration.wall +
      ' ' +
      terrainMapConfiguration.wall +
      '\n' +
      terrainMapConfiguration.swamp +
      ' ' +
      terrainMapConfiguration.swamp +
      ' ' +
      terrainMapConfiguration.swamp;

    Room.Terrain = jest.fn();

    const terrainMap = new TerrainMap('');
    terrainMap.getMatrix = jest.fn(() => [
      new Uint8Array([
        TerrainMapType.Empty,
        TerrainMapType.Empty,
        TerrainMapType.Empty
      ]),
      new Uint8Array([
        TerrainMapType.Wall,
        TerrainMapType.Wall,
        TerrainMapType.Wall
      ]),
      new Uint8Array([
        TerrainMapType.Swamp,
        TerrainMapType.Swamp,
        TerrainMapType.Swamp
      ])
    ]) as any;

    // Act, When

    const getMatrixAsTextResult = terrainMap.getMatrixAsText();

    // Assert, Then

    expect(getMatrixAsTextResult).toBe(getMatrixAsTextExpectedResult);
  });
});
