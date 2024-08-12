import { DATA_CONTACTOS } from "../Data/dataMook"

export const guardarHistorial = (historial) => {
    const historialJSON = JSON.stringify(historial)
    localStorage.setItem('historial', historialJSON)
}

export const obtenerHistorial = () =>{
    const historial = localStorage.getItem('historial')
    if(historial){
        return JSON.parse(historial)
    } else{
        guardarHistorial(DATA_CONTACTOS)
        return DATA_CONTACTOS
    }
}

export const guardarMensaje= (nuevoMensaje) =>{
    const listaHistorial = obtenerHistorial()
    listaHistorial.push(nuevoMensaje)
    guardarHistorial(listaHistorial)

}

export const contactLastMessage = (messageArray) => {
    const messageText = messageArray.map(message => message.text)
    return messageText[messageText.length - 1]
}
