import React from 'react';
import Modal from '../ImageModal/ImageModal.js';
import './ItemBox.css';

export default function ItemBox({
  product,
  divId,
  iconTitle,
  handleChangePicture,
  openModalWindow,
  closeModalWindow,
  isModalOpen,
  clickedImage,
}) {
  return (
    <>
      <section className="itemContainer">
        <i
          onClick={handleChangePicture}
          className="material-icons changePicture"
          title={iconTitle}
        >
          chevron_left
        </i>
        <div className="allImages">
          <div className={divId}>
            <img
              onClick={openModalWindow}
              className="productMainImage"
              src={product.main_image}
              alt="imagem_1"
            />
            {product.image_2 && (
              <img
                onClick={openModalWindow}
                className="productImage"
                src={product.image_2}
                alt="imagem_2"
              />
            )}
            {product.image_3 && (
              <img
                onClick={openModalWindow}
                className="productImage"
                src={product.image_3}
                alt="imagem_3"
              />
            )}
            {product.image_4 && (
              <img
                onClick={openModalWindow}
                className="productImage"
                src={product.image_4}
                alt="imagem_4"
              />
            )}
          </div>
        </div>
        <i
          onClick={handleChangePicture}
          className="material-icons changePicture"
          title={iconTitle}
        >
          chevron_right
        </i>
        <div className="description">
          <p>{product.name}</p>
          <p className="productInfo">
            {product.type} |・ {product.color}
          </p>
        </div>
        <p className="price grey-text text-darken-3">
          <span className="originalPrice ">
            {new Intl.NumberFormat('br-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.original_price)}
          </span>{' '}
          por{' '}
          <span className="discountPrice grey-text text-darken-4">
            {new Intl.NumberFormat('br-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.discount_price)}
          </span>
        </p>
      </section>
      {isModalOpen && (
        <Modal
          closeModalWindow={closeModalWindow}
          clickedImage={clickedImage}
        />
      )}
    </>
  );
}
