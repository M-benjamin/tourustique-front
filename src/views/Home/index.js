import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
// import SearchBar from '../components/HomeComponents/SearchBar';
import Categories from '../../../src/components/HomeComponents/Categories';
import Listings from '../../../src/components/HomeComponents/Listings';
import colors from '../../styles/colors';
import categoriesList from '../../data/categories';
import listings from '../../data/listings';

console.disableYellowBox = true;
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteListings: [],
    };
  }

  renderListings = () => {
    return listings.map((listing, index) => (
      <View
        key={`listing-${index}`}
      >
        <Listings
          key={`listing-item-${index}`}
          title={listing.title}
          boldTitle={listing.boldTitle}
          listings={listing.listings}
          showAddToFav={listing.showAddToFav}
          handleAddToFav={this.handleAddToFav}
          favouriteListings={this.state.favouriteListings}
        />
      </View>
    ));
  }

  render() {
    const { data } = this.props;
    // console.log(data.multipleListings)
    // <SearchBar />
    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.heading}>
Explore Events
          </Text>
          <View style={styles.categories}>
            <Categories categories={categoriesList} />
          </View>
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    paddingTop: 50,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
  },
});


export default HomeScreen;
