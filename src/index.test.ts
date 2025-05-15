import {foo} from "./index";

import "../toMatchSnapshot";


describe('toMatchSnapshotPredicate', () => {
    it('matches with predicate for foo and exact match for bar', () => {
        const testValue = { foo: 2, bar: 'abcde' };
        expect(testValue).toMatchSnapshotPredicate({
            foo: expect.snapshotPredicate(
                (oldValue, newValue) => newValue <= oldValue,
                (oldValue, newValue) => newValue / oldValue < 0.9 // Update only if 10% lower
            ),
        });
    });

    it('matches with simple predicate', () => {
        const testValue = 42;
        expect(testValue).toMatchSnapshotPredicate(
            expect.snapshotPredicate((oldValue, newValue) => newValue <= oldValue)
        );
    });
});
describe('foo()', ( ()=> {
    it('returns 1', () =>  {
        const result = foo(); 
        expect(result).toBe(1);
    });     
}))