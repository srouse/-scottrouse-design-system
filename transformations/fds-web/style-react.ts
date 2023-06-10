/* eslint-disable */
import { SFRProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * sfr
 * Function for dynamically creating and auto-completing
 * sfr design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export default function sfr(
  dsysStyles: SFRProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--sfr-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--sfr-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--sfr-${entry[0]}`] = `var( --sfr-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
