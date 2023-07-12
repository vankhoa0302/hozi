/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { Theme } from "@common/theme";
const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textArea: {
    alignItems: 'center'
  },
  greeting: {
    textTransform: 'uppercase',
  },
  wrapBox: {
    padding: 12,
    backgroundColor: Theme.COLORS.white,
    margin: 20,
    paddingHorizontal: 16,
    paddingBottom: 32,
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
  },
  inputArea: {
    marginHorizontal: 20,
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.color2,
    padding: 6
  },
  textInput: {
    padding: 4,
  },
  navigateText: {
    textAlign: 'center',
    marginVertical: 8,
  },
  btnLoginRegister: {
    borderRadius: 38
  },
  checkoutContainer: {
    flexDirection: 'row',
    borderRadius: 38,
    marginHorizontal: 15,
    justifyContent: 'center',
    marginBottom: 12,
  },
  error: {
    color: Theme.COLORS.danger,
    paddingTop: 4,
    fontSize: 14,
    marginLeft: 20
  },
})