import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, Button} from 'react-native';

const BlockItemAgenda = (props) => {
    const itemText = (item) => (
        <View style={styles.itemTextContainer}>
            <Text style={styles.itemTextTitle}>
                {item.description}
            </Text>

        </View>
    )

    const itemImage = (item) => (
     
        <View>
            <Image
                resizeMode={"cover"}
                style={styles.itemImage}
                source={{uri: item.image}}
            />
        </View>
    )

    const block = ({item,i}) => (
        <View style={styles.blockRow}>
            <TouchableOpacity
                onPress={()=> {
                    props.goto(item.blockOne)
                }}
                style={{flex:2}}
            >
                <View
                    style={[
                        styles.blockGridStyle, 
                        styles.blockGridStyleLeft
                    ]}
                >
                    {itemImage(item.blockOne)}
                    {itemText(item.blockOne)}
                    <View>
                        <Button 
                            title='add'
                            color="black"
                            onPress={() => {
                              alert('Event successfull add to calendar')
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> {
                    props.goto(item.blockTwo)
                }}
                style={{flex:2}}
            >
                <View
                     style={[
                        styles.blockGridStyle, 
                        styles.blockGridStyleRight
                    ]}
                >
                    {itemImage(item.blockTwo)}
                    {itemText(item.blockTwo)}
                    <View>
                        <Button 
                            title='add'
                            color="black"
                            onPress={() => {
                              alert('Event successfull add to calendar')
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )


    return (
       <View>
           {block(props)}
       </View>
    )
}

const styles = StyleSheet.create({ 
    blockRow:{
        flex:1,
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between'
    },
    itemImage:{
        width: 500,
        height:200,
    },
    itemTextContainer:{
        padding:10,
        borderLeftWidth: 4,
        borderLeftColor: '#FF6444'
    },
    itemTextTitle: {
        fontFamily: 'Roboto-Black',
        color:'#4C4C4C',
        marginBottom: 5
    },
    itemTextPrice: {
        fontFamily: 'Roboto-Black',
        color: '#00ada9',
        marginBottom: 5
    },
    blockGridStyle:{
        backgroundColor: '#f1f1f1'
    },
    blockGridStyleLeft:{
        marginRight: 2.5,
    },
    blockGridStyleRight:{
        marginLeft: 2.5,
    }

})

export default BlockItemAgenda;