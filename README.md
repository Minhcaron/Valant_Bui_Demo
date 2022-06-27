# Valant_Bui_Demo

# Valant

This project was generated using [Nx](https://nx.dev).

[Nx Documentation](https://nx.dev/angular)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)


## How to test the maze game
- Replace the original "apps" folder with the one from this repository.
- Replace the original "ValantDemoApi" folder with the one from this repository.
- Run `npm run generate-client:server-app` then `npm run start`.
- Test the game at http://localhost:4200/
- You can find 3 maze files to upload under apps/demo/src/app (maze1.txt, maze2.txt, maze3.txt)
- After selecting a maze to play, click on the directional arrows to move around.

## Some ideas for improvement 
- Create an introduction menu
- Redesign the "upload maze" button
- Redesign the mazes (make the 'X' black cells, make the 'O' white cells, add a stick figure at your location)
- Allow user to use keyboard arrow keys to move around
- Assumptions were made :
	- I assumed each maze uploaded was correct meaning :
	1) Only letters S,X,O,E were used
	2) Each row of the maze is the same size
	3) S is always on the top left corner
	4) E is always on the bottor right corner

- Cover those assumptions and make sure maze size uploaded is correct, only those 4 letters are used, etc...
- Create a new component for displaying a maze.
- Create a way to come back to the main menu and select another maze.
- Set a maze as "done" on the original menu.

## Some issues
- I had trouble sending custom objects to the API.
- For example : I tried creating a PlayerPosition class and send it to the API but couldn't so I sent an 2-dimensional integer array instead.
- I had some other issues with .Net framework version
- Issues debuging in Visual Studio
