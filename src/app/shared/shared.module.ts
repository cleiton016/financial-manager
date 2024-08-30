import { NgModule } from "@angular/core";
import { InputDirective } from "@directives/input.directive";
import { RippleDirective } from "@directives/ripple.directive";

const modules = [
    InputDirective,
    RippleDirective
]

@NgModule({
    imports: modules,
    exports: modules
})
export class SharedModule {}