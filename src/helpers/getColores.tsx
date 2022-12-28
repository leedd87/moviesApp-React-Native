import ImageColors from "react-native-image-colors"

export const getImageColors = async (uri: string) => {

    // const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const colors = await ImageColors.getColors(uri, {})

    let primary;
    let secondary;

    console.log(colors)

    switch (colors.platform) {
        case 'android':
            // android result properties
            const vibrantColor = colors.vibrant
            primary = colors.dominant
            secondary = colors.average
            break
        case 'web':
            // web result properties
            const lightVibrantColor = colors.lightVibrant
            break
        case 'ios':
            // iOS result properties
            const primaryColor = colors.primary
            primary = colors.primary
            secondary = colors.secondary
            break
        default:
            throw new Error('Unexpected platform key')
    }

    return [
        primary, secondary
    ]
}