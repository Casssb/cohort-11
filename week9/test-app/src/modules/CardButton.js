const CardButton = (props) => {
    const { darkmode, styles, children } = props;
    return (
        <button style={styles} onClick={darkmode}>{children}</button>
    );
  };
  export default CardButton;