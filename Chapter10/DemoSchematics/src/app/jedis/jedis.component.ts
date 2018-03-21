import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jedis",
  templateUrl: "./jedis.component.html",
  styleUrls: ["./jedis.component.css"]
})
export class JedisComponent implements OnInit {
  constructor(private store: Store<any>) {}
}
