import CardDescription from './CardDescription';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

const Card = (props) => {
    const {title, description, imgSrc} = props
  return (
    <div className="App-card">
      <CardImage imgSrc={imgSrc} />
      <div className="Card-text-wrapper">
          <CardTitle title={title}/>
          <CardDescription description={description} />
      </div>
    </div>
  );
};
export default Card;
