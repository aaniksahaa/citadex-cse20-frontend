import { useState } from 'react';
import { ButtonGroup, Button, HStack, Text } from '@chakra-ui/react';

const OptionSelector = ({ options, defaultSelected, onOptionChange, fontSize='md'}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleOptionChange = (option) => {
    if (selected === option) {
      // If the same option is clicked again, unselect it
      // onOptionChange(null);
    } else {
      // Otherwise, update the selected option
      setSelected(option);
      onOptionChange(option);
    }
  };

  return (
    <HStack>
    <ButtonGroup>
      {options.map((option) => (
        <Button
          fontSize={fontSize}
          key={option}
          colorScheme={selected === option ? 'teal' : 'gray'}
          onClick={() => handleOptionChange(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
    </HStack>
  );
};

export default OptionSelector;
