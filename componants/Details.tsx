import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native'

const Details = ({ route }: { route: { params: { movie: any } } }) => {
    const { movie } = route.params

    const handleOfficialSitePress = () => {
        if (movie.officialSite) {
            Linking.openURL(movie.officialSite)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: movie.image?.original || movie.image?.medium || 'https://via.placeholder.com/150' }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{movie.name}</Text>
                <Text style={styles.summary}>{movie.summary.replace(/<[^>]*>/g, '')}</Text>
                <Text style={styles.genre}>Genre: {movie.genres.join(', ')}</Text>
                <Text style={styles.rating}>Rating: {movie.rating.average ? `${movie.rating.average}/10` : 'N/A'}</Text>
                <Text style={styles.premiered}>Premiered: {movie.premiered || 'Unknown'}</Text>
                <Text style={styles.status}>Status: {movie.status}</Text>
                <Text style={styles.language}>Language: {movie.language}</Text>
                {movie.network && <Text style={styles.network}>Network: {movie.network.name}</Text>}
                {movie.webChannel && <Text style={styles.webChannel}>Web Channel: {movie.webChannel.name}</Text>}
                {movie.schedule && (
                    <Text style={styles.schedule}>
                        Schedule: {movie.schedule.days.join(', ')} at {movie.schedule.time || 'N/A'}
                    </Text>
                )}
                {movie.runtime && <Text style={styles.runtime}>Runtime: {movie.runtime} minutes</Text>}
                {movie.type && <Text style={styles.type}>Type: {movie.type}</Text>}
                {movie.officialSite && <Text onPress={handleOfficialSitePress} style={styles.officialSite}>Official Site: {movie.officialSite}</Text>}
            </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#fff',
    },
    summary: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ccc',
        marginBottom: 20,
    },
    genre: {
        fontSize: 16,
        color: '#e50914',
        marginBottom: 10,
    },
    rating: {
        fontSize: 16,
        color: '#ffd700',
        marginBottom: 10,
    },
    premiered: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    status: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    language: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    network: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    webChannel: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    schedule: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    runtime: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    type: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    officialSite: {
        fontSize: 16,
        color: '#3498db',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
})