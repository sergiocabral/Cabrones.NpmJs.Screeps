import { NameGenerator } from '../../ts';
import { InvalidExecutionError } from '@sergiocabral/helper';

describe('Classe NameGenerator', () => {
  test('Não deve permitir instanciar', () => {
    // Arrange, Given
    // Act, When

    const instantiate = () => new NameGenerator();

    // Assert, Then

    expect(instantiate).toThrowError(InvalidExecutionError);
  });
  test('Deve retorna um nome aleatório', () => {
    // Arrange, Given
    // Act, When

    const minimumNameLength = 2;

    const name1 = NameGenerator.random();
    const name2 = NameGenerator.random();

    // Assert, Then

    expect(name1.length).toBeGreaterThanOrEqual(minimumNameLength);
    expect(name2.length).toBeGreaterThanOrEqual(minimumNameLength);
    expect(name1).not.toBe(name2);
  });
  test('Deve permitir informar um prefixo', () => {
    // Arrange, Given

    const prefix = Math.random().toString();

    // Act, When

    const name = NameGenerator.random(prefix);

    // Assert, Then

    expect(name).not.toBe(prefix);
    expect(name.startsWith(prefix + ' ')).toBe(true);
  });
  test('Deve permitir informar uma lista de prefixos', () => {
    // Arrange, Given

    const prefix1 = Math.random().toString();
    const prefix2 = Math.random().toString();

    // Act, When

    const names: Record<string, number> = {};
    for (let i = 0; i < 100; i++) {
      const name = NameGenerator.random([prefix1, prefix2]);
      const receivedPrefix = name.split(' ')[0];
      names[receivedPrefix] =
        names[receivedPrefix] === undefined ? 1 : names[receivedPrefix] + 1;
    }

    // Assert, Then

    expect(Object.keys(names).length).toEqual(2);
    expect(Object.keys(names).includes(prefix1)).toEqual(true);
    expect(Object.keys(names).includes(prefix2)).toEqual(true);
  });
});
