import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { Announcement } from '../../common/announcement';

@Injectable()
export class AnnouncementService {

  anouncements: Announcement[] = [];

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.taURL + '/announcements/announcements')
      .pipe(
        retry(2)
      );
  }

  getOneAnnouncements(objectId: any): Observable<Announcement[]> {
    const taUrlGet = 'http://localhost:3000/announcements/oneAnnouncements';
    const url = `${taUrlGet}/${objectId}`;
    return this.http.get<Announcement[]>(url)
      .pipe(
        retry(2)
      );
  }

  postAnnouncements(anouncement: Announcement): Observable<Announcement> {

    return this.http.post<any>(this.taURL + '/announcements/createAnnouncement', anouncement, { headers: this.headers })
      .pipe(
        retry(2)
      );
  }


  deleteAnnouncements(objectId: string): Observable<{}> {
    const taUrlDelete = 'http://localhost:3000/announcements/delete';
    const url = `${taUrlDelete}/${objectId}`;
    return this.http.delete(url, { headers: this.headers })
      .pipe(
        retry(2)
      );
  }

  updateAnnouncements(announcement: Announcement): Observable<Announcement> {

    return this.http.put<any>(this.taURL + '/announcements/update', JSON.stringify(announcement), { headers: this.headers })
      .pipe(
        retry(2)
      );
  }
}
