import React from 'react';
import Carousel from 'react-native-snap-carousel';

import {
	ActivityIndicator,
	Button,
	Dimensions,
	FlatList,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/ HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
	const { peliculasEnCine, isLoading } = useMovies();
	const { top } = useSafeAreaInsets();

	console.log(peliculasEnCine[2]?.title);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
				<ActivityIndicator color="green" size={100} />
			</View>
		);
	}
	return (
		<ScrollView>
			<View style={{ marginTop: top + 20 }}>
				{/* <MoviePoster movie={peliculasEnCine[2]} /> */}

				{/*Carousel Principal */}
				<View style={{ height: 440 }}>
					<Carousel
						data={peliculasEnCine}
						renderItem={({ item }: any) => <MoviePoster movie={item} />}
						sliderWidth={windowWidth}
						itemWidth={300}
						inactiveSlideOpacity={0.9}
					/>
				</View>

				{/*Peliculas populares */}

				<HorizontalSlider movies={peliculasEnCine} title='En cine' />
			</View>
		</ScrollView>
	);
};
