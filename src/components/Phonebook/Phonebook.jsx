import { Box } from 'components/Box';
import Filter from './Filter';
import Notification from '../Notification';
import ContactList from './ContactList';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const Phonebook = () => {
  const contacts = useSelector(getContacts);

  return contacts?.length ? (
    <Box
      display="flex"
      flexDirection="column"
      gridGap="10px"
      padding="0"
      margin="0 auto"
      maxWidth="650px"
    >
      <Filter />
      <ContactList />
    </Box>
  ) : (
    <Notification message="There are no contacts." />
  );
};

export default Phonebook;
