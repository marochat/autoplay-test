# tauri autoplay problem

## to try this problem
\$ git clone https://github.com/marochat/autoplay-test

\$ cd autoplay-test

\$ npm init -y

\$ npm install

\$ cargo tauri dev

## content
- sample1: play with user interactive
- sample2: play with user interactive (but pre-create AudioContext non-interactive)
- sample3: play after 1s timer play == autoplay test

## result
||mac|windows|Linux|
|-|-|-|-|
|sample1|○|○|○|
|sample2|○|○|×|
|sample3|○|○|×|

## note.

- Linux: ubuntu 22.04LTS
    - sudo apt install libdbus-1-dev librust-glib-sys-dev librust-cairo-sys-rs-dev librust-gdk-sys-dev libsoup2.4-dev libwebkit2gtk-4.0-dev  

### author
- marochat