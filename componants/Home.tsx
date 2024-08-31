import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

interface Movie {
    show: {
        id: number;
        name: string;
        summary: string;
        image?: {
            medium: string;
        };
        rating: number;
        // genre: string;
    };
}

const Home: React.FC = ({ navigation }: any) => {
    const [movies, setMovies] = useState<Movie[]>([]);


    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const renderMovieItem = ({ item }: { item: Movie }) => (
        <TouchableOpacity
            style={styles.movieItem}
            onPress={() => navigation.navigate('details', { movie: item.show })}
        >
            <Image
                source={{ uri: item.show.image?.medium || 'https://via.placeholder.com/150' }}
                style={styles.movieImage}
            />
            <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{item.show.name}</Text>
                <Text style={styles.movieSummary} numberOfLines={7}>{item.show.summary.replace(/<[^>]*>/g, '')}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.show.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000',
    },
    movieItem: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#141414',
        borderRadius: 5,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    movieImage: {
        width: 100,
        height: 150,
        borderRadius: 3,
    },
    movieInfo: {
        flex: 1,
        marginLeft: 15,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFFFFF',
    },
    movieSummary: {
        fontSize: 14,
        color: '#999999',
    },
});

export default Home;