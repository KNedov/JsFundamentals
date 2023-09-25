function gladiatorExpenses(
    lostFightsCount,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
  ) {
    let expenses = 0;
    let counterLostFights = 0;
    let shieldCounter = 0;
  
    for (let i = 1; i <= lostFightsCount; i++) {
      counterLostFights++;
      if (counterLostFights % 2 == 0) {
        expenses += helmetPrice;
      }
      if (counterLostFights % 3 == 0) {
        expenses += swordPrice;
      }
      if (counterLostFights % 2 == 0 && counterLostFights % 3 == 0) {
        expenses += shieldPrice;
        shieldCounter++;
        if (shieldCounter % 2 == 0 && shieldCounter !== 0) {
          expenses += armorPrice;
        }
      }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
  }
  gladiatorExpenses(23, 12.5, 21.5, 40, 200);
  //126 +150.5+120
  gladiatorExpenses(7, 2, 3, 4, 5);
  