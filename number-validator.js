import {PolymerElement, html} from '@polymer/polymer';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {IronValidatorBehavior} from '@polymer/iron-validator-behavior/iron-validator-behavior.js';

class NumberValidator extends mixinBehaviors([IronValidatorBehavior], PolymerElement){

  validate(v) {
    //var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    //return re.test(value);

    //var re = "\d+\.?\d*"

    var value = parseFloat(v);
    var isValid = !isNaN(value) && typeof value === "number";
    return isValid;
  }

}

customElements.define('number-validator', NumberValidator);