import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
    marginTop: 48,
  },
  incidentProperty: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 24,
    color: "#41414d",
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380",
  },
  contectBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },
  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 30,
    color: "#13131a",
  },
  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
  },
  actionButtonText: {
    color: "#FFF",
    textAlign: "center",
  },
});
