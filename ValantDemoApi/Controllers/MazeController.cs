using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System;

namespace ValantDemoApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MazeController : ControllerBase
    {
        private readonly ILogger<MazeController> _logger;

        public MazeController(ILogger<MazeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<string> GetNextAvailableMoves()
        {
			return new List<string> {"Up", "Down", "Left", "Right"};
        }

        [HttpGet("getMazeFromFile")]
        public IEnumerable<string> GetMazeFromFile(string mazeToUpload)
        {
			string[] subs = mazeToUpload.Split(new string[] { "\r\n", "\r", "\n" }, StringSplitOptions.RemoveEmptyEntries);
			List<string> mazeStringList = new List<string>();
			foreach(var sub in subs)
			{
			  mazeStringList.Add(sub);
			}

            return mazeStringList;
        }
		
		[HttpGet("goUp")]
        public int[] GoUp( int playerPositionX, int playerPositionY, string selectedMazeString)
        {
			string[] mazeArray = selectedMazeString.Split(new string[] { "\r\n", "\r", "\n" }, StringSplitOptions.RemoveEmptyEntries);
			if(playerPositionX > 0)
			{
				if(mazeArray[playerPositionX-1][playerPositionY] != 'X' && playerPositionX > 0)
				{
					playerPositionX--;
				}
			}
			
			int[] playerPosition = new int[] {playerPositionX, playerPositionY};
			// PlayerPosition test = new PlayerPosition();
			// List<string> mazeStringList = new List<string>(){"aaa","bbb", playerPositionX.ToString(), playerPositionY.ToString()};
			return playerPosition;
        }
		
		[HttpGet("goLeft")]
        public int[] GoLeft( int playerPositionX, int playerPositionY, string selectedMazeString)
        {
			string[] mazeArray = selectedMazeString.Split(new string[] { "\r\n", "\r", "\n" }, StringSplitOptions.RemoveEmptyEntries);
			if(playerPositionY > 0)
			{
				if(mazeArray[playerPositionX][playerPositionY-1] != 'X')
				{
					playerPositionY--;
				}
			}
			
			int[] playerPosition = new int[] {playerPositionX, playerPositionY};
			// PlayerPosition test = new PlayerPosition();
			// List<string> mazeStringList = new List<string>(){"aaa","bbb", playerPositionX.ToString(), playerPositionY.ToString()};
			return playerPosition;
        }
		
		[HttpGet("goRight")]
        public int[] GoRight( int playerPositionX, int playerPositionY, string selectedMazeString)
        {
			string[] mazeArray = selectedMazeString.Split(new string[] { "\r\n", "\r", "\n" }, StringSplitOptions.RemoveEmptyEntries);
			if(playerPositionY < mazeArray[playerPositionX].Length-1)
			{
				if(mazeArray[playerPositionX][playerPositionY+1] != 'X')
				{
					playerPositionY++;
				}
			}
			
			int[] playerPosition = new int[] {playerPositionX, playerPositionY};
			// PlayerPosition test = new PlayerPosition();
			// List<string> mazeStringList = new List<string>(){"aaa","bbb", playerPositionX.ToString(), playerPositionY.ToString()};
			return playerPosition;
        }
		
		[HttpGet("goDown")]
        public int[] GoDown( int playerPositionX, int playerPositionY, string selectedMazeString)
        {
			string[] mazeArray = selectedMazeString.Split(new string[] { "\r\n", "\r", "\n" }, StringSplitOptions.RemoveEmptyEntries);
			if(playerPositionX < mazeArray.Length-1)
			{
				if(mazeArray[playerPositionX+1][playerPositionY] != 'X')
				{
					playerPositionX++;
				}
			}
			
			int[] playerPosition = new int[] {playerPositionX, playerPositionY};
			// PlayerPosition test = new PlayerPosition();
			// List<string> mazeStringList = new List<string>(){"aaa","bbb", playerPositionX.ToString(), playerPositionY.ToString()};
			return playerPosition;
        }
	}
}
