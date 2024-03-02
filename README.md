# Jetpack-CDN-Image-Fix
if Jetpack can't fetch image from your website than it shows a Broken Image. This Script will fix it.
## Jetpack Fix v1 
It changes the ```ssl?={int}``` if the image link is bad. You might need to change the ```line 3``` in the code, to get all the image tags under specific div.

## What does it do actually?
Jetpack CDN is a free wordpress CDN. It'll do everything itself, you just have to turn on your Jetpack Site Accelerator. But There's this limitation no.5 of Site Accelerator. Where if image isn't fetched from Site under 10 seconds. It'll get corrupted. But I have found that, the broken image only appears in some of the CDN regions and not all regions. So to fix this, I made this Script.

## Working
"Script.js" Script adds a button on the middle bottom of the screen called "Fix-Broken-Image" after clicking this button. This script will fix the dead links for the particular user. The user will have to reload the image though. Right Click > Reload Image.

"auto-script.js" Will automatically fix this issue. It'll check of the link of the image is throwing "200", if not It'll fix the page automatically.

## Setup
Add this script in the widgets tabs, as an HTML widget. Just copy paste the contents of the script.
