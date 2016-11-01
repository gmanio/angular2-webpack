import {Headers, RequestOptions, Http, Response} from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class GpsService {
    private sGpsUrl = 'http://gman.io:3000/gps';
    private http;

    constructor(http: Http) {
        this.http = http;

        let geo_options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };

        let wpid = navigator.geolocation.watchPosition(this.geo_success.bind(this), this.geo_error.bind(this), geo_options);
    }

    geo_success(position) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let data = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            useragent: navigator.userAgent
        };

        this.http.post(this.sGpsUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body.data);
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
    }

    geo_error() {
        alert("위치 정보를 사용할 수 없습니다.");
    }
}
