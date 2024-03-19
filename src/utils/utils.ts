import { Errors } from '../types/errors'

export function hasNoError(errors: Errors) {
  return Object.values(errors).some((item) => !!item);
}
