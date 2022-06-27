import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValantDemoApiClient } from '../api-client/api-client';
import { PlayerPosition } from '../playerPosition.component';

@Injectable({
  providedIn: 'root',
})
export class StuffService {
	constructor(private httpClient: ValantDemoApiClient.Client) {}

	public getStuff(): Observable<string[]> {
		let test = this.httpClient.maze();
		return this.httpClient.maze(); 
	}
  
	public getMazeFromFile(mazeToUpload: string): Observable<string[]> {
		let test = this.httpClient.getMazeFromFile(mazeToUpload);
		return test;
	}
  
	public goUp(playerPositionX: number, playerPositionY: number, selectedMazeString: string): Observable<any> {
		let playerposition: PlayerPosition = new PlayerPosition();
		let testInt: number = 5;
		let test = this.httpClient.goUp(playerPositionX, playerPositionY, selectedMazeString);
		return test;
	}
	
	public goLeft(playerPositionX: number, playerPositionY: number, selectedMazeString: string): Observable<any> {
		let playerposition: PlayerPosition = new PlayerPosition();
		let testInt: number = 5;
		let test = this.httpClient.goLeft(playerPositionX, playerPositionY, selectedMazeString);
		return test;
	}
	
	public goRight(playerPositionX: number, playerPositionY: number, selectedMazeString: string): Observable<any> {
		let playerposition: PlayerPosition = new PlayerPosition();
		let testInt: number = 5;
		let test = this.httpClient.goRight(playerPositionX, playerPositionY, selectedMazeString);
		return test;
	}
	
	public goDown(playerPositionX: number, playerPositionY: number, selectedMazeString: string): Observable<any> {
		let playerposition: PlayerPosition = new PlayerPosition();
		let testInt: number = 5;
		let test = this.httpClient.goDown(playerPositionX, playerPositionY, selectedMazeString);
		return test;
	}
}
