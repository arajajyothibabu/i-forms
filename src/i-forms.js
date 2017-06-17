/**
 * Created by jyothi on 17/6/17.
 */
(function () {

    document.addEventListener('DOMContentLoaded', function() {
        useOurIntelligence()
    });

    function useOurIntelligence() {

    }

    var elements = document.querySelector("input[type='email'],input[type='text']");

    element.addEventListener('input', function(e){
        var value = e.target.value;
        var detection = detector(input);
        console.log(detection.status, detection.message);
    });

    function detector(input){ //for mail
        var output = {};
        var message = "";
        var splitAt = input.split(/@/);
        var splitDot = input.split(/\./);
        if(splitAt.length === 2){
            if(splitAt[0]){

            }
        }
    }


    function charCounts(str){
        var counts = {};
        for(var i; i < str.length; i++){
            if(counts.hasOwnProperty(str[i])){
                counts[str[i]]++;
            }else{
                counts[str[i]] = 1;
            }
        }
    }

    function isCountsSuspecious(counts){
        var keys = Object.keys(counts);
        var values = Object.values(counts);
        return sumOfArrayElements(values) - sumOfArrayElements(keys) > 7 || keys.length === 1;
    }

    function sumOfArrayElements(arr){
        return arr.reduce(function(a, b){
            return +a + b;
        }, 0);
    }
    
    function iForms() {
        //TODO:
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = iForms;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define('i-forms', [], function () {
            return iForms;
        });
    } else {
        window.iForms = iForms;
    }

}());