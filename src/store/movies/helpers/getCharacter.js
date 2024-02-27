export const getCharacter = async (mal_id) => {


    const url = `https://api.jikan.moe/v4/characters/25914/full`;

    try {
        const response = await fetch(url);
        const {data} = await response.json();
        const obj = {
            image_url: data.images.jpg.image_url,
            name: data.name,
            name_kanji: data.name_kanji,
            about: data.about,
            mal_id: data.mal_id
        }
        return obj;
    } catch (error) {
        console.error(error);
        return {};
    }

}