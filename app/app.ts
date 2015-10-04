import {FORM_DIRECTIVES, Component, View, bootstrap} from "angular2/angular2";
import {RouteConfig} from "angular2/router";
import {Http} from "angular2/http";
console.log(FORM_DIRECTIVES);
console.log(Http);
console.log(RouteConfig)

@Component({
    selector:'test'
})
@View({
    directives:[FORM_DIRECTIVES],
    template:`
        <div>
            <input type="text" [(ng-model)]="foo"> {{foo}}
        </div>
    `
})
class Test{
    foo = "hello";
}







@Component({
    selector: 'app'
})
@View({
    directives: [Test],
    template: `
        <test></test>
        <div>Hello world</div>
    `
})
class App{}

bootstrap(App).then(
    success => console.log('app starting...'),
    error => console.log(error)
);
