import {
  Ratio
} from '../../helpers';

export default {
  container: {
    flex: 1,
    paddingVertical: Ratio.isIphoneX ? 30 : 0,
    alignItems: 'center'
  },

  text: {
    fontSize: 30,
  },

  textInput: {
    height: 50,
    width: Ratio.screenWidth - 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'red'
  },

  button: {
    height: 40,
    width: 100,
    padding: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};
