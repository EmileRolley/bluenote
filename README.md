<div align="center">
  <h3 align="center">
	<big>Bluenote</big> (WIP)
  </h3>
  <p align="center">
   <a href="https://github.com/EmileRolley/bluenote/blob/main/docs"><strong>Explore the docs »</strong></a>
   <br/>
   <a href="https://github.com/EmileRolley/bluenote/issues">Report Bug</a>
   •
   <a href="https://github.com/EmileRolley/bluenote/blob/master/CONTRIBUTING.md">Contribute</a>
  </p>

  Bluenote is simply the best companion app to get in your next jam session!
</div>

## The task

The goal of the app is to help finding the tone of a music piece while
experimenting in jam sessions by inferring it from a given set of notes sorted
by importance.

The protocol is the following:
1. The player tries several notes on top of the music
2. until they find several notes which felt and sound _good_ -- most probably the
   tonic and the dominant.
3. Then, the app infers the potential tone and provides the corresponding key
   signatures along with the main chords.
4. The player can give a feedback by precising which notes _are in_ or not.
5. Repeat 1-4. until a unique tone matches the set of notes.

## Build

The project is based on the following techs/dependencies:
* [ReScript](https://rescript-lang.org)
* [Expo](https://expo.dev/)
* [`rescript-react-native`](https://rescript-react-native.github.io/)
* [`yarn`](https://yarnpkg.com/)

To run the app in local:

```
# Compiles ReScript files to JS -- in watching mode.
yarn res:watch

# Start Expo
yarn start
```

> You can run the app on your smartphone by using [Expo Go](https://expo.dev/expo-go).
>
> **NOTE: the project has only been tested with the Expo Go app with an android
> phone.**
