import React, { useState, useEffect } from 'react';
import ItemBoxPresentational from './ItemBoxPresentational';

export default function ItemBoxContainer({ product, divId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [iconTitle, setIconTitle] = useState('1');
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!product.image_2) {
      setTotalImages(1);
    } else if (product.image_2 && !product.image_3) {
      setTotalImages(2);
    } else if (product.image_3 && !product.image_4) {
      setTotalImages(3);
    } else {
      setTotalImages(4);
    }
  }, [product]);

  const openModalWindow = (e) => {
    setClickedImage(e.target.src);
    setIsModalOpen(true);
  };

  const closeModalWindow = () => {
    setIsModalOpen(false);
  };

  const handleChangePicture = (e) => {
    const currentImageNumber = Number(e.target.title);
    const currentImage = document.querySelector(
      `div.${divId} > [alt="imagem_${e.target.title}"]`
    );
    if (e.target.textContent === 'chevron_left') {
      if (currentImageNumber <= 1) {
        return;
      } else {
        changeImagesClass(currentImage, currentImageNumber, 'previous');
      }
    } else if (e.target.textContent === 'chevron_right') {
      if (currentImageNumber >= totalImages) {
        return;
      } else {
        changeImagesClass(currentImage, currentImageNumber, 'next');
      }
    }
  };

  const changeImagesClass = (currentImage, currentImageNumber, operation) => {
    let newImageNumber;
    if (operation === 'next') {
      newImageNumber = (currentImageNumber + 1).toString();
    } else if (operation === 'previous') {
      newImageNumber = (currentImageNumber - 1).toString();
    }
    const newImage = document.querySelector(
      `div.${divId} > [alt="imagem_${newImageNumber}"]`
    );
    currentImage.classList.remove('productMainImage');
    currentImage.classList.add('productImage');
    newImage.classList.remove('productImage');
    newImage.classList.add('productMainImage');
    setIconTitle(newImageNumber);
  };
  return (
    <ItemBoxPresentational
      product={product}
      divId={divId}
      iconTitle={iconTitle}
      handleChangePicture={handleChangePicture}
      openModalWindow={openModalWindow}
      closeModalWindow={closeModalWindow}
      isModalOpen={isModalOpen}
      clickedImage={clickedImage}
    />
  );
}
