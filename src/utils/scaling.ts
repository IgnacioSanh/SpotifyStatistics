import { Dimensions } from 'react-native';

const { width: wWidth, height: wHeight } = Dimensions.get('window');

// Guidelines based on standard ~5'' screen mobile device
const GUIDELINE_BASE_WIDTH = 350;
const GUIDELINE_BASE_HEIGHT = 680;

// Linear horizontal based scaling
export const horizontalScale = (size: number) =>
  (wWidth / GUIDELINE_BASE_WIDTH) * size;

// Linear vertical based scaling
export const verticalScale = (size: number) =>
  (wHeight / GUIDELINE_BASE_HEIGHT) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
