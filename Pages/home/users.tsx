import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Image, Text, ScrollView, TouchableOpacity, Modal, Button} from "react-native";
import { handleGetUsersApi } from '../../app/Core/api/commoApi';
// import { Modal, Portal, Button, Provider } from 'react-native-paper';

export default function Users({ navigation }: any) {  
  
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleGetUsers = async () => {
    // await handleGetUsersApi()
    //   .then((res) => setData(res.data.data))
    // .catch((err)=>console.log(err)
    // )
  }
  
  useEffect(() => {
    handleGetUsers()
  }, [])
    
    const fakeData = [
        { id: '3',  name: 'fsdfsdfdsfsdfdsf' },
      { id: '2', name: 'sdfdsfdsfsdfs' },
      { id: '1', name: 'Hesdfsdfsdfsllo' },
      { id: '4', name: 'Hesdffsdffllo' },
    ];
    
    const showModal = (user) => {
      setSelectedUser(user);
      setVisible(true);
    };
  
  
    const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <TouchableOpacity onPress={() => showModal(item)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
  );
  const hideModal = () => setVisible(false);

  const handleDelete = async (id) => {
    // await handleDeleteUserApi(id)
    //  .then(() => handleGetUsers())
    //  .catch((err) => console.log(err));
  };

  return (
 
      <View style={styles.container}>
        <FlatList
          data={fakeData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
    
          <Modal visible={visible} onDismiss={hideModal} >
            <Text style={styles.modalText}>Are you sure you want to delete {selectedUser?.name}?</Text>
            <Button title="yes" onPress={handleDelete} >
              Yes, Delete
            </Button>
            <Button  title="no" onPress={()=>hideModal()} >
              Cancel
            </Button>
          </Modal>
     
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    marginTop: 10,
  },
});

