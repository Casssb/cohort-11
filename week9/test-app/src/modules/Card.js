import CardDescription from './CardDescription';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardButton from './CardButton';

const Card = (props) => {
    const {title, description, imgSrc, darkmode, darkValue} = props
  return (
    <div className={`App-card ${darkValue && 'darkmode'}`}>
      <CardImage imgSrc={imgSrc} />
      <div className="Card-text-wrapper">
          <CardTitle title={title}/>
          <CardDescription description={description} />
          <CardButton darkmode={darkmode}/>
      </div>
    </div>
  );
};
export default Card;
