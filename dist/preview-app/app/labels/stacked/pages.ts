import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../helpers';

@Page({
  templateUrl: './build/labels/stacked/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class StackedPage {
    constructor() {

    }
}