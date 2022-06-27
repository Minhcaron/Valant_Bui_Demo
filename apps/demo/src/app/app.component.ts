import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging/logging.service';
import { StuffService } from './stuff/stuff.service';
import { PlayerPosition } from './playerPosition.component';

@Component({
  selector: 'valant-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})

export class AppComponent implements OnInit {
	// Variables
	public title = 'Valant demo';
	public data: string[];
	public positionData: number[];
	public selectedFile: File;
	public mazeList: any[] = [];
	public mazeListString: string[] = [];
	public playMode: boolean = false;
	public selectedMaze: string[];
	public selectedMazeString: string;	
	public playerPosition: PlayerPosition = new PlayerPosition();

	constructor(private logger: LoggingService, private stuffService: StuffService) {}

	ngOnInit() {
		this.logger.log('Welcome to the AppComponent');
		this.getStuff();
	}

	private getStuff(): void {
		this.stuffService.getStuff().subscribe({
		  next: (response: string[]) => {
			this.data = response;
		  },
		  error: (error) => {
			this.logger.error('Error getting stuff: ', error);
		  },
		});
	}

	onFileChanged(event) {
		// get the .txt file
		this.selectedFile = event.target.files[0];
		const fileReader = new FileReader();
		fileReader.readAsText(this.selectedFile, "UTF-8");
		fileReader.onload = () => {
			// Save content of .txt file in mazeToUpload
			let mazeToUpload = fileReader.result as string;
			
			// Save the maze in mazeListString
			this.mazeListString.push(mazeToUpload);
			
			// Save the maze as an array in mazeList
			this.stuffService.getMazeFromFile(mazeToUpload).subscribe({
			  next: (response: string[]) => {
				this.data = response;
				console.log("this.data");
				this.mazeList.push(this.data);
			  },
			  error: (error) => {
				this.logger.error('Error getting stuff: ', error);
			  },
			});
	  }
	  fileReader.onerror = (error) => {
		console.log(error);
	  }
	}
	
	// When user click on "play maze" button
	playSelectedMaze(mazeIndex: number)
	{
		// if user clicked on a maze, set playMode = true
		this.playMode = true;
		
		// then set the selectedMaze variables
		this.selectedMaze = this.mazeList[mazeIndex];
		this.selectedMazeString = this.mazeListString[mazeIndex];
		
		// console log
		console.log("this.selectedMaze");
		console.log(this.selectedMaze);
		console.log(this.selectedMazeString);
	}

	// When user click on "up" button
	goUp()
	{
		this.stuffService.goUp(this.playerPosition.x, this.playerPosition.y, this.selectedMazeString).subscribe({
			next: (response: number[]) => {
				this.positionData = response;
				console.log("after going up");
				console.log(this.positionData);
				this.playerPosition.x = this.positionData[0];
				this.playerPosition.y = this.positionData[1];
				console.log(this.playerPosition);
			},
			error: (error) => {
				this.logger.error('Error getting stuff: ', error);
			},
		});
	}
	
	// When user click on "left" button
	goLeft()
	{
		this.stuffService.goLeft(this.playerPosition.x, this.playerPosition.y, this.selectedMazeString).subscribe({
			next: (response: number[]) => {
				this.positionData = response;
				console.log("after going left");
				console.log(this.positionData);
				this.playerPosition.x = this.positionData[0];
				this.playerPosition.y = this.positionData[1];
				console.log(this.playerPosition);
			},
			error: (error) => {
				this.logger.error('Error getting stuff: ', error);
			},
		});
	}
	
	// When user click on "right" button
	goRight()
	{
		this.stuffService.goRight(this.playerPosition.x, this.playerPosition.y, this.selectedMazeString).subscribe({
			next: (response: number[]) => {
				this.positionData = response;
				console.log("after going right");
				console.log(this.positionData);
				this.playerPosition.x = this.positionData[0];
				this.playerPosition.y = this.positionData[1];
				console.log(this.playerPosition);
			},
			error: (error) => {
				this.logger.error('Error getting stuff: ', error);
			},
		});
	}
	
	// When user click on "down" button
	goDown()
	{
		this.stuffService.goDown(this.playerPosition.x, this.playerPosition.y, this.selectedMazeString).subscribe({
			next: (response: number[]) => {
				this.positionData = response;
				console.log("after going down");
				console.log(this.positionData);
				this.playerPosition.x = this.positionData[0];
				this.playerPosition.y = this.positionData[1];
				console.log(this.playerPosition);
			},
			error: (error) => {
				this.logger.error('Error getting stuff: ', error);
			},
		});
	}
	
	checkIfWon()
	{
		if(this.selectedMaze[this.playerPosition.x][this.playerPosition.y] == 'E')
		{
			return true;
		}
		else{
			return false;
		}
	}
}
