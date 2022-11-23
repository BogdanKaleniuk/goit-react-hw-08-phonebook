import { DeleteIcon } from '@chakra-ui/icons';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/dfghgf/operations';

import { Card, Text, CardBody, Button, Flex, Box } from '@chakra-ui/react';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  // const active = name === number;
  const innerBoxStyles = {
    display: 'block',
    fontSize: '20px',
  };
  return (
    <Box sx={innerBoxStyles}>
      <Card>
        <CardBody>
          <Flex pl="5">
            <Text>
              {name} : {number}
            </Text>

            <Button
              color="green"
              bg="white"
              // bg={active ? 'glassTeal' : undefined}
              // color={active ? '#202023' : undefined}
              _hover={{
                background: 'red',
                color: 'white',
                br: '5',
              }}
              type="button"
              onClick={handleDelete}
            >
              {/* Delete */}
              <DeleteIcon w={15} h={15} />
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};
