// base code was found at http://stackoverflow.com/questions/26641088/exercism-javascript-hamming-exercise-getting-undefined-is-not-a-function

//function computes the hamming distance between two strands of nucleotides
var Hamming = {
    compute: function(strand1, strand2) {
        var diff = 0;
        
        if(strand1.length != strand2.length){
        	throw new Error ('DNA strands must be of equal length.');
        };


        // loop will check the strands and then compare the nucleotides
        for (i = 0; i < strand2.length; i++) {
            //if the nucleotide in the first strand does not equal the same character in the other strand, the counter (diff) will be incremented to keep track of the total differences
            if (strand1[i] != strand2[i]) {
                diff = diff + 1;            
            };
        };
        return diff;
    }
};

module.exports = Hamming;

/*var compute;

compute = function(s1, s2) {

};

modules.exports = {
	compute: compute
};
*/