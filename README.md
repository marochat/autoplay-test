# tauri autoplay problem

## to try this problem
\$ npm install

\$ cargo tauri dev

## content
- sample1: play with user interactive
- sample2: play with user interactive (but pre-create AudioContext non-interactive)
- sample3: play after 1s timer play == autoplay test

## result
||mac|windows|Linux|
|-|-|-|-|
|sample1|OK|OK|OK|
|sample2|OK|OK|NG|
|sample3|OK|OK|NG|

## note.

- Linux: RaspberryPi - Debian11(bullseye) - WebkitGTK2
    - sudo apt install libdbus-1-dev librust-glib-sys-dev librust-cairo-sys-rs-dev librust-gdk-sys-dev libsoup2.4-dev libwebkit2gtk-4.0-dev  

### author
- marochat