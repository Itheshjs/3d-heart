const gridMarkers = ["marker0", "marker1", "marker2", "marker3"];
const positions = {
  player: "marker0",
  gold: "marker1",
  pit: "marker2",
  wumpus: "marker3",
};

// Randomize positions of the objects
function randomizePositions() {
  positions.gold = gridMarkers[Math.floor(Math.random() * gridMarkers.length)];
  positions.pit = gridMarkers[Math.floor(Math.random() * gridMarkers.length)];
  positions.wumpus = gridMarkers[Math.floor(Math.random() * gridMarkers.length)];

  // Ensure objects are not on the same marker
  while (
    positions.gold === positions.pit ||
    positions.gold === positions.wumpus ||
    positions.pit === positions.wumpus
  ) {
    positions.gold = gridMarkers[Math.floor(Math.random() * gridMarkers.length)];
  }
}

// Handle marker events
gridMarkers.forEach((markerId) => {
  const marker = document.getElementById(markerId);
  marker.addEventListener("markerFound", () => {
    if (markerId === positions.gold) {
      alert("You found the gold! You win!");
    } else if (markerId === positions.pit) {
      alert("You fell into a pit! Game over!");
    } else if (markerId === positions.wumpus) {
      alert("The Wumpus got you! Game over!");
    }
  });
});

// Restart the game
document.getElementById("restart-button").addEventListener("click", () => {
  randomizePositions();
  alert("Game restarted! Explore the AR world to find the gold!");
});

// Initialize game
randomizePositions();
