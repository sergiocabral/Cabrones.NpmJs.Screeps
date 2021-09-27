/**
 * Informações para cada nível de um controller.
 */
export type ControllerLevel = {
  /**
   * Nível.
   */
  level: number;

  /**
   * Progresso necessário até o próximo nível.
   */
  progressTotal: number;

  /**
   * Tempo de decaimento para o nível anterior.
   */
  downgradeTimer: number;
};
