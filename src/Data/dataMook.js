export const DATA_CONTACTOS = [
    {
        nombre: 'Messi',
        thumbnail: '/images/messi-world-cup.jpg',
        ultima_conexion: 'ayer',
        id: 1,
        mensajes: [
            {
                author: 'Messi',
                text: 'que hace amigo?',
                date: 'ayer 13:15',
                id: 11
            },
            {
                author: 'Yo',
                text: 'Hola campeon de todo, todo bien vos?',
                state: 'visto',
                date: 'hoy 09:50',
                id: 12
            },
            {
                author: 'Messi',
                text: 'Jaja, bien.. aca con anto y lo chico',
                date: 'ayer 13:15',
                id: 13
            }
        ]
    },
    {
        nombre: 'Abuelita',
        id: 2,
        thumbnail: '/images/abuela.jpg',
        ultima_conexion: 'ayer',
        mensajes: [
            {
                author: 'Abuelita',
                text: 'Hola querido, no te olvides por favor de traerme el tupper que te preste',
                date: 'ayer 16:30',
                id: 22
            },
            {
                author: 'Yo',
                text: 'Hola abuu, jaja noooo! tranqui mañana te lo llevo',
                state: 'no entregado',
                date: 'ayer 21:30',
                id: 23
            },
            {
                author: 'Abuelita',
                text: 'Bueeeno mi amor, nos vemos mañana entonces :)',
                state: 'visto',
                date: 'ayer 21:33',
                id: 24
            },
        ]
    },
    {
        nombre: 'Mollo',
        id: 3,
        thumbnail: '/images/mollo.jpg',
        ultima_conexion: 'hoy',
        mensajes: [
            {
                author: 'Mollo',
                text: 'Que hacees viejoo, che tengo dos entradas para el show de mañana te venis?',
                state: 'visto',
                date: '15:34',
                id: 33
            },
            {
                author: 'Yo',
                text: 'QUEE!? en serio? recontra yendooooo!',
                state: 'visto',
                date: '15:45',
                id: 34
            },
            {
                author: 'Mollo',
                text: 'EEEESA PAPAA!',
                state: 'entregado',
                date: '15:34',
                id: 35
            },
        ]
    }
]