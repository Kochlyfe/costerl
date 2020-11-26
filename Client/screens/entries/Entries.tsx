import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EntriesTable from '../../components/EntriesTable/EntriesTable';
import { Entry } from '../../interfaces';

interface DeleteEntry {
  (id: number): void;
}

interface Props {
  deleteEntry: DeleteEntry;
  userEntries: Entry[];
}

const Entries = ({ deleteEntry, userEntries }: Props): JSX.Element => {
  return (
    <ScrollView style={styles.entriesBox}>
      <EntriesTable userEntries={userEntries} deleteEntry={deleteEntry} />
    </ScrollView>
  );
};

export default Entries;

const styles = StyleSheet.create({
  entriesBox: {
    padding: 8,
  },
});
