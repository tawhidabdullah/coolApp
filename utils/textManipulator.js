export const setFontType = type => {
  switch (type) {
    case 'black':
      return 'raleBlack';
    case 'bold':
      return 'raleBold';
    case 'semi-bold':
      return 'raleSemiBold';
    case 'medium':
      return 'raleMedium';
    default:
      return 'raleRegular';
  }
};
