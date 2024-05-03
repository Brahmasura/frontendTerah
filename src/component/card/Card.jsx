import style from "./card.module.scss";

const Card = ({ image, name, title, description, color }) => {
  return (
    <>
      <div className={style.cardDiv} style={{ background: color }}>
        <div className={style.introBox}>
          <img src={image} alt="the image" />
          <div className={style.nameDiv}>
            <p>{name}</p>
            <p>Verified Graduate</p>
          </div>
        </div>

        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      ;
    </>
  );
};

export default Card;
