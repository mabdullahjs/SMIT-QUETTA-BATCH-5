
const Card = ({ title, desc, img }) => {
    return (
        <>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{desc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card