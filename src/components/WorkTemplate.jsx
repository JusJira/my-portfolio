import {
    Heading,
    Box,
    Center,
    Image,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function WorkTemplate(props) {
    const project = props.name;
    const description = props.desc;
    const link = props.link;
    const img = '/images/' + props.imgfile +'.png';
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={img}
            objectFit={'cover'}
            alt='Work code photo'
          />
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('blue.900', 'blue.100')}>
                {project}
              </Heading>
              <Text color={useColorModeValue('gray.900', 'gray.200')}>{description}</Text>
            </Stack>

            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }} onClick={() => {window.open(link)}}>
              View
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }