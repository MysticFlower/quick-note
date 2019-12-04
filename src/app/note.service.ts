import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public API = '//localhost:8080';
  public NOTES_API = this.API + '/notes';

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/notes/');
  }
  get(id: string) {
    return this.http.get(this.NOTES_API + '/' + id);
  }
  save(note: any): Observable<any> {
   let result: Observable<any>;
   result = this.http.post(this.NOTES_API, note);
   return result;
  }


  public getAllNotes() {
    return this.http.get('http://localhost:8080/notes/', {responseType: 'text' as 'json'});
  }

  public getNoteById(id) {
    return this.http.get('http://localhost:8080/notes/' + id );
  }

  public modifyNoteById(id) {
    return this.http.post('http://localhost:8080/notes/' + id, {responseType: 'text' as 'json'});
  }

  public createNote(note) {
    return this.http.post('http://localhost:8080/notes/', {responseType: 'text'});
  }

  public deleteNote(id) {
    return this.http.delete('http://localhost:8080/notes/' + id);
  }
}
