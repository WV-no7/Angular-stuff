import { Component } from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  k=0;
  constructor(private utils: UtilsService) {
    this.title = this.utils.title;
    this.utils.titleChanged.subscribe(res => this.title = res)
    let color = "red";
    this.utils.notificationAdded.subscribe(res => {
      var divNode = document.createElement("span");
      divNode.setAttribute("id","" + this.k)
      divNode.setAttribute("style","cursor:pointer;")
      divNode.setAttribute("title","Click to dismiss this notification!")
      divNode.innerHTML = `
              <div style="color:`+ res[1] +`">
                <span style="padding-top: 4px;" class="pull-left"><i class="material-icons">`+ res[2] +`</i></span>
                <br>
                <br>`+ res[0] +`
              </div>
            <hr>`;
      let k = this.k;
      divNode.addEventListener("click",function() {
        var div = document.getElementById(""+k);
        if (div) {
          div.parentNode.removeChild(div);
        }
      })
      document.getElementById("testify").appendChild(divNode);
      this.k++;
    });
  }

  // <button id="button" class="mdl-button mdl-js-button mdl-button--icon pull-right"><span class="material-icons">close</span></button>
}
