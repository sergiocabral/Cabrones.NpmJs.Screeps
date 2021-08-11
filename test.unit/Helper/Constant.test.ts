import { Constant } from '../../ts';
import { InvalidExecutionError } from '@sergiocabral/helper';

describe('Classe Constant', () => {
  test('Não deve permitir instanciar', () => {
    // Arrange, Given
    // Act, When

    const instantiate = () => new Constant();

    // Assert, Then

    expect(instantiate).toThrowError(InvalidExecutionError);
  });
  test('Deve retornar o nome de uma constante', () => {
    // Arrange, Given

    const constant1Value = 0;
    const constant1ExpectedName = 'OK';
    const constant2Value = -1;
    const constant2ExpectedName = 'ERR';

    // Act, When

    const constant1Name = Constant.getName(constant1Value);
    const constant2Name = Constant.getName(constant2Value);

    // Assert, Then

    expect(constant1Name).toBe(constant1ExpectedName);
    expect(constant2Name).toBe(constant2ExpectedName);
  });
  test('Deve retornar como nome o valor da constante se ela não existir', () => {
    // Arrange, Given

    const constantValue = 10;

    // Act, When

    const constantName = Constant.getName(constantValue);

    // Assert, Then

    expect(constantName).toBe(constantValue.toString());
  });
  test('Deve formatar a exibição de constante', () => {
    // Arrange, Given

    const constant1Value = 0;
    const constant1ExpectedFormatted = '0, OK';
    const constant2Value = -1;
    const constant2ExpectedFormatted = '-1, ERR';

    // Act, When

    const constant1Formatted = Constant.format(constant1Value);
    const constant2Formatted = Constant.format(constant2Value);

    // Assert, Then

    expect(constant1Formatted).toBe(constant1ExpectedFormatted);
    expect(constant2Formatted).toBe(constant2ExpectedFormatted);
  });
  test('Deve formatar a exibição de constante', () => {
    // Arrange, Given

    const constantValue = 10;

    // Act, When

    const constantFormatted = Constant.format(constantValue);

    // Assert, Then

    expect(constantFormatted).toBe(constantValue.toString());
  });
});
