import { TestBed } from "@angular/core/testing";
import { ValidatorDateService } from "./Validatordareservice";
describe('ValidatorService',() => {
    let service: ValidatorDateService;
    beforeEach(()=> {
        TestBed.configureTestingModule({});
        service= TestBed.inject(ValidatorDateService);
    });
    it('should be created',()=>{
        expect(service).toBeTruthy();
    });
    it('Check date 15.11.875 result false',()=> {
        let s = service.validate_date('15.11.875');
        expect(s).toBe(false);
    });
    it('Check date 15.25.2003 result false',()=> {
        let s = service.validate_date('15.25.2003');
        expect(s).toBe(false);
    });
    it('Check date 15.02.2003 result true',()=> {
        let s = service.validate_date('15.02.2003');
        expect(s).toBe(true);
    });

});