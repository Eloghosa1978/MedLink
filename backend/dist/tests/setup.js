"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const vitest_1 = require("vitest");
let mongoServer;
(0, vitest_1.beforeAll)(async () => {
    mongoServer = await mongodb_memory_server_1.MongoMemoryServer.create();
    await mongoose_1.default.connect(mongoServer.getUri());
});
(0, vitest_1.afterEach)(async () => {
    const collections = mongoose_1.default.connection.collections;
    for (const key of Object.keys(collections)) {
        await collections[key].deleteMany({});
    }
});
(0, vitest_1.afterAll)(async () => {
    await mongoose_1.default.disconnect();
    await mongoServer.stop();
});
// backend/vitest.setup.ts
const vitest_2 = require("vitest");
vitest_2.vi.mock("./src/config/firebase-admin", () => ({
    getAdminAuth: () => ({
        verifyIdToken: vitest_2.vi.fn(),
    }),
}));
//# sourceMappingURL=setup.js.map