import {
  Ratio
} from '../../helpers';

export default {
  container: {
    flex: 1,
    paddingVertical: Ratio.isIphoneX ? 30 : 0,
    backgroundColor: 'pink',
    alignItems: 'center'
  },

  text: {
    fontSize: 30,
  }
};
