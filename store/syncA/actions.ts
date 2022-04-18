import { Dispatch } from 'redux';

import { userUpdateAPI, userGetDataAAPI } from '@store/auth/api';
import {createAction} from "redux-actions";
import { GET_A_DATA } from '@store/constants';


const data = {
  status: 'OK',
  data: {
    id: '3466251',
    smartName: 'Irina',
    about:
      'Будьте как дома вдали от дома! Я делаю все возможное , чтобы гостям было комфортно и уютно в моих квартирах. Я всегда на связи и готова помочь не только в размещении, но и по любым возникающим вопросам . Мои путешественники становятся постоянными гостями на долгое время и всегда возвращаются с удовольствием! Буду рада принять вас! \r\n',
    createdAt: '2012-09-04T09:43:08Z',
    reviewsCountFromGuest: 253,
    reviewsCountFromHost: 5,
    isSuperhost: true,
    managedListings: [
      {
        id: '38779648',
        bathrooms: 1.5,
        bedrooms: 2,
        beds: 3,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: '❤️R&I Тверская-сьют около Патриарших❤️',
        pictureUrl:
          'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-38779648-unapproved/original/e1131444-fb3e-43e6-9eb4-3dbe32377317.JPEG?aki_policy=large',
        ratingAverage: 4.85,
        reviewCount: 26,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '52258904',
        bathrooms: 1.0,
        bedrooms: 2,
        beds: 3,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: 'Элегантная квартира бизнес класса в ЖК Аэробус',
        pictureUrl: 'https://a0.muscache.com/im/pictures/32e8b3d3-618e-4a14-83bc-0aeee2714dbd.jpg?aki_policy=large',
        ratingAverage: 5.0,
        reviewCount: 2,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '47235645',
        bathrooms: 1.5,
        bedrooms: 2,
        beds: 3,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: '❤️ R&I  Черняховского 19 м Аэропорт ❤️',
        pictureUrl: 'https://a0.muscache.com/im/pictures/4d257b1f-adbb-42b9-b869-3c183f1d6ade.jpg?aki_policy=large',
        ratingAverage: 4.64,
        reviewCount: 11,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '21930312',
        bathrooms: 1.5,
        bedrooms: 1,
        beds: 2,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: '❤️ R&I Булгаков около Кремля❤️',
        pictureUrl: 'https://a0.muscache.com/im/pictures/327da31c-ce07-4bd2-b06c-b27c564574c2.jpg?aki_policy=large',
        ratingAverage: 4.98,
        reviewCount: 42,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '46194837',
        bathrooms: 1.5,
        bedrooms: 1,
        beds: 3,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: '❤️R&I Войковская около метро❤️',
        pictureUrl: 'https://a0.muscache.com/im/pictures/896ab9ef-e0ba-4f39-bda4-b899e9b0c900.jpg?aki_policy=large',
        ratingAverage: 5.0,
        reviewCount: 10,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '29600780',
        bathrooms: 1.5,
        bedrooms: 2,
        beds: 4,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: '❤️R&I НикитА около Кремля❤️',
        pictureUrl: 'https://a0.muscache.com/im/pictures/cd02a08b-0ed9-4574-a1e2-bb7b771afe66.jpg?aki_policy=large',
        ratingAverage: 4.87,
        reviewCount: 79,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '52257376',
        bathrooms: 1.0,
        bedrooms: 1,
        beds: 2,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: 'Светлая квартира на Пресне',
        pictureUrl: 'https://a0.muscache.com/im/pictures/803b5f02-6e2d-4dbf-8931-1602fc60cb66.jpg?aki_policy=large',
        ratingAverage: 5.0,
        reviewCount: 3,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '49630613',
        bathrooms: 1.5,
        bedrooms: 1,
        beds: 2,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: 'Дизайнерская квартира с видом!',
        pictureUrl: 'https://a0.muscache.com/im/pictures/13609f4b-cc78-44fa-b926-f0d134b1e7c4.jpg?aki_policy=large',
        ratingAverage: 5.0,
        reviewCount: 8,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '54372405',
        bathrooms: 1.0,
        bedrooms: 1,
        beds: 3,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: 'Свежая и уютная квартира около метро Зюзино',
        pictureUrl: 'https://a0.muscache.com/im/pictures/28c391ef-e291-43eb-9de7-fbaf26511d79.jpg?aki_policy=large',
        ratingAverage: 5.0,
        reviewCount: 1,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
      {
        id: '45348908',
        bathrooms: 1.0,
        bedrooms: 1,
        beds: 2,
        isSuperhost: true,
        localizedRoomType: 'Жилье целиком',
        nameOrPlaceholderName: '❤️ R&I Москва Сити/Экспоцентр❤️',
        pictureUrl: 'https://a0.muscache.com/im/pictures/6e838951-8820-469f-956b-2bae6e63725e.jpg?aki_policy=large',
        ratingAverage: 5.0,
        reviewCount: 5,
        isLuxury: false,
        isSelect: false,
        propertyTypeId: 1,
        propertyTypeName: 'Apartment',
      },
    ],
  },
};

const getADataRequest = createAction(GET_A_DATA);

export const getDataFromA = (url: string) => async (dispatch: Dispatch) => {
  userUpdateAPI({ service: 'Airbnb', url })
    .then(({ data }) => {
      console.info('userUpdate', data);
    })
    .catch((error) => {
      console.error(error);
    });
};


export const getDataFromA2 = (url: string) => async (dispatch: Dispatch) => {
  userGetDataAAPI({ service: 'Airbnb', url })
    .then(({ data }) => {
      console.info('parsed data', data.data);
      dispatch(getADataRequest(data.data))
    })
    .catch((error) => {
      console.error(error);
    });
};

