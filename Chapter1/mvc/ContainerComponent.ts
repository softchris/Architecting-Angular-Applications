// decorator function
@Component({
    selector: 'container',
    template: `<h1>{{title}}</h1> <custom></custom>`. // the view
})
export class ContainerComponent { // the class
    title: string;
}