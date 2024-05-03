import style from "./card.module.scss";

const Card = ({ image, name, title, description, color, paraColor }) => {
  return (
    <>
      <div className={style.cardDiv} style={{ background: color }}>
        <div className={style.introBox}>
          <img src={image} alt="the image" />
          <div className={style.nameDiv}>
            <p style={{color: paraColor}}>{name}</p>
            <p style={{color: paraColor}}>Verified Graduate</p>
          </div>
        </div>

        <h1 style={{ color: paraColor }}>{title}</h1>
        <p style={{ color: paraColor }}>{description}</p>
      </div>
      ;
    </>
  );
};

export default Card;
