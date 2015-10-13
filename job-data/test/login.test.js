describe('loginController', function () {
    var scope, loginController, locationMock    ;
    beforeEach(module('app'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        locationMock = sinon.stub({path:function(){}});
        loginController  = $controller('loginController', {
            $scope: scope,
            $location: locationMock 
        });
    })); 
    it('should exist',function(){
  		expect(loginController).to.exist;
  	});
    it('should be undefined at first', function () {
        expect(scope.username).to.be.undefined;
        expect(scope.password).to.be.undefined;
    });
    it('assings username to user and password to password', function () {
        
        scope.validate();
        
        expect(scope.username).to.equal('user');
        expect(scope.username).to.equal('password');
expect(locationMock.path.calledWith('/forcast')).to.be.true;
    });
});

