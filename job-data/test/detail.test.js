"use strict";
describe('detailsController', function () {
    var detailsController, scope, getDataMock;
    beforeEach(module('app'));
    beforeEach(module(function ($provide){
        $provide.factory('getData', function () {
           getDataMock = sinon.stub({
                retrieve: function(url) {},
                data: [{"id":"5593aaa04d6f63617a4e1200","jobName":"Nurse Practicioner","type":"Developer","details":{"employer":"Zazio","numberOfVacencies":43,"experianceLevel":"CEO","qualification":"MBA","experianceYears":12,"PostedDate":"11/03/2015","LastDateOfApplication":"20/08/2015"}},{"id":"5593aaa04d6f63617a4f1200","jobName":"Financial Analyst","type":"Mobile","details":{"employer":"Vidoo","numberOfVacencies":8,"experianceLevel":"CEO","qualification":"B.com","experianceYears":14,"PostedDate":"07/04/2015","LastDateOfApplication":"02/08/2015"}}],
                images: [{name : "Developer", path : "assets/images/developers.jpg"},
        {name : "SQL", path : "assets/images/sql.jpg"},
        {name : "Mobile", path : "assets/images/mobile.jpg"}],
                selected: "initial"
            });
            return getDataMock; 
        });
    }));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        detailsController = $controller('detailsController', {
            $scope: scope
        });
    }));
    it('detailsController should exist', function() {
        expect(detailsController).to.exist;
    });
    it('assigns visible to false', function() {
        expect(scope.visible).to.not.be.true;
    });
    it('assigns jobdetails to data from the service', function() {
        scope.jobDetails = getDataMock.data;
        expect(scope.jobDetails).to.exist;
    });
    it('type should be equal to selected', function() {
        expect(scope.type).to.equal(getDataMock.selected);
    });
    it('should display the details', function() {
        scope.show(getDataMock.data[0].details);
        expect(scope.visible).to.be.true;
        expect(scope.employer).to.exist;
        expect(scope.lastDate).to.exist;
        expect(scope.postedDate).to.exist;
        expect(scope.expLevel).to.exist;
        expect(scope.expYrs).to.exist;
        expect(scope.vacancy).to.exist;
        expect(scope.qualification).to.exist;
    });
});