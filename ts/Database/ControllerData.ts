import { InvalidExecutionError } from '@sergiocabral/helper';
import { ControllerLevel } from '../Type/ControllerLevel';

/**
 * Dados relacionados a: controller.
 */
export class ControllerData {
  /**
   * Construtor proibido.
   */
  public constructor() {
    throw new InvalidExecutionError('This is a static class.');
  }

  /**
   * Informações sobre níveis.
   */
  public static get levels(): ControllerLevel[] {
    return [
      {
        level: 1,
        progressTotal: 200,
        downgradeTimer: 20000
      },
      {
        level: 2,
        progressTotal: 45000,
        downgradeTimer: 10000
      },
      {
        level: 3,
        progressTotal: 135000,
        downgradeTimer: 20000
      },
      {
        level: 4,
        progressTotal: 405000,
        downgradeTimer: 40000
      },
      {
        level: 5,
        progressTotal: 1215000,
        downgradeTimer: 80000
      },
      {
        level: 6,
        progressTotal: 3645000,
        downgradeTimer: 120000
      },
      {
        level: 7,
        progressTotal: 10935000,
        downgradeTimer: 150000
      },
      {
        level: 8,
        progressTotal: 0,
        downgradeTimer: 200000
      }
    ];
  }
}
