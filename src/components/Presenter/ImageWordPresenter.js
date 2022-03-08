import styled from 'styled-components';

const ImageWordPresenter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const WordPresenter = styled.div`
  font-weight: bold;
  font-size: ${props => props.size};
  color: ${props => props.color || 'white'};
`;

const WordLine = styled.hr`
  width: 3.25rem;
  height: 0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border-top: 0.2rem solid #f05454;
`;

// eslint-disable-next-line react/prop-types
function WordSetting({size, color, content}) {
  return (
    <WordPresenter size={size} color={color}>
      {content}
    </WordPresenter>
  );
}

export {ImageWordPresenter, WordSetting, WordLine};
