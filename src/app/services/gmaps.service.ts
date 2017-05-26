import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GMapsService {
  constructor( private http: Http) {}

  getAddress(lat:number, lng:number) {
    return this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}`)
      .map((data) => { return data.json()});
  }
}
