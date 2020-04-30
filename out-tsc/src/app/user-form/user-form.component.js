import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../user';
let UserFormComponent = class UserFormComponent {
    constructor(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = new User();
    }
    onSubmit() {
        this.userService.save(this.user).subscribe(result => this.gotoUserList());
    }
    gotoUserList() {
        this.router.navigate(['/users']);
    }
};
UserFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-form',
        templateUrl: './user-form.component.html',
        styleUrls: ['./user-form.component.css']
    })
], UserFormComponent);
export { UserFormComponent };
//# sourceMappingURL=user-form.component.js.map