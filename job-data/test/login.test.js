describe('loginController', function () {
    var scope, loginController, locationMock;
    beforeEach(module('app'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        locationMock = sinon.stub({path:function(){}});
        loginController  = $controller('loginController', {
            $scope: scope,
            $location: locationMock 
        });
    })); 
    it('should exist logincontroller',function(){
  		expect(loginController).to.exist;
  	});
    it('should be undefined at first', function () {
        expect(scope.username).to.be.undefined;
        expect(scope.password).to.be.undefined;
    });
    it('should change location to /home', function() {
        scope.username = "user";
        scope.password = "password";
        scope.validate();
        expect(locationMock.path.calledWith('/home')).to.be.true;
    });
    
});

