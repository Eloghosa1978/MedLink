When fixing TypeScript errors, prefer the narrowest correct type over casting.

Rules:

- Do not use `as any` unless there is no safe alternative.
- Prefer explicit types, generics, `Pick`, `Partial`, `Required`, `Omit`, `Exclude`, `Extract`, `unknown`, and schema-derived types.
- For Mongoose, prefer `HydratedDocument`, `InferSchemaType`, and properly typed models.
- If a mismatch exists, fix the type definition first, then the call site.
- If a cast is necessary, explain why briefly instead of silently using `as any`.
