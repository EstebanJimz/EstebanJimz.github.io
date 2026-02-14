export interface MissionLog {
    id: string;
    section: string;
    title: string;
    content: string;
    type: 'terminal' | 'event' | 'battle' | 'loot' | 'glitch' | 'promise' | 'footer';
    meta?: {
        date?: string;
        location?: string;
        status?: string;
        score?: { majo: number; peter: number };
    };
}

export const missionLogs: MissionLog[] = [
    {
        id: 'init',
        section: 'PROTOCOL 14-F',
        title: 'CONNECTION ESTABLISHED',
        content: "Todo comenzó con un *ping* en la red. Dos usuarios en el ciberespacio. Iniciando secuencia de reconocimiento...",
        type: 'terminal',
        meta: { status: 'ONLINE', date: '202X-XX-XX' }
    },
    {
        id: 'event_01',
        section: 'THE CANON EVENT',
        title: "ISAAC'S PARTY",
        content: "La invitación de Isaac. Una 'chupisa', una jarra compartida y el inicio de la misión en el mundo real. El firewall fue vulnerado.",
        type: 'event',
        meta: { location: 'Party_Zone_Alpha' }
    },
    {
        id: 'battle',
        section: 'TACTICAL DEFEAT',
        title: "GAME OVER",
        content: "La competencia fue feroz. Fuimos a los bolos y a las Arcades. Mi análisis táctico falló. Me ganaste limpiamente en ambos terrenos.",
        type: 'battle',
        meta: { score: { majo: 2, peter: 0 } }
    },
    {
        id: 'loot',
        section: 'SUPPLY RUN',
        title: "LOOT ACQUIRED",
        content: "Después de la derrota, la recompensa. Una parada estratégica en Juguetón para conseguir suministros (el peluche) y un café táctico en Twenty One Pick.",
        type: 'loot'
    },
    {
        id: 'glitch',
        section: 'SYSTEM ERROR',
        title: "THE GLITCH",
        content: "El plan era el viernes 13. Detalles listos, coordenadas fijadas. Pero la vida tiene sus propios bugs. Misión de soporte vital (Tú) vs Misión crítica laboral/estudio (Yo).",
        type: 'glitch',
        meta: { status: 'RESCHEDULED' }
    },
    {
        id: 'promise',
        section: 'NEW OBJECTIVE',
        title: "THE PROMISE",
        content: "Esto no es solo código HTML. Es una promesa encriptada. En cuanto termine mi certificación (98%...), te confirmaré la fecha y hora. Tengo los detalles físicos guardados.",
        type: 'promise',
        meta: { status: 'PENDING_CERTIFICATION' }
    },
    {
        id: 'footer',
        section: 'END OF LINE',
        title: "SIGNATURE",
        content: "Desarrollado con café, insomnio y aprecio genuino.",
        type: 'footer'
    }
];
