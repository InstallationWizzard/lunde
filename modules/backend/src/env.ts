/*=============================================
                    Imports
=============================================*/
import 'dotenv/config'
/*=============================================
                    Util
=============================================*/
const getEnvironmentVariable = (variable: string, defaultValue: string|number|undefined = undefined): any => {
    if(!process.env[variable] && !defaultValue){
        throw new Error(`Mandatory environment variable ${variable} was not set.`)  
    }
    process.env[variable] ?? console.log(`Environment variable ${variable} was not set. Using default: ${defaultValue}`)
    return process.env[variable] ?? defaultValue
}

/*=============================================
                    
=============================================*/
export const 
    BACKEND_CONTAINER_PORT = getEnvironmentVariable('BACKEND_CONTAINER_PORT', 3000)

    