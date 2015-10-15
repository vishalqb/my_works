describe('getData', function () {
    var mockResource, httpBackend, result;
    beforeEach(module('app'));
    describe('load images', function() {
        it('should exist images', inject(function(getData){
            expect(getData.images).to.exist;
            expect(getData.selected).to.exist;
        }));
    });
    describe('api data', function() {
        beforeEach(function(){
            angular.mock.inject(function($injector) {
                httpBackend = $injector.get('$httpBackend');
                mockResource = $injector.get('getData');
            });
        });
        it('should make a request to the api', (function(){
            httpBackend.when('GET','http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data').respond(
                function() {
                    result = {name: 'success'};
                    return result;
                }
            );
            result = mockResource.retrieve('http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data');
            httpBackend.flush();
            expect(result.name).to.equal('success');
        }));
    });
});