"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayAllUser = void 0;
const user_1 = __importDefault(require("../models/user"));
function DisplayAllUser(req, res, next) {
    user_1.default.find(function (err, users) {
        if (err) {
            return console.error(err);
        }
        console.log('Hello Dean');
        console.log(users);
    });
}
exports.DisplayAllUser = DisplayAllUser;
//# sourceMappingURL=user.js.map