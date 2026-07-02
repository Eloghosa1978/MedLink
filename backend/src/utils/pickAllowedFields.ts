

export const pickAllowedFields = <
  T extends Record<string, unknown>,
  K extends readonly (keyof T)[],
>(
  data: T,
  allowedFields: K,
): Partial<Pick<T, K[number]>> => {
  return allowedFields.reduce((result, field) => {
    if (field in data) {
      result[field] = data[field];
    }
    return result;
  }, {} as Partial<Pick<T, K[number]>>);
};
