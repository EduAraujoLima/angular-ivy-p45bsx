import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppService } from './app.service';
import { ItemToShow } from './root-object.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private appService: AppService) {}

  items: Observable<Array<ItemToShow>> = this.appService.getpiResponse().pipe(
    map((rootObject) => {
      const item = rootObject.itensDocComercial.map((item, index) => {
        return { ...item, ...rootObject.produtos[index] };
      });
      return item;
    }),
    tap(console.log)
  );
}
