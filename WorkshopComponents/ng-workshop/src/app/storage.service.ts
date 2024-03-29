import { Injectable } from '@angular/core';

export class StorageService {
}

export const storageServiceProvider: Provider ={
  provide: StorageService
}
@Injectable()
export class BrowserStorage {
  localStorage = localStorage;
  setItem<T>(key: string, item: T): T {
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const tmp = this.localStorage.getItem(key);
    if(!tmp) {return null;}
    try{
   item = JSON.parse(tmp!);
    } catch {
      item = this.localStorage.getItem(key);
    }
   
   return item;
  }
}

@Injectable()
export class ServerStorage {
  
  localStorage = {
    data: {},
    setItem<T>(key: string, item: T) : void {
      this.data[key] = item;
    },
    getItem<T>(key: string): T {
      return this.data[key] as any;
    }
  }

  setItem<T>(key: string, item: T): T {
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem<T>(key: string): T {
    let item;
    const temp = this.localStorage.getItem(key) as any;
    if(!tmp) { return null;}
    try{
   item = JSON.parse(temp!);
    } catch {
      item = this.localStorage.getItem(key);
    }
   
   return item;
  }
}
