export type CssPropertyValue = string;

export type IBreakpointsKey = keyof IBreakpoints;
export interface IBreakpoints {
    all?: CssPropertyValue
    mb_tablet?: CssPropertyValue
    mb_mob?: CssPropertyValue
}


// export type ICssPropertyKey = keyof CssProperty;
// export interface CssProperty {
//     alignContent?: IBreakpoints
//     alignItems?: IBreakpoints
//     alignSelf?: IBreakpoints
//     alignmentBaseline?: IBreakpoints
//     all?: IBreakpoints
//     animation?: IBreakpoints
//     animationDelay?: IBreakpoints
//     animationDirection?: IBreakpoints
//     animationDuration?: IBreakpoints
//     animationFillMode?: IBreakpoints
//     animationIterationCount?: IBreakpoints
//     animationName?: IBreakpoints
//     animationPlayState?: IBreakpoints
//     animationTimingFunction?: IBreakpoints
//     backfaceVisibility?: IBreakpoints
//     background?: IBreakpoints
//     backgroundAttachment?: IBreakpoints
//     backgroundClip?: IBreakpoints
//     backgroundColor?: IBreakpoints
//     backgroundImage?: IBreakpoints
//     backgroundOrigin?: IBreakpoints
//     backgroundPosition?: IBreakpoints
//     backgroundPositionX?: IBreakpoints
//     backgroundPositionY?: IBreakpoints
//     backgroundRepeat?: IBreakpoints
//     backgroundSize?: IBreakpoints
//     baselineShift?: IBreakpoints
//     blockSize?: IBreakpoints
//     border?: IBreakpoints
//     borderBlockEnd?: IBreakpoints
//     borderBlockEndColor?: IBreakpoints
//     borderBlockEndStyle?: IBreakpoints
//     borderBlockEndWidth?: IBreakpoints
//     borderBlockStart?: IBreakpoints
//     borderBlockStartColor?: IBreakpoints
//     borderBlockStartStyle?: IBreakpoints
//     borderBlockStartWidth?: IBreakpoints
//     borderBottom?: IBreakpoints
//     borderBottomColor?: IBreakpoints
//     borderBottomLeftRadius?: IBreakpoints
//     borderBottomRightRadius?: IBreakpoints
//     borderBottomStyle?: IBreakpoints
//     borderBottomWidth?: IBreakpoints
//     borderCollapse?: IBreakpoints
//     borderColor?: IBreakpoints
//     borderImage?: IBreakpoints
//     borderImageOutset?: IBreakpoints
//     borderImageRepeat?: IBreakpoints
//     borderImageSlice?: IBreakpoints
//     borderImageSource?: IBreakpoints
//     borderImageWidth?: IBreakpoints
//     borderInlineEnd?: IBreakpoints
//     borderInlineEndColor?: IBreakpoints
//     borderInlineEndStyle?: IBreakpoints
//     borderInlineEndWidth?: IBreakpoints
//     borderInlineStart?: IBreakpoints
//     borderInlineStartColor?: IBreakpoints
//     borderInlineStartStyle?: IBreakpoints
//     borderInlineStartWidth?: IBreakpoints
//     borderLeft?: IBreakpoints
//     borderLeftColor?: IBreakpoints
//     borderLeftStyle?: IBreakpoints
//     borderLeftWidth?: IBreakpoints
//     borderRadius?: IBreakpoints
//     borderRight?: IBreakpoints
//     borderRightColor?: IBreakpoints
//     borderRightStyle?: IBreakpoints
//     borderRightWidth?: IBreakpoints
//     borderSpacing?: IBreakpoints
//     borderStyle?: IBreakpoints
//     borderTop?: IBreakpoints
//     borderTopColor?: IBreakpoints
//     borderTopLeftRadius?: IBreakpoints
//     borderTopRightRadius?: IBreakpoints
//     borderTopStyle?: IBreakpoints
//     borderTopWidth?: IBreakpoints
//     borderWidth?: IBreakpoints
//     bottom?: IBreakpoints
//     boxShadow?: IBreakpoints
//     boxSizing?: IBreakpoints
//     breakAfter?: IBreakpoints
//     breakBefore?: IBreakpoints
//     breakInside?: IBreakpoints
//     captionSide?: IBreakpoints
//     caretColor?: IBreakpoints
//     clear?: IBreakpoints
//     clip?: IBreakpoints
//     clipPath?: IBreakpoints
//     clipRule?: IBreakpoints
//     color?: IBreakpoints
//     colorInterpolation?: IBreakpoints
//     colorInterpolationFilters?: IBreakpoints
//     columnCount?: IBreakpoints
//     columnFill?: IBreakpoints
//     columnGap?: IBreakpoints
//     columnRule?: IBreakpoints
//     columnRuleColor?: IBreakpoints
//     columnRuleStyle?: IBreakpoints
//     columnRuleWidth?: IBreakpoints
//     columnSpan?: IBreakpoints
//     columnWidth?: IBreakpoints
//     columns?: IBreakpoints
//     content?: IBreakpoints
//     counterIncrement?: IBreakpoints
//     counterReset?: IBreakpoints
//     cssFloat?: IBreakpoints
//     cssText?: IBreakpoints
//     cursor?: IBreakpoints
//     direction?: IBreakpoints
//     display?: IBreakpoints
//     dominantBaseline?: IBreakpoints
//     emptyCells?: IBreakpoints
//     fill?: IBreakpoints
//     fillOpacity?: IBreakpoints
//     fillRule?: IBreakpoints
//     filter?: IBreakpoints
//     flex?: IBreakpoints
//     flexBasis?: IBreakpoints
//     flexDirection?: IBreakpoints
//     flexFlow?: IBreakpoints
//     flexGrow?: IBreakpoints
//     flexShrink?: IBreakpoints
//     flexWrap?: IBreakpoints
//     float?: IBreakpoints
//     floodColor?: IBreakpoints
//     floodOpacity?: IBreakpoints
//     font?: IBreakpoints
//     fontFamily?: IBreakpoints
//     fontFeatureSettings?: IBreakpoints
//     fontKerning?: IBreakpoints
//     fontSize?: IBreakpoints
//     fontSizeAdjust?: IBreakpoints
//     fontStretch?: IBreakpoints
//     fontStyle?: IBreakpoints
//     fontSynthesis?: IBreakpoints
//     fontVariant?: IBreakpoints
//     fontVariantCaps?: IBreakpoints
//     fontVariantEastAsian?: IBreakpoints
//     fontVariantLigatures?: IBreakpoints
//     fontVariantNumeric?: IBreakpoints
//     fontVariantPosition?: IBreakpoints
//     fontWeight?: IBreakpoints
//     gap?: IBreakpoints
//     glyphOrientationVertical?: IBreakpoints
//     grid?: IBreakpoints
//     gridArea?: IBreakpoints
//     gridAutoColumns?: IBreakpoints
//     gridAutoFlow?: IBreakpoints
//     gridAutoRows?: IBreakpoints
//     gridColumn?: IBreakpoints
//     gridColumnEnd?: IBreakpoints
//     gridColumnGap?: IBreakpoints
//     gridColumnStart?: IBreakpoints
//     gridGap?: IBreakpoints
//     gridRow?: IBreakpoints
//     gridRowEnd?: IBreakpoints
//     gridRowGap?: IBreakpoints
//     gridRowStart?: IBreakpoints
//     gridTemplate?: IBreakpoints
//     gridTemplateAreas?: IBreakpoints
//     gridTemplateColumns?: IBreakpoints
//     gridTemplateRows?: IBreakpoints
//     height?: IBreakpoints
//     hyphens?: IBreakpoints
//     imageOrientation?: IBreakpoints
//     imageRendering?: IBreakpoints
//     inlineSize?: IBreakpoints
//     justifyContent?: IBreakpoints
//     justifyItems?: IBreakpoints
//     justifySelf?: IBreakpoints
//     left?: IBreakpoints
//     readonly length?: number;
//     letterSpacing?: IBreakpoints
//     lightingColor?: IBreakpoints
//     lineBreak?: IBreakpoints
//     lineHeight?: IBreakpoints
//     listStyle?: IBreakpoints
//     listStyleImage?: IBreakpoints
//     listStylePosition?: IBreakpoints
//     listStyleType?: IBreakpoints
//     margin?: IBreakpoints
//     marginBlockEnd?: IBreakpoints
//     marginBlockStart?: IBreakpoints
//     marginBottom?: IBreakpoints
//     marginInlineEnd?: IBreakpoints
//     marginInlineStart?: IBreakpoints
//     marginLeft?: IBreakpoints
//     marginRight?: IBreakpoints
//     marginTop?: IBreakpoints
//     marker?: IBreakpoints
//     markerEnd?: IBreakpoints
//     markerMid?: IBreakpoints
//     markerStart?: IBreakpoints
//     mask?: IBreakpoints
//     maskComposite?: IBreakpoints
//     maskImage?: IBreakpoints
//     maskPosition?: IBreakpoints
//     maskRepeat?: IBreakpoints
//     maskSize?: IBreakpoints
//     maskType?: IBreakpoints
//     maxBlockSize?: IBreakpoints
//     maxHeight?: IBreakpoints
//     maxInlineSize?: IBreakpoints
//     maxWidth?: IBreakpoints
//     minBlockSize?: IBreakpoints
//     minHeight?: IBreakpoints
//     minInlineSize?: IBreakpoints
//     minWidth?: IBreakpoints
//     objectFit?: IBreakpoints
//     objectPosition?: IBreakpoints
//     opacity?: IBreakpoints
//     order?: IBreakpoints
//     orphans?: IBreakpoints
//     outline?: IBreakpoints
//     outlineColor?: IBreakpoints
//     outlineOffset?: IBreakpoints
//     outlineStyle?: IBreakpoints
//     outlineWidth?: IBreakpoints
//     overflow?: IBreakpoints
//     overflowAnchor?: IBreakpoints
//     overflowWrap?: IBreakpoints
//     overflowX?: IBreakpoints
//     overflowY?: IBreakpoints
//     overscrollBehavior?: IBreakpoints
//     overscrollBehaviorBlock?: IBreakpoints
//     overscrollBehaviorInline?: IBreakpoints
//     overscrollBehaviorX?: IBreakpoints
//     overscrollBehaviorY?: IBreakpoints
//     padding?: IBreakpoints
//     paddingBlockEnd?: IBreakpoints
//     paddingBlockStart?: IBreakpoints
//     paddingBottom?: IBreakpoints
//     paddingInlineEnd?: IBreakpoints
//     paddingInlineStart?: IBreakpoints
//     paddingLeft?: IBreakpoints
//     paddingRight?: IBreakpoints
//     paddingTop?: IBreakpoints
//     pageBreakAfter?: IBreakpoints
//     pageBreakBefore?: IBreakpoints
//     pageBreakInside?: IBreakpoints
//     paintOrder?: IBreakpoints
//     readonly parentRule?: CSSRule | null;
//     perspective?: IBreakpoints
//     perspectiveOrigin?: IBreakpoints
//     placeContent?: IBreakpoints
//     placeItems?: IBreakpoints
//     placeSelf?: IBreakpoints
//     pointerEvents?: IBreakpoints
//     position?: IBreakpoints
//     quotes?: IBreakpoints
//     resize?: IBreakpoints
//     right?: IBreakpoints
//     rotate?: IBreakpoints
//     rowGap?: IBreakpoints
//     rubyAlign?: IBreakpoints
//     rubyPosition?: IBreakpoints
//     scale?: IBreakpoints
//     scrollBehavior?: IBreakpoints
//     shapeRendering?: IBreakpoints
//     stopColor?: IBreakpoints
//     stopOpacity?: IBreakpoints
//     stroke?: IBreakpoints
//     strokeDasharray?: IBreakpoints
//     strokeDashoffset?: IBreakpoints
//     strokeLinecap?: IBreakpoints
//     strokeLinejoin?: IBreakpoints
//     strokeMiterlimit?: IBreakpoints
//     strokeOpacity?: IBreakpoints
//     strokeWidth?: IBreakpoints
//     tabSize?: IBreakpoints
//     tableLayout?: IBreakpoints
//     textAlign?: IBreakpoints
//     textAlignLast?: IBreakpoints
//     textAnchor?: IBreakpoints
//     textCombineUpright?: IBreakpoints
//     textDecoration?: IBreakpoints
//     textDecorationColor?: IBreakpoints
//     textDecorationLine?: IBreakpoints
//     textDecorationStyle?: IBreakpoints
//     textEmphasis?: IBreakpoints
//     textEmphasisColor?: IBreakpoints
//     textEmphasisPosition?: IBreakpoints
//     textEmphasisStyle?: IBreakpoints
//     textIndent?: IBreakpoints
//     textJustify?: IBreakpoints
//     textOrientation?: IBreakpoints
//     textOverflow?: IBreakpoints
//     textRendering?: IBreakpoints
//     textShadow?: IBreakpoints
//     textTransform?: IBreakpoints
//     textUnderlinePosition?: IBreakpoints
//     top?: IBreakpoints
//     touchAction?: IBreakpoints
//     transform?: IBreakpoints
//     transformBox?: IBreakpoints
//     transformOrigin?: IBreakpoints
//     transformStyle?: IBreakpoints
//     transition?: IBreakpoints
//     transitionDelay?: IBreakpoints
//     transitionDuration?: IBreakpoints
//     transitionProperty?: IBreakpoints
//     transitionTimingFunction?: IBreakpoints
//     translate?: IBreakpoints
//     unicodeBidi?: IBreakpoints
//     userSelect?: IBreakpoints
//     verticalAlign?: IBreakpoints
//     visibility?: IBreakpoints
//     /** @deprecated */
//     webkitAlignContent?: IBreakpoints
//     /** @deprecated */
//     webkitAlignItems?: IBreakpoints
//     /** @deprecated */
//     webkitAlignSelf?: IBreakpoints
//     /** @deprecated */
//     webkitAnimation?: IBreakpoints
//     /** @deprecated */
//     webkitAnimationDelay?: IBreakpoints
//     /** @deprecated */
//     webkitAnimationDirection?: IBreakpoints
//     /** @deprecated */
//     webkitAnimationDuration?: IBreakpoints
//     /** @deprecated */
//     webkitAnimationFillMode?: IBreakpoints
//     /** @deprecated */
//     webkitAnimationIterationCount?: IBreakpoints
//     /** @deprecated */
//     webkitAnimationName?: IBreakpoints
//     /** @deprecated */
//     webkitAnimationPlayState?: IBreakpoints
//     /** @deprecated */
//     webkitAnimationTimingFunction?: IBreakpoints
//     /** @deprecated */
//     webkitAppearance?: IBreakpoints
//     /** @deprecated */
//     webkitBackfaceVisibility?: IBreakpoints
//     /** @deprecated */
//     webkitBackgroundClip?: IBreakpoints
//     /** @deprecated */
//     webkitBackgroundOrigin?: IBreakpoints
//     /** @deprecated */
//     webkitBackgroundSize?: IBreakpoints
//     /** @deprecated */
//     webkitBorderBottomLeftRadius?: IBreakpoints
//     /** @deprecated */
//     webkitBorderBottomRightRadius?: IBreakpoints
//     /** @deprecated */
//     webkitBorderRadius?: IBreakpoints
//     /** @deprecated */
//     webkitBorderTopLeftRadius?: IBreakpoints
//     /** @deprecated */
//     webkitBorderTopRightRadius?: IBreakpoints
//     /** @deprecated */
//     webkitBoxAlign?: IBreakpoints
//     /** @deprecated */
//     webkitBoxFlex?: IBreakpoints
//     /** @deprecated */
//     webkitBoxOrdinalGroup?: IBreakpoints
//     /** @deprecated */
//     webkitBoxOrient?: IBreakpoints
//     /** @deprecated */
//     webkitBoxPack?: IBreakpoints
//     /** @deprecated */
//     webkitBoxShadow?: IBreakpoints
//     /** @deprecated */
//     webkitBoxSizing?: IBreakpoints
//     /** @deprecated */
//     webkitFilter?: IBreakpoints
//     /** @deprecated */
//     webkitFlex?: IBreakpoints
//     /** @deprecated */
//     webkitFlexBasis?: IBreakpoints
//     /** @deprecated */
//     webkitFlexDirection?: IBreakpoints
//     /** @deprecated */
//     webkitFlexFlow?: IBreakpoints
//     /** @deprecated */
//     webkitFlexGrow?: IBreakpoints
//     /** @deprecated */
//     webkitFlexShrink?: IBreakpoints
//     /** @deprecated */
//     webkitFlexWrap?: IBreakpoints
//     /** @deprecated */
//     webkitJustifyContent?: IBreakpoints
//     webkitLineClamp?: IBreakpoints
//     /** @deprecated */
//     webkitMask?: IBreakpoints
//     /** @deprecated */
//     webkitMaskBoxImage?: IBreakpoints
//     /** @deprecated */
//     webkitMaskBoxImageOutset?: IBreakpoints
//     /** @deprecated */
//     webkitMaskBoxImageRepeat?: IBreakpoints
//     /** @deprecated */
//     webkitMaskBoxImageSlice?: IBreakpoints
//     /** @deprecated */
//     webkitMaskBoxImageSource?: IBreakpoints
//     /** @deprecated */
//     webkitMaskBoxImageWidth?: IBreakpoints
//     /** @deprecated */
//     webkitMaskClip?: IBreakpoints
//     /** @deprecated */
//     webkitMaskComposite?: IBreakpoints
//     /** @deprecated */
//     webkitMaskImage?: IBreakpoints
//     /** @deprecated */
//     webkitMaskOrigin?: IBreakpoints
//     /** @deprecated */
//     webkitMaskPosition?: IBreakpoints
//     /** @deprecated */
//     webkitMaskRepeat?: IBreakpoints
//     /** @deprecated */
//     webkitMaskSize?: IBreakpoints
//     /** @deprecated */
//     webkitOrder?: IBreakpoints
//     /** @deprecated */
//     webkitPerspective?: IBreakpoints
//     /** @deprecated */
//     webkitPerspectiveOrigin?: IBreakpoints
//     webkitTapHighlightColor?: IBreakpoints
//     /** @deprecated */
//     webkitTextFillColor?: IBreakpoints
//     /** @deprecated */
//     webkitTextSizeAdjust?: IBreakpoints
//     /** @deprecated */
//     webkitTextStroke?: IBreakpoints
//     /** @deprecated */
//     webkitTextStrokeColor?: IBreakpoints
//     /** @deprecated */
//     webkitTextStrokeWidth?: IBreakpoints
//     /** @deprecated */
//     webkitTransform?: IBreakpoints
//     /** @deprecated */
//     webkitTransformOrigin?: IBreakpoints
//     /** @deprecated */
//     webkitTransformStyle?: IBreakpoints
//     /** @deprecated */
//     webkitTransition?: IBreakpoints
//     /** @deprecated */
//     webkitTransitionDelay?: IBreakpoints
//     /** @deprecated */
//     webkitTransitionDuration?: IBreakpoints
//     /** @deprecated */
//     webkitTransitionProperty?: IBreakpoints
//     /** @deprecated */
//     webkitTransitionTimingFunction?: IBreakpoints
//     /** @deprecated */
//     webkitUserSelect?: IBreakpoints
//     whiteSpace?: IBreakpoints
//     widows?: IBreakpoints
//     width?: IBreakpoints
//     willChange?: IBreakpoints
//     wordBreak?: IBreakpoints
//     wordSpacing?: IBreakpoints
//     wordWrap?: IBreakpoints
//     writingMode?: IBreakpoints
//     zIndex?: IBreakpoints
//     /** @deprecated */
//     zoom?: IBreakpoints
// }

