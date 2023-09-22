import React from "react";
import { Text, FlatList } from "react-native";
import RepositoryItem from "./RespositoryItem";
import useRepositories from "../hooks/useRepositories";

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
};

export default RepositoryList;
