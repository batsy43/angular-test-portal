import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserListComponent = class UserListComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.findAll().subscribe(data => {
            this.users = data;
        });
    }
};
UserListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.css']
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map