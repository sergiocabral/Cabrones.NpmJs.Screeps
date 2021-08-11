import { PartialRecord } from '@sergiocabral/helper/js/Type/PartialRecord';
import { BodyPart } from '../../ts';
import { InvalidExecutionError } from '@sergiocabral/helper';

describe('Classe BodyPart', () => {
  test('Não deve permitir instanciar', () => {
    // Arrange, Given
    // Act, When

    const instantiate = () => new BodyPart();

    // Assert, Then

    expect(instantiate).toThrowError(InvalidExecutionError);
  });
  describe('calculateCost() deve calcular o custo de uma lista de partes', () => {
    test('calcular o custo de uma lista', () => {
      // Arrange, Given

      const parts = [MOVE, WORK, CARRY];
      const expectedCost =
        BODYPART_COST[MOVE] + BODYPART_COST[WORK] + BODYPART_COST[CARRY];

      // Act, When

      const cost = BodyPart.calculateCost(parts);

      // Assert, Then

      expect(cost).toBe(expectedCost);
    });
    test('calcular o custo de uma lista vazia retorna zero', () => {
      // Arrange, Given

      const expectedCost = 0;

      // Act, When

      const cost = BodyPart.calculateCost([]);

      // Assert, Then

      expect(cost).toBe(expectedCost);
    });
  });
  describe('toPartList() deve montar uma lista de partes', function () {
    test('Recebendo informações das partes', () => {
      // Arrange, Given

      const parts: PartialRecord<BodyPartConstant, number> = {
        move: 1,
        work: 2,
        carry: 2
      };
      const expectedPartsList = [MOVE, WORK, WORK, CARRY, CARRY];

      // Act, When

      const partsList = BodyPart.toPartList(parts);

      // Assert, Then

      expect(partsList).toEqual(expectedPartsList);
    });
    test('Recebendo informações vazias', () => {
      // Arrange, Given

      const parts: PartialRecord<BodyPartConstant, number> = {};
      const expectedPartsList: BodyPartConstant[] = [];

      // Act, When

      const partsList = BodyPart.toPartList(parts);

      // Assert, Then

      expect(partsList).toEqual(expectedPartsList);
    });
  });
});
