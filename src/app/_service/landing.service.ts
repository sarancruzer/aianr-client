import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Http, RequestOptions, Response , Headers} from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class LandingService {

  private apiUrl = environment.apiUrl;

  list: any;
  headers: any;
  constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
  }

  // getsearchResponse(value): Observable<ISearch[]> {
  //       return this._http.get(this.apiUrl+value)
  //       .map((response: Response) => <ISearch[]> response.json())
  //       .do(data => console.log(JSON.stringify(data)));
  //    }

     getsearchResponse(searchText) {
          this.list = {
              'sentences': searchText,
              'sessions': localStorage.getItem('sessions'),
              'conversation_id': localStorage.getItem('conversation_id'),
              'conversation_status': localStorage.getItem('conversation_status'),
              'qa_flag': localStorage.getItem('qa_flag'),
              'qa_nerformat': localStorage.getItem('qa_nerformat'),
              'qa_id': localStorage.getItem('qa_id'),
              'ask_list': localStorage.getItem('ask_list'),
              'qa_count': localStorage.getItem('qa_count')
            };

          return this._http.post(this.apiUrl + 'searchBotsNew', this.list, this.headers)
          .map(res => res.json())
          .do(data => console.log(JSON.stringify(data)));
      }

    sendReactions(flag: string, question: any, question_id: any, answer: any) {
        this.list = {'question': question, 'question_id': question_id, 'answer': answer, 'reaction': flag, 'sessions': localStorage.getItem('sessions')};
        return this._http.post(this.apiUrl + 'sendReactions', this.list, this.headers)
        .map(res => res.json())
        .do(data => console.log(JSON.stringify(data)));
    }

}
