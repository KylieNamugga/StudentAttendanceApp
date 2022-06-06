const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');


chai.use(chaiHttp);
// const { expect } = chai;


describe('GET/signoff', () => {
    it('Should return the user if signed off with these fields', (done) => {
        const newSignoff = {
            name: 'blue',
            grade: '12',
            email: 'blue@gmail.com',
        };

        chai.request(app)
            .get('/signoff')
            .end((err, res) => {
                if (err) done(err);
                done();
            });
    });
});