import { object, union, literal, string } from 'superstruct';

export const connectorId = 'xrnbp4btwni53layphm8t';

export const socialAccountNotExistErrorDataGuard = object({
  relatedUser: object({
    type: union([literal('email'), literal('phone')]),
    value: string(),
  }),
});
