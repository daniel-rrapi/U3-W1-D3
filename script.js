var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(_redditoLordo) {
        this.redditoLordo = _redditoLordo;
    }
    return Tasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_redditoLordo) {
        return _super.call(this, _redditoLordo) || this;
    }
    Lavoratore.prototype.utileTasse = function () {
        return this.redditoLordo * 0.78;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return;
    };
    Lavoratore.prototype.getRedditoNetto = function () {
        return this.utileTasse() - this.getTasseIrpef() - this.getTasseInps();
    };
    return Lavoratore;
}(Tasse));
var Proffesionista = /** @class */ (function (_super) {
    __extends(Proffesionista, _super);
    function Proffesionista(_redditoLordo) {
        return _super.call(this, _redditoLordo) || this;
    }
    Proffesionista.prototype.getTasseIrpef = function () {
        return this.utileTasse() * 0.95;
    };
    Proffesionista.prototype.getTasseInps = function () {
        return this.utileTasse() * 0.75;
    };
    return Proffesionista;
}(Lavoratore));
var prof1 = new Proffesionista(1000);
console.log(prof1.getTasseIrpef());
