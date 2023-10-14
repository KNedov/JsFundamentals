function nxNMatrix(n) {
  for (let i = 0; i < n; i++) {
    let x = String(n) + " ";

    console.log(`${x.repeat(n)}`);
  }
}
nxNMatrix(2);
nxNMatrix(7);
nxNMatrix(3);
