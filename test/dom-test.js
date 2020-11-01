import chai, { expect } from 'chai';
import spies from 'chai-spies';
import UserRepository from '../src/classes/UserRepository';
chai.use(spies);


describe('headerName', () => {
  before(() => {

  });

  it('should call Math.round and Math.random', () => {
    let Math = {};
    chai.spy.on(Math, ['round', 'random'], () => {});
    let data = new UserRepository([], [], [], [], "2020/10/01")
    data.getRandomUser();
    expect(Math.random).to.have.been.called(1);
  });
})
