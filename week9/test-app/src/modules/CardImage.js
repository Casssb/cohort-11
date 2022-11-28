const CardImage = (props) => {
  const { imgSrc } = props;
  return (
    <div className="CardImage">
      <img src={imgSrc} alt={'coutry'}></img>
    </div>
  );
};
export default CardImage;
