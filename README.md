# Windows Terminal Dynamic Background.

This is a simple web-app that will display a new image everytime you open a new terminal.  
I made this app as I was watching a video of [ThePrimeagen](https://www.youtube.com/@ThePrimeagen). I noticed he had a frame of [this video](https://youtu.be/j1Bu3j32_1U?si=w86-UMosfjwtNRGj) from Okayu Nekomata as background, and I love my own background, it was a good one, but i thought that was a great idea, so I wanted both images.  
So instead of having to choose, Let's make it dynamic. and here was the whole idea. 


## How to install: 

using yarn:
```bash
yarn install
yarn dev
```
using NPM:
```bash
npm i
npm run dev
```

## how to use?
Put your images in `src/public/images` (You can delete the pre-existing images.)  
then try it by going to `http://localhost:3000/random`
if it displayed an image, now just go to your terminal settings, set the link in there.  
You can use any nodeJS compatible host to host it, then just past the link in your settings. 

<div><video controls src="https://cdn.asthriona.com/i/2024/01/2024-01-06%2004-35-21.mp4" muted="true"></video></div>

## Troubleshooting
### My images never changes.
On windows Terminal you have to open a new window in order to have a new image.  
Not a pane, not a tab. a new Window.
On Linux or Mac, i have no idea sorry, I have no background or terminal compatible to test on my debians, and I don't own a mac.

### Having an issue using this?
Please, open an issue, with your error logs ***AS TEXT*** no screenshots of the logs! and I'll do my best to help you!  
if something happens too many times I'll add a way to fix it here! 

Images credit: [Wallpaper Abyss](https://wall.alphacoders.com/)
