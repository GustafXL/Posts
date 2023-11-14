import style from "./Avatar.module.css";

export function Avatar({ hasBorder, src }) { //? Desestruturação no parametro, bem simples;
    return (
        <img 
            className={hasBorder ? style.avatarBorder : style.avatarNoBorder} 
            src={src}
        />
    )
}