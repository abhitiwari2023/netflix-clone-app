import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'

const Search = ({ navigation }: any) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])


    useEffect(() => {
        if (searchTerm) {
            fetchSearchResults()
        } else {
            setSearchResults([])
        }
    }, [searchTerm])

    const fetchSearchResults = async () => {
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
            const data = await response.json()
            setSearchResults(data)
        } catch (error) {
            console.error('Error fetching search results:', error)
        }
    }

    const renderItem = ({ item }: any) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('details', { movie: item.show })}
        >
            <Image
                source={{ uri: item.show.image?.medium || 'https://via.placeholder.com/210x295' }}
                style={styles.image}
            />
            <Text style={styles.title}>{item.show.name}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Movies here..."
                placeholderTextColor="#8c8c8c"
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item) => item.show.id.toString()}
                numColumns={3}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#141414',
    },
    searchBar: {
        height: 40,
        backgroundColor: '#333333',
        color: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 2,
    },
    title: {
        marginTop: 5,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 12,
    },
})