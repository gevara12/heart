const Apartment = {
	title: '1-комн. квартира, 45 кв.м. очень красивая',
	address:'Санкт-Петербург, Свердловская наб. 13',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at cupiditate doloremque esse ex facilis fugiat ipsa maiores, minima nesciunt, nostrum officiis perferendis porro quasi recusandae sed totam voluptas voluptate.',
	photos: [
		'https://cdn.pixabay.com/photo/2017/02/14/10/46/cat-2065595_1280.jpg',
		'https://cdn.pixabay.com/photo/2017/02/14/10/46/cat-2065595_1280.jpg',
		'https://cdn.pixabay.com/photo/2017/02/14/10/46/cat-2065595_1280.jpg',
	],
	options:[
		'Wi-Fi',
		'Телевизор',
		'Кухня',
		'Стиральная машина',
		'Парковка на территории',
		'Кондиционер',
	],
	rules: {
		allowed:['Можно с животными','Можно с детьми'],
		forbidden:['Нельзя курить','Нельзя шуметь','Нельзя проводить вечеринки']
	}
};
export default Apartment;