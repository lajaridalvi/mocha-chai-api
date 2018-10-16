var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var util = require("util");
var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
var config = require("../config");
var api = config.baseUrl
// var api1 = 'http://windows.binarynumbers.io'

//Movies Api Start Here
describe('MOVIES', function(){
    describe('AddMovies', function () {
        it('AddMovies', function (done) {
            var data;        
            chai.request(api)
            .post('/api/dashuser/AddMovies')       
            .set('content-Type', 'application/x-www-form-urlencoded')
             .send({
                    "Title": "Harry potter6",
                     "Year": "2011",
                    "Rated": "PG - 13",
                    "Runtime": "15 July 2018",
                    "Genre": "Adventure, Drama, Fantasy",
                    "Director": "David Yates",
                    "Writer": "Steve Kloves(screenplay), J.K.Rowling(novel)",
                    "Actor": "Ralph Fiennes,Michael, Gambon, Alan Rickman",
                    "Plot": "Harry,Ron and Hermione search for Voldemort 's",
                    "Language": "English",
                    "Country": "USA, UK",    
                    "Awards": "Nominated for 3 Oscars.Another 45 wins & 91 no",
                    "Poster": "https: //dotnetcodr.com/2014/01/17/getting-a-return-value-from-a-task-with-c/Metascore: 87",
                    "imdbRating": "8.1",
                    "imdbVotes": "653, 549",    
                    "imdbId": "tt122323",
                    "Type": "Movies",
                    "DVD": "11 Nov 2011",
                    //Internet_Movie_Database:8.1/10
                    "Rotten_Tomatoes": "96 %",
                    "Metacritic": "87",
                    "BoxOffice": "$381,000,185",
                    "Production": "Warner Bros.Pictures",
                    "Website": "http: //www.HarryPotter.com/",
                    "Response": "true",
                    "CreatedBy": "1",
                    "MovieID": "7",
                    "Released": "14 Nov 2011",
                    "ModifyBy": "1"
    
                    })
                    .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);           
                    done();
                    })
                })
             })

    //to update movie
    describe('UpdateMovie', function () {
        it('UpdateMovie', function (done) {
            chai.request(api)
            .post('/api/dashuser/UpdateMovie')             
            .set('content-Type', 'application/x-www-form-urlencoded')
            .send({
                        "Title": "Harry potter6",
                        "Year": "2011",
                        "Rated": "PG - 13",
                        "Runtime": "15 July 2018",
                        "Genre": "Adventure, Drama, Fantasy",
                        "Director": "David Yates",
                        "Writer": "Steve Kloves(screenplay), J.K.Rowling(novel)",
                        "Actor": "Ralph Fiennes,Michael, Gambon, Alan Rickman",
                        "Plot": "Harry,Ron and Hermione search for Voldemort 's",
                        "Language": "English",
                        "Country": "USA, UK",    
                        "Awards": "Nominated for 3 Oscars.Another 45 wins & 91 no",
                        "Poster": "https: //dotnetcodr.com/2014/01/17/getting-a-return-value-from-a-task-with-c/Metascore: 87",
                        "imdbRating": "8.1",
                        "imdbVotes": "653, 549",    
                        "imdbId": "tt122323",
                        "Type": "Movies",
                        "DVD": "11 Nov 2011",
                        //Internet_Movie_Database:8.1/10
                        "Rotten_Tomatoes": "96 %",
                        "Metacritic": "87",
                        "BoxOffice": "$381,000,185",
                        "Production": "Warner Bros.Pictures",
                        "Website": "http: //www.HarryPotter.com/",
                        "Response": "true",
                        "CreatedBy": "1",
                        "MovieID": "7",
                        "Released": "14 Nov 2011",
                        "ModifyBy": "1"
    
                    })
                    .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);            
                    done();
                    })
        })
    })
    //to delete movies
    describe('DeleteMovies', function () {
        it('DeleteMovies', function (done) {
            request.get({
                    url: config.baseUrl + '/api/dashuser/DeleteMovie?MovieID=4'
                },
                function (err, res, body) {
                    expect(res.statusCode).to.equal(200);
                    done();    
                }
            )    
        })
    })
})

// Cinema Start here
describe('CINEMA', function(){
    describe('AddCinema', function () {
        it('AddCinema', function (done) {
             chai.request(api)
            .post('/api/dashuser/AddCinema')             
            .set('content-Type', 'application/x-www-form-urlencoded')
            .send({
                "CinemaID":"0",
                "ThumbnailImage":"https://foruasp.net/t/1753848.aspx?My+class+model+doesn+t+exist+in+strongly+typed+view",
                "CinemaName":"PVR",
                "Address":"asasasas",
                "OrganizationID":"1",
                "Phone":"8879662228",
                "Email":"a@sd.com",
                "Location":"KYZ",
                "CountryID":"1",
                "StateID":"1",
                "CityID":"1",
                "Pincode":"400101",
                "Latitude":"25.84854",
                "Longitude":"-0.51555",
                "No_of_Schedules":"2",
                "Booking_CutoffTime":"230",
                "Booking_Max_No_Seats":"10",
                "CinemaIsActive":"true",
                "CreatedBy":"1",
                "ModifyBy":"0",
                "DataProviderID":"1"
            })            
            .end(function (err, res) {
            expect(res.statusCode).to.equal(200);         
            done();
            }
            )
        })               
    })
    //to updatecinem
    describe('UpdateCinema', function(){
        it('UpdateCinema', function(done){
            chai.request(api)
            .post('/api/dashuser/UpdateCinema')
            .set('content-Type', 'application/x-www-form-urlencoded')
            .send({
                "CinemaID":"0",
                "ThumbnailImage":"https://foruasp.net/t/1753848.aspx?My+class+model+doesn+t+exist+in+strongly+typed+view",
                "CinemaName":"PVR",
                "Address":"asasasas",
                "OrganizationID":"1",
                "Phone":"8879662228",
                "Email":"a@sd.com",
                "Location":"KYZ",
                "CountryID":"1",
                "StateID":"1",
                "CityID":"1",
                "Pincode":"400101",
                "Latitude":"25.84854",
                "Longitude":"-0.51555",
                "No_of_Schedules":"2",
                "Booking_CutoffTime":"230",
                "Booking_Max_No_Seats":"10",
                "CinemaIsActive":"true",
                "CreatedBy":"1",
                "ModifyBy":"0",
                "DataProviderID":"1"

            })
            .end(function(err,res){
                expect(res.statusCode).to.equal(200);
                done();
            })
        })
    })
})
//Organization Start Here
describe('ORGANIZATION',function(){
    // to add organization
describe('AddOrganization', function () {
    it('AddOrganization', function (done) {
        chai.request(api)
        .post('/api/dashuser/AddOrg')
        .set('content-Type', 'application/x-www-form-urlencoded')
        .send({
                    "OrganizationID":"1",
                    "OrganizationName":"OrganizationNa",
                    "ConfigID":"1",
                    "OrganizationType":"Organization",
                    "Logo":"https://forums.asp.net/t/1753848.aspx?My+class+model+doesn+t+exist+in+strongly+typed+view",
                    "OrgIsActive":"true",
                    "CreatedBy":"1",
                    "ModifyBy":"1"
             })
                .end(function (err, res) {
                 expect(res.statusCode).to.equal(200);            
                done();
                })      
            })
        })
//to update the organization
describe('UpadateOrg', function () {
    it('UpadateOrg', function (done) {
        chai.request(api)
        .post('/api/dashuser/UpdateOrg')          
        .set('content-Type', 'application/x-www-form-urlencoded')
        .send({
                    "OrganizationID":"1",
                    "OrganizationName":"OrganizationNa",
                    "ConfigID":"1",
                    "OrganizationType":"Organization",
                    "Logo":"https://forums.asp.net/t/1753848.aspx?My+class+model+doesn+t+exist+in+strongly+typed+view",
                    "OrgIsActive":"true",
                    "CreatedBy":"1",
                    "ModifyBy":"1"

                })              
                .end(function (err, res) {
                expect(res.statusCode).to.equal(200);        
                done();
                })
             })
        })
//to get organization list
describe('GetOrgList', function () {
    it('GetOrgList', function (done) {
        request.get({
                url: config.baseUrl + '/api/dashuser/GetOrgList'
            },
            function (err, res, body) {               
                expect(res.statusCode).to.equal(200);                
                done();

            }
        )
    })
})

})

// ********MASTER START HERE*********
describe('MASTER', function(){
    describe('GENRE', function(){
        describe('AddGenre', function () {
        
            it('AddGenre', function (done) {
                chai.request(api)
                .post('/api/dashuser/AddGenre')      
                .set('content-Type', 'application/x-www-form-urlencoded')
                .send({
                "GenreID":"0",
                "GenreName":"ABC",
                "GenreIsActive":"True",
                "CreatedBy":"2",
                "ModifyBy":"0"
            })
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200);         
                done();
            }
            )
        })
    })
    
    describe('UpdateGenre',function(){
        it('UpdateGenre', function(done){
            chai.request(api)
            .post('/api/dashuser/UpdateGenre')
            .set('content-Type', 'application/x-www-form-urlencoded')
            .send({
                "GenreID":"0",
                "GenreName":"ABC",
                "GenreIsActive":"True",
                "CreatedBy":"2",
                "ModifyBy":"0"
    
            })
            .end(function(err,res){
                expect(res.statusCode).to.equal(200);
                done();
            })
        })
    })
    describe('GetgenreList', function(){
        it('GetgenreList', function(done){
            request.get({
                url: config.baseUrl + '/api/dashuser/GetGenreList'
            },
            function(err, res){
                expect(res.statusCode).to.equal(200);
                done();
            }
    
            )
        })
    })
    })

    // ******Language start here*****
    describe('LANGUAGE',function(){
        // addlanguage
    describe('AddLanguage', function () {
    it('AddLanguage', function (done) {
        chai.request(api)
        .post('/api/dashuser/AddLanguage')
        .set('content-Type', 'application/x-www-form-urlencoded')
        .send({
                    "LanguageID":"1",
                    "LanguageName":"Hindi",
                    "languageIsActive":"true",
                    "CreatedBy":"1",
                    "Modify":"2"

                })
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);           
                    done();
                })
    })
})
//to updatethe language
describe('UpdateLanguage', function () {
    it('UpdateLanguage', function (done) {
        var data;
        chai.request(api)
        .post('/api/dashuser/UpdateLanguage')
         .set('content-Type', 'application/x-www-form-urlencoded')
         .send({
                    "LanguageID":"1",
                    "LanguageName":"Hindi",
                    "languageIsActive":"true",
                    "CreatedBy":"1",
                    "Modify":"2"

                })
                .end(function (err, res) {
                expect(res.statusCode).to.equal(200);            
                done();
                })
             })
        })

//get the lanuagelist

describe('GetLanguage', function () {
    it('GetLanguage', function (done) {
        request.get({
                url: config.baseUrl + '/api/dashuser/GetLanguageList'
            },
            function (err, res, body) {
                expect(res.statusCode).to.equal(200);
                 done();

            }
        )

    })
})
})

// InfoType start here******
describe('INFOTYPE',function(){
    describe('AddInfoType', function(){
        it('AddInfoType',function(done){
        chai.request(api)
        .post('/api/dashuser/AddInfoType')
        .set('content-Type', 'application/x-www-form-urlencoded')
        .send({
            "InfoTypeID":"0",
            "InfoTypeName":"XYZ",
            "InfoOF":"XYZinfo",
            "Desc_Info_Sub_type":"ZYZSubtype",
            "SortOrder":"Ascending",
            "InfoTypeIsActive":"false",
            "CreatedBy":"1",
            "ModifyBy":"0"

        })  
        .end(function(err,res){
            expect(res.statusCode).to.equal(200);
            done();
        })   
    })
    })

    //to update infotype
    describe('UpdateInfoType', function(){
        it('UpdateInfoType',function(done){
        chai.request(api)
        .post('/api/dashuser/UpdateInfoType')
        .set('content-Type', 'application/x-www-form-urlencoded')
        .send({
            "InfoTypeID":"0",
            "InfoTypeName":"XYZ",
            "InfoOF":"XYZinfo",
            "Desc_Info_Sub_type":"ZYZSubtype",
            "SortOrder":"Ascending",
            "InfoTypeIsActive":"false",
            "CreatedBy":"1",
            "ModifyBy":"0"

        })  
        .end(function(err,res){
            expect(res.statusCode).to.equal(200);
            done();
        })   
    })
    })

    //to getinfotype
    describe('GetInfoType',function(){
        it('GetInfoType', function(done){
            request.get({
                url: config.baseUrl + '/api/dashuser/GetInfoTypeList'
            },
            function(err, res){
                expect(res.statusCode).to.equal(200);
                done();
            }
            )

        })
    })

})
//Area Api start here
// describe('GetArea', function(){
//     describe('GetArea', function(done){
//         request.get({
//             url: config.baseUrl + '/api/dashuser/GetAreaList?CityID=7'
//         },
//         function(err,res){
//             expect(res.statusCode).to.equal(200);
//             done();
//         }
//         )

//     })
// })

//Cities api start here
describe('GetCityList', function(){
    it('GetCityList',function(done){
        request.get({
            url: config.baseUrl + '/api/dashuser/GetCityList?StateID=1'
        },
        function(err,res){
            expect(res.statusCode).to.equal(200);
            done();
        }
        )

    })
})


})

//user start here
describe('USER', function(){
    describe('AddUser', function(){
        it('AddUser', function(done){
            chai.request(api)
            .post('/api/dashuser/addUser')
            .set('content-Type', 'application/x-www-form-urlencoded')
            .send({
                "UserName":"Abhishek",
                "Password":"Abhi@123",
                "Email":"Abhi@binarynumbers.io",
                "LoginFrom":"Dashboard",
                "CreatedBy":"2",
                "IsActive":"1",
                "RoleID":"1",
                "Mobile":"7956236548",
                "ID":"0"

            })
            .end(function(err, res){
                expect(res.statusCode).to.equal(200);
                done();
            })
        })
    })
    //to update user
    describe('UpdateUser', function(){
        it('UpdateUser', function(done){
            chai.request(api)
            .post('/api/dashuser/UpdateUser')
            .set('content-Type', 'application/x-www-form-urlencoded')
            .send({
                "UserName":"Abhishek",
                "Password":"Abhi@123",
                "Email":"Abhi@binarynumbers.io",
                "LoginFrom":"Dashboard",
                "CreatedBy":"2",
                "IsActive":"1",
                "RoleID":"1",
                "Mobile":"7956236548",
                "ID":"0"

            })
            .end(function(err, res){
                expect(res.statusCode).to.equal(200);
                done();
            })
        })
    })

    //to deleteuser
    describe('DeleteUser', function(){
        it('DeleteUser', function(done){
            request.get({
                    url: config.baseUrl + '/api/dashuser/DeleteUser?UserID=3'
            },
            function(err, res){
                expect(res.statusCode).to.equal(200);
                done();
            }
            )
        })
    })

    //to get list of user

    describe('GetUserList', function(){
        it('GetUserList', function(done){
            request.get({
                url: config.baseUrl + '/api/dashuser/userlist'

            },
            function(err,res){
                expect(res.statusCode).to.equal(200);
                
                done();
            }
            )
        })
    })
} )


