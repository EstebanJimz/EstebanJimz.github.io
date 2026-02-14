export interface StoryBeat {
    id: string;
    chapter: string;
    title: string;
    text: string;
    date?: string;
    type: 'intro' | 'comic' | 'photo' | 'conflict' | 'climax';
    image?: string; // Path to image or placeholder type
    color: string; // Tailwind class for border/accent
    alignment: 'left' | 'right' | 'center';
}

export const storyData: StoryBeat[] = [
    {
        id: 'intro',
        chapter: 'ISSUE #1',
        title: 'THE WEB',
        text: "Todo empezó en la red... literalmente. Un mensaje, una conexión, y el inicio de un multiverso compartido.",
        type: 'intro',
        color: 'border-spider-blue',
        alignment: 'center'
    },
    {
        id: 'origin',
        chapter: 'ORIGIN STORY',
        title: "ISAAC'S PARTY",
        text: "Una invitación de Isaac, una jarra, y el inicio de una aventura inesperada. No sabía que estaba conociendo a mi variante favorita.",
        type: 'comic',
        color: 'border-spider-red',
        alignment: 'left'
    },
    {
        id: 'defeat',
        chapter: 'THE DEFEAT',
        title: "ARCADE & BOWLING",
        text: "Fuimos a los bolos y a las arcade. Intenté ganar, pero mi sentido arácnido no fue rival para ella. Me ganó en ambas. 2-0 a favor de Majo. (Definitivamente te dejé ganar... o no).",
        type: 'comic',
        color: 'border-yellow-400',
        alignment: 'right'
    },
    {
        id: 'peace',
        chapter: 'SAFE HAVEN',
        title: "COFFEE & PLUSHIE",
        text: "Después de la batalla, la paz. Un café en Twenty One Pick y un peluche para sellar la alianza.",
        type: 'comic',
        color: 'border-pink-500',
        alignment: 'left'
    },
    {
        id: 'photo',
        chapter: 'THE RELIC',
        title: "OUR MEMORY",
        text: "Solo tenemos una foto... pero es la prueba de que este universo es el correcto.",
        type: 'photo',
        image: '/images/us-bowling.jpg', // Placeholder
        color: 'border-white',
        alignment: 'center'
    },
    {
        id: 'conflict',
        chapter: 'CURRENT THREAT',
        title: "RESPONSIBILITY",
        text: "A veces, el deber llama. Estuve atrapado estudiando para la certificación y tú ayudando a tu mamá. El viernes 13 iba a ser el día, pero un gran poder conlleva una gran responsabilidad.",
        type: 'conflict',
        color: 'border-gray-500',
        alignment: 'center'
    },
    {
        id: 'climax',
        chapter: 'TO BE CONTINUED',
        title: "THE PROMISE",
        text: "Esto no queda en una página web. La próxima semana, cuando tenga mi certificación en mano, celebraremos como se debe. No solo con palabras (código), sino con hechos.",
        type: 'climax',
        color: 'border-spider-red',
        alignment: 'center'
    }
];
