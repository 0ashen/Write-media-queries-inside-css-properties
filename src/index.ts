import { CssProperty, CssPropertyValue, IBreakpoints, IBreakpointsKey, ICssPropertyKey } from './index.interface'

const splitBreakpoints: IBreakpoints = {
    all: '',
    mb_tablet: '',
    mb_mob: ''
}
const breakpoints = {
    all: 'all',
    mb_tablet: 1300,
    mb_mob: 700
}

// каждый в начале ts писал как подазреваю в таком же стиле хуйню
export function media(styles: CssProperty): string {
    let response: string = ''

    let propertiesKeys: ICssPropertyKey[] = Object.keys(styles) as ICssPropertyKey[]
    for (let i: number = 0; i < propertiesKeys.length; i++) {
        const propertyKey: ICssPropertyKey = propertiesKeys[i],
            breakpointsKeys = Object.keys(styles[propertyKey] as IBreakpoints) as IBreakpointsKey[]

        for (let y = 0; y < breakpointsKeys.length; y++) {

            const breakpoints = styles[propertyKey] as IBreakpoints,
                propertyValue = breakpoints[breakpointsKeys[y]] as CssPropertyValue;

            splitBreakpoints[breakpointsKeys[y]] += '\t' + propertyKey + ': ' + propertyValue + ';\n'
        }
    }

    let mediaAliases = Object.keys(splitBreakpoints);
    for (let i = 0; i < mediaAliases.length; i++) {
        let styles = splitBreakpoints[mediaAliases[i] as IBreakpointsKey]
        if (mediaAliases[i] === breakpoints.all) {
            response += styles;
        } else {
            response += `\n@media screen and (max-width:${breakpoints[mediaAliases[i] as IBreakpointsKey]}px) {\n ${styles}}`;
        }
    }
    return response
}


const queryExample: CssProperty = {
    fontSize: { all: '10px', mb_tablet: '20px', mb_mob: '30px'},
    width: {all: '200px', mb_tablet: '150px', mb_mob: '100px'}
}
console.log(media(queryExample))