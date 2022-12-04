open ReactNative
open Theme

module StatusBar = {
  @module("expo-status-bar") @react.component
  external make: (~style: string) => React.element = "StatusBar"
}

let styles = {
  open Style

  StyleSheet.create({
    "container": viewStyle(
      ~flex=1.,
      ~display=#flex,
      ~backgroundColor=Colors.background,
      ~alignItems=#center,
      ~justifyContent=#center,
      (),
    ),
    "logo": imageStyle(~width=dp(40.0), ~height=dp(40.0), ~borderRadius=5., ()),
    "text": textStyle(~color=Colors.text, ~fontSize=16., ~marginTop=dp(5.), ()),
    "subtitle": textStyle(~fontStyle=#italic, ()),
  })
}

let iconPNG: ReactNative.Image.Source.t = %raw(`require("../assets/logo1.png")`)

@react.component
let make = () => {
  <View style={styles["container"]}>
    <Image source={iconPNG} style={styles["logo"]} />
    <Text style={styles["text"]}> {`Bluenote v0.1.0`->React.string} </Text>
    <Text style={[styles["text"], styles["subtitle"]]->StyleSheet.flatten}>
      {`Something great is coming!`->React.string}
    </Text>
    <StatusBar style="auto" />
  </View>
}

let default = make
