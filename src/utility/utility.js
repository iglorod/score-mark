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

export const handleError = (error) => {
  if (!error.response) {
    message.error('Please check your Internet connection');
    return;
  }

  switch(error.response.status) {
    case 400: {
      message.error('Please check entered data');
      break;
    }
    case 401: {
      message.error('Error! Please reload the page');
      break;
    }
    case 403: {
      message.error('Error! You must login first');
      break;
    }
    case 404: {
      message.error('Resource is not found');
      break;
    }
    case 500: {
      message.error('Server Error. Please try again');
      break;
    }
    case 503: {
      message.error('Service Unavailable. Please try later');
      break;
    }

    default: {
      message.error('Something went wrong');
    }
  }
}
