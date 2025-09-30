"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    users = [];
    registerUser(user) {
        this.users = [...this.users, user];
    }
    getUserDetails(id) {
        return this.users.find(u => u.id === id);
    }
    getProperty(obj, key) {
        return obj[key];
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map