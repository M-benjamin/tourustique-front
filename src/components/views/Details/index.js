import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    ScrollView,
    Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Detail = (props) => {
    console.log(props)
    
    const articleImage = () => (
        <View style={{position:'relative'}}>
            <Image
                resizeMode={"cover"}
                style={styles.articleImage}
                source={{uri: props.EventData.image}}
            />
            <Text style={styles.priceTag}>
                {props.EventData.city}
            </Text>
        </View>
    )

    const articleText = () => (
        <View>
            <Text style={styles.articleTitle}>
                {props.EventData.city}
            </Text>
            <Text style={styles.articleDescription}>
                {props.EventData.description}
            </Text>
        </View>
    )

    const ownerNfo = () => (
        <View style={styles.ownerNfo}> 
            <Text>Contact the owner of this article to the following mail:</Text>
       
            <Icon.Button
                name="location"
                color="#fdb823"
                backgroundColor="white"
                onPress={()=> openEmail()}
            >
                <Text
                    style={{fontSize:20}}
                >{props.EventData.placename}</Text>
            </Icon.Button>
        </View>
    )


    return (
        <ScrollView style={styles.articleContainer}>
            {articleImage()}
            {articleText()}
            {ownerNfo()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    articleContainer: {
        padding:10
    },
    articleImage:{
        width:'100%',
        height: 250
    },
    priceTag:{
        position:'absolute',
        bottom:0,
        backgroundColor: '#FF6444',
        padding:10,
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Roboto-Black',
    },
    articleTitle:{
        fontSize: 30,
        color: '#474143',
        fontFamily: 'Roboto-Black',
        marginTop: 20,
    },
    articleDescription:{
        marginTop: 20,
        fontSize: 18,
    },
    ownerNfo: {
        marginTop: 30,
        paddingTop: 10,
        borderTopWidth:1,
        borderTopColor:'lightgrey'
    }

 })

export default Detail;