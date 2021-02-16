// import React, {Component} from 'react';
// import {Text, View, TextInput} from 'react-native';

// export class SearchBoxMain extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           padding: 15,
//           borderRadius: 10,
//           borderWidth: 1,
//           borderColor: '#9999',
//   marginBottom: 8,
//   marginTop: 8,
//         }}>
//         <Text>ค้นหาชื่ออาหาร, ชื่อร้าน, สถานที่</Text>
//       </View>
//     );
//   }
// }

// export default SearchBoxMain;

import React from 'react';
import {TextInput, View} from 'react-native';

const SearchBoxMainh = () => {
  const [value, onChangeText] = React.useState(
    'ค้นหาชื่ออาหาร, ชื่อร้าน, สถานที่',
  );

  return (
    <View>
      <TextInput
        style={{
          height: 50,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 8,
          marginTop: 8,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

export default SearchBoxMainh;
