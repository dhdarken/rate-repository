import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RespositoryItemHeader = (props) => (
  <View style={{ flexDirection: "row" }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>

    <View
      style={{
        flexDirection: "column",
        flex: 1,
        marginBottom: 10,
      }}
    >
      <StyledText style={styles.fullname} fontWeigh="bold">
        {props.fullname}
      </StyledText>
      <StyledText style={styles.fullname} color={"secondary"}>
        {props.description}
      </StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
    </View>
  </View>
);

const RepositoryItm = (props) => (
  <View key={props.id} style={styles.container}>
    <RespositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "orange",
      default: "purple",
    }),
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 4,
  },
  fullname: {
    alignSelf: "center",
  },

  image: {
    width: 58,
    height: 58,
    margin: "auto",
    borderRadius: 4,
  },
});

export default RepositoryItm;
