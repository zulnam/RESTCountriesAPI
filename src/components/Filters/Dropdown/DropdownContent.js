import styled from '@emotion/styled';

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block;' : 'none;')};
  border-radius: 0.5rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding-left: 12px;
  margin-top: 6px;
  position: absolute;
  width: 200px;
  z-index: 1;

  a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  a:hover {
    background-color: #f1f1f1;
  }
`;

export default DropdownContent;
