import React, { useState } from "react";

import "./body.css";

const Body = (props) => {
  const [block, setBlock] = useState(false);
  const [detals, setDetals] = useState(null);

  const click = (id) => {
    setBlock(true);
    //  setProduct(product.filter((product, index) => index !== id ? setBlock(true) : setBlock(false) ))
  };

  const remove = () => {
    setBlock(false);
  };
  const post_info = () => {
    setDetals(
      <div className="bloc_info">
        <p>
          Информации нет{" "}
          <button className="x" onClick={() => remove_x()}>
            X
          </button>
        </p>
      </div>
    );
  };

  const remove_x = () => {
    setDetals(null);
  };

  return (
    <div className="conteyner">
      {props.search.map((prod, index) => {
        return (
          <div  >
          <div key={index} className="product_conteyner">
            <div>
              <p>
                <img className="img_conteyner" src={prod.image} alt="Товар" />
              </p>
              <p className="text_bloc">{prod.name}</p>
              <div className="bloc_details">
                <button className="post_button" onClick={() => post_info()}>
                  Детали
                </button>
                {detals}
              </div>
              <p className="text_bloc">{prod.price}</p>
              <hr />
            </div>
            <div className="r">
              <p>Класно и точка .</p>
              <button
                className="manage_cart"
                onClick={() => click(index)}
                disabled={block}
              >
                {!block ? "Добавит в карзину" : "Уже в карзине"}
              </button>
              <div>
                {block ? (
                  <button className="remove_button" onClick={remove}>
                    Удалить из карзины
                  </button>
                ) : null}
              </div>
            </div>
            
          </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Body;
