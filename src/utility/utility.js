import { message } from 'antd';

export const validateImage = (maxSize = 2, image) => {  // maxSize(Mb)
  const isJpgOrPng = image.type === 'image/jpeg' || image.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = image.size / 1024 / 1024 < maxSize;
  if (!isLt2M) {
    message.error(`Image must be smaller than ${maxSize}MB!`);
  }

  return isJpgOrPng && isLt2M;
}

export const createSrc = (name, folder) => (
  'https://firebasestorage.googleapis.com/v0/b/'
  + `${process.env.REACT_APP_FIREBASE_KEY_STORE_BUCKET}/o/${folder}%2F`
  + `${name}?alt=media`
)
