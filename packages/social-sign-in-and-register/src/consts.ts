import { object, union, literal, string } from 'superstruct';

/**
 * Your social connector ID, which can be found in connector details page.
 */
export const connectorId = 'abcdefghijklmnopqrstu';

export const socialAccountNotExistErrorDataGuard = object({
  relatedUser: object({
    type: union([literal('email'), literal('phone')]),
    value: string(),
  }),
});
