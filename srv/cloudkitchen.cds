using { com.sumanth.nnrg as db } from '../db/schema';

service nnrg @(requires: 'authenticated-user') {
    entity kitchen @(restrict: [ 
    { grant: ['READ'], to: 'CloudKitchenRead' },
    { grant: ['WRITE'], to: 'CloudKitchenWrite'},
    { grant: ['DELETE'], to: 'CloudKitchenDelete'},
  ]) as projection on db.kitchen
}

annotate nnrg.kitchen with @odata.draft.enabled;