
import data from '../data/cards.json';

export const getCards = () => {

    //? Si tenemos una API aplicar un fetch
    // const url = '';
    // const resp = await fetch(url);
    // const { data } = await resp.json();

    //? En este ejemplo vamos a usar un json en vez de un fetch

    const cards = data.map( img => ({
        id: img.id,
        name: img.name,
        tag: img.tag,
        avatar: img.avatar,
        url: img.url,
    }));

    return cards;
  
}
