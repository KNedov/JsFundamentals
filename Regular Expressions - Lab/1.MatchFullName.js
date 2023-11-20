function matchFullName(string) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let matchFullName = string.match(pattern);
  console.log(matchFullName.join(' '));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
);
