import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {map } from 'rxjs/operators';
import { Tweet } from '../tweets.model';

@Component({
  selector: 'app-extracttweets',
  templateUrl: './extracttweets.component.html',
  styleUrls: ['./extracttweets.component.css']
})
export class ExtracttweetsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  tweets_array:Tweet[]=[];


  ngOnInit(): void {
    this.fetchTweets();
  }

  private fetchTweets(){
    this.http.get<{[key:string]:Tweet}>('http://127.0.0.1:5000/get_the_json')
    .pipe(map(responseData =>{
      const tweets_array:Tweet[]=[];
      for (const key in responseData)
      { 
        console.log("key data" + responseData[key]);
        if(responseData.hasOwnProperty(key))
        {
          tweets_array.push({...responseData[key], twt:key});
        }
        
      }
        return tweets_array;
    }))
    .subscribe(tweets =>{
      //this.http.get('http://google.com').subscribe(tweets =>{
     
     this.tweets_array=tweets;
     console.log(this.tweets_array)
    });
    //console.log("no data");
  }

}
