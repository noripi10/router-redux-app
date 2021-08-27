// import styled from 'styled-components';

const Input = ({ index, registerController }) => {
  return (
    <div>
      <span>input-{index.toString()}</span>
      <input type="text" {...registerController(index)} style={{ margin: '4px' }} />
    </div>
  );
};

export default Input;
