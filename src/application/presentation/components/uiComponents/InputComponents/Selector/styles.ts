import remToPx from 'application/domain/utils/remToPx'
import { StylesConfig } from 'react-select'

export const selectorStyles: StylesConfig = {
  container: styles => ({
    ...styles,
    width: '100%',
    maxWidth: remToPx(23),
  }),
  control: styles => ({
    ...styles,
    backgroundColor: '#141414',
    borderColor: '#141414',
    cursor: 'pointer',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: '#141414',
      color: '#ffffff',
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
  input: styles => ({ ...styles, color: '#fff' }),
  placeholder: styles => ({
    ...styles,
    color: '#FFFFFF66',
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: '#fff',
  }),
  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
  menuList: styles => ({ ...styles, backgroundColor: '#141414' }),
}
