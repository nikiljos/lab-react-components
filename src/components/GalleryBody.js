import "./GalleryBody.css"

const GalleryBody = (props) => (
    <div>
        {props.imageData.map((image) => {
            return (
                <div key={image.id} className="column">
                    <img src={image.img} alt=""></img>
                </div>
            );
        })}
    </div>
);

export default GalleryBody