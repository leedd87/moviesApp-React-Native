import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMoviesDetails } from '../hooks/useMoviesDetails';

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }


export const DetailScreen = ({ route }: Props) => {

	const movie = route.params
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	useMoviesDetails(movie.id)

	return (
		<ScrollView>

			<View style={styles.imageContainer}>
				<View style={styles.imageBorder}>

					<Image source={{ uri: uri }}
						style={styles.posterImage} />
				</View>
			</View>
			<View style={styles.marginContainer}>
				<Text style={styles.subTitle}>{movie.original_title}</Text>
				<Text style={styles.title}>{movie.title}</Text>
			</View>
			<View style={styles.marginContainer}>
				<Icon name='star-outline' color='grey' size={20} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: screenHeight * 0.7,
		// backgroundColor: 'red',
		//overflow: 'hidden',
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 9,

		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,

	},
	imageBorder: {
		flex: 1,
		overflow: 'hidden',
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,

	},
	posterImage: {
		flex: 1,
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 20,
	},
	subTitle: {
		fontSize: 16,
		opacity: 0.8
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});