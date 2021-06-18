"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBURI = exports.Host = exports.Secret = void 0;
const localHost = "localhost";
const LocalURI = `mongodb://${localHost}:27017/comp229_portfolio`;
const remoteHost = "comp229porfolio.llqr4.mongodb.net";
const RemoteURI = `mongodb+srv://admin:admin@${remoteHost}/myFirstDatabase?retryWrites=true&w=majority`;
exports.Secret = 'someSecret';
exports.Host = remoteHost;
exports.MongoDBURI = RemoteURI;
//# sourceMappingURL=db.js.map