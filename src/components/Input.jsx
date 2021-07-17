// import styled from 'styled-components';

const Input = ({ index, registerController }) => {
  return (
    <div>
      <span>input-{index.toString()}</span>
      <input type="text" {...registerController(index)} />
    </div>
  );
};

export default Input;
