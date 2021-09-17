import { TerrainMapConfiguration } from '../../ts';

describe('Class TerrainMapConfiguration', () => {
  test('Deve poder instanciar sem parâmetros usando valores padrão', () => {
    // Arrange, Given

    const expectedDefaultEmpty = '  ';
    const expectedDefaultWall = '██';
    const expectedDefaultSwamp = '■ ';
    const expectedDefaultLava = '* ';

    // Act, When

    const instance = new TerrainMapConfiguration();

    // Assert, Then

    expect(instance.empty).toBe(expectedDefaultEmpty);
    expect(instance.wall).toBe(expectedDefaultWall);
    expect(instance.swamp).toBe(expectedDefaultSwamp);
    expect(instance.lava).toBe(expectedDefaultLava);
  });
  test('Deve poder instanciar sem parâmetros usando valores padrão', () => {
    // Arrange, Given

    const expectedEmpty = Math.random().toString();
    const expectedWall = Math.random().toString();
    const expectedSwamp = Math.random().toString();
    const expectedLava = Math.random().toString();

    // Act, When

    const instance = new TerrainMapConfiguration(
      expectedEmpty,
      expectedWall,
      expectedSwamp,
      expectedLava
    );

    // Assert, Then

    expect(instance.empty).toBe(expectedEmpty);
    expect(instance.wall).toBe(expectedWall);
    expect(instance.swamp).toBe(expectedSwamp);
    expect(instance.lava).toBe(expectedLava);
  });
});
