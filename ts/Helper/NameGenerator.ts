import {
  HelperList,
  HelperNumeric,
  InvalidExecutionError,
  WordGenerator
} from '@sergiocabral/helper';

/**
 * Gerador de nomes aleatórios.
 */
export class NameGenerator {
  /**
   * Construtor proibido.
   */
  public constructor() {
    throw new InvalidExecutionError('This is a static class.');
  }

  /**
   * Gerador de palavras.
   * @private
   */
  private static readonly wordGenerator = new WordGenerator(
    ['b', 'c', 'd', 'f', 'l', 'n', 'p', 's', 't', 'w', 'z'],
    ['a', 'e', 'i', 'o']
  );

  /**
   * Gera um nome aleatório.
   * @param prefix
   */
  public static random(prefix?: string | string[]): string {
    prefix =
      prefix === undefined
        ? ''
        : (typeof prefix === 'string' ? prefix : HelperList.getRandom(prefix)) +
          ' ';
    const minimumSyllables = 1;
    const maximumSyllables = 3;
    const syllableCount = HelperNumeric.between(
      minimumSyllables,
      maximumSyllables
    );
    return prefix + this.wordGenerator.getWord(syllableCount);
  }
}
