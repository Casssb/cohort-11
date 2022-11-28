const CardDescription = (props) => {
  const { description } = props;
  return (
    <div className="CardDescription">
      <p>{description}</p>
    </div>
  );
};
export default CardDescription;
