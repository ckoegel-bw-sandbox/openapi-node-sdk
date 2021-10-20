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
    instance = new NodeSdk.RecordingsApi();
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

  describe('RecordingsApi', function() {
    describe('deleteCallTranscription', function() {
      it('should call deleteCallTranscription successfully', function(done) {
        //uncomment below and update the code to test deleteCallTranscription
        //instance.deleteCallTranscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRecording', function() {
      it('should call deleteRecording successfully', function(done) {
        //uncomment below and update the code to test deleteRecording
        //instance.deleteRecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRecordingMedia', function() {
      it('should call deleteRecordingMedia successfully', function(done) {
        //uncomment below and update the code to test deleteRecordingMedia
        //instance.deleteRecordingMedia(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadCallRecording', function() {
      it('should call downloadCallRecording successfully', function(done) {
        //uncomment below and update the code to test downloadCallRecording
        //instance.downloadCallRecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCallRecording', function() {
      it('should call getCallRecording successfully', function(done) {
        //uncomment below and update the code to test getCallRecording
        //instance.getCallRecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCallRecordings', function() {
      it('should call getCallRecordings successfully', function(done) {
        //uncomment below and update the code to test getCallRecordings
        //instance.getCallRecordings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCallTranscription', function() {
      it('should call getCallTranscription successfully', function(done) {
        //uncomment below and update the code to test getCallTranscription
        //instance.getCallTranscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyCallRecordingState', function() {
      it('should call modifyCallRecordingState successfully', function(done) {
        //uncomment below and update the code to test modifyCallRecordingState
        //instance.modifyCallRecordingState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryCallRecordings', function() {
      it('should call queryCallRecordings successfully', function(done) {
        //uncomment below and update the code to test queryCallRecordings
        //instance.queryCallRecordings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transcribeCallRecording', function() {
      it('should call transcribeCallRecording successfully', function(done) {
        //uncomment below and update the code to test transcribeCallRecording
        //instance.transcribeCallRecording(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));