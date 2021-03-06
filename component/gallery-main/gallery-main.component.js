import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryMainComponent = (function () {
    function GalleryMainComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryMainComponent.prototype.ngOnInit = function () {
        // shortcut for thumbnail config
        var thumbPos = this.config.thumbnails.position;
        this.thumbDirection = (thumbPos === 'left' || thumbPos === 'right') ? 'row' : 'column';
    };
    return GalleryMainComponent;
}());
export { GalleryMainComponent };
GalleryMainComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-main',
                template: "\n    <div class=\"g-container\" [style.flexDirection]=\"thumbDirection\" [ngStyle]=\"config.style\">\n\n      <gallery-thumb *ngIf=\"config.thumbnails\" [state]=\"state\" [config]=\"config.thumbnails\"\n                     [style.background]=\"config.style?.background\"></gallery-thumb>\n\n      <div class=\"g-box\">\n\n        <div class=\"g-image-box\">\n\n          <gallery-image [state]=\"state\" [config]=\"config\" (loading)=\"loading = $event\"></gallery-image>\n\n          <gallery-nav *ngIf=\"config.navigation\" [state]=\"state\"></gallery-nav>\n\n          <!--<div class=\"g-layer\" *ngIf=\"state.images[state.currIndex].layer\" [innerHtml]=\"state.images[state.currIndex].layer\"></div>-->\n\n        </div>\n\n        <gallery-text *ngIf=\"config.description\" [state]=\"state\" [config]=\"config.description\"></gallery-text>\n\n        <gallery-bullets *ngIf=\"config.bullets\" [state]=\"state\" [config]=\"config.bullets\"></gallery-bullets>\n\n        <gallery-player *ngIf=\"config.player\" [state]=\"state\" [config]=\"config.player\"></gallery-player>\n\n      </div>\n\n    </div>\n  ",
                styles: ["\n    gallery-main{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}gallery-main *{box-sizing:border-box}.g-container{overflow:hidden;position:relative;z-index:1;max-height:100%;max-width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (max-width:480px){.g-container{width:100%!important;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}}.g-box{height:100%}.g-box,.g-image-box{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;height:100%}.g-layer{position:absolute;left:0;top:0;right:0;bottom:0;z-index:2}.g-pan-reset{transition:none;-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important}.g-swipe-invis .g-image img{opacity:0}\n  "],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
GalleryMainComponent.ctorParameters = function () { return [
    { type: GalleryService, },
]; };
GalleryMainComponent.propDecorators = {
    'state': [{ type: Input },],
    'config': [{ type: Input },],
};
//# sourceMappingURL=gallery-main.component.js.map