import '../sass/main.scss';
import engagement from './modules/engagement';
import { myCopyright } from './modules/utilities';

function init() {
	console.log(`Let's get to building!`);
	engagement();
	myCopyright();
}
init();
