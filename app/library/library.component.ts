import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    template: `
    <h3>This is Library</h3><br/>


    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2" for="ch1">Touch sounds</label>
        <div class="col-sm-10">
          <div class="checkbox">
            <label>
              <input id="ch1" type="checkbox" checked="">
            </label>
          </div>
          <p class="help-block">This shows the generic label variant.</p>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label" for="ch3">Vibrate on touch</label>
        <div class="col-sm-10">
          <div class="checkbox">
            <label>
              <input id="ch3" type="checkbox">
            </label>
          </div>
          <p class="help-block">This shows the <code>control-label</code> variant.</p>
        </div>
      </div>
    </form>


  `
})
export class LibraryComponent {

}