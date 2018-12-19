import {Component} from '@angular/core';

@Component({
    selector:'task-directives',
    templateUrl:'task-directives.component.html',
    styleUrls: ['task-directives.component.css']
})

export class TaskDirectives  {
    statePara:boolean = true;
    clickLog = [];
    count:number = 0;
    constructor() {
    }
    stateShow(){
        this.statePara = this.statePara ? false : true;
        this.clickLog.push("cliked "+ (this.count++))
    }
    countCheck(){
        console.log(this.count)
        if (this.clickLog.length > 5){
            return "blue";
        }
    }
}