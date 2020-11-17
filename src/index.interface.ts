export interface BreakpointsKey {
    mb_all: string
    mb_tablet?: string
    mb_mob?: string
}

export enum BreakpointsValue {
    mb_all = 'all',
    mb_tablet = '1300px',
    mb_mob = '700px'
}

export interface CssQuery {
    alignContent?: BreakpointsKey
    alignItems?: BreakpointsKey
    alignSelf?: BreakpointsKey
    alignmentBaseline?: BreakpointsKey
    all?: BreakpointsKey
    animation?: BreakpointsKey
    animationDelay?: BreakpointsKey
    animationDirection?: BreakpointsKey
    animationDuration?: BreakpointsKey
    animationFillMode?: BreakpointsKey
    animationIterationCount?: BreakpointsKey
    animationName?: BreakpointsKey
    animationPlayState?: BreakpointsKey
    animationTimingFunction?: BreakpointsKey
    backfaceVisibility?: BreakpointsKey
    background?: BreakpointsKey
    backgroundAttachment?: BreakpointsKey
    backgroundClip?: BreakpointsKey
    backgroundColor?: BreakpointsKey
    backgroundImage?: BreakpointsKey
    backgroundOrigin?: BreakpointsKey
    backgroundPosition?: BreakpointsKey
    backgroundPositionX?: BreakpointsKey
    backgroundPositionY?: BreakpointsKey
    backgroundRepeat?: BreakpointsKey
    backgroundSize?: BreakpointsKey
    baselineShift?: BreakpointsKey
    blockSize?: BreakpointsKey
    border?: BreakpointsKey
    borderBlockEnd?: BreakpointsKey
    borderBlockEndColor?: BreakpointsKey
    borderBlockEndStyle?: BreakpointsKey
    borderBlockEndWidth?: BreakpointsKey
    borderBlockStart?: BreakpointsKey
    borderBlockStartColor?: BreakpointsKey
    borderBlockStartStyle?: BreakpointsKey
    borderBlockStartWidth?: BreakpointsKey
    borderBottom?: BreakpointsKey
    borderBottomColor?: BreakpointsKey
    borderBottomLeftRadius?: BreakpointsKey
    borderBottomRightRadius?: BreakpointsKey
    borderBottomStyle?: BreakpointsKey
    borderBottomWidth?: BreakpointsKey
    borderCollapse?: BreakpointsKey
    borderColor?: BreakpointsKey
    borderImage?: BreakpointsKey
    borderImageOutset?: BreakpointsKey
    borderImageRepeat?: BreakpointsKey
    borderImageSlice?: BreakpointsKey
    borderImageSource?: BreakpointsKey
    borderImageWidth?: BreakpointsKey
    borderInlineEnd?: BreakpointsKey
    borderInlineEndColor?: BreakpointsKey
    borderInlineEndStyle?: BreakpointsKey
    borderInlineEndWidth?: BreakpointsKey
    borderInlineStart?: BreakpointsKey
    borderInlineStartColor?: BreakpointsKey
    borderInlineStartStyle?: BreakpointsKey
    borderInlineStartWidth?: BreakpointsKey
    borderLeft?: BreakpointsKey
    borderLeftColor?: BreakpointsKey
    borderLeftStyle?: BreakpointsKey
    borderLeftWidth?: BreakpointsKey
    borderRadius?: BreakpointsKey
    borderRight?: BreakpointsKey
    borderRightColor?: BreakpointsKey
    borderRightStyle?: BreakpointsKey
    borderRightWidth?: BreakpointsKey
    borderSpacing?: BreakpointsKey
    borderStyle?: BreakpointsKey
    borderTop?: BreakpointsKey
    borderTopColor?: BreakpointsKey
    borderTopLeftRadius?: BreakpointsKey
    borderTopRightRadius?: BreakpointsKey
    borderTopStyle?: BreakpointsKey
    borderTopWidth?: BreakpointsKey
    borderWidth?: BreakpointsKey
    bottom?: BreakpointsKey
    boxShadow?: BreakpointsKey
    boxSizing?: BreakpointsKey
    breakAfter?: BreakpointsKey
    breakBefore?: BreakpointsKey
    breakInside?: BreakpointsKey
    captionSide?: BreakpointsKey
    caretColor?: BreakpointsKey
    clear?: BreakpointsKey
    clip?: BreakpointsKey
    clipPath?: BreakpointsKey
    clipRule?: BreakpointsKey
    color?: BreakpointsKey
    colorInterpolation?: BreakpointsKey
    colorInterpolationFilters?: BreakpointsKey
    columnCount?: BreakpointsKey
    columnFill?: BreakpointsKey
    columnGap?: BreakpointsKey
    columnRule?: BreakpointsKey
    columnRuleColor?: BreakpointsKey
    columnRuleStyle?: BreakpointsKey
    columnRuleWidth?: BreakpointsKey
    columnSpan?: BreakpointsKey
    columnWidth?: BreakpointsKey
    columns?: BreakpointsKey
    content?: BreakpointsKey
    counterIncrement?: BreakpointsKey
    counterReset?: BreakpointsKey
    cssFloat?: BreakpointsKey
    cssText?: BreakpointsKey
    cursor?: BreakpointsKey
    direction?: BreakpointsKey
    display?: BreakpointsKey
    dominantBaseline?: BreakpointsKey
    emptyCells?: BreakpointsKey
    fill?: BreakpointsKey
    fillOpacity?: BreakpointsKey
    fillRule?: BreakpointsKey
    filter?: BreakpointsKey
    flex?: BreakpointsKey
    flexBasis?: BreakpointsKey
    flexDirection?: BreakpointsKey
    flexFlow?: BreakpointsKey
    flexGrow?: BreakpointsKey
    flexShrink?: BreakpointsKey
    flexWrap?: BreakpointsKey
    float?: BreakpointsKey
    floodColor?: BreakpointsKey
    floodOpacity?: BreakpointsKey
    font?: BreakpointsKey
    fontFamily?: BreakpointsKey
    fontFeatureSettings?: BreakpointsKey
    fontKerning?: BreakpointsKey
    fontSize?: BreakpointsKey
    fontSizeAdjust?: BreakpointsKey
    fontStretch?: BreakpointsKey
    fontStyle?: BreakpointsKey
    fontSynthesis?: BreakpointsKey
    fontVariant?: BreakpointsKey
    fontVariantCaps?: BreakpointsKey
    fontVariantEastAsian?: BreakpointsKey
    fontVariantLigatures?: BreakpointsKey
    fontVariantNumeric?: BreakpointsKey
    fontVariantPosition?: BreakpointsKey
    fontWeight?: BreakpointsKey
    gap?: BreakpointsKey
    glyphOrientationVertical?: BreakpointsKey
    grid?: BreakpointsKey
    gridArea?: BreakpointsKey
    gridAutoColumns?: BreakpointsKey
    gridAutoFlow?: BreakpointsKey
    gridAutoRows?: BreakpointsKey
    gridColumn?: BreakpointsKey
    gridColumnEnd?: BreakpointsKey
    gridColumnGap?: BreakpointsKey
    gridColumnStart?: BreakpointsKey
    gridGap?: BreakpointsKey
    gridRow?: BreakpointsKey
    gridRowEnd?: BreakpointsKey
    gridRowGap?: BreakpointsKey
    gridRowStart?: BreakpointsKey
    gridTemplate?: BreakpointsKey
    gridTemplateAreas?: BreakpointsKey
    gridTemplateColumns?: BreakpointsKey
    gridTemplateRows?: BreakpointsKey
    height?: BreakpointsKey
    hyphens?: BreakpointsKey
    imageOrientation?: BreakpointsKey
    imageRendering?: BreakpointsKey
    inlineSize?: BreakpointsKey
    justifyContent?: BreakpointsKey
    justifyItems?: BreakpointsKey
    justifySelf?: BreakpointsKey
    left?: BreakpointsKey
    readonly length?: number;
    letterSpacing?: BreakpointsKey
    lightingColor?: BreakpointsKey
    lineBreak?: BreakpointsKey
    lineHeight?: BreakpointsKey
    listStyle?: BreakpointsKey
    listStyleImage?: BreakpointsKey
    listStylePosition?: BreakpointsKey
    listStyleType?: BreakpointsKey
    margin?: BreakpointsKey
    marginBlockEnd?: BreakpointsKey
    marginBlockStart?: BreakpointsKey
    marginBottom?: BreakpointsKey
    marginInlineEnd?: BreakpointsKey
    marginInlineStart?: BreakpointsKey
    marginLeft?: BreakpointsKey
    marginRight?: BreakpointsKey
    marginTop?: BreakpointsKey
    marker?: BreakpointsKey
    markerEnd?: BreakpointsKey
    markerMid?: BreakpointsKey
    markerStart?: BreakpointsKey
    mask?: BreakpointsKey
    maskComposite?: BreakpointsKey
    maskImage?: BreakpointsKey
    maskPosition?: BreakpointsKey
    maskRepeat?: BreakpointsKey
    maskSize?: BreakpointsKey
    maskType?: BreakpointsKey
    maxBlockSize?: BreakpointsKey
    maxHeight?: BreakpointsKey
    maxInlineSize?: BreakpointsKey
    maxWidth?: BreakpointsKey
    minBlockSize?: BreakpointsKey
    minHeight?: BreakpointsKey
    minInlineSize?: BreakpointsKey
    minWidth?: BreakpointsKey
    objectFit?: BreakpointsKey
    objectPosition?: BreakpointsKey
    opacity?: BreakpointsKey
    order?: BreakpointsKey
    orphans?: BreakpointsKey
    outline?: BreakpointsKey
    outlineColor?: BreakpointsKey
    outlineOffset?: BreakpointsKey
    outlineStyle?: BreakpointsKey
    outlineWidth?: BreakpointsKey
    overflow?: BreakpointsKey
    overflowAnchor?: BreakpointsKey
    overflowWrap?: BreakpointsKey
    overflowX?: BreakpointsKey
    overflowY?: BreakpointsKey
    overscrollBehavior?: BreakpointsKey
    overscrollBehaviorBlock?: BreakpointsKey
    overscrollBehaviorInline?: BreakpointsKey
    overscrollBehaviorX?: BreakpointsKey
    overscrollBehaviorY?: BreakpointsKey
    padding?: BreakpointsKey
    paddingBlockEnd?: BreakpointsKey
    paddingBlockStart?: BreakpointsKey
    paddingBottom?: BreakpointsKey
    paddingInlineEnd?: BreakpointsKey
    paddingInlineStart?: BreakpointsKey
    paddingLeft?: BreakpointsKey
    paddingRight?: BreakpointsKey
    paddingTop?: BreakpointsKey
    pageBreakAfter?: BreakpointsKey
    pageBreakBefore?: BreakpointsKey
    pageBreakInside?: BreakpointsKey
    paintOrder?: BreakpointsKey
    readonly parentRule?: CSSRule | null;
    perspective?: BreakpointsKey
    perspectiveOrigin?: BreakpointsKey
    placeContent?: BreakpointsKey
    placeItems?: BreakpointsKey
    placeSelf?: BreakpointsKey
    pointerEvents?: BreakpointsKey
    position?: BreakpointsKey
    quotes?: BreakpointsKey
    resize?: BreakpointsKey
    right?: BreakpointsKey
    rotate?: BreakpointsKey
    rowGap?: BreakpointsKey
    rubyAlign?: BreakpointsKey
    rubyPosition?: BreakpointsKey
    scale?: BreakpointsKey
    scrollBehavior?: BreakpointsKey
    shapeRendering?: BreakpointsKey
    stopColor?: BreakpointsKey
    stopOpacity?: BreakpointsKey
    stroke?: BreakpointsKey
    strokeDasharray?: BreakpointsKey
    strokeDashoffset?: BreakpointsKey
    strokeLinecap?: BreakpointsKey
    strokeLinejoin?: BreakpointsKey
    strokeMiterlimit?: BreakpointsKey
    strokeOpacity?: BreakpointsKey
    strokeWidth?: BreakpointsKey
    tabSize?: BreakpointsKey
    tableLayout?: BreakpointsKey
    textAlign?: BreakpointsKey
    textAlignLast?: BreakpointsKey
    textAnchor?: BreakpointsKey
    textCombineUpright?: BreakpointsKey
    textDecoration?: BreakpointsKey
    textDecorationColor?: BreakpointsKey
    textDecorationLine?: BreakpointsKey
    textDecorationStyle?: BreakpointsKey
    textEmphasis?: BreakpointsKey
    textEmphasisColor?: BreakpointsKey
    textEmphasisPosition?: BreakpointsKey
    textEmphasisStyle?: BreakpointsKey
    textIndent?: BreakpointsKey
    textJustify?: BreakpointsKey
    textOrientation?: BreakpointsKey
    textOverflow?: BreakpointsKey
    textRendering?: BreakpointsKey
    textShadow?: BreakpointsKey
    textTransform?: BreakpointsKey
    textUnderlinePosition?: BreakpointsKey
    top?: BreakpointsKey
    touchAction?: BreakpointsKey
    transform?: BreakpointsKey
    transformBox?: BreakpointsKey
    transformOrigin?: BreakpointsKey
    transformStyle?: BreakpointsKey
    transition?: BreakpointsKey
    transitionDelay?: BreakpointsKey
    transitionDuration?: BreakpointsKey
    transitionProperty?: BreakpointsKey
    transitionTimingFunction?: BreakpointsKey
    translate?: BreakpointsKey
    unicodeBidi?: BreakpointsKey
    userSelect?: BreakpointsKey
    verticalAlign?: BreakpointsKey
    visibility?: BreakpointsKey
    /** @deprecated */
    webkitAlignContent?: BreakpointsKey
    /** @deprecated */
    webkitAlignItems?: BreakpointsKey
    /** @deprecated */
    webkitAlignSelf?: BreakpointsKey
    /** @deprecated */
    webkitAnimation?: BreakpointsKey
    /** @deprecated */
    webkitAnimationDelay?: BreakpointsKey
    /** @deprecated */
    webkitAnimationDirection?: BreakpointsKey
    /** @deprecated */
    webkitAnimationDuration?: BreakpointsKey
    /** @deprecated */
    webkitAnimationFillMode?: BreakpointsKey
    /** @deprecated */
    webkitAnimationIterationCount?: BreakpointsKey
    /** @deprecated */
    webkitAnimationName?: BreakpointsKey
    /** @deprecated */
    webkitAnimationPlayState?: BreakpointsKey
    /** @deprecated */
    webkitAnimationTimingFunction?: BreakpointsKey
    /** @deprecated */
    webkitAppearance?: BreakpointsKey
    /** @deprecated */
    webkitBackfaceVisibility?: BreakpointsKey
    /** @deprecated */
    webkitBackgroundClip?: BreakpointsKey
    /** @deprecated */
    webkitBackgroundOrigin?: BreakpointsKey
    /** @deprecated */
    webkitBackgroundSize?: BreakpointsKey
    /** @deprecated */
    webkitBorderBottomLeftRadius?: BreakpointsKey
    /** @deprecated */
    webkitBorderBottomRightRadius?: BreakpointsKey
    /** @deprecated */
    webkitBorderRadius?: BreakpointsKey
    /** @deprecated */
    webkitBorderTopLeftRadius?: BreakpointsKey
    /** @deprecated */
    webkitBorderTopRightRadius?: BreakpointsKey
    /** @deprecated */
    webkitBoxAlign?: BreakpointsKey
    /** @deprecated */
    webkitBoxFlex?: BreakpointsKey
    /** @deprecated */
    webkitBoxOrdinalGroup?: BreakpointsKey
    /** @deprecated */
    webkitBoxOrient?: BreakpointsKey
    /** @deprecated */
    webkitBoxPack?: BreakpointsKey
    /** @deprecated */
    webkitBoxShadow?: BreakpointsKey
    /** @deprecated */
    webkitBoxSizing?: BreakpointsKey
    /** @deprecated */
    webkitFilter?: BreakpointsKey
    /** @deprecated */
    webkitFlex?: BreakpointsKey
    /** @deprecated */
    webkitFlexBasis?: BreakpointsKey
    /** @deprecated */
    webkitFlexDirection?: BreakpointsKey
    /** @deprecated */
    webkitFlexFlow?: BreakpointsKey
    /** @deprecated */
    webkitFlexGrow?: BreakpointsKey
    /** @deprecated */
    webkitFlexShrink?: BreakpointsKey
    /** @deprecated */
    webkitFlexWrap?: BreakpointsKey
    /** @deprecated */
    webkitJustifyContent?: BreakpointsKey
    webkitLineClamp?: BreakpointsKey
    /** @deprecated */
    webkitMask?: BreakpointsKey
    /** @deprecated */
    webkitMaskBoxImage?: BreakpointsKey
    /** @deprecated */
    webkitMaskBoxImageOutset?: BreakpointsKey
    /** @deprecated */
    webkitMaskBoxImageRepeat?: BreakpointsKey
    /** @deprecated */
    webkitMaskBoxImageSlice?: BreakpointsKey
    /** @deprecated */
    webkitMaskBoxImageSource?: BreakpointsKey
    /** @deprecated */
    webkitMaskBoxImageWidth?: BreakpointsKey
    /** @deprecated */
    webkitMaskClip?: BreakpointsKey
    /** @deprecated */
    webkitMaskComposite?: BreakpointsKey
    /** @deprecated */
    webkitMaskImage?: BreakpointsKey
    /** @deprecated */
    webkitMaskOrigin?: BreakpointsKey
    /** @deprecated */
    webkitMaskPosition?: BreakpointsKey
    /** @deprecated */
    webkitMaskRepeat?: BreakpointsKey
    /** @deprecated */
    webkitMaskSize?: BreakpointsKey
    /** @deprecated */
    webkitOrder?: BreakpointsKey
    /** @deprecated */
    webkitPerspective?: BreakpointsKey
    /** @deprecated */
    webkitPerspectiveOrigin?: BreakpointsKey
    webkitTapHighlightColor?: BreakpointsKey
    /** @deprecated */
    webkitTextFillColor?: BreakpointsKey
    /** @deprecated */
    webkitTextSizeAdjust?: BreakpointsKey
    /** @deprecated */
    webkitTextStroke?: BreakpointsKey
    /** @deprecated */
    webkitTextStrokeColor?: BreakpointsKey
    /** @deprecated */
    webkitTextStrokeWidth?: BreakpointsKey
    /** @deprecated */
    webkitTransform?: BreakpointsKey
    /** @deprecated */
    webkitTransformOrigin?: BreakpointsKey
    /** @deprecated */
    webkitTransformStyle?: BreakpointsKey
    /** @deprecated */
    webkitTransition?: BreakpointsKey
    /** @deprecated */
    webkitTransitionDelay?: BreakpointsKey
    /** @deprecated */
    webkitTransitionDuration?: BreakpointsKey
    /** @deprecated */
    webkitTransitionProperty?: BreakpointsKey
    /** @deprecated */
    webkitTransitionTimingFunction?: BreakpointsKey
    /** @deprecated */
    webkitUserSelect?: BreakpointsKey
    whiteSpace?: BreakpointsKey
    widows?: BreakpointsKey
    width?: BreakpointsKey
    willChange?: BreakpointsKey
    wordBreak?: BreakpointsKey
    wordSpacing?: BreakpointsKey
    wordWrap?: BreakpointsKey
    writingMode?: BreakpointsKey
    zIndex?: BreakpointsKey
    /** @deprecated */
    zoom?: BreakpointsKey
}

