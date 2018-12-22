import {Component} from '@angular/core';

@Component({
    selector:'task-directives',
    templateUrl:'task-directives.component.html',
    styleUrls: ['task-directives.component.css']
})

export class TaskDirectives  {
    statePara:boolean = true;
    clickLog = [];
    count: number = 0;
    overState: boolean = false;
    constructor() {
    }
    stateShow(){
        this.statePara = this.statePara ? false : true;
        // this.clickLog.push((this.count++) + 1);
        // time stamping
        this.clickLog.push(new Date());
    }
    countCheck(){
        console.log(this.count)
        if (this.clickLog.length > 5) {
            this.overState = true;
            return this.overState === true ? 'blue' : 'unset';
        }
    }
}