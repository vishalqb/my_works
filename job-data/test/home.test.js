describe('homeController', function () {
    var homeController, scope, getDataMock;
    beforeEach(module('app'));
    beforeEach(module(function($provide){
        $provide.factory('getData', function() {
            getDataMock = sinon.stub({
                retrieve: function(url) {},
                data: [],
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
        homeController = $controller('homeController', {
            $scope: scope
        });        
    }));
    it('should exist homecontroller', function() {
        expect(homeController).to.exist;
    });
    it('should do the api calling with url', function() {
        expect(getDataMock.retrieve.called).to.be.true;
    });
    it('assigns getdatamock.images to scope.images', function() {
        expect(scope.images).to.equal(getDataMock.images);
    });
    it('getdatamock.selected should have the value initial at first', function() {
        expect(getDataMock.selected).to.equal('initial');
    });
});