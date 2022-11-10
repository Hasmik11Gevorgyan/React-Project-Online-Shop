import "./form.css";

function SelectedSingleProduct({ title, img,id }) {
  return (<div className="shop-product">
    <div className="shop">
      <h className="title">{title}</h>
      <img className="image" src={img} />
    </div>
    </div>
  );
}

export default SelectedSingleProduct;
