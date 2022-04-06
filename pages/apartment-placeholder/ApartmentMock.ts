const Apartment = {
	title: '1-комн. квартира, 45 кв.м. очень красивая',
	address:'Санкт-Петербург, Свердловская наб. 13',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at cupiditate doloremque esse ex facilis fugiat ipsa maiores, minima nesciunt, nostrum officiis perferendis porro quasi recusandae sed totam voluptas voluptate.',
	photos: [
		{
			src: 'https://cdn.pixabay.com/photo/2017/02/14/10/46/cat-2065595_1280.jpg',
			width: 1280,
			height: 853,
		},
		{
			src: 'https://placehold.co/1920x1080?text=item+2',
			width: 1920,
			height: 1080,
		},
		{
			src: 'https://placehold.co/1920x1080?text=item+3',
			width: 1920,
			height: 1080,
		},
		{
			src: 'https://placehold.co/1920x1080?text=item+4',
			width: 1920,
			height: 1080,
		},
		{
			src: 'https://placehold.co/1920x1080?text=item+5',
			width: 1920,
			height: 1080,
		},
		{
			src: 'https://placehold.co/1920x1080?text=item+6',
			width: 1920,
			height: 1080,
		},
		{
			src: 'https://placehold.co/1920x1080?text=item+7',
			width: 1920,
			height: 1080,
		},
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