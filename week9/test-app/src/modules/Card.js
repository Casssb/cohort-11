import CardDescription from './CardDescription';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardButton from './CardButton';

const Card = (props) => {
  const {
    title,
    description,
    imgSrc,
    darkmode,
    darkValue,
    btnColor,
    btnBackground,
  } = props;
  const btnStyles = {
    color: btnColor,
    backgroundColor: btnBackground,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <div className={`App-card ${darkValue && 'darkmode'}`}>
    <CardImage imgSrc={imgSrc} />
      <div className="Card-text-wrapper">
        <CardTitle title={title} />
        <CardDescription description={description} />
        <CardButton darkmode={darkmode} styles={btnStyles}>Card Darkmode</CardButton>
      </div>
    </div>
  );
};
export default Card;
