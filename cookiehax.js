function showCookieHaxModMenu() {
  let code = prompt("Enter the code to access the Cookie Hax mod menu:");
  if (code !== "SUSSY123") {
    alert("Invalid code. Access denied.");
    return;
  }

  alert("Welcome to Cookie Hax 1.0 alpha!");

  let achievementName = prompt("Enter the name of the achievement (or type 'SKIP' to skip):");
  if (achievementName !== "SKIP") {
    Game.Achievements[achievementName].won = 1;
  }

  let ascendAmount = parseInt(prompt("Enter the number of ascensions (1 or more) (or type 'SKIP' to skip):"));
  if (!isNaN(ascendAmount) && ascendAmount !== "SKIP") {
    Game.Ascend(ascendAmount);
  }

  let ascendTimer = parseInt(prompt("Enter the ascend timer value (in milliseconds) (or type 'SKIP' to skip):"));
  if (!isNaN(ascendTimer) && ascendTimer !== "SKIP") {
    Game.AscendTimer = ascendTimer;
  }

  let bakeryName = prompt("Enter the name for your bakery (or type 'SKIP' to skip):");
  if (bakeryName !== "SKIP") {
    Game.bakeryName = bakeryName;
    Game.bakeryNameRefresh();
  }

  let numCookies = prompt("Enter the number of cookies (or type 'SKIP' to skip):");
  if (!isNaN(numCookies) && numCookies !== "SKIP") {
    Game.cookies = parseInt(numCookies);
  }

  // Continue adding prompts and corresponding mod functions below

  alert("Modifications applied successfully!");
}

// Call the function to show the Cookie Hax mod menu
showCookieHaxModMenu();
