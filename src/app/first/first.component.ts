import {Component} from '@angular/core'

@Component({
  selector: "app-first",
  templateUrl:  'first.component.html',
  styleUrls: ['first.component.css']
})


export class FirstComponent
{
    headingTwo: string = "I am first child component";
    imgUrl: string = "../../assets/Artboard-2.png";
    returnString(): string{
      return this.headingTwo;
    }
}
