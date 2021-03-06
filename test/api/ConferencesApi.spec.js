/**
 * FrankenSpec
 * Bandwidth's Frankensteined API Spec
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NodeSdk);
  }
}(this, function(expect, NodeSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NodeSdk.ConferencesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ConferencesApi', function() {
    describe('downloadConferenceRecording', function() {
      it('should call downloadConferenceRecording successfully', function(done) {
        //uncomment below and update the code to test downloadConferenceRecording
        //instance.downloadConferenceRecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConference', function() {
      it('should call getConference successfully', function(done) {
        //uncomment below and update the code to test getConference
        //instance.getConference(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConferenceMember', function() {
      it('should call getConferenceMember successfully', function(done) {
        //uncomment below and update the code to test getConferenceMember
        //instance.getConferenceMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConferenceRecording', function() {
      it('should call getConferenceRecording successfully', function(done) {
        //uncomment below and update the code to test getConferenceRecording
        //instance.getConferenceRecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConferenceRecordings', function() {
      it('should call getConferenceRecordings successfully', function(done) {
        //uncomment below and update the code to test getConferenceRecordings
        //instance.getConferenceRecordings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConferences', function() {
      it('should call getConferences successfully', function(done) {
        //uncomment below and update the code to test getConferences
        //instance.getConferences(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyConference', function() {
      it('should call modifyConference successfully', function(done) {
        //uncomment below and update the code to test modifyConference
        //instance.modifyConference(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyConferenceMember', function() {
      it('should call modifyConferenceMember successfully', function(done) {
        //uncomment below and update the code to test modifyConferenceMember
        //instance.modifyConferenceMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
