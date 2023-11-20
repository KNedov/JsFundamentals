function extraxtFile(path) {
  let failInfo = path.split("\\").pop();
  let lastDot = failInfo.lastIndexOf(".");
  let fileName = failInfo.substring(0, lastDot);
  let extention = failInfo.substring(lastDot + 1);
  console.log(`File name: ${fileName}
File extension: ${extention}`);
}
extraxtFile("C:\\Internal\\training-internal\\Template.pptx");
extraxtFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
