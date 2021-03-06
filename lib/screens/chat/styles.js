import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 75,
  },
  backBtn: {
    backgroundColor: COLORS.black3,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  peerInfos: {
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userProfileImage: {
    height: 34,
    width: 34,
    borderRadius: 75,
    marginRight: 16,
  },
  onlineItem: {
    position: "absolute",
    bottom: 0,
    right: 8,
    height: 16,
    width: 16,
    backgroundColor: COLORS.online,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  peerFullName: {
    fontSize: 16,
    fontWeight: "600",
  },
  isOnlineText: {
    fontSize: 13,
    color: COLORS.black65,
  },
  dashLine: {
    width: "100%",
    height: 1,
    marginTop: 24,
  },
  sendMsgBar: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center",
    height: 83,
    width: "100%",
    backgroundColor: COLORS.white,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    elevation: 30,
    paddingHorizontal: 55,
    paddingVertical: 32
  },
  inputText: {
    flex:1,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 25,
    height: 44,
    backgroundColor: COLORS.black3,
    paddingHorizontal: 26,
    paddingVertical: 13,
    marginHorizontal: 20
  },
  flatChatList: {
    marginHorizontal: 55
  },
  peerChatImage: {
    height: 52,
    width: 52,
    borderRadius: 75,
    marginRight: 18,
  },
});
