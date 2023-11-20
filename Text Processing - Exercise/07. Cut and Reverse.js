function cutAndReverse(string) {
  let leftString = string
    .substring(0, string.length / 2)
    .split("")
    .reverse()
    .join("");
  let rightString = string
    .substring(string.length / 2)
    .split("")
    .reverse()
    .join("");
  console.log(leftString);
  console.log(rightString);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
