export const site = {
	name: 'Lumen Hair Studio',
	tagline: 'Colour, cut & care in Fitzroy',
	suburb: 'Fitzroy',
	phoneDisplay: '(03) 9417 2200',
	phoneHref: 'tel:+61394172200',
	email: 'book@lumenhairstudio.demo',
	address: '214 Brunswick St, Fitzroy VIC 3065',
	mapUrl: 'https://maps.google.com/?q=214+Brunswick+St+Fitzroy+VIC',
	hours: [
		{ day: 'Tue – Fri', time: '10am – 7pm' },
		{ day: 'Saturday', time: '9am – 5pm' },
		{ day: 'Sun – Mon', time: 'Closed' },
	],
} as const;

export const builder = {
	name: 'Beau',
	email: 'krs.beau@gmail.com',
	phoneDisplay: '0450 121 047',
	phoneHref: 'tel:+61450121047',
} as const;

export const services = [
	{
		name: 'Restyle cut',
		price: 'from $95',
		blurb: 'Consultation, cut, and finish tailored to your hair type and routine.',
	},
	{
		name: 'Balayage / foil',
		price: 'from $220',
		blurb: 'Lived-in colour with toner and treatment — quote confirmed after consult.',
	},
	{
		name: 'Colour refresh',
		price: 'from $145',
		blurb: 'Root touch-up or gloss to keep your colour sharp between bigger appointments.',
	},
	{
		name: 'Blow-dry',
		price: 'from $65',
		blurb: 'Event-ready finish. Add styling for formals and photoshoots.',
	},
] as const;

export const team = [
	{ name: 'Mia Chen', role: 'Colour director', focus: 'Balayage & corrective colour' },
	{ name: 'Jordan Ellis', role: 'Senior stylist', focus: 'Precision cuts & restyles' },
	{ name: 'Sam Okeke', role: 'Stylist', focus: 'Blow-drys & bridal prep' },
] as const;
