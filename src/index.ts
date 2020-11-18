import { CssPropertyValue, IBreakpoints, IBreakpointsKey } from './index.interface'
import * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}
export type ICssPropertyKey = keyof Style;

export const splitBreakpoints: IBreakpoints = {
    all: '',
    mb_tablet: '',
    mb_mob: ''
}

// каждый в начале ts писал как подазреваю в таком же стиле хуйню
function media(styles: Style): string {
    let response: string = ''

    let propertiesKeys: ICssPropertyKey[] = Object.keys(styles) as ICssPropertyKey[]

    for (let i: number = 0; i < propertiesKeys.length; i++) {

        const propertyKey: ICssPropertyKey = propertiesKeys[i],
            breakpointsKeys = Object.keys(styles[propertyKey] as IBreakpoints) as IBreakpointsKey[]

        for (let y = 0; y < breakpointsKeys.length; y++) {

            const breakpoints = styles[propertyKey] as IBreakpoints,
                propertyValue = breakpoints[breakpointsKeys[y]] as CssPropertyValue;

            splitBreakpoints[breakpointsKeys[y]] += propertyKey + ':' + propertyValue + '; \n '
        }
    }

    console.log(response, splitBreakpoints)

    return response
}


const queryExample: Style = {
    'display':
}

console.log(media(queryExample))
