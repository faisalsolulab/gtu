import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import axios from "axios";

const URL = "http://www.codeingking.com/engineeringzone/api/";

export default class Material extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMaterial: ""
    };
  }

  componentDidMount(){
    axios.get(`http://codeingking.com/engineeringzone/api/material/getLetestMaterial`)
    .then((res) => 
    {
      console.log('DESC', res.data)
      this.setState({dataMaterial:res.data})
    })
  }

  render() {
    if (this.state.dataMaterial) {
      return (
        <View style={{ flex: 1, backgroundColor:'rgb(240,240,240)' }}>
          <View
            style={{ justifyContent: "center", marginBottom: "4%", flex: 1 }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                marginLeft: "2%"
              }}
            >
              Latest Materials
            </Text>
          </View>
          <View style={{ flex: 9 }}>
            <FlatList
              data={this.state.dataMaterial}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => 
                  this.props.navigation.navigate('Description', {
                    bookId:item.book_id,
                    description:item.description,
                    image:item.image,
                    semesterName:item.semester_name,
                    price:item.discount_price,
                    name:item.subject_name,
                    subjectCode:item.title
                  })}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.imageMaterialStyle}
                    />
                  </TouchableOpacity>
                );
              }}
              horizontal={true}
              keyExtractor={item => item.book_id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  imageMaterialStyle: {
    height: 120,
    width: 250,
    marginRight: 15
  }
});
