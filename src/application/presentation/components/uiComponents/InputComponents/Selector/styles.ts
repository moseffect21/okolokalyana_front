import remToPx from 'application/domain/utils/remToPx'
import { StylesConfig } from 'react-select'

export const selectorStyles: StylesConfig = {
  container: styles => ({ ...styles, width: '100%', maxWidth: remToPx(23) }),
  control: styles => ({
    ...styles,
    backgroundColor: '#141414',
    borderColor: '#141414',
    fontSize: remToPx(1.3),
    cursor: 'pointer',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: '#141414',
      color: '#ffffff',
      fontSize: remToPx(1.3),
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#212121',
      },

      ':active': {
        ...styles[':active'],
        backgroundColor: '',
      },
    }
  },
  input: styles => ({ ...styles, fontSize: remToPx(1.3), color: '#fff' }),
  placeholder: styles => ({ ...styles, fontSize: remToPx(1.3), color: '#FFFFFF66' }),
  singleValue: (styles, { data }) => ({ ...styles, fontSize: remToPx(1.3), color: '#fff' }),
  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
  menuList: styles => ({ ...styles, backgroundColor: '#141414' }),
}
