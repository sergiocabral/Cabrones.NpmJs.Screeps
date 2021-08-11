import { InvalidExecutionError } from "@sergiocabral/helper";

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
}
