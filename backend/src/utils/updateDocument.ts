import { Model, Document, UpdateQuery, QueryOptions } from "mongoose";


export const updateDocument = async <T extends object>(
  model: Model<T>,
  filter: Record<string, unknown>,
  update: UpdateQuery<T>,
  options?: QueryOptions,
): Promise<T | null> => {
  if (Object.keys(update).length === 0) {
    return await model.findOne(filter);
  }

  const finalOptions = {
    ...options,
    ...(options?.new && { returnDocument: "after" as const }),
  };
  delete finalOptions.new;

  return await model.findOneAndUpdate(
    filter,
    {
      $set: update,
    },
    finalOptions,
  );
};
