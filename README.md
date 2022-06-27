# Valant_Bui_Demo

# Valant

This project was generated using [Nx](https://nx.dev).

[Nx Documentation](https://nx.dev/angular)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)


## How to test the maze game
Replace the original "apps" folder with the one from this repository.
Replace the original "ValantDemoApi" folder with the one from this repository.
Run `npm run generate-client:server-app` then `npm run start`.
Test the game at http://localhost:4200/

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

## Some issues
- I had trouble sending custom objects to the API.
- For example : I tried creating a PlayerPosition class and send it to the API but couldn't so I sent an 2-dimensional integer array instead.
