

import * as React from "react";
import * as ReactNative from "react-native";
import * as ExpoStatusBar from "expo-status-bar";
import * as Theme$ExpoRescriptTemplate from "./Theme.bs.js";

var StatusBar = {};

var styles = ReactNative.StyleSheet.create({
      container: {
        backgroundColor: Theme$ExpoRescriptTemplate.Colors.background,
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "center"
      },
      logo: {
        borderRadius: 5,
        height: 40.0,
        width: 40.0
      },
      text: {
        color: Theme$ExpoRescriptTemplate.Colors.text
      },
      subtitle: {
        fontStyle: "italic"
      }
    });

var iconPNG = (require("../assets/logo1.png"));

function App(Props) {
  return React.createElement(ReactNative.View, {
              style: styles.container,
              children: null
            }, React.createElement(ReactNative.Image, {
                  source: iconPNG,
                  style: styles.logo
                }), React.createElement(ReactNative.Text, {
                  children: "Bluenote v0.1.0",
                  style: styles.text
                }), React.createElement(ReactNative.Text, {
                  children: "Something great is coming!",
                  style: ReactNative.StyleSheet.flatten([
                        styles.text,
                        styles.subtitle
                      ])
                }), React.createElement(ExpoStatusBar.StatusBar, {
                  style: "auto"
                }));
}

var make = App;

var $$default = App;

export {
  StatusBar ,
  styles ,
  iconPNG ,
  make ,
  $$default ,
  $$default as default,
  
}
/* styles Not a pure module */
