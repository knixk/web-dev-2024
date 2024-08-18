/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
  {
    name: "URL",
    message: "What's your URL?",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const { URL } = answers;
    const qrImg = qr.image(URL);
    qrImg.pipe(fs.createWriteStream("qr_img.png"));
    // Use user feedback for... whatever!!
    console.log(answers);

    fs.writeFile("url.txt", URL, (err) => {
      if (err) {
        throw err;
      }
      console.log("the file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
