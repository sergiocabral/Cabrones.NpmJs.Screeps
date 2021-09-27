import { InvalidExecutionError } from "@sergiocabral/helper";
import { ControllerData } from '../../ts/Database/ControllerData';

describe('Classe ControllerData', () => {
  test('Não deve permitir instanciar', () => {
    // Arrange, Given
    // Act, When

    const instantiate = () => new ControllerData();

    // Assert, Then

    expect(instantiate).toThrowError(InvalidExecutionError);
  });
  describe('level', () => {
    test('Quantidade de níveis', () => {
      // Arrange, Given

      const expectedLevels = 8;

      // Act, When

      const levels = ControllerData.levels;

      // Assert, Then

      expect(levels.length).toBe(expectedLevels);
    });
    test('Valores dos níveis', () => {
      // Arrange, Given

      const expectedValues = [1, 2, 3, 4, 5, 6, 7, 8];

      // Act, When

      const values = ControllerData.levels.map(level => level.level);

      // Assert, Then

      expect(values).toStrictEqual(expectedValues);
    });
    test('Valores dos progressos', () => {
      // Arrange, Given

      const expectedValues = [
        200, 45000, 135000, 405000, 1215000, 3645000, 10935000, 0
      ];

      // Act, When

      const values = ControllerData.levels.map(level => level.progressTotal);

      // Assert, Then

      expect(values).toStrictEqual(expectedValues);
    });
    test('Valores dos downgrades', () => {
      // Arrange, Given

      const expectedValues = [
        20000, 10000, 20000, 40000, 80000, 120000, 150000, 200000
      ];

      // Act, When

      const values = ControllerData.levels.map(level => level.downgradeTimer);

      // Assert, Then

      expect(values).toStrictEqual(expectedValues);
    });
    test('Não deve pode alterar o conteúdo da lista', () => {
      // Arrange, Given

      const levels = ControllerData.levels;
      const initialLength = levels.length;

      // Act, When

      levels.length = initialLength - 1;
      levels[0].level = NaN;
      levels[0].progressTotal = NaN;
      levels[0].downgradeTimer = NaN;

      // Assert, Then

      expect(ControllerData.levels.length).toBe(initialLength);
      expect(ControllerData.levels[0].level).toBeGreaterThanOrEqual(0);
      expect(ControllerData.levels[0].progressTotal).toBeGreaterThanOrEqual(0);
      expect(ControllerData.levels[0].downgradeTimer).toBeGreaterThanOrEqual(0);
    });
  });
});
