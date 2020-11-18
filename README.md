## Write-media-queries-inside-css-properties

Usage example 
```typescript
    media({
        fontSize: { all: '10px', mb_tablet: '20px', mb_mob: '30px'},
        width: {all: '200px', mb_tablet: '150px', mb_mob: '100px'}
    })
```
Output
```css
        fontSize: 10px;
        width: 200px;

@media screen and (max-width:1300px) {
        fontSize: 20px;
        width: 150px;
}
@media screen and (max-width:700px) {
        fontSize: 30px;
        width: 100px;
}
```
Set breakpoints
```typescript
export interface IBreakpoints {
    all?: CssPropertyValue
    mb_tablet?: CssPropertyValue
    mb_mob?: CssPropertyValue
}
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
```