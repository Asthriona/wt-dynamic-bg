require("dotenv").config();
const app = require("express")()
const path = require("path");
const fs = require("fs");

function getImages() {
    const imgDir = path.join(__dirname, 'public', 'images');
    if(!fs.existsSync(imgDir)) throw new Error('The folder "public/images" is not found, and yet required!');
    const images = fs.readdirSync(imgDir);
    if(images.length === 0) throw new Error('No images found in the "public/images" folder.');
    const randomImage = images[Math.floor(Math.random() * images.length)]
    return path.join('public', 'images', randomImage);
}

app.get("/random", (req,res) => {
    const imagePath = getImages();
    res.sendFile(path.join(__dirname, imagePath));
})

app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`));
