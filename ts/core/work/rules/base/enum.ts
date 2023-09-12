
/** 规则执行结果的使用方式 */
export enum ValueGoal {
  '主表赋值' = '0',
  '子表赋值' = '1',
  '校验主表数据' = '2',
  '校验子表数据' = '3',
  '修改主表展示方案' = '4',
  '限制子表编辑功能' = '5',
}