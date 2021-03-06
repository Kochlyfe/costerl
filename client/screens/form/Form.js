import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import EntryForm from '../../components/EntryForm/EntryForm';
import config from '../../config';

const { inputForm } = config;

const Form = ({ postEntry, currentUser }) => {
  let id;
  if (Array.isArray(currentUser[currentUser.length - 1])) {
    id = Number(currentUser[currentUser.length - 1][0].id);
  } else {
    id = Number(currentUser[currentUser.length - 1].id);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <EntryForm form={inputForm} postEntry={postEntry} ext="entries" id={id} currentUser={currentUser} />
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  text: {},
});
