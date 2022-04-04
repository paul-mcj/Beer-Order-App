const Card = (props) => {
    return (
        <article className="card card-bordered border-white">
            <div className="card-body">{props.children}</div>
        </article>
    );
};

export default Card;
