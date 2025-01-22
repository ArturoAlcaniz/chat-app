"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.MessageSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MessageSchema = new mongoose_1.Schema({
    username: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
});
class Message extends mongoose_1.Document {
}
exports.Message = Message;
//# sourceMappingURL=message.schema.js.map