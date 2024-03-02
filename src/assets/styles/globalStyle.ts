import {StyleSheet} from 'react-native';
import {FONTFAMILY} from '../../theme/theme';

export const global = StyleSheet.create({
  chatBtn: {
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 60,
    shadowColor: '#085f5666',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  chatText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: FONTFAMILY.inter_bold,
  },
});
