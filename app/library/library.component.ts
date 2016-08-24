import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MaterialView } from '../material.view';
@Component({
    templateUrl: 'app/library/library.component.html'
})
export class LibraryComponent extends MaterialView{

}