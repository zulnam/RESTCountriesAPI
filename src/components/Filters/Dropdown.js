import { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const DropdownButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px -5px #ccc, 0 -1px 10px -5px #eee;
  width: 200px;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block;' : 'none;')};
  border-radius: 0.5rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding-left: 12px;
  margin-top: 6px;
  position: absolute;
  background-color: #f9f9f9;
  width: 200px;
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  a:hover {
    background-color: #f1f1f1;
  }
`;

const IconContainer = styled.span`
  margin-left: 1rem;
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DropdownButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Filter By Region
        <IconContainer>
          <Image
            src="/down-chevron.svg"
            width={16}
            height={16}
            alt="Search Icon"
          />
        </IconContainer>
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <a
          href="#"
          onClick={() => {
            console.log('merge');
          }}
        >
          Africa
        </a>
        <a
          href="#"
          onClick={() => {
            console.log('merge');
          }}
        >
          America
        </a>
        <a
          href="#"
          onClick={() => {
            console.log('merge');
          }}
        >
          Asia
        </a>
        <a
          href="#"
          onClick={() => {
            console.log('merge');
          }}
        >
          Europe
        </a>
        <a
          href="#"
          onClick={() => {
            console.log('merge');
          }}
        >
          Oceania
        </a>
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
