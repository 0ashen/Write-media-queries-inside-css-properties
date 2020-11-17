import { CssQuery } from './index.interface'

function media(style: CssQuery): void {

    // output
    `   
        ...
    
        @media screen and (max-width: 500px) { 
            ...
        }
        
        @media screen and (max-width: 500px) { 
            ...
        }
    `
}



const queryExample: CssQuery = {
    fontSize: {
        mb_all: '10px',
    },
    display: {
        mb_all: 'block',
    },
}

media(queryExample)
