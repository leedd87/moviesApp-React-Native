import React from 'react';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'

import {
	ActivityIndicator,
	Dimensions,
	ScrollView,
	View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/ HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
	const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
	const { top } = useSafeAreaInsets();



	const getPosterColors = async (index: number) => {
		const movie = nowPlaying[index]
		const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

		const [primary, secondary] = await getImageColors(uri)

		console.log({ primary, secondary })
	}

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
				<ActivityIndicator color="green" size={100} />
			</View>
		);
	}
	return (
		<GradientBackground>

			<ScrollView>
				<View style={{ marginTop: top + 20 }}>
					{/* <MoviePoster movie={peliculasEnCine[2]} /> */}

					{/*Carousel Principal */}
					<View style={{ height: 440 }}>
						<Carousel
							data={nowPlaying}
							renderItem={({ item }: any) => <MoviePoster movie={item} />}
							sliderWidth={windowWidth}
							itemWidth={300}
							inactiveSlideOpacity={0.9}
							onSnapToItem={index => getPosterColors(index)}
						/>
					</View>

					{/*Peliculas populares */}



					<HorizontalSlider movies={popular} title='Popular' />
					<HorizontalSlider movies={topRated} title='Top Rated' />
					<HorizontalSlider movies={upcoming} title='Upcoming' />
				</View>
			</ScrollView>
		</GradientBackground>
	);
};
