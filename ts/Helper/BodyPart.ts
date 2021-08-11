import { InvalidExecutionError } from '@sergiocabral/helper';
import { PartialRecord } from '@sergiocabral/helper/js/Type/PartialRecord';

/**
 * Manipulação de partes do Creep.
 */
export class BodyPart {
  /**
   * Construtor proibido.
   */
  public constructor() {
    throw new InvalidExecutionError('This is a static class.');
  }

  /**
   * Calcula o custo para as partes de construção do creep.
   * @param bodyParts Partes de construção do creep
   */
  public static calculateCost(bodyParts: BodyPartConstant[]): number {
    let cost = 0;
    for (const bodyPart of bodyParts) {
      cost += BODYPART_COST[bodyPart];
    }
    return cost;
  }

  /**
   * Converte uma estrutura de partes em uma lista de partes.
   * @param parts
   */
  public static toPartList(
    parts: PartialRecord<BodyPartConstant, number>
  ): BodyPartConstant[] {
    return Object.keys(parts)
      .map(partName => {
        const part = partName as BodyPartConstant;
        const partCount = parts[part] as number;
        return Array<BodyPartConstant>(partCount).fill(part);
      })
      .reduce((result: BodyPartConstant[], parts: BodyPartConstant[]) => {
        result.push(...parts);
        return result;
      }, []);
  }
}
