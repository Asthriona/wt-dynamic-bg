const app = require("express")()
const path = require("path");
const fs = require("fs");

function getImages() {
    const imgDir = path.join(__dirname, 'public', 'images');
    const images = fs.readdirSync(imgDir);
    const randomImage = images[Math.floor(Math.random() * images.length)]
    return path.join('public', 'images', randomImage);
}

app.get("/random", (req,res) => {
    const imagePath = getImages();
    res.sendFile(path.join(__dirname, imagePath));
})

app.listen(3000, () => console.log("Running on port 3000"));
