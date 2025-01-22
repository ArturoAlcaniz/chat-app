"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    username: String,
    email: String,
    password: String,
});
class User extends mongoose_1.Document {
}
exports.User = User;
//# sourceMappingURL=user.schema.js.map