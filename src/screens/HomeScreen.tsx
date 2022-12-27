import React from 'react';
import Carousel from 'react-native-snap-carousel';

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

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
	const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
	const { top } = useSafeAreaInsets();



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
