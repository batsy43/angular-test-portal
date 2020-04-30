import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:8081/users';
    }
    findAll() {
        return this.http.get(this.usersUrl);
    }
    save(user) {
        return this.http.post(this.usersUrl, user);
    }
};
UserService = tslib_1.__decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=user-service.service.js.map