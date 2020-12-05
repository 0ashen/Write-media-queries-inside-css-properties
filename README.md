## Write-media-queries-inside-css-properties

Alpha version

Usage example 
```typescript
    media({
        fontSize: { all: '10px', tablet: '20px', mobile: '30px'},
        width: {all: '200px', tablet: '150px', mobile: '100px'}
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
    tablet?: CssPropertyValue
    mobile?: CssPropertyValue
}
const splitBreakpoints: IBreakpoints = {
    all: '',
    tablet: '',
    mobile: ''
}
const breakpoints = {
    all: 'all',
    tablet: 1300,
    mobile: 700
}
```
