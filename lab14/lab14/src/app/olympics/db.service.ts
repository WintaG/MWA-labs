import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private data: Array<object>

  constructor() {
    this.data = [{
      _id: 1,
      game: {
        name: 'Rowing',
        schedule: [{
          stadium: 'Stadium 1',
          date: 'date 1.1',
          time: 'time 1.1'
        },
        {
          stadium: 'Stadium 2',
          date: 'date 2.1',
          time: 'time 2.1'
        },
        {
          stadium: 'Stadium 3',
          date: 'date 3.1',
          time: 'time 3.1'
        }]
      }
    },
    {
      _id: 2,
      game: {
        name: 'Soccer',
        schedule: [{
          stadium: 'Stadium 4',
          date: 'date 4.1',
          time: 'time 4.1'
        },
        {
          stadium: 'Stadium 5',
          date: 'date 5.1',
          time: 'time 5.1'
        },
        {
          stadium: 'Stadium 6',
          date: 'date 6.1',
          time: 'time 6.1'
        }]
      }
    }]
  }

  getData() {
    return this.data;
  }
}