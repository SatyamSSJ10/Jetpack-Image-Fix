# Jetpack-CDN-Image-Fix
if Jetpack can't fetch image from your website than it shows a Broken Image. This Script will fix it. There are two options to choose from, Script.js and Jetpack-Fix-V1. Both have different working.
## Jetpack Fix v1 
It changes the ```ssl?={int}``` if the image link is bad. You might need to change the ```line 3``` in the code, to get all the image tags under specific div.

## What does it do actually?
Jetpack CDN is a free wordpress CDN. It'll do everything itself, you just have to turn on your Jetpack Site Accelerator. But There's this limitation no.5 of Site Accelerator. Where if image isn't fetched from Site under 10 seconds. It'll get corrupted. But I have found that, the broken image only appears in some of the CDN regions and not all regions. So to fix this, I made this Script.

## Setup
Add this script in the widgets tabs, as an HTML widget. Just copy paste the contents of the script.
