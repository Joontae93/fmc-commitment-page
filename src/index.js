import '../sass/main.scss';
import appController from './modules/controller';
import { myCopyright } from './modules/utilities';

function init() {
	appController();
	myCopyright();
}
init();
