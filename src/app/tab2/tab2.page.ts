import {Component} from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    config: SwiperOptions = {
       slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    };

    constructor() {
    }

    ionViewDidEnter() {
    }
}
