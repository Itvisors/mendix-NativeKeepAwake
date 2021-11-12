## Native Keep Awake
Keep device awake while the app is visible, running on the foreground

## Features
Prevents device from falling asleep

## Limitations
You need a custom dev app, does not work in the Make It Native app.

## Installation

### Native dependency
With Mendix 9, native dependencies are managed automatically when you build the app. This widget does not work in the Make It Native app.

It uses dependency `@sayem314/react-native-keep-awake` to your native build. This is a fork which is maintained, while the original `react-native-keep-awake` is no longer maintained.

## Installation
Drop the widget on the page that should not close. 

## Configuration
No configuration required. Note that the device will not close even if other pages are opened from that page. Device sleep/lock behaviour will revert to the device settings as soon as the page with the widget on it is closed. (Or the app is killed or backgrounded of course)
