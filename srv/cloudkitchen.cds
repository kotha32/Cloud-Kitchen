using { com.sumanth.nnrg as db } from '../db/schema';

service nnrg{
    
    entity kitchen as projection on db.kitchen;
}

annotate nnrg.kitchen with @odata.draft.enabled;