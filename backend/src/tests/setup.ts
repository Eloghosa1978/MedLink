import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import  {beforeAll, afterEach, afterAll} from 'vitest'

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();

  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  const collections = mongoose.connection.collections;

  for (const key of Object.keys(collections)) {
    await collections[key].deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.disconnect();

  await mongoServer.stop();
});


// backend/vitest.setup.ts
import { vi } from "vitest";

vi.mock("./src/config/firebase-admin", () => ({
  getAdminAuth: () => ({
    verifyIdToken: vi.fn(),
  }),
}));


